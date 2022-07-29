import '@kamiapp/transition';
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { mdiMagnify, mdiClose, mdiSortAscending } from '@mdi/js';

/**
 * @summary Search bar component to find and sort data.
 * @tag kami-search-bar
 *
 * @fires search - Emitted when the search is submited
 * @fires change - Emitted when the search is updated
 */
@customElement('kami-search-bar')
export default class KamiSearchBar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .kami-search-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
      border: solid 2px rgba(var(--kami-theme-text-rgb), 0.5);
      border-radius: 10px;
      padding: 12px 15px;
      box-sizing: border-box;
      background-color: rgba(var(--kami-theme-text-rgb), 0.1);
      backdrop-filter: blur(4px);
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
      color: var(--kami-theme-text);
      outline: none;
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
      border-left: solid 1px rgba(var(--kami-theme-text-rgb), 0.5);
    }

    .kami-search-bar__icon {
      fill: rgba(var(--kami-theme-text-rgb), 0.5);
      width: var(--kami-search-bar-icon-size, 30px);
      height: var(--kami-search-bar-icon-size, 30px);
    }
  `;

  @property({ type: String, reflect: true })
  public value = '';

  @query('#search')
  private searchEl!: HTMLInputElement;

  private emitValueEvent(name: string) {
    this.dispatchEvent(new CustomEvent(name, {
      detail: {
        search: this.value,
      },
    }));
  }

  private onSubmit(e: Event) {
    e.preventDefault();

    this.emitValueEvent('search');
  }

  private onInput(e: Event) {
    e.preventDefault();

    this.value = this.searchEl.value;
    this.emitValueEvent('change');
  }

  private onClear() {
    this.value = '';
    this.searchEl.value = '';
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
        <input @input="${this.onInput}"  class="kami-search-bar__input" autocomplete="off" id="search" value="${this.value}">
        <div class="kami-search-bar__action">
          <kami-transition transition="slide-x" duration="200" from="10" to="1" show="${this.value !== ''}">
            <div @click="${this.onClear}" class="kami-search-bar__close">
              ${this.renderIcon(mdiClose)}
            </div>
          </kami-transition>
          <div class="kami-search-bar__sort">
            ${this.renderIcon(mdiSortAscending)}
          </div>  
        </div>
      </form>
    `;
  }
}
