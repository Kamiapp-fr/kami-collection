import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('kami-flash')
export default class KamiFlash extends LitElement {
  protected render() {
    return html`
      <h1>flash</h1>
    `;
  }
}
