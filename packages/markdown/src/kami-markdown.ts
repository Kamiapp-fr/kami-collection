import { html, LitElement } from 'lit';

export default class KamiMarkdown extends LitElement {
  static get tag() {
    return 'kami-markdown';
  }

  protected render() {
    return html`${KamiMarkdown.tag}`;
  }
}
