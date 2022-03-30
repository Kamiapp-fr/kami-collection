var n=Object.defineProperty;var r=(i,t,s)=>t in i?n(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var o=(i,t,s)=>(r(i,typeof t!="symbol"?t+"":t,s),s);import{K as c}from"./kami-component.8dc500b2.js";import"./vendor.2a8d4232.js";class e extends c{constructor(){super();o(this,"position");o(this,"color");o(this,"ctx");this.position={x:0,y:0},this.color=this.getAttribute("color")||"black"}static get tag(){return"drawing-exemple"}get drawing(){return this.wrapper.querySelector(".drawing")}setProperties(){this.color=this.getAttribute("color")||"black"}connectedCallback(){this.ctx=this.drawing.getContext("2d"),this.resize()}draw(t){t.buttons!==1||!this.ctx||(this.ctx.beginPath(),this.ctx.lineWidth=5,this.ctx.lineCap="round",this.ctx.strokeStyle=this.color,this.ctx.moveTo(this.position.x,this.position.y),this.setPosition(t),this.ctx.lineTo(this.position.x,this.position.y),this.ctx.stroke())}resize(){!this.ctx||(this.ctx.canvas.width=window.innerWidth,this.ctx.canvas.height=window.innerHeight)}setPosition(t){this.position.x=t.clientX,this.position.y=t.clientY}renderHtml(){return`
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
        `}}customElements.define(e.tag,e);
