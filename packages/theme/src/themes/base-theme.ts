import './fonts/index.css';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default abstract class BaseTheme extends LitElement {
  static get tag(): string {
    throw new Error('Missing element tag');
  }

  @property()
  private readonly theme: 'light' | 'dark' = 'light';

  protected render() {
    return html`
      <slot class="kami-${this.theme || 'light'}-mode"></slot>
    `;
  }
}
