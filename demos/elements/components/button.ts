import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('button-element')
export default class ButtonElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .button {
      width: 173px;
      height: 51px;
      border-radius: 7px;
      border: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      cursor: pointer;
      color: var(--kami-theme-background);
      background:  var(--kami-theme-text);
    }

    .button--background {
      color: var(--kami-theme-white);
      background: linear-gradient(94.7deg, #34D3CE 3.12%, #4E7DE6 102.14%);
    }

    .button--stroke {
      color: var(--kami-theme-text);
      background: transparent;
      border: 1px solid var(--kami-theme-text);
    }

    .button--small {
      width: 140px;
    }
  `;

  @property()
  private readonly stroke: boolean = false;

  @property()
  private readonly background: boolean = false;

  @property()
  private readonly small: boolean = false;

  @property()
  private readonly href: string = '';

  protected render() {
    return html`
      <a href="${this.href}">
        <button 
          class="
            button
            ${this.stroke ? 'button--stroke' : ''}
            ${this.background ? 'button--background' : ''}
            ${this.small ? 'button--small' : ''}
          "
        >
          <slot></slot>
        </button>
      </a>
    `;
  }
}
