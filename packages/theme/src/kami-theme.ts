import './kami-theme.css';
import { html, LitElement, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';

export default class KamiTheme extends LitElement {
  static get tag() {
    return 'kami-theme';
  }

  @property()
  private readonly theme: 'light' | 'dark' = 'light';

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    const theme = _changedProperties.get('theme');

    if (!theme || theme === this.theme) {
      return;
    }

    if (this.theme === 'dark') {
      document.body.classList.add('kami-dark-mode');
    }

    if (this.theme === 'light') {
      document.body.classList.remove('kami-dark-mode');
    }
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}
