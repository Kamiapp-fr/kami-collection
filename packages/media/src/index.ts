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
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      background: var(--kami-theme-background);
      border-radius: 10px;
      overflow: hidden;
    }

    .kami-media:has(.kami-media__pdf) {
      --kami-pdf-page-margin: 0px 0px 10px 0;
      align-items: flex-start;
    }

    .kami-media__container {
      width: 100%; 
      overflow-x: hidden; 
      overflow-y: auto;
    }

    .kami-media__image, 
    .kami-media__video, 
    .kami-media__pdf {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    .kami-media__image, 
    .kami-media__video {
      object-fit: contain;
    }

    .kami-media__image {
      width: fit-content;
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

  public get isAudio() {
    return this.isType('audio');
  }

  public get isPDF() {
    return this.isType('pdf');
  }

  public get isUnknow() {
    return !this.isVideo
      && !this.isImage
      && !this.isAudio
      && !this.isPDF;
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
      <img 
        class="kami-media__image" 
        style="max-height: ${this.height}; max-width: ${this.width};"
        src="${this.src}"
      >
    `;
  }

  private renderVideo() {
    return html`
      <video 
        class="kami-media__video" 
        style="max-height: ${this.height}; max-width: ${this.width};"
        src="${this.src}"
        controls
      ></video>
    `;
  }

  private renderAudio() {
    return html`
      <audio src="${this.src}" controls></audio>
    `;
  }

  private renderPDF() {
    return html`
      <div 
        class="kami-media__container" 
        style="max-height: ${this.height}; max-width: ${this.width};"
      >
        <kami-pdf class="kami-media__pdf" src="${this.src}"></kami-pdf>
      </div>
    `;
  }

  private renderUnknown() {
    return html`
      <slot name="unknown"></slot>
    `;
  }

  private renderMedia() {
    if (this.isImage) {
      return this.renderImage();
    }

    if (this.isVideo) {
      return this.renderVideo();
    }

    if (this.isAudio) {
      return this.renderAudio();
    }

    if (this.isPDF) {
      return this.renderPDF();
    }

    return this.renderUnknown();
  }

  protected render() {
    return html`
      <div 
        class="kami-media" 
        style="max-height: ${this.height}; max-width: ${this.width};"
      >
        ${this.renderMedia()}
      </div>
    `;
  }
}
