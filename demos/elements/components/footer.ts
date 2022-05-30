import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-element')
export default class FooterElement extends LitElement {
  static styles = css`
    .footer {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        height: 120px;
        padding: 0px 40px;
        box-sizing: border-box;
        font-size: 14px;
        text-align: center;
        font-weight: 400;
        line-height: 1.5;
        border-top: solid 1px var(--kami-theme-border-color);
        color: var(--kami-theme-accent);
    }

    .footer p {
        margin: 0px;
    }

    .footer a {
        color: var(--kami-theme-primary);
    }
  `;

  protected render() {
    return html`
      <footer class="footer">
        <p>Made with ☕ by the <a href="https://www.kamiapp.fr/en">Kami</a> team</p>
        <p>Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a></p>
        <p>Copyright © 2019-${new Date().getFullYear()} Kami</p>
      </footer>
    `;
  }
}
