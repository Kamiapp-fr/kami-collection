import { css, html, LitElement } from 'lit';
import {
  customElement, property, query, state,
} from 'lit/decorators.js';
import Mustache, { OpeningAndClosingTags } from 'mustache';

/**
 * @summary Infinite list based on web component.
 * @tag kami-infinite-list
 */
@customElement('kami-infinite-list')
export default class KamiInfiniteList extends LitElement {
  static styles = css`
    .kami-infinite-list {
      display: var(--kami-infinite-list-display, block);
      height: var(--kami-infinite-list-height, 100%);
      flex-wrap: var(--kami-infinite-list-wrap, wrap);
      justify-content: var(--kami-infinite-list-justify, flex-start);
      align-items: var(--kami-infinite-list-align, center);
      gap: var(--kami-infinite-list-gap, 10px);
      overflow: auto; 
    }
  `;

  private get delimiters() {
    return [this.openDelimiter, this.closeDelimiter] as OpeningAndClosingTags;
  }

  @property({ type: String })
  public src?: string;

  @property({ type: Number, reflect: true })
  public page = 1;

  @property({ type: Number })
  public limit = 10;

  @property({ type: String, attribute: 'query-limit' })
  public queryLimit = '_limit';

  @property({ type: String, attribute: 'query-page' })
  public queryPage = '_page';

  @property({ type: String, attribute: 'open-delimiter' })
  public openDelimiter = '${';

  @property({ type: String, attribute: 'end-delimiter' })
  public closeDelimiter = '}';

  @property({ type: Number, attribute: 'loading-at' })
  public loadingAt = 0;

  private template?: HTMLTemplateElement;

  private isLoading = false;

  private index = 0;

  @state()
  private data: any[] = [];

  @query('#container')
  private container!: HTMLDivElement;

  protected async firstUpdated() {
    if (!(this.querySelector('template') instanceof HTMLTemplateElement) || !this.src) {
      return;
    }

    this.template = this.querySelector('template') as HTMLTemplateElement;
    await this.load();
  }

  private async load() {
    if (!this.src) {
      return;
    }

    this.isLoading = true;
    this.dispatchEvent(new CustomEvent('loading-data'));

    try {
      const data = await this.get({
        src: this.src,
        limit: this.limit,
        page: this.page,
      });

      this.data.push(...data);
      data.forEach(this.appendItem.bind(this));
      this.dispatchEvent(new CustomEvent('loading-success'));
    } catch (error) {
      this.dispatchEvent(new CustomEvent('loading-error'));
    } finally {
      this.isLoading = false;
    }
  }

  private async get({ src, limit, page }: { src: string, limit?: number, page?: number }) {
    const params = new URLSearchParams({
      [this.queryLimit]: (limit || this.limit).toString(),
      [this.queryPage]: (page || this.page).toString(),
    });

    const response = await fetch(`${src}?${params}`);
    const data = await response.json();

    return data;
  }

  private appendItem(data: unknown[]) {
    const element = this.createItem(data);

    if (!element) {
      return;
    }

    element.setAttribute('data-infinite-list-index', this.index.toString());
    element.addEventListener('click', (e) => {
      const index = Number(element.dataset.infiniteListIndex);

      this.onClickItem(e as MouseEvent, index);
    });

    this.container.append(element);
    this.index += 1;
  }

  private createItem(data: unknown) {
    if (!(this.template instanceof HTMLTemplateElement)) {
      return undefined;
    }

    const item = document.createElement('div');
    const template = this.template.cloneNode(true) as HTMLTemplateElement;

    item.classList.add('kami-infinite-list__item');
    template.innerHTML = Mustache.render(
      template.innerHTML,
      data,
      {},
      this.delimiters,
    );

    item.append(document.importNode(template.content, true));

    return item;
  }

  private async onScroll() {
    const { scrollHeight, clientHeight, scrollTop } = this.container;

    if ((scrollHeight - scrollTop - this.loadingAt > clientHeight) || this.isLoading) {
      return;
    }

    this.page += 1;
    await this.load();
  }

  private onClickItem(e: MouseEvent, index: number) {
    this.dispatchEvent(new CustomEvent('click-item', {
      detail: {
        element: e.target,
        index,
      },
    }));
  }

  protected render() {
    return html`
      <div id="container" @scroll="${this.onScroll}" class="kami-infinite-list">
        
      </div>
    `;
  }
}
