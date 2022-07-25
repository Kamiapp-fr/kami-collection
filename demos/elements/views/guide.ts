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

    .guide docs-element {
      margin: auto;
    }

    @media screen and (max-width: 700px) {
      .guide {
        padding: 0px 30px;
      }

      title-element {
        margin-bottom: 10px;
      }
    }
  `;

  @property()
  private name: string = 'Guide';

  @property()
  private element: string = '';

  protected render() {
    return html`
      <main class="guide">
        <title-element>${this.name}</title-element>
        <kami-markdown>
          <slot></slot>
        </kami-markdown>
        ${this.element ? html`
          <docs-element selected="${this.element}" src="/custom-elements.json"></docs-element> 
        ` : ''}
      </main>
    `;
  }
}
