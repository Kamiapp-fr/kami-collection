import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ProviderRelease, releaseFactory } from './releases';
import Release from './releases/Release';

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

  render() {
    return html`<p>${this.release?.getContent()}</p>`;
  }
}
