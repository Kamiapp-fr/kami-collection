import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @summary Search bar component to find and sort data.
 * @tag kami-search-bar
 */
@customElement('kami-search-bar')
export default class KamiSearchBar extends LitElement {
  protected render() {
    return html`
      <h1>search-bar</h1>
    `;
  }
}
