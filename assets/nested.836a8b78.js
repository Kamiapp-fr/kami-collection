var n=Object.defineProperty;var a=(r,e,t)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(a(r,typeof e!="symbol"?e+"":e,t),t);import{K as d}from"./kami-component.8dc500b2.js";import{K as c}from"./index.3cbcadf3.js";import"./vendor.2a8d4232.js";class o extends d{constructor(){super(...arguments);i(this,"currentY");i(this,"currentRatio");i(this,"isIntersecting");i(this,"previousY");i(this,"previousRatio");i(this,"observeWindows")}static get tag(){return"card-component"}static get observedAttributes(){return["name","img"]}setProperties(){this.props=this.observe({name:this.getAttribute("name")||"name",img:this.getAttribute("img")||"img"})}connectedCallback(){this.previousY=0,this.previousRatio=0,this.observeWindows=new IntersectionObserver(this.display.bind(this),{root:null,rootMargin:"50px",threshold:.1}),this.observeWindows.observe(this),this.wrapper.style.position="relative"}display(e){e.forEach(t=>{const s=this.wrapper.querySelector(".card");this.currentY=t.boundingClientRect.y,this.currentRatio=t.intersectionRatio,this.isIntersecting=t.isIntersecting,this.previousY&&this.currentY<this.previousY?s.style.transform="rotate3d(1, 0, 0, 45deg) translateZ(-100px)":s.style.transform="rotate3d(1, 0, 0, -45deg) translateZ(-100px)",t.intersectionRatio>0&&(s.style.opacity="1",s.style.transform="rotate3d(1, 0, 0, 0deg) translateZ(0px)"),t.intersectionRatio<.1&&(s.style.opacity="0"),this.previousY=this.currentY,this.previousRatio=this.currentRatio})}renderHtml(){return`
            <div class="card">
                <div class="card__img"></div>
                <div class="card__content">${this.getProp("name")}</div>
            </div>
        `}renderStyle(){return`
            .card {
                padding: 10px;
                font-family: sans-serif;
                display: flex;
                align-items: center;
                margin: 10px;
                border-radius: 10px;
                background-color: #a9d3e9;
                box-shadow: 0 8px 20px -10px #00000085;
                opacity: 0;
                transition: all 1s ease;
            } 

            .card__img {
                background-image: url('${this.getProp("img")}');
                width: 50px;
                height: 50px;
                background-size: contain;
                border-radius: 50px;
            }

            .card__content {
                margin: 15px;
            }
        `}}customElements.define(o.tag,o);customElements.define("kami-infinite-list",c);
