import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import Mustache, { OpeningAndClosingTags } from 'mustache';

/**
 * @summary Infinite list based on web component.
 * @tag kami-infinite-list
 */
@customElement('kami-infinite-list')
export default class KamiInfiniteList extends LitElement {
  private get delimiters() {
    return [this.openDelimiter, this.closeDelimiter] as OpeningAndClosingTags;
  }

  @property({ type: String })
  public src?: string;

  @property({ type: Number, reflect: true })
  public page = 0;

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

  private template?: HTMLTemplateElement;

  @state()
  private data: any[] = [];

  protected async firstUpdated() {
    if (!(this.querySelector('template') instanceof HTMLTemplateElement) || !this.src) {
      return;
    }

    this.template = this.querySelector('template') as HTMLTemplateElement;
    this.addData(await this.get({ src: this.src }));
  }

  private addData(data: any[]) {
    this.data = [...this.data, ...data];
  }

  private async get({ src, limit, page }: { src: string, limit?: number, page?: number }) {
    const query = new URLSearchParams({
      [this.queryLimit]: (limit || this.limit).toString(),
      [this.queryPage]: (page || this.page).toString(),
    });

    const response = await fetch(`${src}?${query}`);
    const data = await response.json();

    return data;
  }

  private createElement(data: unknown) {
    if (!(this.template instanceof HTMLTemplateElement)) {
      return undefined;
    }

    const template = this.template.cloneNode(true) as HTMLTemplateElement;

    template.innerHTML = Mustache.render(
      template.innerHTML,
      data,
      {},
      this.delimiters,
    );

    return document.importNode(template.content, true);
  }

  protected render() {
    return html`
      <div class="kami-infinite-list">
        ${this.data.map((d) => html`
          ${this.createElement(d)}
        `)}
      </div>
    `;
  }
}
