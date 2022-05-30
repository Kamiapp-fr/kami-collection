import { ApiDemoBase } from '@api-viewer/demo/lib/base.js';
import { setTemplates } from '@api-viewer/common/lib/templates.js';
import sharedStyles from '@api-viewer/common/lib/shared-styles.js';
import demoStyle from '@api-viewer/demo/lib/styles.js';
import { customElement, property } from 'lit/decorators.js';
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

        [part="header"] {
          border-radius: 10px;
          background: linear-gradient(94.7deg, rgb(52, 211, 206) 3.12%, rgb(78, 125, 230) 102.14%);
        }

        [part="header-title"] {
          color: var(--kami-theme-white);
          text-shadow: var(--kami-theme-text-shadow);
          text-transform: uppercase;
          margin: 0px;
          padding: 15px;
          font-size: 23px;
          font-family: Inter;
        }

        header [part="select"] {
          display: none;
        }
      `,
    ];
  }

  @property()
  private element?: string;

  constructor() {
    super();
    this.src = '/custom-elements.json';
  }

  connectedCallback(): void {
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
