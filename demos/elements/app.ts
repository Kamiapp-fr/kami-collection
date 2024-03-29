import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-element')
export default class AppElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .app {
      width: 100%;
      height: 100vh;
      background-color: var(--kami-theme-background);
      color: var(--kami-theme-text);
      font-family: 'Inter', sans-serif;
      overflow: auto;
      overflow-x: hidden;
    }
  `;

  protected render() {
    return html`
      <div class="app">
        <menu-element></menu-element>
        <slot></slot>
        <footer-element></footer-element>
      </div>
    `;
  }
}
