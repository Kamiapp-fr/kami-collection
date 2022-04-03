import { LitElement, html } from 'lit';

export default class KamiChangelog extends LitElement {
  static get tag() {
    return 'kami-changelog';
  }

  render() {
    return html`<p>${KamiChangelog.tag}</p>`;
  }
}
