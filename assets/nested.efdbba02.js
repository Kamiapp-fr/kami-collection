import"./modulepreload-polyfill.b7f2da20.js";import{K as s}from"./kami-component.5387cbae.js";import{K as a}from"./index.5a36227e.js";import"./vendor.981edf70.js";class e extends s{static get tag(){return"card-component"}static get observedAttributes(){return["name","img"]}setProperties(){this.props=this.observe({name:this.getAttribute("name")||"name",img:this.getAttribute("img")||"img"})}connectedCallback(){this.previousY=0,this.previousRatio=0,this.observeWindows=new IntersectionObserver(this.display.bind(this),{root:null,rootMargin:"50px",threshold:.1}),this.observeWindows.observe(this),this.wrapper.style.position="relative"}display(r){r.forEach(t=>{const i=this.wrapper.querySelector(".card");this.currentY=t.boundingClientRect.y,this.currentRatio=t.intersectionRatio,this.isIntersecting=t.isIntersecting,this.previousY&&this.currentY<this.previousY?i.style.transform="rotate3d(1, 0, 0, 45deg) translateZ(-100px)":i.style.transform="rotate3d(1, 0, 0, -45deg) translateZ(-100px)",t.intersectionRatio>0&&(i.style.opacity="1",i.style.transform="rotate3d(1, 0, 0, 0deg) translateZ(0px)"),t.intersectionRatio<.1&&(i.style.opacity="0"),this.previousY=this.currentY,this.previousRatio=this.currentRatio})}renderHtml(){return`
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
        `}}customElements.define(e.tag,e);customElements.define("kami-infinite-list",a);
