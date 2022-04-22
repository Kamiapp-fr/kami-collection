import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-element')
export default class AppElement extends LitElement {
  static styles = css`
    .app {
      width: 100%;
      height: 100vh;
      background-color: var(--kami-theme-background);
      color: var(--kami-theme-text);
      font-family: 'Inter', sans-serif;
    }
  `;

  protected render() {
    return html`
      <div class="app">
        <slot></slot>
      </div>
    `;
  }
}
