import KamiSearchBar from '@kamiapp/search-bar';
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

type KamiInfiniteListMap = { [k:string]: unknown };

if (!customElements.get('kami-search-bar')) {
  customElements.define('kami-search-bar', KamiSearchBar);
}

/**
 * @summary Infinite list based on web component.
 * @tag kami-infinite-list
 *
 * @property {string} src - Url used to get data.
 * @property {number?} page - Current page display.
 * @property {number?} limit - Number of item by page.
 * @property {string?} search - Search query.
 * @property {number?} order - Sort order *(1 or -1)*.
 * @property {string?} queryLimit - Update the limit query name.
 * @property {string?} queryPage - Update the page query name.
 * @property {string?} querySearch - Update the search query name.
 * @property {string?} querySort - Update the sort query name.
 * @property {string?} queryAsc - Use this value for the sort query instead of *1*.
 * @property {string?} queryDesc - Use this value for the sort query instead of *-1*.
 * @property {string?} openDelimiter - Custom open delimiter for template render.
 * @property {string?} closeDelimiter - Custom close delimiter for template render.
 * @property {number?} loadingAt - Define when data must be loaded.
 * @property {boolean?} useSearchBar - Display the **kami-search-bar**.
 * @property {string?} nested - Get data from a nested field.
 * @property {string[]?} stringify - Fields of the data to be stringified.
 *
 * @cssprop [--kami-infinite-list-height=100%] - Height of the list.
 * @cssprop [--kami-infinite-list-display=block] - Display style of the list.
 * @cssprop [--kami-infinite-list-wrap=wrap] - Wrap item or not *(only on display: flex)*.
 * @cssprop [--kami-infinite-list-justify=flex-start] - Justify style *(only on display: flex)*.
 * @cssprop [--kami-infinite-list-align=center] - Align style *(only on display: flex)*.
 * @cssprop [--kami-infinite-list-gap=10px] - Define gap between items *(only on display: flex)*.
 *
 * @fires loading-data - Emitted when data is loading.
 * @fires loading-success - Emitted when data is loaded successfuly.
 * @fires loading-error - Emitted when an error appear.
 * @fires click-item - Emitted when an item of the list is clicked.
 *
 * @slot loading - Displayed when data are loading.
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

  @property({ type: String, attribute: 'close-delimiter' })
  public closeDelimiter = '}';

  @property({ type: Number, attribute: 'loading-at' })
  public loadingAt = 0;

  @property({ type: Boolean, attribute: 'use-search-bar' })
  public useSearchBar = false;

  @property({ type: String })
  public nested?: string;

  @property({ type: Array })
  public stringify: string[] = [];

  private template?: HTMLTemplateElement;

  private isLoading = false;

  private index = 0;

  private end = false;

  @state()
  private data: any[] = [];

  @query('#container')
  private container!: HTMLDivElement;

  @query('#loading')
  private loadingSlot!: HTMLSlotElement;

  protected async firstUpdated() {
    if (!(this.querySelector('template') instanceof HTMLTemplateElement) || !this.src) {
      return;
    }

    this.template = this.querySelector('template') as HTMLTemplateElement;
    await this.load();
  }

  /**
   * Filters current and futur data display into the list.
   * @param {string} value - Filter the list.
   */
  public async filter(value: string): Promise<void> {
    this.search = value;
    this.clear();
    await this.load();
  }

  /**
   * Sorts current and futur data display into the list.
   * @param {1 | -1} sort - Sort order.
   */
  public async sort(sort: number): Promise<void> {
    this.order = sort;
    this.clear();
    await this.load();
  }

  /**
   * Clears current data display.
   * It will reset the **page** property to 1
   * and remove all DOM items into the list.
   */
  public clear() {
    this.page = 1;
    this.data = [];
    this.end = false;
    this.container.querySelectorAll('.kami-infinite-list__item').forEach((e) => e.remove());
  }

  private async load() {
    if (!this.src) {
      return;
    }

    this.isLoading = true;
    this.loadingSlot.style.display = 'block';
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

      this.loadingSlot.style.display = 'none';
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
    const [url, base] = src.split('?');
    const params = new URLSearchParams(base);

    params.append(this.queryLimit, (limit || this.limit).toString());
    params.append(this.queryPage, (page || this.page).toString());

    if (search) {
      params.append(this.querySearch, search);
    }

    if (sort) {
      params.append(this.querySort, sort.toString());
    }

    const response = await fetch(`${url.toString()}?${params.toString()}`);
    const data = await response.json();

    if (this.nested && data[this.nested]) {
      return data[this.nested];
    }

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

    this.container.insertBefore(element, this.loadingSlot);
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
      this.stringifyData(data),
      {},
      this.delimiters,
    );

    item.append(document.importNode(template.content, true));

    return item;
  }

  private stringifyData(data: unknown): KamiInfiniteListMap | unknown {
    if (!data || typeof data !== 'object') {
      return data;
    }

    const typed = data as KamiInfiniteListMap;

    return Object.keys(typed).reduce((prev, key) => ({
      ...prev,
      [key]: this.stringify.includes(key)
        ? JSON.stringify(typed[key])
        : typed[key],
    }), {});
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
        >

          <slot id="loading" name="loading"></slot>
        </div>
      </div>
    `;
  }
}
