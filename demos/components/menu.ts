import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('menu-element')
export default class MenuElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 65px;
    }

    .menu {
      display: flex;
      position: fixed;
      width: 100%;
      align-items: center;
      justify-content: center;
      height: 65px;
      border-bottom:  1px solid var(--kami-theme-border-color);
    }

    .menu__content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1000px;
    }
  `;

  @state()
  private theme?: 'light' | 'dark';

  connectedCallback(): void {
    super.connectedCallback();

    document.addEventListener('theme', ({ detail }) => {
      this.theme = detail.theme;
    });
  }

  protected render() {
    return html`
      <header class="menu">
        <div class="menu__content">
          <div class="menu__logo">
            <img src="../img/kami-${this.theme || 'light'}.png">
          </div>
          <nav class="menu__nam">
            <a>components</a>
            <a>docs</a>
          </nav>
        </div>
      </header>
    `;
  }
}
