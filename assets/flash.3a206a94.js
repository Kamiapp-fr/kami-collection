var T=Object.defineProperty;var k=(t,s,o)=>s in t?T(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o;var e=(t,s,o)=>(k(t,typeof s!="symbol"?s+"":s,o),o);import{K as u}from"./kami-component.8dc500b2.js";import"./vendor.2a8d4232.js";var l=(t=>(t.OK="OK",t.ERROR="ERROR",t.WARNING="WARNING",t.INFO="INFO",t))(l||{}),g=(t=>(t.OK="#008e72",t.ERROR="#ff0056",t.WARNING="#ff3000",t.INFO="#0081ff",t))(g||{});class f extends u{constructor({width:s,time:o,type:r}){super();e(this,"color");e(this,"interval");e(this,"width");this.width=s,this.props.width=s,this.props.time=o,this.props.type=r,this.color=g[this.props.type]}static get tag(){return"kami-progressbar"}get deltaWidth(){return this.width/this.props.time*10}setProperties(){this.props=this.observe({width:0,time:0,type:l.INFO})}start(){this.interval=window.setInterval(this.progress.bind(this),10)}progress(){if(this.props.width<=0){clearInterval(this.interval);return}this.props.width-=this.deltaWidth}renderHtml(){return`
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
        `}}const y={enter:[{opacity:"0",transform:"translateY(20px)"},{opacity:"1",transform:"translateY(0px)"}],out:[{opacity:"1",transform:"translateY(0px)"},{opacity:"0",transform:"translateY(30px)"}]},x={enter:[{opacity:"0",transform:"translateY(-20px)"},{opacity:"1",transform:"translateY(0px)"}],out:[{opacity:"1",transform:"translateY(0px)"},{opacity:"0",transform:"translateY(-30px)"}]};var c=(t=>(t.OK="#00bf9a",t.ERROR="#fd77a4",t.WARNING="#ff9f89",t.INFO="#419ef9",t))(c||{}),b=(t=>(t.OK="check",t.ERROR="error",t.WARNING="warning",t.INFO="info",t))(b||{}),a=(t=>(t.TOP="flash--top",t.TOPLEFT="flash--topleft",t.TOPRIGHT="flash--topright",t.BOTTOM="flash--bottom",t.BOTTOMLEFT="flash--bottomleft",t.BOTTOMRIGHT="flash--bottomright",t))(a||{});const i=class extends u{constructor(){super();e(this,"inLoad");e(this,"bottomAnimation");e(this,"topAnimation");e(this,"animations");e(this,"animationOptions");e(this,"progressbar");e(this,"closed");e(this,"index");e(this,"stackedPosition");this.index=0,this.stackedPosition=0,this.inLoad=!0,this.closed=!1,this.bottomAnimation=y,this.topAnimation=x,this.animations={},this.animations[a.BOTTOM]=this.bottomAnimation,this.animations[a.BOTTOMLEFT]=this.bottomAnimation,this.animations[a.BOTTOMRIGHT]=this.bottomAnimation,this.animations[a.TOP]=this.topAnimation,this.animations[a.TOPLEFT]=this.topAnimation,this.animations[a.TOPRIGHT]=this.topAnimation,this.animationOptions={duration:500,easing:"ease"}}static get tag(){return"kami-flash"}get closeBtn(){return this.wrapper.querySelector("#close")}get flash(){return this.wrapper.querySelector(".flash")}get dom(){return this.flash}get position(){return this.getAttribute("position")||"BOTTOM"}static get observedAttributes(){return["type","message","position","stack","time","progressbar"]}setProperties(){this.inLoad=!0;const s=this.getAttribute("type")||"OK",o=this.getAttribute("position")||"BOTTOM";this.props=this.observe({position:o,type:s,message:this.getAttribute("message")||"Write your message flash here",stack:this.toBoolean(this.getAttribute("stack"))||!0,time:this.getAttribute("time")||null,progressbar:this.hasAttribute("progressbar")||!1})}connectedCallback(){this.toBoolean(this.getAttribute("stack"))?this.stackFlash():this.props.stacked=i.initialPosition,this.props.time&&this.props.progressbar&&this.displayProgressBar(),this.display()}display(){this.flash.animate(this.animations[a[this.props.position]].enter,this.animationOptions),this.props.time&&(setTimeout(this.close.bind(this),this.props.time),this.props.progressbar&&this.progressbar.start()),setTimeout(()=>{this.closeBtn.animate([{opacity:"0",transform:"translateX(20px) rotateZ(45deg)"},{opacity:"1",transform:"translateX(0px) rotateZ(0deg)"}],this.animationOptions).onfinish=()=>{this.inLoad=!1,this.closeBtn.style.opacity="1",this.closeBtn.addEventListener("click",this.close.bind(this))}},400)}displayProgressBar(){this.progressbar=new f({width:this.flash.offsetWidth,time:this.props.time,type:this.props.type}),this.flash.appendChild(this.progressbar)}close(){return new Promise(s=>{this.flash.animate(this.animations[a[this.props.position]].out,this.animationOptions).onfinish=()=>{this.remove(),this.props.stack&&!this.closed&&this.unStackFlash(),s(this)}})}stackFlash(){this.props.stacked=i.stacked[this.position],this.stackedPosition=i.stacked[this.position],i.stacked[this.position]+=i.ofsetPosition,this.index=i.stackedFlash[this.position].length,i.stackedFlash[this.position].push(this)}unStackFlash(){i.stackedFlash[this.position].forEach(s=>{s.index>this.index&&(s.stackedPosition-=i.ofsetPosition,this.position.substring(0,6)==="BOTTOM"?s.dom.style.bottom=`${s.stackedPosition}px`:s.dom.style.top=`${s.stackedPosition}px`)}),i.stacked[this.position]-=i.ofsetPosition,this.closed=!0}renderHtml(){return`
            <div class="flash ${a[this.props.position]}">
                <div class="flash__message flash__message--${l[this.props.type]} shadow__bottom--30px">
                    <iron-icon icon="${b[this.props.type]}"></iron-icon>
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

            .flash__message--${l.ERROR}{
                background-color: ${c.ERROR};
                color: white;
            }

            .flash__message--${l.OK}{
                background-color: ${c.OK};
                color: white;
            }

            .flash__message--${l.WARNING}{
                background-color: ${c.WARNING};
                color: white;
            }

            .flash__message--${l.INFO}{
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
        `}static createFlash(s=i.tag,o,r,n,d=!0,m=null,O){const p=document.createElement(s);p.setAttribute("type",o),p.setAttribute("position",n),p.setAttribute("stack",d.toString()),m&&p.setAttribute("time",m),O&&p.setAttribute("progressbar","true"),r!==""&&p.setAttribute("message",r),document.body.appendChild(p)}static closeAll(){for(const[s,o]of Object.entries(i.stackedFlash))o.forEach(r=>{r.close().then(()=>{i.stacked[s]=i.initialPosition})})}};let h=i;e(h,"initialPosition",20),e(h,"ofsetPosition",50),e(h,"stacked",{BOTTOM:i.initialPosition,BOTTOMLEFT:i.initialPosition,BOTTOMRIGHT:i.initialPosition,TOP:i.initialPosition,TOPLEFT:i.initialPosition,TOPRIGHT:i.initialPosition}),e(h,"stackedFlash",{BOTTOM:[],BOTTOMLEFT:[],BOTTOMRIGHT:[],TOP:[],TOPLEFT:[],TOPRIGHT:[]});customElements.get(f.tag)||customElements.define(f.tag,f);window.onload=function(){customElements.define(h.tag,h),h.createFlash("kami-flash","INFO","Flash generate with the createFlash() methode","BOTTOM",!0,"5000",!0),document.querySelectorAll(".create").forEach(s=>{s.addEventListener("click",function(){let o=document.querySelector("#type"),r=document.querySelector("#message"),n=document.createElement("kami-flash"),d=document.querySelector("#time"),m=document.querySelector("#progressbar");n.setAttribute("type",o.options[o.selectedIndex].value),n.setAttribute("position",this.id),n.setAttribute("stack","true"),r.value&&n.setAttribute("message",r.value),d.value&&n.setAttribute("time",d.value),m.checked&&n.setAttribute("progressbar","true"),document.body.append(n)})}),document.body.querySelector("#close").addEventListener("click",()=>{h.closeAll()})};
