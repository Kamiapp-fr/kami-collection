import"./modulepreload-polyfill.b7f2da20.js";import{K as s}from"./kami-component.5387cbae.js";import"./vendor.981edf70.js";class i extends s{constructor(){super();this.position={x:0,y:0},this.color=this.getAttribute("color")||"black"}static get tag(){return"drawing-exemple"}get drawing(){return this.wrapper.querySelector(".drawing")}setProperties(){this.color=this.getAttribute("color")||"black"}connectedCallback(){this.ctx=this.drawing.getContext("2d"),this.resize()}draw(t){t.buttons!==1||!this.ctx||(this.ctx.beginPath(),this.ctx.lineWidth=5,this.ctx.lineCap="round",this.ctx.strokeStyle=this.color,this.ctx.moveTo(this.position.x,this.position.y),this.setPosition(t),this.ctx.lineTo(this.position.x,this.position.y),this.ctx.stroke())}resize(){!this.ctx||(this.ctx.canvas.width=window.innerWidth,this.ctx.canvas.height=window.innerHeight)}setPosition(t){this.position.x=t.clientX,this.position.y=t.clientY}renderHtml(){return`
            <canvas 
                bind:mousemove="draw" 
                bind:mousedown="setPosition"
                bind:mouseup="setPosition"
                class="drawing">
            </canvas>
        `}renderStyle(){return`
            .drawing{
                position: fixed;
            }
        `}}customElements.define(i.tag,i);
