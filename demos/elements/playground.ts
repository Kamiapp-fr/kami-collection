import { ApiDemoBase } from '@api-viewer/demo/lib/base.js';
import { setTemplates } from '@api-viewer/common/lib/templates.js';
import sharedStyles from '@api-viewer/common/lib/shared-styles.js';
import demoStyle from '@api-viewer/demo/lib/styles.js';
import { customElement, property } from 'lit/decorators.js';
import { css, html } from 'lit';
import { theme } from './styles/api-viewer-theme';

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
          box-shadow: 0 0px 7px -5px var(--kami-theme-text);
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
