var s=Object.defineProperty;var p=(i,t,o)=>t in i?s(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o;var r=(i,t,o)=>(p(i,typeof t!="symbol"?t+"":t,o),o);import{K as n}from"./kami-component.8dc500b2.js";import{K as a}from"./index.3cbcadf3.js";import"./vendor.2a8d4232.js";class l extends n{constructor(){super(...arguments);r(this,"observeWindows")}static get observedAttributes(){return["titleprops","urlprops"]}setProperties(){this.props=this.observe({titleprops:this.getAttribute("titleprops"),urlprops:this.getAttribute("urlprops")})}initEventListener(){var t;(t=this.wrapper.querySelector(".photo"))==null||t.addEventListener("click",()=>{alert(`title: ${this.props.titleprops}`)})}connectedCallback(){this.wrapper.style.position="relative",this.observeWindows=new IntersectionObserver(this.display.bind(this),{root:null,rootMargin:"0px",threshold:.1}),this.observeWindows.observe(this)}display(t){t.forEach(o=>{var e;o.intersectionRatio>0&&((e=this.wrapper.querySelector(".photo"))==null||e.classList.add("photo--display"))})}renderHtml(){return`
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
            
            `}}window.onload=function(){customElements.define("photo-custom",l),customElements.define("kami-infinite-list",a)};
