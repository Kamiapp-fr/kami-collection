import '@kamiapp/search-bar';
import { css, html, LitElement } from 'lit';
import {
  customElement, property, query, state,
} from 'lit/decorators.js';
import Mustache, { OpeningAndClosingTags } from 'mustache';

interface KamiInfiniteListQuery {
  src: string,
  limit?: number,
  page?: number,
  sort?: number | string,
  search?: string,
}

/**
 * @summary Infinite list based on web component.
 * @tag kami-infinite-list
 */
@customElement('kami-infinite-list')
export default class KamiInfiniteList extends LitElement {
  static styles = css`
    .kami-infinite-list {
      height: var(--kami-infinite-list-height, 100%);
      display: flex;
      flex-direction: column;
    }

    .kami-infinite-list__container {
      display: var(--kami-infinite-list-display, block);
      flex-wrap: var(--kami-infinite-list-wrap, wrap);
      justify-content: var(--kami-infinite-list-justify, flex-start);
      align-items: var(--kami-infinite-list-align, center);
      gap: var(--kami-infinite-list-gap, 10px);
      overflow: auto; 
      flex-grow: 1;
    }

    .kami-infinite-list__search {
      margin-bottom: 10px;
    }
  `;

  private get delimiters() {
    return [this.openDelimiter, this.closeDelimiter] as OpeningAndClosingTags;
  }

  private get customSort() {
    if (this.order === 1 && this.queryAsc) {
      return this.queryAsc;
    }

    if (this.order === -1 && this.queryDesc) {
      return this.queryDesc;
    }

    return this.order as number;
  }

  @property({ type: String })
  public src?: string;

  @property({ type: Number, reflect: true })
  public page = 1;

  @property({ type: Number })
  public limit = 10;

  @property({ type: String })
  public search?: string;

  @property({ type: Number, reflect: true })
  public order = 0;

  @property({ type: String, attribute: 'query-limit' })
  public queryLimit = '_limit';

  @property({ type: String, attribute: 'query-page' })
  public queryPage = '_page';

  @property({ type: String, attribute: 'query-search' })
  public querySearch = '_search';

  @property({ type: String, attribute: 'query-sort' })
  public querySort = '_sort';

  @property({ attribute: 'query-asc' })
  public queryAsc?: string | number;

  @property({ attribute: 'query-desc' })
  public queryDesc?: string | number;

  @property({ type: String, attribute: 'open-delimiter' })
  public openDelimiter = '${';

  @property({ type: String, attribute: 'end-delimiter' })
  public closeDelimiter = '}';

  @property({ type: Number, attribute: 'loading-at' })
  public loadingAt = 0;

  @property({ type: Boolean, attribute: 'use-search-bar' })
  public useSearchBar = false;

  private template?: HTMLTemplateElement;

  private isLoading = false;

  private index = 0;

  private end = false;

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

  public async filter(value: string) {
    this.search = value;
    this.clear();
    await this.load();
  }

  public async sort(sort: number) {
    this.order = sort;
    this.clear();
    await this.load();
  }

  public clear() {
    this.page = 1;
    this.data = [];
    this.end = false;
    this.container.innerHTML = '';
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
        search: this.search,
        sort: this.customSort,
      });

      this.data.push(...data);
      data.forEach(this.appendItem.bind(this));

      if (data.length === 0) {
        this.end = true;
      }

      this.dispatchEvent(new CustomEvent('loading-success'));
    } catch (error) {
      this.dispatchEvent(new CustomEvent('loading-error'));
    } finally {
      this.isLoading = false;
    }
  }

  private async get({
    src,
    limit,
    page,
    sort,
    search,
  }: KamiInfiniteListQuery) {
    const url = new URL(src);

    url.searchParams.append(this.queryLimit, (limit || this.limit).toString());
    url.searchParams.append(this.queryPage, (page || this.page).toString());

    if (search) {
      url.searchParams.append(this.querySearch, search);
    }

    if (sort) {
      url.searchParams.append(this.querySort, sort.toString());
    }

    const response = await fetch(url.toString());
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

    if ((scrollHeight - scrollTop - this.loadingAt > clientHeight) || this.isLoading || this.end) {
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

  private async onSearch({ detail }: CustomEvent) {
    const { search } = detail;

    if (!search) {
      return;
    }

    await this.filter(search);
  }

  private async onClearSearch() {
    this.search = undefined;
    this.clear();
    await this.load();
  }

  private async onSort({ detail }: CustomEvent) {
    const { sort } = detail;

    if (!sort) {
      return;
    }

    await this.sort(sort);
  }

  private renderSearchBar() {
    if (!this.useSearchBar) {
      return html``;
    }

    return html`
      <kami-search-bar 
        class="kami-infinite-list__search"
        @search="${this.onSearch}" 
        @sort="${this.onSort}" 
        @clear="${this.onClearSearch}" 
      ></kami-search-bar>
    `;
  }

  protected render() {
    return html`
      <div class="kami-infinite-list">
        ${this.renderSearchBar()}  
        <div 
          id="container" 
          class="kami-infinite-list__container" 
          @scroll="${this.onScroll}" 
        ></div>
      </div>
    `;
  }
}
