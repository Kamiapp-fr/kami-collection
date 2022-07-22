import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('kami-progress-bar')
export default class KamiProgressBar extends LitElement {
  protected render() {
    return html`
      <h1>progress-bar</h1>
    `;
  }
}
