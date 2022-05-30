import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('title-element')
export default class ModeElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .title {
      max-width: 52rem;
      width: 100%;
      font-style: normal;
      font-weight: 900;
      line-height: 77px;
    }

    .title span {
      background: linear-gradient(90.45deg, #34D3CE 9.1%, #4F7BE7 95.02%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    @media screen and (max-width: 700px) {
      .title {
        text-transform: uppercase;
        font-size: 30px !important;
        margin: 0px !important;
        line-height: 1 !important;
        text-align: center !important;
      }
    }
  `;

  @property()
  public align?: string;

  @property()
  public size?: number;

  @property()
  public margin?: string;

  protected render() {
    return html`
      <h1 class="title" style="
        text-align: ${this.align || 'left'};
        font-size: ${this.size || '72'}px;
        margin: ${this.margin || '0px auto 20px'}
      ">
        <span>
          <slot></slot>
        </span>  
      </h1>
    `;
  }
}
