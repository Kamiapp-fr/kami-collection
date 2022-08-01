import '@kamiapp/transition';
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import {
  mdiMagnify,
  mdiClose,
  mdiSortAscending,
  mdiSortDescending,
} from '@mdi/js';

/**
 * @summary Search bar component to find and sort data.
 * @tag kami-search-bar
 *
 * @property {string} value - The input value.
 * @property {number} sort - Set the sort button to **asc** or **desc** *(1 or -1)*.
 * @property {string} placeholder - This input placeholder.
 * @property {boolean} disableSort - Hide the sort button.
 *
 * @cssprop [--kami-search-border-color=rgba(var(--kami-theme-text-rgb), 0.2)] - Border color.
 * @cssprop [--kami-search-border-size=1px] - Border size.
 * @cssprop [--kami-search-background-blur=4px] - Blur into the background.
 * @cssprop [--kami-search-text-color=var(--kami-theme-text)] - Color of the input value.
 * @cssprop [--kami-search-icon-color=rgba(var(--kami-theme-text-rgb), 0.5)] - Icons color.
 * @cssprop [--kami-search-icon-size=30px] - Icons size.
 * @cssprop [--kami-search-background-color=rgba(var(--kami-theme-text-rgb), 0.05)] - Background
 * color.
 * @cssprop [--kami-search-placeholder-color=rgba(var(--kami-theme-text-rgb), 0.3)] - Placeholder
 * color.
 *
 * @fires search - Emitted when the search is submited
 * @fires change - Emitted when the search is updated
 * @fires sort - Emitted when the sort button is clicked
 * @fires clear - Emitted when the search input is clear
 */
@customElement('kami-search-bar')
export default class KamiSearchBar extends LitElement {
  static styles = css`
    :host {
      display: block;

      --kami-search-border-color: rgba(var(--kami-theme-text-rgb), 0.2);
      --kami-search-border-size: 1px;

      --kami-search-background-color: rgba(var(--kami-theme-text-rgb), 0.05);
      --kami-search-background-blur: 4px;

      --kami-search-text-color: var(--kami-theme-text);
      --kami-search-placeholder-color: rgba(var(--kami-theme-text-rgb), 0.3);

      --kami-search-icon-color: rgba(var(--kami-theme-text-rgb), 0.5);
      --kami-search-icon-size: 30px;
    }

    .kami-search-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
      border: solid var(--kami-search-border-size) var(--kami-search-border-color);
      border-radius: 10px;
      padding: 12px 15px;
      box-sizing: border-box;
      background-color: var(--kami-search-background-color);
      backdrop-filter: blur(var(--kami-search-background-blur));
    }

    .kami-search-bar:focus-within {
      outline: 5px auto Highlight;
      outline: 5px auto -webkit-focus-ring-color;
    }

    .kami-search-bar__input {
      flex-grow: 1;
      border: none;
      background: transparent;
      padding: 5px;
      font-size: 20px;
      margin: 0px 10px;
      min-width: 0;
      color: var(--kami-search-text-color);
      outline: none;
    }

    .kami-search-bar__input::placeholder {
      color: var(--kami-search-placeholder-color);
    }

    .kami-search-bar__action {
      display: flex;
    }

    .kami-search-bar__close {
      margin-right: 7px;
      cursor: pointer;
    }

    .kami-search-bar__sort {
      padding-left: 12px;
      border-left: solid 1px var(--kami-search-icon-color);
      cursor: pointer;
    }

    .kami-search-bar__icon {
      fill: var(--kami-search-icon-color);
      width: var(--kami-search-icon-size);
      height: var(--kami-search-icon-size);
    }
  `;

  private get sortIcon() {
    return this.sort === -1
      ? mdiSortDescending
      : mdiSortAscending;
  }

  @property({ type: String, reflect: true })
  public value = '';

  @property({ type: Number, reflect: true })
  public sort = 1;

  @property({ type: String })
  public placeholder = '';

  @property({ type: Boolean, attribute: 'disable-sort' })
  public disableSort = false;

  @query('#search')
  private searchEl!: HTMLInputElement;

  private emitSortEvent(sort: number) {
    this.dispatchEvent(new CustomEvent('sort', {
      detail: {
        sort,
      },
    }));
  }

  private emitValueEvent(name: string) {
    /**
     * @ignore
     */
    this.dispatchEvent(new CustomEvent(name, {
      detail: {
        search: this.value,
      },
    }));
  }

  private emitClearEvent() {
    this.dispatchEvent(new CustomEvent('clear'));
  }

  private onSubmit(e: Event) {
    e.preventDefault();

    this.emitValueEvent('search');
  }

  private onInput(e: Event) {
    e.preventDefault();

    this.value = this.searchEl.value;
    this.emitValueEvent('change');

    if (!this.value) {
      this.emitClearEvent();
    }
  }

  private onClear() {
    this.value = '';
    this.searchEl.value = '';
    this.emitClearEvent();
  }

  private onSortClicked() {
    this.sort = this.sort === 1 ? -1 : 1;
    this.emitSortEvent(this.sort);
  }

  private renderIcon(path: string) {
    return html`
      <svg class="kami-search-bar__icon" viewBox="0 0 24 25">
        <path d=${path}></path>
      </svg>
    `;
  }

  protected render() {
    return html`
      <form @submit="${this.onSubmit}" class="kami-search-bar" autocomplete="off">
        ${this.renderIcon(mdiMagnify)}

        <input 
          id="search" 
          class="kami-search-bar__input" 
          autocomplete="off" 
          value="${this.value}"
          placeholder="${this.placeholder}"
          @input="${this.onInput}" 
        >

        <div class="kami-search-bar__action">
          <kami-transition transition="slide-x" duration="200" from="10" to="1" show="${this.value !== ''}">
            <div @click="${this.onClear}" class="kami-search-bar__close">
              ${this.renderIcon(mdiClose)}
            </div>
          </kami-transition>

          ${!this.disableSort ? html`
            <div @click="${this.onSortClicked}" class="kami-search-bar__sort">
              ${this.renderIcon(this.sortIcon)}
            </div>
          ` : ''}  
        </div>
      </form>
    `;
  }
}
