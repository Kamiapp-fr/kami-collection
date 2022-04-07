import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import Markdown from 'markdown-it';
import { getTheme, MarkdownTheme } from './themes';

export default class KamiMarkdown extends LitElement {
  static get tag() {
    return 'kami-markdown';
  }

  private parser: Markdown;

  @property()
  private theme: MarkdownTheme;

  @state()
  private content: string;

  constructor() {
    super();
    this.content = '';
    this.theme = MarkdownTheme.NONE;
    this.parser = new Markdown();
  }

  private reduceHtml(content: string, text: string) {
    return `${content}${text.trim()} \n`;
  }

  private handleSlotchange() {
    const slot = this.shadowRoot?.querySelector('slot');

    if (!slot) {
      return;
    }

    // Get childrens nodes into the slot
    // and get only Text node with some content.
    // This prevent all trouble with script element.
    const nodes = slot.assignedNodes({ flatten: true });
    const texts = nodes
      .map((node) => node instanceof Text && node.nodeValue)
      .filter((x) => !!x) as string[];

    this.content = texts
      .reduce((a, b) => a + b, '')
      .split('\n')
      .reduce(this.reduceHtml, '');
  }

  protected render() {
    return html`
      <style>
        ${getTheme(this.theme)}
      </style>
      <slot 
        style="display: none" 
        @slotchange=${this.handleSlotchange}
      ></slot>
      <article class="markdown-body">
        ${unsafeHTML(this.parser.render(this.content))}
      </article>
    `;
  }
}
