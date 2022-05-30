import KamiTheme from '@kamiapp/theme';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { mdiBrightness6, mdiWeatherNight } from '@mdi/js';

@customElement('mode-element')
export default class ModeElement extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      height: 27px;
    }

    .mode {
      height: 100%;
      fill: var(--kami-theme-text);
      cursor: pointer;
    }
  `;

  @state()
  private theme?: string;

  get icone() {
    return this.theme !== 'light' ? mdiWeatherNight : mdiBrightness6;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.theme = localStorage.getItem('kami-theme-mode') || 'light';

    document.addEventListener('theme', ({ detail }) => {
      this.theme = detail.theme;
    });
  }

  updateTheme() {
    const themeEl = document.querySelector('kami-theme') as KamiTheme;

    if (!themeEl) {
      return;
    }

    themeEl.updateTheme(this.theme === 'light' ? 'dark' : 'light');
  }

  protected render() {
    return html`
      <svg @click=${this.updateTheme} class="mode" viewBox="0 0 24 25">
        <path d=${this.icone}></path>
      </svg>  
    `;
  }
}
