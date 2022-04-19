import"./modulepreload-polyfill.b7f2da20.js";import{K as r}from"./kami-component.5387cbae.js";import{K as o}from"./index.5a36227e.js";import"./vendor.981edf70.js";class p extends r{static get observedAttributes(){return["titleprops","labelsprops"]}get labels(){try{return JSON.parse(this.props.labelsprops)}catch{return[]}}setProperties(){this.props=this.observe({titleprops:this.getAttribute("titleprops"),labelsprops:this.getAttribute("labelsprops")})}initEventListener(){var t;(t=this.wrapper.querySelector(".post"))==null||t.addEventListener("click",()=>{alert(`title: ${this.props.titleprops} body: ${this.props.bodyprops}`)})}connectedCallback(){this.observeWindows=new IntersectionObserver(this.display.bind(this),{root:null,rootMargin:"0px",threshold:.1}),this.observeWindows.observe(this),this.wrapper.style.position="relative"}display(t){t.forEach(i=>{var s;i.intersectionRatio>0&&((s=this.wrapper.querySelector(".post"))==null||s.classList.add("post--display"))})}renderHtml(){return`
            <div class="post">
                <div class="post__title">${this.props.titleprops}</div>
                <div class="post__body">${this.labels.map(t=>`
                <div style="background-color: #${t.color} ;">
                  ${t.name}
                </div>
              `.trim()).join("")}
            </div>
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
            
            `}}window.onload=function(){customElements.define("post-custom",p),customElements.define("kami-infinite-list",o),document.querySelector("kami-infinite-list").addEventListener("clickElement",e=>{console.log(e.detail)})};
