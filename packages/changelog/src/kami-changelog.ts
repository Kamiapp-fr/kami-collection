import '@material/mwc-icon';
import { mdiBellOutline } from '@mdi/js';
import { LitElement, html, css } from 'lit';
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

  static styles = css`
    .kami-changelog__btn {
      background-color: var(--kami-changelog-btn-color, white);
      border-radius: var(--kami-changelog-btn-raduis, 100%);
      padding: var(--kami-changelog-btn-padding, 10px);
      height: var(--kami-changelog-btn-height, 50px);
      width: var(--kami-changelog-btn-width, 50px); 
      box-shadow: var(--kami-changelog-btn-shadow, 0 0 8px -5px black);
    }
  `;

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
      <kami-markdown>
        ${this.release.getContent()}
      </kami-markdown>
    `;
  }

  btnTemplate() {
    return html`
      <svg class="kami-changelog__btn" viewBox="0 0 24 25">
        <path d=${mdiBellOutline}></path>
      </svg>
    `;
  }

  render() {
    return html`<p>${this.btnTemplate()}</p>`;
  }
}
