import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getType } from 'mime';
import KamiPdf from '@kamiapp/pdf';

if (!customElements.get('kami-pdf')) {
  customElements.define('kami-pdf', KamiPdf);
}

@customElement('kami-media')
export default class KamiMedia extends LitElement {
  static styles = css`
    .kami-media {
      height: 100%;
      width: 100%;
      overflow: auto;
    }
  `;

  public get extension() {
    if (!this.src) {
      return undefined;
    }

    return this.src.split('.').at(-1);
  }

  public get type() {
    if (!this.src || !this.extension) {
      return undefined;
    }

    return getType(this.extension);
  }

  public get isVideo() {
    return this.isType('video');
  }

  public get isImage() {
    return this.isType('image');
  }

  public get isPDF() {
    return this.isType('pdf');
  }

  public get isUnknow() {
    return !this.isVideo && !this.isImage && !this.isPDF;
  }

  @property()
  public src?: string;

  @property()
  public height: string = '100%';

  @property()
  public width: string = '100%;';

  private isType(type: string) {
    if (!this.type) {
      return false;
    }

    return Boolean(this.type.match(new RegExp(type, 'g')));
  }

  private renderImage() {
    return html`
      <img src="${this.src}">
    `;
  }

  private renderVideo() {
    return html`
      <video controls>
        <source src="${this.src}" type="${this.type}">
      </video>
    `;
  }

  private renderPDF() {
    return html`
      <kami-pdf src="${this.src}"></kami-pdf>
    `;
  }

  private renderUnknown() {
    return html`
      <slot name="unknown"></slot>
    `;
  }

  protected render() {
    return html`
      <div class="kami-media" style="max-height: ${this.height}; max-width: ${this.width}">
        ${this.isImage ? this.renderImage() : ''}
        ${this.isVideo ? this.renderVideo() : ''}
        ${this.isPDF ? this.renderPDF() : ''}
        ${this.isUnknow ? this.renderUnknown() : ''}
      </div>
    `;
  }
}
