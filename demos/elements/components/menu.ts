import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { mdiMenu, mdiClose } from '@mdi/js';

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
      padding: 0px 30px;
      box-sizing: border-box;
    }

    .menu__content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 940px;
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

    .menu__icon {
      height: 30px;
      fill: var(--kami-theme-text);
      cursor: pointer;
    }

    .menu__icon--close {
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px;
      height: 40px;
    }

    .menu__responsive-nav {
      position: fixed;
      width: 100%;
      height: 100vh;
      z-index: 1000;
      display: flex;
      background: var(--kami-theme-background);
      text-align: left;
      padding: 40px;
      box-sizing: border-box;
      flex-direction: column;
    }

    .menu__responsive-nav .menu__nav {
      flex-direction: column;
      font-size: 25px;
      text-transform: uppercase;
      align-items: flex-start;
    }

    .menu__responsive-nav .menu__link {
      margin: 10px;
      height: 40px;
      font-weight: 800;
    }

    title-element {
      margin: 25px 0px;
    }
  `;

  @state()
  private theme?: 'light' | 'dark';

  @state()
  private width: number = 0;

  @state()
  private navIsOpen: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    const store = localStorage.getItem('kami-theme-mode');

    if (store && ['light', 'dark'].includes(store)) {
      this.theme = store as 'light' | 'dark';
    }

    document.addEventListener('theme', ({ detail }) => {
      this.theme = detail.theme;
    });

    window.addEventListener('resize', this.updateWindowSize.bind(this));
    this.updateWindowSize();
  }

  private updateWindowSize() {
    this.width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }

  public openNav() {
    this.navIsOpen = true;
  }

  public closeNav() {
    this.navIsOpen = false;
  }

  protected renderNav() {
    return html`
      <nav class="menu__nav">
        <a class="menu__link" href="/guide.html">guide</a>
        <a class="menu__link" href="/components.html">components</a>
        <a class="menu__link" href="https://github.com/Kamiapp-fr/kami-collection">github</a>
        <mode-element class="menu__link"></mode-element>
      </nav>
    `;
  }

  protected renderResponsizeNav() {
    return html`
      <svg @click=${this.openNav} class="menu__icon" viewBox="0 0 24 25">
        <path d=${mdiMenu}></path>
      </svg>  
    `;
  }

  protected renderCloseNav() {
    return html`
      <svg @click=${this.closeNav} class="menu__icon menu__icon--close" viewBox="0 0 24 25">
        <path d=${mdiClose}></path>
      </svg>  
    `;
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
          ${this.width > 700 ? this.renderNav() : this.renderResponsizeNav()}
        </div>
      </header>
      <kami-transition transition="slide-y" easing="ease-out" duration="300" show="${this.navIsOpen}">
        <div class="menu__responsive-nav">
          <title-element>Menu</title-element>
          ${this.renderCloseNav()}
          ${this.renderNav()}
        </div>
      </kami-transition>
    `;
  }
}
