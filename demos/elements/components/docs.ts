import { ApiDocsBase } from '@api-viewer/docs/lib/base.js';
import { customElement } from 'lit/decorators.js';
import sharedStyles from '@api-viewer/common/lib/shared-styles.js';
import docsStyle from '@api-viewer/docs/lib/styles.js';
import { css, html } from 'lit';
import { theme } from '../styles/api-viewer-theme';

@customElement('docs-element')
export class DocsElement extends ApiDocsBase {
  static get styles() {
    return [
      sharedStyles,
      docsStyle,
      theme,
      css`
        :host {
          --ave-label-color: var(--kami-theme-text);
          --ave-monospace-font: var(--kami-theme-font-secondary);
          --ave-item-color: var(--kami-theme-primary);
          --ave-secondary-color: var(--kami-theme-secondary)
        }

        .docs {
          width: 100%;
          max-width: 1000px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--kami-theme-border-color);
        }
      `,
    ];
  }

  protected render() {
    return html`
      <div class="docs">
        ${super.render()}
      </div>
    `;
  }
}
