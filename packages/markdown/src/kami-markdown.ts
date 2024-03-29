import { html, LitElement, unsafeCSS } from 'lit';
import { state, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import Markdown from 'markdown-it';
import hljs from 'highlight.js/lib/core';
import { LanguageFn } from 'highlight.js';
import dedent from 'ts-dedent';
import { style } from './style';

/**
 * @summary Convert markdown in html using markdown-it.
 * @tag kami-markdown
 *
 * @cssprop [--kami-theme-primary] - Color used when a link is hovered.
 * @cssprop [--kami-theme-secondary] - Color used for link and blockquote.
 * @cssprop [--kami-theme-text] - Define the text color.
 * @cssprop [--kami-theme-background] - Define the background color of the component.
 * @cssprop [--kami-theme-font-secondary] - Define the font for paragraphe.
 * @cssprop [--kami-theme-font-primary] - Define the font for title.
 * @cssprop [--kami-theme-white] - Define the white color.
 *
 */
@customElement('kami-markdown')
export default class KamiMarkdown extends LitElement {
  static styles = style;

  private static plugins: Markdown.PluginSimple[] = [];

  private static hljs = hljs;

  private static hightlightStyle: string = '';

  /**
   * A **static** method which add hightlight style
   * to all the new instance of ``kami-markdown``.
   * @param hightlightStyle - an hightlight style
   */
  static registerHighlightStyle(hightlightStyle: string) {
    KamiMarkdown.hightlightStyle = hightlightStyle;
  }

  /**
   * A **static** method which add hightlight language
   * to all the new instance of ``kami-markdown``.
   * @param languageName - name of the language
   * @param language - an hightlight language
   */
  static registerHighlightLanguage(languageName: string, language: LanguageFn) {
    KamiMarkdown.hljs.registerLanguage(languageName, language);
  }

  /**
   * A **static** method which allow you to use a markdown-it plugin
   * for all new instance of `kami-markdown`.
   * @param plugin - a markdown-it plugin
   */
  static use(plugin: Markdown.PluginSimple) {
    this.plugins.push(plugin);
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

    KamiMarkdown.plugins.forEach((plugin) => this.parser.use(plugin));
  }

  private observer?: MutationObserver;

  private isScriptMarkdown(node: Node) {
    return node instanceof HTMLScriptElement && node.type === 'text/markdown';
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

  private registerMarkdown() {
    const slot = this.shadowRoot?.querySelector('slot');

    if (!slot || this.observer) {
      return;
    }

    const nodes = slot.assignedNodes({ flatten: true });
    const md = nodes.find(this.isScriptMarkdown.bind(this)) as HTMLScriptElement | undefined;

    if (!md) {
      return;
    }

    this.observer = new MutationObserver(() => this.updateMarkdown(md));
    this.observer.observe(md, { childList: true });
    this.updateMarkdown(md);
  }

  private updateMarkdown(md: HTMLScriptElement) {
    const content = md.innerText.replace(/&lt;(\/?script)(.*?)&gt;/g, '<$1$2>');
    this.content = dedent(content.trim());
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
      <slot style="display: none" @slotchange=${this.registerMarkdown}></slot>
      <article>
        ${unsafeHTML(this.parser.render(this.content))}
      </article>
    `;
  }
}
