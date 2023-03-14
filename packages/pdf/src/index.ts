import { css, html, LitElement } from 'lit';
import {
  customElement,
  property,
  query,
  queryAll,
} from 'lit/decorators.js';
import { getDocument, GlobalWorkerOptions, PDFDocumentProxy } from 'pdfjs-dist/build/pdf.min.js';
import worker from 'pdfjs-dist/build/pdf.worker.min.js?url';

GlobalWorkerOptions.workerSrc = worker;

/**
 * @summary  A simple viewer that allows users to easily read and view PDF.
 * @tag kami-pdf
 *
 * @property {string} src - Source of the pdf.
 * @property {number?} scale - Scale of the pdf.
 *
 * @cssprop [--kami-pdf-width=100%] - Width of the pdf.
 * @cssprop [--kami-pdf-height=100%] - Height of the pdf.
 * @cssprop [--kami-pdf-page-margin=5px] - Margin between each pdf page.
 * @cssprop [--kami-pdf-page-width=100%] - Width of each pdf page.
 *
 * @cssprop [--kami-theme-background] - Background color of the pdf.
 *
 * @fires loading-data - Emitted when data is loading.
 * @fires loading-success - Emitted when data is loaded successfuly.
 * @fires loading-error - Emitted when an error appear.
 *
 * @slot loading - Displayed when data are loading.
 */
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

  @query('#loading')
  private loadingSlot!: HTMLSlotElement;

  @queryAll('canvas')
  private pages!: HTMLCanvasElement[];

  protected async firstUpdated() {
    await this.load();
  }

  protected async updated(props: Map<'scale' | 'src', { scale: number, src: string }>): Promise<void> {
    if (!props.get('scale') && !props.get('src')) {
      return;
    }

    await this.load();
  }

  /**
   * Load the pdf depending on the `src` attribute.
   * By default this method is called when the component is mounted.
   */
  public async load() {
    if (!this.src) {
      throw new Error('The "src" attribute is needed to load a pdf');
    }

    this.loadingSlot.style.display = 'flex';
    this.clear();
    this.dispatchEvent(new CustomEvent('loading-data'));

    try {
      const pdf = await getDocument(this.src).promise;
      await this.renderPdf(pdf);

      this.dispatchEvent(new CustomEvent('loading-success'));
    } catch (error) {
      this.dispatchEvent(new CustomEvent('loading-error'));
    } finally {
      this.loadingSlot.style.display = 'none';
    }
  }

  /**
   * Clear the current pdf.
   * It will remove all pages display.
   */
  public clear() {
    this.pages.forEach((page) => page.remove());
  }

  private async renderPdf(pdf: PDFDocumentProxy) {
    const pages = await this.createPages(pdf);
    this.viewer.append(...pages);
  }

  private createPages(pdf: PDFDocumentProxy) {
    const pages = Array(pdf.numPages).fill('');
    return Promise.all(pages.map((_, i) => this.createPage(pdf, i + 1)));
  }

  private async createPage(pdf: PDFDocumentProxy, index: number) {
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

    return canvas;
  }

  render() {
    return html`
      <div id="viewer" class="kami-pdf">
        <slot id="loading" name="loading"></slot>
      </div>
    `;
  }
}
