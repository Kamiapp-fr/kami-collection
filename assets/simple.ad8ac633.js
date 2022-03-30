var r=Object.defineProperty;var p=(e,t,s)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var o=(e,t,s)=>(p(e,typeof t!="symbol"?t+"":t,s),s);import{K as n}from"./kami-component.8dc500b2.js";import{K as a}from"./index.3cbcadf3.js";import"./vendor.2a8d4232.js";class l extends n{constructor(){super(...arguments);o(this,"observeWindows")}static get observedAttributes(){return["titleprops","bodyprops"]}setProperties(){this.props=this.observe({titleprops:this.getAttribute("titleprops"),bodyprops:this.getAttribute("bodyprops")})}initEventListener(){var t;(t=this.wrapper.querySelector(".post"))==null||t.addEventListener("click",()=>{alert(`title: ${this.props.titleprops} body: ${this.props.bodyprops}`)})}connectedCallback(){this.observeWindows=new IntersectionObserver(this.display.bind(this),{root:null,rootMargin:"0px",threshold:.1}),this.observeWindows.observe(this),this.wrapper.style.position="relative"}display(t){t.forEach(s=>{var i;s.intersectionRatio>0&&((i=this.wrapper.querySelector(".post"))==null||i.classList.add("post--display"))})}renderHtml(){return`
            <div class="post">
                <div class="post__title">${this.props.titleprops}</div>
                <div class="post__body">${this.props.bodyprops}</div>
            </div>
        `}renderStyle(){return`
            .post{
                margin: 5px;
                padding: 5px;
                background-color: ghostwhite;
                font-family: sans-serif;
                cursor: pointer;
                transform: translateY(20px);
                opacity: 0;
                transition: all 1s ease;
            }

            .post--display{
                transform: translateY(0px);
                opacity: 1;
                transition: all 1s ease;
            }

            .post:hover{
                color: white;
                background-color: grey;
            }

            .post__title{
                font-size: 20px;
                margin: 5px 0px;
            }

            .post__title:first-letter{
                text-transform: capitalize;
            }
            
            `}}window.onload=function(){customElements.define("post-custom",l),customElements.define("kami-infinite-list",a),document.querySelector("kami-infinite-list").addEventListener("clickElement",e=>{console.log(e.detail)})};
