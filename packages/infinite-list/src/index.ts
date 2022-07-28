import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('kami-infinite-list')
export default class KamiInfiniteList extends LitElement {
  protected render() {
    return html`
      <h1>infinite-list</h1>
    `;
  }
}
