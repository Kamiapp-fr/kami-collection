import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import MarkdownIt from 'markdown-it';
import { ProviderRelease, releaseFactory } from './releases';
import Release from './releases/Release';

export default class KamiChangelog extends LitElement {
  static get tag() {
    return 'kami-changelog';
  }

  constructor() {
    super();
    this.md = new MarkdownIt();
  }

  private md: MarkdownIt;

  @property()
  private readonly src?: string;

  @property()
  private readonly provider?: ProviderRelease;

  @state()
  private release?: Release;

  public async connectedCallback(): Promise<void> {
    super.connectedCallback();

    if (!this.src) {
      throw new Error('Missing src attribute !');
    }

    if (!this.provider) {
      throw new Error('Missing provider attribute !');
    }

    const res = await fetch(this.src);
    const data = await res.json();

    this.release = releaseFactory(this.provider, data);
  }

  changelogTemplate() {
    if (!this.release) {
      return 'No Data';
    }

    return html`${
      this.md.parse(this.release.getContent(), {}).map(({ content }) => html`${content}<br>`)
    }`;
  }

  render() {
    return html`<p>${this.changelogTemplate()}</p>`;
  }
}
