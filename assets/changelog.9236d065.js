import"./modulepreload-polyfill.b7f2da20.js";import{d as h,r as v,e as m,t as p,s as b,$ as d,m as w,a as f}from"./vendor.981edf70.js";import{K as x,a as c}from"./kami-theme.c85d0c6b.js";import{K as y}from"./kami-transition.4972eec3.js";var o=(e=>(e.GITHUB="github",e.GITLAB="gitlab",e))(o||{});class k{constructor(a){this.data=a}}class _ extends k{get provider(){return o.GITHUB}getContent(){return Array.isArray(this.data)?this.data.reduce((a,{body:i})=>a+i,""):this.data.body}getDate(){var a;return Array.isArray(this.data)?h((a=this.data.pop())==null?void 0:a.published_at).toDate():h(this.data.published_at).toDate()}}class T extends k{get provider(){return o.GITLAB}getContent(){return Array.isArray(this.data)?this.data.reduce((a,{description:i})=>a+i,""):this.data.description}getDate(){var a;return Array.isArray(this.data)?h((a=this.data.pop())==null?void 0:a.released_at).toDate():h(this.data.released_at).toDate()}}function A(e,a){switch(e){case o.GITHUB:return new _(a);case o.GITLAB:return new T(a);default:throw new TypeError("Provider doesn't exist or is not define !")}}var C=Object.defineProperty,$=Object.getOwnPropertyDescriptor,s=(e,a,i,n)=>{for(var r=n>1?void 0:n?$(a,i):a,l=e.length-1,g;l>=0;l--)(g=e[l])&&(r=(n?g(a,i,r):g(r))||r);return n&&r&&C(a,i,r),r};customElements.get("kami-markdown")||customElements.define("kami-markdown",x);customElements.get("kami-transition")||customElements.define("kami-transition",y);const u=class extends b{constructor(){super(...arguments);this.display=!1}static get tag(){return"kami-changelog"}get hasRelease(){return this.release&&this.release.getContent()!==void 0&&this.release.getContent()!==""}async connectedCallback(){if(super.connectedCallback(),!this.src)throw new Error("Missing src attribute !");if(!this.provider)throw new Error("Missing provider attribute !");const a=await(await fetch(this.src)).json();this.release=A(this.provider,a)}toggleDisplay(){this.display=!this.display}releaseTemplate(e){return d`
      <div class="kami-changelog__release">
        <h3 class="kami-changelog__title">${this.header||u.tag}</h3>
        <div class="kami-changelog__markdown">
          <kami-markdown>
            ${e==null?void 0:e.getContent()}
          </kami-markdown>
        </div>
      </div>
    `}btnTemplate(e){return d`
      <svg @click=${this.toggleDisplay} class="kami-changelog__btn" viewBox="0 0 24 25">
        <path d=${e}></path>
      </svg>
    `}render(){return d`
      <kami-transition transition="slide-y"  show="${this.hasRelease}">
        <div class="kami-changelog">
          <kami-transition transition="slide-y" duration="200" show="${this.display}">
            ${this.releaseTemplate(this.release)}
          </kami-transition>
          <kami-transition transition="fade" duration="250" easing="linear" show="${this.display}">
            <div slot="in">${this.btnTemplate(w)}</div>
            <div slot="out">${this.btnTemplate(f)}</div>
          </kami-transition>
        </div>
      </kami-transition>
    `}};let t=u;t.styles=v`
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb  {
      background: var(--kami-theme-primary);
    }

    :host {
      position: var(--kami-changelog-position, fixed);
      bottom: var(--kami-changelog-bottom, 0);
      right: var(--kami-changelog-right, 0);
      left: var(--kami-changelog-left, auto);
      top: var(--kami-changelog-top, auto);
      margin: var(--kami-changelog-margin, 30px 40px) !important;
    }

    .kami-changelog {
      position: relative;
      font-family: var(--kami-theme-font-primary);
      width: var(--kami-changelog-release-width, 70px);
      height: var(--kami-changelog-release-height, 70px);
    }

    .kami-changelog__btn {
      fill: var(--kami-theme-primary);
      background-color: var(--kami-theme-background);
      box-shadow: var(--kami-theme-shadow);
      border-radius: var(--kami-changelog-btn-raduis, 100%);
      padding: var(--kami-changelog-btn-padding, 10px);
      height: calc(var(--kami-changelog-btn-height, 70px) - var(--kami-changelog-btn-padding, 10px) * 2);
      width: calc(var(--kami-changelog-btn-width, 70px) - var(--kami-changelog-btn-padding, 10px) * 2);
      cursor: pointer;
    }

    .kami-changelog__title {
      background-color: var(--kami-theme-primary);
      color: var(--kami-theme-white);
      background-image: var(--kami-theme-gradient-primary);
      text-shadow: var(--kami-theme-text-shadow);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin: 0;
      padding: 15px;
      font-size: 23px;
    }

    .kami-changelog__release {
      background-color: var(--kami-theme-background);
      box-shadow: var(--kami-theme-shadow);
      border-radius: var(--kami-theme-radius);
      bottom: var(--kami-changelog-release-bottom, 90px);
      right: var(--kami-changelog-release-right, 0px);
      width: var(--kami-changelog-release-width, 400px);
      height: var(--kami-changelog-release-height, 50vh);
      position: absolute;
      box-sizing: border-box;
      overflow: hidden;
    }

    .kami-changelog__markdown {
      padding: 10px 25px;
      overflow: hidden auto;
      box-sizing: border-box;
      height: calc(100% - 56px);
    }
  `;s([m()],t.prototype,"src",2);s([m()],t.prototype,"provider",2);s([m()],t.prototype,"header",2);s([p()],t.prototype,"release",2);s([p()],t.prototype,"display",2);customElements.define(t.tag,t);customElements.define(c.tag,c);
