import"./modulepreload-polyfill.b7f2da20.js";import{K as e}from"./index.5a36227e.js";import{K as r}from"./kami-component.5387cbae.js";import"./vendor.981edf70.js";class s extends r{static get observedAttributes(){return["titleprops","urlprops"]}setProperties(){this.props=this.observe({titleprops:this.getAttribute("titleprops"),urlprops:this.getAttribute("urlprops")})}initEventListener(){var t;(t=this.wrapper.querySelector(".photo"))==null||t.addEventListener("click",()=>{alert(`title: ${this.props.titleprops}`)})}connectedCallback(){this.wrapper.style.position="relative",this.observeWindows=new IntersectionObserver(this.display.bind(this),{root:null,rootMargin:"0px",threshold:.1}),this.observeWindows.observe(this)}display(t){t.forEach(i=>{var o;i.intersectionRatio>0&&((o=this.wrapper.querySelector(".photo"))==null||o.classList.add("photo--display"))})}renderHtml(){return`
            <div class="photo">
                <div class="photo__title">${this.props.titleprops}</div>
                <div class="photo__image"></div>
            </div>
        `}renderStyle(){return`
            *{
                margin: 0px;
                padding:0px;
            }

            .photo{
                margin: 5px;
                background-color: ghostwhite;
                font-family: sans-serif;
                cursor: pointer;
                position: relative;
                width: 200px;
                height: 200px;
                box-sizing: border-box;
                color:white;
                transform: translateY(20px);
                opacity: 0;
                transition: all 1s ease;
            }

            .photo--display{
                transform: translateY(0px);
                opacity: 1;
                transition: all 1s ease;
            }

            .photo__title:hover{
                color: grey;
            }

            .photo__title{
                font-size: 15px;
                position: absolute;
                bottom: 0px;
                z-index: 2;
                background-color: #00000040;
                width: 100%;
                padding: 5px;
                box-sizing: border-box;
            }

            .photo__title:first-letter{
                text-transform: capitalize;
            }

            .photo__image{
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: url(${this.props.urlprops});
                background-size: cover;
                z-index:1;
            }
            
            `}}window.onload=function(){customElements.define("photo-custom",s),customElements.define("kami-infinite-list",e)};
