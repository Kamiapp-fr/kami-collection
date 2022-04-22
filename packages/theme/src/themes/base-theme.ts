import './fonts/index.css';
import { html, LitElement, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';

interface ThemeEventMap {
  'theme': CustomEvent<{
    theme: 'light' | 'dark'
  }>;
}

declare global {
  interface Document {
    addEventListener<K extends keyof ThemeEventMap>(type: K,
      listener: (this: Document, ev: ThemeEventMap[K]) => void): void;
  }
}

export default abstract class BaseTheme extends LitElement {
  static get tag(): string {
    throw new Error('Missing element tag');
  }

  @property({
    reflect: true,
  })
  private theme: 'light' | 'dark' = 'light';

  protected updated(_changedProperties: PropertyValueMap<any>): void {
    const theme = _changedProperties.get('theme');

    if (!theme) {
      return;
    }

    this.updateTheme(this.theme);
  }

  public connectedCallback(): void {
    super.connectedCallback();
    const store = localStorage.getItem('kami-theme-mode');

    if (!store) {
      return;
    }

    this.updateTheme(store);
  }

  public updateTheme(theme: string) {
    if (theme !== 'light' && theme !== 'dark') {
      return;
    }

    this.theme = theme;
    this.emitUpdateTheme(theme);
    localStorage.setItem('kami-theme-mode', theme);
  }

  protected emitUpdateTheme(theme: 'light' | 'dark') {
    const event = new CustomEvent('theme', {
      detail: {
        theme,
      },
    });

    document.dispatchEvent(event);
  }

  protected render() {
    return html`
      <slot class="kami-${this.theme || 'light'}-mode"></slot>
    `;
  }
}
