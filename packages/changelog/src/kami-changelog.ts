import '@material/mwc-icon';
import { mdiBell } from '@mdi/js';
import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import KamiMarkdown from '@kamiapp/markdown';

import { ProviderRelease, releaseFactory } from './releases';
import Release from './releases/Release';

if (!customElements.get('kami-markdown')) {
  customElements.define('kami-markdown', KamiMarkdown);
}

export default class KamiChangelog extends LitElement {
  static get tag() {
    return 'kami-changelog';
  }

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

    return html`
      <svg viewBox="0 0 25 25" height="50" width="50">
        <path d=${mdiBell}></path>
      </svg>
      <kami-markdown>
        ${this.release.getContent()}
      </kami-markdown>
    `;
  }

  render() {
    return html`<p>${this.changelogTemplate()}</p>`;
  }
}
