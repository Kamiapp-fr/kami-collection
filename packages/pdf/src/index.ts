import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('kami-pdf')
export default class KamiPdf extends LitElement {
  protected render() {
    return html`
      <h1>pdf</h1>
    `;
  }
}
