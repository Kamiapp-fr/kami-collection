import KamiComponent from '@kamiapp/component';

class Drawing extends KamiComponent {
  private position: { x: number; y: number; };

  private color?: string;

  private ctx?: CanvasRenderingContext2D;

  constructor() {
    super();
    this.position = {
      x: 0,
      y: 0,
    };

    this.color = this.getAttribute('color') || 'black';
  }

  static get tag() {
    return 'drawing-exemple';
  }

  get drawing() {
    return this.wrapper.querySelector('.drawing');
  }

  setProperties() {
    this.color = this.getAttribute('color') || 'black';
  }

  connectedCallback() {
    this.ctx = (this.drawing as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    this.resize();
  }

  draw(event: MouseEvent) {
    if (event.buttons !== 1 || !this.ctx) return;

    this.ctx.beginPath(); // begin
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = this.color as string;
    this.ctx.moveTo(this.position.x, this.position.y); // from
    this.setPosition(event);
    this.ctx.lineTo(this.position.x, this.position.y); // to
    this.ctx.stroke(); // draw it!
  }

  resize() {
    if (!this.ctx) {
      return;
    }
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  setPosition(event: MouseEvent) {
    this.position.x = event.clientX;
    this.position.y = event.clientY;
  }

  renderHtml() {
    return `
            <canvas 
                bind:mousemove="draw" 
                bind:mousedown="setPosition"
                bind:mouseup="setPosition"
                class="drawing">
            </canvas>
        `;
  }

  renderStyle() {
    return `
            .drawing{
                position: fixed;
            }
        `;
  }
}

customElements.define(Drawing.tag, Drawing);
