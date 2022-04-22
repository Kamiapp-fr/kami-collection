import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('guide-element')
export default class AppElement extends LitElement {
  static styles = css`

  `;

  async connectedCallback() {
    super.connectedCallback();
  }

  protected render() {
    return html`
    `;
  }
}
