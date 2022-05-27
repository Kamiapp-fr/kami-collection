import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('guide-element')
export default class AppElement extends LitElement {
  static styles = css`
    .guide {
      padding: 0 40px;    
      margin: 40px 0px;
      box-sizing: border-box;
    }

    .guide__title {
      max-width: 52rem;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 20px;
      font-style: normal;
      font-weight: 900;
      font-size: 64px;
      line-height: 77px;
    }

    .guide__title span {
      background: linear-gradient(90.45deg, #34D3CE 9.1%, #4F7BE7 95.02%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  `;

  @property()
  private name: string = 'Guide';

  protected render() {
    return html`
      <main class="guide">
        <h1 class="guide__title">
          <span>${this.name}</span>
        </h1>
        <kami-markdown>
          <slot></slot>
        </kami-markdown>
      </main>
    `;
  }
}
