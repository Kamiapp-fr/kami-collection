import"./modulepreload-polyfill.b7f2da20.js";import"./vendor.981edf70.js";import{K as f}from"./kami-component.5387cbae.js";var h=(t=>(t.OK="OK",t.ERROR="ERROR",t.WARNING="WARNING",t.INFO="INFO",t))(h||{}),u=(t=>(t.OK="#008e72",t.ERROR="#ff0056",t.WARNING="#ff3000",t.INFO="#0081ff",t))(u||{});class d extends f{static get tag(){return"kami-progressbar"}get deltaWidth(){return this.width/this.props.time*10}constructor({width:i,time:o,type:p}){super();this.width=i,this.props.width=i,this.props.time=o,this.props.type=p,this.color=u[this.props.type]}setProperties(){this.props=this.observe({width:0,time:0,type:h.INFO})}start(){this.interval=window.setInterval(this.progress.bind(this),10)}progress(){if(this.props.width<=0){clearInterval(this.interval);return}this.props.width-=this.deltaWidth}renderHtml(){return`
            <div class="progressbar">
            </div>
        `}renderStyle(){return`
            .progressbar{
                position: absolute;
                width: ${this.props.width}px;
                height: 5px;
                background-color: ${this.color};
                bottom: 0;
                left: 0;
                border-radius: .2857rem;
            }
        `}}const b={enter:[{opacity:"0",transform:"translateY(20px)"},{opacity:"1",transform:"translateY(0px)"}],out:[{opacity:"1",transform:"translateY(0px)"},{opacity:"0",transform:"translateY(30px)"}]},O={enter:[{opacity:"0",transform:"translateY(-20px)"},{opacity:"1",transform:"translateY(0px)"}],out:[{opacity:"1",transform:"translateY(0px)"},{opacity:"0",transform:"translateY(-30px)"}]};var c=(t=>(t.OK="#00bf9a",t.ERROR="#fd77a4",t.WARNING="#ff9f89",t.INFO="#419ef9",t))(c||{}),g=(t=>(t.OK="check",t.ERROR="error",t.WARNING="warning",t.INFO="info",t))(g||{}),e=(t=>(t.TOP="flash--top",t.TOPLEFT="flash--topleft",t.TOPRIGHT="flash--topright",t.BOTTOM="flash--bottom",t.BOTTOMLEFT="flash--bottomleft",t.BOTTOMRIGHT="flash--bottomright",t))(e||{});const s=class extends f{static get tag(){return"kami-flash"}get closeBtn(){return this.wrapper.querySelector("#close")}get flash(){return this.wrapper.querySelector(".flash")}get dom(){return this.flash}get position(){return this.getAttribute("position")||"BOTTOM"}static get observedAttributes(){return["type","message","position","stack","time","progressbar"]}constructor(){super();this.index=0,this.stackedPosition=0,this.inLoad=!0,this.closed=!1,this.bottomAnimation=b,this.topAnimation=O,this.animations={},this.animations[e.BOTTOM]=this.bottomAnimation,this.animations[e.BOTTOMLEFT]=this.bottomAnimation,this.animations[e.BOTTOMRIGHT]=this.bottomAnimation,this.animations[e.TOP]=this.topAnimation,this.animations[e.TOPLEFT]=this.topAnimation,this.animations[e.TOPRIGHT]=this.topAnimation,this.animationOptions={duration:500,easing:"ease"}}setProperties(){this.inLoad=!0;const t=this.getAttribute("type")||"OK",i=this.getAttribute("position")||"BOTTOM";this.props=this.observe({position:i,type:t,message:this.getAttribute("message")||"Write your message flash here",stack:this.toBoolean(this.getAttribute("stack"))||!0,time:this.getAttribute("time")||null,progressbar:this.hasAttribute("progressbar")||!1})}connectedCallback(){this.toBoolean(this.getAttribute("stack"))?this.stackFlash():this.props.stacked=s.initialPosition,this.props.time&&this.props.progressbar&&this.displayProgressBar(),this.display()}display(){this.flash.animate(this.animations[e[this.props.position]].enter,this.animationOptions),this.props.time&&(setTimeout(this.close.bind(this),this.props.time),this.props.progressbar&&this.progressbar.start()),setTimeout(()=>{this.closeBtn.animate([{opacity:"0",transform:"translateX(20px) rotateZ(45deg)"},{opacity:"1",transform:"translateX(0px) rotateZ(0deg)"}],this.animationOptions).onfinish=()=>{this.inLoad=!1,this.closeBtn.style.opacity="1",this.closeBtn.addEventListener("click",this.close.bind(this))}},400)}displayProgressBar(){this.progressbar=new d({width:this.flash.offsetWidth,time:this.props.time,type:this.props.type}),this.flash.appendChild(this.progressbar)}close(){return new Promise(t=>{this.flash.animate(this.animations[e[this.props.position]].out,this.animationOptions).onfinish=()=>{this.remove(),this.props.stack&&!this.closed&&this.unStackFlash(),t(this)}})}stackFlash(){this.props.stacked=s.stacked[this.position],this.stackedPosition=s.stacked[this.position],s.stacked[this.position]+=s.ofsetPosition,this.index=s.stackedFlash[this.position].length,s.stackedFlash[this.position].push(this)}unStackFlash(){s.stackedFlash[this.position].forEach(t=>{t.index>this.index&&(t.stackedPosition-=s.ofsetPosition,this.position.substring(0,6)==="BOTTOM"?t.dom.style.bottom=`${t.stackedPosition}px`:t.dom.style.top=`${t.stackedPosition}px`)}),s.stacked[this.position]-=s.ofsetPosition,this.closed=!0}renderHtml(){return`
            <div class="flash ${e[this.props.position]}">
                <div class="flash__message flash__message--${h[this.props.type]} shadow__bottom--30px">
                    <iron-icon icon="${g[this.props.type]}"></iron-icon>
                    <div class="flash__text">${this.props.message}</div>
                    <iron-icon class="flash__close" id="close" icon="close"></iron-icon>
                </div>
            </div>
        `}renderStyle(){return`

            .flash{
                position: fixed;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.5s ease;
                z-index: 100;
                width: fit-content;
            }

            .flash--bottom{
                bottom: ${this.props.stacked}px;
                margin: 0% auto;
                left: 0;
                right: 0;
            }

            .flash--top{
                top: ${this.props.stacked}px;
                margin: 0% auto;
                left: 0;
                right: 0;
            }

            .flash--topleft{
                top: ${this.props.stacked}px;
                left: 20px;
            }

            .flash--topright{
                top: ${this.props.stacked}px;
                right: 20px;
            }

            .flash--bottomleft{
                bottom: ${this.props.stacked}px;
                left: 20px;
            }

            .flash--bottomright{
                bottom: ${this.props.stacked}px;
                right: 20px;
            }

            .flash__message{
                padding: 10px;
                border-radius: .2857rem;
                align-items: center;
                justify-content: space-around;
                display: flex;
            }

            .flash__text{
                padding-right: 10px;
                padding-left: 10px;
                font-family: sans-serif;
            }

            .flash__message--${h.ERROR}{
                background-color: ${c.ERROR};
                color: white;
            }

            .flash__message--${h.OK}{
                background-color: ${c.OK};
                color: white;
            }

            .flash__message--${h.WARNING}{
                background-color: ${c.WARNING};
                color: white;
            }

            .flash__message--${h.INFO}{
                background-color: ${c.INFO};
                color: white;
            }

            .flash__close{
                cursor: pointer;
                opacity: 0;
            }

            .flash__close:hover{
                transition : all 0.5s ease;
            }
        `}static createFlash(t=s.tag,i,o,p,a=!0,l=null,m){const n=document.createElement(t);n.setAttribute("type",i),n.setAttribute("position",p),n.setAttribute("stack",a.toString()),l&&n.setAttribute("time",l),m&&n.setAttribute("progressbar","true"),o!==""&&n.setAttribute("message",o),document.body.appendChild(n)}static closeAll(){for(const[t,i]of Object.entries(s.stackedFlash))i.forEach(o=>{o.close().then(()=>{s.stacked[t]=s.initialPosition})})}};let r=s;r.initialPosition=20;r.ofsetPosition=50;r.stacked={BOTTOM:s.initialPosition,BOTTOMLEFT:s.initialPosition,BOTTOMRIGHT:s.initialPosition,TOP:s.initialPosition,TOPLEFT:s.initialPosition,TOPRIGHT:s.initialPosition};r.stackedFlash={BOTTOM:[],BOTTOMLEFT:[],BOTTOMRIGHT:[],TOP:[],TOPLEFT:[],TOPRIGHT:[]};customElements.get(d.tag)||customElements.define(d.tag,d);window.onload=function(){customElements.define(r.tag,r),r.createFlash("kami-flash","INFO","Flash generate with the createFlash() methode","BOTTOM",!0,"5000",!0),document.querySelectorAll(".create").forEach(i=>{i.addEventListener("click",function(){let o=document.querySelector("#type"),p=document.querySelector("#message"),a=document.createElement("kami-flash"),l=document.querySelector("#time"),m=document.querySelector("#progressbar");a.setAttribute("type",o.options[o.selectedIndex].value),a.setAttribute("position",this.id),a.setAttribute("stack","true"),p.value&&a.setAttribute("message",p.value),l.value&&a.setAttribute("time",l.value),m.checked&&a.setAttribute("progressbar","true"),document.body.append(a)})}),document.body.querySelector("#close").addEventListener("click",()=>{r.closeAll()})};
