import { html, LitElement, unsafeCSS } from 'lit';
import { state, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import Markdown from 'markdown-it';
import hljs from 'highlight.js/lib/core';
import { LanguageFn } from 'highlight.js';
import { style } from './style';

/**
 * @summary Convert markdown in html using markdown-it.
 * @tag kami-markdown
 */
@customElement('kami-markdown')
export default class KamiMarkdown extends LitElement {
  static styles = style;

  private static hljs = hljs;

  private static hightlightStyle: string = '';

  static registerHighlightStyle(s: string) {
    KamiMarkdown.hightlightStyle = s;
  }

  static registerHighlightLanguage(languageName: string, language: LanguageFn) {
    KamiMarkdown.hljs.registerLanguage(languageName, language);
  }

  private parser: Markdown;

  @state()
  private content: string;

  constructor() {
    super();
    this.content = '';
    this.parser = new Markdown({
      highlight: this.setupHighlight.bind(this),
    });
  }

  private setupHighlight(str: string, lang: string) {
    if (lang && KamiMarkdown.hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code class="hljs__code">${this.renderHighlight(str, lang)}</code></pre>`;
      } catch (__) {
        return '';
      }
    }

    return `<pre><code>${this.parser.utils.escapeHtml(str)}</code></pre>`;
  }

  private reduceHtml(content: string, text: string) {
    return `${content}${text} \n`;
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
      .reduce(this.reduceHtml, '')
      .trim();
  }

  private renderHighlight(str: string, lang: string) {
    const { value } = KamiMarkdown.hljs.highlight(str, {
      language: lang,
      ignoreIllegals: true,
    });

    return value;
  }

  protected render() {
    return html`
      <style>
        ${unsafeCSS(KamiMarkdown.hightlightStyle)}
      </style>
      <slot 
        style="display: none" 
        @slotchange=${this.handleSlotchange}
      ></slot>
      <article>
        ${unsafeHTML(this.parser.render(this.content))}
      </article>
    `;
  }
}
