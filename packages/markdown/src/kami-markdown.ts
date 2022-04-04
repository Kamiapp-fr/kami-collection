import { html, LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import Markdown from 'markdown-it';

export default class KamiMarkdown extends LitElement {
  static get tag() {
    return 'kami-markdown';
  }

  private content: string;

  private parser: Markdown;

  constructor() {
    super();
    this.parser = new Markdown();
    this.content = this.innerHTML.trim().split('\n').reduce(this.reduceHtml, '');
  }

  private reduceHtml(content: string, text: string) {
    return `${content}${text.trim()} \n`;
  }

  protected render() {
    return html`${unsafeHTML(this.parser.render(this.content))}`;
  }
}
