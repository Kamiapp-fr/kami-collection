import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('kami-media')
export default class KamiMedia extends LitElement {
  protected render() {
    return html`
      <h1>media</h1>
    `;
  }
}
