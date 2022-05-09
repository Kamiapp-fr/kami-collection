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
      z-index: 1000;
      display: flex;
      position: fixed;
      width: 100%;
      align-items: center;
      justify-content: center;
      height: 65px;
      background-color: var(--kami-theme-background);
      border-bottom:  1px solid var(--kami-theme-border-color);
    }

    .menu__content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1000px;
    }

    .menu__nav {
      display: flex;
      align-items: center;
    }

    .menu__link {
      margin: 0px 10px;
      text-decoration: none;
      color: var(--kami-theme-text);
    }

    .menu__link:hover {
      color: var(--kami-theme-primary);
    }
  `;

  @state()
  private theme?: 'light' | 'dark';

  connectedCallback(): void {
    super.connectedCallback();
    const store = localStorage.getItem('kami-theme-mode');

    if (store && ['light', 'dark'].includes(store)) {
      this.theme = store as 'light' | 'dark';
    }

    document.addEventListener('theme', ({ detail }) => {
      this.theme = detail.theme;
    });
  }

  protected render() {
    return html`
      <header class="menu">
        <div class="menu__content">
          <div class="menu__logo">
            <a href="/">
              <img src="../img/kami-${this.theme || 'light'}.png">
            </a>
          </div>
          <nav class="menu__nav">
            <a class="menu__link" href="/guide.html">guide</a>
            <a class="menu__link" href="/components.html">components</a>
            <a class="menu__link" href="https://github.com/Kamiapp-fr/kami-collection">github</a>
            <mode-element class="menu__link"></mode-element>
          </nav>
        </div>
      </header>
    `;
  }
}
