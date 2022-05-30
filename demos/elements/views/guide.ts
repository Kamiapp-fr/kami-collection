import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('guide-element')
export default class AppElement extends LitElement {
  static styles = css`
    .guide {
      padding: 0 40px;    
      margin: 40px 0px;
      box-sizing: border-box;
      min-height: calc(100vh - 185px);
    }
  `;

  @property()
  private name: string = 'Guide';

  protected render() {
    return html`
      <main class="guide">
        <title-element>${this.name}</title-element>
        <kami-markdown>
          <slot></slot>
        </kami-markdown>
      </main>
    `;
  }
}
