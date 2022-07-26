var ml=Object.defineProperty,gl=Object.defineProperties;var bl=Object.getOwnPropertyDescriptors;var zi=Object.getOwnPropertySymbols;var vl=Object.prototype.hasOwnProperty,yl=Object.prototype.propertyIsEnumerable;var Hi=(n,e,t)=>e in n?ml(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pe=(n,e)=>{for(var t in e||(e={}))vl.call(e,t)&&Hi(n,t,e[t]);if(zi)for(var t of zi(e))yl.call(e,t)&&Hi(n,t,e[t]);return n},qe=(n,e)=>gl(n,bl(e));const _l=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};_l();const $r=[],Rr=(n,e)=>{$r[n]=e},tn=Object.freeze({HOST:"host",KNOB:"knob",SLOT:"slot",PREFIX:"prefix",SUFFIX:"suffix",WRAPPER:"wrapper"}),Ot=n=>n instanceof HTMLTemplateElement,Fs=(n,e)=>t=>{const{element:r,target:s}=t.dataset;return r===n&&s===e},mr=n=>Ot(n)?n.content.firstElementChild:null,xn=(n,e,t)=>$r[n].find(Fs(e,t)),wl=(n,e,t)=>$r[n].filter(Fs(e,t)),ks=(n,e,t)=>$r[n].some(Fs(e,t));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function oe(n,e,t,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(i=(s<3?o(i):s>3?o(e,t,i):o(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zs=Symbol(),Ui=new Map;class wa{constructor(e,t){if(this._$cssResult$=!0,t!==zs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ui.get(this.cssText);return Bs&&e===void 0&&(Ui.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const ka=n=>new wa(typeof n=="string"?n:n+"",zs),le=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[i+1],n[0]);return new wa(t,zs)},kl=(n,e)=>{Bs?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),s=window.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,n.appendChild(r)})},ji=Bs?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ka(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xr;const Vi=window.trustedTypes,xl=Vi?Vi.emptyScript:"",Gi=window.reactiveElementPolyfillSupport,xs={toAttribute(n,e){switch(e){case Boolean:n=n?xl:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},xa=(n,e)=>e!==n&&(e==e||n==n),Jr={attribute:!0,type:String,converter:xs,reflect:!1,hasChanged:xa};class Yt extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const s=this._$Eh(r,t);s!==void 0&&(this._$Eu.set(s,r),e.push(s))}),e}static createProperty(e,t=Jr){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Jr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of r)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(ji(s))}else e!==void 0&&t.push(ji(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return kl(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=Jr){var s,i;const o=this.constructor._$Eh(e,r);if(o!==void 0&&r.reflect===!0){const a=((i=(s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&i!==void 0?i:xs.toAttribute)(t,r.type);this._$Ei=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(e,t){var r,s,i;const o=this.constructor,a=o._$Eu.get(e);if(a!==void 0&&this._$Ei!==a){const c=o.getPropertyOptions(a),l=c.converter,u=(i=(s=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&s!==void 0?s:typeof l=="function"?l:null)!==null&&i!==void 0?i:xs.fromAttribute;this._$Ei=a,this[a]=u(t,c.type),this._$Ei=null}}requestUpdate(e,t,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||xa)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,i)=>this[i]=s),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}Yt.finalized=!0,Yt.elementProperties=new Map,Yt.elementStyles=[],Yt.shadowRootOptions={mode:"open"},Gi==null||Gi({ReactiveElement:Yt}),((Xr=globalThis.reactiveElementVersions)!==null&&Xr!==void 0?Xr:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qr;const nn=globalThis.trustedTypes,Wi=nn?nn.createPolicy("lit-html",{createHTML:n=>n}):void 0,ut=`lit$${(Math.random()+"").slice(9)}$`,Hs="?"+ut,El=`<${Hs}>`,rn=document,Cn=(n="")=>rn.createComment(n),Tn=n=>n===null||typeof n!="object"&&typeof n!="function",Ea=Array.isArray,Aa=n=>{var e;return Ea(n)||typeof((e=n)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},_n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zi=/-->/g,Ki=/>/g,Ct=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Yi=/'/g,Xi=/"/g,Sa=/^(?:script|style|textarea|title)$/i,Al=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),M=Al(1),Ze=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Ji=new WeakMap,Ca=(n,e,t)=>{var r,s;const i=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new ln(e.insertBefore(Cn(),a),a,void 0,t!=null?t:{})}return o._$AI(n),o},Qt=rn.createTreeWalker(rn,129,null,!1),Ta=(n,e)=>{const t=n.length-1,r=[];let s,i=e===2?"<svg>":"",o=_n;for(let c=0;c<t;c++){const l=n[c];let u,h,p=-1,d=0;for(;d<l.length&&(o.lastIndex=d,h=o.exec(l),h!==null);)d=o.lastIndex,o===_n?h[1]==="!--"?o=Zi:h[1]!==void 0?o=Ki:h[2]!==void 0?(Sa.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Ct):h[3]!==void 0&&(o=Ct):o===Ct?h[0]===">"?(o=s!=null?s:_n,p=-1):h[1]===void 0?p=-2:(p=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?Ct:h[3]==='"'?Xi:Yi):o===Xi||o===Yi?o=Ct:o===Zi||o===Ki?o=_n:(o=Ct,s=void 0);const y=o===Ct&&n[c+1].startsWith("/>")?" ":"";i+=o===_n?l+El:p>=0?(r.push(u),l.slice(0,p)+"$lit$"+l.slice(p)+ut+y):l+ut+(p===-2?(r.push(void 0),c):y)}const a=i+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Wi!==void 0?Wi.createHTML(a):a,r]};class $n{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,c=this.parts,[l,u]=Ta(e,t);if(this.el=$n.createElement(l,r),Qt.currentNode=this.el.content,t===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(s=Qt.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(ut)){const d=u[o++];if(h.push(p),d!==void 0){const y=s.getAttribute(d.toLowerCase()+"$lit$").split(ut),v=/([.?@])?(.*)/.exec(d);c.push({type:1,index:i,name:v[2],strings:y,ctor:v[1]==="."?Ra:v[1]==="?"?Da:v[1]==="@"?La:Bn})}else c.push({type:6,index:i})}for(const p of h)s.removeAttribute(p)}if(Sa.test(s.tagName)){const h=s.textContent.split(ut),p=h.length-1;if(p>0){s.textContent=nn?nn.emptyScript:"";for(let d=0;d<p;d++)s.append(h[d],Cn()),Qt.nextNode(),c.push({type:2,index:++i});s.append(h[p],Cn())}}}else if(s.nodeType===8)if(s.data===Hs)c.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(ut,h+1))!==-1;)c.push({type:7,index:i}),h+=ut.length-1}i++}}static createElement(e,t){const r=rn.createElement("template");return r.innerHTML=e,r}}function Pt(n,e,t=n,r){var s,i,o,a;if(e===Ze)return e;let c=r!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[r]:t._$Cu;const l=Tn(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((i=c==null?void 0:c._$AO)===null||i===void 0||i.call(c,!1),l===void 0?c=void 0:(c=new l(n),c._$AT(n,t,r)),r!==void 0?((o=(a=t)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[r]=c:t._$Cu=c),c!==void 0&&(e=Pt(n,c._$AS(n,e.values),c,r)),e}class $a{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:s}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:rn).importNode(r,!0);Qt.currentNode=i;let o=Qt.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new ln(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new Ma(o,this,e)),this.v.push(u),l=s[++c]}a!==(l==null?void 0:l.index)&&(o=Qt.nextNode(),a++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ln{constructor(e,t,r,s){var i;this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cg=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pt(this,e,t),Tn(e)?e===ie||e==null||e===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):e!==this._$AH&&e!==Ze&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Aa(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==ie&&Tn(this._$AH)?this._$AA.nextSibling.data=e:this.k(rn.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=$n.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const o=new $a(i,this),a=o.p(this.options);o.m(r),this.k(a),this._$AH=o}}_$AC(e){let t=Ji.get(e.strings);return t===void 0&&Ji.set(e.strings,t=new $n(e)),t}S(e){Ea(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const i of e)s===t.length?t.push(r=new ln(this.A(Cn()),this.A(Cn()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Bn{constructor(e,t,r,s,i){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ie}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Pt(this,e,t,0),o=!Tn(e)||e!==this._$AH&&e!==Ze,o&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=Pt(this,a[r+c],t,c),l===Ze&&(l=this._$AH[c]),o||(o=!Tn(l)||l!==this._$AH[c]),l===ie?e=ie:e!==ie&&(e+=(l!=null?l:"")+i[c+1]),this._$AH[c]=l}o&&!s&&this.C(e)}C(e){e===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ra extends Bn{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===ie?void 0:e}}const Sl=nn?nn.emptyScript:"";class Da extends Bn{constructor(){super(...arguments),this.type=4}C(e){e&&e!==ie?this.element.setAttribute(this.name,Sl):this.element.removeAttribute(this.name)}}class La extends Bn{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=Pt(this,e,t,0))!==null&&r!==void 0?r:ie)===Ze)return;const s=this._$AH,i=e===ie&&s!==ie||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==ie&&(s===ie||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Ma{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Pt(this,e)}}const Cl={P:"$lit$",L:ut,V:Hs,I:1,N:Ta,R:$a,D:Aa,j:Pt,H:ln,O:Bn,F:Da,B:La,W:Ra,Z:Ma},Qi=window.litHtmlPolyfillSupport;Qi==null||Qi($n,ln),((Qr=globalThis.litHtmlVersions)!==null&&Qr!==void 0?Qr:globalThis.litHtmlVersions=[]).push("2.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var es,ts;class ce extends Yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ca(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Ze}}ce.finalized=!0,ce._$litElement$=!0,(es=globalThis.litElementHydrateSupport)===null||es===void 0||es.call(globalThis,{LitElement:ce});const eo=globalThis.litElementPolyfillSupport;eo==null||eo({LitElement:ce});((ts=globalThis.litElementVersions)!==null&&ts!==void 0?ts:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tl=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?qe(Pe({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function q(n){return(e,t)=>t!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(n,e,t):Tl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zn=n=>(...e)=>({_$litDirective$:n,values:e});class Hn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:$l}=Cl,Rl=n=>n===null||typeof n!="object"&&typeof n!="function",Qn=(n,e)=>{var t,r;return e===void 0?((t=n)===null||t===void 0?void 0:t._$litType$)!==void 0:((r=n)===null||r===void 0?void 0:r._$litType$)===e},Dl=n=>n.strings===void 0,to=()=>document.createComment(""),no=(n,e,t)=>{var r;const s=n._$AA.parentNode,i=e===void 0?n._$AB:e._$AA;if(t===void 0){const o=s.insertBefore(to(),i),a=s.insertBefore(to(),i);t=new $l(o,a,n,n.options)}else{const o=t._$AB.nextSibling,a=t._$AM,c=a!==n;if(c){let l;(r=t._$AQ)===null||r===void 0||r.call(t,n),t._$AM=n,t._$AP!==void 0&&(l=n._$AU)!==a._$AU&&t._$AP(l)}if(o!==i||c){let l=t._$AA;for(;l!==o;){const u=l.nextSibling;s.insertBefore(l,i),l=u}}}return t},Ll={},ro=(n,e=Ll)=>n._$AH=e,so=n=>n._$AH,Ml=n=>{n._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oa=zn(class extends Hn{constructor(n){super(n),this.tt=new WeakMap}render(n){return[n]}update(n,[e]){if(Qn(this.it)&&(!Qn(e)||this.it.strings!==e.strings)){const t=so(n).pop();let r=this.tt.get(this.it.strings);if(r===void 0){const s=document.createDocumentFragment();r=Ca(ie,s),r.setConnected(!1),this.tt.set(this.it.strings,r)}ro(r,[t]),no(r,void 0,t)}if(Qn(e)){if(!Qn(this.it)||this.it.strings!==e.strings){const t=this.tt.get(e.strings);if(t!==void 0){const r=so(t).pop();Ml(n),no(n,void 0,r),ro(n,[r])}}this.it=e}else this.it=void 0;return this.render(e)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=(n,e)=>{var t,r;const s=n._$AN;if(s===void 0)return!1;for(const i of s)(r=(t=i)._$AO)===null||r===void 0||r.call(t,e,!1),An(i,e);return!0},gr=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},Na=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),Il(e)}};function Ol(n){this._$AN!==void 0?(gr(this),this._$AM=n,Na(this)):this._$AM=n}function Nl(n,e=!1,t=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let i=t;i<r.length;i++)An(r[i],!1),gr(r[i]);else r!=null&&(An(r,!1),gr(r));else An(this,n)}const Il=n=>{var e,t,r,s;n.type==Dr.CHILD&&((e=(r=n)._$AP)!==null&&e!==void 0||(r._$AP=Nl),(t=(s=n)._$AQ)!==null&&t!==void 0||(s._$AQ=Ol))};class Pl extends Hn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Na(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(An(this,e),gr(this))}setValue(e){if(Dl(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ql{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class Fl{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.q=t))}resume(){var e;(e=this.q)===null||e===void 0||e.call(this),this.Y=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const io=n=>!Rl(n)&&typeof n.then=="function";class Bl extends Pl{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new ql(this),this._$CK=new Fl}render(...e){var t;return(t=e.find(r=>!io(r)))!==null&&t!==void 0?t:Ze}update(e,t){const r=this._$Cyt;let s=r.length;this._$Cyt=t;const i=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const c=t[a];if(!io(c))return this._$Cwt=a,c;a<s&&c===r[a]||(this._$Cwt=1073741823,s=0,Promise.resolve(c).then(async l=>{for(;o.get();)await o.get();const u=i.deref();if(u!==void 0){const h=u._$Cyt.indexOf(c);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(l))}}))}return Ze}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}}const Us=zn(Bl);function Un(n){return!!n&&Array.isArray(n.modules)&&n.modules.some(e=>{var t,r;return((t=e.exports)==null?void 0:t.some(s=>s.kind==="custom-element-definition"))||((r=e.declarations)==null?void 0:r.some(s=>s.customElement))})}const zl=n=>n.kind==="custom-element-definition",Hl=n=>n.customElement,Ia=n=>!(n.privacy==="private"||n.privacy==="protected");async function Ul(n){try{const t=await(await fetch(n)).json();if(Un(t))return t;throw new Error(`No element definitions found at ${n}`)}catch(e){return console.error(e),null}}function Lr(n,e){var r;const t=((r=n.modules)!=null?r:[]).flatMap(s=>{var i,o;return(o=(i=s.exports)==null?void 0:i.filter(zl))!=null?o:[]});return e?t.filter(s=>e.includes(s.name)):t}const js=(n,e)=>{var c,l,u,h,p,d,y,v;const t=Lr(n),r=e?t.findIndex(A=>(A==null?void 0:A.name)===e):0,s=t[r];if(!s)return null;const{name:i,module:o}=s.declaration,a=o?(l=(c=n.modules.find(A=>A.path===o.replace(/^\//,"")))==null?void 0:c.declarations)==null?void 0:l.find(A=>A.name===i):n.modules.flatMap(A=>A.declarations).find(A=>(A==null?void 0:A.name)===i);if(!a||!Hl(a))throw new Error(`Could not find declaration for ${e}`);return{customElement:!0,name:s.name,description:a==null?void 0:a.description,slots:(u=a.slots)!=null?u:[],attributes:(h=a.attributes)!=null?h:[],members:(p=a.members)!=null?p:[],events:(d=a.events)!=null?d:[],cssParts:(y=a.cssParts)!=null?y:[],cssProperties:[...(v=a.cssProperties)!=null?v:[]].sort((A,k)=>A.name>k.name?1:-1)}},Vs=(n=[])=>n.filter(e=>e.kind==="field"&&Ia(e)),jl=(n=[])=>n.filter(e=>e.kind==="method"&&Ia(e)),Gs=M`
  <div part="warning">No custom elements found in the JSON file.</div>
`,Ws=n=>{class e extends n{constructor(){super(...arguments);this.jsonFetched=Promise.resolve(null)}willUpdate(){const{src:r}=this;this.manifest?Un(this.manifest)?(this.lastSrc=void 0,this.jsonFetched=Promise.resolve(this.manifest)):console.error("No custom elements found in the `manifest` object."):r&&this.lastSrc!==r&&(this.lastSrc=r,this.jsonFetched=Ul(r))}}return oe([q()],e.prototype,"src",void 0),oe([q({attribute:!1})],e.prototype,"manifest",void 0),oe([q({reflect:!0,converter:{fromAttribute:t=>t.split(","),toAttribute:t=>t.join(",")}})],e.prototype,"only",void 0),oe([q()],e.prototype,"selected",void 0),e},Zs=n=>typeof n=="string"&&n.startsWith("'")&&n.endsWith("'")?n.slice(1,n.length-1):n;function Ks(n,...e){const t=document.createElement("template");return t.innerHTML=e.reduce((r,s,i)=>r+s+n[i+1],n[0]),t}let Vl=0;const Gl=Ks`
  <style>
    :host {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      box-sizing: border-box;
      position: relative;
      max-width: 150px;
      overflow: hidden;
      min-height: 3rem;
      padding: 0 1rem;
      color: var(--ave-tab-color);
      font-size: 0.875rem;
      line-height: 1.2;
      font-weight: 500;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--ave-tab-indicator-size);
      background-color: var(--ave-primary-color);
      opacity: 0;
    }

    :host([selected]) {
      color: var(--ave-tab-selected-color, var(--ave-primary-color));
    }

    :host([selected])::before {
      opacity: 1;
    }

    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--ave-primary-color);
      opacity: 0;
      transition: opacity 0.1s linear;
    }

    :host(:hover)::after {
      opacity: 0.08;
    }

    :host([focus-ring])::after {
      opacity: 0.12;
    }

    :host([active])::after {
      opacity: 0.16;
    }

    @media (max-width: 600px) {
      :host {
        justify-content: center;
        text-align: center;
      }

      :host::before {
        top: auto;
        right: 0;
        width: 100%;
        height: var(--ave-tab-indicator-size);
      }
    }
  </style>
  <slot></slot>
`;class Pa extends HTMLElement{constructor(){super();this._mousedown=!1,this._selected=!1,this.attachShadow({mode:"open"}).appendChild(Gl.content.cloneNode(!0)),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)})}get selected(){return this._selected}set selected(e){this._selected=e,this.setAttribute("aria-selected",String(e)),this.setAttribute("tabindex",e?"0":"-1"),this.toggleAttribute("selected",e)}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id=`api-viewer-tab-${Vl++}`)}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}}customElements.define("api-viewer-tab",Pa);let Wl=0;const Zl=Ks`
  <style>
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    }

    :host([hidden]) {
      display: none !important;
    }
  </style>
  <slot></slot>
`;class Kl extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).appendChild(Zl.content.cloneNode(!0))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id=`api-viewer-panel-${Wl++}`)}}customElements.define("api-viewer-panel",Kl);const Yl=Ks`
  <style>
    :host {
      display: flex;
      border-bottom-left-radius: var(--ave-border-radius);
      overflow: hidden;
    }

    @media (max-width: 600px) {
      :host {
        flex-direction: column;
      }

      .tabs {
        display: flex;
        flex-grow: 1;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  </style>
  <div class="tabs">
    <slot name="tab"></slot>
  </div>
  <slot name="panel"></slot>
`;class Xl extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(Yl.content.cloneNode(!0));const t=e.querySelectorAll("slot");t[0].addEventListener("slotchange",()=>this._linkPanels()),t[1].addEventListener("slotchange",()=>this._linkPanels()),this.addEventListener("keydown",this.handleEvent),this.addEventListener("click",this.handleEvent)}connectedCallback(){this.setAttribute("role","tablist"),requestAnimationFrame(()=>{this._linkPanels()})}_linkPanels(){const{tabs:e}=this;e.forEach(r=>{const s=r.nextElementSibling;r.setAttribute("aria-controls",s.id),s.setAttribute("aria-labelledby",r.id)});const t=e.find(r=>r.selected)||e[0];this._selectTab(t)}get tabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,t){const{tabs:r}=this,s=r.length;for(let i=0;typeof e=="number"&&i<s;i++,e+=t||1)if(e<0?e=s-1:e>=s&&(e=0),!r[e].hasAttribute("hidden"))return e;return-1}_prevTab(e){const t=this._getAvailableIndex(e.findIndex(r=>r.selected)-1,-1);return e[(t+e.length)%e.length]}_nextTab(e){const t=this._getAvailableIndex(e.findIndex(r=>r.selected)+1,1);return e[t%e.length]}reset(){this.tabs.forEach(e=>{e.selected=!1}),this.querySelectorAll("api-viewer-panel").forEach(e=>{e.hidden=!0})}selectFirst(){const e=this._getAvailableIndex(0,1);this._selectTab(this.tabs[e%this.tabs.length])}_selectTab(e){this.reset();const t=e.getAttribute("aria-controls"),r=this.querySelector(`#${t}`);r&&(e.selected=!0,r.hidden=!1)}handleEvent(e){const{target:t}=e;if(t&&t instanceof Pa){let r;if(e.type==="keydown"){const{tabs:s}=this;switch(e.key){case"ArrowLeft":case"ArrowUp":r=this._prevTab(s);break;case"ArrowDown":case"ArrowRight":r=this._nextTab(s);break;case"Home":r=s[0];break;case"End":r=s[s.length-1];break;default:return}e.preventDefault()}else r=t;this._selectTab(r),r.focus()}}}customElements.define("api-viewer-tabs",Xl);class Ys{constructor(e,t){this._data=[],(this.host=e).addController(this),this.el=t}get data(){return this._data}set data(e){this._data=e,this.updateData(e)}updateData(e){this.host.isConnected&&this.host.requestUpdate()}clear(){this.data=[]}destroy(){this.host.removeController(this)}}class Jl extends Ys{constructor(e,t,r){super(e,t);r.forEach(({name:s})=>{t.addEventListener(s,i=>{const o="-changed";if(s.endsWith(o)){const{knob:a}=e.getKnob(s.replace(o,""));a&&e.syncKnob(t,a)}this.data=[...this.data,i]})})}}const Ql=n=>n[0].toUpperCase()+n.slice(1),qa=n=>Ql(n===""?"content":n),eu=(n,e)=>{const{name:t,value:r}=n;return M`
    <input
      id=${e}
      type="text"
      .value=${String(r)}
      data-name=${t}
      part="input"
    />
  `},oo=(n,e)=>{const{name:t,knobType:r,value:s,options:i}=n;let o;return r==="select"&&Array.isArray(i)?o=M`
      <select id=${e} data-name=${t} data-type=${r} part="select">
        ${i.map(a=>M`<option value=${a}>${a}</option>`)}
      </select>
    `:r==="boolean"?o=M`
      <input
        id=${e}
        type="checkbox"
        .checked=${Boolean(s)}
        data-name=${t}
        data-type=${r}
        part="checkbox"
      />
    `:o=M`
      <input
        id=${e}
        type=${r==="number"?"number":"text"}
        .value=${s==null?"":String(s)}
        data-name=${t}
        data-type=${r}
        part="input"
      />
    `,o},tu=(n,e)=>{const{name:t,content:r}=n;return M`
    <input
      id=${e}
      type="text"
      .value=${r}
      data-type="slot"
      data-slot=${t}
      part="input"
    />
  `},er=(n,e,t,r)=>{const s=n.map(i=>{const{name:o}=i,a=`${t}-${o||"default"}`,c=t==="slot"?qa(o):o;return M`
      <tr>
        <td>
          <label for=${a} part="knob-label">${c}</label>
        </td>
        <td>${r(i,a)}</td>
      </tr>
    `});return M`
    <h3 part="knobs-header" ?hidden=${n.length===0}>${e}</h3>
    <table>
      ${s}
    </table>
  `};class nu extends Ys{constructor(e,t,r,s){super(e,t);this.enabled=!ks(r,t.localName,tn.SLOT),this.data=s.sort((i,o)=>i.name===""?1:o.name===""?-1:i.name.localeCompare(o.name)).map(i=>qe(Pe({},i),{content:qa(i.name)}))}setValue(e,t){this.data=this.data.map(r=>r.name===e?qe(Pe({},r),{content:t}):r)}updateData(e){super.updateData(e),this.enabled&&this.el.isConnected&&e&&e.length&&(this.el.innerHTML="",e.forEach(t=>{let r;const{name:s,content:i}=t;s?(r=document.createElement("div"),r.setAttribute("slot",s),r.textContent=i):r=document.createTextNode(i),this.el.appendChild(r)}))}}class ru extends Ys{constructor(e,t,r){super(e,t);if(r.length){const s=getComputedStyle(t);this.data=r.map(i=>{let o=i.default?Zs(i.default):s.getPropertyValue(i.name);const a=i;return o&&(o=o.trim(),a.default=o,a.value=o),a})}}setValue(e,t){this.data=this.data.map(r=>r.name===e?qe(Pe({},r),{value:t}):r)}updateData(e){super.updateData(e),e.length&&e.forEach(t=>{const{name:r,value:s}=t;s&&(s===t.default?this.el.style.removeProperty(r):this.el.style.setProperty(r,s))})}}const su=n=>{const e=n,t="undefined";return"value"in n&&n.value===void 0&&(e.value=t),` detail: ${JSON.stringify(n).replace(`"${t}"`,t)}`},iu=n=>M`
    ${n.map(e=>M`
        <p part="event-record">
          event:
          ${e.type}.${e.detail==null?ie:su(e.detail)}
        </p>
      `)}
  `;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Es extends Hn{constructor(e){if(super(e),this.it=ie,e.type!==Dr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ie||e==null)return this.ft=void 0,this.it=e;if(e===Ze)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Es.directiveName="unsafeHTML",Es.resultType=1;const Rn=zn(Es);function ou(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var au={text:function(n){return ou(n)},join:function(n){return n.join("")},wrap:function(n,e){return'<span class="'+n+'">'+e+"</span>"}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var sn=function(){return sn=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sn.apply(this,arguments)};function As(n){return n&&n.source||n}var cu={exec:function(){return null}};function wn(n,e,t){return new RegExp(As(e),"m"+(n.case_insensitive?"i":"")+(t?"g":""))}function lu(n){var e=[];function t(a){for(var c=0,l=e;c<l.length;c++){var u=l[c],h=u[0],p=u[1];if(a===h)return p}}var r=[];function s(a){if(!(!a.variants||!a.variants.length)){for(var c=0,l=r;c<l.length;c++){var u=l[c],h=u[0],p=u[1];if(a===h)return p}var d=a.variants.map(function(y){return sn({},a,{variants:void 0},y)});return r.push([a,d]),d}}function i(a,c,l){var u=t(a);if(u)return u;var h={lexemesRe:wn(n,a.lexemes||/\w+/,!0),relevance:a.relevance==null?1:a.relevance,contains:[],terminators:cu,subLanguage:a.subLanguage==null?void 0:typeof a.subLanguage=="string"?[a.subLanguage]:a.subLanguage};e.push([a,h]),a.className&&(h.className=a.className),a.illegal&&(h.illegalRe=wn(n,a.illegal));for(var p=0,d=["endsParent","endsWithParent","skip","excludeBegin","excludeEnd","returnBegin","returnEnd"];p<d.length;p++){var y=d[p];a[y]&&(h[y]=!0)}var v;if(c){var A=a.beginKeywords?"\\b("+a.beginKeywords.split(/\s+/).join("|")+")\\b":a.begin||/\B|\b/;a.begin=A,h.beginRe=wn(n,A);var k=!a.end&&!a.endsWithParent?/\B|\b/:a.end;k&&(a.end=k,h.endRe=wn(n,k)),v=As(k)||"",a.endsWithParent&&l&&(v+=(k?"|":"")+l)}var _=a.keywords||a.beginKeywords;if(_){var w={},R=function(f,m){n.case_insensitive&&(m=m.toLowerCase());for(var E=m.split(/\s+/),C=0,N=E;C<N.length;C++){var F=N[C],Z=F.split(/\|/),W=Z[0],re=Z[1];w[W]=[f,re?Number(re):1]}};if(typeof _=="string")R("keyword",_);else for(var $ in _)R($,_[$]);h.keywords=w}var x=[];if(a.contains&&a.contains.length){for(var B=0,G=a.contains;B<G.length;B++)for(var j=G[B],D=j==="self"?a:j,X=s(D)||D.endsWithParent&&[sn({},D)]||[D],ue=0,O=X;ue<O.length;ue++){var b=O[ue];x.push(b)}h.contains=x.map(function(f){return i(f,h,v)})}a.starts&&(h.starts=i(a.starts,c,l));var S=x.map(function(f){return f.beginKeywords?"\\.?("+f.begin+")\\.?":f.begin}).concat([v,a.illegal]).map(As).filter(Boolean);return S.length&&(h.terminators=wn(n,S.join("|"),!0)),h}var o=i(n);return n.case_insensitive&&(o.case_insensitive=!0),o}var br={},Fa={};function uu(n){return"lexemesRe"in n}function hu(n){if(br[n.name]=n,n.aliases)for(var e=0,t=n.aliases;e<t.length;e++){var r=t[e];Fa[r]=n.name}}function du(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0,r=n;t<r.length;t++){var s=r[t];hu(s)}}function pu(){return Object.keys(br)}function Ss(n){n=(n||"").toLowerCase(),n=Fa[n]||n;var e=br[n];if(!!e)return uu(e)?e:br[n]=lu(e)}var fu="\\b\\d+(\\.\\d+)?",Ba={begin:"\\\\[\\s\\S]",relevance:0},Xs={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ba]},Js={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ba]},mu={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/};function Mr(n,e,t){t===void 0&&(t={});var r=sn({className:"comment",begin:n,end:e,contains:[]},t),s=r.contains;return s&&(s.push(mu),s.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0})),r}Mr("//","$");var Cs=Mr("/\\*","\\*/");Mr("#","$");var za={className:"number",begin:fu+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},gu="[A-Za-z0-9\\._:-]+",ns={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:gu,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]},bu={name:"xml",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},Mr("<!--","-->",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[ns],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[ns],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},ns]}]};function rs(n,e){var t=n&&n.exec(e);return t&&t.index===0||!1}function Qs(n,e,t,r,s,i){var o=[{content:[]}];function a(f){var m=o[0].content;typeof f=="string"&&m.length&&typeof m[m.length-1]=="string"?m[m.length-1]+=f:m.push(f)}function c(f){a(e.text(f))}function l(f,m){m||(f=n.classPrefix+f),o.unshift({className:f,content:[]})}function u(f){f=n.classPrefix+f,o.push({className:f,content:[]})}function h(){if(o.length<2)throw"unbalanced";var f=o.shift(),m=f.className,E=f.content,C=e.join(E);a(m?e.wrap(m,C):C)}function p(f,m){if(rs(f.endRe,m)){for(;f.endsParent&&f.parent;f=f.parent);return f}if(f.endsWithParent&&f.parent)return p(f.parent,m)}function d(){if(!w.keywords){c(x);return}var f=0;w.lexemesRe.lastIndex=0;for(var m=w.lexemesRe.exec(x);m;){c(x.substring(f,m.index));var E=_.case_insensitive?m[0].toLowerCase():m[0],C=w.keywords.hasOwnProperty(E)&&w.keywords[E];C?(B+=C[1],l(C[0],!1),c(m[0]),h()):c(m[0]),f=w.lexemesRe.lastIndex,m=w.lexemesRe.exec(x)}c(x.substr(f))}function y(f){var m=f.length==1&&f[0];if(m&&!Ss(m)){c(x);return}var E=m?Qs(n,e,m,x,!0,R[m]):Ha(n,e,x,f.length?w.subLanguage:void 0);w.relevance>0&&(B+=E.relevance),m&&E.top&&(R[m]=E.top),l(E.language,!0),a(E.value),h()}function v(){w.subLanguage!=null?y(w.subLanguage):d(),x=""}function A(f){f.className&&l(f.className,!1),w=Object.create(f,{parent:{value:w}})}function k(f,m){if(x+=f,m==null)return v(),0;for(var E,C=0,N=w.contains;C<N.length;C++){var F=N[C];if(rs(F.beginRe,m)){E=F;break}}if(E)return E.skip?x+=m:(E.excludeBegin&&(x+=m),v(),!E.returnBegin&&!E.excludeBegin&&(x=m)),A(E),E.returnBegin?0:m.length;var Z=p(w,m);if(Z){var W=w;W.skip?x+=m:(W.returnEnd||W.excludeEnd||(x+=m),v(),W.excludeEnd&&(x=m));do w.className&&h(),!w.skip&&!w.subLanguage&&(B+=w.relevance),w=w.parent;while(w!==Z.parent);return Z.starts&&A(Z.starts),W.returnEnd?0:m.length}if(!s&&rs(w.illegalRe,m))throw new Error('Illegal lexeme "'+m+'" for mode "'+(w.className||"<unnamed>")+'"');return x+=m,m.length||1}var _=Ss(t);if(!_)throw new Error('Unknown language: "'+t+'"');var w=i||_,R={},$;for($=w;$&&$!==_;$=$.parent)$.className&&u($.className);var x="",B=0;try{for(var G=void 0,j=void 0,D=0;w.terminators.lastIndex=D,G=w.terminators.exec(r),!!G;)j=k(r.substring(D,G.index),G[0]),D=G.index+j;for(k(r.substr(D)),$=w;$.parent;$=$.parent)$.className&&h();if(o.length!=1)throw"unbalanced";var X=o[0],ue=X.className,O=X.content,b=e.join(O),S=ue?e.wrap(ue,b):b;return{language:t,relevance:B,value:S,top:w}}catch(f){if(f.message&&f.message.indexOf("Illegal")!==-1)return{language:t,relevance:0,value:e.text(r)};throw f}}function Ha(n,e,t,r){r===void 0&&(r=n.languages||pu());var s={language:"",relevance:0,value:e.text(t)};if(t!=""){for(var i=s,o=r.filter(Ss),a=0,c=o;a<c.length;a++){var l=c[a],u=Qs(n,e,l,t,!1);u.relevance>i.relevance&&(i=u),u.relevance>s.relevance&&(i=s,s=u)}i.language&&(s.second_best=i)}return s}var vu={classPrefix:"hljs-",useBr:!1};function yu(n,e){return e===void 0&&(e={}),{render:n,options:sn({},vu,e)}}function _u(n,e,t){var r=n.render,s=n.options;return typeof t=="string"?Qs(s,r,t,e,!1):Ha(s,r,e,t)}const wu={begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[Xs,Js,za]}]},ku={className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[wu,za,Js,Xs,Cs,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}},xu="[a-zA-Z-][a-zA-Z0-9_-]*",Eu={begin:/(?:[A-Z_.-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[ku]},Au={name:"css",case_insensitive:!0,illegal:/[=/|'$]/,contains:[Cs,{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[Xs,Js]},{className:"selector-tag",begin:xu,relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[Cs,Eu]}]};du(Au,bu);const Su=yu(au,{classPrefix:""}),{PREFIX:Cu,SLOT:Tu,SUFFIX:$u,WRAPPER:Ru}=tn,ot="  ",Du=(n,e)=>{if(!n)return n;const t=n.replace(/\t/g,ot).split(`
`),r=t.reduce((s,i)=>{if(/^\s*$/.test(i))return s;const o=i.match(/^(\s*)/),a=o&&o[0].length;return s===null||a<s?a:s},null);return t.map(s=>e+s.substr(r)).join(`
`)},ss=(n,e)=>{const t=n.innerHTML.replace(/\s+$/,"").replace(/(="")/g,"");return Du(t,e)},Lu=(n,e,t,r,s)=>{let i="";const o=xn(n,e,Cu);Ot(o)&&(i+=`${ss(o,"").trim()}
`);let a="",c=null;const l=xn(n,e,Ru),u=mr(l);if(u){a=ot;const v=u.outerHTML.match(/<([a-z]+)[^>]*>/);v&&(c=u.tagName.toLowerCase(),i+=`${v[0]}
${ot}`)}i+=`<${e}`,Object.keys(t).sort((v,A)=>v>A?1:-1).forEach(v=>{const{value:A,knobType:k,attribute:_}=t[v],w=_||v;switch(k){case"boolean":i+=A?` ${w}`:"";break;case"select":i+=A!==""?` ${w}="${A}"`:"";break;default:i+=A!=null?` ${w}="${A}"`:"";break}}),i+=">";const h=xn(n,e,Tu);Ot(h)?i+=`${ss(h,`${a}${ot}`)}
${a}`:r.length&&(r.length===1&&!r[0].name?i+=r[0].content:(i+=r.reduce((v,A)=>{const{name:k,content:_}=A,w=k?`<div slot="${k}">${_}</div>`:_;return`${v}
${a}${ot}${w}`},""),i+=`
${a}`)),i+=`</${e}>`,c&&(i+=`
</${c}>`);const p=xn(n,e,$u);Ot(p)&&(i+=`
${ss(p,"").trim()}
`);const d=s.filter(v=>v.value!==v.default);d.length&&(i+=`
<style>
${ot}${e} {
`,d.forEach(v=>{v.value&&(i+=`${ot}${ot}${v.name}: ${v.value};
`)}),i+=`${ot}}
</style>`);const{value:y}=_u(Su,i,["xml","css"]);return M`<pre><code>${Rn(y)}</code></pre>`},Ua=n=>{const{knobType:e,default:t}=n;switch(e){case"boolean":return t!=="false";case"number":return Number(t);default:return Zs(t)}},Mu=(n,e)=>{function t(s){return s===HTMLElement?void 0:Object.getOwnPropertyDescriptor(s.prototype,e)||t(Object.getPrototypeOf(s))}let r=!1;if(n){const s=t(n);r=Boolean(s&&s.get&&s.set===void 0)}return r},Ou=(n="")=>n.replace(" | undefined","").replace(" | null",""),Nu=(n,e,t="")=>{let r=e.filter(({name:s})=>!t.includes(s)&&!Mu(customElements.get(n),s));return r=r.map(s=>{var o;const i=qe(Pe({},s),{knobType:Ou((o=s.type)==null?void 0:o.text)});return typeof i.default=="string"&&(i.value=Ua(i)),i}),r},Iu=(n,e)=>wl(e,n,tn.KNOB).map(t=>{const{attr:r,type:s}=t.dataset;let i=null;if(r){if(s==="select"){const o=mr(t),a=o?Array.from(o.children).filter(c=>c instanceof HTMLOptionElement).map(c=>c.value):[];o instanceof HTMLSelectElement&&a.length>1&&(i={name:r,attribute:r,knobType:s,options:a})}(s==="string"||s==="boolean")&&(i={name:r,attribute:r,knobType:s})}return i}).filter(Boolean),Pu=(n,e)=>n.filter(t=>{const{name:r,knobType:s}=t,i=Ua(t);return e[r]!==i||s==="boolean"&&i});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ao=zn(class extends Hn{constructor(n){if(super(n),n.type!==Dr.CHILD)throw Error("templateContent can only be used in child bindings")}render(n){return this.vt===n?Ze:(this.vt=n,document.importNode(n.content,!0))}}),{HOST:qu,PREFIX:Fu,SLOT:Bu,SUFFIX:zu,WRAPPER:Hu}=tn,Uu=(n,e)=>{const{knobs:t}=e;Object.keys(t).forEach(r=>{const{attribute:s,value:i,custom:o}=t[r];o&&s?typeof i=="string"&&i?n.setAttribute(s,i):n.removeAttribute(s):n[r]=i})},co=n=>typeof n=="object"&&Promise.resolve(n)===n;async function ju(n){let e=!1;const t=n,r=t.updateComplete;co(r)&&(await r,e=!0);const s=t.componentOnReady?t.componentOnReady():!1;return co(s)&&(await s,e=!0),e||await new Promise(requestAnimationFrame),t}class Vu extends Hn{constructor(e){super(e);if(e.type!==Dr.CHILD)throw new Error("renderer only supports binding to element")}render(e){return ie}update(e,[t]){var k;const r=(k=e.options)==null?void 0:k.host,{tag:s}=t,i=[],[o,a,c,l,u]=[qu,Fu,zu,Bu,Hu].map(_=>xn(t.id,s,_)),h=mr(u),p=h?h.localName:"";let d=r.querySelector(s);if(d){const _=r.querySelector('[part="demo-output"]'),w=d.parentElement;if(w&&w===_||w.localName===p)return Uu(d,t),Ze}const y=`</${s}>`,v=mr(o);Ot(a)&&i.push(ao(a));let A=v?v.outerHTML:`<${s}>${y}`;if(Ot(l)&&(A=A.replace(y,`${l.innerHTML}${y}`)),p){const _=Rn(`
        <${p}>
          ${A}
        </${p}>
      `);i.push(_)}else i.push(Rn(A));return Ot(c)&&i.push(ao(c)),Promise.resolve().then(()=>{d=r.querySelector(s),ju(d).then(()=>{d.dispatchEvent(new CustomEvent("rendered",{detail:{component:d},bubbles:!0,composed:!0}))})}),M`${i}`}}const Gu=zn(Vu);class He extends ce{constructor(){super(...arguments);this.copyBtnText="copy",this.cssProps=[],this.events=[],this.slots=[],this.tag="",this.props=[],this.exclude="",this._whenDefined={}}createRenderRoot(){return this}render(){var d,y,v;const{tag:e}=this;if(!customElements.get(e))return this._whenDefined[e]=customElements.whenDefined(e),this._whenDefined[e].then(()=>{this.tag===e&&this.requestUpdate()}),M`
        <div part="warning">
          Element ${e} is not defined. Have you imported it?
        </div>
      `;const[t,r,s,i,o]=[this.cssProps,this.events,this.slots,this.customKnobs,this.propKnobs].map(A=>A.length===0),a=this.vid,c=((d=this.eventsController)==null?void 0:d.data)||[],l=((y=this.slotsController)==null?void 0:y.data)||[],u=((v=this.stylesController)==null?void 0:v.data)||[],h=s||ks(a,e,tn.SLOT),p=o&&i;return M`
      <div part="demo-output" @rendered=${this.onRendered}>
        ${Gu({id:a,tag:e,knobs:this.knobs})}
      </div>
      <api-viewer-tabs part="demo-tabs">
        <api-viewer-tab slot="tab" part="tab">Source</api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <button @click=${this._onCopyClick} part="button">
            ${this.copyBtnText}
          </button>
          <div part="demo-snippet">
            ${Lu(a,e,this.knobs,l,u)}
          </div>
        </api-viewer-panel>
        <api-viewer-tab slot="tab" part="tab" ?hidden=${p&&h}>
          Knobs
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs">
            <section
              ?hidden=${p}
              part="knobs-column"
              @change=${this._onPropChanged}
            >
              ${er(this.propKnobs,"Properties","prop",oo)}
              ${er(this.customKnobs,"Attributes","attr",oo)}
            </section>
            <section
              ?hidden=${h}
              part="knobs-column"
              @change=${this._onSlotChanged}
            >
              ${er(l,"Slots","slot",tu)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab slot="tab" part="tab" ?hidden=${t}>
          Styles
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs" ?hidden=${t}>
            <section part="knobs-column" @change=${this._onCssChanged}>
              ${er(u,"Custom CSS Properties","css-prop",eu)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab id="events" slot="tab" part="tab" ?hidden=${r}>
          Events
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="event-log" ?hidden=${r}>
            <button
              @click=${this._onLogClear}
              ?hidden=${!c.length}
              part="button"
            >
              Clear
            </button>
            ${Oa(c.length?iu(c):M`
                    <p part="event-record">
                      Interact with component to see the event log.
                    </p>
                  `)}
          </div>
        </api-viewer-panel>
      </api-viewer-tabs>
    `}willUpdate(e){e.has("tag")&&(this.knobs={},this.propKnobs=Nu(this.tag,this.props,this.exclude),this.customKnobs=Iu(this.tag,this.vid))}updated(e){if(e.has("tag")&&e.get("tag")){const t=this.renderRoot.querySelector("api-viewer-tabs");t&&t.selectFirst()}}_onLogClear(){this.eventsController.clear();const e=this.querySelector("#events");e&&e.focus()}_onCopyClick(){const e=this.renderRoot.querySelector('[part="demo-snippet"] code');if(e){const t=document.createRange();t.selectNodeContents(e);const r=window.getSelection();r.removeAllRanges(),r.addRange(t);try{document.execCommand("copy"),this.copyBtnText="done"}catch(s){console.error(s),this.copyBtnText="error"}setTimeout(()=>{this.copyBtnText="copy"},1e3),r.removeAllRanges()}}onRendered(e){const{component:t}=e.detail;this.initKnobs(t),this.initEvents(t),this.initSlots(t),this.initStyles(t)}initEvents(e){const t=this.eventsController;t&&t.destroy(),this.eventsController=new Jl(this,e,this.events)}initKnobs(e){ks(this.vid,this.tag,tn.HOST)&&Pu(this.propKnobs,e).forEach(r=>{this.syncKnob(e,r)})}initSlots(e){const t=this.slotsController;t&&t.destroy(),this.slotsController=new nu(this,e,this.vid,this.slots)}initStyles(e){const t=this.stylesController;t&&t.destroy(),this.stylesController=new ru(this,e,this.cssProps)}getKnob(e){const t=i=>i.name===e||i.attribute===e;let r=this.propKnobs.find(t),s=!1;return r||(r=this.customKnobs.find(t),s=!0),{knob:r,custom:s}}setKnobs(e,t,r,s,i=!1){this.knobs=qe(Pe({},this.knobs),{[e]:{knobType:t,value:r,attribute:s,custom:i}})}syncKnob(e,t){const{name:r,knobType:s,attribute:i}=t,o=e[r];this.setKnobs(r,s,o,i),this.propKnobs=this.propKnobs.map(a=>a.name===r?qe(Pe({},a),{value:o}):a)}_onCssChanged(e){const t=e.composedPath()[0];this.stylesController.setValue(t.dataset.name,t.value)}_onPropChanged(e){const t=e.composedPath()[0],{name:r,type:s}=t.dataset;let i;switch(s){case"boolean":i=t.checked;break;case"number":i=t.value===""?null:Number(t.value);break;default:i=t.value}const{knob:o,custom:a}=this.getKnob(r);o&&this.setKnobs(r,s,i,o.attribute,a)}_onSlotChanged(e){const t=e.composedPath()[0];this.slotsController.setValue(t.dataset.slot,t.value)}}oe([q()],He.prototype,"copyBtnText",void 0);oe([q({attribute:!1})],He.prototype,"cssProps",void 0);oe([q({attribute:!1})],He.prototype,"events",void 0);oe([q({attribute:!1})],He.prototype,"slots",void 0);oe([q()],He.prototype,"tag",void 0);oe([q({attribute:!1})],He.prototype,"props",void 0);oe([q()],He.prototype,"exclude",void 0);oe([q({type:Number})],He.prototype,"vid",void 0);oe([q({attribute:!1})],He.prototype,"customKnobs",void 0);oe([q({attribute:!1})],He.prototype,"knobs",void 0);oe([q({attribute:!1})],He.prototype,"propKnobs",void 0);customElements.define("api-demo-layout",He);function ja(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let un=ja();function Wu(n){un=n}const Zu=/[&<>"']/,Ku=/[&<>"']/g,Yu=/[<>"']|&(?!#?\w+;)/,Xu=/[<>"']|&(?!#?\w+;)/g,Ju={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lo=n=>Ju[n];function be(n,e){if(e){if(Zu.test(n))return n.replace(Ku,lo)}else if(Yu.test(n))return n.replace(Xu,lo);return n}const Qu=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Va(n){return n.replace(Qu,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const eh=/(^|[^\[])\^/g;function ae(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(r,s)=>(s=s.source||s,s=s.replace(eh,"$1"),n=n.replace(r,s),t),getRegex:()=>new RegExp(n,e)};return t}const th=/[^\w:]/g,nh=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function uo(n,e,t){if(n){let r;try{r=decodeURIComponent(Va(t)).replace(th,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!nh.test(t)&&(t=oh(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const tr={},rh=/^[^:]+:\/*[^/]*$/,sh=/^([^:]+:)[\s\S]*$/,ih=/^([^:]+:\/*[^/]*)[\s\S]*$/;function oh(n,e){tr[" "+n]||(rh.test(n)?tr[" "+n]=n+"/":tr[" "+n]=hr(n,"/",!0)),n=tr[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(sh,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(ih,"$1")+e:n+e}const vr={exec:function(){}};function Ye(n){let e=1,t,r;for(;e<arguments.length;e++){t=arguments[e];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}function ho(n,e){const t=n.replace(/\|/g,(i,o,a)=>{let c=!1,l=o;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),r=t.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function hr(n,e,t){const r=n.length;if(r===0)return"";let s=0;for(;s<r;){const i=n.charAt(r-s-1);if(i===e&&!t)s++;else if(i!==e&&t)s++;else break}return n.slice(0,r-s)}function ah(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let r=0,s=0;for(;s<t;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])r++;else if(n[s]===e[1]&&(r--,r<0))return s;return-1}function Ga(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function po(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function fo(n,e,t,r){const s=e.href,i=e.title?be(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:t,href:s,title:i,text:o,tokens:r.inlineTokens(o,[])};return r.state.inLink=!1,a}else return{type:"image",raw:t,href:s,title:i,text:be(o)}}function ch(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}class ei{constructor(e){this.options=e||un}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:hr(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],s=ch(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const i=hr(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}const s={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const r=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,s,i,o,a,c,l,u,h,p,d,y,v=t[1].trim();const A=v.length>1,k={type:"list",raw:"",ordered:A,start:A?+v.slice(0,-1):"",loose:!1,items:[]};v=A?`\\d{1,9}\\${v.slice(-1)}`:`\\${v}`,this.options.pedantic&&(v=A?v:"[*+-]");const _=new RegExp(`^( {0,3}${v})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(y=!1,!(!(t=_.exec(e))||this.rules.block.hr.test(e)));){if(r=t[0],e=e.substring(r.length),u=t[2].split(`
`,1)[0],h=e.split(`
`,1)[0],this.options.pedantic?(o=2,d=u.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,d=u.slice(o),o+=t[1].length),c=!1,!u&&/^ *$/.test(h)&&(r+=h+`
`,e=e.substring(h.length+1),y=!0),!y){const R=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(p=e.split(`
`,1)[0],u=p,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!R.test(u));){if(u.search(/[^ ]/)>=o||!u.trim())d+=`
`+u.slice(o);else if(!c)d+=`
`+u;else break;!c&&!u.trim()&&(c=!0),r+=p+`
`,e=e.substring(p.length+1)}}k.loose||(l?k.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(d),s&&(i=s[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),k.items.push({type:"list_item",raw:r,task:!!s,checked:i,loose:!1,text:d}),k.raw+=r}k.items[k.items.length-1].raw=r.trimRight(),k.items[k.items.length-1].text=d.trimRight(),k.raw=k.raw.trimRight();const w=k.items.length;for(a=0;a<w;a++){this.lexer.state.top=!1,k.items[a].tokens=this.lexer.blockTokens(k.items[a].text,[]);const R=k.items[a].tokens.filter(x=>x.type==="space"),$=R.every(x=>{const B=x.raw.split("");let G=0;for(const j of B)if(j===`
`&&(G+=1),G>1)return!0;return!1});!k.loose&&R.length&&$&&(k.loose=!0,k.items[a].loose=!0)}return k}}html(e){const t=this.rules.block.html.exec(e);if(t){const r={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):be(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const r=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const r={type:"table",header:ho(t[1]).map(s=>({text:s})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];let s=r.align.length,i,o,a,c;for(i=0;i<s;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(s=r.rows.length,i=0;i<s;i++)r.rows[i]=ho(r.rows[i],r.header.length).map(l=>({text:l}));for(s=r.header.length,o=0;o<s;o++)r.header[o].tokens=[],this.lexer.inlineTokens(r.header[o].text,r.header[o].tokens);for(s=r.rows.length,o=0;o<s;o++)for(c=r.rows[o],a=0;a<c.length;a++)c[a].tokens=[],this.lexer.inlineTokens(c[a].text,c[a].tokens);return r}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const r={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(e){const t=this.rules.block.text.exec(e);if(t){const r={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:be(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):be(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=hr(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=ah(t[2],"()");if(o>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),fo(t,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let s=(r[2]||r[1]).replace(/\s+/g," ");if(s=t[s.toLowerCase()],!s||!s.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return fo(r,s,r[0],this.lexer)}}emStrong(e,t,r=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=s[1]||s[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const o=s[0].length-1;let a,c,l=o,u=0;const h=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(s=h.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(c=a.length,s[3]||s[4]){l+=c;continue}else if((s[5]||s[6])&&o%3&&!((o+c)%3)){u+=c;continue}if(l-=c,l>0)continue;if(c=Math.min(c,c+l+u),Math.min(o,c)%2){const d=e.slice(1,o+s.index+c);return{type:"em",raw:e.slice(0,o+s.index+c+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}const p=e.slice(2,o+s.index+c-1);return{type:"strong",raw:e.slice(0,o+s.index+c+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const s=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return s&&i&&(r=r.substring(1,r.length-1)),r=be(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let s,i;return r[2]==="@"?(s=be(this.options.mangle?t(r[1]):r[1]),i="mailto:"+s):(s=be(r[1]),i=s),{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let s,i;if(r[2]==="@")s=be(this.options.mangle?t(r[0]):r[0]),i="mailto:"+s;else{let o;do o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(o!==r[0]);s=be(r[0]),r[1]==="www."?i="http://"+s:i=s}return{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):be(r[0]):r[0]:s=be(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:s}}}}const U={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:vr,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};U._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;U._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;U.def=ae(U.def).replace("label",U._label).replace("title",U._title).getRegex();U.bullet=/(?:[*+-]|\d{1,9}[.)])/;U.listItemStart=ae(/^( *)(bull) */).replace("bull",U.bullet).getRegex();U.list=ae(U.list).replace(/bull/g,U.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+U.def.source+")").getRegex();U._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";U._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;U.html=ae(U.html,"i").replace("comment",U._comment).replace("tag",U._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();U.paragraph=ae(U._paragraph).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.blockquote=ae(U.blockquote).replace("paragraph",U.paragraph).getRegex();U.normal=Ye({},U);U.gfm=Ye({},U.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});U.gfm.table=ae(U.gfm.table).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.gfm.paragraph=ae(U._paragraph).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",U.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.pedantic=Ye({},U.normal,{html:ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",U._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vr,paragraph:ae(U.normal._paragraph).replace("hr",U.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",U.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const I={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:vr,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:vr,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};I._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";I.punctuation=ae(I.punctuation).replace(/punctuation/g,I._punctuation).getRegex();I.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;I.escapedEmSt=/\\\*|\\_/g;I._comment=ae(U._comment).replace("(?:-->|$)","-->").getRegex();I.emStrong.lDelim=ae(I.emStrong.lDelim).replace(/punct/g,I._punctuation).getRegex();I.emStrong.rDelimAst=ae(I.emStrong.rDelimAst,"g").replace(/punct/g,I._punctuation).getRegex();I.emStrong.rDelimUnd=ae(I.emStrong.rDelimUnd,"g").replace(/punct/g,I._punctuation).getRegex();I._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;I._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;I._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;I.autolink=ae(I.autolink).replace("scheme",I._scheme).replace("email",I._email).getRegex();I._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;I.tag=ae(I.tag).replace("comment",I._comment).replace("attribute",I._attribute).getRegex();I._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;I._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;I._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;I.link=ae(I.link).replace("label",I._label).replace("href",I._href).replace("title",I._title).getRegex();I.reflink=ae(I.reflink).replace("label",I._label).replace("ref",U._label).getRegex();I.nolink=ae(I.nolink).replace("ref",U._label).getRegex();I.reflinkSearch=ae(I.reflinkSearch,"g").replace("reflink",I.reflink).replace("nolink",I.nolink).getRegex();I.normal=Ye({},I);I.pedantic=Ye({},I.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ae(/^!?\[(label)\]\((.*?)\)/).replace("label",I._label).getRegex(),reflink:ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",I._label).getRegex()});I.gfm=Ye({},I.normal,{escape:ae(I.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});I.gfm.url=ae(I.gfm.url,"i").replace("email",I.gfm._extended_email).getRegex();I.breaks=Ye({},I.gfm,{br:ae(I.br).replace("{2,}","*").getRegex(),text:ae(I.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function lh(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function mo(n){let e="",t,r;const s=n.length;for(t=0;t<s;t++)r=n.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class ht{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||un,this.options.tokenizer=this.options.tokenizer||new ei,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:U.normal,inline:I.normal};this.options.pedantic?(t.block=U.pedantic,t.inline=I.pedantic):this.options.gfm&&(t.block=U.gfm,this.options.breaks?t.inline=I.breaks:t.inline=I.gfm),this.tokenizer.rules=t}static get rules(){return{block:U,inline:I}}static lex(e,t){return new ht(t).lex(e)}static lexInline(e,t){return new ht(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,c,l)=>c+"    ".repeat(l.length));let r,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const c=e.slice(1);let l;this.options.extensions.startBlock.forEach(function(u){l=u.call({lexer:this},c),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,s,i,o=e,a,c,l;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+po("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+po("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(c||(l=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,o,l)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e,mo)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,mo))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let p;this.options.extensions.startInline.forEach(function(d){p=d.call({lexer:this},h),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(i=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,lh)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(l=r.raw.slice(-1)),c=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class ti{constructor(e){this.options=e||un}code(e,t,r){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,s);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+be(s,!0)+'">'+(r?e:be(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:be(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,r,s){if(this.options.headerIds){const i=this.options.headerPrefix+s.slug(r);return`<h${t} id="${i}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,r){const s=t?"ol":"ul",i=t&&r!==1?' start="'+r+'"':"";return"<"+s+i+`>
`+e+"</"+s+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(e=uo(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s='<a href="'+be(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>",s}image(e,t,r){if(e=uo(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s=`<img src="${e}" alt="${r}"`;return t&&(s+=` title="${t}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class Wa{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Za{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,s=0;if(this.seen.hasOwnProperty(r)){s=this.seen[e];do s++,r=e+"-"+s;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=s,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class dt{constructor(e){this.options=e||un,this.options.renderer=this.options.renderer||new ti,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Wa,this.slugger=new Za}static parse(e,t){return new dt(t).parse(e)}static parseInline(e,t){return new dt(t).parseInline(e)}parse(e,t=!0){let r="",s,i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x;const B=e.length;for(s=0;s<B;s++){if(d=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(x=this.options.extensions.renderers[d.type].call({parser:this},d),x!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){r+=x||"";continue}switch(d.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Va(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(h="",u="",a=d.header.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(d.header[i].tokens),{header:!0,align:d.align[i]});for(h+=this.renderer.tablerow(u),p="",a=d.rows.length,i=0;i<a;i++){for(l=d.rows[i],u="",c=l.length,o=0;o<c;o++)u+=this.renderer.tablecell(this.parseInline(l[o].tokens),{header:!1,align:d.align[o]});p+=this.renderer.tablerow(u)}r+=this.renderer.table(h,p);continue}case"blockquote":{p=this.parse(d.tokens),r+=this.renderer.blockquote(p);continue}case"list":{for(y=d.ordered,v=d.start,A=d.loose,a=d.items.length,p="",i=0;i<a;i++)_=d.items[i],w=_.checked,R=_.task,k="",_.task&&($=this.renderer.checkbox(w),A?_.tokens.length>0&&_.tokens[0].type==="paragraph"?(_.tokens[0].text=$+" "+_.tokens[0].text,_.tokens[0].tokens&&_.tokens[0].tokens.length>0&&_.tokens[0].tokens[0].type==="text"&&(_.tokens[0].tokens[0].text=$+" "+_.tokens[0].tokens[0].text)):_.tokens.unshift({type:"text",text:$}):k+=$),k+=this.parse(_.tokens,A),p+=this.renderer.listitem(k,R,w);r+=this.renderer.list(p,y,v);continue}case"html":{r+=this.renderer.html(d.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(p=d.tokens?this.parseInline(d.tokens):d.text;s+1<B&&e[s+1].type==="text";)d=e[++s],p+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);r+=t?this.renderer.paragraph(p):p;continue}default:{const G='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(G);return}else throw new Error(G)}}}return r}parseInline(e,t){t=t||this.renderer;let r="",s,i,o;const a=e.length;for(s=0;s<a;s++){if(i=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=o||"";continue}switch(i.type){case"escape":{r+=t.text(i.text);break}case"html":{r+=t.html(i.text);break}case"link":{r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{r+=t.image(i.href,i.title,i.text);break}case"strong":{r+=t.strong(this.parseInline(i.tokens,t));break}case"em":{r+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{r+=t.codespan(i.text);break}case"br":{r+=t.br();break}case"del":{r+=t.del(this.parseInline(i.tokens,t));break}case"text":{r+=t.text(i.text);break}default:{const c='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(c);return}else throw new Error(c)}}}return r}}function K(n,e,t){if(typeof n=="undefined"||n===null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Ye({},K.defaults,e||{}),Ga(e),t){const r=e.highlight;let s;try{s=ht.lex(n,e)}catch(a){return t(a)}const i=function(a){let c;if(!a)try{e.walkTokens&&K.walkTokens(s,e.walkTokens),c=dt.parse(s,e)}catch(l){a=l}return e.highlight=r,a?t(a):t(null,c)};if(!r||r.length<3||(delete e.highlight,!s.length))return i();let o=0;K.walkTokens(s,function(a){a.type==="code"&&(o++,setTimeout(()=>{r(a.text,a.lang,function(c,l){if(c)return i(c);l!=null&&l!==a.text&&(a.text=l,a.escaped=!0),o--,o===0&&i()})},0))}),o===0&&i();return}try{const r=ht.lex(n,e);return e.walkTokens&&K.walkTokens(r,e.walkTokens),dt.parse(r,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+be(r.message+"",!0)+"</pre>";throw r}}K.options=K.setOptions=function(n){return Ye(K.defaults,n),Wu(K.defaults),K};K.getDefaults=ja;K.defaults=un;K.use=function(...n){const e=Ye({},...n),t=K.defaults.extensions||{renderers:{},childTokens:{}};let r;n.forEach(s=>{if(s.extensions&&(r=!0,s.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const o=t.renderers?t.renderers[i.name]:null;o?t.renderers[i.name]=function(...a){let c=i.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:t.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)})),s.renderer){const i=K.defaults.renderer||new ti;for(const o in s.renderer){const a=i[o];i[o]=(...c)=>{let l=s.renderer[o].apply(i,c);return l===!1&&(l=a.apply(i,c)),l}}e.renderer=i}if(s.tokenizer){const i=K.defaults.tokenizer||new ei;for(const o in s.tokenizer){const a=i[o];i[o]=(...c)=>{let l=s.tokenizer[o].apply(i,c);return l===!1&&(l=a.apply(i,c)),l}}e.tokenizer=i}if(s.walkTokens){const i=K.defaults.walkTokens;e.walkTokens=function(o){s.walkTokens.call(this,o),i&&i.call(this,o)}}r&&(e.extensions=t),K.setOptions(e)})};K.walkTokens=function(n,e){for(const t of n)switch(e.call(K,t),t.type){case"table":{for(const r of t.header)K.walkTokens(r.tokens,e);for(const r of t.rows)for(const s of r)K.walkTokens(s.tokens,e);break}case"list":{K.walkTokens(t.items,e);break}default:K.defaults.extensions&&K.defaults.extensions.childTokens&&K.defaults.extensions.childTokens[t.type]?K.defaults.extensions.childTokens[t.type].forEach(function(r){K.walkTokens(t[r],e)}):t.tokens&&K.walkTokens(t.tokens,e)}};K.parseInline=function(n,e){if(typeof n=="undefined"||n===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");e=Ye({},K.defaults,e||{}),Ga(e);try{const t=ht.lexInline(n,e);return e.walkTokens&&K.walkTokens(t,e.walkTokens),dt.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+be(t.message+"",!0)+"</pre>";throw t}};K.Parser=dt;K.parser=dt.parse;K.Renderer=ti;K.TextRenderer=Wa;K.Lexer=ht;K.lexer=ht.lex;K.Tokenizer=ei;K.Slugger=Za;K.parse=K;dt.parse;ht.lex;/*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */function uh(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var hh=Object.hasOwnProperty,go=Object.setPrototypeOf,dh=Object.isFrozen,ph=Object.getPrototypeOf,fh=Object.getOwnPropertyDescriptor,Ae=Object.freeze,tt=Object.seal,mh=Object.create,Ka=typeof Reflect!="undefined"&&Reflect,yr=Ka.apply,Ts=Ka.construct;yr||(yr=function(e,t,r){return e.apply(t,r)});Ae||(Ae=function(e){return e});tt||(tt=function(e){return e});Ts||(Ts=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(uh(t))))});var gh=Ke(Array.prototype.forEach),bo=Ke(Array.prototype.pop),kn=Ke(Array.prototype.push),dr=Ke(String.prototype.toLowerCase),vo=Ke(String.prototype.match),gt=Ke(String.prototype.replace),bh=Ke(String.prototype.indexOf),vh=Ke(String.prototype.trim),Re=Ke(RegExp.prototype.test),is=yh(TypeError);function Ke(n){return function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return yr(n,e,r)}}function yh(n){return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return Ts(n,t)}}function Q(n,e){go&&go(n,null);for(var t=e.length;t--;){var r=e[t];if(typeof r=="string"){var s=dr(r);s!==r&&(dh(e)||(e[t]=s),r=s)}n[r]=!0}return n}function Tt(n){var e=mh(null),t=void 0;for(t in n)yr(hh,n,[t])&&(e[t]=n[t]);return e}function nr(n,e){for(;n!==null;){var t=fh(n,e);if(t){if(t.get)return Ke(t.get);if(typeof t.value=="function")return Ke(t.value)}n=ph(n)}function r(s){return console.warn("fallback value for",s),null}return r}var yo=Ae(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),os=Ae(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),as=Ae(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),_h=Ae(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),cs=Ae(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),wh=Ae(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),_o=Ae(["#text"]),wo=Ae(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ls=Ae(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ko=Ae(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),rr=Ae(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),kh=tt(/\{\{[\s\S]*|[\s\S]*\}\}/gm),xh=tt(/<%[\s\S]*|[\s\S]*%>/gm),Eh=tt(/^data-[\-\w.\u00B7-\uFFFF]/),Ah=tt(/^aria-[\-\w]+$/),Sh=tt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ch=tt(/^(?:\w+script|data):/i),Th=tt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$h=tt(/^html$/i),En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};function Je(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var Rh=function(){return typeof window=="undefined"?null:window},Dh=function(e,t){if((typeof e=="undefined"?"undefined":En(e))!=="object"||typeof e.createPolicy!="function")return null;var r=null,s="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(s)&&(r=t.currentScript.getAttribute(s));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function Ya(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rh(),e=function(g){return Ya(g)};if(e.version="2.3.6",e.removed=[],!n||!n.document||n.document.nodeType!==9)return e.isSupported=!1,e;var t=n.document,r=n.document,s=n.DocumentFragment,i=n.HTMLTemplateElement,o=n.Node,a=n.Element,c=n.NodeFilter,l=n.NamedNodeMap,u=l===void 0?n.NamedNodeMap||n.MozNamedAttrMap:l,h=n.HTMLFormElement,p=n.DOMParser,d=n.trustedTypes,y=a.prototype,v=nr(y,"cloneNode"),A=nr(y,"nextSibling"),k=nr(y,"childNodes"),_=nr(y,"parentNode");if(typeof i=="function"){var w=r.createElement("template");w.content&&w.content.ownerDocument&&(r=w.content.ownerDocument)}var R=Dh(d,t),$=R?R.createHTML(""):"",x=r,B=x.implementation,G=x.createNodeIterator,j=x.createDocumentFragment,D=x.getElementsByTagName,X=t.importNode,ue={};try{ue=Tt(r).documentMode?r.documentMode:{}}catch{}var O={};e.isSupported=typeof _=="function"&&B&&typeof B.createHTMLDocument!="undefined"&&ue!==9;var b=kh,S=xh,f=Eh,m=Ah,E=Ch,C=Th,N=Sh,F=null,Z=Q({},[].concat(Je(yo),Je(os),Je(as),Je(cs),Je(_o))),W=null,re=Q({},[].concat(Je(wo),Je(ls),Je(ko),Je(rr))),J=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,Oe=null,Ve=!0,pe=!0,Me=!1,Ne=!1,ve=!1,Ht=!1,Ie=!1,ft=!1,mt=!1,V=!1,bn=!0,he=!0,te=!1,Ge={},Te=null,Ut=Q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),jt=null,L=Q({},["audio","video","img","source","image","track"]),z=null,Y=Q({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ee="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",ge="http://www.w3.org/1999/xhtml",Vt=ge,vn=!1,Gt=void 0,cl=["application/xhtml+xml","text/html"],ll="text/html",St=void 0,Wt=null,ul=r.createElement("form"),Ri=function(g){return g instanceof RegExp||g instanceof Function},Kr=function(g){Wt&&Wt===g||((!g||(typeof g=="undefined"?"undefined":En(g))!=="object")&&(g={}),g=Tt(g),F="ALLOWED_TAGS"in g?Q({},g.ALLOWED_TAGS):Z,W="ALLOWED_ATTR"in g?Q({},g.ALLOWED_ATTR):re,z="ADD_URI_SAFE_ATTR"in g?Q(Tt(Y),g.ADD_URI_SAFE_ATTR):Y,jt="ADD_DATA_URI_TAGS"in g?Q(Tt(L),g.ADD_DATA_URI_TAGS):L,Te="FORBID_CONTENTS"in g?Q({},g.FORBID_CONTENTS):Ut,Ce="FORBID_TAGS"in g?Q({},g.FORBID_TAGS):{},Oe="FORBID_ATTR"in g?Q({},g.FORBID_ATTR):{},Ge="USE_PROFILES"in g?g.USE_PROFILES:!1,Ve=g.ALLOW_ARIA_ATTR!==!1,pe=g.ALLOW_DATA_ATTR!==!1,Me=g.ALLOW_UNKNOWN_PROTOCOLS||!1,Ne=g.SAFE_FOR_TEMPLATES||!1,ve=g.WHOLE_DOCUMENT||!1,ft=g.RETURN_DOM||!1,mt=g.RETURN_DOM_FRAGMENT||!1,V=g.RETURN_TRUSTED_TYPE||!1,Ie=g.FORCE_BODY||!1,bn=g.SANITIZE_DOM!==!1,he=g.KEEP_CONTENT!==!1,te=g.IN_PLACE||!1,N=g.ALLOWED_URI_REGEXP||N,Vt=g.NAMESPACE||ge,g.CUSTOM_ELEMENT_HANDLING&&Ri(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(J.tagNameCheck=g.CUSTOM_ELEMENT_HANDLING.tagNameCheck),g.CUSTOM_ELEMENT_HANDLING&&Ri(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(J.attributeNameCheck=g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),g.CUSTOM_ELEMENT_HANDLING&&typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(J.allowCustomizedBuiltInElements=g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Gt=cl.indexOf(g.PARSER_MEDIA_TYPE)===-1?Gt=ll:Gt=g.PARSER_MEDIA_TYPE,St=Gt==="application/xhtml+xml"?function(T){return T}:dr,Ne&&(pe=!1),mt&&(ft=!0),Ge&&(F=Q({},[].concat(Je(_o))),W=[],Ge.html===!0&&(Q(F,yo),Q(W,wo)),Ge.svg===!0&&(Q(F,os),Q(W,ls),Q(W,rr)),Ge.svgFilters===!0&&(Q(F,as),Q(W,ls),Q(W,rr)),Ge.mathMl===!0&&(Q(F,cs),Q(W,ko),Q(W,rr))),g.ADD_TAGS&&(F===Z&&(F=Tt(F)),Q(F,g.ADD_TAGS)),g.ADD_ATTR&&(W===re&&(W=Tt(W)),Q(W,g.ADD_ATTR)),g.ADD_URI_SAFE_ATTR&&Q(z,g.ADD_URI_SAFE_ATTR),g.FORBID_CONTENTS&&(Te===Ut&&(Te=Tt(Te)),Q(Te,g.FORBID_CONTENTS)),he&&(F["#text"]=!0),ve&&Q(F,["html","head","body"]),F.table&&(Q(F,["tbody"]),delete Ce.tbody),Ae&&Ae(g),Wt=g)},Di=Q({},["mi","mo","mn","ms","mtext"]),Li=Q({},["foreignobject","desc","title","annotation-xml"]),Xn=Q({},os);Q(Xn,as),Q(Xn,_h);var Yr=Q({},cs);Q(Yr,wh);var hl=function(g){var T=_(g);(!T||!T.tagName)&&(T={namespaceURI:ge,tagName:"template"});var P=dr(g.tagName),se=dr(T.tagName);if(g.namespaceURI===fe)return T.namespaceURI===ge?P==="svg":T.namespaceURI===ee?P==="svg"&&(se==="annotation-xml"||Di[se]):Boolean(Xn[P]);if(g.namespaceURI===ee)return T.namespaceURI===ge?P==="math":T.namespaceURI===fe?P==="math"&&Li[se]:Boolean(Yr[P]);if(g.namespaceURI===ge){if(T.namespaceURI===fe&&!Li[se]||T.namespaceURI===ee&&!Di[se])return!1;var _e=Q({},["title","style","font","a","script"]);return!Yr[P]&&(_e[P]||!Xn[P])}return!1},st=function(g){kn(e.removed,{element:g});try{g.parentNode.removeChild(g)}catch{try{g.outerHTML=$}catch{g.remove()}}},Mi=function(g,T){try{kn(e.removed,{attribute:T.getAttributeNode(g),from:T})}catch{kn(e.removed,{attribute:null,from:T})}if(T.removeAttribute(g),g==="is"&&!W[g])if(ft||mt)try{st(T)}catch{}else try{T.setAttribute(g,"")}catch{}},Oi=function(g){var T=void 0,P=void 0;if(Ie)g="<remove></remove>"+g;else{var se=vo(g,/^[\r\n\t ]+/);P=se&&se[0]}Gt==="application/xhtml+xml"&&(g='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+g+"</body></html>");var _e=R?R.createHTML(g):g;if(Vt===ge)try{T=new p().parseFromString(_e,Gt)}catch{}if(!T||!T.documentElement){T=B.createDocument(Vt,"template",null);try{T.documentElement.innerHTML=vn?"":_e}catch{}}var we=T.body||T.documentElement;return g&&P&&we.insertBefore(r.createTextNode(P),we.childNodes[0]||null),Vt===ge?D.call(T,ve?"html":"body")[0]:ve?T.documentElement:we},Ni=function(g){return G.call(g.ownerDocument||g,g,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},dl=function(g){return g instanceof h&&(typeof g.nodeName!="string"||typeof g.textContent!="string"||typeof g.removeChild!="function"||!(g.attributes instanceof u)||typeof g.removeAttribute!="function"||typeof g.setAttribute!="function"||typeof g.namespaceURI!="string"||typeof g.insertBefore!="function")},yn=function(g){return(typeof o=="undefined"?"undefined":En(o))==="object"?g instanceof o:g&&(typeof g=="undefined"?"undefined":En(g))==="object"&&typeof g.nodeType=="number"&&typeof g.nodeName=="string"},it=function(g,T,P){!O[g]||gh(O[g],function(se){se.call(e,T,P,Wt)})},Ii=function(g){var T=void 0;if(it("beforeSanitizeElements",g,null),dl(g)||vo(g.nodeName,/[\u0080-\uFFFF]/))return st(g),!0;var P=St(g.nodeName);if(it("uponSanitizeElement",g,{tagName:P,allowedTags:F}),!yn(g.firstElementChild)&&(!yn(g.content)||!yn(g.content.firstElementChild))&&Re(/<[/\w]/g,g.innerHTML)&&Re(/<[/\w]/g,g.textContent)||P==="select"&&Re(/<template/i,g.innerHTML))return st(g),!0;if(!F[P]||Ce[P]){if(!Ce[P]&&qi(P)&&(J.tagNameCheck instanceof RegExp&&Re(J.tagNameCheck,P)||J.tagNameCheck instanceof Function&&J.tagNameCheck(P)))return!1;if(he&&!Te[P]){var se=_(g)||g.parentNode,_e=k(g)||g.childNodes;if(_e&&se)for(var we=_e.length,ye=we-1;ye>=0;--ye)se.insertBefore(v(_e[ye],!0),A(g))}return st(g),!0}return g instanceof a&&!hl(g)||(P==="noscript"||P==="noembed")&&Re(/<\/no(script|embed)/i,g.innerHTML)?(st(g),!0):(Ne&&g.nodeType===3&&(T=g.textContent,T=gt(T,b," "),T=gt(T,S," "),g.textContent!==T&&(kn(e.removed,{element:g.cloneNode()}),g.textContent=T)),it("afterSanitizeElements",g,null),!1)},Pi=function(g,T,P){if(bn&&(T==="id"||T==="name")&&(P in r||P in ul))return!1;if(!(pe&&!Oe[T]&&Re(f,T))){if(!(Ve&&Re(m,T))){if(!W[T]||Oe[T]){if(!(qi(g)&&(J.tagNameCheck instanceof RegExp&&Re(J.tagNameCheck,g)||J.tagNameCheck instanceof Function&&J.tagNameCheck(g))&&(J.attributeNameCheck instanceof RegExp&&Re(J.attributeNameCheck,T)||J.attributeNameCheck instanceof Function&&J.attributeNameCheck(T))||T==="is"&&J.allowCustomizedBuiltInElements&&(J.tagNameCheck instanceof RegExp&&Re(J.tagNameCheck,P)||J.tagNameCheck instanceof Function&&J.tagNameCheck(P))))return!1}else if(!z[T]){if(!Re(N,gt(P,C,""))){if(!((T==="src"||T==="xlink:href"||T==="href")&&g!=="script"&&bh(P,"data:")===0&&jt[g])){if(!(Me&&!Re(E,gt(P,C,"")))){if(P)return!1}}}}}}return!0},qi=function(g){return g.indexOf("-")>0},Fi=function(g){var T=void 0,P=void 0,se=void 0,_e=void 0;it("beforeSanitizeAttributes",g,null);var we=g.attributes;if(!!we){var ye={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W};for(_e=we.length;_e--;){T=we[_e];var Jn=T,$e=Jn.name,Bi=Jn.namespaceURI;if(P=vh(T.value),se=St($e),ye.attrName=se,ye.attrValue=P,ye.keepAttr=!0,ye.forceKeepAttr=void 0,it("uponSanitizeAttribute",g,ye),P=ye.attrValue,!ye.forceKeepAttr&&(Mi($e,g),!!ye.keepAttr)){if(Re(/\/>/i,P)){Mi($e,g);continue}Ne&&(P=gt(P,b," "),P=gt(P,S," "));var fl=St(g.nodeName);if(!!Pi(fl,se,P))try{Bi?g.setAttributeNS(Bi,$e,P):g.setAttribute($e,P),bo(e.removed)}catch{}}}it("afterSanitizeAttributes",g,null)}},pl=function H(g){var T=void 0,P=Ni(g);for(it("beforeSanitizeShadowDOM",g,null);T=P.nextNode();)it("uponSanitizeShadowNode",T,null),!Ii(T)&&(T.content instanceof s&&H(T.content),Fi(T));it("afterSanitizeShadowDOM",g,null)};return e.sanitize=function(H,g){var T=void 0,P=void 0,se=void 0,_e=void 0,we=void 0;if(vn=!H,vn&&(H="<!-->"),typeof H!="string"&&!yn(H)){if(typeof H.toString!="function")throw is("toString is not a function");if(H=H.toString(),typeof H!="string")throw is("dirty is not a string, aborting")}if(!e.isSupported){if(En(n.toStaticHTML)==="object"||typeof n.toStaticHTML=="function"){if(typeof H=="string")return n.toStaticHTML(H);if(yn(H))return n.toStaticHTML(H.outerHTML)}return H}if(Ht||Kr(g),e.removed=[],typeof H=="string"&&(te=!1),te){if(H.nodeName){var ye=St(H.nodeName);if(!F[ye]||Ce[ye])throw is("root node is forbidden and cannot be sanitized in-place")}}else if(H instanceof o)T=Oi("<!---->"),P=T.ownerDocument.importNode(H,!0),P.nodeType===1&&P.nodeName==="BODY"||P.nodeName==="HTML"?T=P:T.appendChild(P);else{if(!ft&&!Ne&&!ve&&H.indexOf("<")===-1)return R&&V?R.createHTML(H):H;if(T=Oi(H),!T)return ft?null:V?$:""}T&&Ie&&st(T.firstChild);for(var Jn=Ni(te?H:T);se=Jn.nextNode();)se.nodeType===3&&se===_e||Ii(se)||(se.content instanceof s&&pl(se.content),Fi(se),_e=se);if(_e=null,te)return H;if(ft){if(mt)for(we=j.call(T.ownerDocument);T.firstChild;)we.appendChild(T.firstChild);else we=T;return W.shadowroot&&(we=X.call(t,we,!0)),we}var $e=ve?T.outerHTML:T.innerHTML;return ve&&F["!doctype"]&&T.ownerDocument&&T.ownerDocument.doctype&&T.ownerDocument.doctype.name&&Re($h,T.ownerDocument.doctype.name)&&($e="<!DOCTYPE "+T.ownerDocument.doctype.name+`>
`+$e),Ne&&($e=gt($e,b," "),$e=gt($e,S," ")),R&&V?R.createHTML($e):$e},e.setConfig=function(H){Kr(H),Ht=!0},e.clearConfig=function(){Wt=null,Ht=!1},e.isValidAttribute=function(H,g,T){Wt||Kr({});var P=St(H),se=St(g);return Pi(P,se,T)},e.addHook=function(H,g){typeof g=="function"&&(O[H]=O[H]||[],kn(O[H],g))},e.removeHook=function(H){O[H]&&bo(O[H])},e.removeHooks=function(H){O[H]&&(O[H]=[])},e.removeAllHooks=function(){O={}},e}var Lh=Ya();K.setOptions({headerIds:!1});const ni=n=>M`
    ${n?Rn(Lh.sanitize(K(n)).replace(/<(h[1-6]|a|p|ul|ol|li|pre|code|strong|em|blockquote|del)(\s+href="[^"]+")*>/g,'<$1 part="md-$1"$2>')):ie}
  `,$t=(n,e,t,r,s,i)=>M`
    <div part="docs-item">
      <div part="docs-row">
        <div part="docs-column" class="column-name-${n}">
          <div part="docs-label">Name</div>
          <div part="docs-value" class="accent">${e}</div>
        </div>
        ${i===void 0?ie:M`
              <div part="docs-column">
                <div part="docs-label">Attribute</div>
                <div part="docs-value">${i}</div>
              </div>
            `}
        ${r===void 0&&s===void 0?ie:M`
              <div part="docs-column" class="column-type">
                <div part="docs-label">Type</div>
                <div part="docs-value">
                  ${r||(Number.isNaN(Number(s))?typeof s:"number")}
                  ${s===void 0?ie:M` = <span class="accent">${s}</span> `}
                </div>
              </div>
            `}
      </div>
      <div ?hidden=${t===void 0}>
        <div part="docs-label">Description</div>
        <div part="docs-markdown">${ni(t)}</div>
      </div>
    </div>
  `,Rt=(n,e,t)=>{const r=e.length===0;return M`
    <api-viewer-tab slot="tab" part="tab" ?hidden=${r}>
      ${n}
    </api-viewer-tab>
    <api-viewer-panel slot="panel" part="tab-panel" ?hidden=${r}>
      ${t}
    </api-viewer-panel>
  `},Mh=n=>{var r,s;const e=n.parameters||[],t=((s=(r=n.return)==null?void 0:r.type)==null?void 0:s.text)||"void";return M`
    <span part="docs-method">
      ${n.name}(<span part="docs-method-params"
        >${e.map((i,o)=>{var a;return M`<span part="docs-param-name">${i.name}</span>:
              <span part="docs-param-type">${(a=i.type)==null?void 0:a.text}</span>${o===e.length-1?"":", "}`})}</span
      >)</span
    ><span part="docs-method-type">: ${t}</span>
  `};class pt extends ce{constructor(){super(...arguments);this.name="",this.props=[],this.attrs=[],this.methods=[],this.slots=[],this.events=[],this.cssParts=[],this.cssProps=[]}createRenderRoot(){return this}render(){const{slots:e,props:t,attrs:r,methods:s,events:i,cssParts:o,cssProps:a}=this,c=[t,r,s,e,i,a,o].every(u=>u.length===0),l=(r||[]).filter(u=>!t.some(h=>h.name===u.fieldName));return c?M`
          <div part="warning">
            The element &lt;${this.name}&gt; does not provide any documented
            API.
          </div>
        `:M`
          <api-viewer-tabs>
            ${Rt("Properties",t,M`
                ${t.map(u=>{const{name:h,description:p,type:d}=u,y=(r||[]).find(v=>v.fieldName===h);return $t("prop",h,p,d==null?void 0:d.text,u.default,y==null?void 0:y.name)})}
              `)}
            ${Rt("Attributes",l,M`
                ${l.map(({name:u,description:h,type:p})=>$t("attr",u,h,p==null?void 0:p.text))}
              `)}
            ${Rt("Methods",s,M`
                ${s.map(u=>$t("method",Mh(u),u.description))}
              `)}
            ${Rt("Slots",e,M`
                ${e.map(({name:u,description:h})=>$t("slot",u,h))}
              `)}
            ${Rt("Events",i,M`
                ${i.map(({name:u,description:h})=>$t("event",u,h))}
              `)}
            ${Rt("CSS Custom Properties",a,M`
                ${a.map(u=>{const{name:h,description:p}=u;return $t("css",h,p,"",Zs(u.default))})}
              `)}
            ${Rt("CSS Shadow Parts",o,M`
                ${o.map(({name:u,description:h})=>$t("part",u,h))}
              `)}
          </api-viewer-tabs>
        `}updated(e){if(e.has("name")&&e.get("name")){const t=this.renderRoot.querySelector("api-viewer-tabs");t&&t.selectFirst()}}}oe([q()],pt.prototype,"name",void 0);oe([q({attribute:!1})],pt.prototype,"props",void 0);oe([q({attribute:!1})],pt.prototype,"attrs",void 0);oe([q({attribute:!1})],pt.prototype,"methods",void 0);oe([q({attribute:!1})],pt.prototype,"slots",void 0);oe([q({attribute:!1})],pt.prototype,"events",void 0);oe([q({attribute:!1})],pt.prototype,"cssParts",void 0);oe([q({attribute:!1})],pt.prototype,"cssProps",void 0);customElements.define("api-docs-layout",pt);async function Oh(n,e,t,r,s,i,o=""){var h,p,d,y,v,A,k,_;const a=await n;if(!Un(a))return Gs;const c=Lr(a),l=js(a,s),u=Vs(l.members);return M`
    <header part="header">
      <div part="header-title">&lt;${l.name}&gt;</div>
      <nav>
        <input
          id="docs"
          type="radio"
          name="section-${i}"
          value="docs"
          ?checked=${e==="docs"}
          @change=${r}
          part="radio-button"
        />
        <label part="radio-label" for="docs">Docs</label>
        <input
          id="demo"
          type="radio"
          name="section-${i}"
          value="demo"
          ?checked=${e==="demo"}
          @change=${r}
          part="radio-button"
        />
        <label part="radio-label" for="demo">Demo</label>
        <label part="select-label">
          <select
            @change=${t}
            .value=${s||""}
            ?hidden=${c.length===1}
            part="select"
          >
            ${c.map(w=>M`<option value=${w.name}>${w.name}</option>`)}
          </select>
        </label>
      </nav>
    </header>
    ${Oa(e==="docs"?M`
            <div ?hidden=${l.description===""} part="docs-description">
              ${ni(l.description)}
            </div>
            <api-docs-layout
              .name=${l.name}
              .props=${u}
              .attrs=${(h=l.attributes)!=null?h:[]}
              .events=${(p=l.events)!=null?p:[]}
              .slots=${(d=l.slots)!=null?d:[]}
              .cssParts=${(y=l.cssParts)!=null?y:[]}
              .cssProps=${(v=l.cssProperties)!=null?v:[]}
              part="docs-container"
            ></api-docs-layout>
          `:M`
            <api-demo-layout
              .tag=${l.name}
              .props=${u}
              .events=${(A=l.events)!=null?A:[]}
              .slots=${(k=l.slots)!=null?k:[]}
              .cssProps=${(_=l.cssProperties)!=null?_:[]}
              .exclude=${o}
              .vid=${i}
              part="demo-container"
            ></api-demo-layout>
          `)}
  `}let Nh=0;class ri extends Ws(ce){constructor(){super();this.section="docs",this._id=Nh++}render(){return M`
      ${Us(Oh(this.jsonFetched,this.section,this._onSelect,this._onToggle,this.selected,this._id,this.excludeKnobs))}
    `}firstUpdated(){this.setTemplates()}setTemplates(e){Rr(this._id,e||Array.from(this.querySelectorAll("template")))}_onSelect(e){this.selected=e.target.value}_onToggle(e){this.section=e.target.value}}oe([q()],ri.prototype,"section",void 0);oe([q({type:String,attribute:"exclude-knobs"})],ri.prototype,"excludeKnobs",void 0);var Or=le`
  :host {
    display: block;
    text-align: left;
    box-sizing: border-box;
    max-width: 800px;
    min-width: 360px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
    border: 1px solid var(--ave-border-color);
    border-radius: var(--ave-border-radius);

    --ave-primary-color: #01579b;
    --ave-secondary-color: rgba(0, 0, 0, 0.54);
    --ave-accent-color: #d63200;
    --ave-border-color: rgba(0, 0, 0, 0.12);
    --ave-border-radius: 4px;
    --ave-header-color: #fff;
    --ave-item-color: rgba(0, 0, 0, 0.87);
    --ave-label-color: #424242;
    --ave-link-color: #01579b;
    --ave-link-hover-color: #d63200;
    --ave-tab-indicator-size: 2px;
    --ave-tab-color: rgba(0, 0, 0, 0.54);
    --ave-monospace-font: Menlo, 'DejaVu Sans Mono', 'Liberation Mono', Consolas,
      'Courier New', monospace;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: var(--ave-header-background, var(--ave-primary-color));
    border-top-left-radius: var(--ave-border-radius);
    border-top-right-radius: var(--ave-border-radius);
  }

  nav {
    display: flex;
    align-items: center;
  }

  [part='header-title'] {
    color: var(--ave-header-color);
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='select-label'] {
    margin-left: 0.5rem;
  }

  [part='warning'] {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    header {
      flex-direction: column;
    }

    nav {
      margin-top: 0.5rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    :host {
      background: #fff;
      color: #000;
    }
  }
`;const Ih=le`
  pre {
    margin: 0;
    color: black;
    background: none;
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    text-align: left;
    white-space: pre-wrap;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    text-shadow: none;
  }

  code {
    font-family: inherit;
  }

  .comment {
    color: slategray;
  }

  .attr,
  .selector-tag {
    color: #690;
  }

  .css {
    color: #333;
  }

  .built_in {
    color: #dd4a68;
  }

  .meta {
    color: #e90;
    font-weight: bold;
  }

  .string {
    color: #07a;
  }

  .tag {
    color: #999;
  }

  .attribute,
  .name,
  .number {
    color: #905;
  }
`,Ph=le`
  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    text-transform: uppercase;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
    background: var(--ave-button-background, rgba(0, 0, 0, 0.3));
    color: var(--ave-button-color, #fff);
  }

  button:focus,
  button:hover {
    background: var(--ave-button-active-background, rgba(0, 0, 0, 0.6));
  }

  api-demo-layout {
    display: block;
  }

  [part='demo-tabs'],
  [part='demo-output'] {
    border-top: solid 1px var(--ave-border-color);
  }

  [part='demo-tabs'] [part='tab-panel'] {
    box-sizing: border-box;
    position: relative;
    background: #fafafa;
  }

  [part='demo-output'] {
    padding: 1.5rem;
    text-align: initial;
    transform: translateZ(0);
    overflow: hidden;
  }

  [part='demo-snippet'] {
    padding: 0.75rem 1rem;
  }

  .source {
    position: relative;
  }

  [part='knobs'] {
    display: flex;
    padding: 0 1rem 1rem;
  }

  [part='knobs-column'] {
    flex-shrink: 1;
  }

  [part='knobs-column']:not(:only-child) {
    flex-basis: 50%;
  }

  [part='knobs-header'] {
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0 0.25rem;
  }

  td {
    padding: 0.25rem 0.25rem 0.25rem 0;
    font-size: 0.9375rem;
    white-space: nowrap;
  }

  [part='event-log'] {
    padding: 0 1rem;
    min-height: 50px;
    max-height: 200px;
    overflow: auto;
  }

  [part='event-record'] {
    margin: 0 0 0.25rem;
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
  }

  [part='event-record']:first-of-type {
    margin-top: 1rem;
  }

  [part='event-record']:last-of-type {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    [part='knobs'] {
      flex-direction: column;
    }

    [part='knobs-column']:not(:last-child) {
      margin-bottom: 1rem;
    }

    [part='input'] {
      max-width: 8rem;
    }
  }
`;var si=le`
  ${Ph}
  ${Ih}
`,Xa=le`
  p,
  ul,
  ol {
    margin: 1rem 0;
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  a {
    color: var(--ave-link-color);
  }

  a:hover {
    color: var(--ave-link-hover-color);
  }

  pre {
    white-space: pre-wrap;
  }

  api-docs-layout {
    display: block;
  }

  [part='tab'][heading^='CSS'] {
    min-width: 120px;
    font-size: 0.8125rem;
  }

  [part='docs-item'] {
    display: block;
    padding: 0.5rem;
    color: var(--ave-item-color);
  }

  [part='docs-item']:not(:first-of-type) {
    border-top: solid 1px var(--ave-border-color);
  }

  [part='docs-description'] {
    display: block;
    padding: 0 1rem;
    border-bottom: solid 1px var(--ave-border-color);
  }

  [part='docs-row'] {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  [part='docs-column'] {
    box-sizing: border-box;
    flex-basis: 25%;
    padding-right: 0.5rem;
  }

  [part='docs-column']:only-child {
    flex-basis: 100%;
  }

  .column-name-css,
  .column-type {
    flex-basis: 50%;
  }

  [part='docs-label'] {
    color: var(--ave-label-color);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1rem;
  }

  [part='docs-value'] {
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='docs-markdown'] p,
  [part='docs-markdown'] ul,
  [part='docs-markdown'] ol {
    margin: 0.5rem 0;
  }

  [part$='params'] {
    color: var(--ave-item-color);
  }

  [part$='type'] {
    color: var(--ave-secondary-color);
  }

  .accent {
    color: var(--ave-accent-color);
  }

  @media (max-width: 480px) {
    .column-type {
      margin-top: 1rem;
    }

    .column-name-css,
    .column-type {
      flex-basis: 100%;
    }

    [part='tab'][heading^='CSS'] {
      max-width: 125px;
    }
  }
`,qh=le`
  ${Or}
  ${Xa}
  ${si}

  [part='radio-label'] {
    margin: 0 0.75rem 0 0.25rem;
    color: var(--ave-header-color);
    font-size: 0.875rem;
  }
`;class Fh extends ri{static get styles(){return qh}firstUpdated(){this.setTemplates()}setTemplates(e){Rr(this._id,e||Array.from(this.querySelectorAll("template")))}}customElements.define("api-viewer",Fh);async function Bh(n,e,t,r,s,i=""){var u,h,p;const o=await n;if(!Un(o))return Gs;const a=Lr(o,t),c=js(o,r),l=Vs(c.members);return M`
    <header part="header">
      <div part="header-title">&lt;${c.name}&gt;</div>
      <nav>
        <label part="select-label">
          <select
            @change=${e}
            .value=${r||""}
            ?hidden=${a.length===1}
            part="select"
          >
            ${a.map(d=>M`<option value=${d.name}>${d.name}</option>`)}
          </select>
        </label>
      </nav>
    </header>
    <api-demo-layout
      .tag=${c.name}
      .props=${l}
      .events=${(u=c.events)!=null?u:[]}
      .slots=${(h=c.slots)!=null?h:[]}
      .cssProps=${(p=c.cssProperties)!=null?p:[]}
      .exclude=${i}
      .vid=${s}
      part="demo-container"
    ></api-demo-layout>
  `}let zh=0;class ii extends Ws(ce){constructor(){super();this._id=zh++}render(){return M`
      ${Us(Bh(this.jsonFetched,this._onSelect,this.only,this.selected,this._id,this.excludeKnobs))}
    `}_onSelect(e){this.selected=e.target.value}}oe([q({type:String,attribute:"exclude-knobs"})],ii.prototype,"excludeKnobs",void 0);class Hh extends ii{static get styles(){return[Or,si]}firstUpdated(){this.setTemplates()}setTemplates(e){Rr(this._id,e||Array.from(this.querySelectorAll("template")))}}customElements.define("api-demo",Hh);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=n=>e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(n,e):((t,r)=>{const{kind:s,elements:i}=r;return{kind:s,elements:i,finisher(o){window.customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(n){return q(qe(Pe({},n),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uh=({finisher:n,descriptor:e})=>(t,r)=>{var s;if(r===void 0){const i=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(t.key)}:qe(Pe({},t),{key:i});return n!=null&&(o.finisher=function(a){n(a,i)}),o}{const i=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),n==null||n(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hn(n,e){return Uh({descriptor:t=>{const r={get(){var s,i;return(i=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var i,o;return this[s]===void 0&&(this[s]=(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var us;((us=window.HTMLSlotElement)===null||us===void 0?void 0:us.prototype.assignedElements)!=null;var jh=Object.defineProperty,Vh=Object.getOwnPropertyDescriptor,Gh=(n,e,t,r)=>{for(var s=r>1?void 0:r?Vh(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&jh(e,t,s),s};class Ja extends ce{constructor(){super(...arguments);this.theme="light"}updated(e){!e.get("theme")||this.updateTheme(this.theme)}connectedCallback(){super.connectedCallback();const e=localStorage.getItem("kami-theme-mode");!e||this.updateTheme(e)}updateTheme(e){e!=="light"&&e!=="dark"||(this.theme=e,this.emitUpdateTheme(e),localStorage.setItem("kami-theme-mode",e))}emitUpdateTheme(e){const t=new CustomEvent("theme",{detail:{theme:e}});document.dispatchEvent(t)}render(){return M`
      <slot class="kami-${this.theme||"light"}-mode"></slot>
    `}}Gh([q({reflect:!0})],Ja.prototype,"theme",2);var Wh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,Kh=(n,e,t,r)=>{for(var s=r>1?void 0:r?Zh(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Wh(e,t,s),s};let $s=class extends Ja{};$s.styles=le`
    ::slotted(*) {
      --kami-theme-font-primary: "Gosha Sans";
      --kami-theme-font-secondary: "UnB Office";

      --kami-theme-shadow: 0 0 8px -5px black;
      --kami-theme-text-shadow: 0 0 4px #0000008a;
      --kami-theme-radius: 20px;

      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #5472ea;
      --kami-theme-white: white;
      --kami-theme-info: #38CFFF;
      --kami-theme-success: #47D6C2;
      --kami-theme-warning: #FF9F89;
      --kami-theme-error: #FC77A4;

      --kami-theme-primary-rgb: 48, 226, 201;
      --kami-theme-secondary-rgb: 84, 114, 234;
      --kami-theme-white-rgb: 255, 255, 255;
      --kami-theme-info-rgb: 56, 207, 255;
      --kami-theme-success-rgb: 71, 214, 194;
      --kami-theme-warning-rgb: 255, 159, 137;
      --kami-theme-error-rgb: 252, 119, 164;
    }

    .kami-light-mode::slotted(*) {
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: #565656;
      --kami-theme-background: white;
      --kami-theme-border-color: rgba(0, 0, 0, 0.09);
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  
    .kami-dark-mode::slotted(*) {
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: white;
      --kami-theme-background: #303032;
      --kami-theme-border-color: rgba(255, 255, 255, 0.09);
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  `;$s=Kh([me("kami-theme")],$s);function Yh(n="0",e="1"){return[{opacity:n},{opacity:e}]}function Xh(n="0",e="1"){return[{transform:`scale(${n})`,opacity:0},{transform:`scale(${e})`,opacity:1}]}function Jh(n="50",e="0"){return[{transform:`translateY(${n}px)`,opacity:0},{opacity:0,offset:.3},{transform:`translateY(${e}px)`,opacity:1}]}function Qh(n="50",e="0"){return[{transform:`translateX(${n}px)`,opacity:0},{opacity:0,offset:.3},{transform:`translateX(${e}px)`,opacity:1}]}const sr={fade:Yh,scale:Xh,"slide-x":Qh,"slide-y":Jh};var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,Ue=(n,e,t,r)=>{for(var s=r>1?void 0:r?td(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ed(e,t,s),s};let Le=class extends ce{constructor(){super(...arguments);this.appear=!1,this.duration=500,this.delay=0,this.easing="ease",this.transition="fade"}get options(){return{duration:this.duration,delay:this.delay,easing:this.easing}}get single(){return this.getElementSlot(this.child)}get in(){return this.getElementSlot(this.childIn)}get out(){return this.getElementSlot(this.childOut)}getElementSlot(n){const e=n==null?void 0:n.assignedElements({flatten:!0})[0];if(!!e)return e}updated(n){n.get("show")!==void 0&&(this.cancelAnimation(this.animation),this.cancelAnimation(this.animationIn),this.cancelAnimation(this.animationOut),this.updateHostSize(this.in),this.updateHostSize(this.out),this.toggle(this.show))}toggle(n){n&&this.single&&this.display(),n&&this.in&&this.out&&this.displayInOut(),!n&&this.single&&this.hide(),!n&&this.in&&this.out&&this.hideInOut()}firstUpdated(){if(this.single&&(this.in||this.out))throw new Error("In-out does not work with default slot");if(this.in&&!this.out)throw new Error("Missing out slot");if(this.out&&!this.in)throw new Error("Missing in slot");this.show&&this.single&&this.displayEl(this.child),!this.show&&this.in&&this.out&&(this.hideEl(this.childIn),this.displayEl(this.childOut)),this.show&&this.in&&this.out&&(this.displayEl(this.childIn),this.hideEl(this.childOut)),this.updateHostSize(this.in),this.updateHostSize(this.out),this.style.display="block",this.style.opacity="1",this.appear&&this.toggle(!0)}runAnimation({child:n,el:e,keyframes:t,options:r,show:s=!0}){s&&this.displayEl(n);const i=e.animate(t,r);return i.onfinish=()=>{s?(this.displayEl(n),this.dispatchEvent(new CustomEvent("display"))):(this.hideEl(n),this.dispatchEvent(new CustomEvent("hide")))},i}runAnimationInOut({childIn:n,childOut:e,inEl:t,outEl:r,keyframes:s,options:i}){this.displayEl(n);const o=t.animate(s,i),a=r.animate(s,qe(Pe({},i),{direction:"reverse"}));return o.onfinish=()=>this.displayEl(n),o.oncancel=()=>this.displayEl(n),a.onfinish=()=>this.hideEl(e),a.oncancel=()=>this.hideEl(e),{animationIn:o,animationOut:a}}display(){!this.child||!this.single||(this.animation=this.runAnimation({child:this.child,el:this.single,keyframes:sr[this.transition](this.from,this.to),options:this.options}))}displayInOut(){if(!this.childIn||!this.childOut||!this.in||!this.out)return;const{animationIn:n,animationOut:e}=this.runAnimationInOut({childIn:this.childIn,childOut:this.childOut,inEl:this.in,outEl:this.out,keyframes:sr[this.transition](this.from,this.to),options:this.options});this.animationIn=n,this.animationOut=e}hide(){!this.child||!this.single||(this.animation=this.runAnimation({child:this.child,el:this.single,keyframes:sr[this.transition](this.from,this.to),show:!1,options:qe(Pe({},this.options),{direction:"reverse"})}))}hideInOut(){if(!this.childIn||!this.childOut||!this.in||!this.out)return;const{animationIn:n,animationOut:e}=this.runAnimationInOut({childIn:this.childOut,childOut:this.childIn,inEl:this.out,outEl:this.in,keyframes:sr[this.transition](this.from,this.to),options:this.options});this.animationIn=e,this.animationOut=n}updateHostSize(n){!n||!n.clientWidth&&!n.clientHeight||(this.style.width=`${n.clientWidth}px`,this.style.height=`${n.clientHeight}px`)}cancelAnimation(n){!n||n.playState==="finished"||n.cancel()}displayEl(n){!n||(n.style.display="inherit")}hideEl(n){!n||(n.style.display="none")}render(){return M`
      <slot id="single" style="display: none;"></slot>
      <slot id="in" name="in" style="display: none; position: absolute;"></slot>
      <slot id="out" name="out" style="display: none; position: absolute;"></slot>
    `}};Ue([hn("#single")],Le.prototype,"child",2);Ue([hn("#in")],Le.prototype,"childIn",2);Ue([hn("#out")],Le.prototype,"childOut",2);Ue([q({converter:n=>n==="true"})],Le.prototype,"show",2);Ue([q({type:Boolean})],Le.prototype,"appear",2);Ue([q({type:String})],Le.prototype,"from",2);Ue([q({type:String})],Le.prototype,"to",2);Ue([q({type:Number})],Le.prototype,"duration",2);Ue([q({type:Number})],Le.prototype,"delay",2);Ue([q({type:String})],Le.prototype,"easing",2);Ue([q({type:String})],Le.prototype,"transition",2);Le=Ue([me("kami-transition")],Le);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const nd=le`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Rs=class extends ce{render(){return M`<span><slot></slot></span>`}};Rs.styles=[nd];Rs=oe([me("mwc-icon")],Rs);var rd="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",sd="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",id="M19 17V11.8C18.5 11.9 18 12 17.5 12H17V18H7V11C7 8.2 9.2 6 12 6C12.1 4.7 12.7 3.6 13.5 2.7C13.2 2.3 12.6 2 12 2C10.9 2 10 2.9 10 4V4.3C7 5.2 5 7.9 5 11V17L3 19V20H21V19L19 17M10 21C10 22.1 10.9 23 12 23S14 22.1 14 21H10M21 6.5C21 8.4 19.4 10 17.5 10S14 8.4 14 6.5 15.6 3 17.5 3 21 4.6 21 6.5",od="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z",ad="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",oi="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",cd="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",ld="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",ud="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",hd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function dd(n){if(n.__esModule)return n;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(n).forEach(function(t){var r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}),e}var ne={};const pd="\xC1",fd="\xE1",md="\u0102",gd="\u0103",bd="\u223E",vd="\u223F",yd="\u223E\u0333",_d="\xC2",wd="\xE2",kd="\xB4",xd="\u0410",Ed="\u0430",Ad="\xC6",Sd="\xE6",Cd="\u2061",Td="\u{1D504}",$d="\u{1D51E}",Rd="\xC0",Dd="\xE0",Ld="\u2135",Md="\u2135",Od="\u0391",Nd="\u03B1",Id="\u0100",Pd="\u0101",qd="\u2A3F",Fd="&",Bd="&",zd="\u2A55",Hd="\u2A53",Ud="\u2227",jd="\u2A5C",Vd="\u2A58",Gd="\u2A5A",Wd="\u2220",Zd="\u29A4",Kd="\u2220",Yd="\u29A8",Xd="\u29A9",Jd="\u29AA",Qd="\u29AB",ep="\u29AC",tp="\u29AD",np="\u29AE",rp="\u29AF",sp="\u2221",ip="\u221F",op="\u22BE",ap="\u299D",cp="\u2222",lp="\xC5",up="\u237C",hp="\u0104",dp="\u0105",pp="\u{1D538}",fp="\u{1D552}",mp="\u2A6F",gp="\u2248",bp="\u2A70",vp="\u224A",yp="\u224B",_p="'",wp="\u2061",kp="\u2248",xp="\u224A",Ep="\xC5",Ap="\xE5",Sp="\u{1D49C}",Cp="\u{1D4B6}",Tp="\u2254",$p="*",Rp="\u2248",Dp="\u224D",Lp="\xC3",Mp="\xE3",Op="\xC4",Np="\xE4",Ip="\u2233",Pp="\u2A11",qp="\u224C",Fp="\u03F6",Bp="\u2035",zp="\u223D",Hp="\u22CD",Up="\u2216",jp="\u2AE7",Vp="\u22BD",Gp="\u2305",Wp="\u2306",Zp="\u2305",Kp="\u23B5",Yp="\u23B6",Xp="\u224C",Jp="\u0411",Qp="\u0431",ef="\u201E",tf="\u2235",nf="\u2235",rf="\u2235",sf="\u29B0",of="\u03F6",af="\u212C",cf="\u212C",lf="\u0392",uf="\u03B2",hf="\u2136",df="\u226C",pf="\u{1D505}",ff="\u{1D51F}",mf="\u22C2",gf="\u25EF",bf="\u22C3",vf="\u2A00",yf="\u2A01",_f="\u2A02",wf="\u2A06",kf="\u2605",xf="\u25BD",Ef="\u25B3",Af="\u2A04",Sf="\u22C1",Cf="\u22C0",Tf="\u290D",$f="\u29EB",Rf="\u25AA",Df="\u25B4",Lf="\u25BE",Mf="\u25C2",Of="\u25B8",Nf="\u2423",If="\u2592",Pf="\u2591",qf="\u2593",Ff="\u2588",Bf="=\u20E5",zf="\u2261\u20E5",Hf="\u2AED",Uf="\u2310",jf="\u{1D539}",Vf="\u{1D553}",Gf="\u22A5",Wf="\u22A5",Zf="\u22C8",Kf="\u29C9",Yf="\u2510",Xf="\u2555",Jf="\u2556",Qf="\u2557",em="\u250C",tm="\u2552",nm="\u2553",rm="\u2554",sm="\u2500",im="\u2550",om="\u252C",am="\u2564",cm="\u2565",lm="\u2566",um="\u2534",hm="\u2567",dm="\u2568",pm="\u2569",fm="\u229F",mm="\u229E",gm="\u22A0",bm="\u2518",vm="\u255B",ym="\u255C",_m="\u255D",wm="\u2514",km="\u2558",xm="\u2559",Em="\u255A",Am="\u2502",Sm="\u2551",Cm="\u253C",Tm="\u256A",$m="\u256B",Rm="\u256C",Dm="\u2524",Lm="\u2561",Mm="\u2562",Om="\u2563",Nm="\u251C",Im="\u255E",Pm="\u255F",qm="\u2560",Fm="\u2035",Bm="\u02D8",zm="\u02D8",Hm="\xA6",Um="\u{1D4B7}",jm="\u212C",Vm="\u204F",Gm="\u223D",Wm="\u22CD",Zm="\u29C5",Km="\\",Ym="\u27C8",Xm="\u2022",Jm="\u2022",Qm="\u224E",eg="\u2AAE",tg="\u224F",ng="\u224E",rg="\u224F",sg="\u0106",ig="\u0107",og="\u2A44",ag="\u2A49",cg="\u2A4B",lg="\u2229",ug="\u22D2",hg="\u2A47",dg="\u2A40",pg="\u2145",fg="\u2229\uFE00",mg="\u2041",gg="\u02C7",bg="\u212D",vg="\u2A4D",yg="\u010C",_g="\u010D",wg="\xC7",kg="\xE7",xg="\u0108",Eg="\u0109",Ag="\u2230",Sg="\u2A4C",Cg="\u2A50",Tg="\u010A",$g="\u010B",Rg="\xB8",Dg="\xB8",Lg="\u29B2",Mg="\xA2",Og="\xB7",Ng="\xB7",Ig="\u{1D520}",Pg="\u212D",qg="\u0427",Fg="\u0447",Bg="\u2713",zg="\u2713",Hg="\u03A7",Ug="\u03C7",jg="\u02C6",Vg="\u2257",Gg="\u21BA",Wg="\u21BB",Zg="\u229B",Kg="\u229A",Yg="\u229D",Xg="\u2299",Jg="\xAE",Qg="\u24C8",eb="\u2296",tb="\u2295",nb="\u2297",rb="\u25CB",sb="\u29C3",ib="\u2257",ob="\u2A10",ab="\u2AEF",cb="\u29C2",lb="\u2232",ub="\u201D",hb="\u2019",db="\u2663",pb="\u2663",fb=":",mb="\u2237",gb="\u2A74",bb="\u2254",vb="\u2254",yb=",",_b="@",wb="\u2201",kb="\u2218",xb="\u2201",Eb="\u2102",Ab="\u2245",Sb="\u2A6D",Cb="\u2261",Tb="\u222E",$b="\u222F",Rb="\u222E",Db="\u{1D554}",Lb="\u2102",Mb="\u2210",Ob="\u2210",Nb="\xA9",Ib="\xA9",Pb="\u2117",qb="\u2233",Fb="\u21B5",Bb="\u2717",zb="\u2A2F",Hb="\u{1D49E}",Ub="\u{1D4B8}",jb="\u2ACF",Vb="\u2AD1",Gb="\u2AD0",Wb="\u2AD2",Zb="\u22EF",Kb="\u2938",Yb="\u2935",Xb="\u22DE",Jb="\u22DF",Qb="\u21B6",ev="\u293D",tv="\u2A48",nv="\u2A46",rv="\u224D",sv="\u222A",iv="\u22D3",ov="\u2A4A",av="\u228D",cv="\u2A45",lv="\u222A\uFE00",uv="\u21B7",hv="\u293C",dv="\u22DE",pv="\u22DF",fv="\u22CE",mv="\u22CF",gv="\xA4",bv="\u21B6",vv="\u21B7",yv="\u22CE",_v="\u22CF",wv="\u2232",kv="\u2231",xv="\u232D",Ev="\u2020",Av="\u2021",Sv="\u2138",Cv="\u2193",Tv="\u21A1",$v="\u21D3",Rv="\u2010",Dv="\u2AE4",Lv="\u22A3",Mv="\u290F",Ov="\u02DD",Nv="\u010E",Iv="\u010F",Pv="\u0414",qv="\u0434",Fv="\u2021",Bv="\u21CA",zv="\u2145",Hv="\u2146",Uv="\u2911",jv="\u2A77",Vv="\xB0",Gv="\u2207",Wv="\u0394",Zv="\u03B4",Kv="\u29B1",Yv="\u297F",Xv="\u{1D507}",Jv="\u{1D521}",Qv="\u2965",e0="\u21C3",t0="\u21C2",n0="\xB4",r0="\u02D9",s0="\u02DD",i0="`",o0="\u02DC",a0="\u22C4",c0="\u22C4",l0="\u22C4",u0="\u2666",h0="\u2666",d0="\xA8",p0="\u2146",f0="\u03DD",m0="\u22F2",g0="\xF7",b0="\xF7",v0="\u22C7",y0="\u22C7",_0="\u0402",w0="\u0452",k0="\u231E",x0="\u230D",E0="$",A0="\u{1D53B}",S0="\u{1D555}",C0="\xA8",T0="\u02D9",$0="\u20DC",R0="\u2250",D0="\u2251",L0="\u2250",M0="\u2238",O0="\u2214",N0="\u22A1",I0="\u2306",P0="\u222F",q0="\xA8",F0="\u21D3",B0="\u21D0",z0="\u21D4",H0="\u2AE4",U0="\u27F8",j0="\u27FA",V0="\u27F9",G0="\u21D2",W0="\u22A8",Z0="\u21D1",K0="\u21D5",Y0="\u2225",X0="\u2913",J0="\u2193",Q0="\u2193",ey="\u21D3",ty="\u21F5",ny="\u0311",ry="\u21CA",sy="\u21C3",iy="\u21C2",oy="\u2950",ay="\u295E",cy="\u2956",ly="\u21BD",uy="\u295F",hy="\u2957",dy="\u21C1",py="\u21A7",fy="\u22A4",my="\u2910",gy="\u231F",by="\u230C",vy="\u{1D49F}",yy="\u{1D4B9}",_y="\u0405",wy="\u0455",ky="\u29F6",xy="\u0110",Ey="\u0111",Ay="\u22F1",Sy="\u25BF",Cy="\u25BE",Ty="\u21F5",$y="\u296F",Ry="\u29A6",Dy="\u040F",Ly="\u045F",My="\u27FF",Oy="\xC9",Ny="\xE9",Iy="\u2A6E",Py="\u011A",qy="\u011B",Fy="\xCA",By="\xEA",zy="\u2256",Hy="\u2255",Uy="\u042D",jy="\u044D",Vy="\u2A77",Gy="\u0116",Wy="\u0117",Zy="\u2251",Ky="\u2147",Yy="\u2252",Xy="\u{1D508}",Jy="\u{1D522}",Qy="\u2A9A",e_="\xC8",t_="\xE8",n_="\u2A96",r_="\u2A98",s_="\u2A99",i_="\u2208",o_="\u23E7",a_="\u2113",c_="\u2A95",l_="\u2A97",u_="\u0112",h_="\u0113",d_="\u2205",p_="\u2205",f_="\u25FB",m_="\u2205",g_="\u25AB",b_="\u2004",v_="\u2005",y_="\u2003",__="\u014A",w_="\u014B",k_="\u2002",x_="\u0118",E_="\u0119",A_="\u{1D53C}",S_="\u{1D556}",C_="\u22D5",T_="\u29E3",$_="\u2A71",R_="\u03B5",D_="\u0395",L_="\u03B5",M_="\u03F5",O_="\u2256",N_="\u2255",I_="\u2242",P_="\u2A96",q_="\u2A95",F_="\u2A75",B_="=",z_="\u2242",H_="\u225F",U_="\u21CC",j_="\u2261",V_="\u2A78",G_="\u29E5",W_="\u2971",Z_="\u2253",K_="\u212F",Y_="\u2130",X_="\u2250",J_="\u2A73",Q_="\u2242",ew="\u0397",tw="\u03B7",nw="\xD0",rw="\xF0",sw="\xCB",iw="\xEB",ow="\u20AC",aw="!",cw="\u2203",lw="\u2203",uw="\u2130",hw="\u2147",dw="\u2147",pw="\u2252",fw="\u0424",mw="\u0444",gw="\u2640",bw="\uFB03",vw="\uFB00",yw="\uFB04",_w="\u{1D509}",ww="\u{1D523}",kw="\uFB01",xw="\u25FC",Ew="\u25AA",Aw="fj",Sw="\u266D",Cw="\uFB02",Tw="\u25B1",$w="\u0192",Rw="\u{1D53D}",Dw="\u{1D557}",Lw="\u2200",Mw="\u2200",Ow="\u22D4",Nw="\u2AD9",Iw="\u2131",Pw="\u2A0D",qw="\xBD",Fw="\u2153",Bw="\xBC",zw="\u2155",Hw="\u2159",Uw="\u215B",jw="\u2154",Vw="\u2156",Gw="\xBE",Ww="\u2157",Zw="\u215C",Kw="\u2158",Yw="\u215A",Xw="\u215D",Jw="\u215E",Qw="\u2044",ek="\u2322",tk="\u{1D4BB}",nk="\u2131",rk="\u01F5",sk="\u0393",ik="\u03B3",ok="\u03DC",ak="\u03DD",ck="\u2A86",lk="\u011E",uk="\u011F",hk="\u0122",dk="\u011C",pk="\u011D",fk="\u0413",mk="\u0433",gk="\u0120",bk="\u0121",vk="\u2265",yk="\u2267",_k="\u2A8C",wk="\u22DB",kk="\u2265",xk="\u2267",Ek="\u2A7E",Ak="\u2AA9",Sk="\u2A7E",Ck="\u2A80",Tk="\u2A82",$k="\u2A84",Rk="\u22DB\uFE00",Dk="\u2A94",Lk="\u{1D50A}",Mk="\u{1D524}",Ok="\u226B",Nk="\u22D9",Ik="\u22D9",Pk="\u2137",qk="\u0403",Fk="\u0453",Bk="\u2AA5",zk="\u2277",Hk="\u2A92",Uk="\u2AA4",jk="\u2A8A",Vk="\u2A8A",Gk="\u2A88",Wk="\u2269",Zk="\u2A88",Kk="\u2269",Yk="\u22E7",Xk="\u{1D53E}",Jk="\u{1D558}",Qk="`",ex="\u2265",tx="\u22DB",nx="\u2267",rx="\u2AA2",sx="\u2277",ix="\u2A7E",ox="\u2273",ax="\u{1D4A2}",cx="\u210A",lx="\u2273",ux="\u2A8E",hx="\u2A90",dx="\u2AA7",px="\u2A7A",fx=">",mx=">",gx="\u226B",bx="\u22D7",vx="\u2995",yx="\u2A7C",_x="\u2A86",wx="\u2978",kx="\u22D7",xx="\u22DB",Ex="\u2A8C",Ax="\u2277",Sx="\u2273",Cx="\u2269\uFE00",Tx="\u2269\uFE00",$x="\u02C7",Rx="\u200A",Dx="\xBD",Lx="\u210B",Mx="\u042A",Ox="\u044A",Nx="\u2948",Ix="\u2194",Px="\u21D4",qx="\u21AD",Fx="^",Bx="\u210F",zx="\u0124",Hx="\u0125",Ux="\u2665",jx="\u2665",Vx="\u2026",Gx="\u22B9",Wx="\u{1D525}",Zx="\u210C",Kx="\u210B",Yx="\u2925",Xx="\u2926",Jx="\u21FF",Qx="\u223B",eE="\u21A9",tE="\u21AA",nE="\u{1D559}",rE="\u210D",sE="\u2015",iE="\u2500",oE="\u{1D4BD}",aE="\u210B",cE="\u210F",lE="\u0126",uE="\u0127",hE="\u224E",dE="\u224F",pE="\u2043",fE="\u2010",mE="\xCD",gE="\xED",bE="\u2063",vE="\xCE",yE="\xEE",_E="\u0418",wE="\u0438",kE="\u0130",xE="\u0415",EE="\u0435",AE="\xA1",SE="\u21D4",CE="\u{1D526}",TE="\u2111",$E="\xCC",RE="\xEC",DE="\u2148",LE="\u2A0C",ME="\u222D",OE="\u29DC",NE="\u2129",IE="\u0132",PE="\u0133",qE="\u012A",FE="\u012B",BE="\u2111",zE="\u2148",HE="\u2110",UE="\u2111",jE="\u0131",VE="\u2111",GE="\u22B7",WE="\u01B5",ZE="\u21D2",KE="\u2105",YE="\u221E",XE="\u29DD",JE="\u0131",QE="\u22BA",e1="\u222B",t1="\u222C",n1="\u2124",r1="\u222B",s1="\u22BA",i1="\u22C2",o1="\u2A17",a1="\u2A3C",c1="\u2063",l1="\u2062",u1="\u0401",h1="\u0451",d1="\u012E",p1="\u012F",f1="\u{1D540}",m1="\u{1D55A}",g1="\u0399",b1="\u03B9",v1="\u2A3C",y1="\xBF",_1="\u{1D4BE}",w1="\u2110",k1="\u2208",x1="\u22F5",E1="\u22F9",A1="\u22F4",S1="\u22F3",C1="\u2208",T1="\u2062",$1="\u0128",R1="\u0129",D1="\u0406",L1="\u0456",M1="\xCF",O1="\xEF",N1="\u0134",I1="\u0135",P1="\u0419",q1="\u0439",F1="\u{1D50D}",B1="\u{1D527}",z1="\u0237",H1="\u{1D541}",U1="\u{1D55B}",j1="\u{1D4A5}",V1="\u{1D4BF}",G1="\u0408",W1="\u0458",Z1="\u0404",K1="\u0454",Y1="\u039A",X1="\u03BA",J1="\u03F0",Q1="\u0136",eA="\u0137",tA="\u041A",nA="\u043A",rA="\u{1D50E}",sA="\u{1D528}",iA="\u0138",oA="\u0425",aA="\u0445",cA="\u040C",lA="\u045C",uA="\u{1D542}",hA="\u{1D55C}",dA="\u{1D4A6}",pA="\u{1D4C0}",fA="\u21DA",mA="\u0139",gA="\u013A",bA="\u29B4",vA="\u2112",yA="\u039B",_A="\u03BB",wA="\u27E8",kA="\u27EA",xA="\u2991",EA="\u27E8",AA="\u2A85",SA="\u2112",CA="\xAB",TA="\u21E4",$A="\u291F",RA="\u2190",DA="\u219E",LA="\u21D0",MA="\u291D",OA="\u21A9",NA="\u21AB",IA="\u2939",PA="\u2973",qA="\u21A2",FA="\u2919",BA="\u291B",zA="\u2AAB",HA="\u2AAD",UA="\u2AAD\uFE00",jA="\u290C",VA="\u290E",GA="\u2772",WA="{",ZA="[",KA="\u298B",YA="\u298F",XA="\u298D",JA="\u013D",QA="\u013E",eS="\u013B",tS="\u013C",nS="\u2308",rS="{",sS="\u041B",iS="\u043B",oS="\u2936",aS="\u201C",cS="\u201E",lS="\u2967",uS="\u294B",hS="\u21B2",dS="\u2264",pS="\u2266",fS="\u27E8",mS="\u21E4",gS="\u2190",bS="\u2190",vS="\u21D0",yS="\u21C6",_S="\u21A2",wS="\u2308",kS="\u27E6",xS="\u2961",ES="\u2959",AS="\u21C3",SS="\u230A",CS="\u21BD",TS="\u21BC",$S="\u21C7",RS="\u2194",DS="\u2194",LS="\u21D4",MS="\u21C6",OS="\u21CB",NS="\u21AD",IS="\u294E",PS="\u21A4",qS="\u22A3",FS="\u295A",BS="\u22CB",zS="\u29CF",HS="\u22B2",US="\u22B4",jS="\u2951",VS="\u2960",GS="\u2958",WS="\u21BF",ZS="\u2952",KS="\u21BC",YS="\u2A8B",XS="\u22DA",JS="\u2264",QS="\u2266",eC="\u2A7D",tC="\u2AA8",nC="\u2A7D",rC="\u2A7F",sC="\u2A81",iC="\u2A83",oC="\u22DA\uFE00",aC="\u2A93",cC="\u2A85",lC="\u22D6",uC="\u22DA",hC="\u2A8B",dC="\u22DA",pC="\u2266",fC="\u2276",mC="\u2276",gC="\u2AA1",bC="\u2272",vC="\u2A7D",yC="\u2272",_C="\u297C",wC="\u230A",kC="\u{1D50F}",xC="\u{1D529}",EC="\u2276",AC="\u2A91",SC="\u2962",CC="\u21BD",TC="\u21BC",$C="\u296A",RC="\u2584",DC="\u0409",LC="\u0459",MC="\u21C7",OC="\u226A",NC="\u22D8",IC="\u231E",PC="\u21DA",qC="\u296B",FC="\u25FA",BC="\u013F",zC="\u0140",HC="\u23B0",UC="\u23B0",jC="\u2A89",VC="\u2A89",GC="\u2A87",WC="\u2268",ZC="\u2A87",KC="\u2268",YC="\u22E6",XC="\u27EC",JC="\u21FD",QC="\u27E6",eT="\u27F5",tT="\u27F5",nT="\u27F8",rT="\u27F7",sT="\u27F7",iT="\u27FA",oT="\u27FC",aT="\u27F6",cT="\u27F6",lT="\u27F9",uT="\u21AB",hT="\u21AC",dT="\u2985",pT="\u{1D543}",fT="\u{1D55D}",mT="\u2A2D",gT="\u2A34",bT="\u2217",vT="_",yT="\u2199",_T="\u2198",wT="\u25CA",kT="\u25CA",xT="\u29EB",ET="(",AT="\u2993",ST="\u21C6",CT="\u231F",TT="\u21CB",$T="\u296D",RT="\u200E",DT="\u22BF",LT="\u2039",MT="\u{1D4C1}",OT="\u2112",NT="\u21B0",IT="\u21B0",PT="\u2272",qT="\u2A8D",FT="\u2A8F",BT="[",zT="\u2018",HT="\u201A",UT="\u0141",jT="\u0142",VT="\u2AA6",GT="\u2A79",WT="<",ZT="<",KT="\u226A",YT="\u22D6",XT="\u22CB",JT="\u22C9",QT="\u2976",e$="\u2A7B",t$="\u25C3",n$="\u22B4",r$="\u25C2",s$="\u2996",i$="\u294A",o$="\u2966",a$="\u2268\uFE00",c$="\u2268\uFE00",l$="\xAF",u$="\u2642",h$="\u2720",d$="\u2720",p$="\u21A6",f$="\u21A6",m$="\u21A7",g$="\u21A4",b$="\u21A5",v$="\u25AE",y$="\u2A29",_$="\u041C",w$="\u043C",k$="\u2014",x$="\u223A",E$="\u2221",A$="\u205F",S$="\u2133",C$="\u{1D510}",T$="\u{1D52A}",$$="\u2127",R$="\xB5",D$="*",L$="\u2AF0",M$="\u2223",O$="\xB7",N$="\u229F",I$="\u2212",P$="\u2238",q$="\u2A2A",F$="\u2213",B$="\u2ADB",z$="\u2026",H$="\u2213",U$="\u22A7",j$="\u{1D544}",V$="\u{1D55E}",G$="\u2213",W$="\u{1D4C2}",Z$="\u2133",K$="\u223E",Y$="\u039C",X$="\u03BC",J$="\u22B8",Q$="\u22B8",eR="\u2207",tR="\u0143",nR="\u0144",rR="\u2220\u20D2",sR="\u2249",iR="\u2A70\u0338",oR="\u224B\u0338",aR="\u0149",cR="\u2249",lR="\u266E",uR="\u2115",hR="\u266E",dR="\xA0",pR="\u224E\u0338",fR="\u224F\u0338",mR="\u2A43",gR="\u0147",bR="\u0148",vR="\u0145",yR="\u0146",_R="\u2247",wR="\u2A6D\u0338",kR="\u2A42",xR="\u041D",ER="\u043D",AR="\u2013",SR="\u2924",CR="\u2197",TR="\u21D7",$R="\u2197",RR="\u2260",DR="\u2250\u0338",LR="\u200B",MR="\u200B",OR="\u200B",NR="\u200B",IR="\u2262",PR="\u2928",qR="\u2242\u0338",FR="\u226B",BR="\u226A",zR=`
`,HR="\u2204",UR="\u2204",jR="\u{1D511}",VR="\u{1D52B}",GR="\u2267\u0338",WR="\u2271",ZR="\u2271",KR="\u2267\u0338",YR="\u2A7E\u0338",XR="\u2A7E\u0338",JR="\u22D9\u0338",QR="\u2275",eD="\u226B\u20D2",tD="\u226F",nD="\u226F",rD="\u226B\u0338",sD="\u21AE",iD="\u21CE",oD="\u2AF2",aD="\u220B",cD="\u22FC",lD="\u22FA",uD="\u220B",hD="\u040A",dD="\u045A",pD="\u219A",fD="\u21CD",mD="\u2025",gD="\u2266\u0338",bD="\u2270",vD="\u219A",yD="\u21CD",_D="\u21AE",wD="\u21CE",kD="\u2270",xD="\u2266\u0338",ED="\u2A7D\u0338",AD="\u2A7D\u0338",SD="\u226E",CD="\u22D8\u0338",TD="\u2274",$D="\u226A\u20D2",RD="\u226E",DD="\u22EA",LD="\u22EC",MD="\u226A\u0338",OD="\u2224",ND="\u2060",ID="\xA0",PD="\u{1D55F}",qD="\u2115",FD="\u2AEC",BD="\xAC",zD="\u2262",HD="\u226D",UD="\u2226",jD="\u2209",VD="\u2260",GD="\u2242\u0338",WD="\u2204",ZD="\u226F",KD="\u2271",YD="\u2267\u0338",XD="\u226B\u0338",JD="\u2279",QD="\u2A7E\u0338",eL="\u2275",tL="\u224E\u0338",nL="\u224F\u0338",rL="\u2209",sL="\u22F5\u0338",iL="\u22F9\u0338",oL="\u2209",aL="\u22F7",cL="\u22F6",lL="\u29CF\u0338",uL="\u22EA",hL="\u22EC",dL="\u226E",pL="\u2270",fL="\u2278",mL="\u226A\u0338",gL="\u2A7D\u0338",bL="\u2274",vL="\u2AA2\u0338",yL="\u2AA1\u0338",_L="\u220C",wL="\u220C",kL="\u22FE",xL="\u22FD",EL="\u2280",AL="\u2AAF\u0338",SL="\u22E0",CL="\u220C",TL="\u29D0\u0338",$L="\u22EB",RL="\u22ED",DL="\u228F\u0338",LL="\u22E2",ML="\u2290\u0338",OL="\u22E3",NL="\u2282\u20D2",IL="\u2288",PL="\u2281",qL="\u2AB0\u0338",FL="\u22E1",BL="\u227F\u0338",zL="\u2283\u20D2",HL="\u2289",UL="\u2241",jL="\u2244",VL="\u2247",GL="\u2249",WL="\u2224",ZL="\u2226",KL="\u2226",YL="\u2AFD\u20E5",XL="\u2202\u0338",JL="\u2A14",QL="\u2280",eM="\u22E0",tM="\u2280",nM="\u2AAF\u0338",rM="\u2AAF\u0338",sM="\u2933\u0338",iM="\u219B",oM="\u21CF",aM="\u219D\u0338",cM="\u219B",lM="\u21CF",uM="\u22EB",hM="\u22ED",dM="\u2281",pM="\u22E1",fM="\u2AB0\u0338",mM="\u{1D4A9}",gM="\u{1D4C3}",bM="\u2224",vM="\u2226",yM="\u2241",_M="\u2244",wM="\u2244",kM="\u2224",xM="\u2226",EM="\u22E2",AM="\u22E3",SM="\u2284",CM="\u2AC5\u0338",TM="\u2288",$M="\u2282\u20D2",RM="\u2288",DM="\u2AC5\u0338",LM="\u2281",MM="\u2AB0\u0338",OM="\u2285",NM="\u2AC6\u0338",IM="\u2289",PM="\u2283\u20D2",qM="\u2289",FM="\u2AC6\u0338",BM="\u2279",zM="\xD1",HM="\xF1",UM="\u2278",jM="\u22EA",VM="\u22EC",GM="\u22EB",WM="\u22ED",ZM="\u039D",KM="\u03BD",YM="#",XM="\u2116",JM="\u2007",QM="\u224D\u20D2",eO="\u22AC",tO="\u22AD",nO="\u22AE",rO="\u22AF",sO="\u2265\u20D2",iO=">\u20D2",oO="\u2904",aO="\u29DE",cO="\u2902",lO="\u2264\u20D2",uO="<\u20D2",hO="\u22B4\u20D2",dO="\u2903",pO="\u22B5\u20D2",fO="\u223C\u20D2",mO="\u2923",gO="\u2196",bO="\u21D6",vO="\u2196",yO="\u2927",_O="\xD3",wO="\xF3",kO="\u229B",xO="\xD4",EO="\xF4",AO="\u229A",SO="\u041E",CO="\u043E",TO="\u229D",$O="\u0150",RO="\u0151",DO="\u2A38",LO="\u2299",MO="\u29BC",OO="\u0152",NO="\u0153",IO="\u29BF",PO="\u{1D512}",qO="\u{1D52C}",FO="\u02DB",BO="\xD2",zO="\xF2",HO="\u29C1",UO="\u29B5",jO="\u03A9",VO="\u222E",GO="\u21BA",WO="\u29BE",ZO="\u29BB",KO="\u203E",YO="\u29C0",XO="\u014C",JO="\u014D",QO="\u03A9",eN="\u03C9",tN="\u039F",nN="\u03BF",rN="\u29B6",sN="\u2296",iN="\u{1D546}",oN="\u{1D560}",aN="\u29B7",cN="\u201C",lN="\u2018",uN="\u29B9",hN="\u2295",dN="\u21BB",pN="\u2A54",fN="\u2228",mN="\u2A5D",gN="\u2134",bN="\u2134",vN="\xAA",yN="\xBA",_N="\u22B6",wN="\u2A56",kN="\u2A57",xN="\u2A5B",EN="\u24C8",AN="\u{1D4AA}",SN="\u2134",CN="\xD8",TN="\xF8",$N="\u2298",RN="\xD5",DN="\xF5",LN="\u2A36",MN="\u2A37",ON="\u2297",NN="\xD6",IN="\xF6",PN="\u233D",qN="\u203E",FN="\u23DE",BN="\u23B4",zN="\u23DC",HN="\xB6",UN="\u2225",jN="\u2225",VN="\u2AF3",GN="\u2AFD",WN="\u2202",ZN="\u2202",KN="\u041F",YN="\u043F",XN="%",JN=".",QN="\u2030",eI="\u22A5",tI="\u2031",nI="\u{1D513}",rI="\u{1D52D}",sI="\u03A6",iI="\u03C6",oI="\u03D5",aI="\u2133",cI="\u260E",lI="\u03A0",uI="\u03C0",hI="\u22D4",dI="\u03D6",pI="\u210F",fI="\u210E",mI="\u210F",gI="\u2A23",bI="\u229E",vI="\u2A22",yI="+",_I="\u2214",wI="\u2A25",kI="\u2A72",xI="\xB1",EI="\xB1",AI="\u2A26",SI="\u2A27",CI="\xB1",TI="\u210C",$I="\u2A15",RI="\u{1D561}",DI="\u2119",LI="\xA3",MI="\u2AB7",OI="\u2ABB",NI="\u227A",II="\u227C",PI="\u2AB7",qI="\u227A",FI="\u227C",BI="\u227A",zI="\u2AAF",HI="\u227C",UI="\u227E",jI="\u2AAF",VI="\u2AB9",GI="\u2AB5",WI="\u22E8",ZI="\u2AAF",KI="\u2AB3",YI="\u227E",XI="\u2032",JI="\u2033",QI="\u2119",eP="\u2AB9",tP="\u2AB5",nP="\u22E8",rP="\u220F",sP="\u220F",iP="\u232E",oP="\u2312",aP="\u2313",cP="\u221D",lP="\u221D",uP="\u2237",hP="\u221D",dP="\u227E",pP="\u22B0",fP="\u{1D4AB}",mP="\u{1D4C5}",gP="\u03A8",bP="\u03C8",vP="\u2008",yP="\u{1D514}",_P="\u{1D52E}",wP="\u2A0C",kP="\u{1D562}",xP="\u211A",EP="\u2057",AP="\u{1D4AC}",SP="\u{1D4C6}",CP="\u210D",TP="\u2A16",$P="?",RP="\u225F",DP='"',LP='"',MP="\u21DB",OP="\u223D\u0331",NP="\u0154",IP="\u0155",PP="\u221A",qP="\u29B3",FP="\u27E9",BP="\u27EB",zP="\u2992",HP="\u29A5",UP="\u27E9",jP="\xBB",VP="\u2975",GP="\u21E5",WP="\u2920",ZP="\u2933",KP="\u2192",YP="\u21A0",XP="\u21D2",JP="\u291E",QP="\u21AA",e2="\u21AC",t2="\u2945",n2="\u2974",r2="\u2916",s2="\u21A3",i2="\u219D",o2="\u291A",a2="\u291C",c2="\u2236",l2="\u211A",u2="\u290D",h2="\u290F",d2="\u2910",p2="\u2773",f2="}",m2="]",g2="\u298C",b2="\u298E",v2="\u2990",y2="\u0158",_2="\u0159",w2="\u0156",k2="\u0157",x2="\u2309",E2="}",A2="\u0420",S2="\u0440",C2="\u2937",T2="\u2969",$2="\u201D",R2="\u201D",D2="\u21B3",L2="\u211C",M2="\u211B",O2="\u211C",N2="\u211D",I2="\u211C",P2="\u25AD",q2="\xAE",F2="\xAE",B2="\u220B",z2="\u21CB",H2="\u296F",U2="\u297D",j2="\u230B",V2="\u{1D52F}",G2="\u211C",W2="\u2964",Z2="\u21C1",K2="\u21C0",Y2="\u296C",X2="\u03A1",J2="\u03C1",Q2="\u03F1",eq="\u27E9",tq="\u21E5",nq="\u2192",rq="\u2192",sq="\u21D2",iq="\u21C4",oq="\u21A3",aq="\u2309",cq="\u27E7",lq="\u295D",uq="\u2955",hq="\u21C2",dq="\u230B",pq="\u21C1",fq="\u21C0",mq="\u21C4",gq="\u21CC",bq="\u21C9",vq="\u219D",yq="\u21A6",_q="\u22A2",wq="\u295B",kq="\u22CC",xq="\u29D0",Eq="\u22B3",Aq="\u22B5",Sq="\u294F",Cq="\u295C",Tq="\u2954",$q="\u21BE",Rq="\u2953",Dq="\u21C0",Lq="\u02DA",Mq="\u2253",Oq="\u21C4",Nq="\u21CC",Iq="\u200F",Pq="\u23B1",qq="\u23B1",Fq="\u2AEE",Bq="\u27ED",zq="\u21FE",Hq="\u27E7",Uq="\u2986",jq="\u{1D563}",Vq="\u211D",Gq="\u2A2E",Wq="\u2A35",Zq="\u2970",Kq=")",Yq="\u2994",Xq="\u2A12",Jq="\u21C9",Qq="\u21DB",eF="\u203A",tF="\u{1D4C7}",nF="\u211B",rF="\u21B1",sF="\u21B1",iF="]",oF="\u2019",aF="\u2019",cF="\u22CC",lF="\u22CA",uF="\u25B9",hF="\u22B5",dF="\u25B8",pF="\u29CE",fF="\u29F4",mF="\u2968",gF="\u211E",bF="\u015A",vF="\u015B",yF="\u201A",_F="\u2AB8",wF="\u0160",kF="\u0161",xF="\u2ABC",EF="\u227B",AF="\u227D",SF="\u2AB0",CF="\u2AB4",TF="\u015E",$F="\u015F",RF="\u015C",DF="\u015D",LF="\u2ABA",MF="\u2AB6",OF="\u22E9",NF="\u2A13",IF="\u227F",PF="\u0421",qF="\u0441",FF="\u22A1",BF="\u22C5",zF="\u2A66",HF="\u2925",UF="\u2198",jF="\u21D8",VF="\u2198",GF="\xA7",WF=";",ZF="\u2929",KF="\u2216",YF="\u2216",XF="\u2736",JF="\u{1D516}",QF="\u{1D530}",eB="\u2322",tB="\u266F",nB="\u0429",rB="\u0449",sB="\u0428",iB="\u0448",oB="\u2193",aB="\u2190",cB="\u2223",lB="\u2225",uB="\u2192",hB="\u2191",dB="\xAD",pB="\u03A3",fB="\u03C3",mB="\u03C2",gB="\u03C2",bB="\u223C",vB="\u2A6A",yB="\u2243",_B="\u2243",wB="\u2A9E",kB="\u2AA0",xB="\u2A9D",EB="\u2A9F",AB="\u2246",SB="\u2A24",CB="\u2972",TB="\u2190",$B="\u2218",RB="\u2216",DB="\u2A33",LB="\u29E4",MB="\u2223",OB="\u2323",NB="\u2AAA",IB="\u2AAC",PB="\u2AAC\uFE00",qB="\u042C",FB="\u044C",BB="\u233F",zB="\u29C4",HB="/",UB="\u{1D54A}",jB="\u{1D564}",VB="\u2660",GB="\u2660",WB="\u2225",ZB="\u2293",KB="\u2293\uFE00",YB="\u2294",XB="\u2294\uFE00",JB="\u221A",QB="\u228F",ez="\u2291",tz="\u228F",nz="\u2291",rz="\u2290",sz="\u2292",iz="\u2290",oz="\u2292",az="\u25A1",cz="\u25A1",lz="\u2293",uz="\u228F",hz="\u2291",dz="\u2290",pz="\u2292",fz="\u2294",mz="\u25AA",gz="\u25A1",bz="\u25AA",vz="\u2192",yz="\u{1D4AE}",_z="\u{1D4C8}",wz="\u2216",kz="\u2323",xz="\u22C6",Ez="\u22C6",Az="\u2606",Sz="\u2605",Cz="\u03F5",Tz="\u03D5",$z="\xAF",Rz="\u2282",Dz="\u22D0",Lz="\u2ABD",Mz="\u2AC5",Oz="\u2286",Nz="\u2AC3",Iz="\u2AC1",Pz="\u2ACB",qz="\u228A",Fz="\u2ABF",Bz="\u2979",zz="\u2282",Hz="\u22D0",Uz="\u2286",jz="\u2AC5",Vz="\u2286",Gz="\u228A",Wz="\u2ACB",Zz="\u2AC7",Kz="\u2AD5",Yz="\u2AD3",Xz="\u2AB8",Jz="\u227B",Qz="\u227D",eH="\u227B",tH="\u2AB0",nH="\u227D",rH="\u227F",sH="\u2AB0",iH="\u2ABA",oH="\u2AB6",aH="\u22E9",cH="\u227F",lH="\u220B",uH="\u2211",hH="\u2211",dH="\u266A",pH="\xB9",fH="\xB2",mH="\xB3",gH="\u2283",bH="\u22D1",vH="\u2ABE",yH="\u2AD8",_H="\u2AC6",wH="\u2287",kH="\u2AC4",xH="\u2283",EH="\u2287",AH="\u27C9",SH="\u2AD7",CH="\u297B",TH="\u2AC2",$H="\u2ACC",RH="\u228B",DH="\u2AC0",LH="\u2283",MH="\u22D1",OH="\u2287",NH="\u2AC6",IH="\u228B",PH="\u2ACC",qH="\u2AC8",FH="\u2AD4",BH="\u2AD6",zH="\u2926",HH="\u2199",UH="\u21D9",jH="\u2199",VH="\u292A",GH="\xDF",WH="	",ZH="\u2316",KH="\u03A4",YH="\u03C4",XH="\u23B4",JH="\u0164",QH="\u0165",e3="\u0162",t3="\u0163",n3="\u0422",r3="\u0442",s3="\u20DB",i3="\u2315",o3="\u{1D517}",a3="\u{1D531}",c3="\u2234",l3="\u2234",u3="\u2234",h3="\u0398",d3="\u03B8",p3="\u03D1",f3="\u03D1",m3="\u2248",g3="\u223C",b3="\u205F\u200A",v3="\u2009",y3="\u2009",_3="\u2248",w3="\u223C",k3="\xDE",x3="\xFE",E3="\u02DC",A3="\u223C",S3="\u2243",C3="\u2245",T3="\u2248",$3="\u2A31",R3="\u22A0",D3="\xD7",L3="\u2A30",M3="\u222D",O3="\u2928",N3="\u2336",I3="\u2AF1",P3="\u22A4",q3="\u{1D54B}",F3="\u{1D565}",B3="\u2ADA",z3="\u2929",H3="\u2034",U3="\u2122",j3="\u2122",V3="\u25B5",G3="\u25BF",W3="\u25C3",Z3="\u22B4",K3="\u225C",Y3="\u25B9",X3="\u22B5",J3="\u25EC",Q3="\u225C",eU="\u2A3A",tU="\u20DB",nU="\u2A39",rU="\u29CD",sU="\u2A3B",iU="\u23E2",oU="\u{1D4AF}",aU="\u{1D4C9}",cU="\u0426",lU="\u0446",uU="\u040B",hU="\u045B",dU="\u0166",pU="\u0167",fU="\u226C",mU="\u219E",gU="\u21A0",bU="\xDA",vU="\xFA",yU="\u2191",_U="\u219F",wU="\u21D1",kU="\u2949",xU="\u040E",EU="\u045E",AU="\u016C",SU="\u016D",CU="\xDB",TU="\xFB",$U="\u0423",RU="\u0443",DU="\u21C5",LU="\u0170",MU="\u0171",OU="\u296E",NU="\u297E",IU="\u{1D518}",PU="\u{1D532}",qU="\xD9",FU="\xF9",BU="\u2963",zU="\u21BF",HU="\u21BE",UU="\u2580",jU="\u231C",VU="\u231C",GU="\u230F",WU="\u25F8",ZU="\u016A",KU="\u016B",YU="\xA8",XU="_",JU="\u23DF",QU="\u23B5",e5="\u23DD",t5="\u22C3",n5="\u228E",r5="\u0172",s5="\u0173",i5="\u{1D54C}",o5="\u{1D566}",a5="\u2912",c5="\u2191",l5="\u2191",u5="\u21D1",h5="\u21C5",d5="\u2195",p5="\u2195",f5="\u21D5",m5="\u296E",g5="\u21BF",b5="\u21BE",v5="\u228E",y5="\u2196",_5="\u2197",w5="\u03C5",k5="\u03D2",x5="\u03D2",E5="\u03A5",A5="\u03C5",S5="\u21A5",C5="\u22A5",T5="\u21C8",$5="\u231D",R5="\u231D",D5="\u230E",L5="\u016E",M5="\u016F",O5="\u25F9",N5="\u{1D4B0}",I5="\u{1D4CA}",P5="\u22F0",q5="\u0168",F5="\u0169",B5="\u25B5",z5="\u25B4",H5="\u21C8",U5="\xDC",j5="\xFC",V5="\u29A7",G5="\u299C",W5="\u03F5",Z5="\u03F0",K5="\u2205",Y5="\u03D5",X5="\u03D6",J5="\u221D",Q5="\u2195",ej="\u21D5",tj="\u03F1",nj="\u03C2",rj="\u228A\uFE00",sj="\u2ACB\uFE00",ij="\u228B\uFE00",oj="\u2ACC\uFE00",aj="\u03D1",cj="\u22B2",lj="\u22B3",uj="\u2AE8",hj="\u2AEB",dj="\u2AE9",pj="\u0412",fj="\u0432",mj="\u22A2",gj="\u22A8",bj="\u22A9",vj="\u22AB",yj="\u2AE6",_j="\u22BB",wj="\u2228",kj="\u22C1",xj="\u225A",Ej="\u22EE",Aj="|",Sj="\u2016",Cj="|",Tj="\u2016",$j="\u2223",Rj="|",Dj="\u2758",Lj="\u2240",Mj="\u200A",Oj="\u{1D519}",Nj="\u{1D533}",Ij="\u22B2",Pj="\u2282\u20D2",qj="\u2283\u20D2",Fj="\u{1D54D}",Bj="\u{1D567}",zj="\u221D",Hj="\u22B3",Uj="\u{1D4B1}",jj="\u{1D4CB}",Vj="\u2ACB\uFE00",Gj="\u228A\uFE00",Wj="\u2ACC\uFE00",Zj="\u228B\uFE00",Kj="\u22AA",Yj="\u299A",Xj="\u0174",Jj="\u0175",Qj="\u2A5F",e9="\u2227",t9="\u22C0",n9="\u2259",r9="\u2118",s9="\u{1D51A}",i9="\u{1D534}",o9="\u{1D54E}",a9="\u{1D568}",c9="\u2118",l9="\u2240",u9="\u2240",h9="\u{1D4B2}",d9="\u{1D4CC}",p9="\u22C2",f9="\u25EF",m9="\u22C3",g9="\u25BD",b9="\u{1D51B}",v9="\u{1D535}",y9="\u27F7",_9="\u27FA",w9="\u039E",k9="\u03BE",x9="\u27F5",E9="\u27F8",A9="\u27FC",S9="\u22FB",C9="\u2A00",T9="\u{1D54F}",$9="\u{1D569}",R9="\u2A01",D9="\u2A02",L9="\u27F6",M9="\u27F9",O9="\u{1D4B3}",N9="\u{1D4CD}",I9="\u2A06",P9="\u2A04",q9="\u25B3",F9="\u22C1",B9="\u22C0",z9="\xDD",H9="\xFD",U9="\u042F",j9="\u044F",V9="\u0176",G9="\u0177",W9="\u042B",Z9="\u044B",K9="\xA5",Y9="\u{1D51C}",X9="\u{1D536}",J9="\u0407",Q9="\u0457",e4="\u{1D550}",t4="\u{1D56A}",n4="\u{1D4B4}",r4="\u{1D4CE}",s4="\u042E",i4="\u044E",o4="\xFF",a4="\u0178",c4="\u0179",l4="\u017A",u4="\u017D",h4="\u017E",d4="\u0417",p4="\u0437",f4="\u017B",m4="\u017C",g4="\u2128",b4="\u200B",v4="\u0396",y4="\u03B6",_4="\u{1D537}",w4="\u2128",k4="\u0416",x4="\u0436",E4="\u21DD",A4="\u{1D56B}",S4="\u2124",C4="\u{1D4B5}",T4="\u{1D4CF}",$4="\u200D",R4="\u200C";var D4={Aacute:pd,aacute:fd,Abreve:md,abreve:gd,ac:bd,acd:vd,acE:yd,Acirc:_d,acirc:wd,acute:kd,Acy:xd,acy:Ed,AElig:Ad,aelig:Sd,af:Cd,Afr:Td,afr:$d,Agrave:Rd,agrave:Dd,alefsym:Ld,aleph:Md,Alpha:Od,alpha:Nd,Amacr:Id,amacr:Pd,amalg:qd,amp:Fd,AMP:Bd,andand:zd,And:Hd,and:Ud,andd:jd,andslope:Vd,andv:Gd,ang:Wd,ange:Zd,angle:Kd,angmsdaa:Yd,angmsdab:Xd,angmsdac:Jd,angmsdad:Qd,angmsdae:ep,angmsdaf:tp,angmsdag:np,angmsdah:rp,angmsd:sp,angrt:ip,angrtvb:op,angrtvbd:ap,angsph:cp,angst:lp,angzarr:up,Aogon:hp,aogon:dp,Aopf:pp,aopf:fp,apacir:mp,ap:gp,apE:bp,ape:vp,apid:yp,apos:_p,ApplyFunction:wp,approx:kp,approxeq:xp,Aring:Ep,aring:Ap,Ascr:Sp,ascr:Cp,Assign:Tp,ast:$p,asymp:Rp,asympeq:Dp,Atilde:Lp,atilde:Mp,Auml:Op,auml:Np,awconint:Ip,awint:Pp,backcong:qp,backepsilon:Fp,backprime:Bp,backsim:zp,backsimeq:Hp,Backslash:Up,Barv:jp,barvee:Vp,barwed:Gp,Barwed:Wp,barwedge:Zp,bbrk:Kp,bbrktbrk:Yp,bcong:Xp,Bcy:Jp,bcy:Qp,bdquo:ef,becaus:tf,because:nf,Because:rf,bemptyv:sf,bepsi:of,bernou:af,Bernoullis:cf,Beta:lf,beta:uf,beth:hf,between:df,Bfr:pf,bfr:ff,bigcap:mf,bigcirc:gf,bigcup:bf,bigodot:vf,bigoplus:yf,bigotimes:_f,bigsqcup:wf,bigstar:kf,bigtriangledown:xf,bigtriangleup:Ef,biguplus:Af,bigvee:Sf,bigwedge:Cf,bkarow:Tf,blacklozenge:$f,blacksquare:Rf,blacktriangle:Df,blacktriangledown:Lf,blacktriangleleft:Mf,blacktriangleright:Of,blank:Nf,blk12:If,blk14:Pf,blk34:qf,block:Ff,bne:Bf,bnequiv:zf,bNot:Hf,bnot:Uf,Bopf:jf,bopf:Vf,bot:Gf,bottom:Wf,bowtie:Zf,boxbox:Kf,boxdl:Yf,boxdL:Xf,boxDl:Jf,boxDL:Qf,boxdr:em,boxdR:tm,boxDr:nm,boxDR:rm,boxh:sm,boxH:im,boxhd:om,boxHd:am,boxhD:cm,boxHD:lm,boxhu:um,boxHu:hm,boxhU:dm,boxHU:pm,boxminus:fm,boxplus:mm,boxtimes:gm,boxul:bm,boxuL:vm,boxUl:ym,boxUL:_m,boxur:wm,boxuR:km,boxUr:xm,boxUR:Em,boxv:Am,boxV:Sm,boxvh:Cm,boxvH:Tm,boxVh:$m,boxVH:Rm,boxvl:Dm,boxvL:Lm,boxVl:Mm,boxVL:Om,boxvr:Nm,boxvR:Im,boxVr:Pm,boxVR:qm,bprime:Fm,breve:Bm,Breve:zm,brvbar:Hm,bscr:Um,Bscr:jm,bsemi:Vm,bsim:Gm,bsime:Wm,bsolb:Zm,bsol:Km,bsolhsub:Ym,bull:Xm,bullet:Jm,bump:Qm,bumpE:eg,bumpe:tg,Bumpeq:ng,bumpeq:rg,Cacute:sg,cacute:ig,capand:og,capbrcup:ag,capcap:cg,cap:lg,Cap:ug,capcup:hg,capdot:dg,CapitalDifferentialD:pg,caps:fg,caret:mg,caron:gg,Cayleys:bg,ccaps:vg,Ccaron:yg,ccaron:_g,Ccedil:wg,ccedil:kg,Ccirc:xg,ccirc:Eg,Cconint:Ag,ccups:Sg,ccupssm:Cg,Cdot:Tg,cdot:$g,cedil:Rg,Cedilla:Dg,cemptyv:Lg,cent:Mg,centerdot:Og,CenterDot:Ng,cfr:Ig,Cfr:Pg,CHcy:qg,chcy:Fg,check:Bg,checkmark:zg,Chi:Hg,chi:Ug,circ:jg,circeq:Vg,circlearrowleft:Gg,circlearrowright:Wg,circledast:Zg,circledcirc:Kg,circleddash:Yg,CircleDot:Xg,circledR:Jg,circledS:Qg,CircleMinus:eb,CirclePlus:tb,CircleTimes:nb,cir:rb,cirE:sb,cire:ib,cirfnint:ob,cirmid:ab,cirscir:cb,ClockwiseContourIntegral:lb,CloseCurlyDoubleQuote:ub,CloseCurlyQuote:hb,clubs:db,clubsuit:pb,colon:fb,Colon:mb,Colone:gb,colone:bb,coloneq:vb,comma:yb,commat:_b,comp:wb,compfn:kb,complement:xb,complexes:Eb,cong:Ab,congdot:Sb,Congruent:Cb,conint:Tb,Conint:$b,ContourIntegral:Rb,copf:Db,Copf:Lb,coprod:Mb,Coproduct:Ob,copy:Nb,COPY:Ib,copysr:Pb,CounterClockwiseContourIntegral:qb,crarr:Fb,cross:Bb,Cross:zb,Cscr:Hb,cscr:Ub,csub:jb,csube:Vb,csup:Gb,csupe:Wb,ctdot:Zb,cudarrl:Kb,cudarrr:Yb,cuepr:Xb,cuesc:Jb,cularr:Qb,cularrp:ev,cupbrcap:tv,cupcap:nv,CupCap:rv,cup:sv,Cup:iv,cupcup:ov,cupdot:av,cupor:cv,cups:lv,curarr:uv,curarrm:hv,curlyeqprec:dv,curlyeqsucc:pv,curlyvee:fv,curlywedge:mv,curren:gv,curvearrowleft:bv,curvearrowright:vv,cuvee:yv,cuwed:_v,cwconint:wv,cwint:kv,cylcty:xv,dagger:Ev,Dagger:Av,daleth:Sv,darr:Cv,Darr:Tv,dArr:$v,dash:Rv,Dashv:Dv,dashv:Lv,dbkarow:Mv,dblac:Ov,Dcaron:Nv,dcaron:Iv,Dcy:Pv,dcy:qv,ddagger:Fv,ddarr:Bv,DD:zv,dd:Hv,DDotrahd:Uv,ddotseq:jv,deg:Vv,Del:Gv,Delta:Wv,delta:Zv,demptyv:Kv,dfisht:Yv,Dfr:Xv,dfr:Jv,dHar:Qv,dharl:e0,dharr:t0,DiacriticalAcute:n0,DiacriticalDot:r0,DiacriticalDoubleAcute:s0,DiacriticalGrave:i0,DiacriticalTilde:o0,diam:a0,diamond:c0,Diamond:l0,diamondsuit:u0,diams:h0,die:d0,DifferentialD:p0,digamma:f0,disin:m0,div:g0,divide:b0,divideontimes:v0,divonx:y0,DJcy:_0,djcy:w0,dlcorn:k0,dlcrop:x0,dollar:E0,Dopf:A0,dopf:S0,Dot:C0,dot:T0,DotDot:$0,doteq:R0,doteqdot:D0,DotEqual:L0,dotminus:M0,dotplus:O0,dotsquare:N0,doublebarwedge:I0,DoubleContourIntegral:P0,DoubleDot:q0,DoubleDownArrow:F0,DoubleLeftArrow:B0,DoubleLeftRightArrow:z0,DoubleLeftTee:H0,DoubleLongLeftArrow:U0,DoubleLongLeftRightArrow:j0,DoubleLongRightArrow:V0,DoubleRightArrow:G0,DoubleRightTee:W0,DoubleUpArrow:Z0,DoubleUpDownArrow:K0,DoubleVerticalBar:Y0,DownArrowBar:X0,downarrow:J0,DownArrow:Q0,Downarrow:ey,DownArrowUpArrow:ty,DownBreve:ny,downdownarrows:ry,downharpoonleft:sy,downharpoonright:iy,DownLeftRightVector:oy,DownLeftTeeVector:ay,DownLeftVectorBar:cy,DownLeftVector:ly,DownRightTeeVector:uy,DownRightVectorBar:hy,DownRightVector:dy,DownTeeArrow:py,DownTee:fy,drbkarow:my,drcorn:gy,drcrop:by,Dscr:vy,dscr:yy,DScy:_y,dscy:wy,dsol:ky,Dstrok:xy,dstrok:Ey,dtdot:Ay,dtri:Sy,dtrif:Cy,duarr:Ty,duhar:$y,dwangle:Ry,DZcy:Dy,dzcy:Ly,dzigrarr:My,Eacute:Oy,eacute:Ny,easter:Iy,Ecaron:Py,ecaron:qy,Ecirc:Fy,ecirc:By,ecir:zy,ecolon:Hy,Ecy:Uy,ecy:jy,eDDot:Vy,Edot:Gy,edot:Wy,eDot:Zy,ee:Ky,efDot:Yy,Efr:Xy,efr:Jy,eg:Qy,Egrave:e_,egrave:t_,egs:n_,egsdot:r_,el:s_,Element:i_,elinters:o_,ell:a_,els:c_,elsdot:l_,Emacr:u_,emacr:h_,empty:d_,emptyset:p_,EmptySmallSquare:f_,emptyv:m_,EmptyVerySmallSquare:g_,emsp13:b_,emsp14:v_,emsp:y_,ENG:__,eng:w_,ensp:k_,Eogon:x_,eogon:E_,Eopf:A_,eopf:S_,epar:C_,eparsl:T_,eplus:$_,epsi:R_,Epsilon:D_,epsilon:L_,epsiv:M_,eqcirc:O_,eqcolon:N_,eqsim:I_,eqslantgtr:P_,eqslantless:q_,Equal:F_,equals:B_,EqualTilde:z_,equest:H_,Equilibrium:U_,equiv:j_,equivDD:V_,eqvparsl:G_,erarr:W_,erDot:Z_,escr:K_,Escr:Y_,esdot:X_,Esim:J_,esim:Q_,Eta:ew,eta:tw,ETH:nw,eth:rw,Euml:sw,euml:iw,euro:ow,excl:aw,exist:cw,Exists:lw,expectation:uw,exponentiale:hw,ExponentialE:dw,fallingdotseq:pw,Fcy:fw,fcy:mw,female:gw,ffilig:bw,fflig:vw,ffllig:yw,Ffr:_w,ffr:ww,filig:kw,FilledSmallSquare:xw,FilledVerySmallSquare:Ew,fjlig:Aw,flat:Sw,fllig:Cw,fltns:Tw,fnof:$w,Fopf:Rw,fopf:Dw,forall:Lw,ForAll:Mw,fork:Ow,forkv:Nw,Fouriertrf:Iw,fpartint:Pw,frac12:qw,frac13:Fw,frac14:Bw,frac15:zw,frac16:Hw,frac18:Uw,frac23:jw,frac25:Vw,frac34:Gw,frac35:Ww,frac38:Zw,frac45:Kw,frac56:Yw,frac58:Xw,frac78:Jw,frasl:Qw,frown:ek,fscr:tk,Fscr:nk,gacute:rk,Gamma:sk,gamma:ik,Gammad:ok,gammad:ak,gap:ck,Gbreve:lk,gbreve:uk,Gcedil:hk,Gcirc:dk,gcirc:pk,Gcy:fk,gcy:mk,Gdot:gk,gdot:bk,ge:vk,gE:yk,gEl:_k,gel:wk,geq:kk,geqq:xk,geqslant:Ek,gescc:Ak,ges:Sk,gesdot:Ck,gesdoto:Tk,gesdotol:$k,gesl:Rk,gesles:Dk,Gfr:Lk,gfr:Mk,gg:Ok,Gg:Nk,ggg:Ik,gimel:Pk,GJcy:qk,gjcy:Fk,gla:Bk,gl:zk,glE:Hk,glj:Uk,gnap:jk,gnapprox:Vk,gne:Gk,gnE:Wk,gneq:Zk,gneqq:Kk,gnsim:Yk,Gopf:Xk,gopf:Jk,grave:Qk,GreaterEqual:ex,GreaterEqualLess:tx,GreaterFullEqual:nx,GreaterGreater:rx,GreaterLess:sx,GreaterSlantEqual:ix,GreaterTilde:ox,Gscr:ax,gscr:cx,gsim:lx,gsime:ux,gsiml:hx,gtcc:dx,gtcir:px,gt:fx,GT:mx,Gt:gx,gtdot:bx,gtlPar:vx,gtquest:yx,gtrapprox:_x,gtrarr:wx,gtrdot:kx,gtreqless:xx,gtreqqless:Ex,gtrless:Ax,gtrsim:Sx,gvertneqq:Cx,gvnE:Tx,Hacek:$x,hairsp:Rx,half:Dx,hamilt:Lx,HARDcy:Mx,hardcy:Ox,harrcir:Nx,harr:Ix,hArr:Px,harrw:qx,Hat:Fx,hbar:Bx,Hcirc:zx,hcirc:Hx,hearts:Ux,heartsuit:jx,hellip:Vx,hercon:Gx,hfr:Wx,Hfr:Zx,HilbertSpace:Kx,hksearow:Yx,hkswarow:Xx,hoarr:Jx,homtht:Qx,hookleftarrow:eE,hookrightarrow:tE,hopf:nE,Hopf:rE,horbar:sE,HorizontalLine:iE,hscr:oE,Hscr:aE,hslash:cE,Hstrok:lE,hstrok:uE,HumpDownHump:hE,HumpEqual:dE,hybull:pE,hyphen:fE,Iacute:mE,iacute:gE,ic:bE,Icirc:vE,icirc:yE,Icy:_E,icy:wE,Idot:kE,IEcy:xE,iecy:EE,iexcl:AE,iff:SE,ifr:CE,Ifr:TE,Igrave:$E,igrave:RE,ii:DE,iiiint:LE,iiint:ME,iinfin:OE,iiota:NE,IJlig:IE,ijlig:PE,Imacr:qE,imacr:FE,image:BE,ImaginaryI:zE,imagline:HE,imagpart:UE,imath:jE,Im:VE,imof:GE,imped:WE,Implies:ZE,incare:KE,in:"\u2208",infin:YE,infintie:XE,inodot:JE,intcal:QE,int:e1,Int:t1,integers:n1,Integral:r1,intercal:s1,Intersection:i1,intlarhk:o1,intprod:a1,InvisibleComma:c1,InvisibleTimes:l1,IOcy:u1,iocy:h1,Iogon:d1,iogon:p1,Iopf:f1,iopf:m1,Iota:g1,iota:b1,iprod:v1,iquest:y1,iscr:_1,Iscr:w1,isin:k1,isindot:x1,isinE:E1,isins:A1,isinsv:S1,isinv:C1,it:T1,Itilde:$1,itilde:R1,Iukcy:D1,iukcy:L1,Iuml:M1,iuml:O1,Jcirc:N1,jcirc:I1,Jcy:P1,jcy:q1,Jfr:F1,jfr:B1,jmath:z1,Jopf:H1,jopf:U1,Jscr:j1,jscr:V1,Jsercy:G1,jsercy:W1,Jukcy:Z1,jukcy:K1,Kappa:Y1,kappa:X1,kappav:J1,Kcedil:Q1,kcedil:eA,Kcy:tA,kcy:nA,Kfr:rA,kfr:sA,kgreen:iA,KHcy:oA,khcy:aA,KJcy:cA,kjcy:lA,Kopf:uA,kopf:hA,Kscr:dA,kscr:pA,lAarr:fA,Lacute:mA,lacute:gA,laemptyv:bA,lagran:vA,Lambda:yA,lambda:_A,lang:wA,Lang:kA,langd:xA,langle:EA,lap:AA,Laplacetrf:SA,laquo:CA,larrb:TA,larrbfs:$A,larr:RA,Larr:DA,lArr:LA,larrfs:MA,larrhk:OA,larrlp:NA,larrpl:IA,larrsim:PA,larrtl:qA,latail:FA,lAtail:BA,lat:zA,late:HA,lates:UA,lbarr:jA,lBarr:VA,lbbrk:GA,lbrace:WA,lbrack:ZA,lbrke:KA,lbrksld:YA,lbrkslu:XA,Lcaron:JA,lcaron:QA,Lcedil:eS,lcedil:tS,lceil:nS,lcub:rS,Lcy:sS,lcy:iS,ldca:oS,ldquo:aS,ldquor:cS,ldrdhar:lS,ldrushar:uS,ldsh:hS,le:dS,lE:pS,LeftAngleBracket:fS,LeftArrowBar:mS,leftarrow:gS,LeftArrow:bS,Leftarrow:vS,LeftArrowRightArrow:yS,leftarrowtail:_S,LeftCeiling:wS,LeftDoubleBracket:kS,LeftDownTeeVector:xS,LeftDownVectorBar:ES,LeftDownVector:AS,LeftFloor:SS,leftharpoondown:CS,leftharpoonup:TS,leftleftarrows:$S,leftrightarrow:RS,LeftRightArrow:DS,Leftrightarrow:LS,leftrightarrows:MS,leftrightharpoons:OS,leftrightsquigarrow:NS,LeftRightVector:IS,LeftTeeArrow:PS,LeftTee:qS,LeftTeeVector:FS,leftthreetimes:BS,LeftTriangleBar:zS,LeftTriangle:HS,LeftTriangleEqual:US,LeftUpDownVector:jS,LeftUpTeeVector:VS,LeftUpVectorBar:GS,LeftUpVector:WS,LeftVectorBar:ZS,LeftVector:KS,lEg:YS,leg:XS,leq:JS,leqq:QS,leqslant:eC,lescc:tC,les:nC,lesdot:rC,lesdoto:sC,lesdotor:iC,lesg:oC,lesges:aC,lessapprox:cC,lessdot:lC,lesseqgtr:uC,lesseqqgtr:hC,LessEqualGreater:dC,LessFullEqual:pC,LessGreater:fC,lessgtr:mC,LessLess:gC,lesssim:bC,LessSlantEqual:vC,LessTilde:yC,lfisht:_C,lfloor:wC,Lfr:kC,lfr:xC,lg:EC,lgE:AC,lHar:SC,lhard:CC,lharu:TC,lharul:$C,lhblk:RC,LJcy:DC,ljcy:LC,llarr:MC,ll:OC,Ll:NC,llcorner:IC,Lleftarrow:PC,llhard:qC,lltri:FC,Lmidot:BC,lmidot:zC,lmoustache:HC,lmoust:UC,lnap:jC,lnapprox:VC,lne:GC,lnE:WC,lneq:ZC,lneqq:KC,lnsim:YC,loang:XC,loarr:JC,lobrk:QC,longleftarrow:eT,LongLeftArrow:tT,Longleftarrow:nT,longleftrightarrow:rT,LongLeftRightArrow:sT,Longleftrightarrow:iT,longmapsto:oT,longrightarrow:aT,LongRightArrow:cT,Longrightarrow:lT,looparrowleft:uT,looparrowright:hT,lopar:dT,Lopf:pT,lopf:fT,loplus:mT,lotimes:gT,lowast:bT,lowbar:vT,LowerLeftArrow:yT,LowerRightArrow:_T,loz:wT,lozenge:kT,lozf:xT,lpar:ET,lparlt:AT,lrarr:ST,lrcorner:CT,lrhar:TT,lrhard:$T,lrm:RT,lrtri:DT,lsaquo:LT,lscr:MT,Lscr:OT,lsh:NT,Lsh:IT,lsim:PT,lsime:qT,lsimg:FT,lsqb:BT,lsquo:zT,lsquor:HT,Lstrok:UT,lstrok:jT,ltcc:VT,ltcir:GT,lt:WT,LT:ZT,Lt:KT,ltdot:YT,lthree:XT,ltimes:JT,ltlarr:QT,ltquest:e$,ltri:t$,ltrie:n$,ltrif:r$,ltrPar:s$,lurdshar:i$,luruhar:o$,lvertneqq:a$,lvnE:c$,macr:l$,male:u$,malt:h$,maltese:d$,Map:"\u2905",map:p$,mapsto:f$,mapstodown:m$,mapstoleft:g$,mapstoup:b$,marker:v$,mcomma:y$,Mcy:_$,mcy:w$,mdash:k$,mDDot:x$,measuredangle:E$,MediumSpace:A$,Mellintrf:S$,Mfr:C$,mfr:T$,mho:$$,micro:R$,midast:D$,midcir:L$,mid:M$,middot:O$,minusb:N$,minus:I$,minusd:P$,minusdu:q$,MinusPlus:F$,mlcp:B$,mldr:z$,mnplus:H$,models:U$,Mopf:j$,mopf:V$,mp:G$,mscr:W$,Mscr:Z$,mstpos:K$,Mu:Y$,mu:X$,multimap:J$,mumap:Q$,nabla:eR,Nacute:tR,nacute:nR,nang:rR,nap:sR,napE:iR,napid:oR,napos:aR,napprox:cR,natural:lR,naturals:uR,natur:hR,nbsp:dR,nbump:pR,nbumpe:fR,ncap:mR,Ncaron:gR,ncaron:bR,Ncedil:vR,ncedil:yR,ncong:_R,ncongdot:wR,ncup:kR,Ncy:xR,ncy:ER,ndash:AR,nearhk:SR,nearr:CR,neArr:TR,nearrow:$R,ne:RR,nedot:DR,NegativeMediumSpace:LR,NegativeThickSpace:MR,NegativeThinSpace:OR,NegativeVeryThinSpace:NR,nequiv:IR,nesear:PR,nesim:qR,NestedGreaterGreater:FR,NestedLessLess:BR,NewLine:zR,nexist:HR,nexists:UR,Nfr:jR,nfr:VR,ngE:GR,nge:WR,ngeq:ZR,ngeqq:KR,ngeqslant:YR,nges:XR,nGg:JR,ngsim:QR,nGt:eD,ngt:tD,ngtr:nD,nGtv:rD,nharr:sD,nhArr:iD,nhpar:oD,ni:aD,nis:cD,nisd:lD,niv:uD,NJcy:hD,njcy:dD,nlarr:pD,nlArr:fD,nldr:mD,nlE:gD,nle:bD,nleftarrow:vD,nLeftarrow:yD,nleftrightarrow:_D,nLeftrightarrow:wD,nleq:kD,nleqq:xD,nleqslant:ED,nles:AD,nless:SD,nLl:CD,nlsim:TD,nLt:$D,nlt:RD,nltri:DD,nltrie:LD,nLtv:MD,nmid:OD,NoBreak:ND,NonBreakingSpace:ID,nopf:PD,Nopf:qD,Not:FD,not:BD,NotCongruent:zD,NotCupCap:HD,NotDoubleVerticalBar:UD,NotElement:jD,NotEqual:VD,NotEqualTilde:GD,NotExists:WD,NotGreater:ZD,NotGreaterEqual:KD,NotGreaterFullEqual:YD,NotGreaterGreater:XD,NotGreaterLess:JD,NotGreaterSlantEqual:QD,NotGreaterTilde:eL,NotHumpDownHump:tL,NotHumpEqual:nL,notin:rL,notindot:sL,notinE:iL,notinva:oL,notinvb:aL,notinvc:cL,NotLeftTriangleBar:lL,NotLeftTriangle:uL,NotLeftTriangleEqual:hL,NotLess:dL,NotLessEqual:pL,NotLessGreater:fL,NotLessLess:mL,NotLessSlantEqual:gL,NotLessTilde:bL,NotNestedGreaterGreater:vL,NotNestedLessLess:yL,notni:_L,notniva:wL,notnivb:kL,notnivc:xL,NotPrecedes:EL,NotPrecedesEqual:AL,NotPrecedesSlantEqual:SL,NotReverseElement:CL,NotRightTriangleBar:TL,NotRightTriangle:$L,NotRightTriangleEqual:RL,NotSquareSubset:DL,NotSquareSubsetEqual:LL,NotSquareSuperset:ML,NotSquareSupersetEqual:OL,NotSubset:NL,NotSubsetEqual:IL,NotSucceeds:PL,NotSucceedsEqual:qL,NotSucceedsSlantEqual:FL,NotSucceedsTilde:BL,NotSuperset:zL,NotSupersetEqual:HL,NotTilde:UL,NotTildeEqual:jL,NotTildeFullEqual:VL,NotTildeTilde:GL,NotVerticalBar:WL,nparallel:ZL,npar:KL,nparsl:YL,npart:XL,npolint:JL,npr:QL,nprcue:eM,nprec:tM,npreceq:nM,npre:rM,nrarrc:sM,nrarr:iM,nrArr:oM,nrarrw:aM,nrightarrow:cM,nRightarrow:lM,nrtri:uM,nrtrie:hM,nsc:dM,nsccue:pM,nsce:fM,Nscr:mM,nscr:gM,nshortmid:bM,nshortparallel:vM,nsim:yM,nsime:_M,nsimeq:wM,nsmid:kM,nspar:xM,nsqsube:EM,nsqsupe:AM,nsub:SM,nsubE:CM,nsube:TM,nsubset:$M,nsubseteq:RM,nsubseteqq:DM,nsucc:LM,nsucceq:MM,nsup:OM,nsupE:NM,nsupe:IM,nsupset:PM,nsupseteq:qM,nsupseteqq:FM,ntgl:BM,Ntilde:zM,ntilde:HM,ntlg:UM,ntriangleleft:jM,ntrianglelefteq:VM,ntriangleright:GM,ntrianglerighteq:WM,Nu:ZM,nu:KM,num:YM,numero:XM,numsp:JM,nvap:QM,nvdash:eO,nvDash:tO,nVdash:nO,nVDash:rO,nvge:sO,nvgt:iO,nvHarr:oO,nvinfin:aO,nvlArr:cO,nvle:lO,nvlt:uO,nvltrie:hO,nvrArr:dO,nvrtrie:pO,nvsim:fO,nwarhk:mO,nwarr:gO,nwArr:bO,nwarrow:vO,nwnear:yO,Oacute:_O,oacute:wO,oast:kO,Ocirc:xO,ocirc:EO,ocir:AO,Ocy:SO,ocy:CO,odash:TO,Odblac:$O,odblac:RO,odiv:DO,odot:LO,odsold:MO,OElig:OO,oelig:NO,ofcir:IO,Ofr:PO,ofr:qO,ogon:FO,Ograve:BO,ograve:zO,ogt:HO,ohbar:UO,ohm:jO,oint:VO,olarr:GO,olcir:WO,olcross:ZO,oline:KO,olt:YO,Omacr:XO,omacr:JO,Omega:QO,omega:eN,Omicron:tN,omicron:nN,omid:rN,ominus:sN,Oopf:iN,oopf:oN,opar:aN,OpenCurlyDoubleQuote:cN,OpenCurlyQuote:lN,operp:uN,oplus:hN,orarr:dN,Or:pN,or:fN,ord:mN,order:gN,orderof:bN,ordf:vN,ordm:yN,origof:_N,oror:wN,orslope:kN,orv:xN,oS:EN,Oscr:AN,oscr:SN,Oslash:CN,oslash:TN,osol:$N,Otilde:RN,otilde:DN,otimesas:LN,Otimes:MN,otimes:ON,Ouml:NN,ouml:IN,ovbar:PN,OverBar:qN,OverBrace:FN,OverBracket:BN,OverParenthesis:zN,para:HN,parallel:UN,par:jN,parsim:VN,parsl:GN,part:WN,PartialD:ZN,Pcy:KN,pcy:YN,percnt:XN,period:JN,permil:QN,perp:eI,pertenk:tI,Pfr:nI,pfr:rI,Phi:sI,phi:iI,phiv:oI,phmmat:aI,phone:cI,Pi:lI,pi:uI,pitchfork:hI,piv:dI,planck:pI,planckh:fI,plankv:mI,plusacir:gI,plusb:bI,pluscir:vI,plus:yI,plusdo:_I,plusdu:wI,pluse:kI,PlusMinus:xI,plusmn:EI,plussim:AI,plustwo:SI,pm:CI,Poincareplane:TI,pointint:$I,popf:RI,Popf:DI,pound:LI,prap:MI,Pr:OI,pr:NI,prcue:II,precapprox:PI,prec:qI,preccurlyeq:FI,Precedes:BI,PrecedesEqual:zI,PrecedesSlantEqual:HI,PrecedesTilde:UI,preceq:jI,precnapprox:VI,precneqq:GI,precnsim:WI,pre:ZI,prE:KI,precsim:YI,prime:XI,Prime:JI,primes:QI,prnap:eP,prnE:tP,prnsim:nP,prod:rP,Product:sP,profalar:iP,profline:oP,profsurf:aP,prop:cP,Proportional:lP,Proportion:uP,propto:hP,prsim:dP,prurel:pP,Pscr:fP,pscr:mP,Psi:gP,psi:bP,puncsp:vP,Qfr:yP,qfr:_P,qint:wP,qopf:kP,Qopf:xP,qprime:EP,Qscr:AP,qscr:SP,quaternions:CP,quatint:TP,quest:$P,questeq:RP,quot:DP,QUOT:LP,rAarr:MP,race:OP,Racute:NP,racute:IP,radic:PP,raemptyv:qP,rang:FP,Rang:BP,rangd:zP,range:HP,rangle:UP,raquo:jP,rarrap:VP,rarrb:GP,rarrbfs:WP,rarrc:ZP,rarr:KP,Rarr:YP,rArr:XP,rarrfs:JP,rarrhk:QP,rarrlp:e2,rarrpl:t2,rarrsim:n2,Rarrtl:r2,rarrtl:s2,rarrw:i2,ratail:o2,rAtail:a2,ratio:c2,rationals:l2,rbarr:u2,rBarr:h2,RBarr:d2,rbbrk:p2,rbrace:f2,rbrack:m2,rbrke:g2,rbrksld:b2,rbrkslu:v2,Rcaron:y2,rcaron:_2,Rcedil:w2,rcedil:k2,rceil:x2,rcub:E2,Rcy:A2,rcy:S2,rdca:C2,rdldhar:T2,rdquo:$2,rdquor:R2,rdsh:D2,real:L2,realine:M2,realpart:O2,reals:N2,Re:I2,rect:P2,reg:q2,REG:F2,ReverseElement:B2,ReverseEquilibrium:z2,ReverseUpEquilibrium:H2,rfisht:U2,rfloor:j2,rfr:V2,Rfr:G2,rHar:W2,rhard:Z2,rharu:K2,rharul:Y2,Rho:X2,rho:J2,rhov:Q2,RightAngleBracket:eq,RightArrowBar:tq,rightarrow:nq,RightArrow:rq,Rightarrow:sq,RightArrowLeftArrow:iq,rightarrowtail:oq,RightCeiling:aq,RightDoubleBracket:cq,RightDownTeeVector:lq,RightDownVectorBar:uq,RightDownVector:hq,RightFloor:dq,rightharpoondown:pq,rightharpoonup:fq,rightleftarrows:mq,rightleftharpoons:gq,rightrightarrows:bq,rightsquigarrow:vq,RightTeeArrow:yq,RightTee:_q,RightTeeVector:wq,rightthreetimes:kq,RightTriangleBar:xq,RightTriangle:Eq,RightTriangleEqual:Aq,RightUpDownVector:Sq,RightUpTeeVector:Cq,RightUpVectorBar:Tq,RightUpVector:$q,RightVectorBar:Rq,RightVector:Dq,ring:Lq,risingdotseq:Mq,rlarr:Oq,rlhar:Nq,rlm:Iq,rmoustache:Pq,rmoust:qq,rnmid:Fq,roang:Bq,roarr:zq,robrk:Hq,ropar:Uq,ropf:jq,Ropf:Vq,roplus:Gq,rotimes:Wq,RoundImplies:Zq,rpar:Kq,rpargt:Yq,rppolint:Xq,rrarr:Jq,Rrightarrow:Qq,rsaquo:eF,rscr:tF,Rscr:nF,rsh:rF,Rsh:sF,rsqb:iF,rsquo:oF,rsquor:aF,rthree:cF,rtimes:lF,rtri:uF,rtrie:hF,rtrif:dF,rtriltri:pF,RuleDelayed:fF,ruluhar:mF,rx:gF,Sacute:bF,sacute:vF,sbquo:yF,scap:_F,Scaron:wF,scaron:kF,Sc:xF,sc:EF,sccue:AF,sce:SF,scE:CF,Scedil:TF,scedil:$F,Scirc:RF,scirc:DF,scnap:LF,scnE:MF,scnsim:OF,scpolint:NF,scsim:IF,Scy:PF,scy:qF,sdotb:FF,sdot:BF,sdote:zF,searhk:HF,searr:UF,seArr:jF,searrow:VF,sect:GF,semi:WF,seswar:ZF,setminus:KF,setmn:YF,sext:XF,Sfr:JF,sfr:QF,sfrown:eB,sharp:tB,SHCHcy:nB,shchcy:rB,SHcy:sB,shcy:iB,ShortDownArrow:oB,ShortLeftArrow:aB,shortmid:cB,shortparallel:lB,ShortRightArrow:uB,ShortUpArrow:hB,shy:dB,Sigma:pB,sigma:fB,sigmaf:mB,sigmav:gB,sim:bB,simdot:vB,sime:yB,simeq:_B,simg:wB,simgE:kB,siml:xB,simlE:EB,simne:AB,simplus:SB,simrarr:CB,slarr:TB,SmallCircle:$B,smallsetminus:RB,smashp:DB,smeparsl:LB,smid:MB,smile:OB,smt:NB,smte:IB,smtes:PB,SOFTcy:qB,softcy:FB,solbar:BB,solb:zB,sol:HB,Sopf:UB,sopf:jB,spades:VB,spadesuit:GB,spar:WB,sqcap:ZB,sqcaps:KB,sqcup:YB,sqcups:XB,Sqrt:JB,sqsub:QB,sqsube:ez,sqsubset:tz,sqsubseteq:nz,sqsup:rz,sqsupe:sz,sqsupset:iz,sqsupseteq:oz,square:az,Square:cz,SquareIntersection:lz,SquareSubset:uz,SquareSubsetEqual:hz,SquareSuperset:dz,SquareSupersetEqual:pz,SquareUnion:fz,squarf:mz,squ:gz,squf:bz,srarr:vz,Sscr:yz,sscr:_z,ssetmn:wz,ssmile:kz,sstarf:xz,Star:Ez,star:Az,starf:Sz,straightepsilon:Cz,straightphi:Tz,strns:$z,sub:Rz,Sub:Dz,subdot:Lz,subE:Mz,sube:Oz,subedot:Nz,submult:Iz,subnE:Pz,subne:qz,subplus:Fz,subrarr:Bz,subset:zz,Subset:Hz,subseteq:Uz,subseteqq:jz,SubsetEqual:Vz,subsetneq:Gz,subsetneqq:Wz,subsim:Zz,subsub:Kz,subsup:Yz,succapprox:Xz,succ:Jz,succcurlyeq:Qz,Succeeds:eH,SucceedsEqual:tH,SucceedsSlantEqual:nH,SucceedsTilde:rH,succeq:sH,succnapprox:iH,succneqq:oH,succnsim:aH,succsim:cH,SuchThat:lH,sum:uH,Sum:hH,sung:dH,sup1:pH,sup2:fH,sup3:mH,sup:gH,Sup:bH,supdot:vH,supdsub:yH,supE:_H,supe:wH,supedot:kH,Superset:xH,SupersetEqual:EH,suphsol:AH,suphsub:SH,suplarr:CH,supmult:TH,supnE:$H,supne:RH,supplus:DH,supset:LH,Supset:MH,supseteq:OH,supseteqq:NH,supsetneq:IH,supsetneqq:PH,supsim:qH,supsub:FH,supsup:BH,swarhk:zH,swarr:HH,swArr:UH,swarrow:jH,swnwar:VH,szlig:GH,Tab:WH,target:ZH,Tau:KH,tau:YH,tbrk:XH,Tcaron:JH,tcaron:QH,Tcedil:e3,tcedil:t3,Tcy:n3,tcy:r3,tdot:s3,telrec:i3,Tfr:o3,tfr:a3,there4:c3,therefore:l3,Therefore:u3,Theta:h3,theta:d3,thetasym:p3,thetav:f3,thickapprox:m3,thicksim:g3,ThickSpace:b3,ThinSpace:v3,thinsp:y3,thkap:_3,thksim:w3,THORN:k3,thorn:x3,tilde:E3,Tilde:A3,TildeEqual:S3,TildeFullEqual:C3,TildeTilde:T3,timesbar:$3,timesb:R3,times:D3,timesd:L3,tint:M3,toea:O3,topbot:N3,topcir:I3,top:P3,Topf:q3,topf:F3,topfork:B3,tosa:z3,tprime:H3,trade:U3,TRADE:j3,triangle:V3,triangledown:G3,triangleleft:W3,trianglelefteq:Z3,triangleq:K3,triangleright:Y3,trianglerighteq:X3,tridot:J3,trie:Q3,triminus:eU,TripleDot:tU,triplus:nU,trisb:rU,tritime:sU,trpezium:iU,Tscr:oU,tscr:aU,TScy:cU,tscy:lU,TSHcy:uU,tshcy:hU,Tstrok:dU,tstrok:pU,twixt:fU,twoheadleftarrow:mU,twoheadrightarrow:gU,Uacute:bU,uacute:vU,uarr:yU,Uarr:_U,uArr:wU,Uarrocir:kU,Ubrcy:xU,ubrcy:EU,Ubreve:AU,ubreve:SU,Ucirc:CU,ucirc:TU,Ucy:$U,ucy:RU,udarr:DU,Udblac:LU,udblac:MU,udhar:OU,ufisht:NU,Ufr:IU,ufr:PU,Ugrave:qU,ugrave:FU,uHar:BU,uharl:zU,uharr:HU,uhblk:UU,ulcorn:jU,ulcorner:VU,ulcrop:GU,ultri:WU,Umacr:ZU,umacr:KU,uml:YU,UnderBar:XU,UnderBrace:JU,UnderBracket:QU,UnderParenthesis:e5,Union:t5,UnionPlus:n5,Uogon:r5,uogon:s5,Uopf:i5,uopf:o5,UpArrowBar:a5,uparrow:c5,UpArrow:l5,Uparrow:u5,UpArrowDownArrow:h5,updownarrow:d5,UpDownArrow:p5,Updownarrow:f5,UpEquilibrium:m5,upharpoonleft:g5,upharpoonright:b5,uplus:v5,UpperLeftArrow:y5,UpperRightArrow:_5,upsi:w5,Upsi:k5,upsih:x5,Upsilon:E5,upsilon:A5,UpTeeArrow:S5,UpTee:C5,upuparrows:T5,urcorn:$5,urcorner:R5,urcrop:D5,Uring:L5,uring:M5,urtri:O5,Uscr:N5,uscr:I5,utdot:P5,Utilde:q5,utilde:F5,utri:B5,utrif:z5,uuarr:H5,Uuml:U5,uuml:j5,uwangle:V5,vangrt:G5,varepsilon:W5,varkappa:Z5,varnothing:K5,varphi:Y5,varpi:X5,varpropto:J5,varr:Q5,vArr:ej,varrho:tj,varsigma:nj,varsubsetneq:rj,varsubsetneqq:sj,varsupsetneq:ij,varsupsetneqq:oj,vartheta:aj,vartriangleleft:cj,vartriangleright:lj,vBar:uj,Vbar:hj,vBarv:dj,Vcy:pj,vcy:fj,vdash:mj,vDash:gj,Vdash:bj,VDash:vj,Vdashl:yj,veebar:_j,vee:wj,Vee:kj,veeeq:xj,vellip:Ej,verbar:Aj,Verbar:Sj,vert:Cj,Vert:Tj,VerticalBar:$j,VerticalLine:Rj,VerticalSeparator:Dj,VerticalTilde:Lj,VeryThinSpace:Mj,Vfr:Oj,vfr:Nj,vltri:Ij,vnsub:Pj,vnsup:qj,Vopf:Fj,vopf:Bj,vprop:zj,vrtri:Hj,Vscr:Uj,vscr:jj,vsubnE:Vj,vsubne:Gj,vsupnE:Wj,vsupne:Zj,Vvdash:Kj,vzigzag:Yj,Wcirc:Xj,wcirc:Jj,wedbar:Qj,wedge:e9,Wedge:t9,wedgeq:n9,weierp:r9,Wfr:s9,wfr:i9,Wopf:o9,wopf:a9,wp:c9,wr:l9,wreath:u9,Wscr:h9,wscr:d9,xcap:p9,xcirc:f9,xcup:m9,xdtri:g9,Xfr:b9,xfr:v9,xharr:y9,xhArr:_9,Xi:w9,xi:k9,xlarr:x9,xlArr:E9,xmap:A9,xnis:S9,xodot:C9,Xopf:T9,xopf:$9,xoplus:R9,xotime:D9,xrarr:L9,xrArr:M9,Xscr:O9,xscr:N9,xsqcup:I9,xuplus:P9,xutri:q9,xvee:F9,xwedge:B9,Yacute:z9,yacute:H9,YAcy:U9,yacy:j9,Ycirc:V9,ycirc:G9,Ycy:W9,ycy:Z9,yen:K9,Yfr:Y9,yfr:X9,YIcy:J9,yicy:Q9,Yopf:e4,yopf:t4,Yscr:n4,yscr:r4,YUcy:s4,yucy:i4,yuml:o4,Yuml:a4,Zacute:c4,zacute:l4,Zcaron:u4,zcaron:h4,Zcy:d4,zcy:p4,Zdot:f4,zdot:m4,zeetrf:g4,ZeroWidthSpace:b4,Zeta:v4,zeta:y4,zfr:_4,Zfr:w4,ZHcy:k4,zhcy:x4,zigrarr:E4,zopf:A4,Zopf:S4,Zscr:C4,zscr:T4,zwj:$4,zwnj:R4},Qa=D4,ai=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,dn={},xo={};function L4(n){var e,t,r=xo[n];if(r)return r;for(r=xo[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),/^[0-9a-z]$/i.test(t)?r.push(t):r.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<n.length;e++)r[n.charCodeAt(e)]=n[e];return r}function Nr(n,e,t){var r,s,i,o,a,c="";for(typeof e!="string"&&(t=e,e=Nr.defaultChars),typeof t=="undefined"&&(t=!0),a=L4(e),r=0,s=n.length;r<s;r++){if(i=n.charCodeAt(r),t&&i===37&&r+2<s&&/^[0-9a-f]{2}$/i.test(n.slice(r+1,r+3))){c+=n.slice(r,r+3),r+=2;continue}if(i<128){c+=a[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&r+1<s&&(o=n.charCodeAt(r+1),o>=56320&&o<=57343)){c+=encodeURIComponent(n[r]+n[r+1]),r++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(n[r])}return c}Nr.defaultChars=";/?:@&=+$,-_.!~*'()#";Nr.componentChars="-_.!~*'()";var M4=Nr,Eo={};function O4(n){var e,t,r=Eo[n];if(r)return r;for(r=Eo[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),r.push(t);for(e=0;e<n.length;e++)t=n.charCodeAt(e),r[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return r}function Ir(n,e){var t;return typeof e!="string"&&(e=Ir.defaultChars),t=O4(e),n.replace(/(%[a-f0-9]{2})+/gi,function(r){var s,i,o,a,c,l,u,h="";for(s=0,i=r.length;s<i;s+=3){if(o=parseInt(r.slice(s+1,s+3),16),o<128){h+=t[o];continue}if((o&224)===192&&s+3<i&&(a=parseInt(r.slice(s+4,s+6),16),(a&192)===128)){u=o<<6&1984|a&63,u<128?h+="\uFFFD\uFFFD":h+=String.fromCharCode(u),s+=3;continue}if((o&240)===224&&s+6<i&&(a=parseInt(r.slice(s+4,s+6),16),c=parseInt(r.slice(s+7,s+9),16),(a&192)===128&&(c&192)===128)){u=o<<12&61440|a<<6&4032|c&63,u<2048||u>=55296&&u<=57343?h+="\uFFFD\uFFFD\uFFFD":h+=String.fromCharCode(u),s+=6;continue}if((o&248)===240&&s+9<i&&(a=parseInt(r.slice(s+4,s+6),16),c=parseInt(r.slice(s+7,s+9),16),l=parseInt(r.slice(s+10,s+12),16),(a&192)===128&&(c&192)===128&&(l&192)===128)){u=o<<18&1835008|a<<12&258048|c<<6&4032|l&63,u<65536||u>1114111?h+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,h+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),s+=9;continue}h+="\uFFFD"}return h})}Ir.defaultChars=";/?:@&=+$,#";Ir.componentChars="";var N4=Ir,I4=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t};function _r(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var P4=/^([a-z0-9.+-]+:)/i,q4=/:[0-9]*$/,F4=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,B4=["<",">",'"',"`"," ","\r",`
`,"	"],z4=["{","}","|","\\","^","`"].concat(B4),H4=["'"].concat(z4),Ao=["%","/","?",";","#"].concat(H4),So=["/","?","#"],U4=255,Co=/^[+a-z0-9A-Z_-]{0,63}$/,j4=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,To={javascript:!0,"javascript:":!0},$o={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function V4(n,e){if(n&&n instanceof _r)return n;var t=new _r;return t.parse(n,e),t}_r.prototype.parse=function(n,e){var t,r,s,i,o,a=n;if(a=a.trim(),!e&&n.split("#").length===1){var c=F4.exec(a);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=P4.exec(a);if(l&&(l=l[0],s=l.toLowerCase(),this.protocol=l,a=a.substr(l.length)),(e||l||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=a.substr(0,2)==="//",o&&!(l&&To[l])&&(a=a.substr(2),this.slashes=!0)),!To[l]&&(o||l&&!$o[l])){var u=-1;for(t=0;t<So.length;t++)i=a.indexOf(So[t]),i!==-1&&(u===-1||i<u)&&(u=i);var h,p;for(u===-1?p=a.lastIndexOf("@"):p=a.lastIndexOf("@",u),p!==-1&&(h=a.slice(0,p),a=a.slice(p+1),this.auth=h),u=-1,t=0;t<Ao.length;t++)i=a.indexOf(Ao[t]),i!==-1&&(u===-1||i<u)&&(u=i);u===-1&&(u=a.length),a[u-1]===":"&&u--;var d=a.slice(0,u);a=a.slice(u),this.parseHost(d),this.hostname=this.hostname||"";var y=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!y){var v=this.hostname.split(/\./);for(t=0,r=v.length;t<r;t++){var A=v[t];if(!!A&&!A.match(Co)){for(var k="",_=0,w=A.length;_<w;_++)A.charCodeAt(_)>127?k+="x":k+=A[_];if(!k.match(Co)){var R=v.slice(0,t),$=v.slice(t+1),x=A.match(j4);x&&(R.push(x[1]),$.unshift(x[2])),$.length&&(a=$.join(".")+a),this.hostname=R.join(".");break}}}}this.hostname.length>U4&&(this.hostname=""),y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var B=a.indexOf("#");B!==-1&&(this.hash=a.substr(B),a=a.slice(0,B));var G=a.indexOf("?");return G!==-1&&(this.search=a.substr(G),a=a.slice(0,G)),a&&(this.pathname=a),$o[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this};_r.prototype.parseHost=function(n){var e=q4.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};var G4=V4;dn.encode=M4;dn.decode=N4;dn.format=I4;dn.parse=G4;var pn={},ec=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,tc=/[\0-\x1F\x7F-\x9F]/,W4=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,nc=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;pn.Any=ec;pn.Cc=tc;pn.Cf=W4;pn.P=ai;pn.Z=nc;(function(n){function e(b){return Object.prototype.toString.call(b)}function t(b){return e(b)==="[object String]"}var r=Object.prototype.hasOwnProperty;function s(b,S){return r.call(b,S)}function i(b){var S=Array.prototype.slice.call(arguments,1);return S.forEach(function(f){if(!!f){if(typeof f!="object")throw new TypeError(f+"must be object");Object.keys(f).forEach(function(m){b[m]=f[m]})}}),b}function o(b,S,f){return[].concat(b.slice(0,S),f,b.slice(S+1))}function a(b){return!(b>=55296&&b<=57343||b>=64976&&b<=65007||(b&65535)===65535||(b&65535)===65534||b>=0&&b<=8||b===11||b>=14&&b<=31||b>=127&&b<=159||b>1114111)}function c(b){if(b>65535){b-=65536;var S=55296+(b>>10),f=56320+(b&1023);return String.fromCharCode(S,f)}return String.fromCharCode(b)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,h=new RegExp(l.source+"|"+u.source,"gi"),p=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,d=Qa;function y(b,S){var f=0;return s(d,S)?d[S]:S.charCodeAt(0)===35&&p.test(S)&&(f=S[1].toLowerCase()==="x"?parseInt(S.slice(2),16):parseInt(S.slice(1),10),a(f))?c(f):b}function v(b){return b.indexOf("\\")<0?b:b.replace(l,"$1")}function A(b){return b.indexOf("\\")<0&&b.indexOf("&")<0?b:b.replace(h,function(S,f,m){return f||y(S,m)})}var k=/[&<>"]/,_=/[&<>"]/g,w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function R(b){return w[b]}function $(b){return k.test(b)?b.replace(_,R):b}var x=/[.?*+^$[\]\\(){}|-]/g;function B(b){return b.replace(x,"\\$&")}function G(b){switch(b){case 9:case 32:return!0}return!1}function j(b){if(b>=8192&&b<=8202)return!0;switch(b){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var D=ai;function X(b){return D.test(b)}function ue(b){switch(b){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function O(b){return b=b.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(b=b.replace(/ẞ/g,"\xDF")),b.toLowerCase().toUpperCase()}n.lib={},n.lib.mdurl=dn,n.lib.ucmicro=pn,n.assign=i,n.isString=t,n.has=s,n.unescapeMd=v,n.unescapeAll=A,n.isValidEntityCode=a,n.fromCodePoint=c,n.escapeHtml=$,n.arrayReplaceAt=o,n.isSpace=G,n.isWhiteSpace=j,n.isMdAsciiPunct=ue,n.isPunctChar=X,n.escapeRE=B,n.normalizeReference=O})(ne);var Pr={},Z4=function(e,t,r){var s,i,o,a,c=-1,l=e.posMax,u=e.pos;for(e.pos=t+1,s=1;e.pos<l;){if(o=e.src.charCodeAt(e.pos),o===93&&(s--,s===0)){i=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)s++;else if(r)return e.pos=u,-1}}return i&&(c=e.pos),e.pos=u,c},Ro=ne.unescapeAll,K4=function(e,t,r){var s,i,o=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(t)===60){for(t++;t<r;){if(s=e.charCodeAt(t),s===10||s===60)return c;if(s===62)return c.pos=t+1,c.str=Ro(e.slice(a+1,t)),c.ok=!0,c;if(s===92&&t+1<r){t+=2;continue}t++}return c}for(i=0;t<r&&(s=e.charCodeAt(t),!(s===32||s<32||s===127));){if(s===92&&t+1<r){if(e.charCodeAt(t+1)===32)break;t+=2;continue}if(s===40&&(i++,i>32))return c;if(s===41){if(i===0)break;i--}t++}return a===t||i!==0||(c.str=Ro(e.slice(a,t)),c.lines=o,c.pos=t,c.ok=!0),c},Y4=ne.unescapeAll,X4=function(e,t,r){var s,i,o=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(t>=r||(i=e.charCodeAt(t),i!==34&&i!==39&&i!==40))return c;for(t++,i===40&&(i=41);t<r;){if(s=e.charCodeAt(t),s===i)return c.pos=t+1,c.lines=o,c.str=Y4(e.slice(a+1,t)),c.ok=!0,c;if(s===40&&i===41)return c;s===10?o++:s===92&&t+1<r&&(t++,e.charCodeAt(t)===10&&o++),t++}return c};Pr.parseLinkLabel=Z4;Pr.parseLinkDestination=K4;Pr.parseLinkTitle=X4;var J4=ne.assign,Q4=ne.unescapeAll,qt=ne.escapeHtml,nt={};nt.code_inline=function(n,e,t,r,s){var i=n[e];return"<code"+s.renderAttrs(i)+">"+qt(n[e].content)+"</code>"};nt.code_block=function(n,e,t,r,s){var i=n[e];return"<pre"+s.renderAttrs(i)+"><code>"+qt(n[e].content)+`</code></pre>
`};nt.fence=function(n,e,t,r,s){var i=n[e],o=i.info?Q4(i.info).trim():"",a="",c="",l,u,h,p,d;return o&&(h=o.split(/(\s+)/g),a=h[0],c=h.slice(2).join("")),t.highlight?l=t.highlight(i.content,a,c)||qt(i.content):l=qt(i.content),l.indexOf("<pre")===0?l+`
`:o?(u=i.attrIndex("class"),p=i.attrs?i.attrs.slice():[],u<0?p.push(["class",t.langPrefix+a]):(p[u]=p[u].slice(),p[u][1]+=" "+t.langPrefix+a),d={attrs:p},"<pre><code"+s.renderAttrs(d)+">"+l+`</code></pre>
`):"<pre><code"+s.renderAttrs(i)+">"+l+`</code></pre>
`};nt.image=function(n,e,t,r,s){var i=n[e];return i.attrs[i.attrIndex("alt")][1]=s.renderInlineAsText(i.children,t,r),s.renderToken(n,e,t)};nt.hardbreak=function(n,e,t){return t.xhtmlOut?`<br />
`:`<br>
`};nt.softbreak=function(n,e,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};nt.text=function(n,e){return qt(n[e].content)};nt.html_block=function(n,e){return n[e].content};nt.html_inline=function(n,e){return n[e].content};function fn(){this.rules=J4({},nt)}fn.prototype.renderAttrs=function(e){var t,r,s;if(!e.attrs)return"";for(s="",t=0,r=e.attrs.length;t<r;t++)s+=" "+qt(e.attrs[t][0])+'="'+qt(e.attrs[t][1])+'"';return s};fn.prototype.renderToken=function(e,t,r){var s,i="",o=!1,a=e[t];return a.hidden?"":(a.block&&a.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(a.nesting===-1?"</":"<")+a.tag,i+=this.renderAttrs(a),a.nesting===0&&r.xhtmlOut&&(i+=" /"),a.block&&(o=!0,a.nesting===1&&t+1<e.length&&(s=e[t+1],(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===a.tag)&&(o=!1))),i+=o?`>
`:">",i)};fn.prototype.renderInline=function(n,e,t){for(var r,s="",i=this.rules,o=0,a=n.length;o<a;o++)r=n[o].type,typeof i[r]!="undefined"?s+=i[r](n,o,e,t,this):s+=this.renderToken(n,o,e);return s};fn.prototype.renderInlineAsText=function(n,e,t){for(var r="",s=0,i=n.length;s<i;s++)n[s].type==="text"?r+=n[s].content:n[s].type==="image"?r+=this.renderInlineAsText(n[s].children,e,t):n[s].type==="softbreak"&&(r+=`
`);return r};fn.prototype.render=function(n,e,t){var r,s,i,o="",a=this.rules;for(r=0,s=n.length;r<s;r++)i=n[r].type,i==="inline"?o+=this.renderInline(n[r].children,e,t):typeof a[i]!="undefined"?o+=a[n[r].type](n,r,e,t,this):o+=this.renderToken(n,r,e,t);return o};var e6=fn;function Xe(){this.__rules__=[],this.__cache__=null}Xe.prototype.__find__=function(n){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};Xe.prototype.__compile__=function(){var n=this,e=[""];n.__rules__.forEach(function(t){!t.enabled||t.alt.forEach(function(r){e.indexOf(r)<0&&e.push(r)})}),n.__cache__={},e.forEach(function(t){n.__cache__[t]=[],n.__rules__.forEach(function(r){!r.enabled||t&&r.alt.indexOf(t)<0||n.__cache__[t].push(r.fn)})})};Xe.prototype.at=function(n,e,t){var r=this.__find__(n),s=t||{};if(r===-1)throw new Error("Parser rule not found: "+n);this.__rules__[r].fn=e,this.__rules__[r].alt=s.alt||[],this.__cache__=null};Xe.prototype.before=function(n,e,t,r){var s=this.__find__(n),i=r||{};if(s===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(s,0,{name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Xe.prototype.after=function(n,e,t,r){var s=this.__find__(n),i=r||{};if(s===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(s+1,0,{name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Xe.prototype.push=function(n,e,t){var r=t||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:r.alt||[]}),this.__cache__=null};Xe.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(r){var s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!0,t.push(r)},this),this.__cache__=null,t};Xe.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(n,e)};Xe.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(r){var s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!1,t.push(r)},this),this.__cache__=null,t};Xe.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};var ci=Xe,t6=/\r\n?|\n/g,n6=/\0/g,r6=function(e){var t;t=e.src.replace(t6,`
`),t=t.replace(n6,"\uFFFD"),e.src=t},s6=function(e){var t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},i6=function(e){var t=e.tokens,r,s,i;for(s=0,i=t.length;s<i;s++)r=t[s],r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)},o6=ne.arrayReplaceAt;function a6(n){return/^<a[>\s]/i.test(n)}function c6(n){return/^<\/a\s*>/i.test(n)}var l6=function(e){var t,r,s,i,o,a,c,l,u,h,p,d,y,v,A,k,_=e.tokens,w;if(!!e.md.options.linkify){for(r=0,s=_.length;r<s;r++)if(!(_[r].type!=="inline"||!e.md.linkify.pretest(_[r].content)))for(i=_[r].children,y=0,t=i.length-1;t>=0;t--){if(a=i[t],a.type==="link_close"){for(t--;i[t].level!==a.level&&i[t].type!=="link_open";)t--;continue}if(a.type==="html_inline"&&(a6(a.content)&&y>0&&y--,c6(a.content)&&y++),!(y>0)&&a.type==="text"&&e.md.linkify.test(a.content)){for(u=a.content,w=e.md.linkify.match(u),c=[],d=a.level,p=0,l=0;l<w.length;l++)v=w[l].url,A=e.md.normalizeLink(v),e.md.validateLink(A)&&(k=w[l].text,w[l].schema?w[l].schema==="mailto:"&&!/^mailto:/i.test(k)?k=e.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):k=e.md.normalizeLinkText(k):k=e.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,""),h=w[l].index,h>p&&(o=new e.Token("text","",0),o.content=u.slice(p,h),o.level=d,c.push(o)),o=new e.Token("link_open","a",1),o.attrs=[["href",A]],o.level=d++,o.markup="linkify",o.info="auto",c.push(o),o=new e.Token("text","",0),o.content=k,o.level=d,c.push(o),o=new e.Token("link_close","a",-1),o.level=--d,o.markup="linkify",o.info="auto",c.push(o),p=w[l].lastIndex);p<u.length&&(o=new e.Token("text","",0),o.content=u.slice(p),o.level=d,c.push(o)),_[r].children=i=o6(i,t,c)}}}},rc=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,u6=/\((c|tm|r|p)\)/i,h6=/\((c|tm|r|p)\)/ig,d6={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};function p6(n,e){return d6[e.toLowerCase()]}function f6(n){var e,t,r=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!r&&(t.content=t.content.replace(h6,p6)),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}function m6(n){var e,t,r=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!r&&rc.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}var g6=function(e){var t;if(!!e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(u6.test(e.tokens[t].content)&&f6(e.tokens[t].children),rc.test(e.tokens[t].content)&&m6(e.tokens[t].children))},Do=ne.isWhiteSpace,Lo=ne.isPunctChar,Mo=ne.isMdAsciiPunct,b6=/['"]/,Oo=/['"]/g,No="\u2019";function ir(n,e,t){return n.substr(0,e)+t+n.substr(e+1)}function v6(n,e){var t,r,s,i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x;for(R=[],t=0;t<n.length;t++){for(r=n[t],c=n[t].level,_=R.length-1;_>=0&&!(R[_].level<=c);_--);if(R.length=_+1,r.type!=="text")continue;s=r.content,o=0,a=s.length;e:for(;o<a&&(Oo.lastIndex=o,i=Oo.exec(s),!!i);){if(A=k=!0,o=i.index+1,w=i[0]==="'",u=32,i.index-1>=0)u=s.charCodeAt(i.index-1);else for(_=t-1;_>=0&&!(n[_].type==="softbreak"||n[_].type==="hardbreak");_--)if(!!n[_].content){u=n[_].content.charCodeAt(n[_].content.length-1);break}if(h=32,o<a)h=s.charCodeAt(o);else for(_=t+1;_<n.length&&!(n[_].type==="softbreak"||n[_].type==="hardbreak");_++)if(!!n[_].content){h=n[_].content.charCodeAt(0);break}if(p=Mo(u)||Lo(String.fromCharCode(u)),d=Mo(h)||Lo(String.fromCharCode(h)),y=Do(u),v=Do(h),v?A=!1:d&&(y||p||(A=!1)),y?k=!1:p&&(v||d||(k=!1)),h===34&&i[0]==='"'&&u>=48&&u<=57&&(k=A=!1),A&&k&&(A=p,k=d),!A&&!k){w&&(r.content=ir(r.content,i.index,No));continue}if(k){for(_=R.length-1;_>=0&&(l=R[_],!(R[_].level<c));_--)if(l.single===w&&R[_].level===c){l=R[_],w?($=e.md.options.quotes[2],x=e.md.options.quotes[3]):($=e.md.options.quotes[0],x=e.md.options.quotes[1]),r.content=ir(r.content,i.index,x),n[l.token].content=ir(n[l.token].content,l.pos,$),o+=x.length-1,l.token===t&&(o+=$.length-1),s=r.content,a=s.length,R.length=_;continue e}}A?R.push({token:t,pos:i.index,single:w,level:c}):k&&w&&(r.content=ir(r.content,i.index,No))}}}var y6=function(e){var t;if(!!e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!b6.test(e.tokens[t].content)||v6(e.tokens[t].children,e)};function mn(n,e,t){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}mn.prototype.attrIndex=function(e){var t,r,s;if(!this.attrs)return-1;for(t=this.attrs,r=0,s=t.length;r<s;r++)if(t[r][0]===e)return r;return-1};mn.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};mn.prototype.attrSet=function(e,t){var r=this.attrIndex(e),s=[e,t];r<0?this.attrPush(s):this.attrs[r]=s};mn.prototype.attrGet=function(e){var t=this.attrIndex(e),r=null;return t>=0&&(r=this.attrs[t][1]),r};mn.prototype.attrJoin=function(e,t){var r=this.attrIndex(e);r<0?this.attrPush([e,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};var li=mn,_6=li;function sc(n,e,t){this.src=n,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=e}sc.prototype.Token=_6;var w6=sc,k6=ci,hs=[["normalize",r6],["block",s6],["inline",i6],["linkify",l6],["replacements",g6],["smartquotes",y6]];function ui(){this.ruler=new k6;for(var n=0;n<hs.length;n++)this.ruler.push(hs[n][0],hs[n][1])}ui.prototype.process=function(n){var e,t,r;for(r=this.ruler.getRules(""),e=0,t=r.length;e<t;e++)r[e](n)};ui.prototype.State=w6;var x6=ui,ds=ne.isSpace;function ps(n,e){var t=n.bMarks[e]+n.tShift[e],r=n.eMarks[e];return n.src.substr(t,r-t)}function Io(n){var e=[],t=0,r=n.length,s,i=!1,o=0,a="";for(s=n.charCodeAt(t);t<r;)s===124&&(i?(a+=n.substring(o,t-1),o=t):(e.push(a+n.substring(o,t)),a="",o=t+1)),i=s===92,t++,s=n.charCodeAt(t);return e.push(a+n.substring(o)),e}var E6=function(e,t,r,s){var i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x;if(t+2>r||(u=t+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(a=e.bMarks[u]+e.tShift[u],a>=e.eMarks[u])||($=e.src.charCodeAt(a++),$!==124&&$!==45&&$!==58)||a>=e.eMarks[u]||(x=e.src.charCodeAt(a++),x!==124&&x!==45&&x!==58&&!ds(x))||$===45&&ds(x))return!1;for(;a<e.eMarks[u];){if(i=e.src.charCodeAt(a),i!==124&&i!==45&&i!==58&&!ds(i))return!1;a++}for(o=ps(e,t+1),h=o.split("|"),y=[],c=0;c<h.length;c++){if(v=h[c].trim(),!v){if(c===0||c===h.length-1)continue;return!1}if(!/^:?-+:?$/.test(v))return!1;v.charCodeAt(v.length-1)===58?y.push(v.charCodeAt(0)===58?"center":"right"):v.charCodeAt(0)===58?y.push("left"):y.push("")}if(o=ps(e,t).trim(),o.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4||(h=Io(o),h.length&&h[0]===""&&h.shift(),h.length&&h[h.length-1]===""&&h.pop(),p=h.length,p===0||p!==y.length))return!1;if(s)return!0;for(_=e.parentType,e.parentType="table",R=e.md.block.ruler.getRules("blockquote"),d=e.push("table_open","table",1),d.map=A=[t,0],d=e.push("thead_open","thead",1),d.map=[t,t+1],d=e.push("tr_open","tr",1),d.map=[t,t+1],c=0;c<h.length;c++)d=e.push("th_open","th",1),y[c]&&(d.attrs=[["style","text-align:"+y[c]]]),d=e.push("inline","",0),d.content=h[c].trim(),d.children=[],d=e.push("th_close","th",-1);for(d=e.push("tr_close","tr",-1),d=e.push("thead_close","thead",-1),u=t+2;u<r&&!(e.sCount[u]<e.blkIndent);u++){for(w=!1,c=0,l=R.length;c<l;c++)if(R[c](e,u,r,!0)){w=!0;break}if(w||(o=ps(e,u).trim(),!o)||e.sCount[u]-e.blkIndent>=4)break;for(h=Io(o),h.length&&h[0]===""&&h.shift(),h.length&&h[h.length-1]===""&&h.pop(),u===t+2&&(d=e.push("tbody_open","tbody",1),d.map=k=[t+2,0]),d=e.push("tr_open","tr",1),d.map=[u,u+1],c=0;c<p;c++)d=e.push("td_open","td",1),y[c]&&(d.attrs=[["style","text-align:"+y[c]]]),d=e.push("inline","",0),d.content=h[c]?h[c].trim():"",d.children=[],d=e.push("td_close","td",-1);d=e.push("tr_close","tr",-1)}return k&&(d=e.push("tbody_close","tbody",-1),k[1]=u),d=e.push("table_close","table",-1),A[1]=u,e.parentType=_,e.line=u,!0},A6=function(e,t,r){var s,i,o;if(e.sCount[t]-e.blkIndent<4)return!1;for(i=s=t+1;s<r;){if(e.isEmpty(s)){s++;continue}if(e.sCount[s]-e.blkIndent>=4){s++,i=s;continue}break}return e.line=i,o=e.push("code_block","code",0),o.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,o.map=[t,e.line],!0},S6=function(e,t,r,s){var i,o,a,c,l,u,h,p=!1,d=e.bMarks[t]+e.tShift[t],y=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||d+3>y||(i=e.src.charCodeAt(d),i!==126&&i!==96)||(l=d,d=e.skipChars(d,i),o=d-l,o<3)||(h=e.src.slice(l,d),a=e.src.slice(d,y),i===96&&a.indexOf(String.fromCharCode(i))>=0))return!1;if(s)return!0;for(c=t;c++,!(c>=r||(d=l=e.bMarks[c]+e.tShift[c],y=e.eMarks[c],d<y&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(d)===i&&!(e.sCount[c]-e.blkIndent>=4)&&(d=e.skipChars(d,i),!(d-l<o)&&(d=e.skipSpaces(d),!(d<y)))){p=!0;break}return o=e.sCount[t],e.line=c+(p?1:0),u=e.push("fence","code",0),u.info=a,u.content=e.getLines(t+1,c,o,!0),u.markup=h,u.map=[t,e.line],!0},Po=ne.isSpace,C6=function(e,t,r,s){var i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x,B,G,j=e.lineMax,D=e.bMarks[t]+e.tShift[t],X=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(D++)!==62)return!1;if(s)return!0;for(c=d=e.sCount[t]+1,e.src.charCodeAt(D)===32?(D++,c++,d++,i=!1,R=!0):e.src.charCodeAt(D)===9?(R=!0,(e.bsCount[t]+d)%4===3?(D++,c++,d++,i=!1):i=!0):R=!1,y=[e.bMarks[t]],e.bMarks[t]=D;D<X&&(o=e.src.charCodeAt(D),Po(o));){o===9?d+=4-(d+e.bsCount[t]+(i?1:0))%4:d++;D++}for(v=[e.bsCount[t]],e.bsCount[t]=e.sCount[t]+1+(R?1:0),u=D>=X,_=[e.sCount[t]],e.sCount[t]=d-c,w=[e.tShift[t]],e.tShift[t]=D-e.bMarks[t],x=e.md.block.ruler.getRules("blockquote"),k=e.parentType,e.parentType="blockquote",p=t+1;p<r&&(G=e.sCount[p]<e.blkIndent,D=e.bMarks[p]+e.tShift[p],X=e.eMarks[p],!(D>=X));p++){if(e.src.charCodeAt(D++)===62&&!G){for(c=d=e.sCount[p]+1,e.src.charCodeAt(D)===32?(D++,c++,d++,i=!1,R=!0):e.src.charCodeAt(D)===9?(R=!0,(e.bsCount[p]+d)%4===3?(D++,c++,d++,i=!1):i=!0):R=!1,y.push(e.bMarks[p]),e.bMarks[p]=D;D<X&&(o=e.src.charCodeAt(D),Po(o));){o===9?d+=4-(d+e.bsCount[p]+(i?1:0))%4:d++;D++}u=D>=X,v.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(R?1:0),_.push(e.sCount[p]),e.sCount[p]=d-c,w.push(e.tShift[p]),e.tShift[p]=D-e.bMarks[p];continue}if(u)break;for($=!1,a=0,l=x.length;a<l;a++)if(x[a](e,p,r,!0)){$=!0;break}if($){e.lineMax=p,e.blkIndent!==0&&(y.push(e.bMarks[p]),v.push(e.bsCount[p]),w.push(e.tShift[p]),_.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}y.push(e.bMarks[p]),v.push(e.bsCount[p]),w.push(e.tShift[p]),_.push(e.sCount[p]),e.sCount[p]=-1}for(A=e.blkIndent,e.blkIndent=0,B=e.push("blockquote_open","blockquote",1),B.markup=">",B.map=h=[t,0],e.md.block.tokenize(e,t,p),B=e.push("blockquote_close","blockquote",-1),B.markup=">",e.lineMax=j,e.parentType=k,h[1]=e.line,a=0;a<w.length;a++)e.bMarks[a+t]=y[a],e.tShift[a+t]=w[a],e.sCount[a+t]=_[a],e.bsCount[a+t]=v[a];return e.blkIndent=A,!0},T6=ne.isSpace,$6=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(i=e.src.charCodeAt(l++),i!==42&&i!==45&&i!==95))return!1;for(o=1;l<u;){if(a=e.src.charCodeAt(l++),a!==i&&!T6(a))return!1;a===i&&o++}return o<3?!1:(s||(e.line=t+1,c=e.push("hr","hr",0),c.map=[t,e.line],c.markup=Array(o+1).join(String.fromCharCode(i))),!0)},ic=ne.isSpace;function qo(n,e){var t,r,s,i;return r=n.bMarks[e]+n.tShift[e],s=n.eMarks[e],t=n.src.charCodeAt(r++),t!==42&&t!==45&&t!==43||r<s&&(i=n.src.charCodeAt(r),!ic(i))?-1:r}function Fo(n,e){var t,r=n.bMarks[e]+n.tShift[e],s=r,i=n.eMarks[e];if(s+1>=i||(t=n.src.charCodeAt(s++),t<48||t>57))return-1;for(;;){if(s>=i)return-1;if(t=n.src.charCodeAt(s++),t>=48&&t<=57){if(s-r>=10)return-1;continue}if(t===41||t===46)break;return-1}return s<i&&(t=n.src.charCodeAt(s),!ic(t))?-1:s}function R6(n,e){var t,r,s=n.level+2;for(t=e+2,r=n.tokens.length-2;t<r;t++)n.tokens[t].level===s&&n.tokens[t].type==="paragraph_open"&&(n.tokens[t+2].hidden=!0,n.tokens[t].hidden=!0,t+=2)}var D6=function(e,t,r,s){var i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x,B,G,j,D,X,ue,O,b,S,f,m=!1,E=!0;if(e.sCount[t]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[t]-e.listIndent>=4&&e.sCount[t]<e.blkIndent)return!1;if(s&&e.parentType==="paragraph"&&e.sCount[t]>=e.blkIndent&&(m=!0),(X=Fo(e,t))>=0){if(h=!0,O=e.bMarks[t]+e.tShift[t],k=Number(e.src.slice(O,X-1)),m&&k!==1)return!1}else if((X=qo(e,t))>=0)h=!1;else return!1;if(m&&e.skipSpaces(X)>=e.eMarks[t])return!1;if(A=e.src.charCodeAt(X-1),s)return!0;for(v=e.tokens.length,h?(f=e.push("ordered_list_open","ol",1),k!==1&&(f.attrs=[["start",k]])):f=e.push("bullet_list_open","ul",1),f.map=y=[t,0],f.markup=String.fromCharCode(A),w=t,ue=!1,S=e.md.block.ruler.getRules("list"),x=e.parentType,e.parentType="list";w<r;){for(D=X,_=e.eMarks[w],u=R=e.sCount[w]+X-(e.bMarks[t]+e.tShift[t]);D<_;){if(i=e.src.charCodeAt(D),i===9)R+=4-(R+e.bsCount[w])%4;else if(i===32)R++;else break;D++}if(o=D,o>=_?l=1:l=R-u,l>4&&(l=1),c=u+l,f=e.push("list_item_open","li",1),f.markup=String.fromCharCode(A),f.map=p=[t,0],h&&(f.info=e.src.slice(O,X-1)),j=e.tight,G=e.tShift[t],B=e.sCount[t],$=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=c,e.tight=!0,e.tShift[t]=o-e.bMarks[t],e.sCount[t]=R,o>=_&&e.isEmpty(t+1)?e.line=Math.min(e.line+2,r):e.md.block.tokenize(e,t,r,!0),(!e.tight||ue)&&(E=!1),ue=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=$,e.tShift[t]=G,e.sCount[t]=B,e.tight=j,f=e.push("list_item_close","li",-1),f.markup=String.fromCharCode(A),w=t=e.line,p[1]=w,o=e.bMarks[t],w>=r||e.sCount[w]<e.blkIndent||e.sCount[t]-e.blkIndent>=4)break;for(b=!1,a=0,d=S.length;a<d;a++)if(S[a](e,w,r,!0)){b=!0;break}if(b)break;if(h){if(X=Fo(e,w),X<0)break;O=e.bMarks[w]+e.tShift[w]}else if(X=qo(e,w),X<0)break;if(A!==e.src.charCodeAt(X-1))break}return h?f=e.push("ordered_list_close","ol",-1):f=e.push("bullet_list_close","ul",-1),f.markup=String.fromCharCode(A),y[1]=w,e.line=w,e.parentType=x,E&&R6(e,v),!0},L6=ne.normalizeReference,or=ne.isSpace,M6=function(e,t,r,s){var i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$=0,x=e.bMarks[t]+e.tShift[t],B=e.eMarks[t],G=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(x)!==91)return!1;for(;++x<B;)if(e.src.charCodeAt(x)===93&&e.src.charCodeAt(x-1)!==92){if(x+1===B||e.src.charCodeAt(x+1)!==58)return!1;break}for(c=e.lineMax,w=e.md.block.ruler.getRules("reference"),y=e.parentType,e.parentType="reference";G<c&&!e.isEmpty(G);G++)if(!(e.sCount[G]-e.blkIndent>3)&&!(e.sCount[G]<0)){for(_=!1,u=0,h=w.length;u<h;u++)if(w[u](e,G,c,!0)){_=!0;break}if(_)break}for(k=e.getLines(t,G,e.blkIndent,!1).trim(),B=k.length,x=1;x<B;x++){if(i=k.charCodeAt(x),i===91)return!1;if(i===93){d=x;break}else i===10?$++:i===92&&(x++,x<B&&k.charCodeAt(x)===10&&$++)}if(d<0||k.charCodeAt(d+1)!==58)return!1;for(x=d+2;x<B;x++)if(i=k.charCodeAt(x),i===10)$++;else if(!or(i))break;if(v=e.md.helpers.parseLinkDestination(k,x,B),!v.ok||(l=e.md.normalizeLink(v.str),!e.md.validateLink(l)))return!1;for(x=v.pos,$+=v.lines,o=x,a=$,A=x;x<B;x++)if(i=k.charCodeAt(x),i===10)$++;else if(!or(i))break;for(v=e.md.helpers.parseLinkTitle(k,x,B),x<B&&A!==x&&v.ok?(R=v.str,x=v.pos,$+=v.lines):(R="",x=o,$=a);x<B&&(i=k.charCodeAt(x),!!or(i));)x++;if(x<B&&k.charCodeAt(x)!==10&&R)for(R="",x=o,$=a;x<B&&(i=k.charCodeAt(x),!!or(i));)x++;return x<B&&k.charCodeAt(x)!==10||(p=L6(k.slice(1,d)),!p)?!1:(s||(typeof e.env.references=="undefined"&&(e.env.references={}),typeof e.env.references[p]=="undefined"&&(e.env.references[p]={title:R,href:l}),e.parentType=y,e.line=t+$+1),!0)},O6=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],qr={},N6="[a-zA-Z_:][a-zA-Z0-9:._-]*",I6="[^\"'=<>`\\x00-\\x20]+",P6="'[^']*'",q6='"[^"]*"',F6="(?:"+I6+"|"+P6+"|"+q6+")",B6="(?:\\s+"+N6+"(?:\\s*=\\s*"+F6+")?)",oc="<[A-Za-z][A-Za-z0-9\\-]*"+B6+"*\\s*\\/?>",ac="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",z6="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",H6="<[?][\\s\\S]*?[?]>",U6="<![A-Z]+\\s+[^>]*>",j6="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",V6=new RegExp("^(?:"+oc+"|"+ac+"|"+z6+"|"+H6+"|"+U6+"|"+j6+")"),G6=new RegExp("^(?:"+oc+"|"+ac+")");qr.HTML_TAG_RE=V6;qr.HTML_OPEN_CLOSE_TAG_RE=G6;var W6=O6,Z6=qr.HTML_OPEN_CLOSE_TAG_RE,Zt=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+W6.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Z6.source+"\\s*$"),/^$/,!1]],K6=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(l)!==60)return!1;for(c=e.src.slice(l,u),i=0;i<Zt.length&&!Zt[i][0].test(c);i++);if(i===Zt.length)return!1;if(s)return Zt[i][2];if(o=t+1,!Zt[i][1].test(c)){for(;o<r&&!(e.sCount[o]<e.blkIndent);o++)if(l=e.bMarks[o]+e.tShift[o],u=e.eMarks[o],c=e.src.slice(l,u),Zt[i][1].test(c)){c.length!==0&&o++;break}}return e.line=o,a=e.push("html_block","",0),a.map=[t,o],a.content=e.getLines(t,o,e.blkIndent,!0),!0},Bo=ne.isSpace,Y6=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(i=e.src.charCodeAt(l),i!==35||l>=u))return!1;for(o=1,i=e.src.charCodeAt(++l);i===35&&l<u&&o<=6;)o++,i=e.src.charCodeAt(++l);return o>6||l<u&&!Bo(i)?!1:(s||(u=e.skipSpacesBack(u,l),a=e.skipCharsBack(u,35,l),a>l&&Bo(e.src.charCodeAt(a-1))&&(u=a),e.line=t+1,c=e.push("heading_open","h"+String(o),1),c.markup="########".slice(0,o),c.map=[t,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[t,e.line],c.children=[],c=e.push("heading_close","h"+String(o),-1),c.markup="########".slice(0,o)),!0)},X6=function(e,t,r){var s,i,o,a,c,l,u,h,p,d=t+1,y,v=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(y=e.parentType,e.parentType="paragraph";d<r&&!e.isEmpty(d);d++)if(!(e.sCount[d]-e.blkIndent>3)){if(e.sCount[d]>=e.blkIndent&&(l=e.bMarks[d]+e.tShift[d],u=e.eMarks[d],l<u&&(p=e.src.charCodeAt(l),(p===45||p===61)&&(l=e.skipChars(l,p),l=e.skipSpaces(l),l>=u)))){h=p===61?1:2;break}if(!(e.sCount[d]<0)){for(i=!1,o=0,a=v.length;o<a;o++)if(v[o](e,d,r,!0)){i=!0;break}if(i)break}}return h?(s=e.getLines(t,d,e.blkIndent,!1).trim(),e.line=d+1,c=e.push("heading_open","h"+String(h),1),c.markup=String.fromCharCode(p),c.map=[t,e.line],c=e.push("inline","",0),c.content=s,c.map=[t,e.line-1],c.children=[],c=e.push("heading_close","h"+String(h),-1),c.markup=String.fromCharCode(p),e.parentType=y,!0):!1},J6=function(e,t){var r,s,i,o,a,c,l=t+1,u=e.md.block.ruler.getRules("paragraph"),h=e.lineMax;for(c=e.parentType,e.parentType="paragraph";l<h&&!e.isEmpty(l);l++)if(!(e.sCount[l]-e.blkIndent>3)&&!(e.sCount[l]<0)){for(s=!1,i=0,o=u.length;i<o;i++)if(u[i](e,l,h,!0)){s=!0;break}if(s)break}return r=e.getLines(t,l,e.blkIndent,!1).trim(),e.line=l,a=e.push("paragraph_open","p",1),a.map=[t,e.line],a=e.push("inline","",0),a.content=r,a.map=[t,e.line],a.children=[],a=e.push("paragraph_close","p",-1),e.parentType=c,!0},cc=li,Fr=ne.isSpace;function rt(n,e,t,r){var s,i,o,a,c,l,u,h;for(this.src=n,this.md=e,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,h=!1,o=a=l=u=0,c=i.length;a<c;a++){if(s=i.charCodeAt(a),!h)if(Fr(s)){l++,s===9?u+=4-u%4:u++;continue}else h=!0;(s===10||a===c-1)&&(s!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),h=!1,l=0,u=0,o=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}rt.prototype.push=function(n,e,t){var r=new cc(n,e,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};rt.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};rt.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};rt.prototype.skipSpaces=function(e){for(var t,r=this.src.length;e<r&&(t=this.src.charCodeAt(e),!!Fr(t));e++);return e};rt.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!Fr(this.src.charCodeAt(--e)))return e+1;return e};rt.prototype.skipChars=function(e,t){for(var r=this.src.length;e<r&&this.src.charCodeAt(e)===t;e++);return e};rt.prototype.skipCharsBack=function(e,t,r){if(e<=r)return e;for(;e>r;)if(t!==this.src.charCodeAt(--e))return e+1;return e};rt.prototype.getLines=function(e,t,r,s){var i,o,a,c,l,u,h,p=e;if(e>=t)return"";for(u=new Array(t-e),i=0;p<t;p++,i++){for(o=0,h=c=this.bMarks[p],p+1<t||s?l=this.eMarks[p]+1:l=this.eMarks[p];c<l&&o<r;){if(a=this.src.charCodeAt(c),Fr(a))a===9?o+=4-(o+this.bsCount[p])%4:o++;else if(c-h<this.tShift[p])o++;else break;c++}o>r?u[i]=new Array(o-r+1).join(" ")+this.src.slice(c,l):u[i]=this.src.slice(c,l)}return u.join("")};rt.prototype.Token=cc;var Q6=rt,e7=ci,ar=[["table",E6,["paragraph","reference"]],["code",A6],["fence",S6,["paragraph","reference","blockquote","list"]],["blockquote",C6,["paragraph","reference","blockquote","list"]],["hr",$6,["paragraph","reference","blockquote","list"]],["list",D6,["paragraph","reference","blockquote"]],["reference",M6],["html_block",K6,["paragraph","reference","blockquote"]],["heading",Y6,["paragraph","reference","blockquote"]],["lheading",X6],["paragraph",J6]];function Br(){this.ruler=new e7;for(var n=0;n<ar.length;n++)this.ruler.push(ar[n][0],ar[n][1],{alt:(ar[n][2]||[]).slice()})}Br.prototype.tokenize=function(n,e,t){for(var r,s,i=this.ruler.getRules(""),o=i.length,a=e,c=!1,l=n.md.options.maxNesting;a<t&&(n.line=a=n.skipEmptyLines(a),!(a>=t||n.sCount[a]<n.blkIndent));){if(n.level>=l){n.line=t;break}for(s=0;s<o&&(r=i[s](n,a,t,!1),!r);s++);n.tight=!c,n.isEmpty(n.line-1)&&(c=!0),a=n.line,a<t&&n.isEmpty(a)&&(c=!0,a++,n.line=a)}};Br.prototype.parse=function(n,e,t,r){var s;!n||(s=new this.State(n,e,t,r),this.tokenize(s,s.line,s.lineMax))};Br.prototype.State=Q6;var t7=Br;function n7(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var r7=function(e,t){for(var r=e.pos;r<e.posMax&&!n7(e.src.charCodeAt(r));)r++;return r===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,r)),e.pos=r,!0)},s7=ne.isSpace,i7=function(e,t){var r,s,i,o=e.pos;if(e.src.charCodeAt(o)!==10)return!1;if(r=e.pending.length-1,s=e.posMax,!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){for(i=r-1;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(o++;o<s&&s7(e.src.charCodeAt(o));)o++;return e.pos=o,!0},o7=ne.isSpace,hi=[];for(var zo=0;zo<256;zo++)hi.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){hi[n.charCodeAt(0)]=1});var a7=function(e,t){var r,s=e.pos,i=e.posMax;if(e.src.charCodeAt(s)!==92)return!1;if(s++,s<i){if(r=e.src.charCodeAt(s),r<256&&hi[r]!==0)return t||(e.pending+=e.src[s]),e.pos+=2,!0;if(r===10){for(t||e.push("hardbreak","br",0),s++;s<i&&(r=e.src.charCodeAt(s),!!o7(r));)s++;return e.pos=s,!0}}return t||(e.pending+="\\"),e.pos++,!0},c7=function(e,t){var r,s,i,o,a,c,l,u,h=e.pos,p=e.src.charCodeAt(h);if(p!==96)return!1;for(r=h,h++,s=e.posMax;h<s&&e.src.charCodeAt(h)===96;)h++;if(i=e.src.slice(r,h),l=i.length,e.backticksScanned&&(e.backticks[l]||0)<=r)return t||(e.pending+=i),e.pos+=l,!0;for(a=c=h;(a=e.src.indexOf("`",c))!==-1;){for(c=a+1;c<s&&e.src.charCodeAt(c)===96;)c++;if(u=c-a,u===l)return t||(o=e.push("code_inline","code",0),o.markup=i,o.content=e.src.slice(h,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=c,!0;e.backticks[u]=a}return e.backticksScanned=!0,t||(e.pending+=i),e.pos+=l,!0},zr={};zr.tokenize=function(e,t){var r,s,i,o,a,c=e.pos,l=e.src.charCodeAt(c);if(t||l!==126||(s=e.scanDelims(e.pos,!0),o=s.length,a=String.fromCharCode(l),o<2))return!1;for(o%2&&(i=e.push("text","",0),i.content=a,o--),r=0;r<o;r+=2)i=e.push("text","",0),i.content=a+a,e.delimiters.push({marker:l,length:0,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0};function Ho(n,e){var t,r,s,i,o,a=[],c=e.length;for(t=0;t<c;t++)s=e[t],s.marker===126&&s.end!==-1&&(i=e[s.end],o=n.tokens[s.token],o.type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",o=n.tokens[i.token],o.type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="",n.tokens[i.token-1].type==="text"&&n.tokens[i.token-1].content==="~"&&a.push(i.token-1));for(;a.length;){for(t=a.pop(),r=t+1;r<n.tokens.length&&n.tokens[r].type==="s_close";)r++;r--,t!==r&&(o=n.tokens[r],n.tokens[r]=n.tokens[t],n.tokens[t]=o)}}zr.postProcess=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(Ho(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&Ho(e,r[t].delimiters)};var Hr={};Hr.tokenize=function(e,t){var r,s,i,o=e.pos,a=e.src.charCodeAt(o);if(t||a!==95&&a!==42)return!1;for(s=e.scanDelims(e.pos,a===42),r=0;r<s.length;r++)i=e.push("text","",0),i.content=String.fromCharCode(a),e.delimiters.push({marker:a,length:s.length,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0};function Uo(n,e){var t,r,s,i,o,a,c=e.length;for(t=c-1;t>=0;t--)r=e[t],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(s=e[r.end],a=t>0&&e[t-1].end===r.end+1&&e[t-1].marker===r.marker&&e[t-1].token===r.token-1&&e[r.end+1].token===s.token+1,o=String.fromCharCode(r.marker),i=n.tokens[r.token],i.type=a?"strong_open":"em_open",i.tag=a?"strong":"em",i.nesting=1,i.markup=a?o+o:o,i.content="",i=n.tokens[s.token],i.type=a?"strong_close":"em_close",i.tag=a?"strong":"em",i.nesting=-1,i.markup=a?o+o:o,i.content="",a&&(n.tokens[e[t-1].token].content="",n.tokens[e[r.end+1].token].content="",t--))}Hr.postProcess=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(Uo(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&Uo(e,r[t].delimiters)};var l7=ne.normalizeReference,fs=ne.isSpace,u7=function(e,t){var r,s,i,o,a,c,l,u,h,p="",d="",y=e.pos,v=e.posMax,A=e.pos,k=!0;if(e.src.charCodeAt(e.pos)!==91||(a=e.pos+1,o=e.md.helpers.parseLinkLabel(e,e.pos,!0),o<0))return!1;if(c=o+1,c<v&&e.src.charCodeAt(c)===40){for(k=!1,c++;c<v&&(s=e.src.charCodeAt(c),!(!fs(s)&&s!==10));c++);if(c>=v)return!1;if(A=c,l=e.md.helpers.parseLinkDestination(e.src,c,e.posMax),l.ok){for(p=e.md.normalizeLink(l.str),e.md.validateLink(p)?c=l.pos:p="",A=c;c<v&&(s=e.src.charCodeAt(c),!(!fs(s)&&s!==10));c++);if(l=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<v&&A!==c&&l.ok)for(d=l.str,c=l.pos;c<v&&(s=e.src.charCodeAt(c),!(!fs(s)&&s!==10));c++);}(c>=v||e.src.charCodeAt(c)!==41)&&(k=!0),c++}if(k){if(typeof e.env.references=="undefined")return!1;if(c<v&&e.src.charCodeAt(c)===91?(A=c+1,c=e.md.helpers.parseLinkLabel(e,c),c>=0?i=e.src.slice(A,c++):c=o+1):c=o+1,i||(i=e.src.slice(a,o)),u=e.env.references[l7(i)],!u)return e.pos=y,!1;p=u.href,d=u.title}return t||(e.pos=a,e.posMax=o,h=e.push("link_open","a",1),h.attrs=r=[["href",p]],d&&r.push(["title",d]),e.md.inline.tokenize(e),h=e.push("link_close","a",-1)),e.pos=c,e.posMax=v,!0},h7=ne.normalizeReference,ms=ne.isSpace,d7=function(e,t){var r,s,i,o,a,c,l,u,h,p,d,y,v,A="",k=e.pos,_=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(c=e.pos+2,a=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),a<0))return!1;if(l=a+1,l<_&&e.src.charCodeAt(l)===40){for(l++;l<_&&(s=e.src.charCodeAt(l),!(!ms(s)&&s!==10));l++);if(l>=_)return!1;for(v=l,h=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),h.ok&&(A=e.md.normalizeLink(h.str),e.md.validateLink(A)?l=h.pos:A=""),v=l;l<_&&(s=e.src.charCodeAt(l),!(!ms(s)&&s!==10));l++);if(h=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<_&&v!==l&&h.ok)for(p=h.str,l=h.pos;l<_&&(s=e.src.charCodeAt(l),!(!ms(s)&&s!==10));l++);else p="";if(l>=_||e.src.charCodeAt(l)!==41)return e.pos=k,!1;l++}else{if(typeof e.env.references=="undefined")return!1;if(l<_&&e.src.charCodeAt(l)===91?(v=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?o=e.src.slice(v,l++):l=a+1):l=a+1,o||(o=e.src.slice(c,a)),u=e.env.references[h7(o)],!u)return e.pos=k,!1;A=u.href,p=u.title}return t||(i=e.src.slice(c,a),e.md.inline.parse(i,e.md,e.env,y=[]),d=e.push("image","img",0),d.attrs=r=[["src",A],["alt",""]],d.children=y,d.content=i,p&&r.push(["title",p])),e.pos=l,e.posMax=_,!0},p7=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,f7=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,m7=function(e,t){var r,s,i,o,a,c,l=e.pos;if(e.src.charCodeAt(l)!==60)return!1;for(a=e.pos,c=e.posMax;;){if(++l>=c||(o=e.src.charCodeAt(l),o===60))return!1;if(o===62)break}return r=e.src.slice(a+1,l),f7.test(r)?(s=e.md.normalizeLink(r),e.md.validateLink(s)?(t||(i=e.push("link_open","a",1),i.attrs=[["href",s]],i.markup="autolink",i.info="auto",i=e.push("text","",0),i.content=e.md.normalizeLinkText(r),i=e.push("link_close","a",-1),i.markup="autolink",i.info="auto"),e.pos+=r.length+2,!0):!1):p7.test(r)?(s=e.md.normalizeLink("mailto:"+r),e.md.validateLink(s)?(t||(i=e.push("link_open","a",1),i.attrs=[["href",s]],i.markup="autolink",i.info="auto",i=e.push("text","",0),i.content=e.md.normalizeLinkText(r),i=e.push("link_close","a",-1),i.markup="autolink",i.info="auto"),e.pos+=r.length+2,!0):!1):!1},g7=qr.HTML_TAG_RE;function b7(n){var e=n|32;return e>=97&&e<=122}var v7=function(e,t){var r,s,i,o,a=e.pos;return!e.md.options.html||(i=e.posMax,e.src.charCodeAt(a)!==60||a+2>=i)||(r=e.src.charCodeAt(a+1),r!==33&&r!==63&&r!==47&&!b7(r))||(s=e.src.slice(a).match(g7),!s)?!1:(t||(o=e.push("html_inline","",0),o.content=e.src.slice(a,a+s[0].length)),e.pos+=s[0].length,!0)},jo=Qa,y7=ne.has,_7=ne.isValidEntityCode,Vo=ne.fromCodePoint,w7=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,k7=/^&([a-z][a-z0-9]{1,31});/i,x7=function(e,t){var r,s,i,o=e.pos,a=e.posMax;if(e.src.charCodeAt(o)!==38)return!1;if(o+1<a){if(r=e.src.charCodeAt(o+1),r===35){if(i=e.src.slice(o).match(w7),i)return t||(s=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),e.pending+=_7(s)?Vo(s):Vo(65533)),e.pos+=i[0].length,!0}else if(i=e.src.slice(o).match(k7),i&&y7(jo,i[1]))return t||(e.pending+=jo[i[1]]),e.pos+=i[0].length,!0}return t||(e.pending+="&"),e.pos++,!0};function Go(n,e){var t,r,s,i,o,a,c,l,u={},h=e.length;if(!!h){var p=0,d=-2,y=[];for(t=0;t<h;t++)if(s=e[t],y.push(0),(e[p].marker!==s.marker||d!==s.token-1)&&(p=t),d=s.token,s.length=s.length||0,!!s.close){for(u.hasOwnProperty(s.marker)||(u[s.marker]=[-1,-1,-1,-1,-1,-1]),o=u[s.marker][(s.open?3:0)+s.length%3],r=p-y[p]-1,a=r;r>o;r-=y[r]+1)if(i=e[r],i.marker===s.marker&&i.open&&i.end<0&&(c=!1,(i.close||s.open)&&(i.length+s.length)%3===0&&(i.length%3!==0||s.length%3!==0)&&(c=!0),!c)){l=r>0&&!e[r-1].open?y[r-1]+1:0,y[t]=t-r+l,y[r]=l,s.open=!1,i.end=t,i.close=!1,a=-1,d=-2;break}a!==-1&&(u[s.marker][(s.open?3:0)+(s.length||0)%3]=a)}}}var E7=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(Go(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&Go(e,r[t].delimiters)},A7=function(e){var t,r,s=0,i=e.tokens,o=e.tokens.length;for(t=r=0;t<o;t++)i[t].nesting<0&&s--,i[t].level=s,i[t].nesting>0&&s++,i[t].type==="text"&&t+1<o&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==r&&(i[r]=i[t]),r++);t!==r&&(i.length=r)},di=li,Wo=ne.isWhiteSpace,Zo=ne.isPunctChar,Ko=ne.isMdAsciiPunct;function jn(n,e,t,r){this.src=n,this.env=t,this.md=e,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}jn.prototype.pushPending=function(){var n=new di("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};jn.prototype.push=function(n,e,t){this.pending&&this.pushPending();var r=new di(n,e,t),s=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(s),r};jn.prototype.scanDelims=function(n,e){var t=n,r,s,i,o,a,c,l,u,h,p=!0,d=!0,y=this.posMax,v=this.src.charCodeAt(n);for(r=n>0?this.src.charCodeAt(n-1):32;t<y&&this.src.charCodeAt(t)===v;)t++;return i=t-n,s=t<y?this.src.charCodeAt(t):32,l=Ko(r)||Zo(String.fromCharCode(r)),h=Ko(s)||Zo(String.fromCharCode(s)),c=Wo(r),u=Wo(s),u?p=!1:h&&(c||l||(p=!1)),c?d=!1:l&&(u||h||(d=!1)),e?(o=p,a=d):(o=p&&(!d||l),a=d&&(!p||h)),{can_open:o,can_close:a,length:i}};jn.prototype.Token=di;var S7=jn,Yo=ci,gs=[["text",r7],["newline",i7],["escape",a7],["backticks",c7],["strikethrough",zr.tokenize],["emphasis",Hr.tokenize],["link",u7],["image",d7],["autolink",m7],["html_inline",v7],["entity",x7]],bs=[["balance_pairs",E7],["strikethrough",zr.postProcess],["emphasis",Hr.postProcess],["text_collapse",A7]];function Vn(){var n;for(this.ruler=new Yo,n=0;n<gs.length;n++)this.ruler.push(gs[n][0],gs[n][1]);for(this.ruler2=new Yo,n=0;n<bs.length;n++)this.ruler2.push(bs[n][0],bs[n][1])}Vn.prototype.skipToken=function(n){var e,t,r=n.pos,s=this.ruler.getRules(""),i=s.length,o=n.md.options.maxNesting,a=n.cache;if(typeof a[r]!="undefined"){n.pos=a[r];return}if(n.level<o)for(t=0;t<i&&(n.level++,e=s[t](n,!0),n.level--,!e);t++);else n.pos=n.posMax;e||n.pos++,a[r]=n.pos};Vn.prototype.tokenize=function(n){for(var e,t,r=this.ruler.getRules(""),s=r.length,i=n.posMax,o=n.md.options.maxNesting;n.pos<i;){if(n.level<o)for(t=0;t<s&&(e=r[t](n,!1),!e);t++);if(e){if(n.pos>=i)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};Vn.prototype.parse=function(n,e,t,r){var s,i,o,a=new this.State(n,e,t,r);for(this.tokenize(a),i=this.ruler2.getRules(""),o=i.length,s=0;s<o;s++)i[s](a)};Vn.prototype.State=S7;var C7=Vn,T7=function(n){var e={};e.src_Any=ec.source,e.src_Cc=tc.source,e.src_Z=nc.source,e.src_P=ai.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var t="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+t+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+t+"|"+e.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]).|"+(n&&n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+").|;(?!"+e.src_ZCc+").|\\!+(?!"+e.src_ZCc+"|[!]).|\\?(?!"+e.src_ZCc+"|[?]).)+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e};function Ds(n){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(t){!t||Object.keys(t).forEach(function(r){n[r]=t[r]})}),n}function Ur(n){return Object.prototype.toString.call(n)}function $7(n){return Ur(n)==="[object String]"}function R7(n){return Ur(n)==="[object Object]"}function D7(n){return Ur(n)==="[object RegExp]"}function Xo(n){return Ur(n)==="[object Function]"}function L7(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var lc={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function M7(n){return Object.keys(n||{}).reduce(function(e,t){return e||lc.hasOwnProperty(t)},!1)}var O7={"http:":{validate:function(n,e,t){var r=n.slice(e);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,t){var r=n.slice(e);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,t){var r=n.slice(e);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},N7="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",I7="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function P7(n){n.__index__=-1,n.__text_cache__=""}function q7(n){return function(e,t){var r=e.slice(t);return n.test(r)?r.match(n)[0].length:0}}function Jo(){return function(n,e){e.normalize(n)}}function wr(n){var e=n.re=T7(n.__opts__),t=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||t.push(N7),t.push(e.src_xn),e.src_tlds=t.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];n.__compiled__={};function i(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(n.__schemas__).forEach(function(a){var c=n.__schemas__[a];if(c!==null){var l={validate:null,link:null};if(n.__compiled__[a]=l,R7(c)){D7(c.validate)?l.validate=q7(c.validate):Xo(c.validate)?l.validate=c.validate:i(a,c),Xo(c.normalize)?l.normalize=c.normalize:c.normalize?i(a,c):l.normalize=Jo();return}if($7(c)){s.push(a);return}i(a,c)}}),s.forEach(function(a){!n.__compiled__[n.__schemas__[a]]||(n.__compiled__[a].validate=n.__compiled__[n.__schemas__[a]].validate,n.__compiled__[a].normalize=n.__compiled__[n.__schemas__[a]].normalize)}),n.__compiled__[""]={validate:null,normalize:Jo()};var o=Object.keys(n.__compiled__).filter(function(a){return a.length>0&&n.__compiled__[a]}).map(L7).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","ig"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),P7(n)}function F7(n,e){var t=n.__index__,r=n.__last_index__,s=n.__text_cache__.slice(t,r);this.schema=n.__schema__.toLowerCase(),this.index=t+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function Qo(n,e){var t=new F7(n,e);return n.__compiled__[t.schema].normalize(t,n),t}function Be(n,e){if(!(this instanceof Be))return new Be(n,e);e||M7(n)&&(e=n,n={}),this.__opts__=Ds({},lc,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Ds({},O7,n),this.__compiled__={},this.__tlds__=I7,this.__tlds_replaced__=!1,this.re={},wr(this)}Be.prototype.add=function(e,t){return this.__schemas__[e]=t,wr(this),this};Be.prototype.set=function(e){return this.__opts__=Ds(this.__opts__,e),this};Be.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var t,r,s,i,o,a,c,l,u;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(e))!==null;)if(i=this.testSchemaAt(e,t[2],c.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,a=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};Be.prototype.pretest=function(e){return this.re.pretest.test(e)};Be.prototype.testSchemaAt=function(e,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,r,this):0};Be.prototype.match=function(e){var t=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(Qo(this,t)),t=this.__last_index__);for(var s=t?e.slice(t):e;this.test(s);)r.push(Qo(this,t)),s=s.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};Be.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),wr(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,wr(this),this)};Be.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Be.prototype.onCompile=function(){};var B7=Be;const en=2147483647,Qe=36,pi=1,Dn=26,z7=38,H7=700,uc=72,hc=128,dc="-",U7=/^xn--/,j7=/[^\0-\x7E]/,V7=/[\x2E\u3002\uFF0E\uFF61]/g,G7={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},vs=Qe-pi,et=Math.floor,ys=String.fromCharCode;function Lt(n){throw new RangeError(G7[n])}function W7(n,e){const t=[];let r=n.length;for(;r--;)t[r]=e(n[r]);return t}function pc(n,e){const t=n.split("@");let r="";t.length>1&&(r=t[0]+"@",n=t[1]),n=n.replace(V7,".");const s=n.split("."),i=W7(s,e).join(".");return r+i}function fi(n){const e=[];let t=0;const r=n.length;for(;t<r;){const s=n.charCodeAt(t++);if(s>=55296&&s<=56319&&t<r){const i=n.charCodeAt(t++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),t--)}else e.push(s)}return e}const fc=n=>String.fromCodePoint(...n),Z7=function(n){return n-48<10?n-22:n-65<26?n-65:n-97<26?n-97:Qe},ea=function(n,e){return n+22+75*(n<26)-((e!=0)<<5)},mc=function(n,e,t){let r=0;for(n=t?et(n/H7):n>>1,n+=et(n/e);n>vs*Dn>>1;r+=Qe)n=et(n/vs);return et(r+(vs+1)*n/(n+z7))},mi=function(n){const e=[],t=n.length;let r=0,s=hc,i=uc,o=n.lastIndexOf(dc);o<0&&(o=0);for(let a=0;a<o;++a)n.charCodeAt(a)>=128&&Lt("not-basic"),e.push(n.charCodeAt(a));for(let a=o>0?o+1:0;a<t;){let c=r;for(let u=1,h=Qe;;h+=Qe){a>=t&&Lt("invalid-input");const p=Z7(n.charCodeAt(a++));(p>=Qe||p>et((en-r)/u))&&Lt("overflow"),r+=p*u;const d=h<=i?pi:h>=i+Dn?Dn:h-i;if(p<d)break;const y=Qe-d;u>et(en/y)&&Lt("overflow"),u*=y}const l=e.length+1;i=mc(r-c,l,c==0),et(r/l)>en-s&&Lt("overflow"),s+=et(r/l),r%=l,e.splice(r++,0,s)}return String.fromCodePoint(...e)},gi=function(n){const e=[];n=fi(n);let t=n.length,r=hc,s=0,i=uc;for(const c of n)c<128&&e.push(ys(c));let o=e.length,a=o;for(o&&e.push(dc);a<t;){let c=en;for(const u of n)u>=r&&u<c&&(c=u);const l=a+1;c-r>et((en-s)/l)&&Lt("overflow"),s+=(c-r)*l,r=c;for(const u of n)if(u<r&&++s>en&&Lt("overflow"),u==r){let h=s;for(let p=Qe;;p+=Qe){const d=p<=i?pi:p>=i+Dn?Dn:p-i;if(h<d)break;const y=h-d,v=Qe-d;e.push(ys(ea(d+y%v,0))),h=et(y/v)}e.push(ys(ea(h,0))),i=mc(s,l,a==o),s=0,++a}++s,++r}return e.join("")},gc=function(n){return pc(n,function(e){return U7.test(e)?mi(e.slice(4).toLowerCase()):e})},bc=function(n){return pc(n,function(e){return j7.test(e)?"xn--"+gi(e):e})},K7={version:"2.1.0",ucs2:{decode:fi,encode:fc},decode:mi,encode:gi,toASCII:bc,toUnicode:gc};var Y7=Object.freeze(Object.defineProperty({__proto__:null,ucs2decode:fi,ucs2encode:fc,decode:mi,encode:gi,toASCII:bc,toUnicode:gc,default:K7},Symbol.toStringTag,{value:"Module"})),X7=dd(Y7),J7={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Q7={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},eV={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}},Sn=ne,tV=Pr,nV=e6,rV=x6,sV=t7,iV=C7,oV=B7,Mt=dn,vc=X7,aV={default:J7,zero:Q7,commonmark:eV},cV=/^(vbscript|javascript|file|data):/,lV=/^data:image\/(gif|png|jpeg|webp);/;function uV(n){var e=n.trim().toLowerCase();return cV.test(e)?!!lV.test(e):!0}var yc=["http:","https:","mailto:"];function hV(n){var e=Mt.parse(n,!0);if(e.hostname&&(!e.protocol||yc.indexOf(e.protocol)>=0))try{e.hostname=vc.toASCII(e.hostname)}catch{}return Mt.encode(Mt.format(e))}function dV(n){var e=Mt.parse(n,!0);if(e.hostname&&(!e.protocol||yc.indexOf(e.protocol)>=0))try{e.hostname=vc.toUnicode(e.hostname)}catch{}return Mt.decode(Mt.format(e),Mt.decode.defaultChars+"%")}function ze(n,e){if(!(this instanceof ze))return new ze(n,e);e||Sn.isString(n)||(e=n||{},n="default"),this.inline=new iV,this.block=new sV,this.core=new rV,this.renderer=new nV,this.linkify=new oV,this.validateLink=uV,this.normalizeLink=hV,this.normalizeLinkText=dV,this.utils=Sn,this.helpers=Sn.assign({},tV),this.options={},this.configure(n),e&&this.set(e)}ze.prototype.set=function(n){return Sn.assign(this.options,n),this};ze.prototype.configure=function(n){var e=this,t;if(Sn.isString(n)&&(t=n,n=aV[t],!n))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(r){n.components[r].rules&&e[r].ruler.enableOnly(n.components[r].rules),n.components[r].rules2&&e[r].ruler2.enableOnly(n.components[r].rules2)}),this};ze.prototype.enable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(s){t=t.concat(this[s].ruler.enable(n,!0))},this),t=t.concat(this.inline.ruler2.enable(n,!0));var r=n.filter(function(s){return t.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};ze.prototype.disable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(s){t=t.concat(this[s].ruler.disable(n,!0))},this),t=t.concat(this.inline.ruler2.disable(n,!0));var r=n.filter(function(s){return t.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};ze.prototype.use=function(n){var e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};ze.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");var t=new this.core.State(n,this,e);return this.core.process(t),t.tokens};ze.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};ze.prototype.parseInline=function(n,e){var t=new this.core.State(n,this,e);return t.inlineMode=!0,this.core.process(t),t.tokens};ze.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};var pV=ze,fV=pV,bi={exports:{}};function vi(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var t=n[e];typeof t=="object"&&!Object.isFrozen(t)&&vi(t)}),n}bi.exports=vi;bi.exports.default=vi;var mV=bi.exports;class ta{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function _c(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function yt(n,...e){const t=Object.create(null);for(const r in n)t[r]=n[r];return e.forEach(function(r){for(const s in r)t[s]=r[s]}),t}const gV="</span>",na=n=>!!n.kind,bV=(n,{prefix:e})=>{if(n.includes(".")){const t=n.split(".");return[`${e}${t.shift()}`,...t.map((r,s)=>`${r}${"_".repeat(s+1)}`)].join(" ")}return`${e}${n}`};class vV{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=_c(e)}openNode(e){if(!na(e))return;let t=e.kind;e.sublanguage?t=`language-${t}`:t=bV(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){!na(e)||(this.buffer+=gV)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class yi{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(r=>this._walk(e,r)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&(!e.children||(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{yi._collapse(t)})))}}class yV extends yi{constructor(e){super();this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const r=e.root;r.kind=t,r.sublanguage=!0,this.add(r)}toHTML(){return new vV(this,this.options).value()}finalize(){return!0}}function Ln(n){return n?typeof n=="string"?n:n.source:null}function wc(n){return zt("(?=",n,")")}function _V(n){return zt("(?:",n,")*")}function wV(n){return zt("(?:",n,")?")}function zt(...n){return n.map(t=>Ln(t)).join("")}function kV(n){const e=n[n.length-1];return typeof e=="object"&&e.constructor===Object?(n.splice(n.length-1,1),e):{}}function _i(...n){const e=kV(n);return"("+(e.capture?"":"?:")+n.map(r=>Ln(r)).join("|")+")"}function kc(n){return new RegExp(n.toString()+"|").exec("").length-1}function xV(n,e){const t=n&&n.exec(e);return t&&t.index===0}const EV=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function wi(n,{joinWith:e}){let t=0;return n.map(r=>{t+=1;const s=t;let i=Ln(r),o="";for(;i.length>0;){const a=EV.exec(i);if(!a){o+=i;break}o+=i.substring(0,a.index),i=i.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+s):(o+=a[0],a[0]==="("&&t++)}return o}).map(r=>`(${r})`).join(e)}const AV=/\b\B/,xc="[a-zA-Z]\\w*",ki="[a-zA-Z_]\\w*",Ec="\\b\\d+(\\.\\d+)?",Ac="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Sc="\\b(0b[01]+)",SV="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",CV=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=zt(e,/.*\b/,n.binary,/\b.*/)),yt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,r)=>{t.index!==0&&r.ignoreMatch()}},n)},Mn={begin:"\\\\[\\s\\S]",relevance:0},TV={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Mn]},$V={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Mn]},RV={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},jr=function(n,e,t={}){const r=yt({scope:"comment",begin:n,end:e,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=_i("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:zt(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},DV=jr("//","$"),LV=jr("/\\*","\\*/"),MV=jr("#","$"),OV={scope:"number",begin:Ec,relevance:0},NV={scope:"number",begin:Ac,relevance:0},IV={scope:"number",begin:Sc,relevance:0},PV={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Mn,{begin:/\[/,end:/\]/,relevance:0,contains:[Mn]}]}]},qV={scope:"title",begin:xc,relevance:0},FV={scope:"title",begin:ki,relevance:0},BV={begin:"\\.\\s*"+ki,relevance:0},zV=function(n){return Object.assign(n,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var cr=Object.freeze({__proto__:null,MATCH_NOTHING_RE:AV,IDENT_RE:xc,UNDERSCORE_IDENT_RE:ki,NUMBER_RE:Ec,C_NUMBER_RE:Ac,BINARY_NUMBER_RE:Sc,RE_STARTERS_RE:SV,SHEBANG:CV,BACKSLASH_ESCAPE:Mn,APOS_STRING_MODE:TV,QUOTE_STRING_MODE:$V,PHRASAL_WORDS_MODE:RV,COMMENT:jr,C_LINE_COMMENT_MODE:DV,C_BLOCK_COMMENT_MODE:LV,HASH_COMMENT_MODE:MV,NUMBER_MODE:OV,C_NUMBER_MODE:NV,BINARY_NUMBER_MODE:IV,REGEXP_MODE:PV,TITLE_MODE:qV,UNDERSCORE_TITLE_MODE:FV,METHOD_GUARD:BV,END_SAME_AS_BEGIN:zV});function HV(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function UV(n,e){n.className!==void 0&&(n.scope=n.className,delete n.className)}function jV(n,e){!e||!n.beginKeywords||(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=HV,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function VV(n,e){!Array.isArray(n.illegal)||(n.illegal=_i(...n.illegal))}function GV(n,e){if(!!n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function WV(n,e){n.relevance===void 0&&(n.relevance=1)}const ZV=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(r=>{delete n[r]}),n.keywords=t.keywords,n.begin=zt(t.beforeMatch,wc(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},KV=["of","and","for","in","not","or","if","then","parent","list","value"],YV="keyword";function Cc(n,e,t=YV){const r=Object.create(null);return typeof n=="string"?s(t,n.split(" ")):Array.isArray(n)?s(t,n):Object.keys(n).forEach(function(i){Object.assign(r,Cc(n[i],e,i))}),r;function s(i,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");r[c[0]]=[i,XV(c[0],c[1])]})}}function XV(n,e){return e?Number(e):JV(n)?0:1}function JV(n){return KV.includes(n.toLowerCase())}const ra={},Nt=n=>{console.error(n)},sa=(n,...e)=>{console.log(`WARN: ${n}`,...e)},Kt=(n,e)=>{ra[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),ra[`${n}/${e}`]=!0)},kr=new Error;function Tc(n,e,{key:t}){let r=0;const s=n[t],i={},o={};for(let a=1;a<=e.length;a++)o[a+r]=s[a],i[a+r]=!0,r+=kc(e[a-1]);n[t]=o,n[t]._emit=i,n[t]._multi=!0}function QV(n){if(!!Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw Nt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),kr;if(typeof n.beginScope!="object"||n.beginScope===null)throw Nt("beginScope must be object"),kr;Tc(n,n.begin,{key:"beginScope"}),n.begin=wi(n.begin,{joinWith:""})}}function e8(n){if(!!Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw Nt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),kr;if(typeof n.endScope!="object"||n.endScope===null)throw Nt("endScope must be object"),kr;Tc(n,n.end,{key:"endScope"}),n.end=wi(n.end,{joinWith:""})}}function t8(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function n8(n){t8(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),QV(n),e8(n)}function r8(n){function e(o,a){return new RegExp(Ln(o),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(a?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=kc(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(wi(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const l=c.findIndex((h,p)=>p>0&&h!==void 0),u=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,u)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new t;return this.rules.slice(a).forEach(([l,u])=>c.addRule(l,u)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(a);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,l=u.exec(a)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function s(o){const a=new r;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function i(o,a){const c=o;if(o.isCompiled)return c;[UV,GV,n8,ZV].forEach(u=>u(o,a)),n.compilerExtensions.forEach(u=>u(o,a)),o.__beforeBegin=null,[jV,VV,WV].forEach(u=>u(o,a)),o.isCompiled=!0;let l=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),l=o.keywords.$pattern,delete o.keywords.$pattern),l=l||/\w+/,o.keywords&&(o.keywords=Cc(o.keywords,n.case_insensitive)),c.keywordPatternRe=e(l,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=Ln(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(u){return s8(u==="self"?o:u)})),o.contains.forEach(function(u){i(u,c)}),o.starts&&i(o.starts,a),c.matcher=s(c),c}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=yt(n.classNameAliases||{}),i(n)}function $c(n){return n?n.endsWithParent||$c(n.starts):!1}function s8(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return yt(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:$c(n)?yt(n,{starts:n.starts?yt(n.starts):null}):Object.isFrozen(n)?yt(n):n}var i8="11.5.1";class o8 extends Error{constructor(e,t){super(e);this.name="HTMLInjectionError",this.html=t}}const _s=_c,ia=yt,oa=Symbol("nomatch"),a8=7,c8=function(n){const e=Object.create(null),t=Object.create(null),r=[];let s=!0;const i="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:yV};function c(f){return a.noHighlightRe.test(f)}function l(f){let m=f.className+" ";m+=f.parentNode?f.parentNode.className:"";const E=a.languageDetectRe.exec(m);if(E){const C=j(E[1]);return C||(sa(i.replace("{}",E[1])),sa("Falling back to no-highlight mode for this block.",f)),C?E[1]:"no-highlight"}return m.split(/\s+/).find(C=>c(C)||j(C))}function u(f,m,E){let C="",N="";typeof m=="object"?(C=f,E=m.ignoreIllegals,N=m.language):(Kt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Kt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),N=f,C=m),E===void 0&&(E=!0);const F={code:C,language:N};b("before:highlight",F);const Z=F.result?F.result:h(F.language,F.code,E);return Z.code=F.code,b("after:highlight",Z),Z}function h(f,m,E,C){const N=Object.create(null);function F(L,z){return L.keywords[z]}function Z(){if(!V.keywords){he.addText(te);return}let L=0;V.keywordPatternRe.lastIndex=0;let z=V.keywordPatternRe.exec(te),Y="";for(;z;){Y+=te.substring(L,z.index);const ee=Ie.case_insensitive?z[0].toLowerCase():z[0],fe=F(V,ee);if(fe){const[ge,Vt]=fe;if(he.addText(Y),Y="",N[ee]=(N[ee]||0)+1,N[ee]<=a8&&(Ge+=Vt),ge.startsWith("_"))Y+=z[0];else{const vn=Ie.classNameAliases[ge]||ge;he.addKeyword(z[0],vn)}}else Y+=z[0];L=V.keywordPatternRe.lastIndex,z=V.keywordPatternRe.exec(te)}Y+=te.substr(L),he.addText(Y)}function W(){if(te==="")return;let L=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){he.addText(te);return}L=h(V.subLanguage,te,!0,bn[V.subLanguage]),bn[V.subLanguage]=L._top}else L=d(te,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(Ge+=L.relevance),he.addSublanguage(L._emitter,L.language)}function re(){V.subLanguage!=null?W():Z(),te=""}function J(L,z){let Y=1;const ee=z.length-1;for(;Y<=ee;){if(!L._emit[Y]){Y++;continue}const fe=Ie.classNameAliases[L[Y]]||L[Y],ge=z[Y];fe?he.addKeyword(ge,fe):(te=ge,Z(),te=""),Y++}}function Ce(L,z){return L.scope&&typeof L.scope=="string"&&he.openNode(Ie.classNameAliases[L.scope]||L.scope),L.beginScope&&(L.beginScope._wrap?(he.addKeyword(te,Ie.classNameAliases[L.beginScope._wrap]||L.beginScope._wrap),te=""):L.beginScope._multi&&(J(L.beginScope,z),te="")),V=Object.create(L,{parent:{value:V}}),V}function Oe(L,z,Y){let ee=xV(L.endRe,Y);if(ee){if(L["on:end"]){const fe=new ta(L);L["on:end"](z,fe),fe.isMatchIgnored&&(ee=!1)}if(ee){for(;L.endsParent&&L.parent;)L=L.parent;return L}}if(L.endsWithParent)return Oe(L.parent,z,Y)}function Ve(L){return V.matcher.regexIndex===0?(te+=L[0],1):(jt=!0,0)}function pe(L){const z=L[0],Y=L.rule,ee=new ta(Y),fe=[Y.__beforeBegin,Y["on:begin"]];for(const ge of fe)if(!!ge&&(ge(L,ee),ee.isMatchIgnored))return Ve(z);return Y.skip?te+=z:(Y.excludeBegin&&(te+=z),re(),!Y.returnBegin&&!Y.excludeBegin&&(te=z)),Ce(Y,L),Y.returnBegin?0:z.length}function Me(L){const z=L[0],Y=m.substr(L.index),ee=Oe(V,L,Y);if(!ee)return oa;const fe=V;V.endScope&&V.endScope._wrap?(re(),he.addKeyword(z,V.endScope._wrap)):V.endScope&&V.endScope._multi?(re(),J(V.endScope,L)):fe.skip?te+=z:(fe.returnEnd||fe.excludeEnd||(te+=z),re(),fe.excludeEnd&&(te=z));do V.scope&&he.closeNode(),!V.skip&&!V.subLanguage&&(Ge+=V.relevance),V=V.parent;while(V!==ee.parent);return ee.starts&&Ce(ee.starts,L),fe.returnEnd?0:z.length}function Ne(){const L=[];for(let z=V;z!==Ie;z=z.parent)z.scope&&L.unshift(z.scope);L.forEach(z=>he.openNode(z))}let ve={};function Ht(L,z){const Y=z&&z[0];if(te+=L,Y==null)return re(),0;if(ve.type==="begin"&&z.type==="end"&&ve.index===z.index&&Y===""){if(te+=m.slice(z.index,z.index+1),!s){const ee=new Error(`0 width match regex (${f})`);throw ee.languageName=f,ee.badRule=ve.rule,ee}return 1}if(ve=z,z.type==="begin")return pe(z);if(z.type==="illegal"&&!E){const ee=new Error('Illegal lexeme "'+Y+'" for mode "'+(V.scope||"<unnamed>")+'"');throw ee.mode=V,ee}else if(z.type==="end"){const ee=Me(z);if(ee!==oa)return ee}if(z.type==="illegal"&&Y==="")return 1;if(Ut>1e5&&Ut>z.index*3)throw new Error("potential infinite loop, way more iterations than matches");return te+=Y,Y.length}const Ie=j(f);if(!Ie)throw Nt(i.replace("{}",f)),new Error('Unknown language: "'+f+'"');const ft=r8(Ie);let mt="",V=C||ft;const bn={},he=new a.__emitter(a);Ne();let te="",Ge=0,Te=0,Ut=0,jt=!1;try{for(V.matcher.considerAll();;){Ut++,jt?jt=!1:V.matcher.considerAll(),V.matcher.lastIndex=Te;const L=V.matcher.exec(m);if(!L)break;const z=m.substring(Te,L.index),Y=Ht(z,L);Te=L.index+Y}return Ht(m.substr(Te)),he.closeAllNodes(),he.finalize(),mt=he.toHTML(),{language:f,value:mt,relevance:Ge,illegal:!1,_emitter:he,_top:V}}catch(L){if(L.message&&L.message.includes("Illegal"))return{language:f,value:_s(m),illegal:!0,relevance:0,_illegalBy:{message:L.message,index:Te,context:m.slice(Te-100,Te+100),mode:L.mode,resultSoFar:mt},_emitter:he};if(s)return{language:f,value:_s(m),illegal:!1,relevance:0,errorRaised:L,_emitter:he,_top:V};throw L}}function p(f){const m={value:_s(f),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return m._emitter.addText(f),m}function d(f,m){m=m||a.languages||Object.keys(e);const E=p(f),C=m.filter(j).filter(X).map(re=>h(re,f,!1));C.unshift(E);const N=C.sort((re,J)=>{if(re.relevance!==J.relevance)return J.relevance-re.relevance;if(re.language&&J.language){if(j(re.language).supersetOf===J.language)return 1;if(j(J.language).supersetOf===re.language)return-1}return 0}),[F,Z]=N,W=F;return W.secondBest=Z,W}function y(f,m,E){const C=m&&t[m]||E;f.classList.add("hljs"),f.classList.add(`language-${C}`)}function v(f){let m=null;const E=l(f);if(c(E))return;if(b("before:highlightElement",{el:f,language:E}),f.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(f)),a.throwUnescapedHTML))throw new o8("One of your code blocks includes unescaped HTML.",f.innerHTML);m=f;const C=m.textContent,N=E?u(C,{language:E,ignoreIllegals:!0}):d(C);f.innerHTML=N.value,y(f,E,N.language),f.result={language:N.language,re:N.relevance,relevance:N.relevance},N.secondBest&&(f.secondBest={language:N.secondBest.language,relevance:N.secondBest.relevance}),b("after:highlightElement",{el:f,result:N,text:C})}function A(f){a=ia(a,f)}const k=()=>{R(),Kt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function _(){R(),Kt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let w=!1;function R(){if(document.readyState==="loading"){w=!0;return}document.querySelectorAll(a.cssSelector).forEach(v)}function $(){w&&R()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",$,!1);function x(f,m){let E=null;try{E=m(n)}catch(C){if(Nt("Language definition for '{}' could not be registered.".replace("{}",f)),s)Nt(C);else throw C;E=o}E.name||(E.name=f),e[f]=E,E.rawDefinition=m.bind(null,n),E.aliases&&D(E.aliases,{languageName:f})}function B(f){delete e[f];for(const m of Object.keys(t))t[m]===f&&delete t[m]}function G(){return Object.keys(e)}function j(f){return f=(f||"").toLowerCase(),e[f]||e[t[f]]}function D(f,{languageName:m}){typeof f=="string"&&(f=[f]),f.forEach(E=>{t[E.toLowerCase()]=m})}function X(f){const m=j(f);return m&&!m.disableAutodetect}function ue(f){f["before:highlightBlock"]&&!f["before:highlightElement"]&&(f["before:highlightElement"]=m=>{f["before:highlightBlock"](Object.assign({block:m.el},m))}),f["after:highlightBlock"]&&!f["after:highlightElement"]&&(f["after:highlightElement"]=m=>{f["after:highlightBlock"](Object.assign({block:m.el},m))})}function O(f){ue(f),r.push(f)}function b(f,m){const E=f;r.forEach(function(C){C[E]&&C[E](m)})}function S(f){return Kt("10.7.0","highlightBlock will be removed entirely in v12.0"),Kt("10.7.0","Please use highlightElement now."),v(f)}Object.assign(n,{highlight:u,highlightAuto:d,highlightAll:R,highlightElement:v,highlightBlock:S,configure:A,initHighlighting:k,initHighlightingOnLoad:_,registerLanguage:x,unregisterLanguage:B,listLanguages:G,getLanguage:j,registerAliases:D,autoDetection:X,inherit:ia,addPlugin:O}),n.debugMode=function(){s=!1},n.safeMode=function(){s=!0},n.versionString=i8,n.regex={concat:zt,lookahead:wc,either:_i,optional:wV,anyNumberOfTimes:_V};for(const f in cr)typeof cr[f]=="object"&&mV(cr[f]);return Object.assign(n,cr),n};var On=c8({}),l8=On;On.HighlightJS=On;On.default=On;var u8=l8;function h8(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var r=Array.from(typeof n=="string"?[n]:n);r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");var s=r.reduce(function(a,c){var l=c.match(/\n([\t ]+|(?!\s).)/g);return l?a.concat(l.map(function(u){var h,p;return(p=(h=u.match(/[\t ]/g))===null||h===void 0?void 0:h.length)!==null&&p!==void 0?p:0})):a},[]);if(s.length){var i=new RegExp(`
[	 ]{`+Math.min.apply(Math,s)+"}","g");r=r.map(function(a){return a.replace(i,`
`)})}r[0]=r[0].replace(/^\r?\n/,"");var o=r[0];return e.forEach(function(a,c){var l=o.match(/(?:^|\n)( *)$/),u=l?l[1]:"",h=a;typeof a=="string"&&a.includes(`
`)&&(h=String(a).split(`
`).map(function(p,d){return d===0?p:""+u+p}).join(`
`)),o+=h+r[c+1]}),o}const d8=le`
  article {
    background-color: var(--kami-theme-background);
    color: var(--kami-theme-text);
    font-family: var(--kami-theme-font-secondary);
    font-weight: 300;
    margin: 0 auto;
    max-width: 48rem;
    line-height: 1.45;
    padding: .25rem;
  }

  ul ul {
    padding: 0px 0px 0px 30px;
  }

  table {
    border-radius: 5px;
    border-style: hidden;
    border-collapse: collapse;
    box-shadow: 0 0 0 1px var(--kami-theme-border-color);
    margin: 20px 0;
  }

  th {
    padding: 10px;
    text-align: left;
  }

  td {
    padding: 7px 15px;
  }

  tr {
    border-bottom: 1px solid var(--kami-theme-border-color);
  }

  td, th {
    border-right: solid 1px var(--kami-theme-border-color);
  }

  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: " (" attr(href) ")";
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
      content: "";
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  pre,
  code {
    font-family: Menlo, Monaco, "Courier New", monospace;
  }

  pre {
    padding: .5rem;
    line-height: 1.25;
  }

  a,
  a:visited {
    color: var(--kami-theme-primary);
  }

  a:hover,
  a:focus,
  a:active {
    color: var(--kami-theme-secondary);
  }

  html {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p {
    font-size: 1rem;
    margin: 5px 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0.5rem 0 .5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1 {
    margin-top: 0;
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 24px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  h6 {
    font-size: .88rem;
  }

  small {
    font-size: .707em;
  }

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  html {
    font-size: 18px;
    max-width: 100%;
  }

  body {
    color: #444;
    font-family: var(--kami-theme-font-secondary);
    font-weight: 300;
    margin: 0 auto;
    max-width: 48rem;
    line-height: 1.45;
    padding: .25rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--kami-theme-font-primary);
  }

  blockquote {
    border-left: 8px solid var(--kami-theme-secondary);
    padding: 1rem;
    margin-left: 15px;
  }

  .hljs {
    overflow: auto;
  }

  pre:not(.hljs), code:not(.hljs__code) {
    background-color: var(--kami-theme-secondary);
    color: var(--kami-theme-white);
  }

  code:not(.hljs__code) {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    border-radius: 6px;
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  }

  pre,
  code {
    border-radius: var(--kami-theme-radius);
    border-radius: 10px;
  }

  pre {
    padding: 14px 24px;
  }

  pre code {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 14px;
  }
`;var p8=Object.defineProperty,f8=Object.getOwnPropertyDescriptor,Rc=(n,e,t,r)=>{for(var s=r>1?void 0:r?f8(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&p8(e,t,s),s};let de=class extends ce{static registerHighlightStyle(n){de.hightlightStyle=n}static registerHighlightLanguage(n,e){de.hljs.registerLanguage(n,e)}static use(n){this.plugins.push(n)}constructor(){super();this.content="",this.parser=new fV({highlight:this.setupHighlight.bind(this)}),de.plugins.forEach(n=>this.parser.use(n))}isScriptMarkdown(n){return n instanceof HTMLScriptElement&&n.type==="text/markdown"}setupHighlight(n,e){if(e&&de.hljs.getLanguage(e))try{return`<pre class="hljs"><code class="hljs__code">${this.renderHighlight(n,e)}</code></pre>`}catch{return""}return`<pre><code>${this.parser.utils.escapeHtml(n)}</code></pre>`}registerMarkdown(){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");if(!n||this.observer)return;const t=n.assignedNodes({flatten:!0}).find(this.isScriptMarkdown.bind(this));!t||(this.observer=new MutationObserver(()=>this.updateMarkdown(t)),this.observer.observe(t,{childList:!0}),this.updateMarkdown(t))}updateMarkdown(n){const e=n.innerText.replace(/&lt;(\/?script)(.*?)&gt;/g,"<$1$2>");this.content=h8(e.trim())}renderHighlight(n,e){const{value:t}=de.hljs.highlight(n,{language:e,ignoreIllegals:!0});return t}render(){return M`
      <style>
        ${ka(de.hightlightStyle)}
      </style>
      <slot style="display: none" @slotchange=${this.registerMarkdown}></slot>
      <article>
        ${Rn(this.parser.render(this.content))}
      </article>
    `}};de.styles=d8;de.plugins=[];de.hljs=u8;de.hightlightStyle="";Rc([Et()],de.prototype,"content",2);de=Rc([me("kami-markdown")],de);var Nn=(n=>(n.GITHUB="github",n.GITLAB="gitlab",n))(Nn||{}),Dc={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(hd,function(){var t=1e3,r=6e4,s=36e5,i="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",p="quarter",d="year",y="date",v="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,k=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},w=function(O,b,S){var f=String(O);return!f||f.length>=b?O:""+Array(b+1-f.length).join(S)+O},R={s:w,z:function(O){var b=-O.utcOffset(),S=Math.abs(b),f=Math.floor(S/60),m=S%60;return(b<=0?"+":"-")+w(f,2,"0")+":"+w(m,2,"0")},m:function O(b,S){if(b.date()<S.date())return-O(S,b);var f=12*(S.year()-b.year())+(S.month()-b.month()),m=b.clone().add(f,h),E=S-m<0,C=b.clone().add(f+(E?-1:1),h);return+(-(f+(S-m)/(E?m-C:C-m))||0)},a:function(O){return O<0?Math.ceil(O)||0:Math.floor(O)},p:function(O){return{M:h,y:d,w:u,d:l,D:y,h:c,m:a,s:o,ms:i,Q:p}[O]||String(O||"").toLowerCase().replace(/s$/,"")},u:function(O){return O===void 0}},$="en",x={};x[$]=_;var B=function(O){return O instanceof X},G=function O(b,S,f){var m;if(!b)return $;if(typeof b=="string"){var E=b.toLowerCase();x[E]&&(m=E),S&&(x[E]=S,m=E);var C=b.split("-");if(!m&&C.length>1)return O(C[0])}else{var N=b.name;x[N]=b,m=N}return!f&&m&&($=m),m||!f&&$},j=function(O,b){if(B(O))return O.clone();var S=typeof b=="object"?b:{};return S.date=O,S.args=arguments,new X(S)},D=R;D.l=G,D.i=B,D.w=function(O,b){return j(O,{locale:b.$L,utc:b.$u,x:b.$x,$offset:b.$offset})};var X=function(){function O(S){this.$L=G(S.locale,null,!0),this.parse(S)}var b=O.prototype;return b.parse=function(S){this.$d=function(f){var m=f.date,E=f.utc;if(m===null)return new Date(NaN);if(D.u(m))return new Date;if(m instanceof Date)return new Date(m);if(typeof m=="string"&&!/Z$/i.test(m)){var C=m.match(A);if(C){var N=C[2]-1||0,F=(C[7]||"0").substring(0,3);return E?new Date(Date.UTC(C[1],N,C[3]||1,C[4]||0,C[5]||0,C[6]||0,F)):new Date(C[1],N,C[3]||1,C[4]||0,C[5]||0,C[6]||0,F)}}return new Date(m)}(S),this.$x=S.x||{},this.init()},b.init=function(){var S=this.$d;this.$y=S.getFullYear(),this.$M=S.getMonth(),this.$D=S.getDate(),this.$W=S.getDay(),this.$H=S.getHours(),this.$m=S.getMinutes(),this.$s=S.getSeconds(),this.$ms=S.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return this.$d.toString()!==v},b.isSame=function(S,f){var m=j(S);return this.startOf(f)<=m&&m<=this.endOf(f)},b.isAfter=function(S,f){return j(S)<this.startOf(f)},b.isBefore=function(S,f){return this.endOf(f)<j(S)},b.$g=function(S,f,m){return D.u(S)?this[f]:this.set(m,S)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(S,f){var m=this,E=!!D.u(f)||f,C=D.p(S),N=function(Ve,pe){var Me=D.w(m.$u?Date.UTC(m.$y,pe,Ve):new Date(m.$y,pe,Ve),m);return E?Me:Me.endOf(l)},F=function(Ve,pe){return D.w(m.toDate()[Ve].apply(m.toDate("s"),(E?[0,0,0,0]:[23,59,59,999]).slice(pe)),m)},Z=this.$W,W=this.$M,re=this.$D,J="set"+(this.$u?"UTC":"");switch(C){case d:return E?N(1,0):N(31,11);case h:return E?N(1,W):N(0,W+1);case u:var Ce=this.$locale().weekStart||0,Oe=(Z<Ce?Z+7:Z)-Ce;return N(E?re-Oe:re+(6-Oe),W);case l:case y:return F(J+"Hours",0);case c:return F(J+"Minutes",1);case a:return F(J+"Seconds",2);case o:return F(J+"Milliseconds",3);default:return this.clone()}},b.endOf=function(S){return this.startOf(S,!1)},b.$set=function(S,f){var m,E=D.p(S),C="set"+(this.$u?"UTC":""),N=(m={},m[l]=C+"Date",m[y]=C+"Date",m[h]=C+"Month",m[d]=C+"FullYear",m[c]=C+"Hours",m[a]=C+"Minutes",m[o]=C+"Seconds",m[i]=C+"Milliseconds",m)[E],F=E===l?this.$D+(f-this.$W):f;if(E===h||E===d){var Z=this.clone().set(y,1);Z.$d[N](F),Z.init(),this.$d=Z.set(y,Math.min(this.$D,Z.daysInMonth())).$d}else N&&this.$d[N](F);return this.init(),this},b.set=function(S,f){return this.clone().$set(S,f)},b.get=function(S){return this[D.p(S)]()},b.add=function(S,f){var m,E=this;S=Number(S);var C=D.p(f),N=function(W){var re=j(E);return D.w(re.date(re.date()+Math.round(W*S)),E)};if(C===h)return this.set(h,this.$M+S);if(C===d)return this.set(d,this.$y+S);if(C===l)return N(1);if(C===u)return N(7);var F=(m={},m[a]=r,m[c]=s,m[o]=t,m)[C]||1,Z=this.$d.getTime()+S*F;return D.w(Z,this)},b.subtract=function(S,f){return this.add(-1*S,f)},b.format=function(S){var f=this,m=this.$locale();if(!this.isValid())return m.invalidDate||v;var E=S||"YYYY-MM-DDTHH:mm:ssZ",C=D.z(this),N=this.$H,F=this.$m,Z=this.$M,W=m.weekdays,re=m.months,J=function(pe,Me,Ne,ve){return pe&&(pe[Me]||pe(f,E))||Ne[Me].substr(0,ve)},Ce=function(pe){return D.s(N%12||12,pe,"0")},Oe=m.meridiem||function(pe,Me,Ne){var ve=pe<12?"AM":"PM";return Ne?ve.toLowerCase():ve},Ve={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Z+1,MM:D.s(Z+1,2,"0"),MMM:J(m.monthsShort,Z,re,3),MMMM:J(re,Z),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:J(m.weekdaysMin,this.$W,W,2),ddd:J(m.weekdaysShort,this.$W,W,3),dddd:W[this.$W],H:String(N),HH:D.s(N,2,"0"),h:Ce(1),hh:Ce(2),a:Oe(N,F,!0),A:Oe(N,F,!1),m:String(F),mm:D.s(F,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:C};return E.replace(k,function(pe,Me){return Me||Ve[pe]||C.replace(":","")})},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(S,f,m){var E,C=D.p(f),N=j(S),F=(N.utcOffset()-this.utcOffset())*r,Z=this-N,W=D.m(this,N);return W=(E={},E[d]=W/12,E[h]=W,E[p]=W/3,E[u]=(Z-F)/6048e5,E[l]=(Z-F)/864e5,E[c]=Z/s,E[a]=Z/r,E[o]=Z/t,E)[C]||Z,m?W:D.a(W)},b.daysInMonth=function(){return this.endOf(h).$D},b.$locale=function(){return x[this.$L]},b.locale=function(S,f){if(!S)return this.$L;var m=this.clone(),E=G(S,f,!0);return E&&(m.$L=E),m},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},O}(),ue=X.prototype;return j.prototype=ue,[["$ms",i],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",d],["$D",y]].forEach(function(O){ue[O[1]]=function(b){return this.$g(b,O[0],O[1])}}),j.extend=function(O,b){return O.$i||(O(b,X,j),O.$i=!0),j},j.locale=G,j.isDayjs=B,j.unix=function(O){return j(1e3*O)},j.en=x[$],j.Ls=x,j.p={},j})})(Dc);var xr=Dc.exports;class Lc{constructor(e){this.data=e}}class m8 extends Lc{get provider(){return Nn.GITHUB}getContent(){return Array.isArray(this.data)?this.data.reduce((e,{body:t})=>e+t,""):this.data.body}getDate(){var e;return Array.isArray(this.data)?xr((e=this.data.pop())==null?void 0:e.published_at).toDate():xr(this.data.published_at).toDate()}}class g8 extends Lc{get provider(){return Nn.GITLAB}getContent(){return Array.isArray(this.data)?this.data.reduce((e,{description:t})=>e+t,""):this.data.description}getDate(){var e;return Array.isArray(this.data)?xr((e=this.data.pop())==null?void 0:e.released_at).toDate():xr(this.data.released_at).toDate()}}function b8(n,e){switch(n){case Nn.GITHUB:return new m8(e);case Nn.GITLAB:return new g8(e);default:throw new TypeError("Provider doesn't exist or is not define !")}}var aa=Object.freeze,Mc=Object.defineProperty,v8=Object.getOwnPropertyDescriptor,gn=(n,e,t,r)=>{for(var s=r>1?void 0:r?v8(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Mc(e,t,s),s},y8=(n,e)=>aa(Mc(n,"raw",{value:aa(e||n.slice())})),ca;customElements.get("kami-markdown")||customElements.define("kami-markdown",de);customElements.get("kami-transition")||customElements.define("kami-transition",Le);let xt=class extends ce{constructor(){super(...arguments);this.display=!1}get hasRelease(){return this.release&&this.release.getContent()!==void 0&&this.release.getContent()!==""}async connectedCallback(){if(super.connectedCallback(),!this.src)throw new Error("Missing src attribute !");if(!this.provider)throw new Error("Missing provider attribute !");const e=await(await fetch(this.src)).json();this.release=b8(this.provider,e)}toggleDisplay(){this.display=!this.display}releaseTemplate(n){return M(ca||(ca=y8([`
      <div class="kami-changelog__release">
        <h3 class="kami-changelog__title">`,`</h3>
        <div class="kami-changelog__markdown">
          <kami-markdown>
            <script type="text/markdown">
              `,`
            <\/script>
          </kami-markdown>
        </div>
      </div>
    `])),this.header||"kami-changelog",n==null?void 0:n.getContent())}btnTemplate(n){return M`
      <svg @click=${this.toggleDisplay} class="kami-changelog__btn" viewBox="0 0 24 25">
        <path d=${n}></path>
      </svg>
    `}render(){return M`
      <kami-transition transition="slide-y"  show="${this.hasRelease}">
        <div class="kami-changelog">
          <kami-transition transition="slide-y" duration="200" show="${this.display}">
            ${this.releaseTemplate(this.release)}
          </kami-transition>
          <kami-transition transition="fade" duration="250" easing="linear" show="${this.display}">
            <div slot="in">${this.btnTemplate(oi)}</div>
            <div slot="out">${this.btnTemplate(id)}</div>
          </kami-transition>
        </div>
      </kami-transition>
    `}};xt.styles=le`
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
  `;gn([q()],xt.prototype,"src",2);gn([q()],xt.prototype,"provider",2);gn([q()],xt.prototype,"header",2);gn([Et()],xt.prototype,"release",2);gn([Et()],xt.prototype,"display",2);xt=gn([me("kami-changelog")],xt);var _8=Object.defineProperty,w8=Object.getOwnPropertyDescriptor,Gn=(n,e,t,r)=>{for(var s=r>1?void 0:r?w8(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&_8(e,t,s),s};let Ft=class extends ce{constructor(){super(...arguments);this.value=0,this.absolute=!1,this.bottom=!1,this.delta=0}updated(n){n.get("absolute")&&this.parentElement&&(this.parentElement.style.position="relative")}go(n=0){if(!this.interval){if(!this.time){this.value=n;return}this.delta=this.value/this.time*10,this.interval=window.setInterval(()=>this.progress(n),10)}}progress(n=0){if(this.value<=n){this.dispatchEvent(new CustomEvent("finish",{detail:{value:this.value}})),clearInterval(this.interval),this.interval=void 0;return}this.value-=this.delta}render(){return M`
      <div class="
          kami-progress-bar 
          ${this.absolute?"kami-progress-bar--absolute":""}
          ${this.bottom?"kami-progress-bar--bottom":""}
        "
      >
        <div class="kami-progress-bar__container">
          <div class="kami-progress-bar__loading" style="width: ${this.value}%">
          </div>
        </div>  
      </div>
    `}};Ft.styles=le`
    .kami-progress-bar {
      position: relative;
      width: 100%;
      height: var(--kami-progress-bar-height, 5px);
      overflow: hidden;
      border-radius: 100px;
    }

    .kami-progress-bar--absolute {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0px;
    }

    .kami-progress-bar--bottom {
      top: inherit;
      bottom: 0;
    }

    .kami-progress-bar__container {
      background-color: rgba(var(--kami-theme-primary-rgb, 0, 0, 0), var(--kami-progress-bar-container-opacity, 0.5));
      height: 100%;
      position: relative;
    }

    .kami-progress-bar__loading {
      background-color: var(--kami-theme-primary, black);
      height: 100%;
      position: absolute;
    }
  `;Gn([q({type:Number})],Ft.prototype,"value",2);Gn([q({type:Number})],Ft.prototype,"time",2);Gn([q({type:Boolean})],Ft.prototype,"absolute",2);Gn([q({type:Boolean})],Ft.prototype,"bottom",2);Ft=Gn([me("kami-progress-bar")],Ft);function Oc(n,e){return t=>!t||!Object.keys(n).includes(t)?n[e]:n[t]}var ct=(n=>(n.info="info",n.success="success",n.warning="warning",n.error="error",n))(ct||{}),Fe=(n=>(n["top-center"]="top-center",n["top-left"]="top-left",n["top-right"]="top-right",n["bottom-center"]="bottom-center",n["bottom-left"]="bottom-left",n["bottom-right"]="bottom-right",n))(Fe||{});const lr={get stored(){return Object.values(this.items).flat()},indexes:{"top-center":0,"top-left":0,"top-right":0,"bottom-center":0,"bottom-left":0,"bottom-right":0},items:{"top-center":[],"top-left":[],"top-right":[],"bottom-center":[],"bottom-left":[],"bottom-right":[]},reIndex(n){this.items[n].forEach((e,t)=>e.setIndex(t))},add(n){const{position:e}=n;n.setIndex(this.indexes[e]),this.items[e].push(n),this.indexes[e]=this.indexes[e]+1},remove(n){const{position:e}=n,t=({index:r})=>r!==n.index;this.items[e]=this.items[e].filter(t),this.indexes[e]=this.indexes[e]-1,this.reIndex(e)}};var k8=Object.defineProperty,x8=Object.getOwnPropertyDescriptor,je=(n,e,t,r)=>{for(var s=r>1?void 0:r?x8(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&k8(e,t,s),s};const la=10,ua=60;let Se=class extends ce{constructor(){super(...arguments);this.type=ct.info,this.position=Fe["bottom-center"],this.message="",this.outlined=!1,this.blured=!1,this.gap=la,this.size=ua,this.isClosing=!1}static create({message:n="",type:e=ct.info,position:t=Fe["bottom-center"],outlined:r=!1,blured:s=!1,gap:i=la,size:o=ua,time:a,container:c}){const l=c||document.body,u=document.createElement("kami-flash");return u.setAttribute("message",n),u.setAttribute("type",e),u.setAttribute("position",t),u.setAttribute("gap",i.toString()),u.setAttribute("size",o.toString()),a&&u.setAttribute("time",a.toString()),r&&u.setAttribute("outlined",""),s&&u.setAttribute("blured",""),l.append(u),u}static clear(){const{stored:n}=lr,e=async t=>t.close();return Promise.all(n.map(e))}static refresh(n){lr.items[n].forEach(e=>e.updatePosition())}get isLeft(){return this.position===Fe["bottom-left"]||this.position===Fe["top-left"]}get isRight(){return this.position===Fe["bottom-right"]||this.position===Fe["top-right"]}get isTop(){return this.position===Fe["top-center"]||this.position===Fe["top-left"]||this.position===Fe["top-right"]}get from(){return this.isTop?-50:50}get icon(){switch(this.type){case ct.info:return cd;case ct.success:return ad;case ct.warning:return rd;case ct.error:return sd;default:return""}}connectedCallback(){super.connectedCallback(),lr.add(this)}firstUpdated(){this.updatePosition(),this.time&&this.progressEl&&this.progressEl.go(0)}updatePosition(){const n=this.index,e=this.isTop?"top":"bottom";if(!(Number.isNaN(n)||n===void 0)){if(this.isRight&&(this.transitionEl.style.right=`${this.gap}px`),this.isLeft&&(this.transitionEl.style.left=`${this.gap}px`),n===0){this.transitionEl.style[e]=`${this.gap}px`;return}this.transitionEl.style[e]=`${this.size*n+this.gap*(n+1)}px`}}setIndex(n){this.index=n}close(){this.isClosing||(this.isClosing=!0,this.transitionEl.to="1",this.transitionEl.from="0.8",this.transitionEl.duration=275,this.transitionEl.transition="scale",this.transitionEl.toggle(!1),this.dispatchEvent(new CustomEvent("close")))}async delete(){this.dispatchEvent(new CustomEvent("delete")),await this.getUpdateComplete(),this.remove(),lr.remove(this),Se.refresh(this.position)}onClickClose(){this.close()}onCloseFinish(){this.delete()}renderIcon(n){return M`
      <svg class="kami-flash__icon" viewBox="0 0 24 25">
        <path d=${n}></path>
      </svg>
    `}render(){return M`
      <kami-transition 
        id="transition" 
        class="position position--${this.position}" 
        transition="slide-y" 
        appear
        from="${this.from}"
        to="0"
        @hide="${this.onCloseFinish}"
      >
        <div
          id="flash" 
          class="
            kami-flash 
            kami-flash--${this.type}
            ${this.outlined?"kami-flash--outlined":""}
            ${this.blured?"kami-flash--blured":""}
          "
        >
          <div class="kami-flash__icon">
            ${this.renderIcon(this.icon)}
          </div>
          <div class="kami-flash__msg">
            ${this.message}
          </div>
          <div @click="${this.onClickClose}" class="kami-flash__close">
            ${this.renderIcon(oi)}
          </div>
          ${this.time?M`
            <kami-progress-bar 
              id="progress" 
              class="kami-flash__progress"
              value="100" 
              time="${this.time}"
              absolute
              @finish="${this.onClickClose}"
            ></kami-progress-bar>
          `:""}
        </div>
      </kami-transition>
    `}};Se.styles=le`
    .kami-flash {
      display: flex;
      align-items: center;
      min-width: var(--kami-flash-min-width, 300px); 
      width: fit-content;
      padding: var(--kami-flash-padding, 15px); 
      border-radius: var(--kami-flash-border-radius, 10px); 
      box-sizing: border-box;
      line-height: 0;
      overflow: hidden;
      position: relative;
    }

    .kami-flash--outlined {
      border: var(--kami-flash-border-outlined, 0.15rem solid); 
      padding: var(--kami-flash-padding-outlined, 12.6px); 
    }

    .kami-flash--outlined .kami-flash__progress {
      --kami-progress-bar-height: 3px;
    }

    .kami-flash--blured {
      backdrop-filter: blur(var(--kami-flash-blured, 6px));
    }

    .kami-flash--info {
      background-color: rgb(var(--kami-theme-info-rgb), 0.75);
      color: var(--kami-theme-white);
      fill: var(--kami-theme-white);
    }

    .kami-flash--outlined.kami-flash--info {
      background-color: rgb(var(--kami-theme-info-rgb), 0.1);
      color: var(--kami-theme-info);
      fill: var(--kami-theme-info);
    }

    .kami-flash--info .kami-flash__progress {
      --kami-theme-primary: var(--kami-theme-info);
    }

    .kami-flash--success {
      background-color: rgb(var(--kami-theme-success-rgb), 0.75);
      color: var(--kami-theme-white);
      fill: var(--kami-theme-white);
    }

    .kami-flash--outlined.kami-flash--success {
      background-color: rgb(var(--kami-theme-success-rgb), 0.1);
      color: var(--kami-theme-success);
      fill: var(--kami-theme-success);
    }

    .kami-flash--success .kami-flash__progress {
      --kami-theme-primary: var(--kami-theme-success);
    }

    .kami-flash--warning {
      background-color: rgb(var(--kami-theme-warning-rgb), 0.75);
      color: var(--kami-theme-white);
      fill: var(--kami-theme-white);
    }

    .kami-flash--outlined.kami-flash--warning {
      background-color: rgb(var(--kami-theme-warning-rgb), 0.1);
      color: var(--kami-theme-warning);
      fill: var(--kami-theme-warning);
    }

    .kami-flash--warning .kami-flash__progress {
      --kami-theme-primary: var(--kami-theme-warning);
    }

    .kami-flash--error {
      background-color: rgb(var(--kami-theme-error-rgb), 0.75);
      color: var(--kami-theme-white);
      fill: var(--kami-theme-white);
    }

    .kami-flash--outlined.kami-flash--error {
      background-color: rgb(var(--kami-theme-error-rgb), 0.1);
      color: var(--kami-theme-error);
      fill: var(--kami-theme-error);
    }

    .kami-flash--error .kami-flash__progress {
      --kami-theme-primary: var(--kami-theme-error);
    }

    .kami-flash__icon {
      width: var(--kami-flash-icon-size, 30px);
      height: var(--kami-flash-icon-size, 30px);
    }

    .kami-flash__msg {
      font-family: var(--kami-theme-font-secondary);
      font-size: var(--kami-flash-font-size, 20px);
      flex-grow: 1;
      padding: 0 10px;
      box-sizing: border-box;
    }

    .kami-flash__progress {
      --kami-progress-bar-container-opacity: 0;
    }

    .kami-flash__close {
      cursor: pointer;
    }

    .position {
      position: fixed;
      width: fit-content;
      transition: all 0.5s ease;
    }

    .position--bottom-center {
      bottom: 0;
      margin: 0% auto;
      left: 0;
      right: 0;
    }

    .position--bottom-right {
      bottom: 0;
      right: 0;
    }

    .position--bottom-left {
      bottom: 0;
      left: 0;
    }

    .position--top-center {
      top: 0;
      margin: 0% auto;
      left: 0;
      right: 0;
    }

    .position--top-right {
      top: 0;
      right: 0;
    }

    .position--top-left {
      top: 0;
      left: 0;
    }
  `;je([q({converter:Oc(ct,ct.info)})],Se.prototype,"type",2);je([q({converter:Oc(Fe,Fe["bottom-center"])})],Se.prototype,"position",2);je([q({type:String})],Se.prototype,"message",2);je([q({type:Number})],Se.prototype,"time",2);je([q({type:Boolean})],Se.prototype,"outlined",2);je([q({type:Boolean})],Se.prototype,"blured",2);je([q({type:Number})],Se.prototype,"gap",2);je([q({type:Number})],Se.prototype,"size",2);je([hn("#transition")],Se.prototype,"transitionEl",2);je([hn("#progress")],Se.prototype,"progressEl",2);je([q({attribute:!1})],Se.prototype,"index",2);Se=je([me("kami-flash")],Se);(function(){if(window.Reflect===void 0||window.customElements===void 0||window.customElements.polyfillWrapFlushCallback)return;const n=HTMLElement,e={HTMLElement:function(){return Reflect.construct(n,[],this.constructor)}};window.HTMLElement=e.HTMLElement,HTMLElement.prototype=n.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,n)})();(function(n){if(typeof n.requestSubmit=="function")return;n.requestSubmit=function(r){r?(e(r,this),r.click()):(r=document.createElement("input"),r.type="submit",r.hidden=!0,this.appendChild(r),r.click(),this.removeChild(r))};function e(r,s){r instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),r.type=="submit"||t(TypeError,"The specified element is not a submit button"),r.form==s||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}function t(r,s,i){throw new r("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+s+".",i)}})(HTMLFormElement.prototype);const Nc=new WeakMap;function E8(n){const e=n instanceof Element?n:n instanceof Node?n.parentElement:null,t=e?e.closest("input, button"):null;return(t==null?void 0:t.type)=="submit"?t:null}function A8(n){const e=E8(n.target);e&&e.form&&Nc.set(e.form,e)}(function(){if("submitter"in Event.prototype)return;let n;if("SubmitEvent"in window&&/Apple Computer/.test(navigator.vendor))n=window.SubmitEvent.prototype;else{if("SubmitEvent"in window)return;n=window.Event.prototype}addEventListener("click",A8,!0),Object.defineProperty(n,"submitter",{get(){if(this.type=="submit"&&this.target instanceof HTMLFormElement)return Nc.get(this.target)}})})();var _t;(function(n){n.eager="eager",n.lazy="lazy"})(_t||(_t={}));class At extends HTMLElement{constructor(){super();this.loaded=Promise.resolve(),this.delegate=new At.delegateConstructor(this)}static get observedAttributes(){return["disabled","loading","src"]}connectedCallback(){this.delegate.connect()}disconnectedCallback(){this.delegate.disconnect()}reload(){const{src:e}=this;this.src=null,this.src=e}attributeChangedCallback(e){e=="loading"?this.delegate.loadingStyleChanged():e=="src"?this.delegate.sourceURLChanged():this.delegate.disabledChanged()}get src(){return this.getAttribute("src")}set src(e){e?this.setAttribute("src",e):this.removeAttribute("src")}get loading(){return S8(this.getAttribute("loading")||"")}set loading(e){e?this.setAttribute("loading",e):this.removeAttribute("loading")}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get autoscroll(){return this.hasAttribute("autoscroll")}set autoscroll(e){e?this.setAttribute("autoscroll",""):this.removeAttribute("autoscroll")}get complete(){return!this.delegate.isLoading}get isActive(){return this.ownerDocument===document&&!this.isPreview}get isPreview(){var e,t;return(t=(e=this.ownerDocument)===null||e===void 0?void 0:e.documentElement)===null||t===void 0?void 0:t.hasAttribute("data-turbo-preview")}}function S8(n){switch(n.toLowerCase()){case"lazy":return _t.lazy;default:return _t.eager}}function Ee(n){return new URL(n.toString(),document.baseURI)}function It(n){let e;if(n.hash)return n.hash.slice(1);if(e=n.href.match(/#(.*)$/))return e[1]}function xi(n,e){const t=(e==null?void 0:e.getAttribute("formaction"))||n.getAttribute("action")||n.action;return Ee(t)}function C8(n){return(L8(n).match(/\.[^.]*$/)||[])[0]||""}function T8(n){return!!C8(n).match(/^(?:|\.(?:htm|html|xhtml))$/)}function $8(n,e){const t=M8(e);return n.href===Ee(t).href||n.href.startsWith(t)}function In(n,e){return $8(n,e)&&T8(n)}function Ls(n){const e=It(n);return e!=null?n.href.slice(0,-(e.length+1)):n.href}function ur(n){return Ls(n)}function R8(n,e){return Ee(n).href==Ee(e).href}function D8(n){return n.pathname.split("/").slice(1)}function L8(n){return D8(n).slice(-1)[0]}function M8(n){return O8(n.origin+n.pathname)}function O8(n){return n.endsWith("/")?n:n+"/"}class Ic{constructor(e){this.response=e}get succeeded(){return this.response.ok}get failed(){return!this.succeeded}get clientError(){return this.statusCode>=400&&this.statusCode<=499}get serverError(){return this.statusCode>=500&&this.statusCode<=599}get redirected(){return this.response.redirected}get location(){return Ee(this.response.url)}get isHTML(){return this.contentType&&this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/)}get statusCode(){return this.response.status}get contentType(){return this.header("Content-Type")}get responseText(){return this.response.clone().text()}get responseHTML(){return this.isHTML?this.response.clone().text():Promise.resolve(void 0)}header(e){return this.response.headers.get(e)}}function De(n,{target:e,cancelable:t,detail:r}={}){const s=new CustomEvent(n,{cancelable:t,bubbles:!0,detail:r});return e&&e.isConnected?e.dispatchEvent(s):document.documentElement.dispatchEvent(s),s}function pr(){return new Promise(n=>requestAnimationFrame(()=>n()))}function N8(){return new Promise(n=>setTimeout(()=>n(),0))}function I8(){return Promise.resolve()}function Pc(n=""){return new DOMParser().parseFromString(n,"text/html")}function qc(n,...e){const t=P8(n,e).replace(/^\n/,"").split(`
`),r=t[0].match(/^\s+/),s=r?r[0].length:0;return t.map(i=>i.slice(s)).join(`
`)}function P8(n,e){return n.reduce((t,r,s)=>{const i=e[s]==null?"":e[s];return t+r+i},"")}function Pn(){return Array.apply(null,{length:36}).map((n,e)=>e==8||e==13||e==18||e==23?"-":e==14?"4":e==19?(Math.floor(Math.random()*4)+8).toString(16):Math.floor(Math.random()*15).toString(16)).join("")}function fr(n,...e){for(const t of e.map(r=>r==null?void 0:r.getAttribute(n)))if(typeof t=="string")return t;return null}function Ms(...n){for(const e of n)e.localName=="turbo-frame"&&e.setAttribute("busy",""),e.setAttribute("aria-busy","true")}function Os(...n){for(const e of n)e.localName=="turbo-frame"&&e.removeAttribute("busy"),e.removeAttribute("aria-busy")}var ke;(function(n){n[n.get=0]="get",n[n.post=1]="post",n[n.put=2]="put",n[n.patch=3]="patch",n[n.delete=4]="delete"})(ke||(ke={}));function q8(n){switch(n.toLowerCase()){case"get":return ke.get;case"post":return ke.post;case"put":return ke.put;case"patch":return ke.patch;case"delete":return ke.delete}}class Ei{constructor(e,t,r,s=new URLSearchParams,i=null){this.abortController=new AbortController,this.resolveRequestPromise=o=>{},this.delegate=e,this.method=t,this.headers=this.defaultHeaders,this.body=s,this.url=r,this.target=i}get location(){return this.url}get params(){return this.url.searchParams}get entries(){return this.body?Array.from(this.body.entries()):[]}cancel(){this.abortController.abort()}async perform(){var e,t;const{fetchOptions:r}=this;(t=(e=this.delegate).prepareHeadersForRequest)===null||t===void 0||t.call(e,this.headers,this),await this.allowRequestToBeIntercepted(r);try{this.delegate.requestStarted(this);const s=await fetch(this.url.href,r);return await this.receive(s)}catch(s){if(s.name!=="AbortError")throw this.delegate.requestErrored(this,s),s}finally{this.delegate.requestFinished(this)}}async receive(e){const t=new Ic(e);return De("turbo:before-fetch-response",{cancelable:!0,detail:{fetchResponse:t},target:this.target}).defaultPrevented?this.delegate.requestPreventedHandlingResponse(this,t):t.succeeded?this.delegate.requestSucceededWithResponse(this,t):this.delegate.requestFailedWithResponse(this,t),t}get fetchOptions(){var e;return{method:ke[this.method].toUpperCase(),credentials:"same-origin",headers:this.headers,redirect:"follow",body:this.isIdempotent?null:this.body,signal:this.abortSignal,referrer:(e=this.delegate.referrer)===null||e===void 0?void 0:e.href}}get defaultHeaders(){return{Accept:"text/html, application/xhtml+xml"}}get isIdempotent(){return this.method==ke.get}get abortSignal(){return this.abortController.signal}async allowRequestToBeIntercepted(e){const t=new Promise(s=>this.resolveRequestPromise=s);De("turbo:before-fetch-request",{cancelable:!0,detail:{fetchOptions:e,url:this.url,resume:this.resolveRequestPromise},target:this.target}).defaultPrevented&&await t}}class F8{constructor(e,t){this.started=!1,this.intersect=r=>{const s=r.slice(-1)[0];s!=null&&s.isIntersecting&&this.delegate.elementAppearedInViewport(this.element)},this.delegate=e,this.element=t,this.intersectionObserver=new IntersectionObserver(this.intersect)}start(){this.started||(this.started=!0,this.intersectionObserver.observe(this.element))}stop(){this.started&&(this.started=!1,this.intersectionObserver.unobserve(this.element))}}class Wn{constructor(e){this.templateElement=document.createElement("template"),this.templateElement.innerHTML=e}static wrap(e){return typeof e=="string"?new this(e):e}get fragment(){const e=document.createDocumentFragment();for(const t of this.foreignElements)e.appendChild(document.importNode(t,!0));return e}get foreignElements(){return this.templateChildren.reduce((e,t)=>t.tagName.toLowerCase()=="turbo-stream"?[...e,t]:e,[])}get templateChildren(){return Array.from(this.templateElement.content.children)}}Wn.contentType="text/vnd.turbo-stream.html";var bt;(function(n){n[n.initialized=0]="initialized",n[n.requesting=1]="requesting",n[n.waiting=2]="waiting",n[n.receiving=3]="receiving",n[n.stopping=4]="stopping",n[n.stopped=5]="stopped"})(bt||(bt={}));var vt;(function(n){n.urlEncoded="application/x-www-form-urlencoded",n.multipart="multipart/form-data",n.plain="text/plain"})(vt||(vt={}));function B8(n){switch(n.toLowerCase()){case vt.multipart:return vt.multipart;case vt.plain:return vt.plain;default:return vt.urlEncoded}}class Zn{constructor(e,t,r,s=!1){this.state=bt.initialized,this.delegate=e,this.formElement=t,this.submitter=r,this.formData=z8(t,r),this.location=Ee(this.action),this.method==ke.get&&j8(this.location,[...this.body.entries()]),this.fetchRequest=new Ei(this,this.method,this.location,this.body,this.formElement),this.mustRedirect=s}static confirmMethod(e,t){return confirm(e)}get method(){var e;const t=((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formmethod"))||this.formElement.getAttribute("method")||"";return q8(t.toLowerCase())||ke.get}get action(){var e;const t=typeof this.formElement.action=="string"?this.formElement.action:null;return((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formaction"))||this.formElement.getAttribute("action")||t||""}get body(){return this.enctype==vt.urlEncoded||this.method==ke.get?new URLSearchParams(this.stringFormData):this.formData}get enctype(){var e;return B8(((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formenctype"))||this.formElement.enctype)}get isIdempotent(){return this.fetchRequest.isIdempotent}get stringFormData(){return[...this.formData].reduce((e,[t,r])=>e.concat(typeof r=="string"?[[t,r]]:[]),[])}get confirmationMessage(){return this.formElement.getAttribute("data-turbo-confirm")}get needsConfirmation(){return this.confirmationMessage!==null}async start(){const{initialized:e,requesting:t}=bt;if(!(this.needsConfirmation&&!Zn.confirmMethod(this.confirmationMessage,this.formElement))&&this.state==e)return this.state=t,this.fetchRequest.perform()}stop(){const{stopping:e,stopped:t}=bt;if(this.state!=e&&this.state!=t)return this.state=e,this.fetchRequest.cancel(),!0}prepareHeadersForRequest(e,t){if(!t.isIdempotent){const r=H8(ha("csrf-param"))||ha("csrf-token");r&&(e["X-CSRF-Token"]=r),e.Accept=[Wn.contentType,e.Accept].join(", ")}}requestStarted(e){var t;this.state=bt.waiting,(t=this.submitter)===null||t===void 0||t.setAttribute("disabled",""),De("turbo:submit-start",{target:this.formElement,detail:{formSubmission:this}}),this.delegate.formSubmissionStarted(this)}requestPreventedHandlingResponse(e,t){this.result={success:t.succeeded,fetchResponse:t}}requestSucceededWithResponse(e,t){if(t.clientError||t.serverError)this.delegate.formSubmissionFailedWithResponse(this,t);else if(this.requestMustRedirect(e)&&U8(t)){const r=new Error("Form responses must redirect to another location");this.delegate.formSubmissionErrored(this,r)}else this.state=bt.receiving,this.result={success:!0,fetchResponse:t},this.delegate.formSubmissionSucceededWithResponse(this,t)}requestFailedWithResponse(e,t){this.result={success:!1,fetchResponse:t},this.delegate.formSubmissionFailedWithResponse(this,t)}requestErrored(e,t){this.result={success:!1,error:t},this.delegate.formSubmissionErrored(this,t)}requestFinished(e){var t;this.state=bt.stopped,(t=this.submitter)===null||t===void 0||t.removeAttribute("disabled"),De("turbo:submit-end",{target:this.formElement,detail:Object.assign({formSubmission:this},this.result)}),this.delegate.formSubmissionFinished(this)}requestMustRedirect(e){return!e.isIdempotent&&this.mustRedirect}}function z8(n,e){const t=new FormData(n),r=e==null?void 0:e.getAttribute("name"),s=e==null?void 0:e.getAttribute("value");return r&&s!=null&&t.get(r)!=s&&t.append(r,s),t}function H8(n){if(n!=null){const t=(document.cookie?document.cookie.split("; "):[]).find(r=>r.startsWith(n));if(t){const r=t.split("=").slice(1).join("=");return r?decodeURIComponent(r):void 0}}}function ha(n){const e=document.querySelector(`meta[name="${n}"]`);return e&&e.content}function U8(n){return n.statusCode==200&&!n.redirected}function j8(n,e){const t=new URLSearchParams;for(const[r,s]of e)s instanceof File||t.append(r,s);return n.search=t.toString(),n}class Vr{constructor(e){this.element=e}get children(){return[...this.element.children]}hasAnchor(e){return this.getElementForAnchor(e)!=null}getElementForAnchor(e){return e?this.element.querySelector(`[id='${e}'], a[name='${e}']`):null}get isConnected(){return this.element.isConnected}get firstAutofocusableElement(){return this.element.querySelector("[autofocus]")}get permanentElements(){return[...this.element.querySelectorAll("[id][data-turbo-permanent]")]}getPermanentElementById(e){return this.element.querySelector(`#${e}[data-turbo-permanent]`)}getPermanentElementMapForSnapshot(e){const t={};for(const r of this.permanentElements){const{id:s}=r,i=e.getPermanentElementById(s);i&&(t[s]=[r,i])}return t}}class Fc{constructor(e,t){this.submitBubbled=r=>{const s=r.target;if(!r.defaultPrevented&&s instanceof HTMLFormElement&&s.closest("turbo-frame, html")==this.element){const i=r.submitter||void 0;((i==null?void 0:i.getAttribute("formmethod"))||s.method)!="dialog"&&this.delegate.shouldInterceptFormSubmission(s,i)&&(r.preventDefault(),r.stopImmediatePropagation(),this.delegate.formSubmissionIntercepted(s,i))}},this.delegate=e,this.element=t}start(){this.element.addEventListener("submit",this.submitBubbled)}stop(){this.element.removeEventListener("submit",this.submitBubbled)}}class Bc{constructor(e,t){this.resolveRenderPromise=r=>{},this.resolveInterceptionPromise=r=>{},this.delegate=e,this.element=t}scrollToAnchor(e){const t=this.snapshot.getElementForAnchor(e);t?(this.scrollToElement(t),this.focusElement(t)):this.scrollToPosition({x:0,y:0})}scrollToAnchorFromLocation(e){this.scrollToAnchor(It(e))}scrollToElement(e){e.scrollIntoView()}focusElement(e){e instanceof HTMLElement&&(e.hasAttribute("tabindex")?e.focus():(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")))}scrollToPosition({x:e,y:t}){this.scrollRoot.scrollTo(e,t)}scrollToTop(){this.scrollToPosition({x:0,y:0})}get scrollRoot(){return window}async render(e){const{isPreview:t,shouldRender:r,newSnapshot:s}=e;if(r)try{this.renderPromise=new Promise(a=>this.resolveRenderPromise=a),this.renderer=e,this.prepareToRenderSnapshot(e);const i=new Promise(a=>this.resolveInterceptionPromise=a);this.delegate.allowsImmediateRender(s,this.resolveInterceptionPromise)||await i,await this.renderSnapshot(e),this.delegate.viewRenderedSnapshot(s,t),this.finishRenderingSnapshot(e)}finally{delete this.renderer,this.resolveRenderPromise(void 0),delete this.renderPromise}else this.invalidate()}invalidate(){this.delegate.viewInvalidated()}prepareToRenderSnapshot(e){this.markAsPreview(e.isPreview),e.prepareToRender()}markAsPreview(e){e?this.element.setAttribute("data-turbo-preview",""):this.element.removeAttribute("data-turbo-preview")}async renderSnapshot(e){await e.render()}finishRenderingSnapshot(e){e.finishRendering()}}class V8 extends Bc{invalidate(){this.element.innerHTML=""}get snapshot(){return new Vr(this.element)}}class zc{constructor(e,t){this.clickBubbled=r=>{this.respondsToEventTarget(r.target)?this.clickEvent=r:delete this.clickEvent},this.linkClicked=r=>{this.clickEvent&&this.respondsToEventTarget(r.target)&&r.target instanceof Element&&this.delegate.shouldInterceptLinkClick(r.target,r.detail.url)&&(this.clickEvent.preventDefault(),r.preventDefault(),this.delegate.linkClickIntercepted(r.target,r.detail.url)),delete this.clickEvent},this.willVisit=()=>{delete this.clickEvent},this.delegate=e,this.element=t}start(){this.element.addEventListener("click",this.clickBubbled),document.addEventListener("turbo:click",this.linkClicked),document.addEventListener("turbo:before-visit",this.willVisit)}stop(){this.element.removeEventListener("click",this.clickBubbled),document.removeEventListener("turbo:click",this.linkClicked),document.removeEventListener("turbo:before-visit",this.willVisit)}respondsToEventTarget(e){const t=e instanceof Element?e:e instanceof Node?e.parentElement:null;return t&&t.closest("turbo-frame, html")==this.element}}class G8{constructor(e){this.permanentElementMap=e}static preservingPermanentElements(e,t){const r=new this(e);r.enter(),t(),r.leave()}enter(){for(const e in this.permanentElementMap){const[,t]=this.permanentElementMap[e];this.replaceNewPermanentElementWithPlaceholder(t)}}leave(){for(const e in this.permanentElementMap){const[t]=this.permanentElementMap[e];this.replaceCurrentPermanentElementWithClone(t),this.replacePlaceholderWithPermanentElement(t)}}replaceNewPermanentElementWithPlaceholder(e){const t=W8(e);e.replaceWith(t)}replaceCurrentPermanentElementWithClone(e){const t=e.cloneNode(!0);e.replaceWith(t)}replacePlaceholderWithPermanentElement(e){const t=this.getPlaceholderById(e.id);t==null||t.replaceWith(e)}getPlaceholderById(e){return this.placeholders.find(t=>t.content==e)}get placeholders(){return[...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")]}}function W8(n){const e=document.createElement("meta");return e.setAttribute("name","turbo-permanent-placeholder"),e.setAttribute("content",n.id),e}class Ai{constructor(e,t,r,s=!0){this.currentSnapshot=e,this.newSnapshot=t,this.isPreview=r,this.willRender=s,this.promise=new Promise((i,o)=>this.resolvingFunctions={resolve:i,reject:o})}get shouldRender(){return!0}prepareToRender(){}finishRendering(){this.resolvingFunctions&&(this.resolvingFunctions.resolve(),delete this.resolvingFunctions)}createScriptElement(e){if(e.getAttribute("data-turbo-eval")=="false")return e;{const t=document.createElement("script");return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=e.textContent,t.async=!1,Z8(t,e),t}}preservingPermanentElements(e){G8.preservingPermanentElements(this.permanentElementMap,e)}focusFirstAutofocusableElement(){const e=this.connectedSnapshot.firstAutofocusableElement;K8(e)&&e.focus()}get connectedSnapshot(){return this.newSnapshot.isConnected?this.newSnapshot:this.currentSnapshot}get currentElement(){return this.currentSnapshot.element}get newElement(){return this.newSnapshot.element}get permanentElementMap(){return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot)}get cspNonce(){var e;return(e=document.head.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content")}}function Z8(n,e){for(const{name:t,value:r}of[...e.attributes])n.setAttribute(t,r)}function K8(n){return n&&typeof n.focus=="function"}class Y8 extends Ai{get shouldRender(){return!0}async render(){await pr(),this.preservingPermanentElements(()=>{this.loadFrameElement()}),this.scrollFrameIntoView(),await pr(),this.focusFirstAutofocusableElement(),await pr(),this.activateScriptElements()}loadFrameElement(){var e;const t=document.createRange();t.selectNodeContents(this.currentElement),t.deleteContents();const r=this.newElement,s=(e=r.ownerDocument)===null||e===void 0?void 0:e.createRange();s&&(s.selectNodeContents(r),this.currentElement.appendChild(s.extractContents()))}scrollFrameIntoView(){if(this.currentElement.autoscroll||this.newElement.autoscroll){const e=this.currentElement.firstElementChild,t=X8(this.currentElement.getAttribute("data-autoscroll-block"),"end");if(e)return e.scrollIntoView({block:t}),!0}return!1}activateScriptElements(){for(const e of this.newScriptElements){const t=this.createScriptElement(e);e.replaceWith(t)}}get newScriptElements(){return this.currentElement.querySelectorAll("script")}}function X8(n,e){return n=="end"||n=="start"||n=="center"||n=="nearest"?n:e}class lt{constructor(){this.hiding=!1,this.value=0,this.visible=!1,this.trickle=()=>{this.setValue(this.value+Math.random()/100)},this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement(),this.installStylesheetElement(),this.setValue(0)}static get defaultCSS(){return qc`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 9999;
        transition:
          width ${lt.animationDuration}ms ease-out,
          opacity ${lt.animationDuration/2}ms ${lt.animationDuration/2}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `}show(){this.visible||(this.visible=!0,this.installProgressElement(),this.startTrickling())}hide(){this.visible&&!this.hiding&&(this.hiding=!0,this.fadeProgressElement(()=>{this.uninstallProgressElement(),this.stopTrickling(),this.visible=!1,this.hiding=!1}))}setValue(e){this.value=e,this.refresh()}installStylesheetElement(){document.head.insertBefore(this.stylesheetElement,document.head.firstChild)}installProgressElement(){this.progressElement.style.width="0",this.progressElement.style.opacity="1",document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()}fadeProgressElement(e){this.progressElement.style.opacity="0",setTimeout(e,lt.animationDuration*1.5)}uninstallProgressElement(){this.progressElement.parentNode&&document.documentElement.removeChild(this.progressElement)}startTrickling(){this.trickleInterval||(this.trickleInterval=window.setInterval(this.trickle,lt.animationDuration))}stopTrickling(){window.clearInterval(this.trickleInterval),delete this.trickleInterval}refresh(){requestAnimationFrame(()=>{this.progressElement.style.width=`${10+this.value*90}%`})}createStylesheetElement(){const e=document.createElement("style");return e.type="text/css",e.textContent=lt.defaultCSS,e}createProgressElement(){const e=document.createElement("div");return e.className="turbo-progress-bar",e}}lt.animationDuration=300;class J8 extends Vr{constructor(){super(...arguments);this.detailsByOuterHTML=this.children.filter(e=>!nG(e)).map(e=>iG(e)).reduce((e,t)=>{const{outerHTML:r}=t,s=r in e?e[r]:{type:Q8(t),tracked:eG(t),elements:[]};return Object.assign(Object.assign({},e),{[r]:Object.assign(Object.assign({},s),{elements:[...s.elements,t]})})},{})}get trackedElementSignature(){return Object.keys(this.detailsByOuterHTML).filter(e=>this.detailsByOuterHTML[e].tracked).join("")}getScriptElementsNotInSnapshot(e){return this.getElementsMatchingTypeNotInSnapshot("script",e)}getStylesheetElementsNotInSnapshot(e){return this.getElementsMatchingTypeNotInSnapshot("stylesheet",e)}getElementsMatchingTypeNotInSnapshot(e,t){return Object.keys(this.detailsByOuterHTML).filter(r=>!(r in t.detailsByOuterHTML)).map(r=>this.detailsByOuterHTML[r]).filter(({type:r})=>r==e).map(({elements:[r]})=>r)}get provisionalElements(){return Object.keys(this.detailsByOuterHTML).reduce((e,t)=>{const{type:r,tracked:s,elements:i}=this.detailsByOuterHTML[t];return r==null&&!s?[...e,...i]:i.length>1?[...e,...i.slice(1)]:e},[])}getMetaValue(e){const t=this.findMetaElementByName(e);return t?t.getAttribute("content"):null}findMetaElementByName(e){return Object.keys(this.detailsByOuterHTML).reduce((t,r)=>{const{elements:[s]}=this.detailsByOuterHTML[r];return sG(s,e)?s:t},void 0)}}function Q8(n){if(tG(n))return"script";if(rG(n))return"stylesheet"}function eG(n){return n.getAttribute("data-turbo-track")=="reload"}function tG(n){return n.tagName.toLowerCase()=="script"}function nG(n){return n.tagName.toLowerCase()=="noscript"}function rG(n){const e=n.tagName.toLowerCase();return e=="style"||e=="link"&&n.getAttribute("rel")=="stylesheet"}function sG(n,e){return n.tagName.toLowerCase()=="meta"&&n.getAttribute("name")==e}function iG(n){return n.hasAttribute("nonce")&&n.setAttribute("nonce",""),n}class wt extends Vr{constructor(e,t){super(e);this.headSnapshot=t}static fromHTMLString(e=""){return this.fromDocument(Pc(e))}static fromElement(e){return this.fromDocument(e.ownerDocument)}static fromDocument({head:e,body:t}){return new this(t,new J8(e))}clone(){return new wt(this.element.cloneNode(!0),this.headSnapshot)}get headElement(){return this.headSnapshot.element}get rootLocation(){var e;const t=(e=this.getSetting("root"))!==null&&e!==void 0?e:"/";return Ee(t)}get cacheControlValue(){return this.getSetting("cache-control")}get isPreviewable(){return this.cacheControlValue!="no-preview"}get isCacheable(){return this.cacheControlValue!="no-cache"}get isVisitable(){return this.getSetting("visit-control")!="reload"}getSetting(e){return this.headSnapshot.getMetaValue(`turbo-${e}`)}}var Xt;(function(n){n.visitStart="visitStart",n.requestStart="requestStart",n.requestEnd="requestEnd",n.visitEnd="visitEnd"})(Xt||(Xt={}));var We;(function(n){n.initialized="initialized",n.started="started",n.canceled="canceled",n.failed="failed",n.completed="completed"})(We||(We={}));const oG={action:"advance",historyChanged:!1,visitCachedSnapshot:()=>{},willRender:!0};var kt;(function(n){n[n.networkFailure=0]="networkFailure",n[n.timeoutFailure=-1]="timeoutFailure",n[n.contentTypeMismatch=-2]="contentTypeMismatch"})(kt||(kt={}));class aG{constructor(e,t,r,s={}){this.identifier=Pn(),this.timingMetrics={},this.followedRedirect=!1,this.historyChanged=!1,this.scrolled=!1,this.snapshotCached=!1,this.state=We.initialized,this.delegate=e,this.location=t,this.restorationIdentifier=r||Pn();const{action:i,historyChanged:o,referrer:a,snapshotHTML:c,response:l,visitCachedSnapshot:u,willRender:h}=Object.assign(Object.assign({},oG),s);this.action=i,this.historyChanged=o,this.referrer=a,this.snapshotHTML=c,this.response=l,this.isSamePage=this.delegate.locationWithActionIsSamePage(this.location,this.action),this.visitCachedSnapshot=u,this.willRender=h,this.scrolled=!h}get adapter(){return this.delegate.adapter}get view(){return this.delegate.view}get history(){return this.delegate.history}get restorationData(){return this.history.getRestorationDataForIdentifier(this.restorationIdentifier)}get silent(){return this.isSamePage}start(){this.state==We.initialized&&(this.recordTimingMetric(Xt.visitStart),this.state=We.started,this.adapter.visitStarted(this),this.delegate.visitStarted(this))}cancel(){this.state==We.started&&(this.request&&this.request.cancel(),this.cancelRender(),this.state=We.canceled)}complete(){this.state==We.started&&(this.recordTimingMetric(Xt.visitEnd),this.state=We.completed,this.adapter.visitCompleted(this),this.delegate.visitCompleted(this),this.followRedirect())}fail(){this.state==We.started&&(this.state=We.failed,this.adapter.visitFailed(this))}changeHistory(){var e;if(!this.historyChanged){const t=this.location.href===((e=this.referrer)===null||e===void 0?void 0:e.href)?"replace":this.action,r=this.getHistoryMethodForAction(t);this.history.update(r,this.location,this.restorationIdentifier),this.historyChanged=!0}}issueRequest(){this.hasPreloadedResponse()?this.simulateRequest():this.shouldIssueRequest()&&!this.request&&(this.request=new Ei(this,ke.get,this.location),this.request.perform())}simulateRequest(){this.response&&(this.startRequest(),this.recordResponse(),this.finishRequest())}startRequest(){this.recordTimingMetric(Xt.requestStart),this.adapter.visitRequestStarted(this)}recordResponse(e=this.response){if(this.response=e,e){const{statusCode:t}=e;da(t)?this.adapter.visitRequestCompleted(this):this.adapter.visitRequestFailedWithStatusCode(this,t)}}finishRequest(){this.recordTimingMetric(Xt.requestEnd),this.adapter.visitRequestFinished(this)}loadResponse(){if(this.response){const{statusCode:e,responseHTML:t}=this.response;this.render(async()=>{this.cacheSnapshot(),this.view.renderPromise&&await this.view.renderPromise,da(e)&&t!=null?(await this.view.renderPage(wt.fromHTMLString(t),!1,this.willRender),this.adapter.visitRendered(this),this.complete()):(await this.view.renderError(wt.fromHTMLString(t)),this.adapter.visitRendered(this),this.fail())})}}getCachedSnapshot(){const e=this.view.getCachedSnapshotForLocation(this.location)||this.getPreloadedSnapshot();if(e&&(!It(this.location)||e.hasAnchor(It(this.location)))&&(this.action=="restore"||e.isPreviewable))return e}getPreloadedSnapshot(){if(this.snapshotHTML)return wt.fromHTMLString(this.snapshotHTML)}hasCachedSnapshot(){return this.getCachedSnapshot()!=null}loadCachedSnapshot(){const e=this.getCachedSnapshot();if(e){const t=this.shouldIssueRequest();this.render(async()=>{this.cacheSnapshot(),this.isSamePage?this.adapter.visitRendered(this):(this.view.renderPromise&&await this.view.renderPromise,await this.view.renderPage(e,t,this.willRender),this.adapter.visitRendered(this),t||this.complete())})}}followRedirect(){var e;this.redirectedToLocation&&!this.followedRedirect&&((e=this.response)===null||e===void 0?void 0:e.redirected)&&(this.adapter.visitProposedToLocation(this.redirectedToLocation,{action:"replace",response:this.response}),this.followedRedirect=!0)}goToSamePageAnchor(){this.isSamePage&&this.render(async()=>{this.cacheSnapshot(),this.adapter.visitRendered(this)})}requestStarted(){this.startRequest()}requestPreventedHandlingResponse(e,t){}async requestSucceededWithResponse(e,t){const r=await t.responseHTML,{redirected:s,statusCode:i}=t;r==null?this.recordResponse({statusCode:kt.contentTypeMismatch,redirected:s}):(this.redirectedToLocation=t.redirected?t.location:void 0,this.recordResponse({statusCode:i,responseHTML:r,redirected:s}))}async requestFailedWithResponse(e,t){const r=await t.responseHTML,{redirected:s,statusCode:i}=t;r==null?this.recordResponse({statusCode:kt.contentTypeMismatch,redirected:s}):this.recordResponse({statusCode:i,responseHTML:r,redirected:s})}requestErrored(e,t){this.recordResponse({statusCode:kt.networkFailure,redirected:!1})}requestFinished(){this.finishRequest()}performScroll(){this.scrolled||(this.action=="restore"?this.scrollToRestoredPosition()||this.scrollToAnchor()||this.view.scrollToTop():this.scrollToAnchor()||this.view.scrollToTop(),this.isSamePage&&this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation,this.location),this.scrolled=!0)}scrollToRestoredPosition(){const{scrollPosition:e}=this.restorationData;if(e)return this.view.scrollToPosition(e),!0}scrollToAnchor(){const e=It(this.location);if(e!=null)return this.view.scrollToAnchor(e),!0}recordTimingMetric(e){this.timingMetrics[e]=new Date().getTime()}getTimingMetrics(){return Object.assign({},this.timingMetrics)}getHistoryMethodForAction(e){switch(e){case"replace":return history.replaceState;case"advance":case"restore":return history.pushState}}hasPreloadedResponse(){return typeof this.response=="object"}shouldIssueRequest(){return this.isSamePage?!1:this.action=="restore"?!this.hasCachedSnapshot():this.willRender}cacheSnapshot(){this.snapshotCached||(this.view.cacheSnapshot().then(e=>e&&this.visitCachedSnapshot(e)),this.snapshotCached=!0)}async render(e){this.cancelRender(),await new Promise(t=>{this.frame=requestAnimationFrame(()=>t())}),await e(),delete this.frame,this.performScroll()}cancelRender(){this.frame&&(cancelAnimationFrame(this.frame),delete this.frame)}}function da(n){return n>=200&&n<300}class cG{constructor(e){this.progressBar=new lt,this.showProgressBar=()=>{this.progressBar.show()},this.session=e}visitProposedToLocation(e,t){this.navigator.startVisit(e,Pn(),t)}visitStarted(e){e.loadCachedSnapshot(),e.issueRequest(),e.changeHistory(),e.goToSamePageAnchor()}visitRequestStarted(e){this.progressBar.setValue(0),e.hasCachedSnapshot()||e.action!="restore"?this.showVisitProgressBarAfterDelay():this.showProgressBar()}visitRequestCompleted(e){e.loadResponse()}visitRequestFailedWithStatusCode(e,t){switch(t){case kt.networkFailure:case kt.timeoutFailure:case kt.contentTypeMismatch:return this.reload();default:return e.loadResponse()}}visitRequestFinished(e){this.progressBar.setValue(1),this.hideVisitProgressBar()}visitCompleted(e){}pageInvalidated(){this.reload()}visitFailed(e){}visitRendered(e){}formSubmissionStarted(e){this.progressBar.setValue(0),this.showFormProgressBarAfterDelay()}formSubmissionFinished(e){this.progressBar.setValue(1),this.hideFormProgressBar()}showVisitProgressBarAfterDelay(){this.visitProgressBarTimeout=window.setTimeout(this.showProgressBar,this.session.progressBarDelay)}hideVisitProgressBar(){this.progressBar.hide(),this.visitProgressBarTimeout!=null&&(window.clearTimeout(this.visitProgressBarTimeout),delete this.visitProgressBarTimeout)}showFormProgressBarAfterDelay(){this.formProgressBarTimeout==null&&(this.formProgressBarTimeout=window.setTimeout(this.showProgressBar,this.session.progressBarDelay))}hideFormProgressBar(){this.progressBar.hide(),this.formProgressBarTimeout!=null&&(window.clearTimeout(this.formProgressBarTimeout),delete this.formProgressBarTimeout)}reload(){window.location.reload()}get navigator(){return this.session.navigator}}class lG{constructor(){this.started=!1}start(){this.started||(this.started=!0,addEventListener("turbo:before-cache",this.removeStaleElements,!1))}stop(){this.started&&(this.started=!1,removeEventListener("turbo:before-cache",this.removeStaleElements,!1))}removeStaleElements(){const e=[...document.querySelectorAll('[data-turbo-cache="false"]')];for(const t of e)t.remove()}}class uG{constructor(e){this.started=!1,this.submitCaptured=()=>{removeEventListener("submit",this.submitBubbled,!1),addEventListener("submit",this.submitBubbled,!1)},this.submitBubbled=t=>{if(!t.defaultPrevented){const r=t.target instanceof HTMLFormElement?t.target:void 0,s=t.submitter||void 0;r&&((s==null?void 0:s.getAttribute("formmethod"))||r.getAttribute("method"))!="dialog"&&this.delegate.willSubmitForm(r,s)&&(t.preventDefault(),this.delegate.formSubmitted(r,s))}},this.delegate=e}start(){this.started||(addEventListener("submit",this.submitCaptured,!0),this.started=!0)}stop(){this.started&&(removeEventListener("submit",this.submitCaptured,!0),this.started=!1)}}class hG{constructor(e){this.element=e,this.linkInterceptor=new zc(this,e),this.formInterceptor=new Fc(this,e)}start(){this.linkInterceptor.start(),this.formInterceptor.start()}stop(){this.linkInterceptor.stop(),this.formInterceptor.stop()}shouldInterceptLinkClick(e,t){return this.shouldRedirect(e)}linkClickIntercepted(e,t){const r=this.findFrameElement(e);r&&r.delegate.linkClickIntercepted(e,t)}shouldInterceptFormSubmission(e,t){return this.shouldSubmit(e,t)}formSubmissionIntercepted(e,t){const r=this.findFrameElement(e,t);r&&(r.removeAttribute("reloadable"),r.delegate.formSubmissionIntercepted(e,t))}shouldSubmit(e,t){var r;const s=xi(e,t),i=this.element.ownerDocument.querySelector('meta[name="turbo-root"]'),o=Ee((r=i==null?void 0:i.content)!==null&&r!==void 0?r:"/");return this.shouldRedirect(e,t)&&In(s,o)}shouldRedirect(e,t){const r=this.findFrameElement(e,t);return r?r!=e.closest("turbo-frame"):!1}findFrameElement(e,t){const r=(t==null?void 0:t.getAttribute("data-turbo-frame"))||e.getAttribute("data-turbo-frame");if(r&&r!="_top"){const s=this.element.querySelector(`#${r}:not([disabled])`);if(s instanceof At)return s}}}class dG{constructor(e){this.restorationIdentifier=Pn(),this.restorationData={},this.started=!1,this.pageLoaded=!1,this.onPopState=t=>{if(this.shouldHandlePopState()){const{turbo:r}=t.state||{};if(r){this.location=new URL(window.location.href);const{restorationIdentifier:s}=r;this.restorationIdentifier=s,this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location,s)}}},this.onPageLoad=async t=>{await I8(),this.pageLoaded=!0},this.delegate=e}start(){this.started||(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0,this.replace(new URL(window.location.href)))}stop(){this.started&&(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1)}push(e,t){this.update(history.pushState,e,t)}replace(e,t){this.update(history.replaceState,e,t)}update(e,t,r=Pn()){const s={turbo:{restorationIdentifier:r}};e.call(history,s,"",t.href),this.location=t,this.restorationIdentifier=r}getRestorationDataForIdentifier(e){return this.restorationData[e]||{}}updateRestorationData(e){const{restorationIdentifier:t}=this,r=this.restorationData[t];this.restorationData[t]=Object.assign(Object.assign({},r),e)}assumeControlOfScrollRestoration(){var e;this.previousScrollRestoration||(this.previousScrollRestoration=(e=history.scrollRestoration)!==null&&e!==void 0?e:"auto",history.scrollRestoration="manual")}relinquishControlOfScrollRestoration(){this.previousScrollRestoration&&(history.scrollRestoration=this.previousScrollRestoration,delete this.previousScrollRestoration)}shouldHandlePopState(){return this.pageIsLoaded()}pageIsLoaded(){return this.pageLoaded||document.readyState=="complete"}}class pG{constructor(e){this.started=!1,this.clickCaptured=()=>{removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},this.clickBubbled=t=>{if(this.clickEventIsSignificant(t)){const r=t.composedPath&&t.composedPath()[0]||t.target,s=this.findLinkFromClickTarget(r);if(s){const i=this.getLocationForLink(s);this.delegate.willFollowLinkToLocation(s,i)&&(t.preventDefault(),this.delegate.followedLinkToLocation(s,i))}}},this.delegate=e}start(){this.started||(addEventListener("click",this.clickCaptured,!0),this.started=!0)}stop(){this.started&&(removeEventListener("click",this.clickCaptured,!0),this.started=!1)}clickEventIsSignificant(e){return!(e.target&&e.target.isContentEditable||e.defaultPrevented||e.which>1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}findLinkFromClickTarget(e){if(e instanceof Element)return e.closest("a[href]:not([target^=_]):not([download])")}getLocationForLink(e){return Ee(e.getAttribute("href")||"")}}function Si(n){return n=="advance"||n=="replace"||n=="restore"}class fG{constructor(e){this.delegate=e}proposeVisit(e,t={}){this.delegate.allowsVisitingLocationWithAction(e,t.action)&&(In(e,this.view.snapshot.rootLocation)?this.delegate.visitProposedToLocation(e,t):window.location.href=e.toString())}startVisit(e,t,r={}){this.stop(),this.currentVisit=new aG(this,Ee(e),t,Object.assign({referrer:this.location},r)),this.currentVisit.start()}submitForm(e,t){this.stop(),this.formSubmission=new Zn(this,e,t,!0),this.formSubmission.start()}stop(){this.formSubmission&&(this.formSubmission.stop(),delete this.formSubmission),this.currentVisit&&(this.currentVisit.cancel(),delete this.currentVisit)}get adapter(){return this.delegate.adapter}get view(){return this.delegate.view}get history(){return this.delegate.history}formSubmissionStarted(e){typeof this.adapter.formSubmissionStarted=="function"&&this.adapter.formSubmissionStarted(e)}async formSubmissionSucceededWithResponse(e,t){if(e==this.formSubmission){const r=await t.responseHTML;if(r){e.method!=ke.get&&this.view.clearSnapshotCache();const{statusCode:s,redirected:i}=t,a={action:this.getActionForFormSubmission(e),response:{statusCode:s,responseHTML:r,redirected:i}};this.proposeVisit(t.location,a)}}}async formSubmissionFailedWithResponse(e,t){const r=await t.responseHTML;if(r){const s=wt.fromHTMLString(r);t.serverError?await this.view.renderError(s):await this.view.renderPage(s),this.view.scrollToTop(),this.view.clearSnapshotCache()}}formSubmissionErrored(e,t){console.error(t)}formSubmissionFinished(e){typeof this.adapter.formSubmissionFinished=="function"&&this.adapter.formSubmissionFinished(e)}visitStarted(e){this.delegate.visitStarted(e)}visitCompleted(e){this.delegate.visitCompleted(e)}locationWithActionIsSamePage(e,t){const r=It(e),s=It(this.view.lastRenderedLocation),i=t==="restore"&&typeof r=="undefined";return t!=="replace"&&Ls(e)===Ls(this.view.lastRenderedLocation)&&(i||r!=null&&r!==s)}visitScrolledToSamePageLocation(e,t){this.delegate.visitScrolledToSamePageLocation(e,t)}get location(){return this.history.location}get restorationIdentifier(){return this.history.restorationIdentifier}getActionForFormSubmission(e){const{formElement:t,submitter:r}=e,s=fr("data-turbo-action",r,t);return Si(s)?s:"advance"}}var at;(function(n){n[n.initial=0]="initial",n[n.loading=1]="loading",n[n.interactive=2]="interactive",n[n.complete=3]="complete"})(at||(at={}));class mG{constructor(e){this.stage=at.initial,this.started=!1,this.interpretReadyState=()=>{const{readyState:t}=this;t=="interactive"?this.pageIsInteractive():t=="complete"&&this.pageIsComplete()},this.pageWillUnload=()=>{this.delegate.pageWillUnload()},this.delegate=e}start(){this.started||(this.stage==at.initial&&(this.stage=at.loading),document.addEventListener("readystatechange",this.interpretReadyState,!1),addEventListener("pagehide",this.pageWillUnload,!1),this.started=!0)}stop(){this.started&&(document.removeEventListener("readystatechange",this.interpretReadyState,!1),removeEventListener("pagehide",this.pageWillUnload,!1),this.started=!1)}pageIsInteractive(){this.stage==at.loading&&(this.stage=at.interactive,this.delegate.pageBecameInteractive())}pageIsComplete(){this.pageIsInteractive(),this.stage==at.interactive&&(this.stage=at.complete,this.delegate.pageLoaded())}get readyState(){return document.readyState}}class gG{constructor(e){this.started=!1,this.onScroll=()=>{this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},this.delegate=e}start(){this.started||(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)}stop(){this.started&&(removeEventListener("scroll",this.onScroll,!1),this.started=!1)}updatePosition(e){this.delegate.scrollPositionChanged(e)}}class bG{constructor(e){this.sources=new Set,this.started=!1,this.inspectFetchResponse=t=>{const r=vG(t);r&&yG(r)&&(t.preventDefault(),this.receiveMessageResponse(r))},this.receiveMessageEvent=t=>{this.started&&typeof t.data=="string"&&this.receiveMessageHTML(t.data)},this.delegate=e}start(){this.started||(this.started=!0,addEventListener("turbo:before-fetch-response",this.inspectFetchResponse,!1))}stop(){this.started&&(this.started=!1,removeEventListener("turbo:before-fetch-response",this.inspectFetchResponse,!1))}connectStreamSource(e){this.streamSourceIsConnected(e)||(this.sources.add(e),e.addEventListener("message",this.receiveMessageEvent,!1))}disconnectStreamSource(e){this.streamSourceIsConnected(e)&&(this.sources.delete(e),e.removeEventListener("message",this.receiveMessageEvent,!1))}streamSourceIsConnected(e){return this.sources.has(e)}async receiveMessageResponse(e){const t=await e.responseHTML;t&&this.receiveMessageHTML(t)}receiveMessageHTML(e){this.delegate.receivedMessageFromStream(new Wn(e))}}function vG(n){var e;const t=(e=n.detail)===null||e===void 0?void 0:e.fetchResponse;if(t instanceof Ic)return t}function yG(n){var e;return((e=n.contentType)!==null&&e!==void 0?e:"").startsWith(Wn.contentType)}class _G extends Ai{async render(){this.replaceHeadAndBody(),this.activateScriptElements()}replaceHeadAndBody(){const{documentElement:e,head:t,body:r}=document;e.replaceChild(this.newHead,t),e.replaceChild(this.newElement,r)}activateScriptElements(){for(const e of this.scriptElements){const t=e.parentNode;if(t){const r=this.createScriptElement(e);t.replaceChild(r,e)}}}get newHead(){return this.newSnapshot.headSnapshot.element}get scriptElements(){return[...document.documentElement.querySelectorAll("script")]}}class Hc extends Ai{get shouldRender(){return this.newSnapshot.isVisitable&&this.trackedElementsAreIdentical}prepareToRender(){this.mergeHead()}async render(){this.willRender&&this.replaceBody()}finishRendering(){super.finishRendering(),this.isPreview||this.focusFirstAutofocusableElement()}get currentHeadSnapshot(){return this.currentSnapshot.headSnapshot}get newHeadSnapshot(){return this.newSnapshot.headSnapshot}get newElement(){return this.newSnapshot.element}mergeHead(){this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()}replaceBody(){this.preservingPermanentElements(()=>{this.activateNewBody(),this.assignNewBody()})}get trackedElementsAreIdentical(){return this.currentHeadSnapshot.trackedElementSignature==this.newHeadSnapshot.trackedElementSignature}copyNewHeadStylesheetElements(){for(const e of this.newHeadStylesheetElements)document.head.appendChild(e)}copyNewHeadScriptElements(){for(const e of this.newHeadScriptElements)document.head.appendChild(this.createScriptElement(e))}removeCurrentHeadProvisionalElements(){for(const e of this.currentHeadProvisionalElements)document.head.removeChild(e)}copyNewHeadProvisionalElements(){for(const e of this.newHeadProvisionalElements)document.head.appendChild(e)}activateNewBody(){document.adoptNode(this.newElement),this.activateNewBodyScriptElements()}activateNewBodyScriptElements(){for(const e of this.newBodyScriptElements){const t=this.createScriptElement(e);e.replaceWith(t)}}assignNewBody(){document.body&&this.newElement instanceof HTMLBodyElement?document.body.replaceWith(this.newElement):document.documentElement.appendChild(this.newElement)}get newHeadStylesheetElements(){return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot)}get newHeadScriptElements(){return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot)}get currentHeadProvisionalElements(){return this.currentHeadSnapshot.provisionalElements}get newHeadProvisionalElements(){return this.newHeadSnapshot.provisionalElements}get newBodyScriptElements(){return this.newElement.querySelectorAll("script")}}class wG{constructor(e){this.keys=[],this.snapshots={},this.size=e}has(e){return ur(e)in this.snapshots}get(e){if(this.has(e)){const t=this.read(e);return this.touch(e),t}}put(e,t){return this.write(e,t),this.touch(e),t}clear(){this.snapshots={}}read(e){return this.snapshots[ur(e)]}write(e,t){this.snapshots[ur(e)]=t}touch(e){const t=ur(e),r=this.keys.indexOf(t);r>-1&&this.keys.splice(r,1),this.keys.unshift(t),this.trim()}trim(){for(const e of this.keys.splice(this.size))delete this.snapshots[e]}}class kG extends Bc{constructor(){super(...arguments);this.snapshotCache=new wG(10),this.lastRenderedLocation=new URL(location.href)}renderPage(e,t=!1,r=!0){const s=new Hc(this.snapshot,e,t,r);return this.render(s)}renderError(e){const t=new _G(this.snapshot,e,!1);return this.render(t)}clearSnapshotCache(){this.snapshotCache.clear()}async cacheSnapshot(){if(this.shouldCacheSnapshot){this.delegate.viewWillCacheSnapshot();const{snapshot:e,lastRenderedLocation:t}=this;await N8();const r=e.clone();return this.snapshotCache.put(t,r),r}}getCachedSnapshotForLocation(e){return this.snapshotCache.get(e)}get snapshot(){return wt.fromElement(this.element)}get shouldCacheSnapshot(){return this.snapshot.isCacheable}}class xG{constructor(){this.navigator=new fG(this),this.history=new dG(this),this.view=new kG(this,document.documentElement),this.adapter=new cG(this),this.pageObserver=new mG(this),this.cacheObserver=new lG,this.linkClickObserver=new pG(this),this.formSubmitObserver=new uG(this),this.scrollObserver=new gG(this),this.streamObserver=new bG(this),this.frameRedirector=new hG(document.documentElement),this.drive=!0,this.enabled=!0,this.progressBarDelay=500,this.started=!1}start(){this.started||(this.pageObserver.start(),this.cacheObserver.start(),this.linkClickObserver.start(),this.formSubmitObserver.start(),this.scrollObserver.start(),this.streamObserver.start(),this.frameRedirector.start(),this.history.start(),this.started=!0,this.enabled=!0)}disable(){this.enabled=!1}stop(){this.started&&(this.pageObserver.stop(),this.cacheObserver.stop(),this.linkClickObserver.stop(),this.formSubmitObserver.stop(),this.scrollObserver.stop(),this.streamObserver.stop(),this.frameRedirector.stop(),this.history.stop(),this.started=!1)}registerAdapter(e){this.adapter=e}visit(e,t={}){this.navigator.proposeVisit(Ee(e),t)}connectStreamSource(e){this.streamObserver.connectStreamSource(e)}disconnectStreamSource(e){this.streamObserver.disconnectStreamSource(e)}renderStreamMessage(e){document.documentElement.appendChild(Wn.wrap(e).fragment)}clearCache(){this.view.clearSnapshotCache()}setProgressBarDelay(e){this.progressBarDelay=e}get location(){return this.history.location}get restorationIdentifier(){return this.history.restorationIdentifier}historyPoppedToLocationWithRestorationIdentifier(e,t){this.enabled?this.navigator.startVisit(e,t,{action:"restore",historyChanged:!0}):this.adapter.pageInvalidated()}scrollPositionChanged(e){this.history.updateRestorationData({scrollPosition:e})}willFollowLinkToLocation(e,t){return this.elementDriveEnabled(e)&&In(t,this.snapshot.rootLocation)&&this.applicationAllowsFollowingLinkToLocation(e,t)}followedLinkToLocation(e,t){const r=this.getActionForLink(e);this.convertLinkWithMethodClickToFormSubmission(e)||this.visit(t.href,{action:r})}convertLinkWithMethodClickToFormSubmission(e){const t=e.getAttribute("data-turbo-method");if(t){const r=document.createElement("form");r.method=t,r.action=e.getAttribute("href")||"undefined",r.hidden=!0,e.hasAttribute("data-turbo-confirm")&&r.setAttribute("data-turbo-confirm",e.getAttribute("data-turbo-confirm"));const s=this.getTargetFrameForLink(e);return s?(r.setAttribute("data-turbo-frame",s),r.addEventListener("turbo:submit-start",()=>r.remove())):r.addEventListener("submit",()=>r.remove()),document.body.appendChild(r),De("submit",{cancelable:!0,target:r})}else return!1}allowsVisitingLocationWithAction(e,t){return this.locationWithActionIsSamePage(e,t)||this.applicationAllowsVisitingLocation(e)}visitProposedToLocation(e,t){pa(e),this.adapter.visitProposedToLocation(e,t)}visitStarted(e){pa(e.location),e.silent||this.notifyApplicationAfterVisitingLocation(e.location,e.action)}visitCompleted(e){this.notifyApplicationAfterPageLoad(e.getTimingMetrics())}locationWithActionIsSamePage(e,t){return this.navigator.locationWithActionIsSamePage(e,t)}visitScrolledToSamePageLocation(e,t){this.notifyApplicationAfterVisitingSamePageLocation(e,t)}willSubmitForm(e,t){const r=xi(e,t);return this.elementDriveEnabled(e)&&(!t||this.elementDriveEnabled(t))&&In(Ee(r),this.snapshot.rootLocation)}formSubmitted(e,t){this.navigator.submitForm(e,t)}pageBecameInteractive(){this.view.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()}pageLoaded(){this.history.assumeControlOfScrollRestoration()}pageWillUnload(){this.history.relinquishControlOfScrollRestoration()}receivedMessageFromStream(e){this.renderStreamMessage(e)}viewWillCacheSnapshot(){var e;!((e=this.navigator.currentVisit)===null||e===void 0)&&e.silent||this.notifyApplicationBeforeCachingSnapshot()}allowsImmediateRender({element:e},t){return!this.notifyApplicationBeforeRender(e,t).defaultPrevented}viewRenderedSnapshot(e,t){this.view.lastRenderedLocation=this.history.location,this.notifyApplicationAfterRender()}viewInvalidated(){this.adapter.pageInvalidated()}frameLoaded(e){this.notifyApplicationAfterFrameLoad(e)}frameRendered(e,t){this.notifyApplicationAfterFrameRender(e,t)}applicationAllowsFollowingLinkToLocation(e,t){return!this.notifyApplicationAfterClickingLinkToLocation(e,t).defaultPrevented}applicationAllowsVisitingLocation(e){return!this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented}notifyApplicationAfterClickingLinkToLocation(e,t){return De("turbo:click",{target:e,detail:{url:t.href},cancelable:!0})}notifyApplicationBeforeVisitingLocation(e){return De("turbo:before-visit",{detail:{url:e.href},cancelable:!0})}notifyApplicationAfterVisitingLocation(e,t){return Ms(document.documentElement),De("turbo:visit",{detail:{url:e.href,action:t}})}notifyApplicationBeforeCachingSnapshot(){return De("turbo:before-cache")}notifyApplicationBeforeRender(e,t){return De("turbo:before-render",{detail:{newBody:e,resume:t},cancelable:!0})}notifyApplicationAfterRender(){return De("turbo:render")}notifyApplicationAfterPageLoad(e={}){return Os(document.documentElement),De("turbo:load",{detail:{url:this.location.href,timing:e}})}notifyApplicationAfterVisitingSamePageLocation(e,t){dispatchEvent(new HashChangeEvent("hashchange",{oldURL:e.toString(),newURL:t.toString()}))}notifyApplicationAfterFrameLoad(e){return De("turbo:frame-load",{target:e})}notifyApplicationAfterFrameRender(e,t){return De("turbo:frame-render",{detail:{fetchResponse:e},target:t,cancelable:!0})}elementDriveEnabled(e){const t=e==null?void 0:e.closest("[data-turbo]");return this.drive?t?t.getAttribute("data-turbo")!="false":!0:t?t.getAttribute("data-turbo")=="true":!1}getActionForLink(e){const t=e.getAttribute("data-turbo-action");return Si(t)?t:"advance"}getTargetFrameForLink(e){const t=e.getAttribute("data-turbo-frame");if(t)return t;{const r=e.closest("turbo-frame");if(r)return r.id}}get snapshot(){return this.view.snapshot}}function pa(n){Object.defineProperties(n,EG)}const EG={absoluteURL:{get(){return this.toString()}}},xe=new xG,{navigator:AG}=xe;function Uc(){xe.start()}function SG(n){xe.registerAdapter(n)}function CG(n,e){xe.visit(n,e)}function TG(n){xe.connectStreamSource(n)}function $G(n){xe.disconnectStreamSource(n)}function RG(n){xe.renderStreamMessage(n)}function DG(){xe.clearCache()}function jc(n){xe.setProgressBarDelay(n)}function LG(n){Zn.confirmMethod=n}var MG=Object.freeze({__proto__:null,navigator:AG,session:xe,PageRenderer:Hc,PageSnapshot:wt,start:Uc,registerAdapter:SG,visit:CG,connectStreamSource:TG,disconnectStreamSource:$G,renderStreamMessage:RG,clearCache:DG,setProgressBarDelay:jc,setConfirmMethod:LG});class OG{constructor(e){this.fetchResponseLoaded=t=>{},this.currentFetchRequest=null,this.resolveVisitPromise=()=>{},this.connected=!1,this.hasBeenLoaded=!1,this.settingSourceURL=!1,this.element=e,this.view=new V8(this,this.element),this.appearanceObserver=new F8(this,this.element),this.linkInterceptor=new zc(this,this.element),this.formInterceptor=new Fc(this,this.element)}connect(){this.connected||(this.connected=!0,this.reloadable=!1,this.loadingStyle==_t.lazy&&this.appearanceObserver.start(),this.linkInterceptor.start(),this.formInterceptor.start(),this.sourceURLChanged())}disconnect(){this.connected&&(this.connected=!1,this.appearanceObserver.stop(),this.linkInterceptor.stop(),this.formInterceptor.stop())}disabledChanged(){this.loadingStyle==_t.eager&&this.loadSourceURL()}sourceURLChanged(){(this.loadingStyle==_t.eager||this.hasBeenLoaded)&&this.loadSourceURL()}loadingStyleChanged(){this.loadingStyle==_t.lazy?this.appearanceObserver.start():(this.appearanceObserver.stop(),this.loadSourceURL())}async loadSourceURL(){if(!this.settingSourceURL&&this.enabled&&this.isActive&&(this.reloadable||this.sourceURL!=this.currentURL)){const e=this.currentURL;if(this.currentURL=this.sourceURL,this.sourceURL)try{this.element.loaded=this.visit(Ee(this.sourceURL)),this.appearanceObserver.stop(),await this.element.loaded,this.hasBeenLoaded=!0}catch(t){throw this.currentURL=e,t}}}async loadResponse(e){(e.redirected||e.succeeded&&e.isHTML)&&(this.sourceURL=e.response.url);try{const t=await e.responseHTML;if(t){const{body:r}=Pc(t),s=new Vr(await this.extractForeignFrameElement(r)),i=new Y8(this.view.snapshot,s,!1,!1);this.view.renderPromise&&await this.view.renderPromise,await this.view.render(i),xe.frameRendered(e,this.element),xe.frameLoaded(this.element),this.fetchResponseLoaded(e)}}catch(t){console.error(t),this.view.invalidate()}finally{this.fetchResponseLoaded=()=>{}}}elementAppearedInViewport(e){this.loadSourceURL()}shouldInterceptLinkClick(e,t){return e.hasAttribute("data-turbo-method")?!1:this.shouldInterceptNavigation(e)}linkClickIntercepted(e,t){this.reloadable=!0,this.navigateFrame(e,t)}shouldInterceptFormSubmission(e,t){return this.shouldInterceptNavigation(e,t)}formSubmissionIntercepted(e,t){this.formSubmission&&this.formSubmission.stop(),this.reloadable=!1,this.formSubmission=new Zn(this,e,t);const{fetchRequest:r}=this.formSubmission;this.prepareHeadersForRequest(r.headers,r),this.formSubmission.start()}prepareHeadersForRequest(e,t){e["Turbo-Frame"]=this.id}requestStarted(e){Ms(this.element)}requestPreventedHandlingResponse(e,t){this.resolveVisitPromise()}async requestSucceededWithResponse(e,t){await this.loadResponse(t),this.resolveVisitPromise()}requestFailedWithResponse(e,t){console.error(t),this.resolveVisitPromise()}requestErrored(e,t){console.error(t),this.resolveVisitPromise()}requestFinished(e){Os(this.element)}formSubmissionStarted({formElement:e}){Ms(e,this.findFrameElement(e))}formSubmissionSucceededWithResponse(e,t){const r=this.findFrameElement(e.formElement,e.submitter);this.proposeVisitIfNavigatedWithAction(r,e.formElement,e.submitter),r.delegate.loadResponse(t)}formSubmissionFailedWithResponse(e,t){this.element.delegate.loadResponse(t)}formSubmissionErrored(e,t){console.error(t)}formSubmissionFinished({formElement:e}){Os(e,this.findFrameElement(e))}allowsImmediateRender(e,t){return!0}viewRenderedSnapshot(e,t){}viewInvalidated(){}async visit(e){var t;const r=new Ei(this,ke.get,e,new URLSearchParams,this.element);return(t=this.currentFetchRequest)===null||t===void 0||t.cancel(),this.currentFetchRequest=r,new Promise(s=>{this.resolveVisitPromise=()=>{this.resolveVisitPromise=()=>{},this.currentFetchRequest=null,s()},r.perform()})}navigateFrame(e,t,r){const s=this.findFrameElement(e,r);this.proposeVisitIfNavigatedWithAction(s,e,r),s.setAttribute("reloadable",""),s.src=t}proposeVisitIfNavigatedWithAction(e,t,r){const s=fr("data-turbo-action",r,t,e);if(Si(s)){const{visitCachedSnapshot:i}=new NG(e);e.delegate.fetchResponseLoaded=o=>{if(e.src){const{statusCode:a,redirected:c}=o,l=e.ownerDocument.documentElement.outerHTML,u={statusCode:a,redirected:c,responseHTML:l};xe.visit(e.src,{action:s,response:u,visitCachedSnapshot:i,willRender:!1})}}}}findFrameElement(e,t){var r;const s=fr("data-turbo-frame",t,e)||this.element.getAttribute("target");return(r=fa(s))!==null&&r!==void 0?r:this.element}async extractForeignFrameElement(e){let t;const r=CSS.escape(this.id);try{if(t=ma(e.querySelector(`turbo-frame#${r}`),this.currentURL))return t;if(t=ma(e.querySelector(`turbo-frame[src][recurse~=${r}]`),this.currentURL))return await t.loaded,await this.extractForeignFrameElement(t);console.error(`Response has no matching <turbo-frame id="${r}"> element`)}catch(s){console.error(s)}return new At}formActionIsVisitable(e,t){const r=xi(e,t);return In(Ee(r),this.rootLocation)}shouldInterceptNavigation(e,t){const r=fr("data-turbo-frame",t,e)||this.element.getAttribute("target");if(e instanceof HTMLFormElement&&!this.formActionIsVisitable(e,t)||!this.enabled||r=="_top")return!1;if(r){const s=fa(r);if(s)return!s.disabled}return!(!xe.elementDriveEnabled(e)||t&&!xe.elementDriveEnabled(t))}get id(){return this.element.id}get enabled(){return!this.element.disabled}get sourceURL(){if(this.element.src)return this.element.src}get reloadable(){return this.findFrameElement(this.element).hasAttribute("reloadable")}set reloadable(e){const t=this.findFrameElement(this.element);e?t.setAttribute("reloadable",""):t.removeAttribute("reloadable")}set sourceURL(e){this.settingSourceURL=!0,this.element.src=e!=null?e:null,this.currentURL=this.element.src,this.settingSourceURL=!1}get loadingStyle(){return this.element.loading}get isLoading(){return this.formSubmission!==void 0||this.resolveVisitPromise()!==void 0}get isActive(){return this.element.isActive&&this.connected}get rootLocation(){var e;const t=this.element.ownerDocument.querySelector('meta[name="turbo-root"]'),r=(e=t==null?void 0:t.content)!==null&&e!==void 0?e:"/";return Ee(r)}}class NG{constructor(e){this.visitCachedSnapshot=({element:t})=>{var r;const{id:s,clone:i}=this;(r=t.querySelector("#"+s))===null||r===void 0||r.replaceWith(i)},this.clone=e.cloneNode(!0),this.id=e.id}}function fa(n){if(n!=null){const e=document.getElementById(n);if(e instanceof At)return e}}function ma(n,e){if(n){const t=n.getAttribute("src");if(t!=null&&e!=null&&R8(t,e))throw new Error(`Matching <turbo-frame id="${n.id}"> element has a source URL which references itself`);if(n.ownerDocument!==document&&(n=document.importNode(n,!0)),n instanceof At)return n.connectedCallback(),n.disconnectedCallback(),n}}const IG={after(){this.targetElements.forEach(n=>{var e;return(e=n.parentElement)===null||e===void 0?void 0:e.insertBefore(this.templateContent,n.nextSibling)})},append(){this.removeDuplicateTargetChildren(),this.targetElements.forEach(n=>n.append(this.templateContent))},before(){this.targetElements.forEach(n=>{var e;return(e=n.parentElement)===null||e===void 0?void 0:e.insertBefore(this.templateContent,n)})},prepend(){this.removeDuplicateTargetChildren(),this.targetElements.forEach(n=>n.prepend(this.templateContent))},remove(){this.targetElements.forEach(n=>n.remove())},replace(){this.targetElements.forEach(n=>n.replaceWith(this.templateContent))},update(){this.targetElements.forEach(n=>{n.innerHTML="",n.append(this.templateContent)})}};class PG extends HTMLElement{async connectedCallback(){try{await this.render()}catch(e){console.error(e)}finally{this.disconnect()}}async render(){var e;return(e=this.renderPromise)!==null&&e!==void 0?e:this.renderPromise=(async()=>{this.dispatchEvent(this.beforeRenderEvent)&&(await pr(),this.performAction())})()}disconnect(){try{this.remove()}catch{}}removeDuplicateTargetChildren(){this.duplicateChildren.forEach(e=>e.remove())}get duplicateChildren(){var e;const t=this.targetElements.flatMap(s=>[...s.children]).filter(s=>!!s.id),r=[...(e=this.templateContent)===null||e===void 0?void 0:e.children].filter(s=>!!s.id).map(s=>s.id);return t.filter(s=>r.includes(s.id))}get performAction(){if(this.action){const e=IG[this.action];if(e)return e;this.raise("unknown action")}this.raise("action attribute is missing")}get targetElements(){if(this.target)return this.targetElementsById;if(this.targets)return this.targetElementsByQuery;this.raise("target or targets attribute is missing")}get templateContent(){return this.templateElement.content.cloneNode(!0)}get templateElement(){if(this.firstElementChild instanceof HTMLTemplateElement)return this.firstElementChild;this.raise("first child element must be a <template> element")}get action(){return this.getAttribute("action")}get target(){return this.getAttribute("target")}get targets(){return this.getAttribute("targets")}raise(e){throw new Error(`${this.description}: ${e}`)}get description(){var e,t;return(t=((e=this.outerHTML.match(/<[^>]+>/))!==null&&e!==void 0?e:[])[0])!==null&&t!==void 0?t:"<turbo-stream>"}get beforeRenderEvent(){return new CustomEvent("turbo:before-stream-render",{bubbles:!0,cancelable:!0})}get targetElementsById(){var e;const t=(e=this.ownerDocument)===null||e===void 0?void 0:e.getElementById(this.target);return t!==null?[t]:[]}get targetElementsByQuery(){var e;const t=(e=this.ownerDocument)===null||e===void 0?void 0:e.querySelectorAll(this.targets);return t.length!==0?Array.prototype.slice.call(t):[]}}At.delegateConstructor=OG;customElements.define("turbo-frame",At);customElements.define("turbo-stream",PG);(()=>{let n=document.currentScript;if(!!n&&!n.hasAttribute("data-turbo-suppress-warning")){for(;n=n.parentElement;)if(n==document.body)return console.warn(qc`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `,n.outerHTML)}})();window.Turbo=MG;Uc();const ga="[A-Za-z$_][0-9A-Za-z$_]*",qG=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],FG=["true","false","null","undefined","NaN","Infinity"],Vc=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Gc=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Wc=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],BG=["arguments","this","super","console","window","document","localStorage","module","global"],zG=[].concat(Wc,Vc,Gc);function HG(n){const e=n.regex,t=(m,{after:E})=>{const C="</"+m[0].slice(1);return m.input.indexOf(C,E)!==-1},r=ga,s={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,E)=>{const C=m[0].length+m.index,N=m.input[C];if(N==="<"||N===","){E.ignoreMatch();return}N===">"&&(t(m,{after:C})||E.ignoreMatch());let F;if((F=m.input.substr(C).match(/^\s+extends\s+/))&&F.index===0){E.ignoreMatch();return}}},a={$pattern:ga,keyword:qG,literal:FG,built_in:zG,"variable.language":BG},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},d={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,p],subLanguage:"css"}},v={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,p]},A=n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),k={className:"comment",variants:[A,n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},_=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,d,y,v,h];p.contains=_.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(_)});const w=[].concat(k,p.contains),R=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),$={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R},x={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,e.concat(r,"(",e.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},B={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Vc,...Gc]}},G={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[$],illegal:/%/},D={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function X(m){return e.concat("(?!",m.join("|"),")")}const ue={match:e.concat(/\b/,X([...Wc,"super"]),r,e.lookahead(/\(/)),className:"title.function",relevance:0},O={begin:e.concat(/\./,e.lookahead(e.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},b={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},$]},S="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(S)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[$]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:B},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),G,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,d,y,v,k,h,B,{className:"attr",begin:r+e.lookahead(":"),relevance:0},f,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[k,n.REGEXP_MODE,{className:"function",begin:S,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:i},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[$,n.inherit(n.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},O,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[$]},ue,D,x,b,{match:/\$[(.]/}]}}const Er="[A-Za-z$_][0-9A-Za-z$_]*",Zc=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Kc=["true","false","null","undefined","NaN","Infinity"],Yc=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Xc=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Jc=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Qc=["arguments","this","super","console","window","document","localStorage","module","global"],el=[].concat(Jc,Yc,Xc);function UG(n){const e=n.regex,t=(m,{after:E})=>{const C="</"+m[0].slice(1);return m.input.indexOf(C,E)!==-1},r=Er,s={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,E)=>{const C=m[0].length+m.index,N=m.input[C];if(N==="<"||N===","){E.ignoreMatch();return}N===">"&&(t(m,{after:C})||E.ignoreMatch());let F;if((F=m.input.substr(C).match(/^\s+extends\s+/))&&F.index===0){E.ignoreMatch();return}}},a={$pattern:Er,keyword:Zc,literal:Kc,built_in:el,"variable.language":Qc},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},d={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,p],subLanguage:"css"}},v={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,p]},A=n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),k={className:"comment",variants:[A,n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},_=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,d,y,v,h];p.contains=_.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(_)});const w=[].concat(k,p.contains),R=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),$={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R},x={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,e.concat(r,"(",e.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},B={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Yc,...Xc]}},G={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[$],illegal:/%/},D={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function X(m){return e.concat("(?!",m.join("|"),")")}const ue={match:e.concat(/\b/,X([...Jc,"super"]),r,e.lookahead(/\(/)),className:"title.function",relevance:0},O={begin:e.concat(/\./,e.lookahead(e.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},b={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},$]},S="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(S)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[$]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:B},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),G,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,d,y,v,k,h,B,{className:"attr",begin:r+e.lookahead(":"),relevance:0},f,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[k,n.REGEXP_MODE,{className:"function",begin:S,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:i},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[$,n.inherit(n.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},O,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[$]},ue,D,x,b,{match:/\$[(.]/}]}}function jG(n){const e=UG(n),t=Er,r=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[e.exports.CLASS_REFERENCE]},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},contains:[e.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},a=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],c={$pattern:Er,keyword:Zc.concat(a),literal:Kc,built_in:el.concat(r),"variable.language":Qc},l={className:"meta",begin:"@"+t},u=(p,d,y)=>{const v=p.contains.findIndex(A=>A.label===d);if(v===-1)throw new Error("can not find mode to replace");p.contains.splice(v,1,y)};Object.assign(e.keywords,c),e.exports.PARAMS_CONTAINS.push(l),e.contains=e.contains.concat([l,s,i]),u(e,"shebang",n.SHEBANG()),u(e,"use_strict",o);const h=e.contains.find(p=>p.label==="func.def");return h.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx"]}),e}function VG(n){const e=n.regex,t=e.concat(/[A-Z_]/,e.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),r=/[A-Za-z0-9._:-]+/,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=n.inherit(i,{begin:/\(/,end:/\)/}),a=n.inherit(n.APOS_STRING_MODE,{className:"string"}),c=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,o,c,a]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function GG(n){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}var WG=`pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}`,ba=!1,on={false:"push",true:"unshift",after:"push",before:"unshift"},Ar={isPermalinkSymbol:!0};function Ns(n,e,t,r){var s;if(!ba){var i="Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#todo-anchor-or-file";typeof process=="object"&&process&&process.emitWarning?process.emitWarning(i):console.warn(i),ba=!0}var o=[Object.assign(new t.Token("link_open","a",1),{attrs:[].concat(e.permalinkClass?[["class",e.permalinkClass]]:[],[["href",e.permalinkHref(n,t)]],Object.entries(e.permalinkAttrs(n,t)))}),Object.assign(new t.Token("html_block","",0),{content:e.permalinkSymbol,meta:Ar}),new t.Token("link_close","a",-1)];e.permalinkSpace&&t.tokens[r+1].children[on[e.permalinkBefore]](Object.assign(new t.Token("text","",0),{content:" "})),(s=t.tokens[r+1].children)[on[e.permalinkBefore]].apply(s,o)}function tl(n){return"#"+n}function nl(n){return{}}var ZG={class:"header-anchor",symbol:"#",renderHref:tl,renderAttrs:nl};function Kn(n){function e(t){return t=Object.assign({},e.defaults,t),function(r,s,i,o){return n(r,t,s,i,o)}}return e.defaults=Object.assign({},ZG),e.renderPermalinkImpl=n,e}var Gr=Kn(function(n,e,t,r,s){var i,o=[Object.assign(new r.Token("link_open","a",1),{attrs:[].concat(e.class?[["class",e.class]]:[],[["href",e.renderHref(n,r)]],e.ariaHidden?[["aria-hidden","true"]]:[],Object.entries(e.renderAttrs(n,r)))}),Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:Ar}),new r.Token("link_close","a",-1)];if(e.space){var a=typeof e.space=="string"?e.space:" ";r.tokens[s+1].children[on[e.placement]](Object.assign(new r.Token(typeof e.space=="string"?"html_inline":"text","",0),{content:a}))}(i=r.tokens[s+1].children)[on[e.placement]].apply(i,o)});Object.assign(Gr.defaults,{space:!0,placement:"after",ariaHidden:!1});var Dt=Kn(Gr.renderPermalinkImpl);Dt.defaults=Object.assign({},Gr.defaults,{ariaHidden:!0});var rl=Kn(function(n,e,t,r,s){var i=[Object.assign(new r.Token("link_open","a",1),{attrs:[].concat(e.class?[["class",e.class]]:[],[["href",e.renderHref(n,r)]],Object.entries(e.renderAttrs(n,r)))})].concat(e.safariReaderFix?[new r.Token("span_open","span",1)]:[],r.tokens[s+1].children,e.safariReaderFix?[new r.Token("span_close","span",-1)]:[],[new r.Token("link_close","a",-1)]);r.tokens[s+1]=Object.assign(new r.Token("inline","",0),{children:i})});Object.assign(rl.defaults,{safariReaderFix:!1});var va=Kn(function(n,e,t,r,s){var i;if(!["visually-hidden","aria-label","aria-describedby","aria-labelledby"].includes(e.style))throw new Error("`permalink.linkAfterHeader` called with unknown style option `"+e.style+"`");if(!["aria-describedby","aria-labelledby"].includes(e.style)&&!e.assistiveText)throw new Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `"+e.style+"` style");if(e.style==="visually-hidden"&&!e.visuallyHiddenClass)throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");var o=r.tokens[s+1].children.filter(function(h){return h.type==="text"||h.type==="code_inline"}).reduce(function(h,p){return h+p.content},""),a=[],c=[];if(e.class&&c.push(["class",e.class]),c.push(["href",e.renderHref(n,r)]),c.push.apply(c,Object.entries(e.renderAttrs(n,r))),e.style==="visually-hidden"){if(a.push(Object.assign(new r.Token("span_open","span",1),{attrs:[["class",e.visuallyHiddenClass]]}),Object.assign(new r.Token("text","",0),{content:e.assistiveText(o)}),new r.Token("span_close","span",-1)),e.space){var l=typeof e.space=="string"?e.space:" ";a[on[e.placement]](Object.assign(new r.Token(typeof e.space=="string"?"html_inline":"text","",0),{content:l}))}a[on[e.placement]](Object.assign(new r.Token("span_open","span",1),{attrs:[["aria-hidden","true"]]}),Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:Ar}),new r.Token("span_close","span",-1))}else a.push(Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:Ar}));e.style==="aria-label"?c.push(["aria-label",e.assistiveText(o)]):["aria-describedby","aria-labelledby"].includes(e.style)&&c.push([e.style,n]);var u=[Object.assign(new r.Token("link_open","a",1),{attrs:c})].concat(a,[new r.Token("link_close","a",-1)]);(i=r.tokens).splice.apply(i,[s+3,0].concat(u)),e.wrapper&&(r.tokens.splice(s,0,Object.assign(new r.Token("html_block","",0),{content:e.wrapper[0]+`
`})),r.tokens.splice(s+3+u.length+1,0,Object.assign(new r.Token("html_block","",0),{content:e.wrapper[1]+`
`})))});function ya(n,e,t,r){var s=n,i=r;if(t&&Object.prototype.hasOwnProperty.call(e,s))throw new Error("User defined `id` attribute `"+n+"` is not unique. Please fix it in your Markdown to continue.");for(;Object.prototype.hasOwnProperty.call(e,s);)s=n+"-"+i,i+=1;return e[s]=!0,s}function Jt(n,e){e=Object.assign({},Jt.defaults,e),n.core.ruler.push("anchor",function(t){for(var r,s={},i=t.tokens,o=Array.isArray(e.level)?(r=e.level,function(h){return r.includes(h)}):function(h){return function(p){return p>=h}}(e.level),a=0;a<i.length;a++){var c=i[a];if(c.type==="heading_open"&&o(Number(c.tag.substr(1)))){var l=e.getTokensText(i[a+1].children),u=c.attrGet("id");u=u==null?ya(e.slugify(l),s,!1,e.uniqueSlugStartIndex):ya(u,s,!0,e.uniqueSlugStartIndex),c.attrSet("id",u),e.tabIndex!==!1&&c.attrSet("tabindex",""+e.tabIndex),typeof e.permalink=="function"?e.permalink(u,e,t,a):(e.permalink||e.renderPermalink&&e.renderPermalink!==Ns)&&e.renderPermalink(u,e,t,a),a=i.indexOf(c),e.callback&&e.callback(c,{slug:u,title:l})}}})}Object.assign(va.defaults,{style:"visually-hidden",space:!0,placement:"after",wrapper:null}),Jt.permalink={__proto__:null,legacy:Ns,renderHref:tl,renderAttrs:nl,makePermalink:Kn,linkInsideHeader:Gr,ariaHidden:Dt,headerLink:rl,linkAfterHeader:va},Jt.defaults={level:1,slugify:function(n){return encodeURIComponent(String(n).trim().toLowerCase().replace(/\s+/g,"-"))},uniqueSlugStartIndex:1,tabIndex:"-1",getTokensText:function(n){return n.filter(function(e){return["text","code_inline"].includes(e.type)}).map(function(e){return e.content}).join("")},permalink:!1,renderPermalink:Ns,permalinkClass:Dt.defaults.class,permalinkSpace:Dt.defaults.space,permalinkSymbol:"\xB6",permalinkBefore:Dt.defaults.placement==="before",permalinkHref:Dt.defaults.renderHref,permalinkAttrs:Dt.defaults.renderAttrs},Jt.default=Jt;const KG=function(n){return encodeURIComponent(String(n).trim().toLowerCase().replace(/\s+/g,"-"))},YG={includeLevel:[1,2],containerClass:"table-of-contents",slugify:KG,markerPattern:/^\[\[toc\]\]/im,listType:"ul",format:function(n,e){return e.renderInline(n)},forceFullToc:!1,containerHeaderHtml:void 0,containerFooterHtml:void 0,transformLink:void 0};function XG(n,e,t){const r=[];let s=null;return e.forEach(i=>{if(i.type==="heading_open"){const o=JG(i),a=parseInt(i.tag.toLowerCase().replace("h",""),10);n.indexOf(a)>=0&&(s={level:a,text:null,anchor:o||null})}else if(s&&i.type==="inline"){const o=i.children.filter(a=>a.type==="text"||a.type==="code_inline").reduce((a,c)=>a+c.content,"");s.text=o,s.anchor||(s.anchor=t.slugify(o,i.content))}else i.type==="heading_close"&&(s&&r.push(s),s=null)}),r}function JG(n){if(n&&n.attrs&&n.attrs.length>0){const e=n.attrs.find(t=>Array.isArray(t)&&t.length>=2?t[0]==="id":!1);if(e&&Array.isArray(e)&&e.length>=2){const[t,r]=e;return r}}return null}function QG(n){return Math.min(...n.map(e=>e.level))}function ws(n,e,t,r){const s={level:n,text:e,anchor:t,children:[],parent:r};return r.children.push(s),s}function eW(n){const e={level:QG(n)-1,anchor:null,text:null,children:[],parent:null};let t=e,r=t;return n.forEach(s=>{if(s.level>r.level)Array.from({length:s.level-r.level}).forEach(i=>{t=r,r=ws(s.level,null,null,t)}),r.text=s.text,r.anchor=s.anchor;else if(s.level===r.level)r=ws(s.level,s.text,s.anchor,t);else if(s.level<r.level){for(let i=0;i<r.level-s.level;i++)t=t.parent;r=ws(s.level,s.text,s.anchor,t)}}),e}function sl(n,e,t){return"<"+e.listType+">"+n.children.map(r=>{let s="<li>",i=r.anchor;e&&e.transformLink&&(i=e.transformLink(i));let o=r.text?e.format(r.text,t,i):null;return s+=i?`<a href="#${i}">${o}</a>`:o||"",s+(r.children.length>0?sl(r,e,t):"")+"</li>"}).join("")+"</"+e.listType+">"}var tW=function(n,e){const t=Object.assign({},YG,e),r=t.markerPattern;let s;function i(o,a){let c,l;if(o.src.charCodeAt(o.pos)!==91||a||(l=r.exec(o.src.substr(o.pos)),l=l?l.filter(function(h){return h}):[],l.length<1))return!1;c=o.push("toc_open","toc",1),c.markup="[[toc]]",c=o.push("toc_body","",0),c=o.push("toc_close","toc",-1);var u=o.src.indexOf(`
`,o.pos);return u!==-1?o.pos=u:o.pos=o.pos+o.posMax+1,!0}n.renderer.rules.toc_open=function(o,a){var c='<div class="'+t.containerClass+'">';return t.containerHeaderHtml&&(c+=t.containerHeaderHtml),c},n.renderer.rules.toc_close=function(o,a){var c="";return t.containerFooterHtml&&(c=t.containerFooterHtml),c+"</div>"},n.renderer.rules.toc_body=function(o,a){if(t.forceFullToc)throw"forceFullToc was removed in version 0.5.0. For more information, see https://github.com/Oktavilla/markdown-it-table-of-contents/pull/41";{const c=XG(t.includeLevel,s.tokens,t),l=eW(c);return sl(l,t,n)}},n.core.ruler.push("grab_state",function(o){s=o}),n.inline.ruler.after("emphasis","toc",i)},nW=Object.defineProperty,rW=Object.getOwnPropertyDescriptor,il=(n,e,t,r)=>{for(var s=r>1?void 0:r?rW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&nW(e,t,s),s};let Sr=class extends ce{get icone(){return this.theme!=="light"?ud:od}connectedCallback(){super.connectedCallback(),this.theme=localStorage.getItem("kami-theme-mode")||"light",document.addEventListener("theme",({detail:n})=>{this.theme=n.theme})}updateTheme(){const n=document.querySelector("kami-theme");!n||n.updateTheme(this.theme==="light"?"dark":"light")}render(){return M`
      <svg @click=${this.updateTheme} class="mode" viewBox="0 0 24 25">
        <path d=${this.icone}></path>
      </svg>  
    `}};Sr.styles=le`
    :host {
      display: flex;
      align-items: center;
      height: 27px;
    }

    .mode {
      height: 100%;
      fill: var(--kami-theme-text);
      cursor: pointer;
    }
  `;il([Et()],Sr.prototype,"theme",2);Sr=il([me("mode-element")],Sr);var sW=Object.defineProperty,iW=Object.getOwnPropertyDescriptor,Yn=(n,e,t,r)=>{for(var s=r>1?void 0:r?iW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&sW(e,t,s),s};let Bt=class extends ce{constructor(){super(...arguments);this.stroke=!1,this.background=!1,this.small=!1,this.href=""}render(){return M`
      <a href="${this.href}">
        <button 
          class="
            button
            ${this.stroke?"button--stroke":""}
            ${this.background?"button--background":""}
            ${this.small?"button--small":""}
          "
        >
          <slot></slot>
        </button>
      </a>
    `}};Bt.styles=le`
    :host {
      display: block;
    }

    .button {
      width: 173px;
      height: 51px;
      border-radius: 7px;
      border: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      cursor: pointer;
      color: var(--kami-theme-background);
      background:  var(--kami-theme-text);
    }

    .button--background {
      color: var(--kami-theme-white);
      background: linear-gradient(94.7deg, #34D3CE 3.12%, #4E7DE6 102.14%);
    }

    .button--stroke {
      color: var(--kami-theme-text);
      background: transparent;
      border: 1px solid var(--kami-theme-text);
    }

    .button--small {
      width: 140px;
    }
  `;Yn([q()],Bt.prototype,"stroke",2);Yn([q()],Bt.prototype,"background",2);Yn([q()],Bt.prototype,"small",2);Yn([q()],Bt.prototype,"href",2);Bt=Yn([me("button-element")],Bt);var oW=Object.defineProperty,aW=Object.getOwnPropertyDescriptor,Wr=(n,e,t,r)=>{for(var s=r>1?void 0:r?aW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&oW(e,t,s),s};let an=class extends ce{render(){return M`
      <h1 class="title" style="
        text-align: ${this.align||"left"};
        font-size: ${this.size||"72"}px;
        margin: ${this.margin||"0px auto 20px"}
      ">
        <span>
          <slot></slot>
        </span>  
      </h1>
    `}};an.styles=le`
    :host {
      display: block;
    }
    
    .title {
      max-width: 52rem;
      width: 100%;
      font-style: normal;
      font-weight: 900;
      line-height: 77px;
    }

    .title span {
      background: linear-gradient(90.45deg, #34D3CE 9.1%, #4F7BE7 95.02%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    @media screen and (max-width: 700px) {
      .title {
        text-transform: uppercase;
        font-size: 30px !important;
        margin: 0px !important;
        line-height: 1 !important;
        text-align: center !important;
      }
    }
  `;Wr([q()],an.prototype,"align",2);Wr([q()],an.prototype,"size",2);Wr([q()],an.prototype,"margin",2);an=Wr([me("title-element")],an);var cW=Object.defineProperty,lW=Object.getOwnPropertyDescriptor,Zr=(n,e,t,r)=>{for(var s=r>1?void 0:r?lW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&cW(e,t,s),s};let cn=class extends ce{constructor(){super(...arguments);this.width=0,this.navIsOpen=!1}connectedCallback(){super.connectedCallback();const n=localStorage.getItem("kami-theme-mode");n&&["light","dark"].includes(n)&&(this.theme=n),document.addEventListener("theme",({detail:e})=>{this.theme=e.theme}),window.addEventListener("resize",this.updateWindowSize.bind(this)),this.updateWindowSize()}updateWindowSize(){this.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}openNav(){this.navIsOpen=!0}closeNav(){this.navIsOpen=!1}renderNav(){return M`
      <nav class="menu__nav">
        <a class="menu__link" href="/guide.html">guide</a>
        <a class="menu__link" href="/components.html">components</a>
        <a class="menu__link" href="https://github.com/Kamiapp-fr/kami-collection">github</a>
        <mode-element class="menu__link"></mode-element>
      </nav>
    `}renderResponsizeNav(){return M`
      <svg @click=${this.openNav} class="menu__icon" viewBox="0 0 24 25">
        <path d=${ld}></path>
      </svg>  
    `}renderCloseNav(){return M`
      <svg @click=${this.closeNav} class="menu__icon menu__icon--close" viewBox="0 0 24 25">
        <path d=${oi}></path>
      </svg>  
    `}render(){return M`
      <header class="menu">
        <div class="menu__content">
          <div class="menu__logo">
            <a href="/">
              <img src="../img/kami-${this.theme||"light"}.png">
            </a>
          </div>
          ${this.width>700?this.renderNav():this.renderResponsizeNav()}
        </div>
      </header>
      <kami-transition transition="slide-y" easing="ease-out" duration="300" show="${this.navIsOpen}">
        <div class="menu__responsive-nav">
          <title-element>Menu</title-element>
          ${this.renderCloseNav()}
          ${this.renderNav()}
        </div>
      </kami-transition>
    `}};cn.styles=le`
    :host {
      display: block;
      height: 65px;
    }

    .menu {
      z-index: 1000;
      display: flex;
      position: fixed;
      width: 100%;
      align-items: center;
      justify-content: center;
      height: 65px;
      background-color: var(--kami-theme-background);
      border-bottom:  1px solid var(--kami-theme-border-color);
      padding: 0px 30px;
      box-sizing: border-box;
    }

    .menu__content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 940px;
    }

    .menu__nav {
      display: flex;
      align-items: center;
    }

    .menu__link {
      margin: 0px 10px;
      text-decoration: none;
      color: var(--kami-theme-text);
    }

    .menu__link:hover {
      color: var(--kami-theme-primary);
    }

    .menu__icon {
      height: 30px;
      fill: var(--kami-theme-text);
      cursor: pointer;
    }

    .menu__icon--close {
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px;
      height: 40px;
    }

    .menu__responsive-nav {
      position: fixed;
      width: 100%;
      height: 100vh;
      z-index: 1000;
      display: flex;
      background: var(--kami-theme-background);
      text-align: left;
      padding: 40px;
      box-sizing: border-box;
      flex-direction: column;
    }

    .menu__responsive-nav .menu__nav {
      flex-direction: column;
      font-size: 25px;
      text-transform: uppercase;
      align-items: flex-start;
    }

    .menu__responsive-nav .menu__link {
      margin: 10px;
      height: 40px;
      font-weight: 800;
    }

    title-element {
      margin: 25px 0px;
    }
  `;Zr([Et()],cn.prototype,"theme",2);Zr([Et()],cn.prototype,"width",2);Zr([Et()],cn.prototype,"navIsOpen",2);cn=Zr([me("menu-element")],cn);var uW=Object.defineProperty,hW=Object.getOwnPropertyDescriptor,Ci=(n,e,t,r)=>{for(var s=r>1?void 0:r?hW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&uW(e,t,s),s};let qn=class extends ce{constructor(){super(...arguments);this.name="",this.summary=""}get nameNoPrefix(){const n=this.name.split("-");return n.shift(),n.join("-")}render(){return M`
      <div class="component">
        <h2 class="component__name">${this.name}</h2>
        <h3 class="component__description">${this.summary}</h3>
        <div class="component__cta">
          <button-element href="/docs/${this.nameNoPrefix}.html" background="true" small="true">Docs</button-element>
          <button-element href="/playgrounds/${this.nameNoPrefix}.html" stroke="true" small="true">Playground</button-element>
        </div>
      </div>
    `}};qn.styles=le`
    :host {
      display: block;
      margin: 10px;
    }

    .component {
      display: flex;
      flex-direction: column;
      height: 190px;
      width: 340px;
      padding: 20px;
      box-sizing: border-box;
      border: solid 1px var(--kami-theme-border-color);
      border-radius: 8px;
      background-color: var(--kami-theme-background)
    }

    .component__name {
      margin: 0px;
    }

    .component__description {
      font-weight: 300;
      font-size: 16px;
      margin: 4px 0px;
    }

    .component__cta {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      height: 100%;
      align-items: end;
    }
  `;Ci([q()],qn.prototype,"name",2);Ci([q()],qn.prototype,"summary",2);qn=Ci([me("component-element")],qn);async function dW(n,e,t,r){var l,u,h,p,d;const s=await n;if(!Un(s))return Gs;const i=Lr(s,t),o=js(s,r),a=Vs(o.members),c=jl(o.members);return M`
    <header part="header">
      <div part="header-title">&lt;${o.name}&gt;</div>
      <nav>
        <label part="select-label">
          <select
            @change=${e}
            .value=${r||""}
            ?hidden=${i.length===1}
            part="select"
          >
            ${i.map(y=>M`<option value=${y.name}>${y.name}</option>`)}
          </select>
        </label>
      </nav>
    </header>
    <div ?hidden=${o.description===""} part="docs-description">
      ${ni(o.description)}
    </div>
    <api-docs-layout
      .name=${o.name}
      .props=${a}
      .attrs=${(l=o.attributes)!=null?l:[]}
      .methods=${c}
      .events=${(u=o.events)!=null?u:[]}
      .slots=${(h=o.slots)!=null?h:[]}
      .cssParts=${(p=o.cssParts)!=null?p:[]}
      .cssProps=${(d=o.cssProperties)!=null?d:[]}
      part="docs-container"
    ></api-docs-layout>
  `}class pW extends Ws(ce){render(){return M`${Us(dW(this.jsonFetched,this._onSelect,this.only,this.selected))}`}_onSelect(e){this.selected=e.target.value}}const ol=le`
  :host {
    background-color: transparent;
    border: none;
    border-radius: 6px;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    --ave-primary-color: var(--kami-theme-primary);
    --ave-accent-color: var(--kami-theme-accent);
    --ave-header-color: var(--kami-theme-text);
  }
    
  /* kami layout styles */
  header {
    margin: 20px;
    background-image: var(--kami-theme-gradient-primary);
    padding: 0.75rem 1rem;
    border-radius: 5px;

  }
    
  api-viewer-tabs {
    background-color: var(--kami-theme-background);
    border-radius: 5px;
  }

  api-viewer-tab {
    color: var(--kami-theme-text);
  }

  [part='demo-output']   {
    border-top: none;
    background-color: var(--kami-theme-background);
  }

  [part="demo-snippet"] {
    background: #161b22;
  }

  [part="knobs"] {
    background: #161b22;
    color: white;
  }

  [part="header-title"] {
    font-family: 'Inter';
    font-size: 18px;
    margin: 10px;
    font-weight: 600;
    color: var(--kami-theme-white);
  }

  [part="demo-tabs"] {
    border: none;
  }

  header [part="select"] {
    display: none;
  }

  [part="header"] {
    border-radius: 10px;
    background: linear-gradient(94.7deg, rgb(52, 211, 206) 3.12%, rgb(78, 125, 230) 102.14%);
  }

  [part="header-title"] {
    color: var(--kami-theme-white);
    text-shadow: var(--kami-theme-text-shadow);
    text-transform: uppercase;
    margin: 0px;
    padding: 15px;
    font-size: 23px;
    font-family: Inter;
  }

  api-viewer-panel {
    border-radius: 10px;
    overflow: hidden;
    margin: 0px 30px 30px 30px;
  }
    
  /* kami input styles */
  input,
  select {
    padding: calc(0.5em - 1px) calc(0.75em - 1px);
    font-size: 1rem;
  }
    
  input {
    font-size: 0.75rem;
  }
    

  checkbox {
    margin: 0.5rem 0.25rem;
  }
    
  select {
    height: 2.5em;
    padding-right: 2.5em;
    font-size: 1em;
    border: solid 1px #dbdbdb;
    border-radius: 4px;
    line-height: 1.5;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
    
  select-label {
    height: 2.5em;
    max-width: 100%;
    position: relative;
    font-size: 0.75rem;
  }
    
  select-label {
    display: block;
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    right: 1.125em;
    width: 0.625em;
    height: 0.625em;
    margin-top: -0.4375em;
    border: 3px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    transform: rotate(-45deg);
    transform-origin: center;
    border-color: #3273dc;
    pointer-events: none;
  }
    
  tab {
    max-width: 155px;
    font-size: 0.875rem;
    text-transform: initial;
    font-weight: normal;
  }

  pre {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    color: white;
  }

  .name {
    color: #7ee787;
  }

  .attr {
    color: #79c0ff
  }

  .string {
    color: #a5d6ff;
  }
    
  @media (max-width: 480px) {
    tab {
      max-width: 120px;
    }
  }
`;var fW=Object.defineProperty,mW=Object.getOwnPropertyDescriptor,gW=(n,e,t,r)=>{for(var s=r>1?void 0:r?mW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&fW(e,t,s),s};let _a=class extends pW{static get styles(){return[Or,Xa,ol,le`
        :host {
          --ave-label-color: var(--kami-theme-text);
          --ave-monospace-font: var(--kami-theme-font-secondary);
          --ave-item-color: var(--kami-theme-primary);
          --ave-secondary-color: var(--kami-theme-secondary)
        }

        .docs {
          width: 100%;
          max-width: 1000px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--kami-theme-border-color);
        }

        [part="docs-item"] {
          border-bottom: 1px solid var(--kami-theme-border-color);
        }

        [part="docs-item"]:last-child {
          border-bottom: none;
        }
      `]}render(){return M`
      <div class="docs">
        ${super.render()}
      </div>
    `}};_a=gW([me("docs-element")],_a);var bW=Object.defineProperty,vW=Object.getOwnPropertyDescriptor,Ti=(n,e,t,r)=>{for(var s=r>1?void 0:r?vW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&bW(e,t,s),s};let Cr=class extends ii{static get styles(){return[Or,si,ol,le`
        :host {
          display: flex;
          justify-content: center;
          box-shadow: none;
          max-width: 100%;
          margin: 60px !important;
        }

        .playground {
          width: 100%;
          max-width: 1000px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--kami-theme-border-color);
        }

        [part="demo-tabs"] [part="tab-panel"] {
          background: rgb(22, 27, 34);
          color: white;
          margin: 0px 20px 20px;
        }

        [part="demo-output"] {
          margin: 0px 21px 20px;
          border: 1px solid var(--kami-theme-border-color);
          border-radius: 10px;
        }

        @media screen and (max-width: 700px) {
          :host {
            padding: 25px 15px !important;
            margin: 0 !important;
            box-sizing: border-box;
          }

          [part="demo-tabs"] [part="tab-panel"] {
            width: auto !important;
            max-width: 100vw !important;
            margin-top: 25px !important;
          }
        }
      `]}constructor(){super();this.src="/custom-elements.json"}async connectedCallback(){if(super.connectedCallback(),!this.element)throw new Error("Missing element");this.only=[this.element],this.selected=this.element}firstUpdated(){this.setTemplates()}setTemplates(n){Rr(Number(this._id),n||Array.from(this.querySelectorAll("template")))}render(){return M`
      <div class="playground">
        ${super.render()}
      </div>
    `}};Ti([q()],Cr.prototype,"element",2);Ti([hn('[part="demo-output"]')],Cr.prototype,"demo",2);Cr=Ti([me("playground-element")],Cr);var yW=Object.defineProperty,_W=Object.getOwnPropertyDescriptor,wW=(n,e,t,r)=>{for(var s=r>1?void 0:r?_W(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&yW(e,t,s),s};let Is=class extends ce{render(){return M`
      <footer class="footer">
        <p>Made with ☕ by the <a href="https://www.kamiapp.fr/en">Kami</a> team</p>
        <p>Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a></p>
        <p>Copyright © 2019-${new Date().getFullYear()} Kami</p>
      </footer>
    `}};Is.styles=le`
    .footer {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        height: 120px;
        padding: 0px 40px;
        box-sizing: border-box;
        font-size: 14px;
        text-align: center;
        font-weight: 400;
        line-height: 1.5;
        border-top: solid 1px var(--kami-theme-border-color);
        color: var(--kami-theme-accent);
    }

    .footer p {
        margin: 0px;
    }

    .footer a {
        color: var(--kami-theme-primary);
    }
  `;Is=wW([me("footer-element")],Is);var kW=Object.defineProperty,xW=Object.getOwnPropertyDescriptor,EW=(n,e,t,r)=>{for(var s=r>1?void 0:r?xW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&kW(e,t,s),s};let Ps=class extends ce{render(){return M`
      <main class="home">
        <img class="home__logo" src="../img/logo.png">
        <title-element size="64" margin="20px 0 0 0" >KAMI COLLECTION</title-element>
        <h2 class="home__description">
          A collection of web component develloped by the <a href="https://www.kamiapp.fr">Kami</a> team. 
          It contain a list of usefull component for all your project.
        </h2>
        <div class="home__buttons">
          <button-element href="/guide.html" class="home__button" background="true">
            Getting Started
          </button-element>
          <button-element href="/components.html" class="home__button" stroke="true">
            Components
          </button-element>
        </div>
      </main>
    `}};Ps.styles=le`
    .home {
      width: 100%;
      height: calc(100% - 65px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .home__logo {
      width: 35%;
    }

    .home__description {
      max-width: 475px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: var(--kami-theme-text);
    }

    .home__description a {
      text-decoration: none;
      color: var(--kami-theme-primary);
      font-weight: bold;
    }

    .home__description a:hover {
      color: var(--kami-theme-secondary);
    }

    .home__buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .home__button {
      margin: 20px 10px;
    }

    @media screen and (max-width: 700px) {
      .home {
        padding: 0 20px;
        box-sizing: border-box;
      }

      .home__logo {
        width: 80%;
        margin-bottom: 25px;
      }

      .home__buttons {
        flex-direction: column;
      }

      .home__button {
        margin: 0;
        margin-top: 10px;
      }
    }
  `;Ps=EW([me("home-element")],Ps);var AW=Object.defineProperty,SW=Object.getOwnPropertyDescriptor,$i=(n,e,t,r)=>{for(var s=r>1?void 0:r?SW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&AW(e,t,s),s};let Fn=class extends ce{constructor(){super(...arguments);this.name="Guide",this.element=""}render(){return M`
      <main class="guide">
        <title-element>${this.name}</title-element>
        <kami-markdown>
          <slot></slot>
        </kami-markdown>
        ${this.element?M`
          <docs-element selected="${this.element}" src="/custom-elements.json"></docs-element> 
        `:""}
      </main>
    `}};Fn.styles=le`
    .guide {
      padding: 0 40px;    
      margin: 40px 0px;
      box-sizing: border-box;
      min-height: calc(100vh - 185px);
    }

    .guide docs-element {
      margin: auto;
    }

    @media screen and (max-width: 700px) {
      .guide {
        padding: 0px 30px;
      }

      title-element {
        margin-bottom: 10px;
      }
    }
  `;$i([q()],Fn.prototype,"name",2);$i([q()],Fn.prototype,"element",2);Fn=$i([me("guide-element")],Fn);var CW=Object.defineProperty,TW=Object.getOwnPropertyDescriptor,al=(n,e,t,r)=>{for(var s=r>1?void 0:r?TW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&CW(e,t,s),s};let Tr=class extends ce{constructor(){super(...arguments);this.manifest={schemaVersion:"1.0.0",modules:[]}}get components(){return this.manifest.modules.map(({declarations:e})=>{if(!e||e.length===0)return;const[{name:t,summary:r}]=e;return{name:this.toKebabCase(t),summary:r||""}}).filter(e=>e!==void 0)}async connectedCallback(){super.connectedCallback();const e=await(await fetch("/custom-elements.json")).json();this.manifest=e}toKebabCase(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}render(){return M`
      <main class="components">
        <title-element align="center">Components</title-element>
        <div class="components__content">
          ${this.components.map(({name:n,summary:e})=>M`
            <component-element name="${n}" summary="${e}"></component-element>
          `)}
        </div>
      </main>
    `}};Tr.styles=le`
    :host {
      display: block;
    }

    .components {
      margin: 60px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: calc(100vh - 185px);
    }

    .components__content {
      display: flex;
      justify-content: center;
      max-width: 1250px;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 700px) {
      .components {
        margin: 40px 0px;
      }

      title-element {
        margin-bottom: 15px;
      }
    }
  `;al([Et()],Tr.prototype,"manifest",2);Tr=al([me("components-element")],Tr);var $W=Object.defineProperty,RW=Object.getOwnPropertyDescriptor,DW=(n,e,t,r)=>{for(var s=r>1?void 0:r?RW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&$W(e,t,s),s};let qs=class extends ce{render(){return M`
      <div class="app">
        <menu-element></menu-element>
        <slot></slot>
        <footer-element></footer-element>
      </div>
    `}};qs.styles=le`
    :host {
      display: block;
    }

    .app {
      width: 100%;
      height: 100vh;
      background-color: var(--kami-theme-background);
      color: var(--kami-theme-text);
      font-family: 'Inter', sans-serif;
      overflow: auto;
      overflow-x: hidden;
    }
  `;qs=DW([me("app-element")],qs);de.registerHighlightLanguage("js",HG);de.registerHighlightLanguage("ts",jG);de.registerHighlightLanguage("html",VG);de.registerHighlightLanguage("sh",GG);de.registerHighlightStyle(WG);de.use(Jt);de.use(tW);jc(200);
