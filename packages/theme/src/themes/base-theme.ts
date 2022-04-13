import './fonts/index.css';
import { html, LitElement, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';

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
    localStorage.setItem('kami-theme-mode', theme);
  }

  protected render() {
    return html`
      <slot class="kami-${this.theme || 'light'}-mode"></slot>
    `;
  }
}
