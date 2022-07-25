import { ApiDemoBase } from '@api-viewer/demo/lib/base.js';
import { setTemplates } from '@api-viewer/common/lib/templates.js';
import sharedStyles from '@api-viewer/common/lib/shared-styles.js';
import demoStyle from '@api-viewer/demo/lib/styles.js';
import { customElement, property, query } from 'lit/decorators.js';
import { css, html } from 'lit';
import { theme } from '../styles/api-viewer-theme';

@customElement('playground-element')
export class PlaygroundElement extends ApiDemoBase {
  static get styles() {
    return [
      sharedStyles,
      demoStyle,
      theme,
      css`
        :host {
          display: flex;
          justify-content: center;
          box-shadow: none;
          max-width: 100%;
          margin: 60px !important;
        }

        .playground {
          width: 100%;
          max-width: 1000px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--kami-theme-border-color);
        }

        [part="demo-tabs"] [part="tab-panel"] {
          background: rgb(22, 27, 34);
          color: white;
          margin: 0px 20px 20px;
        }

        [part="demo-output"] {
          margin: 0px 21px 20px;
          border: 1px solid var(--kami-theme-border-color);
          border-radius: 10px;
        }

        @media screen and (max-width: 700px) {
          :host {
            padding: 25px 15px !important;
            margin: 0 !important;
            box-sizing: border-box;
          }

          [part="demo-tabs"] [part="tab-panel"] {
            width: auto !important;
            max-width: 100vw !important;
            margin-top: 25px !important;
          }
        }
      `,
    ];
  }

  @property()
  private element?: string;

  @query('[part="demo-output"]')
  public demo!: HTMLDivElement;

  constructor() {
    super();
    this.src = '/custom-elements.json';
  }

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    if (!this.element) {
      throw new Error('Missing element');
    }

    this.only = [this.element];
    this.selected = this.element;
  }

  protected firstUpdated(): void {
    this.setTemplates();
  }

  setTemplates(templates?: HTMLTemplateElement[]) {
    setTemplates(
      // eslint-disable-next-line no-underscore-dangle
      Number(this._id),
      templates || Array.from(this.querySelectorAll('template')),
    );
  }

  protected render() {
    return html`
      <div class="playground">
        ${super.render()}
      </div>
    `;
  }
}
