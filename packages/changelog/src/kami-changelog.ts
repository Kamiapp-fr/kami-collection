import '@material/mwc-icon';
import { mdiBellBadgeOutline, mdiClose } from '@mdi/js';
import { LitElement, html, css } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import KamiMarkdown from '@kamiapp/markdown';
import KamiTransition from '@kamiapp/transition';

import { ProviderRelease, releaseFactory } from './releases';
import Release from './releases/Release';

if (!customElements.get('kami-markdown')) {
  customElements.define('kami-markdown', KamiMarkdown);
}

if (!customElements.get('kami-transition')) {
  customElements.define('kami-transition', KamiTransition);
}

/**
 * @summary Display your releases directly into your app.
 * @tag kami-changelog
 */
@customElement('kami-changelog')
export default class KamiChangelog extends LitElement {
  static styles = css`
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb  {
      background: var(--kami-theme-primary);
    }

    :host {
      position: var(--kami-changelog-position, fixed);
      bottom: var(--kami-changelog-bottom, 0);
      right: var(--kami-changelog-right, 0);
      left: var(--kami-changelog-left, auto);
      top: var(--kami-changelog-top, auto);
      margin: var(--kami-changelog-margin, 30px 40px) !important;
    }

    .kami-changelog {
      position: relative;
      font-family: var(--kami-theme-font-primary);
      width: var(--kami-changelog-release-width, 70px);
      height: var(--kami-changelog-release-height, 70px);
    }

    .kami-changelog__btn {
      fill: var(--kami-theme-primary);
      background-color: var(--kami-theme-background);
      box-shadow: var(--kami-theme-shadow);
      border-radius: var(--kami-changelog-btn-raduis, 100%);
      padding: var(--kami-changelog-btn-padding, 10px);
      height: calc(var(--kami-changelog-btn-height, 70px) - var(--kami-changelog-btn-padding, 10px) * 2);
      width: calc(var(--kami-changelog-btn-width, 70px) - var(--kami-changelog-btn-padding, 10px) * 2);
      cursor: pointer;
    }

    .kami-changelog__title {
      background-color: var(--kami-theme-primary);
      color: var(--kami-theme-white);
      background-image: var(--kami-theme-gradient-primary);
      text-shadow: var(--kami-theme-text-shadow);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin: 0;
      padding: 15px;
      font-size: 23px;
    }

    .kami-changelog__release {
      background-color: var(--kami-theme-background);
      box-shadow: var(--kami-theme-shadow);
      border-radius: var(--kami-theme-radius);
      bottom: var(--kami-changelog-release-bottom, 90px);
      right: var(--kami-changelog-release-right, 0px);
      width: var(--kami-changelog-release-width, 400px);
      height: var(--kami-changelog-release-height, 50vh);
      position: absolute;
      box-sizing: border-box;
      overflow: hidden;
    }

    .kami-changelog__markdown {
      padding: 10px 25px;
      overflow: hidden auto;
      box-sizing: border-box;
      height: calc(100% - 56px);
    }
  `;

  @property()
  private readonly src?: string;

  @property()
  private readonly provider?: ProviderRelease;

  @property()
  private readonly header?: string;

  @state()
  private release?: Release;

  @state()
  private display: boolean = false;

  public get hasRelease() {
    return this.release
      && this.release.getContent() !== undefined
      && this.release.getContent() !== '';
  }

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

  public toggleDisplay() {
    this.display = !this.display;
  }

  private releaseTemplate(release?: Release) {
    return html`
      <div class="kami-changelog__release">
        <h3 class="kami-changelog__title">${this.header || 'kami-changelog'}</h3>
        <div class="kami-changelog__markdown">
          <kami-markdown>
            ${release?.getContent()}
          </kami-markdown>
        </div>
      </div>
    `;
  }

  private btnTemplate(icone: string) {
    return html`
      <svg @click=${this.toggleDisplay} class="kami-changelog__btn" viewBox="0 0 24 25">
        <path d=${icone}></path>
      </svg>
    `;
  }

  public render() {
    return html`
      <kami-transition transition="slide-y"  show="${this.hasRelease}">
        <div class="kami-changelog">
          <kami-transition transition="slide-y" duration="200" show="${this.display}">
            ${this.releaseTemplate(this.release)}
          </kami-transition>
          <kami-transition transition="fade" duration="250" easing="linear" show="${this.display}">
            <div slot="in">${this.btnTemplate(mdiClose)}</div>
            <div slot="out">${this.btnTemplate(mdiBellBadgeOutline)}</div>
          </kami-transition>
        </div>
      </kami-transition>
    `;
  }
}
