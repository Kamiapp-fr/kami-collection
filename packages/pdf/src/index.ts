import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { getDocument, GlobalWorkerOptions, PDFDocumentProxy } from 'pdfjs-dist';
import worker from 'pdfjs-dist/build/pdf.worker.js?url';

GlobalWorkerOptions.workerSrc = worker;

@customElement('kami-pdf')
export default class KamiPdf extends LitElement {
  static styles = css`
    .kami-pdf {
      width: var(--kami-pdf-width, 100%);
      height: var(--kami-pdf-height, 100%);
      background: var(--kami-theme-background);
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: auto;
    }

    .kami-pdf canvas {
      margin: var(--kami-pdf-page-margin, 5px);
      max-width: var(--kami-pdf-page-width, 100%);
    }
  `;

  @property({ type: String })
  public src!: string;

  @property({ type: Number })
  public scale: number = 1.3;

  @query('#viewer')
  private viewer!: HTMLCanvasElement;

  protected async firstUpdated() {
    if (!this.src) {
      throw new Error('The "src" attribute is needed to load a pdf');
    }

    await this.renderPages(await getDocument(this.src).promise);
  }

  public renderPages(pdf: PDFDocumentProxy) {
    const pages = Array(pdf.numPages).fill('');
    return Promise.all(pages.map((_, i) => this.renderPage(pdf, i + 1)));
  }

  public async renderPage(pdf: PDFDocumentProxy, index: number) {
    const page = await pdf.getPage(index);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const viewport = page.getViewport({ scale: this.scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: ctx,
      viewport,
    }).promise;

    this.viewer.append(canvas);

    return page;
  }

  render() {
    return html`
      <div id="viewer" class="kami-pdf"></div>
    `;
  }
}
