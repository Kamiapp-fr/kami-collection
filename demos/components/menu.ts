import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('menu-element')
export default class MenuElement extends LitElement {
  static styles = css`
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

  protected render() {
    return html`
      <header class="menu">
        <div class="menu__content">
          <div class="menu__logo">Kami</div>
          <nav class="menu__nam">
            <a>components</a>
            <a>docs</a>
          </nav>
        </div>
      </header>
    `;
  }
}
