var tl=Object.defineProperty,nl=Object.defineProperties;var rl=Object.getOwnPropertyDescriptors;var Ai=Object.getOwnPropertySymbols;var sl=Object.prototype.hasOwnProperty,il=Object.prototype.propertyIsEnumerable;var Si=(n,e,t)=>e in n?tl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ie=(n,e)=>{for(var t in e||(e={}))sl.call(e,t)&&Si(n,t,e[t]);if(Ai)for(var t of Ai(e))il.call(e,t)&&Si(n,t,e[t]);return n},Pe=(n,e)=>nl(n,rl(e));const ol=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};ol();const yr=[],_r=(n,e)=>{yr[n]=e},Yt=Object.freeze({HOST:"host",KNOB:"knob",SLOT:"slot",PREFIX:"prefix",SUFFIX:"suffix",WRAPPER:"wrapper"}),Rt=n=>n instanceof HTMLTemplateElement,$s=(n,e)=>t=>{const{element:r,target:s}=t.dataset;return r===n&&s===e},ir=n=>Rt(n)?n.content.firstElementChild:null,bn=(n,e,t)=>yr[n].find($s(e,t)),al=(n,e,t)=>yr[n].filter($s(e,t)),hs=(n,e,t)=>yr[n].some($s(e,t));/*! *****************************************************************************
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
 */const Rs=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ds=Symbol(),Ci=new Map;class na{constructor(e,t){if(this._$cssResult$=!0,t!==Ds)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ci.get(this.cssText);return Rs&&e===void 0&&(Ci.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const ra=n=>new na(typeof n=="string"?n:n+"",Ds),he=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[i+1],n[0]);return new na(t,Ds)},cl=(n,e)=>{Rs?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),s=window.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,n.appendChild(r)})},Ti=Rs?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ra(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Br;const $i=window.trustedTypes,ll=$i?$i.emptyScript:"",Ri=window.reactiveElementPolyfillSupport,ds={toAttribute(n,e){switch(e){case Boolean:n=n?ll:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},sa=(n,e)=>e!==n&&(e==e||n==n),zr={attribute:!0,type:String,converter:ds,reflect:!1,hasChanged:sa};class Vt extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const s=this._$Eh(r,t);s!==void 0&&(this._$Eu.set(s,r),e.push(s))}),e}static createProperty(e,t=zr){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||zr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of r)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(Ti(s))}else e!==void 0&&t.push(Ti(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return cl(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=zr){var s,i;const o=this.constructor._$Eh(e,r);if(o!==void 0&&r.reflect===!0){const a=((i=(s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&i!==void 0?i:ds.toAttribute)(t,r.type);this._$Ei=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(e,t){var r,s,i;const o=this.constructor,a=o._$Eu.get(e);if(a!==void 0&&this._$Ei!==a){const c=o.getPropertyOptions(a),l=c.converter,u=(i=(s=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&s!==void 0?s:typeof l=="function"?l:null)!==null&&i!==void 0?i:ds.fromAttribute;this._$Ei=a,this[a]=u(t,c.type),this._$Ei=null}}requestUpdate(e,t,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||sa)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,i)=>this[i]=s),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}Vt.finalized=!0,Vt.elementProperties=new Map,Vt.elementStyles=[],Vt.shadowRootOptions={mode:"open"},Ri==null||Ri({ReactiveElement:Vt}),((Br=globalThis.reactiveElementVersions)!==null&&Br!==void 0?Br:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hr;const Xt=globalThis.trustedTypes,Di=Xt?Xt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ot=`lit$${(Math.random()+"").slice(9)}$`,Ls="?"+ot,ul=`<${Ls}>`,Jt=document,wn=(n="")=>Jt.createComment(n),kn=n=>n===null||typeof n!="object"&&typeof n!="function",ia=Array.isArray,oa=n=>{var e;return ia(n)||typeof((e=n)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Li=/-->/g,Mi=/>/g,xt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Oi=/'/g,Ni=/"/g,aa=/^(?:script|style|textarea|title)$/i,hl=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),P=hl(1),je=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Ii=new WeakMap,ca=(n,e,t)=>{var r,s;const i=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new rn(e.insertBefore(wn(),a),a,void 0,t!=null?t:{})}return o._$AI(n),o},Zt=Jt.createTreeWalker(Jt,129,null,!1),la=(n,e)=>{const t=n.length-1,r=[];let s,i=e===2?"<svg>":"",o=fn;for(let c=0;c<t;c++){const l=n[c];let u,h,p=-1,d=0;for(;d<l.length&&(o.lastIndex=d,h=o.exec(l),h!==null);)d=o.lastIndex,o===fn?h[1]==="!--"?o=Li:h[1]!==void 0?o=Mi:h[2]!==void 0?(aa.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=xt):h[3]!==void 0&&(o=xt):o===xt?h[0]===">"?(o=s!=null?s:fn,p=-1):h[1]===void 0?p=-2:(p=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?xt:h[3]==='"'?Ni:Oi):o===Ni||o===Oi?o=xt:o===Li||o===Mi?o=fn:(o=xt,s=void 0);const y=o===xt&&n[c+1].startsWith("/>")?" ":"";i+=o===fn?l+ul:p>=0?(r.push(u),l.slice(0,p)+"$lit$"+l.slice(p)+ot+y):l+ot+(p===-2?(r.push(void 0),c):y)}const a=i+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Di!==void 0?Di.createHTML(a):a,r]};class xn{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,c=this.parts,[l,u]=la(e,t);if(this.el=xn.createElement(l,r),Zt.currentNode=this.el.content,t===2){const h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(s=Zt.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(ot)){const d=u[o++];if(h.push(p),d!==void 0){const y=s.getAttribute(d.toLowerCase()+"$lit$").split(ot),v=/([.?@])?(.*)/.exec(d);c.push({type:1,index:i,name:v[2],strings:y,ctor:v[1]==="."?ha:v[1]==="?"?da:v[1]==="@"?pa:Mn})}else c.push({type:6,index:i})}for(const p of h)s.removeAttribute(p)}if(aa.test(s.tagName)){const h=s.textContent.split(ot),p=h.length-1;if(p>0){s.textContent=Xt?Xt.emptyScript:"";for(let d=0;d<p;d++)s.append(h[d],wn()),Zt.nextNode(),c.push({type:2,index:++i});s.append(h[p],wn())}}}else if(s.nodeType===8)if(s.data===Ls)c.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(ot,h+1))!==-1;)c.push({type:7,index:i}),h+=ot.length-1}i++}}static createElement(e,t){const r=Jt.createElement("template");return r.innerHTML=e,r}}function Mt(n,e,t=n,r){var s,i,o,a;if(e===je)return e;let c=r!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[r]:t._$Cu;const l=kn(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((i=c==null?void 0:c._$AO)===null||i===void 0||i.call(c,!1),l===void 0?c=void 0:(c=new l(n),c._$AT(n,t,r)),r!==void 0?((o=(a=t)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[r]=c:t._$Cu=c),c!==void 0&&(e=Mt(n,c._$AS(n,e.values),c,r)),e}class ua{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:s}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Jt).importNode(r,!0);Zt.currentNode=i;let o=Zt.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new rn(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new fa(o,this,e)),this.v.push(u),l=s[++c]}a!==(l==null?void 0:l.index)&&(o=Zt.nextNode(),a++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class rn{constructor(e,t,r,s){var i;this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cg=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Mt(this,e,t),kn(e)?e===ie||e==null||e===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):e!==this._$AH&&e!==je&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):oa(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==ie&&kn(this._$AH)?this._$AA.nextSibling.data=e:this.k(Jt.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=xn.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const o=new ua(i,this),a=o.p(this.options);o.m(r),this.k(a),this._$AH=o}}_$AC(e){let t=Ii.get(e.strings);return t===void 0&&Ii.set(e.strings,t=new xn(e)),t}S(e){ia(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const i of e)s===t.length?t.push(r=new rn(this.A(wn()),this.A(wn()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Mn{constructor(e,t,r,s,i){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ie}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Mt(this,e,t,0),o=!kn(e)||e!==this._$AH&&e!==je,o&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=Mt(this,a[r+c],t,c),l===je&&(l=this._$AH[c]),o||(o=!kn(l)||l!==this._$AH[c]),l===ie?e=ie:e!==ie&&(e+=(l!=null?l:"")+i[c+1]),this._$AH[c]=l}o&&!s&&this.C(e)}C(e){e===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ha extends Mn{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===ie?void 0:e}}const dl=Xt?Xt.emptyScript:"";class da extends Mn{constructor(){super(...arguments),this.type=4}C(e){e&&e!==ie?this.element.setAttribute(this.name,dl):this.element.removeAttribute(this.name)}}class pa extends Mn{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=Mt(this,e,t,0))!==null&&r!==void 0?r:ie)===je)return;const s=this._$AH,i=e===ie&&s!==ie||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==ie&&(s===ie||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class fa{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Mt(this,e)}}const pl={P:"$lit$",L:ot,V:Ls,I:1,N:la,R:ua,D:oa,j:Mt,H:rn,O:Mn,F:da,B:pa,W:ha,Z:fa},Pi=window.litHtmlPolyfillSupport;Pi==null||Pi(xn,rn),((Hr=globalThis.litHtmlVersions)!==null&&Hr!==void 0?Hr:globalThis.litHtmlVersions=[]).push("2.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ur,jr;class le extends Vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=ca(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return je}}le.finalized=!0,le._$litElement$=!0,(Ur=globalThis.litElementHydrateSupport)===null||Ur===void 0||Ur.call(globalThis,{LitElement:le});const qi=globalThis.litElementPolyfillSupport;qi==null||qi({LitElement:le});((jr=globalThis.litElementVersions)!==null&&jr!==void 0?jr:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fl=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Pe(Ie({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function U(n){return(e,t)=>t!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(n,e,t):fl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},On=n=>(...e)=>({_$litDirective$:n,values:e});class Nn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:ml}=pl,gl=n=>n===null||typeof n!="object"&&typeof n!="function",jn=(n,e)=>{var t,r;return e===void 0?((t=n)===null||t===void 0?void 0:t._$litType$)!==void 0:((r=n)===null||r===void 0?void 0:r._$litType$)===e},bl=n=>n.strings===void 0,Fi=()=>document.createComment(""),Bi=(n,e,t)=>{var r;const s=n._$AA.parentNode,i=e===void 0?n._$AB:e._$AA;if(t===void 0){const o=s.insertBefore(Fi(),i),a=s.insertBefore(Fi(),i);t=new ml(o,a,n,n.options)}else{const o=t._$AB.nextSibling,a=t._$AM,c=a!==n;if(c){let l;(r=t._$AQ)===null||r===void 0||r.call(t,n),t._$AM=n,t._$AP!==void 0&&(l=n._$AU)!==a._$AU&&t._$AP(l)}if(o!==i||c){let l=t._$AA;for(;l!==o;){const u=l.nextSibling;s.insertBefore(l,i),l=u}}}return t},vl={},zi=(n,e=vl)=>n._$AH=e,Hi=n=>n._$AH,yl=n=>{n._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ma=On(class extends Nn{constructor(n){super(n),this.tt=new WeakMap}render(n){return[n]}update(n,[e]){if(jn(this.it)&&(!jn(e)||this.it.strings!==e.strings)){const t=Hi(n).pop();let r=this.tt.get(this.it.strings);if(r===void 0){const s=document.createDocumentFragment();r=ca(ie,s),r.setConnected(!1),this.tt.set(this.it.strings,r)}zi(r,[t]),Bi(r,void 0,t)}if(jn(e)){if(!jn(this.it)||this.it.strings!==e.strings){const t=this.tt.get(e.strings);if(t!==void 0){const r=Hi(t).pop();yl(n),Bi(n,void 0,r),zi(n,[r])}}this.it=e}else this.it=void 0;return this.render(e)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=(n,e)=>{var t,r;const s=n._$AN;if(s===void 0)return!1;for(const i of s)(r=(t=i)._$AO)===null||r===void 0||r.call(t,e,!1),yn(i,e);return!0},or=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},ga=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),kl(e)}};function _l(n){this._$AN!==void 0?(or(this),this._$AM=n,ga(this)):this._$AM=n}function wl(n,e=!1,t=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let i=t;i<r.length;i++)yn(r[i],!1),or(r[i]);else r!=null&&(yn(r,!1),or(r));else yn(this,n)}const kl=n=>{var e,t,r,s;n.type==wr.CHILD&&((e=(r=n)._$AP)!==null&&e!==void 0||(r._$AP=wl),(t=(s=n)._$AQ)!==null&&t!==void 0||(s._$AQ=_l))};class xl extends Nn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ga(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(yn(this,e),or(this))}setValue(e){if(bl(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class El{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class Al{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.q=t))}resume(){var e;(e=this.q)===null||e===void 0||e.call(this),this.Y=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=n=>!gl(n)&&typeof n.then=="function";class Sl extends xl{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new El(this),this._$CK=new Al}render(...e){var t;return(t=e.find(r=>!Ui(r)))!==null&&t!==void 0?t:je}update(e,t){const r=this._$Cyt;let s=r.length;this._$Cyt=t;const i=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const c=t[a];if(!Ui(c))return this._$Cwt=a,c;a<s&&c===r[a]||(this._$Cwt=1073741823,s=0,Promise.resolve(c).then(async l=>{for(;o.get();)await o.get();const u=i.deref();if(u!==void 0){const h=u._$Cyt.indexOf(c);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(l))}}))}return je}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}}const ba=On(Sl);function kr(n){return!!n&&Array.isArray(n.modules)&&n.modules.some(e=>{var t,r;return((t=e.exports)==null?void 0:t.some(s=>s.kind==="custom-element-definition"))||((r=e.declarations)==null?void 0:r.some(s=>s.customElement))})}const Cl=n=>n.kind==="custom-element-definition",Tl=n=>n.customElement,$l=n=>!(n.privacy==="private"||n.privacy==="protected");async function Rl(n){try{const t=await(await fetch(n)).json();if(kr(t))return t;throw new Error(`No element definitions found at ${n}`)}catch(e){return console.error(e),null}}function Ms(n,e){var r;const t=((r=n.modules)!=null?r:[]).flatMap(s=>{var i,o;return(o=(i=s.exports)==null?void 0:i.filter(Cl))!=null?o:[]});return e?t.filter(s=>e.includes(s.name)):t}const va=(n,e)=>{var c,l,u,h,p,d,y,v;const t=Ms(n),r=e?t.findIndex(A=>(A==null?void 0:A.name)===e):0,s=t[r];if(!s)return null;const{name:i,module:o}=s.declaration,a=o?(l=(c=n.modules.find(A=>A.path===o.replace(/^\//,"")))==null?void 0:c.declarations)==null?void 0:l.find(A=>A.name===i):n.modules.flatMap(A=>A.declarations).find(A=>(A==null?void 0:A.name)===i);if(!a||!Tl(a))throw new Error(`Could not find declaration for ${e}`);return{customElement:!0,name:s.name,description:a==null?void 0:a.description,slots:(u=a.slots)!=null?u:[],attributes:(h=a.attributes)!=null?h:[],members:(p=a.members)!=null?p:[],events:(d=a.events)!=null?d:[],cssParts:(y=a.cssParts)!=null?y:[],cssProperties:[...(v=a.cssProperties)!=null?v:[]].sort((A,k)=>A.name>k.name?1:-1)}},ya=(n=[])=>n.filter(e=>e.kind==="field"&&$l(e)),_a=P`
  <div part="warning">No custom elements found in the JSON file.</div>
`,wa=n=>{class e extends n{constructor(){super(...arguments);this.jsonFetched=Promise.resolve(null)}willUpdate(){const{src:r}=this;this.manifest?kr(this.manifest)?(this.lastSrc=void 0,this.jsonFetched=Promise.resolve(this.manifest)):console.error("No custom elements found in the `manifest` object."):r&&this.lastSrc!==r&&(this.lastSrc=r,this.jsonFetched=Rl(r))}}return oe([U()],e.prototype,"src",void 0),oe([U({attribute:!1})],e.prototype,"manifest",void 0),oe([U({reflect:!0,converter:{fromAttribute:t=>t.split(","),toAttribute:t=>t.join(",")}})],e.prototype,"only",void 0),oe([U()],e.prototype,"selected",void 0),e},Os=n=>typeof n=="string"&&n.startsWith("'")&&n.endsWith("'")?n.slice(1,n.length-1):n;function Ns(n,...e){const t=document.createElement("template");return t.innerHTML=e.reduce((r,s,i)=>r+s+n[i+1],n[0]),t}let Dl=0;const Ll=Ns`
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
`;class ka extends HTMLElement{constructor(){super();this._mousedown=!1,this._selected=!1,this.attachShadow({mode:"open"}).appendChild(Ll.content.cloneNode(!0)),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)})}get selected(){return this._selected}set selected(e){this._selected=e,this.setAttribute("aria-selected",String(e)),this.setAttribute("tabindex",e?"0":"-1"),this.toggleAttribute("selected",e)}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id=`api-viewer-tab-${Dl++}`)}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}}customElements.define("api-viewer-tab",ka);let Ml=0;const Ol=Ns`
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
`;class Nl extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).appendChild(Ol.content.cloneNode(!0))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id=`api-viewer-panel-${Ml++}`)}}customElements.define("api-viewer-panel",Nl);const Il=Ns`
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
`;class Pl extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(Il.content.cloneNode(!0));const t=e.querySelectorAll("slot");t[0].addEventListener("slotchange",()=>this._linkPanels()),t[1].addEventListener("slotchange",()=>this._linkPanels()),this.addEventListener("keydown",this.handleEvent),this.addEventListener("click",this.handleEvent)}connectedCallback(){this.setAttribute("role","tablist"),requestAnimationFrame(()=>{this._linkPanels()})}_linkPanels(){const{tabs:e}=this;e.forEach(r=>{const s=r.nextElementSibling;r.setAttribute("aria-controls",s.id),s.setAttribute("aria-labelledby",r.id)});const t=e.find(r=>r.selected)||e[0];this._selectTab(t)}get tabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,t){const{tabs:r}=this,s=r.length;for(let i=0;typeof e=="number"&&i<s;i++,e+=t||1)if(e<0?e=s-1:e>=s&&(e=0),!r[e].hasAttribute("hidden"))return e;return-1}_prevTab(e){const t=this._getAvailableIndex(e.findIndex(r=>r.selected)-1,-1);return e[(t+e.length)%e.length]}_nextTab(e){const t=this._getAvailableIndex(e.findIndex(r=>r.selected)+1,1);return e[t%e.length]}reset(){this.tabs.forEach(e=>{e.selected=!1}),this.querySelectorAll("api-viewer-panel").forEach(e=>{e.hidden=!0})}selectFirst(){const e=this._getAvailableIndex(0,1);this._selectTab(this.tabs[e%this.tabs.length])}_selectTab(e){this.reset();const t=e.getAttribute("aria-controls"),r=this.querySelector(`#${t}`);r&&(e.selected=!0,r.hidden=!1)}handleEvent(e){const{target:t}=e;if(t&&t instanceof ka){let r;if(e.type==="keydown"){const{tabs:s}=this;switch(e.key){case"ArrowLeft":case"ArrowUp":r=this._prevTab(s);break;case"ArrowDown":case"ArrowRight":r=this._nextTab(s);break;case"Home":r=s[0];break;case"End":r=s[s.length-1];break;default:return}e.preventDefault()}else r=t;this._selectTab(r),r.focus()}}}customElements.define("api-viewer-tabs",Pl);class Is{constructor(e,t){this._data=[],(this.host=e).addController(this),this.el=t}get data(){return this._data}set data(e){this._data=e,this.updateData(e)}updateData(e){this.host.isConnected&&this.host.requestUpdate()}clear(){this.data=[]}destroy(){this.host.removeController(this)}}class ql extends Is{constructor(e,t,r){super(e,t);r.forEach(({name:s})=>{t.addEventListener(s,i=>{const o="-changed";if(s.endsWith(o)){const{knob:a}=e.getKnob(s.replace(o,""));a&&e.syncKnob(t,a)}this.data=[...this.data,i]})})}}const Fl=n=>n[0].toUpperCase()+n.slice(1),xa=n=>Fl(n===""?"content":n),Bl=(n,e)=>{const{name:t,value:r}=n;return P`
    <input
      id=${e}
      type="text"
      .value=${String(r)}
      data-name=${t}
      part="input"
    />
  `},ji=(n,e)=>{const{name:t,knobType:r,value:s,options:i}=n;let o;return r==="select"&&Array.isArray(i)?o=P`
      <select id=${e} data-name=${t} data-type=${r} part="select">
        ${i.map(a=>P`<option value=${a}>${a}</option>`)}
      </select>
    `:r==="boolean"?o=P`
      <input
        id=${e}
        type="checkbox"
        .checked=${Boolean(s)}
        data-name=${t}
        data-type=${r}
        part="checkbox"
      />
    `:o=P`
      <input
        id=${e}
        type=${r==="number"?"number":"text"}
        .value=${s==null?"":String(s)}
        data-name=${t}
        data-type=${r}
        part="input"
      />
    `,o},zl=(n,e)=>{const{name:t,content:r}=n;return P`
    <input
      id=${e}
      type="text"
      .value=${r}
      data-type="slot"
      data-slot=${t}
      part="input"
    />
  `},Vn=(n,e,t,r)=>{const s=n.map(i=>{const{name:o}=i,a=`${t}-${o||"default"}`,c=t==="slot"?xa(o):o;return P`
      <tr>
        <td>
          <label for=${a} part="knob-label">${c}</label>
        </td>
        <td>${r(i,a)}</td>
      </tr>
    `});return P`
    <h3 part="knobs-header" ?hidden=${n.length===0}>${e}</h3>
    <table>
      ${s}
    </table>
  `};class Hl extends Is{constructor(e,t,r,s){super(e,t);this.enabled=!hs(r,t.localName,Yt.SLOT),this.data=s.sort((i,o)=>i.name===""?1:o.name===""?-1:i.name.localeCompare(o.name)).map(i=>Pe(Ie({},i),{content:xa(i.name)}))}setValue(e,t){this.data=this.data.map(r=>r.name===e?Pe(Ie({},r),{content:t}):r)}updateData(e){super.updateData(e),this.enabled&&this.el.isConnected&&e&&e.length&&(this.el.innerHTML="",e.forEach(t=>{let r;const{name:s,content:i}=t;s?(r=document.createElement("div"),r.setAttribute("slot",s),r.textContent=i):r=document.createTextNode(i),this.el.appendChild(r)}))}}class Ul extends Is{constructor(e,t,r){super(e,t);if(r.length){const s=getComputedStyle(t);this.data=r.map(i=>{let o=i.default?Os(i.default):s.getPropertyValue(i.name);const a=i;return o&&(o=o.trim(),a.default=o,a.value=o),a})}}setValue(e,t){this.data=this.data.map(r=>r.name===e?Pe(Ie({},r),{value:t}):r)}updateData(e){super.updateData(e),e.length&&e.forEach(t=>{const{name:r,value:s}=t;s&&(s===t.default?this.el.style.removeProperty(r):this.el.style.setProperty(r,s))})}}const jl=n=>{const e=n,t="undefined";return"value"in n&&n.value===void 0&&(e.value=t),` detail: ${JSON.stringify(n).replace(`"${t}"`,t)}`},Vl=n=>P`
    ${n.map(e=>P`
        <p part="event-record">
          event:
          ${e.type}.${e.detail==null?ie:jl(e.detail)}
        </p>
      `)}
  `;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ps extends Nn{constructor(e){if(super(e),this.it=ie,e.type!==wr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ie||e==null)return this.ft=void 0,this.it=e;if(e===je)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ps.directiveName="unsafeHTML",ps.resultType=1;const En=On(ps);function Gl(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Wl={text:function(n){return Gl(n)},join:function(n){return n.join("")},wrap:function(n,e){return'<span class="'+n+'">'+e+"</span>"}};/*! *****************************************************************************
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
***************************************************************************** */var Qt=function(){return Qt=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qt.apply(this,arguments)};function fs(n){return n&&n.source||n}var Zl={exec:function(){return null}};function mn(n,e,t){return new RegExp(fs(e),"m"+(n.case_insensitive?"i":"")+(t?"g":""))}function Kl(n){var e=[];function t(a){for(var c=0,l=e;c<l.length;c++){var u=l[c],h=u[0],p=u[1];if(a===h)return p}}var r=[];function s(a){if(!(!a.variants||!a.variants.length)){for(var c=0,l=r;c<l.length;c++){var u=l[c],h=u[0],p=u[1];if(a===h)return p}var d=a.variants.map(function(y){return Qt({},a,{variants:void 0},y)});return r.push([a,d]),d}}function i(a,c,l){var u=t(a);if(u)return u;var h={lexemesRe:mn(n,a.lexemes||/\w+/,!0),relevance:a.relevance==null?1:a.relevance,contains:[],terminators:Zl,subLanguage:a.subLanguage==null?void 0:typeof a.subLanguage=="string"?[a.subLanguage]:a.subLanguage};e.push([a,h]),a.className&&(h.className=a.className),a.illegal&&(h.illegalRe=mn(n,a.illegal));for(var p=0,d=["endsParent","endsWithParent","skip","excludeBegin","excludeEnd","returnBegin","returnEnd"];p<d.length;p++){var y=d[p];a[y]&&(h[y]=!0)}var v;if(c){var A=a.beginKeywords?"\\b("+a.beginKeywords.split(/\s+/).join("|")+")\\b":a.begin||/\B|\b/;a.begin=A,h.beginRe=mn(n,A);var k=!a.end&&!a.endsWithParent?/\B|\b/:a.end;k&&(a.end=k,h.endRe=mn(n,k)),v=fs(k)||"",a.endsWithParent&&l&&(v+=(k?"|":"")+l)}var _=a.keywords||a.beginKeywords;if(_){var w={},R=function(f,m){n.case_insensitive&&(m=m.toLowerCase());for(var E=m.split(/\s+/),C=0,O=E;C<O.length;C++){var q=O[C],Z=q.split(/\|/),W=Z[0],re=Z[1];w[W]=[f,re?Number(re):1]}};if(typeof _=="string")R("keyword",_);else for(var $ in _)R($,_[$]);h.keywords=w}var x=[];if(a.contains&&a.contains.length){for(var F=0,G=a.contains;F<G.length;F++)for(var j=G[F],D=j==="self"?a:j,X=s(D)||D.endsWithParent&&[Qt({},D)]||[D],ce=0,M=X;ce<M.length;ce++){var b=M[ce];x.push(b)}h.contains=x.map(function(f){return i(f,h,v)})}a.starts&&(h.starts=i(a.starts,c,l));var S=x.map(function(f){return f.beginKeywords?"\\.?("+f.begin+")\\.?":f.begin}).concat([v,a.illegal]).map(fs).filter(Boolean);return S.length&&(h.terminators=mn(n,S.join("|"),!0)),h}var o=i(n);return n.case_insensitive&&(o.case_insensitive=!0),o}var ar={},Ea={};function Yl(n){return"lexemesRe"in n}function Xl(n){if(ar[n.name]=n,n.aliases)for(var e=0,t=n.aliases;e<t.length;e++){var r=t[e];Ea[r]=n.name}}function Jl(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0,r=n;t<r.length;t++){var s=r[t];Xl(s)}}function Ql(){return Object.keys(ar)}function ms(n){n=(n||"").toLowerCase(),n=Ea[n]||n;var e=ar[n];if(!!e)return Yl(e)?e:ar[n]=Kl(e)}var eu="\\b\\d+(\\.\\d+)?",Aa={begin:"\\\\[\\s\\S]",relevance:0},Ps={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[Aa]},qs={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[Aa]},tu={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/};function xr(n,e,t){t===void 0&&(t={});var r=Qt({className:"comment",begin:n,end:e,contains:[]},t),s=r.contains;return s&&(s.push(tu),s.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0})),r}xr("//","$");var gs=xr("/\\*","\\*/");xr("#","$");var Sa={className:"number",begin:eu+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},nu="[A-Za-z0-9\\._:-]+",Vr={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:nu,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]},ru={name:"xml",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},xr("<!--","-->",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[Vr],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[Vr],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},Vr]}]};function Gr(n,e){var t=n&&n.exec(e);return t&&t.index===0||!1}function Fs(n,e,t,r,s,i){var o=[{content:[]}];function a(f){var m=o[0].content;typeof f=="string"&&m.length&&typeof m[m.length-1]=="string"?m[m.length-1]+=f:m.push(f)}function c(f){a(e.text(f))}function l(f,m){m||(f=n.classPrefix+f),o.unshift({className:f,content:[]})}function u(f){f=n.classPrefix+f,o.push({className:f,content:[]})}function h(){if(o.length<2)throw"unbalanced";var f=o.shift(),m=f.className,E=f.content,C=e.join(E);a(m?e.wrap(m,C):C)}function p(f,m){if(Gr(f.endRe,m)){for(;f.endsParent&&f.parent;f=f.parent);return f}if(f.endsWithParent&&f.parent)return p(f.parent,m)}function d(){if(!w.keywords){c(x);return}var f=0;w.lexemesRe.lastIndex=0;for(var m=w.lexemesRe.exec(x);m;){c(x.substring(f,m.index));var E=_.case_insensitive?m[0].toLowerCase():m[0],C=w.keywords.hasOwnProperty(E)&&w.keywords[E];C?(F+=C[1],l(C[0],!1),c(m[0]),h()):c(m[0]),f=w.lexemesRe.lastIndex,m=w.lexemesRe.exec(x)}c(x.substr(f))}function y(f){var m=f.length==1&&f[0];if(m&&!ms(m)){c(x);return}var E=m?Fs(n,e,m,x,!0,R[m]):Ca(n,e,x,f.length?w.subLanguage:void 0);w.relevance>0&&(F+=E.relevance),m&&E.top&&(R[m]=E.top),l(E.language,!0),a(E.value),h()}function v(){w.subLanguage!=null?y(w.subLanguage):d(),x=""}function A(f){f.className&&l(f.className,!1),w=Object.create(f,{parent:{value:w}})}function k(f,m){if(x+=f,m==null)return v(),0;for(var E,C=0,O=w.contains;C<O.length;C++){var q=O[C];if(Gr(q.beginRe,m)){E=q;break}}if(E)return E.skip?x+=m:(E.excludeBegin&&(x+=m),v(),!E.returnBegin&&!E.excludeBegin&&(x=m)),A(E),E.returnBegin?0:m.length;var Z=p(w,m);if(Z){var W=w;W.skip?x+=m:(W.returnEnd||W.excludeEnd||(x+=m),v(),W.excludeEnd&&(x=m));do w.className&&h(),!w.skip&&!w.subLanguage&&(F+=w.relevance),w=w.parent;while(w!==Z.parent);return Z.starts&&A(Z.starts),W.returnEnd?0:m.length}if(!s&&Gr(w.illegalRe,m))throw new Error('Illegal lexeme "'+m+'" for mode "'+(w.className||"<unnamed>")+'"');return x+=m,m.length||1}var _=ms(t);if(!_)throw new Error('Unknown language: "'+t+'"');var w=i||_,R={},$;for($=w;$&&$!==_;$=$.parent)$.className&&u($.className);var x="",F=0;try{for(var G=void 0,j=void 0,D=0;w.terminators.lastIndex=D,G=w.terminators.exec(r),!!G;)j=k(r.substring(D,G.index),G[0]),D=G.index+j;for(k(r.substr(D)),$=w;$.parent;$=$.parent)$.className&&h();if(o.length!=1)throw"unbalanced";var X=o[0],ce=X.className,M=X.content,b=e.join(M),S=ce?e.wrap(ce,b):b;return{language:t,relevance:F,value:S,top:w}}catch(f){if(f.message&&f.message.indexOf("Illegal")!==-1)return{language:t,relevance:0,value:e.text(r)};throw f}}function Ca(n,e,t,r){r===void 0&&(r=n.languages||Ql());var s={language:"",relevance:0,value:e.text(t)};if(t!=""){for(var i=s,o=r.filter(ms),a=0,c=o;a<c.length;a++){var l=c[a],u=Fs(n,e,l,t,!1);u.relevance>i.relevance&&(i=u),u.relevance>s.relevance&&(i=s,s=u)}i.language&&(s.second_best=i)}return s}var su={classPrefix:"hljs-",useBr:!1};function iu(n,e){return e===void 0&&(e={}),{render:n,options:Qt({},su,e)}}function ou(n,e,t){var r=n.render,s=n.options;return typeof t=="string"?Fs(s,r,t,e,!1):Ca(s,r,e,t)}const au={begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[Ps,qs,Sa]}]},cu={className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[au,Sa,qs,Ps,gs,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}},lu="[a-zA-Z-][a-zA-Z0-9_-]*",uu={begin:/(?:[A-Z_.-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[cu]},hu={name:"css",case_insensitive:!0,illegal:/[=/|'$]/,contains:[gs,{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[Ps,qs]},{className:"selector-tag",begin:lu,relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[gs,uu]}]};Jl(hu,ru);const du=iu(Wl,{classPrefix:""}),{PREFIX:pu,SLOT:fu,SUFFIX:mu,WRAPPER:gu}=Yt,rt="  ",bu=(n,e)=>{if(!n)return n;const t=n.replace(/\t/g,rt).split(`
`),r=t.reduce((s,i)=>{if(/^\s*$/.test(i))return s;const o=i.match(/^(\s*)/),a=o&&o[0].length;return s===null||a<s?a:s},null);return t.map(s=>e+s.substr(r)).join(`
`)},Wr=(n,e)=>{const t=n.innerHTML.replace(/\s+$/,"").replace(/(="")/g,"");return bu(t,e)},vu=(n,e,t,r,s)=>{let i="";const o=bn(n,e,pu);Rt(o)&&(i+=`${Wr(o,"").trim()}
`);let a="",c=null;const l=bn(n,e,gu),u=ir(l);if(u){a=rt;const v=u.outerHTML.match(/<([a-z]+)[^>]*>/);v&&(c=u.tagName.toLowerCase(),i+=`${v[0]}
${rt}`)}i+=`<${e}`,Object.keys(t).sort((v,A)=>v>A?1:-1).forEach(v=>{const{value:A,knobType:k,attribute:_}=t[v],w=_||v;switch(k){case"boolean":i+=A?` ${w}`:"";break;case"select":i+=A!==""?` ${w}="${A}"`:"";break;default:i+=A!=null?` ${w}="${A}"`:"";break}}),i+=">";const h=bn(n,e,fu);Rt(h)?i+=`${Wr(h,`${a}${rt}`)}
${a}`:r.length&&(r.length===1&&!r[0].name?i+=r[0].content:(i+=r.reduce((v,A)=>{const{name:k,content:_}=A,w=k?`<div slot="${k}">${_}</div>`:_;return`${v}
${a}${rt}${w}`},""),i+=`
${a}`)),i+=`</${e}>`,c&&(i+=`
</${c}>`);const p=bn(n,e,mu);Rt(p)&&(i+=`
${Wr(p,"").trim()}
`);const d=s.filter(v=>v.value!==v.default);d.length&&(i+=`
<style>
${rt}${e} {
`,d.forEach(v=>{v.value&&(i+=`${rt}${rt}${v.name}: ${v.value};
`)}),i+=`${rt}}
</style>`);const{value:y}=ou(du,i,["xml","css"]);return P`<pre><code>${En(y)}</code></pre>`},Ta=n=>{const{knobType:e,default:t}=n;switch(e){case"boolean":return t!=="false";case"number":return Number(t);default:return Os(t)}},yu=(n,e)=>{function t(s){return s===HTMLElement?void 0:Object.getOwnPropertyDescriptor(s.prototype,e)||t(Object.getPrototypeOf(s))}let r=!1;if(n){const s=t(n);r=Boolean(s&&s.get&&s.set===void 0)}return r},_u=(n="")=>n.replace(" | undefined","").replace(" | null",""),wu=(n,e,t="")=>{let r=e.filter(({name:s})=>!t.includes(s)&&!yu(customElements.get(n),s));return r=r.map(s=>{var o;const i=Pe(Ie({},s),{knobType:_u((o=s.type)==null?void 0:o.text)});return typeof i.default=="string"&&(i.value=Ta(i)),i}),r},ku=(n,e)=>al(e,n,Yt.KNOB).map(t=>{const{attr:r,type:s}=t.dataset;let i=null;if(r){if(s==="select"){const o=ir(t),a=o?Array.from(o.children).filter(c=>c instanceof HTMLOptionElement).map(c=>c.value):[];o instanceof HTMLSelectElement&&a.length>1&&(i={name:r,attribute:r,knobType:s,options:a})}(s==="string"||s==="boolean")&&(i={name:r,attribute:r,knobType:s})}return i}).filter(Boolean),xu=(n,e)=>n.filter(t=>{const{name:r,knobType:s}=t,i=Ta(t);return e[r]!==i||s==="boolean"&&i});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=On(class extends Nn{constructor(n){if(super(n),n.type!==wr.CHILD)throw Error("templateContent can only be used in child bindings")}render(n){return this.vt===n?je:(this.vt=n,document.importNode(n.content,!0))}}),{HOST:Eu,PREFIX:Au,SLOT:Su,SUFFIX:Cu,WRAPPER:Tu}=Yt,$u=(n,e)=>{const{knobs:t}=e;Object.keys(t).forEach(r=>{const{attribute:s,value:i,custom:o}=t[r];o&&s?typeof i=="string"&&i?n.setAttribute(s,i):n.removeAttribute(s):n[r]=i})},Gi=n=>typeof n=="object"&&Promise.resolve(n)===n;async function Ru(n){let e=!1;const t=n,r=t.updateComplete;Gi(r)&&(await r,e=!0);const s=t.componentOnReady?t.componentOnReady():!1;return Gi(s)&&(await s,e=!0),e||await new Promise(requestAnimationFrame),t}class Du extends Nn{constructor(e){super(e);if(e.type!==wr.CHILD)throw new Error("renderer only supports binding to element")}render(e){return ie}update(e,[t]){var k;const r=(k=e.options)==null?void 0:k.host,{tag:s}=t,i=[],[o,a,c,l,u]=[Eu,Au,Cu,Su,Tu].map(_=>bn(t.id,s,_)),h=ir(u),p=h?h.localName:"";let d=r.querySelector(s);if(d){const _=r.querySelector('[part="demo-output"]'),w=d.parentElement;if(w&&w===_||w.localName===p)return $u(d,t),je}const y=`</${s}>`,v=ir(o);Rt(a)&&i.push(Vi(a));let A=v?v.outerHTML:`<${s}>${y}`;if(Rt(l)&&(A=A.replace(y,`${l.innerHTML}${y}`)),p){const _=En(`
        <${p}>
          ${A}
        </${p}>
      `);i.push(_)}else i.push(En(A));return Rt(c)&&i.push(Vi(c)),Promise.resolve().then(()=>{d=r.querySelector(s),Ru(d).then(()=>{d.dispatchEvent(new CustomEvent("rendered",{detail:{component:d},bubbles:!0,composed:!0}))})}),P`${i}`}}const Lu=On(Du);class Be extends le{constructor(){super(...arguments);this.copyBtnText="copy",this.cssProps=[],this.events=[],this.slots=[],this.tag="",this.props=[],this.exclude="",this._whenDefined={}}createRenderRoot(){return this}render(){var d,y,v;const{tag:e}=this;if(!customElements.get(e))return this._whenDefined[e]=customElements.whenDefined(e),this._whenDefined[e].then(()=>{this.tag===e&&this.requestUpdate()}),P`
        <div part="warning">
          Element ${e} is not defined. Have you imported it?
        </div>
      `;const[t,r,s,i,o]=[this.cssProps,this.events,this.slots,this.customKnobs,this.propKnobs].map(A=>A.length===0),a=this.vid,c=((d=this.eventsController)==null?void 0:d.data)||[],l=((y=this.slotsController)==null?void 0:y.data)||[],u=((v=this.stylesController)==null?void 0:v.data)||[],h=s||hs(a,e,Yt.SLOT),p=o&&i;return P`
      <div part="demo-output" @rendered=${this.onRendered}>
        ${Lu({id:a,tag:e,knobs:this.knobs})}
      </div>
      <api-viewer-tabs part="demo-tabs">
        <api-viewer-tab slot="tab" part="tab">Source</api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <button @click=${this._onCopyClick} part="button">
            ${this.copyBtnText}
          </button>
          <div part="demo-snippet">
            ${vu(a,e,this.knobs,l,u)}
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
              ${Vn(this.propKnobs,"Properties","prop",ji)}
              ${Vn(this.customKnobs,"Attributes","attr",ji)}
            </section>
            <section
              ?hidden=${h}
              part="knobs-column"
              @change=${this._onSlotChanged}
            >
              ${Vn(l,"Slots","slot",zl)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab slot="tab" part="tab" ?hidden=${t}>
          Styles
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs" ?hidden=${t}>
            <section part="knobs-column" @change=${this._onCssChanged}>
              ${Vn(u,"Custom CSS Properties","css-prop",Bl)}
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
            ${ma(c.length?Vl(c):P`
                    <p part="event-record">
                      Interact with component to see the event log.
                    </p>
                  `)}
          </div>
        </api-viewer-panel>
      </api-viewer-tabs>
    `}willUpdate(e){e.has("tag")&&(this.knobs={},this.propKnobs=wu(this.tag,this.props,this.exclude),this.customKnobs=ku(this.tag,this.vid))}updated(e){if(e.has("tag")&&e.get("tag")){const t=this.renderRoot.querySelector("api-viewer-tabs");t&&t.selectFirst()}}_onLogClear(){this.eventsController.clear();const e=this.querySelector("#events");e&&e.focus()}_onCopyClick(){const e=this.renderRoot.querySelector('[part="demo-snippet"] code');if(e){const t=document.createRange();t.selectNodeContents(e);const r=window.getSelection();r.removeAllRanges(),r.addRange(t);try{document.execCommand("copy"),this.copyBtnText="done"}catch(s){console.error(s),this.copyBtnText="error"}setTimeout(()=>{this.copyBtnText="copy"},1e3),r.removeAllRanges()}}onRendered(e){const{component:t}=e.detail;this.initKnobs(t),this.initEvents(t),this.initSlots(t),this.initStyles(t)}initEvents(e){const t=this.eventsController;t&&t.destroy(),this.eventsController=new ql(this,e,this.events)}initKnobs(e){hs(this.vid,this.tag,Yt.HOST)&&xu(this.propKnobs,e).forEach(r=>{this.syncKnob(e,r)})}initSlots(e){const t=this.slotsController;t&&t.destroy(),this.slotsController=new Hl(this,e,this.vid,this.slots)}initStyles(e){const t=this.stylesController;t&&t.destroy(),this.stylesController=new Ul(this,e,this.cssProps)}getKnob(e){const t=i=>i.name===e||i.attribute===e;let r=this.propKnobs.find(t),s=!1;return r||(r=this.customKnobs.find(t),s=!0),{knob:r,custom:s}}setKnobs(e,t,r,s,i=!1){this.knobs=Pe(Ie({},this.knobs),{[e]:{knobType:t,value:r,attribute:s,custom:i}})}syncKnob(e,t){const{name:r,knobType:s,attribute:i}=t,o=e[r];this.setKnobs(r,s,o,i),this.propKnobs=this.propKnobs.map(a=>a.name===r?Pe(Ie({},a),{value:o}):a)}_onCssChanged(e){const t=e.composedPath()[0];this.stylesController.setValue(t.dataset.name,t.value)}_onPropChanged(e){const t=e.composedPath()[0],{name:r,type:s}=t.dataset;let i;switch(s){case"boolean":i=t.checked;break;case"number":i=t.value===""?null:Number(t.value);break;default:i=t.value}const{knob:o,custom:a}=this.getKnob(r);o&&this.setKnobs(r,s,i,o.attribute,a)}_onSlotChanged(e){const t=e.composedPath()[0];this.slotsController.setValue(t.dataset.slot,t.value)}}oe([U()],Be.prototype,"copyBtnText",void 0);oe([U({attribute:!1})],Be.prototype,"cssProps",void 0);oe([U({attribute:!1})],Be.prototype,"events",void 0);oe([U({attribute:!1})],Be.prototype,"slots",void 0);oe([U()],Be.prototype,"tag",void 0);oe([U({attribute:!1})],Be.prototype,"props",void 0);oe([U()],Be.prototype,"exclude",void 0);oe([U({type:Number})],Be.prototype,"vid",void 0);oe([U({attribute:!1})],Be.prototype,"customKnobs",void 0);oe([U({attribute:!1})],Be.prototype,"knobs",void 0);oe([U({attribute:!1})],Be.prototype,"propKnobs",void 0);customElements.define("api-demo-layout",Be);function $a(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let sn=$a();function Mu(n){sn=n}const Ou=/[&<>"']/,Nu=/[&<>"']/g,Iu=/[<>"']|&(?!#?\w+;)/,Pu=/[<>"']|&(?!#?\w+;)/g,qu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wi=n=>qu[n];function ge(n,e){if(e){if(Ou.test(n))return n.replace(Nu,Wi)}else if(Iu.test(n))return n.replace(Pu,Wi);return n}const Fu=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Ra(n){return n.replace(Fu,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Bu=/(^|[^\[])\^/g;function ae(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(r,s)=>(s=s.source||s,s=s.replace(Bu,"$1"),n=n.replace(r,s),t),getRegex:()=>new RegExp(n,e)};return t}const zu=/[^\w:]/g,Hu=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Zi(n,e,t){if(n){let r;try{r=decodeURIComponent(Ra(t)).replace(zu,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!Hu.test(t)&&(t=Gu(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Gn={},Uu=/^[^:]+:\/*[^/]*$/,ju=/^([^:]+:)[\s\S]*$/,Vu=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Gu(n,e){Gn[" "+n]||(Uu.test(n)?Gn[" "+n]=n+"/":Gn[" "+n]=tr(n,"/",!0)),n=Gn[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(ju,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(Vu,"$1")+e:n+e}const cr={exec:function(){}};function Ge(n){let e=1,t,r;for(;e<arguments.length;e++){t=arguments[e];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}function Ki(n,e){const t=n.replace(/\|/g,(i,o,a)=>{let c=!1,l=o;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),r=t.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function tr(n,e,t){const r=n.length;if(r===0)return"";let s=0;for(;s<r;){const i=n.charAt(r-s-1);if(i===e&&!t)s++;else if(i!==e&&t)s++;else break}return n.slice(0,r-s)}function Wu(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let r=0,s=0;for(;s<t;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])r++;else if(n[s]===e[1]&&(r--,r<0))return s;return-1}function Da(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Yi(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function Xi(n,e,t,r){const s=e.href,i=e.title?ge(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:t,href:s,title:i,text:o,tokens:r.inlineTokens(o,[])};return r.state.inLink=!1,a}else return{type:"image",raw:t,href:s,title:i,text:ge(o)}}function Zu(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}class Bs{constructor(e){this.options=e||sn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:tr(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],s=Zu(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const i=tr(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}const s={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const r=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,s,i,o,a,c,l,u,h,p,d,y,v=t[1].trim();const A=v.length>1,k={type:"list",raw:"",ordered:A,start:A?+v.slice(0,-1):"",loose:!1,items:[]};v=A?`\\d{1,9}\\${v.slice(-1)}`:`\\${v}`,this.options.pedantic&&(v=A?v:"[*+-]");const _=new RegExp(`^( {0,3}${v})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(y=!1,!(!(t=_.exec(e))||this.rules.block.hr.test(e)));){if(r=t[0],e=e.substring(r.length),u=t[2].split(`
`,1)[0],h=e.split(`
`,1)[0],this.options.pedantic?(o=2,d=u.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,d=u.slice(o),o+=t[1].length),c=!1,!u&&/^ *$/.test(h)&&(r+=h+`
`,e=e.substring(h.length+1),y=!0),!y){const R=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(p=e.split(`
`,1)[0],u=p,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!R.test(u));){if(u.search(/[^ ]/)>=o||!u.trim())d+=`
`+u.slice(o);else if(!c)d+=`
`+u;else break;!c&&!u.trim()&&(c=!0),r+=p+`
`,e=e.substring(p.length+1)}}k.loose||(l?k.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(d),s&&(i=s[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),k.items.push({type:"list_item",raw:r,task:!!s,checked:i,loose:!1,text:d}),k.raw+=r}k.items[k.items.length-1].raw=r.trimRight(),k.items[k.items.length-1].text=d.trimRight(),k.raw=k.raw.trimRight();const w=k.items.length;for(a=0;a<w;a++){this.lexer.state.top=!1,k.items[a].tokens=this.lexer.blockTokens(k.items[a].text,[]);const R=k.items[a].tokens.filter(x=>x.type==="space"),$=R.every(x=>{const F=x.raw.split("");let G=0;for(const j of F)if(j===`
`&&(G+=1),G>1)return!0;return!1});!k.loose&&R.length&&$&&(k.loose=!0,k.items[a].loose=!0)}return k}}html(e){const t=this.rules.block.html.exec(e);if(t){const r={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):ge(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const r=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const r={type:"table",header:Ki(t[1]).map(s=>({text:s})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];let s=r.align.length,i,o,a,c;for(i=0;i<s;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(s=r.rows.length,i=0;i<s;i++)r.rows[i]=Ki(r.rows[i],r.header.length).map(l=>({text:l}));for(s=r.header.length,o=0;o<s;o++)r.header[o].tokens=[],this.lexer.inlineTokens(r.header[o].text,r.header[o].tokens);for(s=r.rows.length,o=0;o<s;o++)for(c=r.rows[o],a=0;a<c.length;a++)c[a].tokens=[],this.lexer.inlineTokens(c[a].text,c[a].tokens);return r}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const r={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(e){const t=this.rules.block.text.exec(e);if(t){const r={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:ge(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):ge(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=tr(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=Wu(t[2],"()");if(o>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),Xi(t,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let s=(r[2]||r[1]).replace(/\s+/g," ");if(s=t[s.toLowerCase()],!s||!s.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return Xi(r,s,r[0],this.lexer)}}emStrong(e,t,r=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=s[1]||s[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const o=s[0].length-1;let a,c,l=o,u=0;const h=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(s=h.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(c=a.length,s[3]||s[4]){l+=c;continue}else if((s[5]||s[6])&&o%3&&!((o+c)%3)){u+=c;continue}if(l-=c,l>0)continue;if(c=Math.min(c,c+l+u),Math.min(o,c)%2){const d=e.slice(1,o+s.index+c);return{type:"em",raw:e.slice(0,o+s.index+c+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}const p=e.slice(2,o+s.index+c-1);return{type:"strong",raw:e.slice(0,o+s.index+c+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const s=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return s&&i&&(r=r.substring(1,r.length-1)),r=ge(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let s,i;return r[2]==="@"?(s=ge(this.options.mangle?t(r[1]):r[1]),i="mailto:"+s):(s=ge(r[1]),i=s),{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let s,i;if(r[2]==="@")s=ge(this.options.mangle?t(r[0]):r[0]),i="mailto:"+s;else{let o;do o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(o!==r[0]);s=ge(r[0]),r[1]==="www."?i="http://"+s:i=s}return{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):ge(r[0]):r[0]:s=ge(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:s}}}}const H={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:cr,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};H._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;H._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;H.def=ae(H.def).replace("label",H._label).replace("title",H._title).getRegex();H.bullet=/(?:[*+-]|\d{1,9}[.)])/;H.listItemStart=ae(/^( *)(bull) */).replace("bull",H.bullet).getRegex();H.list=ae(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex();H._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";H._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;H.html=ae(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();H.paragraph=ae(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.blockquote=ae(H.blockquote).replace("paragraph",H.paragraph).getRegex();H.normal=Ge({},H);H.gfm=Ge({},H.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});H.gfm.table=ae(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.gfm.paragraph=ae(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",H.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.pedantic=Ge({},H.normal,{html:ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",H._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:cr,paragraph:ae(H.normal._paragraph).replace("hr",H.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const N={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:cr,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:cr,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};N._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";N.punctuation=ae(N.punctuation).replace(/punctuation/g,N._punctuation).getRegex();N.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;N.escapedEmSt=/\\\*|\\_/g;N._comment=ae(H._comment).replace("(?:-->|$)","-->").getRegex();N.emStrong.lDelim=ae(N.emStrong.lDelim).replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimAst=ae(N.emStrong.rDelimAst,"g").replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimUnd=ae(N.emStrong.rDelimUnd,"g").replace(/punct/g,N._punctuation).getRegex();N._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;N._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;N._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;N.autolink=ae(N.autolink).replace("scheme",N._scheme).replace("email",N._email).getRegex();N._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;N.tag=ae(N.tag).replace("comment",N._comment).replace("attribute",N._attribute).getRegex();N._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;N._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;N._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;N.link=ae(N.link).replace("label",N._label).replace("href",N._href).replace("title",N._title).getRegex();N.reflink=ae(N.reflink).replace("label",N._label).replace("ref",H._label).getRegex();N.nolink=ae(N.nolink).replace("ref",H._label).getRegex();N.reflinkSearch=ae(N.reflinkSearch,"g").replace("reflink",N.reflink).replace("nolink",N.nolink).getRegex();N.normal=Ge({},N);N.pedantic=Ge({},N.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ae(/^!?\[(label)\]\((.*?)\)/).replace("label",N._label).getRegex(),reflink:ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N._label).getRegex()});N.gfm=Ge({},N.normal,{escape:ae(N.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});N.gfm.url=ae(N.gfm.url,"i").replace("email",N.gfm._extended_email).getRegex();N.breaks=Ge({},N.gfm,{br:ae(N.br).replace("{2,}","*").getRegex(),text:ae(N.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Ku(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Ji(n){let e="",t,r;const s=n.length;for(t=0;t<s;t++)r=n.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class at{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||sn,this.options.tokenizer=this.options.tokenizer||new Bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:H.normal,inline:N.normal};this.options.pedantic?(t.block=H.pedantic,t.inline=N.pedantic):this.options.gfm&&(t.block=H.gfm,this.options.breaks?t.inline=N.breaks:t.inline=N.gfm),this.tokenizer.rules=t}static get rules(){return{block:H,inline:N}}static lex(e,t){return new at(t).lex(e)}static lexInline(e,t){return new at(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,c,l)=>c+"    ".repeat(l.length));let r,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const c=e.slice(1);let l;this.options.extensions.startBlock.forEach(function(u){l=u.call({lexer:this},c),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,s,i,o=e,a,c,l;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+Yi("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+Yi("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(c||(l=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,o,l)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e,Ji)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,Ji))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let p;this.options.extensions.startInline.forEach(function(d){p=d.call({lexer:this},h),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(i=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,Ku)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(l=r.raw.slice(-1)),c=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class zs{constructor(e){this.options=e||sn}code(e,t,r){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,s);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+ge(s,!0)+'">'+(r?e:ge(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:ge(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(e=Zi(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s='<a href="'+ge(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>",s}image(e,t,r){if(e=Zi(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s=`<img src="${e}" alt="${r}"`;return t&&(s+=` title="${t}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class La{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Ma{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,s=0;if(this.seen.hasOwnProperty(r)){s=this.seen[e];do s++,r=e+"-"+s;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=s,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class ct{constructor(e){this.options=e||sn,this.options.renderer=this.options.renderer||new zs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new La,this.slugger=new Ma}static parse(e,t){return new ct(t).parse(e)}static parseInline(e,t){return new ct(t).parseInline(e)}parse(e,t=!0){let r="",s,i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x;const F=e.length;for(s=0;s<F;s++){if(d=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(x=this.options.extensions.renderers[d.type].call({parser:this},d),x!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){r+=x||"";continue}switch(d.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Ra(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(h="",u="",a=d.header.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(d.header[i].tokens),{header:!0,align:d.align[i]});for(h+=this.renderer.tablerow(u),p="",a=d.rows.length,i=0;i<a;i++){for(l=d.rows[i],u="",c=l.length,o=0;o<c;o++)u+=this.renderer.tablecell(this.parseInline(l[o].tokens),{header:!1,align:d.align[o]});p+=this.renderer.tablerow(u)}r+=this.renderer.table(h,p);continue}case"blockquote":{p=this.parse(d.tokens),r+=this.renderer.blockquote(p);continue}case"list":{for(y=d.ordered,v=d.start,A=d.loose,a=d.items.length,p="",i=0;i<a;i++)_=d.items[i],w=_.checked,R=_.task,k="",_.task&&($=this.renderer.checkbox(w),A?_.tokens.length>0&&_.tokens[0].type==="paragraph"?(_.tokens[0].text=$+" "+_.tokens[0].text,_.tokens[0].tokens&&_.tokens[0].tokens.length>0&&_.tokens[0].tokens[0].type==="text"&&(_.tokens[0].tokens[0].text=$+" "+_.tokens[0].tokens[0].text)):_.tokens.unshift({type:"text",text:$}):k+=$),k+=this.parse(_.tokens,A),p+=this.renderer.listitem(k,R,w);r+=this.renderer.list(p,y,v);continue}case"html":{r+=this.renderer.html(d.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(p=d.tokens?this.parseInline(d.tokens):d.text;s+1<F&&e[s+1].type==="text";)d=e[++s],p+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);r+=t?this.renderer.paragraph(p):p;continue}default:{const G='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(G);return}else throw new Error(G)}}}return r}parseInline(e,t){t=t||this.renderer;let r="",s,i,o;const a=e.length;for(s=0;s<a;s++){if(i=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=o||"";continue}switch(i.type){case"escape":{r+=t.text(i.text);break}case"html":{r+=t.html(i.text);break}case"link":{r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{r+=t.image(i.href,i.title,i.text);break}case"strong":{r+=t.strong(this.parseInline(i.tokens,t));break}case"em":{r+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{r+=t.codespan(i.text);break}case"br":{r+=t.br();break}case"del":{r+=t.del(this.parseInline(i.tokens,t));break}case"text":{r+=t.text(i.text);break}default:{const c='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(c);return}else throw new Error(c)}}}return r}}function K(n,e,t){if(typeof n=="undefined"||n===null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Ge({},K.defaults,e||{}),Da(e),t){const r=e.highlight;let s;try{s=at.lex(n,e)}catch(a){return t(a)}const i=function(a){let c;if(!a)try{e.walkTokens&&K.walkTokens(s,e.walkTokens),c=ct.parse(s,e)}catch(l){a=l}return e.highlight=r,a?t(a):t(null,c)};if(!r||r.length<3||(delete e.highlight,!s.length))return i();let o=0;K.walkTokens(s,function(a){a.type==="code"&&(o++,setTimeout(()=>{r(a.text,a.lang,function(c,l){if(c)return i(c);l!=null&&l!==a.text&&(a.text=l,a.escaped=!0),o--,o===0&&i()})},0))}),o===0&&i();return}try{const r=at.lex(n,e);return e.walkTokens&&K.walkTokens(r,e.walkTokens),ct.parse(r,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ge(r.message+"",!0)+"</pre>";throw r}}K.options=K.setOptions=function(n){return Ge(K.defaults,n),Mu(K.defaults),K};K.getDefaults=$a;K.defaults=sn;K.use=function(...n){const e=Ge({},...n),t=K.defaults.extensions||{renderers:{},childTokens:{}};let r;n.forEach(s=>{if(s.extensions&&(r=!0,s.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const o=t.renderers?t.renderers[i.name]:null;o?t.renderers[i.name]=function(...a){let c=i.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:t.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)})),s.renderer){const i=K.defaults.renderer||new zs;for(const o in s.renderer){const a=i[o];i[o]=(...c)=>{let l=s.renderer[o].apply(i,c);return l===!1&&(l=a.apply(i,c)),l}}e.renderer=i}if(s.tokenizer){const i=K.defaults.tokenizer||new Bs;for(const o in s.tokenizer){const a=i[o];i[o]=(...c)=>{let l=s.tokenizer[o].apply(i,c);return l===!1&&(l=a.apply(i,c)),l}}e.tokenizer=i}if(s.walkTokens){const i=K.defaults.walkTokens;e.walkTokens=function(o){s.walkTokens.call(this,o),i&&i.call(this,o)}}r&&(e.extensions=t),K.setOptions(e)})};K.walkTokens=function(n,e){for(const t of n)switch(e.call(K,t),t.type){case"table":{for(const r of t.header)K.walkTokens(r.tokens,e);for(const r of t.rows)for(const s of r)K.walkTokens(s.tokens,e);break}case"list":{K.walkTokens(t.items,e);break}default:K.defaults.extensions&&K.defaults.extensions.childTokens&&K.defaults.extensions.childTokens[t.type]?K.defaults.extensions.childTokens[t.type].forEach(function(r){K.walkTokens(t[r],e)}):t.tokens&&K.walkTokens(t.tokens,e)}};K.parseInline=function(n,e){if(typeof n=="undefined"||n===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");e=Ge({},K.defaults,e||{}),Da(e);try{const t=at.lexInline(n,e);return e.walkTokens&&K.walkTokens(t,e.walkTokens),ct.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ge(t.message+"",!0)+"</pre>";throw t}};K.Parser=ct;K.parser=ct.parse;K.Renderer=zs;K.TextRenderer=La;K.Lexer=at;K.lexer=at.lex;K.Tokenizer=Bs;K.Slugger=Ma;K.parse=K;ct.parse;at.lex;/*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */function Yu(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var Xu=Object.hasOwnProperty,Qi=Object.setPrototypeOf,Ju=Object.isFrozen,Qu=Object.getPrototypeOf,eh=Object.getOwnPropertyDescriptor,Ae=Object.freeze,Je=Object.seal,th=Object.create,Oa=typeof Reflect!="undefined"&&Reflect,lr=Oa.apply,bs=Oa.construct;lr||(lr=function(e,t,r){return e.apply(t,r)});Ae||(Ae=function(e){return e});Je||(Je=function(e){return e});bs||(bs=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(Yu(t))))});var nh=Ve(Array.prototype.forEach),eo=Ve(Array.prototype.pop),gn=Ve(Array.prototype.push),nr=Ve(String.prototype.toLowerCase),to=Ve(String.prototype.match),dt=Ve(String.prototype.replace),rh=Ve(String.prototype.indexOf),sh=Ve(String.prototype.trim),$e=Ve(RegExp.prototype.test),Zr=ih(TypeError);function Ve(n){return function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return lr(n,e,r)}}function ih(n){return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return bs(n,t)}}function Q(n,e){Qi&&Qi(n,null);for(var t=e.length;t--;){var r=e[t];if(typeof r=="string"){var s=nr(r);s!==r&&(Ju(e)||(e[t]=s),r=s)}n[r]=!0}return n}function Et(n){var e=th(null),t=void 0;for(t in n)lr(Xu,n,[t])&&(e[t]=n[t]);return e}function Wn(n,e){for(;n!==null;){var t=eh(n,e);if(t){if(t.get)return Ve(t.get);if(typeof t.value=="function")return Ve(t.value)}n=Qu(n)}function r(s){return console.warn("fallback value for",s),null}return r}var no=Ae(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Kr=Ae(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Yr=Ae(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),oh=Ae(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Xr=Ae(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),ah=Ae(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ro=Ae(["#text"]),so=Ae(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Jr=Ae(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),io=Ae(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Zn=Ae(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ch=Je(/\{\{[\s\S]*|[\s\S]*\}\}/gm),lh=Je(/<%[\s\S]*|[\s\S]*%>/gm),uh=Je(/^data-[\-\w.\u00B7-\uFFFF]/),hh=Je(/^aria-[\-\w]+$/),dh=Je(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ph=Je(/^(?:\w+script|data):/i),fh=Je(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),mh=Je(/^html$/i),vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};function Ke(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var gh=function(){return typeof window=="undefined"?null:window},bh=function(e,t){if((typeof e=="undefined"?"undefined":vn(e))!=="object"||typeof e.createPolicy!="function")return null;var r=null,s="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(s)&&(r=t.currentScript.getAttribute(s));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function Na(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gh(),e=function(g){return Na(g)};if(e.version="2.3.6",e.removed=[],!n||!n.document||n.document.nodeType!==9)return e.isSupported=!1,e;var t=n.document,r=n.document,s=n.DocumentFragment,i=n.HTMLTemplateElement,o=n.Node,a=n.Element,c=n.NodeFilter,l=n.NamedNodeMap,u=l===void 0?n.NamedNodeMap||n.MozNamedAttrMap:l,h=n.HTMLFormElement,p=n.DOMParser,d=n.trustedTypes,y=a.prototype,v=Wn(y,"cloneNode"),A=Wn(y,"nextSibling"),k=Wn(y,"childNodes"),_=Wn(y,"parentNode");if(typeof i=="function"){var w=r.createElement("template");w.content&&w.content.ownerDocument&&(r=w.content.ownerDocument)}var R=bh(d,t),$=R?R.createHTML(""):"",x=r,F=x.implementation,G=x.createNodeIterator,j=x.createDocumentFragment,D=x.getElementsByTagName,X=t.importNode,ce={};try{ce=Et(r).documentMode?r.documentMode:{}}catch{}var M={};e.isSupported=typeof _=="function"&&F&&typeof F.createHTMLDocument!="undefined"&&ce!==9;var b=ch,S=lh,f=uh,m=hh,E=ph,C=fh,O=dh,q=null,Z=Q({},[].concat(Ke(no),Ke(Kr),Ke(Yr),Ke(Xr),Ke(ro))),W=null,re=Q({},[].concat(Ke(so),Ke(Jr),Ke(io),Ke(Zn))),J=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,Me=null,ze=!0,pe=!0,De=!1,Oe=!1,be=!1,Pt=!1,Ne=!1,ut=!1,ht=!1,V=!1,hn=!0,ue=!0,te=!1,He={},Ce=null,qt=Q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ft=null,L=Q({},["audio","video","img","source","image","track"]),B=null,Y=Q({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ee="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml",Bt=me,dn=!1,zt=void 0,Zc=["application/xhtml+xml","text/html"],Kc="text/html",kt=void 0,Ht=null,Yc=r.createElement("form"),fi=function(g){return g instanceof RegExp||g instanceof Function},qr=function(g){Ht&&Ht===g||((!g||(typeof g=="undefined"?"undefined":vn(g))!=="object")&&(g={}),g=Et(g),q="ALLOWED_TAGS"in g?Q({},g.ALLOWED_TAGS):Z,W="ALLOWED_ATTR"in g?Q({},g.ALLOWED_ATTR):re,B="ADD_URI_SAFE_ATTR"in g?Q(Et(Y),g.ADD_URI_SAFE_ATTR):Y,Ft="ADD_DATA_URI_TAGS"in g?Q(Et(L),g.ADD_DATA_URI_TAGS):L,Ce="FORBID_CONTENTS"in g?Q({},g.FORBID_CONTENTS):qt,Se="FORBID_TAGS"in g?Q({},g.FORBID_TAGS):{},Me="FORBID_ATTR"in g?Q({},g.FORBID_ATTR):{},He="USE_PROFILES"in g?g.USE_PROFILES:!1,ze=g.ALLOW_ARIA_ATTR!==!1,pe=g.ALLOW_DATA_ATTR!==!1,De=g.ALLOW_UNKNOWN_PROTOCOLS||!1,Oe=g.SAFE_FOR_TEMPLATES||!1,be=g.WHOLE_DOCUMENT||!1,ut=g.RETURN_DOM||!1,ht=g.RETURN_DOM_FRAGMENT||!1,V=g.RETURN_TRUSTED_TYPE||!1,Ne=g.FORCE_BODY||!1,hn=g.SANITIZE_DOM!==!1,ue=g.KEEP_CONTENT!==!1,te=g.IN_PLACE||!1,O=g.ALLOWED_URI_REGEXP||O,Bt=g.NAMESPACE||me,g.CUSTOM_ELEMENT_HANDLING&&fi(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(J.tagNameCheck=g.CUSTOM_ELEMENT_HANDLING.tagNameCheck),g.CUSTOM_ELEMENT_HANDLING&&fi(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(J.attributeNameCheck=g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),g.CUSTOM_ELEMENT_HANDLING&&typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(J.allowCustomizedBuiltInElements=g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),zt=Zc.indexOf(g.PARSER_MEDIA_TYPE)===-1?zt=Kc:zt=g.PARSER_MEDIA_TYPE,kt=zt==="application/xhtml+xml"?function(T){return T}:nr,Oe&&(pe=!1),ht&&(ut=!0),He&&(q=Q({},[].concat(Ke(ro))),W=[],He.html===!0&&(Q(q,no),Q(W,so)),He.svg===!0&&(Q(q,Kr),Q(W,Jr),Q(W,Zn)),He.svgFilters===!0&&(Q(q,Yr),Q(W,Jr),Q(W,Zn)),He.mathMl===!0&&(Q(q,Xr),Q(W,io),Q(W,Zn))),g.ADD_TAGS&&(q===Z&&(q=Et(q)),Q(q,g.ADD_TAGS)),g.ADD_ATTR&&(W===re&&(W=Et(W)),Q(W,g.ADD_ATTR)),g.ADD_URI_SAFE_ATTR&&Q(B,g.ADD_URI_SAFE_ATTR),g.FORBID_CONTENTS&&(Ce===qt&&(Ce=Et(Ce)),Q(Ce,g.FORBID_CONTENTS)),ue&&(q["#text"]=!0),be&&Q(q,["html","head","body"]),q.table&&(Q(q,["tbody"]),delete Se.tbody),Ae&&Ae(g),Ht=g)},mi=Q({},["mi","mo","mn","ms","mtext"]),gi=Q({},["foreignobject","desc","title","annotation-xml"]),Hn=Q({},Kr);Q(Hn,Yr),Q(Hn,oh);var Fr=Q({},Xr);Q(Fr,ah);var Xc=function(g){var T=_(g);(!T||!T.tagName)&&(T={namespaceURI:me,tagName:"template"});var I=nr(g.tagName),se=nr(T.tagName);if(g.namespaceURI===fe)return T.namespaceURI===me?I==="svg":T.namespaceURI===ee?I==="svg"&&(se==="annotation-xml"||mi[se]):Boolean(Hn[I]);if(g.namespaceURI===ee)return T.namespaceURI===me?I==="math":T.namespaceURI===fe?I==="math"&&gi[se]:Boolean(Fr[I]);if(g.namespaceURI===me){if(T.namespaceURI===fe&&!gi[se]||T.namespaceURI===ee&&!mi[se])return!1;var ye=Q({},["title","style","font","a","script"]);return!Fr[I]&&(ye[I]||!Hn[I])}return!1},tt=function(g){gn(e.removed,{element:g});try{g.parentNode.removeChild(g)}catch{try{g.outerHTML=$}catch{g.remove()}}},bi=function(g,T){try{gn(e.removed,{attribute:T.getAttributeNode(g),from:T})}catch{gn(e.removed,{attribute:null,from:T})}if(T.removeAttribute(g),g==="is"&&!W[g])if(ut||ht)try{tt(T)}catch{}else try{T.setAttribute(g,"")}catch{}},vi=function(g){var T=void 0,I=void 0;if(Ne)g="<remove></remove>"+g;else{var se=to(g,/^[\r\n\t ]+/);I=se&&se[0]}zt==="application/xhtml+xml"&&(g='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+g+"</body></html>");var ye=R?R.createHTML(g):g;if(Bt===me)try{T=new p().parseFromString(ye,zt)}catch{}if(!T||!T.documentElement){T=F.createDocument(Bt,"template",null);try{T.documentElement.innerHTML=dn?"":ye}catch{}}var _e=T.body||T.documentElement;return g&&I&&_e.insertBefore(r.createTextNode(I),_e.childNodes[0]||null),Bt===me?D.call(T,be?"html":"body")[0]:be?T.documentElement:_e},yi=function(g){return G.call(g.ownerDocument||g,g,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},Jc=function(g){return g instanceof h&&(typeof g.nodeName!="string"||typeof g.textContent!="string"||typeof g.removeChild!="function"||!(g.attributes instanceof u)||typeof g.removeAttribute!="function"||typeof g.setAttribute!="function"||typeof g.namespaceURI!="string"||typeof g.insertBefore!="function")},pn=function(g){return(typeof o=="undefined"?"undefined":vn(o))==="object"?g instanceof o:g&&(typeof g=="undefined"?"undefined":vn(g))==="object"&&typeof g.nodeType=="number"&&typeof g.nodeName=="string"},nt=function(g,T,I){!M[g]||nh(M[g],function(se){se.call(e,T,I,Ht)})},_i=function(g){var T=void 0;if(nt("beforeSanitizeElements",g,null),Jc(g)||to(g.nodeName,/[\u0080-\uFFFF]/))return tt(g),!0;var I=kt(g.nodeName);if(nt("uponSanitizeElement",g,{tagName:I,allowedTags:q}),!pn(g.firstElementChild)&&(!pn(g.content)||!pn(g.content.firstElementChild))&&$e(/<[/\w]/g,g.innerHTML)&&$e(/<[/\w]/g,g.textContent)||I==="select"&&$e(/<template/i,g.innerHTML))return tt(g),!0;if(!q[I]||Se[I]){if(!Se[I]&&ki(I)&&(J.tagNameCheck instanceof RegExp&&$e(J.tagNameCheck,I)||J.tagNameCheck instanceof Function&&J.tagNameCheck(I)))return!1;if(ue&&!Ce[I]){var se=_(g)||g.parentNode,ye=k(g)||g.childNodes;if(ye&&se)for(var _e=ye.length,ve=_e-1;ve>=0;--ve)se.insertBefore(v(ye[ve],!0),A(g))}return tt(g),!0}return g instanceof a&&!Xc(g)||(I==="noscript"||I==="noembed")&&$e(/<\/no(script|embed)/i,g.innerHTML)?(tt(g),!0):(Oe&&g.nodeType===3&&(T=g.textContent,T=dt(T,b," "),T=dt(T,S," "),g.textContent!==T&&(gn(e.removed,{element:g.cloneNode()}),g.textContent=T)),nt("afterSanitizeElements",g,null),!1)},wi=function(g,T,I){if(hn&&(T==="id"||T==="name")&&(I in r||I in Yc))return!1;if(!(pe&&!Me[T]&&$e(f,T))){if(!(ze&&$e(m,T))){if(!W[T]||Me[T]){if(!(ki(g)&&(J.tagNameCheck instanceof RegExp&&$e(J.tagNameCheck,g)||J.tagNameCheck instanceof Function&&J.tagNameCheck(g))&&(J.attributeNameCheck instanceof RegExp&&$e(J.attributeNameCheck,T)||J.attributeNameCheck instanceof Function&&J.attributeNameCheck(T))||T==="is"&&J.allowCustomizedBuiltInElements&&(J.tagNameCheck instanceof RegExp&&$e(J.tagNameCheck,I)||J.tagNameCheck instanceof Function&&J.tagNameCheck(I))))return!1}else if(!B[T]){if(!$e(O,dt(I,C,""))){if(!((T==="src"||T==="xlink:href"||T==="href")&&g!=="script"&&rh(I,"data:")===0&&Ft[g])){if(!(De&&!$e(E,dt(I,C,"")))){if(I)return!1}}}}}}return!0},ki=function(g){return g.indexOf("-")>0},xi=function(g){var T=void 0,I=void 0,se=void 0,ye=void 0;nt("beforeSanitizeAttributes",g,null);var _e=g.attributes;if(!!_e){var ve={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W};for(ye=_e.length;ye--;){T=_e[ye];var Un=T,Te=Un.name,Ei=Un.namespaceURI;if(I=sh(T.value),se=kt(Te),ve.attrName=se,ve.attrValue=I,ve.keepAttr=!0,ve.forceKeepAttr=void 0,nt("uponSanitizeAttribute",g,ve),I=ve.attrValue,!ve.forceKeepAttr&&(bi(Te,g),!!ve.keepAttr)){if($e(/\/>/i,I)){bi(Te,g);continue}Oe&&(I=dt(I,b," "),I=dt(I,S," "));var el=kt(g.nodeName);if(!!wi(el,se,I))try{Ei?g.setAttributeNS(Ei,Te,I):g.setAttribute(Te,I),eo(e.removed)}catch{}}}nt("afterSanitizeAttributes",g,null)}},Qc=function z(g){var T=void 0,I=yi(g);for(nt("beforeSanitizeShadowDOM",g,null);T=I.nextNode();)nt("uponSanitizeShadowNode",T,null),!_i(T)&&(T.content instanceof s&&z(T.content),xi(T));nt("afterSanitizeShadowDOM",g,null)};return e.sanitize=function(z,g){var T=void 0,I=void 0,se=void 0,ye=void 0,_e=void 0;if(dn=!z,dn&&(z="<!-->"),typeof z!="string"&&!pn(z)){if(typeof z.toString!="function")throw Zr("toString is not a function");if(z=z.toString(),typeof z!="string")throw Zr("dirty is not a string, aborting")}if(!e.isSupported){if(vn(n.toStaticHTML)==="object"||typeof n.toStaticHTML=="function"){if(typeof z=="string")return n.toStaticHTML(z);if(pn(z))return n.toStaticHTML(z.outerHTML)}return z}if(Pt||qr(g),e.removed=[],typeof z=="string"&&(te=!1),te){if(z.nodeName){var ve=kt(z.nodeName);if(!q[ve]||Se[ve])throw Zr("root node is forbidden and cannot be sanitized in-place")}}else if(z instanceof o)T=vi("<!---->"),I=T.ownerDocument.importNode(z,!0),I.nodeType===1&&I.nodeName==="BODY"||I.nodeName==="HTML"?T=I:T.appendChild(I);else{if(!ut&&!Oe&&!be&&z.indexOf("<")===-1)return R&&V?R.createHTML(z):z;if(T=vi(z),!T)return ut?null:V?$:""}T&&Ne&&tt(T.firstChild);for(var Un=yi(te?z:T);se=Un.nextNode();)se.nodeType===3&&se===ye||_i(se)||(se.content instanceof s&&Qc(se.content),xi(se),ye=se);if(ye=null,te)return z;if(ut){if(ht)for(_e=j.call(T.ownerDocument);T.firstChild;)_e.appendChild(T.firstChild);else _e=T;return W.shadowroot&&(_e=X.call(t,_e,!0)),_e}var Te=be?T.outerHTML:T.innerHTML;return be&&q["!doctype"]&&T.ownerDocument&&T.ownerDocument.doctype&&T.ownerDocument.doctype.name&&$e(mh,T.ownerDocument.doctype.name)&&(Te="<!DOCTYPE "+T.ownerDocument.doctype.name+`>
`+Te),Oe&&(Te=dt(Te,b," "),Te=dt(Te,S," ")),R&&V?R.createHTML(Te):Te},e.setConfig=function(z){qr(z),Pt=!0},e.clearConfig=function(){Ht=null,Pt=!1},e.isValidAttribute=function(z,g,T){Ht||qr({});var I=kt(z),se=kt(g);return wi(I,se,T)},e.addHook=function(z,g){typeof g=="function"&&(M[z]=M[z]||[],gn(M[z],g))},e.removeHook=function(z){M[z]&&eo(M[z])},e.removeHooks=function(z){M[z]&&(M[z]=[])},e.removeAllHooks=function(){M={}},e}var vh=Na();K.setOptions({headerIds:!1});const Ia=n=>P`
    ${n?En(vh.sanitize(K(n)).replace(/<(h[1-6]|a|p|ul|ol|li|pre|code|strong|em|blockquote|del)(\s+href="[^"]+")*>/g,'<$1 part="md-$1"$2>')):ie}
  `,At=(n,e,t,r,s,i)=>P`
    <div part="docs-item">
      <div part="docs-row">
        <div part="docs-column" class="column-name-${n}">
          <div part="docs-label">Name</div>
          <div part="docs-value" class="accent">${e}</div>
        </div>
        ${i===void 0?ie:P`
              <div part="docs-column">
                <div part="docs-label">Attribute</div>
                <div part="docs-value">${i}</div>
              </div>
            `}
        ${r===void 0&&s===void 0?ie:P`
              <div part="docs-column" class="column-type">
                <div part="docs-label">Type</div>
                <div part="docs-value">
                  ${r||(Number.isNaN(Number(s))?typeof s:"number")}
                  ${s===void 0?ie:P` = <span class="accent">${s}</span> `}
                </div>
              </div>
            `}
      </div>
      <div ?hidden=${t===void 0}>
        <div part="docs-label">Description</div>
        <div part="docs-markdown">${Ia(t)}</div>
      </div>
    </div>
  `,St=(n,e,t)=>{const r=e.length===0;return P`
    <api-viewer-tab slot="tab" part="tab" ?hidden=${r}>
      ${n}
    </api-viewer-tab>
    <api-viewer-panel slot="panel" part="tab-panel" ?hidden=${r}>
      ${t}
    </api-viewer-panel>
  `},yh=n=>{var r,s;const e=n.parameters||[],t=((s=(r=n.return)==null?void 0:r.type)==null?void 0:s.text)||"void";return P`
    <span part="docs-method">
      ${n.name}(<span part="docs-method-params"
        >${e.map((i,o)=>{var a;return P`<span part="docs-param-name">${i.name}</span>:
              <span part="docs-param-type">${(a=i.type)==null?void 0:a.text}</span>${o===e.length-1?"":", "}`})}</span
      >)</span
    ><span part="docs-method-type">: ${t}</span>
  `};class lt extends le{constructor(){super(...arguments);this.name="",this.props=[],this.attrs=[],this.methods=[],this.slots=[],this.events=[],this.cssParts=[],this.cssProps=[]}createRenderRoot(){return this}render(){const{slots:e,props:t,attrs:r,methods:s,events:i,cssParts:o,cssProps:a}=this,c=[t,r,s,e,i,a,o].every(u=>u.length===0),l=(r||[]).filter(u=>!t.some(h=>h.name===u.fieldName));return c?P`
          <div part="warning">
            The element &lt;${this.name}&gt; does not provide any documented
            API.
          </div>
        `:P`
          <api-viewer-tabs>
            ${St("Properties",t,P`
                ${t.map(u=>{const{name:h,description:p,type:d}=u,y=(r||[]).find(v=>v.fieldName===h);return At("prop",h,p,d==null?void 0:d.text,u.default,y==null?void 0:y.name)})}
              `)}
            ${St("Attributes",l,P`
                ${l.map(({name:u,description:h,type:p})=>At("attr",u,h,p==null?void 0:p.text))}
              `)}
            ${St("Methods",s,P`
                ${s.map(u=>At("method",yh(u),u.description))}
              `)}
            ${St("Slots",e,P`
                ${e.map(({name:u,description:h})=>At("slot",u,h))}
              `)}
            ${St("Events",i,P`
                ${i.map(({name:u,description:h})=>At("event",u,h))}
              `)}
            ${St("CSS Custom Properties",a,P`
                ${a.map(u=>{const{name:h,description:p}=u;return At("css",h,p,"",Os(u.default))})}
              `)}
            ${St("CSS Shadow Parts",o,P`
                ${o.map(({name:u,description:h})=>At("part",u,h))}
              `)}
          </api-viewer-tabs>
        `}updated(e){if(e.has("name")&&e.get("name")){const t=this.renderRoot.querySelector("api-viewer-tabs");t&&t.selectFirst()}}}oe([U()],lt.prototype,"name",void 0);oe([U({attribute:!1})],lt.prototype,"props",void 0);oe([U({attribute:!1})],lt.prototype,"attrs",void 0);oe([U({attribute:!1})],lt.prototype,"methods",void 0);oe([U({attribute:!1})],lt.prototype,"slots",void 0);oe([U({attribute:!1})],lt.prototype,"events",void 0);oe([U({attribute:!1})],lt.prototype,"cssParts",void 0);oe([U({attribute:!1})],lt.prototype,"cssProps",void 0);customElements.define("api-docs-layout",lt);async function _h(n,e,t,r,s,i,o=""){var h,p,d,y,v,A,k,_;const a=await n;if(!kr(a))return _a;const c=Ms(a),l=va(a,s),u=ya(l.members);return P`
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
            ${c.map(w=>P`<option value=${w.name}>${w.name}</option>`)}
          </select>
        </label>
      </nav>
    </header>
    ${ma(e==="docs"?P`
            <div ?hidden=${l.description===""} part="docs-description">
              ${Ia(l.description)}
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
          `:P`
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
  `}let wh=0;class Hs extends wa(le){constructor(){super();this.section="docs",this._id=wh++}render(){return P`
      ${ba(_h(this.jsonFetched,this.section,this._onSelect,this._onToggle,this.selected,this._id,this.excludeKnobs))}
    `}firstUpdated(){this.setTemplates()}setTemplates(e){_r(this._id,e||Array.from(this.querySelectorAll("template")))}_onSelect(e){this.selected=e.target.value}_onToggle(e){this.section=e.target.value}}oe([U()],Hs.prototype,"section",void 0);oe([U({type:String,attribute:"exclude-knobs"})],Hs.prototype,"excludeKnobs",void 0);var Us=he`
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
`;const kh=he`
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
`,xh=he`
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
`;var js=he`
  ${xh}
  ${kh}
`,Eh=he`
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
`,Ah=he`
  ${Us}
  ${Eh}
  ${js}

  [part='radio-label'] {
    margin: 0 0.75rem 0 0.25rem;
    color: var(--ave-header-color);
    font-size: 0.875rem;
  }
`;class Sh extends Hs{static get styles(){return Ah}firstUpdated(){this.setTemplates()}setTemplates(e){_r(this._id,e||Array.from(this.querySelectorAll("template")))}}customElements.define("api-viewer",Sh);async function Ch(n,e,t,r,s,i=""){var u,h,p;const o=await n;if(!kr(o))return _a;const a=Ms(o,t),c=va(o,r),l=ya(c.members);return P`
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
            ${a.map(d=>P`<option value=${d.name}>${d.name}</option>`)}
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
  `}let Th=0;class Vs extends wa(le){constructor(){super();this._id=Th++}render(){return P`
      ${ba(Ch(this.jsonFetched,this._onSelect,this.only,this.selected,this._id,this.excludeKnobs))}
    `}_onSelect(e){this.selected=e.target.value}}oe([U({type:String,attribute:"exclude-knobs"})],Vs.prototype,"excludeKnobs",void 0);class $h extends Vs{static get styles(){return[Us,js]}firstUpdated(){this.setTemplates()}setTemplates(e){_r(this._id,e||Array.from(this.querySelectorAll("template")))}}customElements.define("api-demo",$h);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=n=>e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(n,e):((t,r)=>{const{kind:s,elements:i}=r;return{kind:s,elements:i,finisher(o){window.customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(n){return U(Pe(Ie({},n),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rh=({finisher:n,descriptor:e})=>(t,r)=>{var s;if(r===void 0){const i=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(t.key)}:Pe(Ie({},t),{key:i});return n!=null&&(o.finisher=function(a){n(a,i)}),o}{const i=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),n==null||n(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gs(n,e){return Rh({descriptor:t=>{const r={get(){var s,i;return(i=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var i,o;return this[s]===void 0&&(this[s]=(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qr;((Qr=window.HTMLSlotElement)===null||Qr===void 0?void 0:Qr.prototype.assignedElements)!=null;var Dh=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,Mh=(n,e,t,r)=>{for(var s=r>1?void 0:r?Lh(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Dh(e,t,s),s};class Pa extends le{constructor(){super(...arguments);this.theme="light"}updated(e){!e.get("theme")||this.updateTheme(this.theme)}connectedCallback(){super.connectedCallback();const e=localStorage.getItem("kami-theme-mode");!e||this.updateTheme(e)}updateTheme(e){e!=="light"&&e!=="dark"||(this.theme=e,this.emitUpdateTheme(e),localStorage.setItem("kami-theme-mode",e))}emitUpdateTheme(e){const t=new CustomEvent("theme",{detail:{theme:e}});document.dispatchEvent(t)}render(){return P`
      <slot class="kami-${this.theme||"light"}-mode"></slot>
    `}}Mh([U({reflect:!0})],Pa.prototype,"theme",2);var Oh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,Ih=(n,e,t,r)=>{for(var s=r>1?void 0:r?Nh(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Oh(e,t,s),s};let vs=class extends Pa{};vs.styles=he`
    ::slotted(*) {
      --kami-theme-font-primary: "Gosha Sans";
      --kami-theme-font-secondary: "UnB Office";
      --kami-theme-shadow: 0 0 8px -5px black;
      --kami-theme-text-shadow: 0 0 4px #0000008a;
      --kami-theme-radius: 20px;
      --kami-theme-white: white;
    }

    .kami-light-mode::slotted(*) {
      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #5472ea;
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: #565656;
      --kami-theme-background: white;
      --kami-theme-border-color: rgba(0, 0, 0, 0.09);
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  
    .kami-dark-mode::slotted(*) {
      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #5472ea;
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: white;
      --kami-theme-background: #303032;
      --kami-theme-border-color: rgba(255, 255, 255, 0.09);
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  `;vs=Ih([we("kami-theme")],vs);function Ph(n="0",e="1"){return[{opacity:n},{opacity:e}]}function qh(n="0",e="1"){return[{transform:`scale(${n})`,opacity:0},{transform:`scale(${e})`,opacity:1}]}function Fh(n="50",e="0"){return[{transform:`translateY(${n}px)`,opacity:0},{opacity:0,offset:.3},{transform:`translateY(${e}px)`,opacity:1}]}function Bh(n="50",e="0"){return[{transform:`translateX(${n}px)`,opacity:0},{opacity:0,offset:.3},{transform:`translateX(${e}px)`,opacity:1}]}const Kn={fade:Ph,scale:qh,"slide-x":Bh,"slide-y":Fh};var zh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,We=(n,e,t,r)=>{for(var s=r>1?void 0:r?Hh(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&zh(e,t,s),s};let Le=class extends le{constructor(){super(...arguments);this.duration=500,this.delay=0,this.easing="ease",this.transition="fade"}get options(){return{duration:this.duration,delay:this.delay,easing:this.easing}}get single(){return this.getElementSlot(this.child)}get in(){return this.getElementSlot(this.childIn)}get out(){return this.getElementSlot(this.childOut)}getElementSlot(n){const e=n==null?void 0:n.assignedElements({flatten:!0})[0];if(!!e)return e}updated(n){n.get("show")!==void 0&&(this.cancelAnimation(this.animation),this.cancelAnimation(this.animationIn),this.cancelAnimation(this.animationOut),this.updateHostSize(this.in),this.updateHostSize(this.out),this.toggle(this.show))}toggle(n){n&&this.single&&this.display(),n&&this.in&&this.out&&this.displayInOut(),!n&&this.single&&this.hide(),!n&&this.in&&this.out&&this.hideInOut()}firstUpdated(){if(this.single&&(this.in||this.out))throw new Error("In-out does not work with default slot");if(this.in&&!this.out)throw new Error("Missing out slot");if(this.out&&!this.in)throw new Error("Missing in slot");this.show&&this.single&&this.displayEl(this.child),!this.show&&this.in&&this.out&&(this.hideEl(this.childIn),this.displayEl(this.childOut)),this.show&&this.in&&this.out&&(this.displayEl(this.childIn),this.hideEl(this.childOut)),this.updateHostSize(this.in),this.updateHostSize(this.out),this.style.display="block",this.style.opacity="1"}runAnimation({child:n,el:e,keyframes:t,options:r,show:s=!0}){s&&this.displayEl(n);const i=e.animate(t,r);return i.onfinish=()=>{s?this.displayEl(n):this.hideEl(n)},i}runAnimationInOut({childIn:n,childOut:e,inEl:t,outEl:r,keyframes:s,options:i}){this.displayEl(n);const o=t.animate(s,i),a=r.animate(s,Pe(Ie({},i),{direction:"reverse"}));return o.onfinish=()=>this.displayEl(n),o.oncancel=()=>this.displayEl(n),a.onfinish=()=>this.hideEl(e),a.oncancel=()=>this.hideEl(e),{animationIn:o,animationOut:a}}display(){!this.child||!this.single||(this.animation=this.runAnimation({child:this.child,el:this.single,keyframes:Kn[this.transition](this.from,this.to),options:this.options}))}displayInOut(){if(!this.childIn||!this.childOut||!this.in||!this.out)return;const{animationIn:n,animationOut:e}=this.runAnimationInOut({childIn:this.childIn,childOut:this.childOut,inEl:this.in,outEl:this.out,keyframes:Kn[this.transition](this.from,this.to),options:this.options});this.animationIn=n,this.animationOut=e}hide(){!this.child||!this.single||(this.animation=this.runAnimation({child:this.child,el:this.single,keyframes:Kn[this.transition](this.from,this.to),show:!1,options:Pe(Ie({},this.options),{direction:"reverse"})}))}hideInOut(){if(!this.childIn||!this.childOut||!this.in||!this.out)return;const{animationIn:n,animationOut:e}=this.runAnimationInOut({childIn:this.childOut,childOut:this.childIn,inEl:this.out,outEl:this.in,keyframes:Kn[this.transition](this.from,this.to),options:this.options});this.animationIn=e,this.animationOut=n}updateHostSize(n){!n||!n.clientWidth&&!n.clientHeight||(this.style.width=`${n.clientWidth}px`,this.style.height=`${n.clientHeight}px`)}cancelAnimation(n){!n||n.playState==="finished"||n.cancel()}displayEl(n){!n||(n.style.display="inherit")}hideEl(n){!n||(n.style.display="none")}render(){return P`
      <slot id="single" style="display: none;"></slot>
      <slot id="in" name="in" style="display: none; position: absolute;"></slot>
      <slot id="out" name="out" style="display: none; position: absolute;"></slot>
    `}};We([Gs("#single")],Le.prototype,"child",2);We([Gs("#in")],Le.prototype,"childIn",2);We([Gs("#out")],Le.prototype,"childOut",2);We([U({converter:n=>n==="true"})],Le.prototype,"show",2);We([U({type:String})],Le.prototype,"from",2);We([U({type:String})],Le.prototype,"to",2);We([U({type:Number})],Le.prototype,"duration",2);We([U({type:Number})],Le.prototype,"delay",2);We([U({type:String})],Le.prototype,"easing",2);We([U({type:String})],Le.prototype,"transition",2);Le=We([we("kami-transition")],Le);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Uh=he`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ys=class extends le{render(){return P`<span><slot></slot></span>`}};ys.styles=[Uh];ys=oe([we("mwc-icon")],ys);var jh="M19 17V11.8C18.5 11.9 18 12 17.5 12H17V18H7V11C7 8.2 9.2 6 12 6C12.1 4.7 12.7 3.6 13.5 2.7C13.2 2.3 12.6 2 12 2C10.9 2 10 2.9 10 4V4.3C7 5.2 5 7.9 5 11V17L3 19V20H21V19L19 17M10 21C10 22.1 10.9 23 12 23S14 22.1 14 21H10M21 6.5C21 8.4 19.4 10 17.5 10S14 8.4 14 6.5 15.6 3 17.5 3 21 4.6 21 6.5",Vh="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z",qa="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Gh="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",Wh="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",Zh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Kh(n){if(n.__esModule)return n;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(n).forEach(function(t){var r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}),e}var ne={};const Yh="\xC1",Xh="\xE1",Jh="\u0102",Qh="\u0103",ed="\u223E",td="\u223F",nd="\u223E\u0333",rd="\xC2",sd="\xE2",id="\xB4",od="\u0410",ad="\u0430",cd="\xC6",ld="\xE6",ud="\u2061",hd="\u{1D504}",dd="\u{1D51E}",pd="\xC0",fd="\xE0",md="\u2135",gd="\u2135",bd="\u0391",vd="\u03B1",yd="\u0100",_d="\u0101",wd="\u2A3F",kd="&",xd="&",Ed="\u2A55",Ad="\u2A53",Sd="\u2227",Cd="\u2A5C",Td="\u2A58",$d="\u2A5A",Rd="\u2220",Dd="\u29A4",Ld="\u2220",Md="\u29A8",Od="\u29A9",Nd="\u29AA",Id="\u29AB",Pd="\u29AC",qd="\u29AD",Fd="\u29AE",Bd="\u29AF",zd="\u2221",Hd="\u221F",Ud="\u22BE",jd="\u299D",Vd="\u2222",Gd="\xC5",Wd="\u237C",Zd="\u0104",Kd="\u0105",Yd="\u{1D538}",Xd="\u{1D552}",Jd="\u2A6F",Qd="\u2248",ep="\u2A70",tp="\u224A",np="\u224B",rp="'",sp="\u2061",ip="\u2248",op="\u224A",ap="\xC5",cp="\xE5",lp="\u{1D49C}",up="\u{1D4B6}",hp="\u2254",dp="*",pp="\u2248",fp="\u224D",mp="\xC3",gp="\xE3",bp="\xC4",vp="\xE4",yp="\u2233",_p="\u2A11",wp="\u224C",kp="\u03F6",xp="\u2035",Ep="\u223D",Ap="\u22CD",Sp="\u2216",Cp="\u2AE7",Tp="\u22BD",$p="\u2305",Rp="\u2306",Dp="\u2305",Lp="\u23B5",Mp="\u23B6",Op="\u224C",Np="\u0411",Ip="\u0431",Pp="\u201E",qp="\u2235",Fp="\u2235",Bp="\u2235",zp="\u29B0",Hp="\u03F6",Up="\u212C",jp="\u212C",Vp="\u0392",Gp="\u03B2",Wp="\u2136",Zp="\u226C",Kp="\u{1D505}",Yp="\u{1D51F}",Xp="\u22C2",Jp="\u25EF",Qp="\u22C3",ef="\u2A00",tf="\u2A01",nf="\u2A02",rf="\u2A06",sf="\u2605",of="\u25BD",af="\u25B3",cf="\u2A04",lf="\u22C1",uf="\u22C0",hf="\u290D",df="\u29EB",pf="\u25AA",ff="\u25B4",mf="\u25BE",gf="\u25C2",bf="\u25B8",vf="\u2423",yf="\u2592",_f="\u2591",wf="\u2593",kf="\u2588",xf="=\u20E5",Ef="\u2261\u20E5",Af="\u2AED",Sf="\u2310",Cf="\u{1D539}",Tf="\u{1D553}",$f="\u22A5",Rf="\u22A5",Df="\u22C8",Lf="\u29C9",Mf="\u2510",Of="\u2555",Nf="\u2556",If="\u2557",Pf="\u250C",qf="\u2552",Ff="\u2553",Bf="\u2554",zf="\u2500",Hf="\u2550",Uf="\u252C",jf="\u2564",Vf="\u2565",Gf="\u2566",Wf="\u2534",Zf="\u2567",Kf="\u2568",Yf="\u2569",Xf="\u229F",Jf="\u229E",Qf="\u22A0",em="\u2518",tm="\u255B",nm="\u255C",rm="\u255D",sm="\u2514",im="\u2558",om="\u2559",am="\u255A",cm="\u2502",lm="\u2551",um="\u253C",hm="\u256A",dm="\u256B",pm="\u256C",fm="\u2524",mm="\u2561",gm="\u2562",bm="\u2563",vm="\u251C",ym="\u255E",_m="\u255F",wm="\u2560",km="\u2035",xm="\u02D8",Em="\u02D8",Am="\xA6",Sm="\u{1D4B7}",Cm="\u212C",Tm="\u204F",$m="\u223D",Rm="\u22CD",Dm="\u29C5",Lm="\\",Mm="\u27C8",Om="\u2022",Nm="\u2022",Im="\u224E",Pm="\u2AAE",qm="\u224F",Fm="\u224E",Bm="\u224F",zm="\u0106",Hm="\u0107",Um="\u2A44",jm="\u2A49",Vm="\u2A4B",Gm="\u2229",Wm="\u22D2",Zm="\u2A47",Km="\u2A40",Ym="\u2145",Xm="\u2229\uFE00",Jm="\u2041",Qm="\u02C7",eg="\u212D",tg="\u2A4D",ng="\u010C",rg="\u010D",sg="\xC7",ig="\xE7",og="\u0108",ag="\u0109",cg="\u2230",lg="\u2A4C",ug="\u2A50",hg="\u010A",dg="\u010B",pg="\xB8",fg="\xB8",mg="\u29B2",gg="\xA2",bg="\xB7",vg="\xB7",yg="\u{1D520}",_g="\u212D",wg="\u0427",kg="\u0447",xg="\u2713",Eg="\u2713",Ag="\u03A7",Sg="\u03C7",Cg="\u02C6",Tg="\u2257",$g="\u21BA",Rg="\u21BB",Dg="\u229B",Lg="\u229A",Mg="\u229D",Og="\u2299",Ng="\xAE",Ig="\u24C8",Pg="\u2296",qg="\u2295",Fg="\u2297",Bg="\u25CB",zg="\u29C3",Hg="\u2257",Ug="\u2A10",jg="\u2AEF",Vg="\u29C2",Gg="\u2232",Wg="\u201D",Zg="\u2019",Kg="\u2663",Yg="\u2663",Xg=":",Jg="\u2237",Qg="\u2A74",eb="\u2254",tb="\u2254",nb=",",rb="@",sb="\u2201",ib="\u2218",ob="\u2201",ab="\u2102",cb="\u2245",lb="\u2A6D",ub="\u2261",hb="\u222E",db="\u222F",pb="\u222E",fb="\u{1D554}",mb="\u2102",gb="\u2210",bb="\u2210",vb="\xA9",yb="\xA9",_b="\u2117",wb="\u2233",kb="\u21B5",xb="\u2717",Eb="\u2A2F",Ab="\u{1D49E}",Sb="\u{1D4B8}",Cb="\u2ACF",Tb="\u2AD1",$b="\u2AD0",Rb="\u2AD2",Db="\u22EF",Lb="\u2938",Mb="\u2935",Ob="\u22DE",Nb="\u22DF",Ib="\u21B6",Pb="\u293D",qb="\u2A48",Fb="\u2A46",Bb="\u224D",zb="\u222A",Hb="\u22D3",Ub="\u2A4A",jb="\u228D",Vb="\u2A45",Gb="\u222A\uFE00",Wb="\u21B7",Zb="\u293C",Kb="\u22DE",Yb="\u22DF",Xb="\u22CE",Jb="\u22CF",Qb="\xA4",ev="\u21B6",tv="\u21B7",nv="\u22CE",rv="\u22CF",sv="\u2232",iv="\u2231",ov="\u232D",av="\u2020",cv="\u2021",lv="\u2138",uv="\u2193",hv="\u21A1",dv="\u21D3",pv="\u2010",fv="\u2AE4",mv="\u22A3",gv="\u290F",bv="\u02DD",vv="\u010E",yv="\u010F",_v="\u0414",wv="\u0434",kv="\u2021",xv="\u21CA",Ev="\u2145",Av="\u2146",Sv="\u2911",Cv="\u2A77",Tv="\xB0",$v="\u2207",Rv="\u0394",Dv="\u03B4",Lv="\u29B1",Mv="\u297F",Ov="\u{1D507}",Nv="\u{1D521}",Iv="\u2965",Pv="\u21C3",qv="\u21C2",Fv="\xB4",Bv="\u02D9",zv="\u02DD",Hv="`",Uv="\u02DC",jv="\u22C4",Vv="\u22C4",Gv="\u22C4",Wv="\u2666",Zv="\u2666",Kv="\xA8",Yv="\u2146",Xv="\u03DD",Jv="\u22F2",Qv="\xF7",e0="\xF7",t0="\u22C7",n0="\u22C7",r0="\u0402",s0="\u0452",i0="\u231E",o0="\u230D",a0="$",c0="\u{1D53B}",l0="\u{1D555}",u0="\xA8",h0="\u02D9",d0="\u20DC",p0="\u2250",f0="\u2251",m0="\u2250",g0="\u2238",b0="\u2214",v0="\u22A1",y0="\u2306",_0="\u222F",w0="\xA8",k0="\u21D3",x0="\u21D0",E0="\u21D4",A0="\u2AE4",S0="\u27F8",C0="\u27FA",T0="\u27F9",$0="\u21D2",R0="\u22A8",D0="\u21D1",L0="\u21D5",M0="\u2225",O0="\u2913",N0="\u2193",I0="\u2193",P0="\u21D3",q0="\u21F5",F0="\u0311",B0="\u21CA",z0="\u21C3",H0="\u21C2",U0="\u2950",j0="\u295E",V0="\u2956",G0="\u21BD",W0="\u295F",Z0="\u2957",K0="\u21C1",Y0="\u21A7",X0="\u22A4",J0="\u2910",Q0="\u231F",ey="\u230C",ty="\u{1D49F}",ny="\u{1D4B9}",ry="\u0405",sy="\u0455",iy="\u29F6",oy="\u0110",ay="\u0111",cy="\u22F1",ly="\u25BF",uy="\u25BE",hy="\u21F5",dy="\u296F",py="\u29A6",fy="\u040F",my="\u045F",gy="\u27FF",by="\xC9",vy="\xE9",yy="\u2A6E",_y="\u011A",wy="\u011B",ky="\xCA",xy="\xEA",Ey="\u2256",Ay="\u2255",Sy="\u042D",Cy="\u044D",Ty="\u2A77",$y="\u0116",Ry="\u0117",Dy="\u2251",Ly="\u2147",My="\u2252",Oy="\u{1D508}",Ny="\u{1D522}",Iy="\u2A9A",Py="\xC8",qy="\xE8",Fy="\u2A96",By="\u2A98",zy="\u2A99",Hy="\u2208",Uy="\u23E7",jy="\u2113",Vy="\u2A95",Gy="\u2A97",Wy="\u0112",Zy="\u0113",Ky="\u2205",Yy="\u2205",Xy="\u25FB",Jy="\u2205",Qy="\u25AB",e_="\u2004",t_="\u2005",n_="\u2003",r_="\u014A",s_="\u014B",i_="\u2002",o_="\u0118",a_="\u0119",c_="\u{1D53C}",l_="\u{1D556}",u_="\u22D5",h_="\u29E3",d_="\u2A71",p_="\u03B5",f_="\u0395",m_="\u03B5",g_="\u03F5",b_="\u2256",v_="\u2255",y_="\u2242",__="\u2A96",w_="\u2A95",k_="\u2A75",x_="=",E_="\u2242",A_="\u225F",S_="\u21CC",C_="\u2261",T_="\u2A78",$_="\u29E5",R_="\u2971",D_="\u2253",L_="\u212F",M_="\u2130",O_="\u2250",N_="\u2A73",I_="\u2242",P_="\u0397",q_="\u03B7",F_="\xD0",B_="\xF0",z_="\xCB",H_="\xEB",U_="\u20AC",j_="!",V_="\u2203",G_="\u2203",W_="\u2130",Z_="\u2147",K_="\u2147",Y_="\u2252",X_="\u0424",J_="\u0444",Q_="\u2640",ew="\uFB03",tw="\uFB00",nw="\uFB04",rw="\u{1D509}",sw="\u{1D523}",iw="\uFB01",ow="\u25FC",aw="\u25AA",cw="fj",lw="\u266D",uw="\uFB02",hw="\u25B1",dw="\u0192",pw="\u{1D53D}",fw="\u{1D557}",mw="\u2200",gw="\u2200",bw="\u22D4",vw="\u2AD9",yw="\u2131",_w="\u2A0D",ww="\xBD",kw="\u2153",xw="\xBC",Ew="\u2155",Aw="\u2159",Sw="\u215B",Cw="\u2154",Tw="\u2156",$w="\xBE",Rw="\u2157",Dw="\u215C",Lw="\u2158",Mw="\u215A",Ow="\u215D",Nw="\u215E",Iw="\u2044",Pw="\u2322",qw="\u{1D4BB}",Fw="\u2131",Bw="\u01F5",zw="\u0393",Hw="\u03B3",Uw="\u03DC",jw="\u03DD",Vw="\u2A86",Gw="\u011E",Ww="\u011F",Zw="\u0122",Kw="\u011C",Yw="\u011D",Xw="\u0413",Jw="\u0433",Qw="\u0120",ek="\u0121",tk="\u2265",nk="\u2267",rk="\u2A8C",sk="\u22DB",ik="\u2265",ok="\u2267",ak="\u2A7E",ck="\u2AA9",lk="\u2A7E",uk="\u2A80",hk="\u2A82",dk="\u2A84",pk="\u22DB\uFE00",fk="\u2A94",mk="\u{1D50A}",gk="\u{1D524}",bk="\u226B",vk="\u22D9",yk="\u22D9",_k="\u2137",wk="\u0403",kk="\u0453",xk="\u2AA5",Ek="\u2277",Ak="\u2A92",Sk="\u2AA4",Ck="\u2A8A",Tk="\u2A8A",$k="\u2A88",Rk="\u2269",Dk="\u2A88",Lk="\u2269",Mk="\u22E7",Ok="\u{1D53E}",Nk="\u{1D558}",Ik="`",Pk="\u2265",qk="\u22DB",Fk="\u2267",Bk="\u2AA2",zk="\u2277",Hk="\u2A7E",Uk="\u2273",jk="\u{1D4A2}",Vk="\u210A",Gk="\u2273",Wk="\u2A8E",Zk="\u2A90",Kk="\u2AA7",Yk="\u2A7A",Xk=">",Jk=">",Qk="\u226B",ex="\u22D7",tx="\u2995",nx="\u2A7C",rx="\u2A86",sx="\u2978",ix="\u22D7",ox="\u22DB",ax="\u2A8C",cx="\u2277",lx="\u2273",ux="\u2269\uFE00",hx="\u2269\uFE00",dx="\u02C7",px="\u200A",fx="\xBD",mx="\u210B",gx="\u042A",bx="\u044A",vx="\u2948",yx="\u2194",_x="\u21D4",wx="\u21AD",kx="^",xx="\u210F",Ex="\u0124",Ax="\u0125",Sx="\u2665",Cx="\u2665",Tx="\u2026",$x="\u22B9",Rx="\u{1D525}",Dx="\u210C",Lx="\u210B",Mx="\u2925",Ox="\u2926",Nx="\u21FF",Ix="\u223B",Px="\u21A9",qx="\u21AA",Fx="\u{1D559}",Bx="\u210D",zx="\u2015",Hx="\u2500",Ux="\u{1D4BD}",jx="\u210B",Vx="\u210F",Gx="\u0126",Wx="\u0127",Zx="\u224E",Kx="\u224F",Yx="\u2043",Xx="\u2010",Jx="\xCD",Qx="\xED",eE="\u2063",tE="\xCE",nE="\xEE",rE="\u0418",sE="\u0438",iE="\u0130",oE="\u0415",aE="\u0435",cE="\xA1",lE="\u21D4",uE="\u{1D526}",hE="\u2111",dE="\xCC",pE="\xEC",fE="\u2148",mE="\u2A0C",gE="\u222D",bE="\u29DC",vE="\u2129",yE="\u0132",_E="\u0133",wE="\u012A",kE="\u012B",xE="\u2111",EE="\u2148",AE="\u2110",SE="\u2111",CE="\u0131",TE="\u2111",$E="\u22B7",RE="\u01B5",DE="\u21D2",LE="\u2105",ME="\u221E",OE="\u29DD",NE="\u0131",IE="\u22BA",PE="\u222B",qE="\u222C",FE="\u2124",BE="\u222B",zE="\u22BA",HE="\u22C2",UE="\u2A17",jE="\u2A3C",VE="\u2063",GE="\u2062",WE="\u0401",ZE="\u0451",KE="\u012E",YE="\u012F",XE="\u{1D540}",JE="\u{1D55A}",QE="\u0399",eA="\u03B9",tA="\u2A3C",nA="\xBF",rA="\u{1D4BE}",sA="\u2110",iA="\u2208",oA="\u22F5",aA="\u22F9",cA="\u22F4",lA="\u22F3",uA="\u2208",hA="\u2062",dA="\u0128",pA="\u0129",fA="\u0406",mA="\u0456",gA="\xCF",bA="\xEF",vA="\u0134",yA="\u0135",_A="\u0419",wA="\u0439",kA="\u{1D50D}",xA="\u{1D527}",EA="\u0237",AA="\u{1D541}",SA="\u{1D55B}",CA="\u{1D4A5}",TA="\u{1D4BF}",$A="\u0408",RA="\u0458",DA="\u0404",LA="\u0454",MA="\u039A",OA="\u03BA",NA="\u03F0",IA="\u0136",PA="\u0137",qA="\u041A",FA="\u043A",BA="\u{1D50E}",zA="\u{1D528}",HA="\u0138",UA="\u0425",jA="\u0445",VA="\u040C",GA="\u045C",WA="\u{1D542}",ZA="\u{1D55C}",KA="\u{1D4A6}",YA="\u{1D4C0}",XA="\u21DA",JA="\u0139",QA="\u013A",e1="\u29B4",t1="\u2112",n1="\u039B",r1="\u03BB",s1="\u27E8",i1="\u27EA",o1="\u2991",a1="\u27E8",c1="\u2A85",l1="\u2112",u1="\xAB",h1="\u21E4",d1="\u291F",p1="\u2190",f1="\u219E",m1="\u21D0",g1="\u291D",b1="\u21A9",v1="\u21AB",y1="\u2939",_1="\u2973",w1="\u21A2",k1="\u2919",x1="\u291B",E1="\u2AAB",A1="\u2AAD",S1="\u2AAD\uFE00",C1="\u290C",T1="\u290E",$1="\u2772",R1="{",D1="[",L1="\u298B",M1="\u298F",O1="\u298D",N1="\u013D",I1="\u013E",P1="\u013B",q1="\u013C",F1="\u2308",B1="{",z1="\u041B",H1="\u043B",U1="\u2936",j1="\u201C",V1="\u201E",G1="\u2967",W1="\u294B",Z1="\u21B2",K1="\u2264",Y1="\u2266",X1="\u27E8",J1="\u21E4",Q1="\u2190",eS="\u2190",tS="\u21D0",nS="\u21C6",rS="\u21A2",sS="\u2308",iS="\u27E6",oS="\u2961",aS="\u2959",cS="\u21C3",lS="\u230A",uS="\u21BD",hS="\u21BC",dS="\u21C7",pS="\u2194",fS="\u2194",mS="\u21D4",gS="\u21C6",bS="\u21CB",vS="\u21AD",yS="\u294E",_S="\u21A4",wS="\u22A3",kS="\u295A",xS="\u22CB",ES="\u29CF",AS="\u22B2",SS="\u22B4",CS="\u2951",TS="\u2960",$S="\u2958",RS="\u21BF",DS="\u2952",LS="\u21BC",MS="\u2A8B",OS="\u22DA",NS="\u2264",IS="\u2266",PS="\u2A7D",qS="\u2AA8",FS="\u2A7D",BS="\u2A7F",zS="\u2A81",HS="\u2A83",US="\u22DA\uFE00",jS="\u2A93",VS="\u2A85",GS="\u22D6",WS="\u22DA",ZS="\u2A8B",KS="\u22DA",YS="\u2266",XS="\u2276",JS="\u2276",QS="\u2AA1",eC="\u2272",tC="\u2A7D",nC="\u2272",rC="\u297C",sC="\u230A",iC="\u{1D50F}",oC="\u{1D529}",aC="\u2276",cC="\u2A91",lC="\u2962",uC="\u21BD",hC="\u21BC",dC="\u296A",pC="\u2584",fC="\u0409",mC="\u0459",gC="\u21C7",bC="\u226A",vC="\u22D8",yC="\u231E",_C="\u21DA",wC="\u296B",kC="\u25FA",xC="\u013F",EC="\u0140",AC="\u23B0",SC="\u23B0",CC="\u2A89",TC="\u2A89",$C="\u2A87",RC="\u2268",DC="\u2A87",LC="\u2268",MC="\u22E6",OC="\u27EC",NC="\u21FD",IC="\u27E6",PC="\u27F5",qC="\u27F5",FC="\u27F8",BC="\u27F7",zC="\u27F7",HC="\u27FA",UC="\u27FC",jC="\u27F6",VC="\u27F6",GC="\u27F9",WC="\u21AB",ZC="\u21AC",KC="\u2985",YC="\u{1D543}",XC="\u{1D55D}",JC="\u2A2D",QC="\u2A34",eT="\u2217",tT="_",nT="\u2199",rT="\u2198",sT="\u25CA",iT="\u25CA",oT="\u29EB",aT="(",cT="\u2993",lT="\u21C6",uT="\u231F",hT="\u21CB",dT="\u296D",pT="\u200E",fT="\u22BF",mT="\u2039",gT="\u{1D4C1}",bT="\u2112",vT="\u21B0",yT="\u21B0",_T="\u2272",wT="\u2A8D",kT="\u2A8F",xT="[",ET="\u2018",AT="\u201A",ST="\u0141",CT="\u0142",TT="\u2AA6",$T="\u2A79",RT="<",DT="<",LT="\u226A",MT="\u22D6",OT="\u22CB",NT="\u22C9",IT="\u2976",PT="\u2A7B",qT="\u25C3",FT="\u22B4",BT="\u25C2",zT="\u2996",HT="\u294A",UT="\u2966",jT="\u2268\uFE00",VT="\u2268\uFE00",GT="\xAF",WT="\u2642",ZT="\u2720",KT="\u2720",YT="\u21A6",XT="\u21A6",JT="\u21A7",QT="\u21A4",e$="\u21A5",t$="\u25AE",n$="\u2A29",r$="\u041C",s$="\u043C",i$="\u2014",o$="\u223A",a$="\u2221",c$="\u205F",l$="\u2133",u$="\u{1D510}",h$="\u{1D52A}",d$="\u2127",p$="\xB5",f$="*",m$="\u2AF0",g$="\u2223",b$="\xB7",v$="\u229F",y$="\u2212",_$="\u2238",w$="\u2A2A",k$="\u2213",x$="\u2ADB",E$="\u2026",A$="\u2213",S$="\u22A7",C$="\u{1D544}",T$="\u{1D55E}",$$="\u2213",R$="\u{1D4C2}",D$="\u2133",L$="\u223E",M$="\u039C",O$="\u03BC",N$="\u22B8",I$="\u22B8",P$="\u2207",q$="\u0143",F$="\u0144",B$="\u2220\u20D2",z$="\u2249",H$="\u2A70\u0338",U$="\u224B\u0338",j$="\u0149",V$="\u2249",G$="\u266E",W$="\u2115",Z$="\u266E",K$="\xA0",Y$="\u224E\u0338",X$="\u224F\u0338",J$="\u2A43",Q$="\u0147",eR="\u0148",tR="\u0145",nR="\u0146",rR="\u2247",sR="\u2A6D\u0338",iR="\u2A42",oR="\u041D",aR="\u043D",cR="\u2013",lR="\u2924",uR="\u2197",hR="\u21D7",dR="\u2197",pR="\u2260",fR="\u2250\u0338",mR="\u200B",gR="\u200B",bR="\u200B",vR="\u200B",yR="\u2262",_R="\u2928",wR="\u2242\u0338",kR="\u226B",xR="\u226A",ER=`
`,AR="\u2204",SR="\u2204",CR="\u{1D511}",TR="\u{1D52B}",$R="\u2267\u0338",RR="\u2271",DR="\u2271",LR="\u2267\u0338",MR="\u2A7E\u0338",OR="\u2A7E\u0338",NR="\u22D9\u0338",IR="\u2275",PR="\u226B\u20D2",qR="\u226F",FR="\u226F",BR="\u226B\u0338",zR="\u21AE",HR="\u21CE",UR="\u2AF2",jR="\u220B",VR="\u22FC",GR="\u22FA",WR="\u220B",ZR="\u040A",KR="\u045A",YR="\u219A",XR="\u21CD",JR="\u2025",QR="\u2266\u0338",eD="\u2270",tD="\u219A",nD="\u21CD",rD="\u21AE",sD="\u21CE",iD="\u2270",oD="\u2266\u0338",aD="\u2A7D\u0338",cD="\u2A7D\u0338",lD="\u226E",uD="\u22D8\u0338",hD="\u2274",dD="\u226A\u20D2",pD="\u226E",fD="\u22EA",mD="\u22EC",gD="\u226A\u0338",bD="\u2224",vD="\u2060",yD="\xA0",_D="\u{1D55F}",wD="\u2115",kD="\u2AEC",xD="\xAC",ED="\u2262",AD="\u226D",SD="\u2226",CD="\u2209",TD="\u2260",$D="\u2242\u0338",RD="\u2204",DD="\u226F",LD="\u2271",MD="\u2267\u0338",OD="\u226B\u0338",ND="\u2279",ID="\u2A7E\u0338",PD="\u2275",qD="\u224E\u0338",FD="\u224F\u0338",BD="\u2209",zD="\u22F5\u0338",HD="\u22F9\u0338",UD="\u2209",jD="\u22F7",VD="\u22F6",GD="\u29CF\u0338",WD="\u22EA",ZD="\u22EC",KD="\u226E",YD="\u2270",XD="\u2278",JD="\u226A\u0338",QD="\u2A7D\u0338",eL="\u2274",tL="\u2AA2\u0338",nL="\u2AA1\u0338",rL="\u220C",sL="\u220C",iL="\u22FE",oL="\u22FD",aL="\u2280",cL="\u2AAF\u0338",lL="\u22E0",uL="\u220C",hL="\u29D0\u0338",dL="\u22EB",pL="\u22ED",fL="\u228F\u0338",mL="\u22E2",gL="\u2290\u0338",bL="\u22E3",vL="\u2282\u20D2",yL="\u2288",_L="\u2281",wL="\u2AB0\u0338",kL="\u22E1",xL="\u227F\u0338",EL="\u2283\u20D2",AL="\u2289",SL="\u2241",CL="\u2244",TL="\u2247",$L="\u2249",RL="\u2224",DL="\u2226",LL="\u2226",ML="\u2AFD\u20E5",OL="\u2202\u0338",NL="\u2A14",IL="\u2280",PL="\u22E0",qL="\u2280",FL="\u2AAF\u0338",BL="\u2AAF\u0338",zL="\u2933\u0338",HL="\u219B",UL="\u21CF",jL="\u219D\u0338",VL="\u219B",GL="\u21CF",WL="\u22EB",ZL="\u22ED",KL="\u2281",YL="\u22E1",XL="\u2AB0\u0338",JL="\u{1D4A9}",QL="\u{1D4C3}",eM="\u2224",tM="\u2226",nM="\u2241",rM="\u2244",sM="\u2244",iM="\u2224",oM="\u2226",aM="\u22E2",cM="\u22E3",lM="\u2284",uM="\u2AC5\u0338",hM="\u2288",dM="\u2282\u20D2",pM="\u2288",fM="\u2AC5\u0338",mM="\u2281",gM="\u2AB0\u0338",bM="\u2285",vM="\u2AC6\u0338",yM="\u2289",_M="\u2283\u20D2",wM="\u2289",kM="\u2AC6\u0338",xM="\u2279",EM="\xD1",AM="\xF1",SM="\u2278",CM="\u22EA",TM="\u22EC",$M="\u22EB",RM="\u22ED",DM="\u039D",LM="\u03BD",MM="#",OM="\u2116",NM="\u2007",IM="\u224D\u20D2",PM="\u22AC",qM="\u22AD",FM="\u22AE",BM="\u22AF",zM="\u2265\u20D2",HM=">\u20D2",UM="\u2904",jM="\u29DE",VM="\u2902",GM="\u2264\u20D2",WM="<\u20D2",ZM="\u22B4\u20D2",KM="\u2903",YM="\u22B5\u20D2",XM="\u223C\u20D2",JM="\u2923",QM="\u2196",eO="\u21D6",tO="\u2196",nO="\u2927",rO="\xD3",sO="\xF3",iO="\u229B",oO="\xD4",aO="\xF4",cO="\u229A",lO="\u041E",uO="\u043E",hO="\u229D",dO="\u0150",pO="\u0151",fO="\u2A38",mO="\u2299",gO="\u29BC",bO="\u0152",vO="\u0153",yO="\u29BF",_O="\u{1D512}",wO="\u{1D52C}",kO="\u02DB",xO="\xD2",EO="\xF2",AO="\u29C1",SO="\u29B5",CO="\u03A9",TO="\u222E",$O="\u21BA",RO="\u29BE",DO="\u29BB",LO="\u203E",MO="\u29C0",OO="\u014C",NO="\u014D",IO="\u03A9",PO="\u03C9",qO="\u039F",FO="\u03BF",BO="\u29B6",zO="\u2296",HO="\u{1D546}",UO="\u{1D560}",jO="\u29B7",VO="\u201C",GO="\u2018",WO="\u29B9",ZO="\u2295",KO="\u21BB",YO="\u2A54",XO="\u2228",JO="\u2A5D",QO="\u2134",eN="\u2134",tN="\xAA",nN="\xBA",rN="\u22B6",sN="\u2A56",iN="\u2A57",oN="\u2A5B",aN="\u24C8",cN="\u{1D4AA}",lN="\u2134",uN="\xD8",hN="\xF8",dN="\u2298",pN="\xD5",fN="\xF5",mN="\u2A36",gN="\u2A37",bN="\u2297",vN="\xD6",yN="\xF6",_N="\u233D",wN="\u203E",kN="\u23DE",xN="\u23B4",EN="\u23DC",AN="\xB6",SN="\u2225",CN="\u2225",TN="\u2AF3",$N="\u2AFD",RN="\u2202",DN="\u2202",LN="\u041F",MN="\u043F",ON="%",NN=".",IN="\u2030",PN="\u22A5",qN="\u2031",FN="\u{1D513}",BN="\u{1D52D}",zN="\u03A6",HN="\u03C6",UN="\u03D5",jN="\u2133",VN="\u260E",GN="\u03A0",WN="\u03C0",ZN="\u22D4",KN="\u03D6",YN="\u210F",XN="\u210E",JN="\u210F",QN="\u2A23",eI="\u229E",tI="\u2A22",nI="+",rI="\u2214",sI="\u2A25",iI="\u2A72",oI="\xB1",aI="\xB1",cI="\u2A26",lI="\u2A27",uI="\xB1",hI="\u210C",dI="\u2A15",pI="\u{1D561}",fI="\u2119",mI="\xA3",gI="\u2AB7",bI="\u2ABB",vI="\u227A",yI="\u227C",_I="\u2AB7",wI="\u227A",kI="\u227C",xI="\u227A",EI="\u2AAF",AI="\u227C",SI="\u227E",CI="\u2AAF",TI="\u2AB9",$I="\u2AB5",RI="\u22E8",DI="\u2AAF",LI="\u2AB3",MI="\u227E",OI="\u2032",NI="\u2033",II="\u2119",PI="\u2AB9",qI="\u2AB5",FI="\u22E8",BI="\u220F",zI="\u220F",HI="\u232E",UI="\u2312",jI="\u2313",VI="\u221D",GI="\u221D",WI="\u2237",ZI="\u221D",KI="\u227E",YI="\u22B0",XI="\u{1D4AB}",JI="\u{1D4C5}",QI="\u03A8",eP="\u03C8",tP="\u2008",nP="\u{1D514}",rP="\u{1D52E}",sP="\u2A0C",iP="\u{1D562}",oP="\u211A",aP="\u2057",cP="\u{1D4AC}",lP="\u{1D4C6}",uP="\u210D",hP="\u2A16",dP="?",pP="\u225F",fP='"',mP='"',gP="\u21DB",bP="\u223D\u0331",vP="\u0154",yP="\u0155",_P="\u221A",wP="\u29B3",kP="\u27E9",xP="\u27EB",EP="\u2992",AP="\u29A5",SP="\u27E9",CP="\xBB",TP="\u2975",$P="\u21E5",RP="\u2920",DP="\u2933",LP="\u2192",MP="\u21A0",OP="\u21D2",NP="\u291E",IP="\u21AA",PP="\u21AC",qP="\u2945",FP="\u2974",BP="\u2916",zP="\u21A3",HP="\u219D",UP="\u291A",jP="\u291C",VP="\u2236",GP="\u211A",WP="\u290D",ZP="\u290F",KP="\u2910",YP="\u2773",XP="}",JP="]",QP="\u298C",e2="\u298E",t2="\u2990",n2="\u0158",r2="\u0159",s2="\u0156",i2="\u0157",o2="\u2309",a2="}",c2="\u0420",l2="\u0440",u2="\u2937",h2="\u2969",d2="\u201D",p2="\u201D",f2="\u21B3",m2="\u211C",g2="\u211B",b2="\u211C",v2="\u211D",y2="\u211C",_2="\u25AD",w2="\xAE",k2="\xAE",x2="\u220B",E2="\u21CB",A2="\u296F",S2="\u297D",C2="\u230B",T2="\u{1D52F}",$2="\u211C",R2="\u2964",D2="\u21C1",L2="\u21C0",M2="\u296C",O2="\u03A1",N2="\u03C1",I2="\u03F1",P2="\u27E9",q2="\u21E5",F2="\u2192",B2="\u2192",z2="\u21D2",H2="\u21C4",U2="\u21A3",j2="\u2309",V2="\u27E7",G2="\u295D",W2="\u2955",Z2="\u21C2",K2="\u230B",Y2="\u21C1",X2="\u21C0",J2="\u21C4",Q2="\u21CC",eq="\u21C9",tq="\u219D",nq="\u21A6",rq="\u22A2",sq="\u295B",iq="\u22CC",oq="\u29D0",aq="\u22B3",cq="\u22B5",lq="\u294F",uq="\u295C",hq="\u2954",dq="\u21BE",pq="\u2953",fq="\u21C0",mq="\u02DA",gq="\u2253",bq="\u21C4",vq="\u21CC",yq="\u200F",_q="\u23B1",wq="\u23B1",kq="\u2AEE",xq="\u27ED",Eq="\u21FE",Aq="\u27E7",Sq="\u2986",Cq="\u{1D563}",Tq="\u211D",$q="\u2A2E",Rq="\u2A35",Dq="\u2970",Lq=")",Mq="\u2994",Oq="\u2A12",Nq="\u21C9",Iq="\u21DB",Pq="\u203A",qq="\u{1D4C7}",Fq="\u211B",Bq="\u21B1",zq="\u21B1",Hq="]",Uq="\u2019",jq="\u2019",Vq="\u22CC",Gq="\u22CA",Wq="\u25B9",Zq="\u22B5",Kq="\u25B8",Yq="\u29CE",Xq="\u29F4",Jq="\u2968",Qq="\u211E",eF="\u015A",tF="\u015B",nF="\u201A",rF="\u2AB8",sF="\u0160",iF="\u0161",oF="\u2ABC",aF="\u227B",cF="\u227D",lF="\u2AB0",uF="\u2AB4",hF="\u015E",dF="\u015F",pF="\u015C",fF="\u015D",mF="\u2ABA",gF="\u2AB6",bF="\u22E9",vF="\u2A13",yF="\u227F",_F="\u0421",wF="\u0441",kF="\u22A1",xF="\u22C5",EF="\u2A66",AF="\u2925",SF="\u2198",CF="\u21D8",TF="\u2198",$F="\xA7",RF=";",DF="\u2929",LF="\u2216",MF="\u2216",OF="\u2736",NF="\u{1D516}",IF="\u{1D530}",PF="\u2322",qF="\u266F",FF="\u0429",BF="\u0449",zF="\u0428",HF="\u0448",UF="\u2193",jF="\u2190",VF="\u2223",GF="\u2225",WF="\u2192",ZF="\u2191",KF="\xAD",YF="\u03A3",XF="\u03C3",JF="\u03C2",QF="\u03C2",eB="\u223C",tB="\u2A6A",nB="\u2243",rB="\u2243",sB="\u2A9E",iB="\u2AA0",oB="\u2A9D",aB="\u2A9F",cB="\u2246",lB="\u2A24",uB="\u2972",hB="\u2190",dB="\u2218",pB="\u2216",fB="\u2A33",mB="\u29E4",gB="\u2223",bB="\u2323",vB="\u2AAA",yB="\u2AAC",_B="\u2AAC\uFE00",wB="\u042C",kB="\u044C",xB="\u233F",EB="\u29C4",AB="/",SB="\u{1D54A}",CB="\u{1D564}",TB="\u2660",$B="\u2660",RB="\u2225",DB="\u2293",LB="\u2293\uFE00",MB="\u2294",OB="\u2294\uFE00",NB="\u221A",IB="\u228F",PB="\u2291",qB="\u228F",FB="\u2291",BB="\u2290",zB="\u2292",HB="\u2290",UB="\u2292",jB="\u25A1",VB="\u25A1",GB="\u2293",WB="\u228F",ZB="\u2291",KB="\u2290",YB="\u2292",XB="\u2294",JB="\u25AA",QB="\u25A1",ez="\u25AA",tz="\u2192",nz="\u{1D4AE}",rz="\u{1D4C8}",sz="\u2216",iz="\u2323",oz="\u22C6",az="\u22C6",cz="\u2606",lz="\u2605",uz="\u03F5",hz="\u03D5",dz="\xAF",pz="\u2282",fz="\u22D0",mz="\u2ABD",gz="\u2AC5",bz="\u2286",vz="\u2AC3",yz="\u2AC1",_z="\u2ACB",wz="\u228A",kz="\u2ABF",xz="\u2979",Ez="\u2282",Az="\u22D0",Sz="\u2286",Cz="\u2AC5",Tz="\u2286",$z="\u228A",Rz="\u2ACB",Dz="\u2AC7",Lz="\u2AD5",Mz="\u2AD3",Oz="\u2AB8",Nz="\u227B",Iz="\u227D",Pz="\u227B",qz="\u2AB0",Fz="\u227D",Bz="\u227F",zz="\u2AB0",Hz="\u2ABA",Uz="\u2AB6",jz="\u22E9",Vz="\u227F",Gz="\u220B",Wz="\u2211",Zz="\u2211",Kz="\u266A",Yz="\xB9",Xz="\xB2",Jz="\xB3",Qz="\u2283",eH="\u22D1",tH="\u2ABE",nH="\u2AD8",rH="\u2AC6",sH="\u2287",iH="\u2AC4",oH="\u2283",aH="\u2287",cH="\u27C9",lH="\u2AD7",uH="\u297B",hH="\u2AC2",dH="\u2ACC",pH="\u228B",fH="\u2AC0",mH="\u2283",gH="\u22D1",bH="\u2287",vH="\u2AC6",yH="\u228B",_H="\u2ACC",wH="\u2AC8",kH="\u2AD4",xH="\u2AD6",EH="\u2926",AH="\u2199",SH="\u21D9",CH="\u2199",TH="\u292A",$H="\xDF",RH="	",DH="\u2316",LH="\u03A4",MH="\u03C4",OH="\u23B4",NH="\u0164",IH="\u0165",PH="\u0162",qH="\u0163",FH="\u0422",BH="\u0442",zH="\u20DB",HH="\u2315",UH="\u{1D517}",jH="\u{1D531}",VH="\u2234",GH="\u2234",WH="\u2234",ZH="\u0398",KH="\u03B8",YH="\u03D1",XH="\u03D1",JH="\u2248",QH="\u223C",e3="\u205F\u200A",t3="\u2009",n3="\u2009",r3="\u2248",s3="\u223C",i3="\xDE",o3="\xFE",a3="\u02DC",c3="\u223C",l3="\u2243",u3="\u2245",h3="\u2248",d3="\u2A31",p3="\u22A0",f3="\xD7",m3="\u2A30",g3="\u222D",b3="\u2928",v3="\u2336",y3="\u2AF1",_3="\u22A4",w3="\u{1D54B}",k3="\u{1D565}",x3="\u2ADA",E3="\u2929",A3="\u2034",S3="\u2122",C3="\u2122",T3="\u25B5",$3="\u25BF",R3="\u25C3",D3="\u22B4",L3="\u225C",M3="\u25B9",O3="\u22B5",N3="\u25EC",I3="\u225C",P3="\u2A3A",q3="\u20DB",F3="\u2A39",B3="\u29CD",z3="\u2A3B",H3="\u23E2",U3="\u{1D4AF}",j3="\u{1D4C9}",V3="\u0426",G3="\u0446",W3="\u040B",Z3="\u045B",K3="\u0166",Y3="\u0167",X3="\u226C",J3="\u219E",Q3="\u21A0",eU="\xDA",tU="\xFA",nU="\u2191",rU="\u219F",sU="\u21D1",iU="\u2949",oU="\u040E",aU="\u045E",cU="\u016C",lU="\u016D",uU="\xDB",hU="\xFB",dU="\u0423",pU="\u0443",fU="\u21C5",mU="\u0170",gU="\u0171",bU="\u296E",vU="\u297E",yU="\u{1D518}",_U="\u{1D532}",wU="\xD9",kU="\xF9",xU="\u2963",EU="\u21BF",AU="\u21BE",SU="\u2580",CU="\u231C",TU="\u231C",$U="\u230F",RU="\u25F8",DU="\u016A",LU="\u016B",MU="\xA8",OU="_",NU="\u23DF",IU="\u23B5",PU="\u23DD",qU="\u22C3",FU="\u228E",BU="\u0172",zU="\u0173",HU="\u{1D54C}",UU="\u{1D566}",jU="\u2912",VU="\u2191",GU="\u2191",WU="\u21D1",ZU="\u21C5",KU="\u2195",YU="\u2195",XU="\u21D5",JU="\u296E",QU="\u21BF",e5="\u21BE",t5="\u228E",n5="\u2196",r5="\u2197",s5="\u03C5",i5="\u03D2",o5="\u03D2",a5="\u03A5",c5="\u03C5",l5="\u21A5",u5="\u22A5",h5="\u21C8",d5="\u231D",p5="\u231D",f5="\u230E",m5="\u016E",g5="\u016F",b5="\u25F9",v5="\u{1D4B0}",y5="\u{1D4CA}",_5="\u22F0",w5="\u0168",k5="\u0169",x5="\u25B5",E5="\u25B4",A5="\u21C8",S5="\xDC",C5="\xFC",T5="\u29A7",$5="\u299C",R5="\u03F5",D5="\u03F0",L5="\u2205",M5="\u03D5",O5="\u03D6",N5="\u221D",I5="\u2195",P5="\u21D5",q5="\u03F1",F5="\u03C2",B5="\u228A\uFE00",z5="\u2ACB\uFE00",H5="\u228B\uFE00",U5="\u2ACC\uFE00",j5="\u03D1",V5="\u22B2",G5="\u22B3",W5="\u2AE8",Z5="\u2AEB",K5="\u2AE9",Y5="\u0412",X5="\u0432",J5="\u22A2",Q5="\u22A8",ej="\u22A9",tj="\u22AB",nj="\u2AE6",rj="\u22BB",sj="\u2228",ij="\u22C1",oj="\u225A",aj="\u22EE",cj="|",lj="\u2016",uj="|",hj="\u2016",dj="\u2223",pj="|",fj="\u2758",mj="\u2240",gj="\u200A",bj="\u{1D519}",vj="\u{1D533}",yj="\u22B2",_j="\u2282\u20D2",wj="\u2283\u20D2",kj="\u{1D54D}",xj="\u{1D567}",Ej="\u221D",Aj="\u22B3",Sj="\u{1D4B1}",Cj="\u{1D4CB}",Tj="\u2ACB\uFE00",$j="\u228A\uFE00",Rj="\u2ACC\uFE00",Dj="\u228B\uFE00",Lj="\u22AA",Mj="\u299A",Oj="\u0174",Nj="\u0175",Ij="\u2A5F",Pj="\u2227",qj="\u22C0",Fj="\u2259",Bj="\u2118",zj="\u{1D51A}",Hj="\u{1D534}",Uj="\u{1D54E}",jj="\u{1D568}",Vj="\u2118",Gj="\u2240",Wj="\u2240",Zj="\u{1D4B2}",Kj="\u{1D4CC}",Yj="\u22C2",Xj="\u25EF",Jj="\u22C3",Qj="\u25BD",e9="\u{1D51B}",t9="\u{1D535}",n9="\u27F7",r9="\u27FA",s9="\u039E",i9="\u03BE",o9="\u27F5",a9="\u27F8",c9="\u27FC",l9="\u22FB",u9="\u2A00",h9="\u{1D54F}",d9="\u{1D569}",p9="\u2A01",f9="\u2A02",m9="\u27F6",g9="\u27F9",b9="\u{1D4B3}",v9="\u{1D4CD}",y9="\u2A06",_9="\u2A04",w9="\u25B3",k9="\u22C1",x9="\u22C0",E9="\xDD",A9="\xFD",S9="\u042F",C9="\u044F",T9="\u0176",$9="\u0177",R9="\u042B",D9="\u044B",L9="\xA5",M9="\u{1D51C}",O9="\u{1D536}",N9="\u0407",I9="\u0457",P9="\u{1D550}",q9="\u{1D56A}",F9="\u{1D4B4}",B9="\u{1D4CE}",z9="\u042E",H9="\u044E",U9="\xFF",j9="\u0178",V9="\u0179",G9="\u017A",W9="\u017D",Z9="\u017E",K9="\u0417",Y9="\u0437",X9="\u017B",J9="\u017C",Q9="\u2128",e4="\u200B",t4="\u0396",n4="\u03B6",r4="\u{1D537}",s4="\u2128",i4="\u0416",o4="\u0436",a4="\u21DD",c4="\u{1D56B}",l4="\u2124",u4="\u{1D4B5}",h4="\u{1D4CF}",d4="\u200D",p4="\u200C";var f4={Aacute:Yh,aacute:Xh,Abreve:Jh,abreve:Qh,ac:ed,acd:td,acE:nd,Acirc:rd,acirc:sd,acute:id,Acy:od,acy:ad,AElig:cd,aelig:ld,af:ud,Afr:hd,afr:dd,Agrave:pd,agrave:fd,alefsym:md,aleph:gd,Alpha:bd,alpha:vd,Amacr:yd,amacr:_d,amalg:wd,amp:kd,AMP:xd,andand:Ed,And:Ad,and:Sd,andd:Cd,andslope:Td,andv:$d,ang:Rd,ange:Dd,angle:Ld,angmsdaa:Md,angmsdab:Od,angmsdac:Nd,angmsdad:Id,angmsdae:Pd,angmsdaf:qd,angmsdag:Fd,angmsdah:Bd,angmsd:zd,angrt:Hd,angrtvb:Ud,angrtvbd:jd,angsph:Vd,angst:Gd,angzarr:Wd,Aogon:Zd,aogon:Kd,Aopf:Yd,aopf:Xd,apacir:Jd,ap:Qd,apE:ep,ape:tp,apid:np,apos:rp,ApplyFunction:sp,approx:ip,approxeq:op,Aring:ap,aring:cp,Ascr:lp,ascr:up,Assign:hp,ast:dp,asymp:pp,asympeq:fp,Atilde:mp,atilde:gp,Auml:bp,auml:vp,awconint:yp,awint:_p,backcong:wp,backepsilon:kp,backprime:xp,backsim:Ep,backsimeq:Ap,Backslash:Sp,Barv:Cp,barvee:Tp,barwed:$p,Barwed:Rp,barwedge:Dp,bbrk:Lp,bbrktbrk:Mp,bcong:Op,Bcy:Np,bcy:Ip,bdquo:Pp,becaus:qp,because:Fp,Because:Bp,bemptyv:zp,bepsi:Hp,bernou:Up,Bernoullis:jp,Beta:Vp,beta:Gp,beth:Wp,between:Zp,Bfr:Kp,bfr:Yp,bigcap:Xp,bigcirc:Jp,bigcup:Qp,bigodot:ef,bigoplus:tf,bigotimes:nf,bigsqcup:rf,bigstar:sf,bigtriangledown:of,bigtriangleup:af,biguplus:cf,bigvee:lf,bigwedge:uf,bkarow:hf,blacklozenge:df,blacksquare:pf,blacktriangle:ff,blacktriangledown:mf,blacktriangleleft:gf,blacktriangleright:bf,blank:vf,blk12:yf,blk14:_f,blk34:wf,block:kf,bne:xf,bnequiv:Ef,bNot:Af,bnot:Sf,Bopf:Cf,bopf:Tf,bot:$f,bottom:Rf,bowtie:Df,boxbox:Lf,boxdl:Mf,boxdL:Of,boxDl:Nf,boxDL:If,boxdr:Pf,boxdR:qf,boxDr:Ff,boxDR:Bf,boxh:zf,boxH:Hf,boxhd:Uf,boxHd:jf,boxhD:Vf,boxHD:Gf,boxhu:Wf,boxHu:Zf,boxhU:Kf,boxHU:Yf,boxminus:Xf,boxplus:Jf,boxtimes:Qf,boxul:em,boxuL:tm,boxUl:nm,boxUL:rm,boxur:sm,boxuR:im,boxUr:om,boxUR:am,boxv:cm,boxV:lm,boxvh:um,boxvH:hm,boxVh:dm,boxVH:pm,boxvl:fm,boxvL:mm,boxVl:gm,boxVL:bm,boxvr:vm,boxvR:ym,boxVr:_m,boxVR:wm,bprime:km,breve:xm,Breve:Em,brvbar:Am,bscr:Sm,Bscr:Cm,bsemi:Tm,bsim:$m,bsime:Rm,bsolb:Dm,bsol:Lm,bsolhsub:Mm,bull:Om,bullet:Nm,bump:Im,bumpE:Pm,bumpe:qm,Bumpeq:Fm,bumpeq:Bm,Cacute:zm,cacute:Hm,capand:Um,capbrcup:jm,capcap:Vm,cap:Gm,Cap:Wm,capcup:Zm,capdot:Km,CapitalDifferentialD:Ym,caps:Xm,caret:Jm,caron:Qm,Cayleys:eg,ccaps:tg,Ccaron:ng,ccaron:rg,Ccedil:sg,ccedil:ig,Ccirc:og,ccirc:ag,Cconint:cg,ccups:lg,ccupssm:ug,Cdot:hg,cdot:dg,cedil:pg,Cedilla:fg,cemptyv:mg,cent:gg,centerdot:bg,CenterDot:vg,cfr:yg,Cfr:_g,CHcy:wg,chcy:kg,check:xg,checkmark:Eg,Chi:Ag,chi:Sg,circ:Cg,circeq:Tg,circlearrowleft:$g,circlearrowright:Rg,circledast:Dg,circledcirc:Lg,circleddash:Mg,CircleDot:Og,circledR:Ng,circledS:Ig,CircleMinus:Pg,CirclePlus:qg,CircleTimes:Fg,cir:Bg,cirE:zg,cire:Hg,cirfnint:Ug,cirmid:jg,cirscir:Vg,ClockwiseContourIntegral:Gg,CloseCurlyDoubleQuote:Wg,CloseCurlyQuote:Zg,clubs:Kg,clubsuit:Yg,colon:Xg,Colon:Jg,Colone:Qg,colone:eb,coloneq:tb,comma:nb,commat:rb,comp:sb,compfn:ib,complement:ob,complexes:ab,cong:cb,congdot:lb,Congruent:ub,conint:hb,Conint:db,ContourIntegral:pb,copf:fb,Copf:mb,coprod:gb,Coproduct:bb,copy:vb,COPY:yb,copysr:_b,CounterClockwiseContourIntegral:wb,crarr:kb,cross:xb,Cross:Eb,Cscr:Ab,cscr:Sb,csub:Cb,csube:Tb,csup:$b,csupe:Rb,ctdot:Db,cudarrl:Lb,cudarrr:Mb,cuepr:Ob,cuesc:Nb,cularr:Ib,cularrp:Pb,cupbrcap:qb,cupcap:Fb,CupCap:Bb,cup:zb,Cup:Hb,cupcup:Ub,cupdot:jb,cupor:Vb,cups:Gb,curarr:Wb,curarrm:Zb,curlyeqprec:Kb,curlyeqsucc:Yb,curlyvee:Xb,curlywedge:Jb,curren:Qb,curvearrowleft:ev,curvearrowright:tv,cuvee:nv,cuwed:rv,cwconint:sv,cwint:iv,cylcty:ov,dagger:av,Dagger:cv,daleth:lv,darr:uv,Darr:hv,dArr:dv,dash:pv,Dashv:fv,dashv:mv,dbkarow:gv,dblac:bv,Dcaron:vv,dcaron:yv,Dcy:_v,dcy:wv,ddagger:kv,ddarr:xv,DD:Ev,dd:Av,DDotrahd:Sv,ddotseq:Cv,deg:Tv,Del:$v,Delta:Rv,delta:Dv,demptyv:Lv,dfisht:Mv,Dfr:Ov,dfr:Nv,dHar:Iv,dharl:Pv,dharr:qv,DiacriticalAcute:Fv,DiacriticalDot:Bv,DiacriticalDoubleAcute:zv,DiacriticalGrave:Hv,DiacriticalTilde:Uv,diam:jv,diamond:Vv,Diamond:Gv,diamondsuit:Wv,diams:Zv,die:Kv,DifferentialD:Yv,digamma:Xv,disin:Jv,div:Qv,divide:e0,divideontimes:t0,divonx:n0,DJcy:r0,djcy:s0,dlcorn:i0,dlcrop:o0,dollar:a0,Dopf:c0,dopf:l0,Dot:u0,dot:h0,DotDot:d0,doteq:p0,doteqdot:f0,DotEqual:m0,dotminus:g0,dotplus:b0,dotsquare:v0,doublebarwedge:y0,DoubleContourIntegral:_0,DoubleDot:w0,DoubleDownArrow:k0,DoubleLeftArrow:x0,DoubleLeftRightArrow:E0,DoubleLeftTee:A0,DoubleLongLeftArrow:S0,DoubleLongLeftRightArrow:C0,DoubleLongRightArrow:T0,DoubleRightArrow:$0,DoubleRightTee:R0,DoubleUpArrow:D0,DoubleUpDownArrow:L0,DoubleVerticalBar:M0,DownArrowBar:O0,downarrow:N0,DownArrow:I0,Downarrow:P0,DownArrowUpArrow:q0,DownBreve:F0,downdownarrows:B0,downharpoonleft:z0,downharpoonright:H0,DownLeftRightVector:U0,DownLeftTeeVector:j0,DownLeftVectorBar:V0,DownLeftVector:G0,DownRightTeeVector:W0,DownRightVectorBar:Z0,DownRightVector:K0,DownTeeArrow:Y0,DownTee:X0,drbkarow:J0,drcorn:Q0,drcrop:ey,Dscr:ty,dscr:ny,DScy:ry,dscy:sy,dsol:iy,Dstrok:oy,dstrok:ay,dtdot:cy,dtri:ly,dtrif:uy,duarr:hy,duhar:dy,dwangle:py,DZcy:fy,dzcy:my,dzigrarr:gy,Eacute:by,eacute:vy,easter:yy,Ecaron:_y,ecaron:wy,Ecirc:ky,ecirc:xy,ecir:Ey,ecolon:Ay,Ecy:Sy,ecy:Cy,eDDot:Ty,Edot:$y,edot:Ry,eDot:Dy,ee:Ly,efDot:My,Efr:Oy,efr:Ny,eg:Iy,Egrave:Py,egrave:qy,egs:Fy,egsdot:By,el:zy,Element:Hy,elinters:Uy,ell:jy,els:Vy,elsdot:Gy,Emacr:Wy,emacr:Zy,empty:Ky,emptyset:Yy,EmptySmallSquare:Xy,emptyv:Jy,EmptyVerySmallSquare:Qy,emsp13:e_,emsp14:t_,emsp:n_,ENG:r_,eng:s_,ensp:i_,Eogon:o_,eogon:a_,Eopf:c_,eopf:l_,epar:u_,eparsl:h_,eplus:d_,epsi:p_,Epsilon:f_,epsilon:m_,epsiv:g_,eqcirc:b_,eqcolon:v_,eqsim:y_,eqslantgtr:__,eqslantless:w_,Equal:k_,equals:x_,EqualTilde:E_,equest:A_,Equilibrium:S_,equiv:C_,equivDD:T_,eqvparsl:$_,erarr:R_,erDot:D_,escr:L_,Escr:M_,esdot:O_,Esim:N_,esim:I_,Eta:P_,eta:q_,ETH:F_,eth:B_,Euml:z_,euml:H_,euro:U_,excl:j_,exist:V_,Exists:G_,expectation:W_,exponentiale:Z_,ExponentialE:K_,fallingdotseq:Y_,Fcy:X_,fcy:J_,female:Q_,ffilig:ew,fflig:tw,ffllig:nw,Ffr:rw,ffr:sw,filig:iw,FilledSmallSquare:ow,FilledVerySmallSquare:aw,fjlig:cw,flat:lw,fllig:uw,fltns:hw,fnof:dw,Fopf:pw,fopf:fw,forall:mw,ForAll:gw,fork:bw,forkv:vw,Fouriertrf:yw,fpartint:_w,frac12:ww,frac13:kw,frac14:xw,frac15:Ew,frac16:Aw,frac18:Sw,frac23:Cw,frac25:Tw,frac34:$w,frac35:Rw,frac38:Dw,frac45:Lw,frac56:Mw,frac58:Ow,frac78:Nw,frasl:Iw,frown:Pw,fscr:qw,Fscr:Fw,gacute:Bw,Gamma:zw,gamma:Hw,Gammad:Uw,gammad:jw,gap:Vw,Gbreve:Gw,gbreve:Ww,Gcedil:Zw,Gcirc:Kw,gcirc:Yw,Gcy:Xw,gcy:Jw,Gdot:Qw,gdot:ek,ge:tk,gE:nk,gEl:rk,gel:sk,geq:ik,geqq:ok,geqslant:ak,gescc:ck,ges:lk,gesdot:uk,gesdoto:hk,gesdotol:dk,gesl:pk,gesles:fk,Gfr:mk,gfr:gk,gg:bk,Gg:vk,ggg:yk,gimel:_k,GJcy:wk,gjcy:kk,gla:xk,gl:Ek,glE:Ak,glj:Sk,gnap:Ck,gnapprox:Tk,gne:$k,gnE:Rk,gneq:Dk,gneqq:Lk,gnsim:Mk,Gopf:Ok,gopf:Nk,grave:Ik,GreaterEqual:Pk,GreaterEqualLess:qk,GreaterFullEqual:Fk,GreaterGreater:Bk,GreaterLess:zk,GreaterSlantEqual:Hk,GreaterTilde:Uk,Gscr:jk,gscr:Vk,gsim:Gk,gsime:Wk,gsiml:Zk,gtcc:Kk,gtcir:Yk,gt:Xk,GT:Jk,Gt:Qk,gtdot:ex,gtlPar:tx,gtquest:nx,gtrapprox:rx,gtrarr:sx,gtrdot:ix,gtreqless:ox,gtreqqless:ax,gtrless:cx,gtrsim:lx,gvertneqq:ux,gvnE:hx,Hacek:dx,hairsp:px,half:fx,hamilt:mx,HARDcy:gx,hardcy:bx,harrcir:vx,harr:yx,hArr:_x,harrw:wx,Hat:kx,hbar:xx,Hcirc:Ex,hcirc:Ax,hearts:Sx,heartsuit:Cx,hellip:Tx,hercon:$x,hfr:Rx,Hfr:Dx,HilbertSpace:Lx,hksearow:Mx,hkswarow:Ox,hoarr:Nx,homtht:Ix,hookleftarrow:Px,hookrightarrow:qx,hopf:Fx,Hopf:Bx,horbar:zx,HorizontalLine:Hx,hscr:Ux,Hscr:jx,hslash:Vx,Hstrok:Gx,hstrok:Wx,HumpDownHump:Zx,HumpEqual:Kx,hybull:Yx,hyphen:Xx,Iacute:Jx,iacute:Qx,ic:eE,Icirc:tE,icirc:nE,Icy:rE,icy:sE,Idot:iE,IEcy:oE,iecy:aE,iexcl:cE,iff:lE,ifr:uE,Ifr:hE,Igrave:dE,igrave:pE,ii:fE,iiiint:mE,iiint:gE,iinfin:bE,iiota:vE,IJlig:yE,ijlig:_E,Imacr:wE,imacr:kE,image:xE,ImaginaryI:EE,imagline:AE,imagpart:SE,imath:CE,Im:TE,imof:$E,imped:RE,Implies:DE,incare:LE,in:"\u2208",infin:ME,infintie:OE,inodot:NE,intcal:IE,int:PE,Int:qE,integers:FE,Integral:BE,intercal:zE,Intersection:HE,intlarhk:UE,intprod:jE,InvisibleComma:VE,InvisibleTimes:GE,IOcy:WE,iocy:ZE,Iogon:KE,iogon:YE,Iopf:XE,iopf:JE,Iota:QE,iota:eA,iprod:tA,iquest:nA,iscr:rA,Iscr:sA,isin:iA,isindot:oA,isinE:aA,isins:cA,isinsv:lA,isinv:uA,it:hA,Itilde:dA,itilde:pA,Iukcy:fA,iukcy:mA,Iuml:gA,iuml:bA,Jcirc:vA,jcirc:yA,Jcy:_A,jcy:wA,Jfr:kA,jfr:xA,jmath:EA,Jopf:AA,jopf:SA,Jscr:CA,jscr:TA,Jsercy:$A,jsercy:RA,Jukcy:DA,jukcy:LA,Kappa:MA,kappa:OA,kappav:NA,Kcedil:IA,kcedil:PA,Kcy:qA,kcy:FA,Kfr:BA,kfr:zA,kgreen:HA,KHcy:UA,khcy:jA,KJcy:VA,kjcy:GA,Kopf:WA,kopf:ZA,Kscr:KA,kscr:YA,lAarr:XA,Lacute:JA,lacute:QA,laemptyv:e1,lagran:t1,Lambda:n1,lambda:r1,lang:s1,Lang:i1,langd:o1,langle:a1,lap:c1,Laplacetrf:l1,laquo:u1,larrb:h1,larrbfs:d1,larr:p1,Larr:f1,lArr:m1,larrfs:g1,larrhk:b1,larrlp:v1,larrpl:y1,larrsim:_1,larrtl:w1,latail:k1,lAtail:x1,lat:E1,late:A1,lates:S1,lbarr:C1,lBarr:T1,lbbrk:$1,lbrace:R1,lbrack:D1,lbrke:L1,lbrksld:M1,lbrkslu:O1,Lcaron:N1,lcaron:I1,Lcedil:P1,lcedil:q1,lceil:F1,lcub:B1,Lcy:z1,lcy:H1,ldca:U1,ldquo:j1,ldquor:V1,ldrdhar:G1,ldrushar:W1,ldsh:Z1,le:K1,lE:Y1,LeftAngleBracket:X1,LeftArrowBar:J1,leftarrow:Q1,LeftArrow:eS,Leftarrow:tS,LeftArrowRightArrow:nS,leftarrowtail:rS,LeftCeiling:sS,LeftDoubleBracket:iS,LeftDownTeeVector:oS,LeftDownVectorBar:aS,LeftDownVector:cS,LeftFloor:lS,leftharpoondown:uS,leftharpoonup:hS,leftleftarrows:dS,leftrightarrow:pS,LeftRightArrow:fS,Leftrightarrow:mS,leftrightarrows:gS,leftrightharpoons:bS,leftrightsquigarrow:vS,LeftRightVector:yS,LeftTeeArrow:_S,LeftTee:wS,LeftTeeVector:kS,leftthreetimes:xS,LeftTriangleBar:ES,LeftTriangle:AS,LeftTriangleEqual:SS,LeftUpDownVector:CS,LeftUpTeeVector:TS,LeftUpVectorBar:$S,LeftUpVector:RS,LeftVectorBar:DS,LeftVector:LS,lEg:MS,leg:OS,leq:NS,leqq:IS,leqslant:PS,lescc:qS,les:FS,lesdot:BS,lesdoto:zS,lesdotor:HS,lesg:US,lesges:jS,lessapprox:VS,lessdot:GS,lesseqgtr:WS,lesseqqgtr:ZS,LessEqualGreater:KS,LessFullEqual:YS,LessGreater:XS,lessgtr:JS,LessLess:QS,lesssim:eC,LessSlantEqual:tC,LessTilde:nC,lfisht:rC,lfloor:sC,Lfr:iC,lfr:oC,lg:aC,lgE:cC,lHar:lC,lhard:uC,lharu:hC,lharul:dC,lhblk:pC,LJcy:fC,ljcy:mC,llarr:gC,ll:bC,Ll:vC,llcorner:yC,Lleftarrow:_C,llhard:wC,lltri:kC,Lmidot:xC,lmidot:EC,lmoustache:AC,lmoust:SC,lnap:CC,lnapprox:TC,lne:$C,lnE:RC,lneq:DC,lneqq:LC,lnsim:MC,loang:OC,loarr:NC,lobrk:IC,longleftarrow:PC,LongLeftArrow:qC,Longleftarrow:FC,longleftrightarrow:BC,LongLeftRightArrow:zC,Longleftrightarrow:HC,longmapsto:UC,longrightarrow:jC,LongRightArrow:VC,Longrightarrow:GC,looparrowleft:WC,looparrowright:ZC,lopar:KC,Lopf:YC,lopf:XC,loplus:JC,lotimes:QC,lowast:eT,lowbar:tT,LowerLeftArrow:nT,LowerRightArrow:rT,loz:sT,lozenge:iT,lozf:oT,lpar:aT,lparlt:cT,lrarr:lT,lrcorner:uT,lrhar:hT,lrhard:dT,lrm:pT,lrtri:fT,lsaquo:mT,lscr:gT,Lscr:bT,lsh:vT,Lsh:yT,lsim:_T,lsime:wT,lsimg:kT,lsqb:xT,lsquo:ET,lsquor:AT,Lstrok:ST,lstrok:CT,ltcc:TT,ltcir:$T,lt:RT,LT:DT,Lt:LT,ltdot:MT,lthree:OT,ltimes:NT,ltlarr:IT,ltquest:PT,ltri:qT,ltrie:FT,ltrif:BT,ltrPar:zT,lurdshar:HT,luruhar:UT,lvertneqq:jT,lvnE:VT,macr:GT,male:WT,malt:ZT,maltese:KT,Map:"\u2905",map:YT,mapsto:XT,mapstodown:JT,mapstoleft:QT,mapstoup:e$,marker:t$,mcomma:n$,Mcy:r$,mcy:s$,mdash:i$,mDDot:o$,measuredangle:a$,MediumSpace:c$,Mellintrf:l$,Mfr:u$,mfr:h$,mho:d$,micro:p$,midast:f$,midcir:m$,mid:g$,middot:b$,minusb:v$,minus:y$,minusd:_$,minusdu:w$,MinusPlus:k$,mlcp:x$,mldr:E$,mnplus:A$,models:S$,Mopf:C$,mopf:T$,mp:$$,mscr:R$,Mscr:D$,mstpos:L$,Mu:M$,mu:O$,multimap:N$,mumap:I$,nabla:P$,Nacute:q$,nacute:F$,nang:B$,nap:z$,napE:H$,napid:U$,napos:j$,napprox:V$,natural:G$,naturals:W$,natur:Z$,nbsp:K$,nbump:Y$,nbumpe:X$,ncap:J$,Ncaron:Q$,ncaron:eR,Ncedil:tR,ncedil:nR,ncong:rR,ncongdot:sR,ncup:iR,Ncy:oR,ncy:aR,ndash:cR,nearhk:lR,nearr:uR,neArr:hR,nearrow:dR,ne:pR,nedot:fR,NegativeMediumSpace:mR,NegativeThickSpace:gR,NegativeThinSpace:bR,NegativeVeryThinSpace:vR,nequiv:yR,nesear:_R,nesim:wR,NestedGreaterGreater:kR,NestedLessLess:xR,NewLine:ER,nexist:AR,nexists:SR,Nfr:CR,nfr:TR,ngE:$R,nge:RR,ngeq:DR,ngeqq:LR,ngeqslant:MR,nges:OR,nGg:NR,ngsim:IR,nGt:PR,ngt:qR,ngtr:FR,nGtv:BR,nharr:zR,nhArr:HR,nhpar:UR,ni:jR,nis:VR,nisd:GR,niv:WR,NJcy:ZR,njcy:KR,nlarr:YR,nlArr:XR,nldr:JR,nlE:QR,nle:eD,nleftarrow:tD,nLeftarrow:nD,nleftrightarrow:rD,nLeftrightarrow:sD,nleq:iD,nleqq:oD,nleqslant:aD,nles:cD,nless:lD,nLl:uD,nlsim:hD,nLt:dD,nlt:pD,nltri:fD,nltrie:mD,nLtv:gD,nmid:bD,NoBreak:vD,NonBreakingSpace:yD,nopf:_D,Nopf:wD,Not:kD,not:xD,NotCongruent:ED,NotCupCap:AD,NotDoubleVerticalBar:SD,NotElement:CD,NotEqual:TD,NotEqualTilde:$D,NotExists:RD,NotGreater:DD,NotGreaterEqual:LD,NotGreaterFullEqual:MD,NotGreaterGreater:OD,NotGreaterLess:ND,NotGreaterSlantEqual:ID,NotGreaterTilde:PD,NotHumpDownHump:qD,NotHumpEqual:FD,notin:BD,notindot:zD,notinE:HD,notinva:UD,notinvb:jD,notinvc:VD,NotLeftTriangleBar:GD,NotLeftTriangle:WD,NotLeftTriangleEqual:ZD,NotLess:KD,NotLessEqual:YD,NotLessGreater:XD,NotLessLess:JD,NotLessSlantEqual:QD,NotLessTilde:eL,NotNestedGreaterGreater:tL,NotNestedLessLess:nL,notni:rL,notniva:sL,notnivb:iL,notnivc:oL,NotPrecedes:aL,NotPrecedesEqual:cL,NotPrecedesSlantEqual:lL,NotReverseElement:uL,NotRightTriangleBar:hL,NotRightTriangle:dL,NotRightTriangleEqual:pL,NotSquareSubset:fL,NotSquareSubsetEqual:mL,NotSquareSuperset:gL,NotSquareSupersetEqual:bL,NotSubset:vL,NotSubsetEqual:yL,NotSucceeds:_L,NotSucceedsEqual:wL,NotSucceedsSlantEqual:kL,NotSucceedsTilde:xL,NotSuperset:EL,NotSupersetEqual:AL,NotTilde:SL,NotTildeEqual:CL,NotTildeFullEqual:TL,NotTildeTilde:$L,NotVerticalBar:RL,nparallel:DL,npar:LL,nparsl:ML,npart:OL,npolint:NL,npr:IL,nprcue:PL,nprec:qL,npreceq:FL,npre:BL,nrarrc:zL,nrarr:HL,nrArr:UL,nrarrw:jL,nrightarrow:VL,nRightarrow:GL,nrtri:WL,nrtrie:ZL,nsc:KL,nsccue:YL,nsce:XL,Nscr:JL,nscr:QL,nshortmid:eM,nshortparallel:tM,nsim:nM,nsime:rM,nsimeq:sM,nsmid:iM,nspar:oM,nsqsube:aM,nsqsupe:cM,nsub:lM,nsubE:uM,nsube:hM,nsubset:dM,nsubseteq:pM,nsubseteqq:fM,nsucc:mM,nsucceq:gM,nsup:bM,nsupE:vM,nsupe:yM,nsupset:_M,nsupseteq:wM,nsupseteqq:kM,ntgl:xM,Ntilde:EM,ntilde:AM,ntlg:SM,ntriangleleft:CM,ntrianglelefteq:TM,ntriangleright:$M,ntrianglerighteq:RM,Nu:DM,nu:LM,num:MM,numero:OM,numsp:NM,nvap:IM,nvdash:PM,nvDash:qM,nVdash:FM,nVDash:BM,nvge:zM,nvgt:HM,nvHarr:UM,nvinfin:jM,nvlArr:VM,nvle:GM,nvlt:WM,nvltrie:ZM,nvrArr:KM,nvrtrie:YM,nvsim:XM,nwarhk:JM,nwarr:QM,nwArr:eO,nwarrow:tO,nwnear:nO,Oacute:rO,oacute:sO,oast:iO,Ocirc:oO,ocirc:aO,ocir:cO,Ocy:lO,ocy:uO,odash:hO,Odblac:dO,odblac:pO,odiv:fO,odot:mO,odsold:gO,OElig:bO,oelig:vO,ofcir:yO,Ofr:_O,ofr:wO,ogon:kO,Ograve:xO,ograve:EO,ogt:AO,ohbar:SO,ohm:CO,oint:TO,olarr:$O,olcir:RO,olcross:DO,oline:LO,olt:MO,Omacr:OO,omacr:NO,Omega:IO,omega:PO,Omicron:qO,omicron:FO,omid:BO,ominus:zO,Oopf:HO,oopf:UO,opar:jO,OpenCurlyDoubleQuote:VO,OpenCurlyQuote:GO,operp:WO,oplus:ZO,orarr:KO,Or:YO,or:XO,ord:JO,order:QO,orderof:eN,ordf:tN,ordm:nN,origof:rN,oror:sN,orslope:iN,orv:oN,oS:aN,Oscr:cN,oscr:lN,Oslash:uN,oslash:hN,osol:dN,Otilde:pN,otilde:fN,otimesas:mN,Otimes:gN,otimes:bN,Ouml:vN,ouml:yN,ovbar:_N,OverBar:wN,OverBrace:kN,OverBracket:xN,OverParenthesis:EN,para:AN,parallel:SN,par:CN,parsim:TN,parsl:$N,part:RN,PartialD:DN,Pcy:LN,pcy:MN,percnt:ON,period:NN,permil:IN,perp:PN,pertenk:qN,Pfr:FN,pfr:BN,Phi:zN,phi:HN,phiv:UN,phmmat:jN,phone:VN,Pi:GN,pi:WN,pitchfork:ZN,piv:KN,planck:YN,planckh:XN,plankv:JN,plusacir:QN,plusb:eI,pluscir:tI,plus:nI,plusdo:rI,plusdu:sI,pluse:iI,PlusMinus:oI,plusmn:aI,plussim:cI,plustwo:lI,pm:uI,Poincareplane:hI,pointint:dI,popf:pI,Popf:fI,pound:mI,prap:gI,Pr:bI,pr:vI,prcue:yI,precapprox:_I,prec:wI,preccurlyeq:kI,Precedes:xI,PrecedesEqual:EI,PrecedesSlantEqual:AI,PrecedesTilde:SI,preceq:CI,precnapprox:TI,precneqq:$I,precnsim:RI,pre:DI,prE:LI,precsim:MI,prime:OI,Prime:NI,primes:II,prnap:PI,prnE:qI,prnsim:FI,prod:BI,Product:zI,profalar:HI,profline:UI,profsurf:jI,prop:VI,Proportional:GI,Proportion:WI,propto:ZI,prsim:KI,prurel:YI,Pscr:XI,pscr:JI,Psi:QI,psi:eP,puncsp:tP,Qfr:nP,qfr:rP,qint:sP,qopf:iP,Qopf:oP,qprime:aP,Qscr:cP,qscr:lP,quaternions:uP,quatint:hP,quest:dP,questeq:pP,quot:fP,QUOT:mP,rAarr:gP,race:bP,Racute:vP,racute:yP,radic:_P,raemptyv:wP,rang:kP,Rang:xP,rangd:EP,range:AP,rangle:SP,raquo:CP,rarrap:TP,rarrb:$P,rarrbfs:RP,rarrc:DP,rarr:LP,Rarr:MP,rArr:OP,rarrfs:NP,rarrhk:IP,rarrlp:PP,rarrpl:qP,rarrsim:FP,Rarrtl:BP,rarrtl:zP,rarrw:HP,ratail:UP,rAtail:jP,ratio:VP,rationals:GP,rbarr:WP,rBarr:ZP,RBarr:KP,rbbrk:YP,rbrace:XP,rbrack:JP,rbrke:QP,rbrksld:e2,rbrkslu:t2,Rcaron:n2,rcaron:r2,Rcedil:s2,rcedil:i2,rceil:o2,rcub:a2,Rcy:c2,rcy:l2,rdca:u2,rdldhar:h2,rdquo:d2,rdquor:p2,rdsh:f2,real:m2,realine:g2,realpart:b2,reals:v2,Re:y2,rect:_2,reg:w2,REG:k2,ReverseElement:x2,ReverseEquilibrium:E2,ReverseUpEquilibrium:A2,rfisht:S2,rfloor:C2,rfr:T2,Rfr:$2,rHar:R2,rhard:D2,rharu:L2,rharul:M2,Rho:O2,rho:N2,rhov:I2,RightAngleBracket:P2,RightArrowBar:q2,rightarrow:F2,RightArrow:B2,Rightarrow:z2,RightArrowLeftArrow:H2,rightarrowtail:U2,RightCeiling:j2,RightDoubleBracket:V2,RightDownTeeVector:G2,RightDownVectorBar:W2,RightDownVector:Z2,RightFloor:K2,rightharpoondown:Y2,rightharpoonup:X2,rightleftarrows:J2,rightleftharpoons:Q2,rightrightarrows:eq,rightsquigarrow:tq,RightTeeArrow:nq,RightTee:rq,RightTeeVector:sq,rightthreetimes:iq,RightTriangleBar:oq,RightTriangle:aq,RightTriangleEqual:cq,RightUpDownVector:lq,RightUpTeeVector:uq,RightUpVectorBar:hq,RightUpVector:dq,RightVectorBar:pq,RightVector:fq,ring:mq,risingdotseq:gq,rlarr:bq,rlhar:vq,rlm:yq,rmoustache:_q,rmoust:wq,rnmid:kq,roang:xq,roarr:Eq,robrk:Aq,ropar:Sq,ropf:Cq,Ropf:Tq,roplus:$q,rotimes:Rq,RoundImplies:Dq,rpar:Lq,rpargt:Mq,rppolint:Oq,rrarr:Nq,Rrightarrow:Iq,rsaquo:Pq,rscr:qq,Rscr:Fq,rsh:Bq,Rsh:zq,rsqb:Hq,rsquo:Uq,rsquor:jq,rthree:Vq,rtimes:Gq,rtri:Wq,rtrie:Zq,rtrif:Kq,rtriltri:Yq,RuleDelayed:Xq,ruluhar:Jq,rx:Qq,Sacute:eF,sacute:tF,sbquo:nF,scap:rF,Scaron:sF,scaron:iF,Sc:oF,sc:aF,sccue:cF,sce:lF,scE:uF,Scedil:hF,scedil:dF,Scirc:pF,scirc:fF,scnap:mF,scnE:gF,scnsim:bF,scpolint:vF,scsim:yF,Scy:_F,scy:wF,sdotb:kF,sdot:xF,sdote:EF,searhk:AF,searr:SF,seArr:CF,searrow:TF,sect:$F,semi:RF,seswar:DF,setminus:LF,setmn:MF,sext:OF,Sfr:NF,sfr:IF,sfrown:PF,sharp:qF,SHCHcy:FF,shchcy:BF,SHcy:zF,shcy:HF,ShortDownArrow:UF,ShortLeftArrow:jF,shortmid:VF,shortparallel:GF,ShortRightArrow:WF,ShortUpArrow:ZF,shy:KF,Sigma:YF,sigma:XF,sigmaf:JF,sigmav:QF,sim:eB,simdot:tB,sime:nB,simeq:rB,simg:sB,simgE:iB,siml:oB,simlE:aB,simne:cB,simplus:lB,simrarr:uB,slarr:hB,SmallCircle:dB,smallsetminus:pB,smashp:fB,smeparsl:mB,smid:gB,smile:bB,smt:vB,smte:yB,smtes:_B,SOFTcy:wB,softcy:kB,solbar:xB,solb:EB,sol:AB,Sopf:SB,sopf:CB,spades:TB,spadesuit:$B,spar:RB,sqcap:DB,sqcaps:LB,sqcup:MB,sqcups:OB,Sqrt:NB,sqsub:IB,sqsube:PB,sqsubset:qB,sqsubseteq:FB,sqsup:BB,sqsupe:zB,sqsupset:HB,sqsupseteq:UB,square:jB,Square:VB,SquareIntersection:GB,SquareSubset:WB,SquareSubsetEqual:ZB,SquareSuperset:KB,SquareSupersetEqual:YB,SquareUnion:XB,squarf:JB,squ:QB,squf:ez,srarr:tz,Sscr:nz,sscr:rz,ssetmn:sz,ssmile:iz,sstarf:oz,Star:az,star:cz,starf:lz,straightepsilon:uz,straightphi:hz,strns:dz,sub:pz,Sub:fz,subdot:mz,subE:gz,sube:bz,subedot:vz,submult:yz,subnE:_z,subne:wz,subplus:kz,subrarr:xz,subset:Ez,Subset:Az,subseteq:Sz,subseteqq:Cz,SubsetEqual:Tz,subsetneq:$z,subsetneqq:Rz,subsim:Dz,subsub:Lz,subsup:Mz,succapprox:Oz,succ:Nz,succcurlyeq:Iz,Succeeds:Pz,SucceedsEqual:qz,SucceedsSlantEqual:Fz,SucceedsTilde:Bz,succeq:zz,succnapprox:Hz,succneqq:Uz,succnsim:jz,succsim:Vz,SuchThat:Gz,sum:Wz,Sum:Zz,sung:Kz,sup1:Yz,sup2:Xz,sup3:Jz,sup:Qz,Sup:eH,supdot:tH,supdsub:nH,supE:rH,supe:sH,supedot:iH,Superset:oH,SupersetEqual:aH,suphsol:cH,suphsub:lH,suplarr:uH,supmult:hH,supnE:dH,supne:pH,supplus:fH,supset:mH,Supset:gH,supseteq:bH,supseteqq:vH,supsetneq:yH,supsetneqq:_H,supsim:wH,supsub:kH,supsup:xH,swarhk:EH,swarr:AH,swArr:SH,swarrow:CH,swnwar:TH,szlig:$H,Tab:RH,target:DH,Tau:LH,tau:MH,tbrk:OH,Tcaron:NH,tcaron:IH,Tcedil:PH,tcedil:qH,Tcy:FH,tcy:BH,tdot:zH,telrec:HH,Tfr:UH,tfr:jH,there4:VH,therefore:GH,Therefore:WH,Theta:ZH,theta:KH,thetasym:YH,thetav:XH,thickapprox:JH,thicksim:QH,ThickSpace:e3,ThinSpace:t3,thinsp:n3,thkap:r3,thksim:s3,THORN:i3,thorn:o3,tilde:a3,Tilde:c3,TildeEqual:l3,TildeFullEqual:u3,TildeTilde:h3,timesbar:d3,timesb:p3,times:f3,timesd:m3,tint:g3,toea:b3,topbot:v3,topcir:y3,top:_3,Topf:w3,topf:k3,topfork:x3,tosa:E3,tprime:A3,trade:S3,TRADE:C3,triangle:T3,triangledown:$3,triangleleft:R3,trianglelefteq:D3,triangleq:L3,triangleright:M3,trianglerighteq:O3,tridot:N3,trie:I3,triminus:P3,TripleDot:q3,triplus:F3,trisb:B3,tritime:z3,trpezium:H3,Tscr:U3,tscr:j3,TScy:V3,tscy:G3,TSHcy:W3,tshcy:Z3,Tstrok:K3,tstrok:Y3,twixt:X3,twoheadleftarrow:J3,twoheadrightarrow:Q3,Uacute:eU,uacute:tU,uarr:nU,Uarr:rU,uArr:sU,Uarrocir:iU,Ubrcy:oU,ubrcy:aU,Ubreve:cU,ubreve:lU,Ucirc:uU,ucirc:hU,Ucy:dU,ucy:pU,udarr:fU,Udblac:mU,udblac:gU,udhar:bU,ufisht:vU,Ufr:yU,ufr:_U,Ugrave:wU,ugrave:kU,uHar:xU,uharl:EU,uharr:AU,uhblk:SU,ulcorn:CU,ulcorner:TU,ulcrop:$U,ultri:RU,Umacr:DU,umacr:LU,uml:MU,UnderBar:OU,UnderBrace:NU,UnderBracket:IU,UnderParenthesis:PU,Union:qU,UnionPlus:FU,Uogon:BU,uogon:zU,Uopf:HU,uopf:UU,UpArrowBar:jU,uparrow:VU,UpArrow:GU,Uparrow:WU,UpArrowDownArrow:ZU,updownarrow:KU,UpDownArrow:YU,Updownarrow:XU,UpEquilibrium:JU,upharpoonleft:QU,upharpoonright:e5,uplus:t5,UpperLeftArrow:n5,UpperRightArrow:r5,upsi:s5,Upsi:i5,upsih:o5,Upsilon:a5,upsilon:c5,UpTeeArrow:l5,UpTee:u5,upuparrows:h5,urcorn:d5,urcorner:p5,urcrop:f5,Uring:m5,uring:g5,urtri:b5,Uscr:v5,uscr:y5,utdot:_5,Utilde:w5,utilde:k5,utri:x5,utrif:E5,uuarr:A5,Uuml:S5,uuml:C5,uwangle:T5,vangrt:$5,varepsilon:R5,varkappa:D5,varnothing:L5,varphi:M5,varpi:O5,varpropto:N5,varr:I5,vArr:P5,varrho:q5,varsigma:F5,varsubsetneq:B5,varsubsetneqq:z5,varsupsetneq:H5,varsupsetneqq:U5,vartheta:j5,vartriangleleft:V5,vartriangleright:G5,vBar:W5,Vbar:Z5,vBarv:K5,Vcy:Y5,vcy:X5,vdash:J5,vDash:Q5,Vdash:ej,VDash:tj,Vdashl:nj,veebar:rj,vee:sj,Vee:ij,veeeq:oj,vellip:aj,verbar:cj,Verbar:lj,vert:uj,Vert:hj,VerticalBar:dj,VerticalLine:pj,VerticalSeparator:fj,VerticalTilde:mj,VeryThinSpace:gj,Vfr:bj,vfr:vj,vltri:yj,vnsub:_j,vnsup:wj,Vopf:kj,vopf:xj,vprop:Ej,vrtri:Aj,Vscr:Sj,vscr:Cj,vsubnE:Tj,vsubne:$j,vsupnE:Rj,vsupne:Dj,Vvdash:Lj,vzigzag:Mj,Wcirc:Oj,wcirc:Nj,wedbar:Ij,wedge:Pj,Wedge:qj,wedgeq:Fj,weierp:Bj,Wfr:zj,wfr:Hj,Wopf:Uj,wopf:jj,wp:Vj,wr:Gj,wreath:Wj,Wscr:Zj,wscr:Kj,xcap:Yj,xcirc:Xj,xcup:Jj,xdtri:Qj,Xfr:e9,xfr:t9,xharr:n9,xhArr:r9,Xi:s9,xi:i9,xlarr:o9,xlArr:a9,xmap:c9,xnis:l9,xodot:u9,Xopf:h9,xopf:d9,xoplus:p9,xotime:f9,xrarr:m9,xrArr:g9,Xscr:b9,xscr:v9,xsqcup:y9,xuplus:_9,xutri:w9,xvee:k9,xwedge:x9,Yacute:E9,yacute:A9,YAcy:S9,yacy:C9,Ycirc:T9,ycirc:$9,Ycy:R9,ycy:D9,yen:L9,Yfr:M9,yfr:O9,YIcy:N9,yicy:I9,Yopf:P9,yopf:q9,Yscr:F9,yscr:B9,YUcy:z9,yucy:H9,yuml:U9,Yuml:j9,Zacute:V9,zacute:G9,Zcaron:W9,zcaron:Z9,Zcy:K9,zcy:Y9,Zdot:X9,zdot:J9,zeetrf:Q9,ZeroWidthSpace:e4,Zeta:t4,zeta:n4,zfr:r4,Zfr:s4,ZHcy:i4,zhcy:o4,zigrarr:a4,zopf:c4,Zopf:l4,Zscr:u4,zscr:h4,zwj:d4,zwnj:p4},Fa=f4,Ws=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,on={},oo={};function m4(n){var e,t,r=oo[n];if(r)return r;for(r=oo[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),/^[0-9a-z]$/i.test(t)?r.push(t):r.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<n.length;e++)r[n.charCodeAt(e)]=n[e];return r}function Er(n,e,t){var r,s,i,o,a,c="";for(typeof e!="string"&&(t=e,e=Er.defaultChars),typeof t=="undefined"&&(t=!0),a=m4(e),r=0,s=n.length;r<s;r++){if(i=n.charCodeAt(r),t&&i===37&&r+2<s&&/^[0-9a-f]{2}$/i.test(n.slice(r+1,r+3))){c+=n.slice(r,r+3),r+=2;continue}if(i<128){c+=a[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&r+1<s&&(o=n.charCodeAt(r+1),o>=56320&&o<=57343)){c+=encodeURIComponent(n[r]+n[r+1]),r++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(n[r])}return c}Er.defaultChars=";/?:@&=+$,-_.!~*'()#";Er.componentChars="-_.!~*'()";var g4=Er,ao={};function b4(n){var e,t,r=ao[n];if(r)return r;for(r=ao[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),r.push(t);for(e=0;e<n.length;e++)t=n.charCodeAt(e),r[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return r}function Ar(n,e){var t;return typeof e!="string"&&(e=Ar.defaultChars),t=b4(e),n.replace(/(%[a-f0-9]{2})+/gi,function(r){var s,i,o,a,c,l,u,h="";for(s=0,i=r.length;s<i;s+=3){if(o=parseInt(r.slice(s+1,s+3),16),o<128){h+=t[o];continue}if((o&224)===192&&s+3<i&&(a=parseInt(r.slice(s+4,s+6),16),(a&192)===128)){u=o<<6&1984|a&63,u<128?h+="\uFFFD\uFFFD":h+=String.fromCharCode(u),s+=3;continue}if((o&240)===224&&s+6<i&&(a=parseInt(r.slice(s+4,s+6),16),c=parseInt(r.slice(s+7,s+9),16),(a&192)===128&&(c&192)===128)){u=o<<12&61440|a<<6&4032|c&63,u<2048||u>=55296&&u<=57343?h+="\uFFFD\uFFFD\uFFFD":h+=String.fromCharCode(u),s+=6;continue}if((o&248)===240&&s+9<i&&(a=parseInt(r.slice(s+4,s+6),16),c=parseInt(r.slice(s+7,s+9),16),l=parseInt(r.slice(s+10,s+12),16),(a&192)===128&&(c&192)===128&&(l&192)===128)){u=o<<18&1835008|a<<12&258048|c<<6&4032|l&63,u<65536||u>1114111?h+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,h+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),s+=9;continue}h+="\uFFFD"}return h})}Ar.defaultChars=";/?:@&=+$,#";Ar.componentChars="";var v4=Ar,y4=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t};function ur(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var _4=/^([a-z0-9.+-]+:)/i,w4=/:[0-9]*$/,k4=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,x4=["<",">",'"',"`"," ","\r",`
`,"	"],E4=["{","}","|","\\","^","`"].concat(x4),A4=["'"].concat(E4),co=["%","/","?",";","#"].concat(A4),lo=["/","?","#"],S4=255,uo=/^[+a-z0-9A-Z_-]{0,63}$/,C4=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,ho={javascript:!0,"javascript:":!0},po={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function T4(n,e){if(n&&n instanceof ur)return n;var t=new ur;return t.parse(n,e),t}ur.prototype.parse=function(n,e){var t,r,s,i,o,a=n;if(a=a.trim(),!e&&n.split("#").length===1){var c=k4.exec(a);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=_4.exec(a);if(l&&(l=l[0],s=l.toLowerCase(),this.protocol=l,a=a.substr(l.length)),(e||l||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=a.substr(0,2)==="//",o&&!(l&&ho[l])&&(a=a.substr(2),this.slashes=!0)),!ho[l]&&(o||l&&!po[l])){var u=-1;for(t=0;t<lo.length;t++)i=a.indexOf(lo[t]),i!==-1&&(u===-1||i<u)&&(u=i);var h,p;for(u===-1?p=a.lastIndexOf("@"):p=a.lastIndexOf("@",u),p!==-1&&(h=a.slice(0,p),a=a.slice(p+1),this.auth=h),u=-1,t=0;t<co.length;t++)i=a.indexOf(co[t]),i!==-1&&(u===-1||i<u)&&(u=i);u===-1&&(u=a.length),a[u-1]===":"&&u--;var d=a.slice(0,u);a=a.slice(u),this.parseHost(d),this.hostname=this.hostname||"";var y=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!y){var v=this.hostname.split(/\./);for(t=0,r=v.length;t<r;t++){var A=v[t];if(!!A&&!A.match(uo)){for(var k="",_=0,w=A.length;_<w;_++)A.charCodeAt(_)>127?k+="x":k+=A[_];if(!k.match(uo)){var R=v.slice(0,t),$=v.slice(t+1),x=A.match(C4);x&&(R.push(x[1]),$.unshift(x[2])),$.length&&(a=$.join(".")+a),this.hostname=R.join(".");break}}}}this.hostname.length>S4&&(this.hostname=""),y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var F=a.indexOf("#");F!==-1&&(this.hash=a.substr(F),a=a.slice(0,F));var G=a.indexOf("?");return G!==-1&&(this.search=a.substr(G),a=a.slice(0,G)),a&&(this.pathname=a),po[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this};ur.prototype.parseHost=function(n){var e=w4.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};var $4=T4;on.encode=g4;on.decode=v4;on.format=y4;on.parse=$4;var an={},Ba=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,za=/[\0-\x1F\x7F-\x9F]/,R4=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Ha=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;an.Any=Ba;an.Cc=za;an.Cf=R4;an.P=Ws;an.Z=Ha;(function(n){function e(b){return Object.prototype.toString.call(b)}function t(b){return e(b)==="[object String]"}var r=Object.prototype.hasOwnProperty;function s(b,S){return r.call(b,S)}function i(b){var S=Array.prototype.slice.call(arguments,1);return S.forEach(function(f){if(!!f){if(typeof f!="object")throw new TypeError(f+"must be object");Object.keys(f).forEach(function(m){b[m]=f[m]})}}),b}function o(b,S,f){return[].concat(b.slice(0,S),f,b.slice(S+1))}function a(b){return!(b>=55296&&b<=57343||b>=64976&&b<=65007||(b&65535)===65535||(b&65535)===65534||b>=0&&b<=8||b===11||b>=14&&b<=31||b>=127&&b<=159||b>1114111)}function c(b){if(b>65535){b-=65536;var S=55296+(b>>10),f=56320+(b&1023);return String.fromCharCode(S,f)}return String.fromCharCode(b)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,h=new RegExp(l.source+"|"+u.source,"gi"),p=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,d=Fa;function y(b,S){var f=0;return s(d,S)?d[S]:S.charCodeAt(0)===35&&p.test(S)&&(f=S[1].toLowerCase()==="x"?parseInt(S.slice(2),16):parseInt(S.slice(1),10),a(f))?c(f):b}function v(b){return b.indexOf("\\")<0?b:b.replace(l,"$1")}function A(b){return b.indexOf("\\")<0&&b.indexOf("&")<0?b:b.replace(h,function(S,f,m){return f||y(S,m)})}var k=/[&<>"]/,_=/[&<>"]/g,w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function R(b){return w[b]}function $(b){return k.test(b)?b.replace(_,R):b}var x=/[.?*+^$[\]\\(){}|-]/g;function F(b){return b.replace(x,"\\$&")}function G(b){switch(b){case 9:case 32:return!0}return!1}function j(b){if(b>=8192&&b<=8202)return!0;switch(b){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var D=Ws;function X(b){return D.test(b)}function ce(b){switch(b){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function M(b){return b=b.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(b=b.replace(/ẞ/g,"\xDF")),b.toLowerCase().toUpperCase()}n.lib={},n.lib.mdurl=on,n.lib.ucmicro=an,n.assign=i,n.isString=t,n.has=s,n.unescapeMd=v,n.unescapeAll=A,n.isValidEntityCode=a,n.fromCodePoint=c,n.escapeHtml=$,n.arrayReplaceAt=o,n.isSpace=G,n.isWhiteSpace=j,n.isMdAsciiPunct=ce,n.isPunctChar=X,n.escapeRE=F,n.normalizeReference=M})(ne);var Sr={},D4=function(e,t,r){var s,i,o,a,c=-1,l=e.posMax,u=e.pos;for(e.pos=t+1,s=1;e.pos<l;){if(o=e.src.charCodeAt(e.pos),o===93&&(s--,s===0)){i=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)s++;else if(r)return e.pos=u,-1}}return i&&(c=e.pos),e.pos=u,c},fo=ne.unescapeAll,L4=function(e,t,r){var s,i,o=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(t)===60){for(t++;t<r;){if(s=e.charCodeAt(t),s===10||s===60)return c;if(s===62)return c.pos=t+1,c.str=fo(e.slice(a+1,t)),c.ok=!0,c;if(s===92&&t+1<r){t+=2;continue}t++}return c}for(i=0;t<r&&(s=e.charCodeAt(t),!(s===32||s<32||s===127));){if(s===92&&t+1<r){if(e.charCodeAt(t+1)===32)break;t+=2;continue}if(s===40&&(i++,i>32))return c;if(s===41){if(i===0)break;i--}t++}return a===t||i!==0||(c.str=fo(e.slice(a,t)),c.lines=o,c.pos=t,c.ok=!0),c},M4=ne.unescapeAll,O4=function(e,t,r){var s,i,o=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(t>=r||(i=e.charCodeAt(t),i!==34&&i!==39&&i!==40))return c;for(t++,i===40&&(i=41);t<r;){if(s=e.charCodeAt(t),s===i)return c.pos=t+1,c.lines=o,c.str=M4(e.slice(a+1,t)),c.ok=!0,c;if(s===40&&i===41)return c;s===10?o++:s===92&&t+1<r&&(t++,e.charCodeAt(t)===10&&o++),t++}return c};Sr.parseLinkLabel=D4;Sr.parseLinkDestination=L4;Sr.parseLinkTitle=O4;var N4=ne.assign,I4=ne.unescapeAll,Ot=ne.escapeHtml,Qe={};Qe.code_inline=function(n,e,t,r,s){var i=n[e];return"<code"+s.renderAttrs(i)+">"+Ot(n[e].content)+"</code>"};Qe.code_block=function(n,e,t,r,s){var i=n[e];return"<pre"+s.renderAttrs(i)+"><code>"+Ot(n[e].content)+`</code></pre>
`};Qe.fence=function(n,e,t,r,s){var i=n[e],o=i.info?I4(i.info).trim():"",a="",c="",l,u,h,p,d;return o&&(h=o.split(/(\s+)/g),a=h[0],c=h.slice(2).join("")),t.highlight?l=t.highlight(i.content,a,c)||Ot(i.content):l=Ot(i.content),l.indexOf("<pre")===0?l+`
`:o?(u=i.attrIndex("class"),p=i.attrs?i.attrs.slice():[],u<0?p.push(["class",t.langPrefix+a]):(p[u]=p[u].slice(),p[u][1]+=" "+t.langPrefix+a),d={attrs:p},"<pre><code"+s.renderAttrs(d)+">"+l+`</code></pre>
`):"<pre><code"+s.renderAttrs(i)+">"+l+`</code></pre>
`};Qe.image=function(n,e,t,r,s){var i=n[e];return i.attrs[i.attrIndex("alt")][1]=s.renderInlineAsText(i.children,t,r),s.renderToken(n,e,t)};Qe.hardbreak=function(n,e,t){return t.xhtmlOut?`<br />
`:`<br>
`};Qe.softbreak=function(n,e,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};Qe.text=function(n,e){return Ot(n[e].content)};Qe.html_block=function(n,e){return n[e].content};Qe.html_inline=function(n,e){return n[e].content};function cn(){this.rules=N4({},Qe)}cn.prototype.renderAttrs=function(e){var t,r,s;if(!e.attrs)return"";for(s="",t=0,r=e.attrs.length;t<r;t++)s+=" "+Ot(e.attrs[t][0])+'="'+Ot(e.attrs[t][1])+'"';return s};cn.prototype.renderToken=function(e,t,r){var s,i="",o=!1,a=e[t];return a.hidden?"":(a.block&&a.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(a.nesting===-1?"</":"<")+a.tag,i+=this.renderAttrs(a),a.nesting===0&&r.xhtmlOut&&(i+=" /"),a.block&&(o=!0,a.nesting===1&&t+1<e.length&&(s=e[t+1],(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===a.tag)&&(o=!1))),i+=o?`>
`:">",i)};cn.prototype.renderInline=function(n,e,t){for(var r,s="",i=this.rules,o=0,a=n.length;o<a;o++)r=n[o].type,typeof i[r]!="undefined"?s+=i[r](n,o,e,t,this):s+=this.renderToken(n,o,e);return s};cn.prototype.renderInlineAsText=function(n,e,t){for(var r="",s=0,i=n.length;s<i;s++)n[s].type==="text"?r+=n[s].content:n[s].type==="image"?r+=this.renderInlineAsText(n[s].children,e,t):n[s].type==="softbreak"&&(r+=`
`);return r};cn.prototype.render=function(n,e,t){var r,s,i,o="",a=this.rules;for(r=0,s=n.length;r<s;r++)i=n[r].type,i==="inline"?o+=this.renderInline(n[r].children,e,t):typeof a[i]!="undefined"?o+=a[n[r].type](n,r,e,t,this):o+=this.renderToken(n,r,e,t);return o};var P4=cn;function Ze(){this.__rules__=[],this.__cache__=null}Ze.prototype.__find__=function(n){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};Ze.prototype.__compile__=function(){var n=this,e=[""];n.__rules__.forEach(function(t){!t.enabled||t.alt.forEach(function(r){e.indexOf(r)<0&&e.push(r)})}),n.__cache__={},e.forEach(function(t){n.__cache__[t]=[],n.__rules__.forEach(function(r){!r.enabled||t&&r.alt.indexOf(t)<0||n.__cache__[t].push(r.fn)})})};Ze.prototype.at=function(n,e,t){var r=this.__find__(n),s=t||{};if(r===-1)throw new Error("Parser rule not found: "+n);this.__rules__[r].fn=e,this.__rules__[r].alt=s.alt||[],this.__cache__=null};Ze.prototype.before=function(n,e,t,r){var s=this.__find__(n),i=r||{};if(s===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(s,0,{name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Ze.prototype.after=function(n,e,t,r){var s=this.__find__(n),i=r||{};if(s===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(s+1,0,{name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Ze.prototype.push=function(n,e,t){var r=t||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:r.alt||[]}),this.__cache__=null};Ze.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(r){var s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!0,t.push(r)},this),this.__cache__=null,t};Ze.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(n,e)};Ze.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(r){var s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!1,t.push(r)},this),this.__cache__=null,t};Ze.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};var Zs=Ze,q4=/\r\n?|\n/g,F4=/\0/g,B4=function(e){var t;t=e.src.replace(q4,`
`),t=t.replace(F4,"\uFFFD"),e.src=t},z4=function(e){var t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},H4=function(e){var t=e.tokens,r,s,i;for(s=0,i=t.length;s<i;s++)r=t[s],r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)},U4=ne.arrayReplaceAt;function j4(n){return/^<a[>\s]/i.test(n)}function V4(n){return/^<\/a\s*>/i.test(n)}var G4=function(e){var t,r,s,i,o,a,c,l,u,h,p,d,y,v,A,k,_=e.tokens,w;if(!!e.md.options.linkify){for(r=0,s=_.length;r<s;r++)if(!(_[r].type!=="inline"||!e.md.linkify.pretest(_[r].content)))for(i=_[r].children,y=0,t=i.length-1;t>=0;t--){if(a=i[t],a.type==="link_close"){for(t--;i[t].level!==a.level&&i[t].type!=="link_open";)t--;continue}if(a.type==="html_inline"&&(j4(a.content)&&y>0&&y--,V4(a.content)&&y++),!(y>0)&&a.type==="text"&&e.md.linkify.test(a.content)){for(u=a.content,w=e.md.linkify.match(u),c=[],d=a.level,p=0,l=0;l<w.length;l++)v=w[l].url,A=e.md.normalizeLink(v),e.md.validateLink(A)&&(k=w[l].text,w[l].schema?w[l].schema==="mailto:"&&!/^mailto:/i.test(k)?k=e.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):k=e.md.normalizeLinkText(k):k=e.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,""),h=w[l].index,h>p&&(o=new e.Token("text","",0),o.content=u.slice(p,h),o.level=d,c.push(o)),o=new e.Token("link_open","a",1),o.attrs=[["href",A]],o.level=d++,o.markup="linkify",o.info="auto",c.push(o),o=new e.Token("text","",0),o.content=k,o.level=d,c.push(o),o=new e.Token("link_close","a",-1),o.level=--d,o.markup="linkify",o.info="auto",c.push(o),p=w[l].lastIndex);p<u.length&&(o=new e.Token("text","",0),o.content=u.slice(p),o.level=d,c.push(o)),_[r].children=i=U4(i,t,c)}}}},Ua=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,W4=/\((c|tm|r|p)\)/i,Z4=/\((c|tm|r|p)\)/ig,K4={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};function Y4(n,e){return K4[e.toLowerCase()]}function X4(n){var e,t,r=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!r&&(t.content=t.content.replace(Z4,Y4)),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}function J4(n){var e,t,r=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!r&&Ua.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}var Q4=function(e){var t;if(!!e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(W4.test(e.tokens[t].content)&&X4(e.tokens[t].children),Ua.test(e.tokens[t].content)&&J4(e.tokens[t].children))},mo=ne.isWhiteSpace,go=ne.isPunctChar,bo=ne.isMdAsciiPunct,e6=/['"]/,vo=/['"]/g,yo="\u2019";function Yn(n,e,t){return n.substr(0,e)+t+n.substr(e+1)}function t6(n,e){var t,r,s,i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x;for(R=[],t=0;t<n.length;t++){for(r=n[t],c=n[t].level,_=R.length-1;_>=0&&!(R[_].level<=c);_--);if(R.length=_+1,r.type!=="text")continue;s=r.content,o=0,a=s.length;e:for(;o<a&&(vo.lastIndex=o,i=vo.exec(s),!!i);){if(A=k=!0,o=i.index+1,w=i[0]==="'",u=32,i.index-1>=0)u=s.charCodeAt(i.index-1);else for(_=t-1;_>=0&&!(n[_].type==="softbreak"||n[_].type==="hardbreak");_--)if(!!n[_].content){u=n[_].content.charCodeAt(n[_].content.length-1);break}if(h=32,o<a)h=s.charCodeAt(o);else for(_=t+1;_<n.length&&!(n[_].type==="softbreak"||n[_].type==="hardbreak");_++)if(!!n[_].content){h=n[_].content.charCodeAt(0);break}if(p=bo(u)||go(String.fromCharCode(u)),d=bo(h)||go(String.fromCharCode(h)),y=mo(u),v=mo(h),v?A=!1:d&&(y||p||(A=!1)),y?k=!1:p&&(v||d||(k=!1)),h===34&&i[0]==='"'&&u>=48&&u<=57&&(k=A=!1),A&&k&&(A=p,k=d),!A&&!k){w&&(r.content=Yn(r.content,i.index,yo));continue}if(k){for(_=R.length-1;_>=0&&(l=R[_],!(R[_].level<c));_--)if(l.single===w&&R[_].level===c){l=R[_],w?($=e.md.options.quotes[2],x=e.md.options.quotes[3]):($=e.md.options.quotes[0],x=e.md.options.quotes[1]),r.content=Yn(r.content,i.index,x),n[l.token].content=Yn(n[l.token].content,l.pos,$),o+=x.length-1,l.token===t&&(o+=$.length-1),s=r.content,a=s.length,R.length=_;continue e}}A?R.push({token:t,pos:i.index,single:w,level:c}):k&&w&&(r.content=Yn(r.content,i.index,yo))}}}var n6=function(e){var t;if(!!e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!e6.test(e.tokens[t].content)||t6(e.tokens[t].children,e)};function ln(n,e,t){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ln.prototype.attrIndex=function(e){var t,r,s;if(!this.attrs)return-1;for(t=this.attrs,r=0,s=t.length;r<s;r++)if(t[r][0]===e)return r;return-1};ln.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};ln.prototype.attrSet=function(e,t){var r=this.attrIndex(e),s=[e,t];r<0?this.attrPush(s):this.attrs[r]=s};ln.prototype.attrGet=function(e){var t=this.attrIndex(e),r=null;return t>=0&&(r=this.attrs[t][1]),r};ln.prototype.attrJoin=function(e,t){var r=this.attrIndex(e);r<0?this.attrPush([e,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};var Ks=ln,r6=Ks;function ja(n,e,t){this.src=n,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=e}ja.prototype.Token=r6;var s6=ja,i6=Zs,es=[["normalize",B4],["block",z4],["inline",H4],["linkify",G4],["replacements",Q4],["smartquotes",n6]];function Ys(){this.ruler=new i6;for(var n=0;n<es.length;n++)this.ruler.push(es[n][0],es[n][1])}Ys.prototype.process=function(n){var e,t,r;for(r=this.ruler.getRules(""),e=0,t=r.length;e<t;e++)r[e](n)};Ys.prototype.State=s6;var o6=Ys,ts=ne.isSpace;function ns(n,e){var t=n.bMarks[e]+n.tShift[e],r=n.eMarks[e];return n.src.substr(t,r-t)}function _o(n){var e=[],t=0,r=n.length,s,i=!1,o=0,a="";for(s=n.charCodeAt(t);t<r;)s===124&&(i?(a+=n.substring(o,t-1),o=t):(e.push(a+n.substring(o,t)),a="",o=t+1)),i=s===92,t++,s=n.charCodeAt(t);return e.push(a+n.substring(o)),e}var a6=function(e,t,r,s){var i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x;if(t+2>r||(u=t+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(a=e.bMarks[u]+e.tShift[u],a>=e.eMarks[u])||($=e.src.charCodeAt(a++),$!==124&&$!==45&&$!==58)||a>=e.eMarks[u]||(x=e.src.charCodeAt(a++),x!==124&&x!==45&&x!==58&&!ts(x))||$===45&&ts(x))return!1;for(;a<e.eMarks[u];){if(i=e.src.charCodeAt(a),i!==124&&i!==45&&i!==58&&!ts(i))return!1;a++}for(o=ns(e,t+1),h=o.split("|"),y=[],c=0;c<h.length;c++){if(v=h[c].trim(),!v){if(c===0||c===h.length-1)continue;return!1}if(!/^:?-+:?$/.test(v))return!1;v.charCodeAt(v.length-1)===58?y.push(v.charCodeAt(0)===58?"center":"right"):v.charCodeAt(0)===58?y.push("left"):y.push("")}if(o=ns(e,t).trim(),o.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4||(h=_o(o),h.length&&h[0]===""&&h.shift(),h.length&&h[h.length-1]===""&&h.pop(),p=h.length,p===0||p!==y.length))return!1;if(s)return!0;for(_=e.parentType,e.parentType="table",R=e.md.block.ruler.getRules("blockquote"),d=e.push("table_open","table",1),d.map=A=[t,0],d=e.push("thead_open","thead",1),d.map=[t,t+1],d=e.push("tr_open","tr",1),d.map=[t,t+1],c=0;c<h.length;c++)d=e.push("th_open","th",1),y[c]&&(d.attrs=[["style","text-align:"+y[c]]]),d=e.push("inline","",0),d.content=h[c].trim(),d.children=[],d=e.push("th_close","th",-1);for(d=e.push("tr_close","tr",-1),d=e.push("thead_close","thead",-1),u=t+2;u<r&&!(e.sCount[u]<e.blkIndent);u++){for(w=!1,c=0,l=R.length;c<l;c++)if(R[c](e,u,r,!0)){w=!0;break}if(w||(o=ns(e,u).trim(),!o)||e.sCount[u]-e.blkIndent>=4)break;for(h=_o(o),h.length&&h[0]===""&&h.shift(),h.length&&h[h.length-1]===""&&h.pop(),u===t+2&&(d=e.push("tbody_open","tbody",1),d.map=k=[t+2,0]),d=e.push("tr_open","tr",1),d.map=[u,u+1],c=0;c<p;c++)d=e.push("td_open","td",1),y[c]&&(d.attrs=[["style","text-align:"+y[c]]]),d=e.push("inline","",0),d.content=h[c]?h[c].trim():"",d.children=[],d=e.push("td_close","td",-1);d=e.push("tr_close","tr",-1)}return k&&(d=e.push("tbody_close","tbody",-1),k[1]=u),d=e.push("table_close","table",-1),A[1]=u,e.parentType=_,e.line=u,!0},c6=function(e,t,r){var s,i,o;if(e.sCount[t]-e.blkIndent<4)return!1;for(i=s=t+1;s<r;){if(e.isEmpty(s)){s++;continue}if(e.sCount[s]-e.blkIndent>=4){s++,i=s;continue}break}return e.line=i,o=e.push("code_block","code",0),o.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,o.map=[t,e.line],!0},l6=function(e,t,r,s){var i,o,a,c,l,u,h,p=!1,d=e.bMarks[t]+e.tShift[t],y=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||d+3>y||(i=e.src.charCodeAt(d),i!==126&&i!==96)||(l=d,d=e.skipChars(d,i),o=d-l,o<3)||(h=e.src.slice(l,d),a=e.src.slice(d,y),i===96&&a.indexOf(String.fromCharCode(i))>=0))return!1;if(s)return!0;for(c=t;c++,!(c>=r||(d=l=e.bMarks[c]+e.tShift[c],y=e.eMarks[c],d<y&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(d)===i&&!(e.sCount[c]-e.blkIndent>=4)&&(d=e.skipChars(d,i),!(d-l<o)&&(d=e.skipSpaces(d),!(d<y)))){p=!0;break}return o=e.sCount[t],e.line=c+(p?1:0),u=e.push("fence","code",0),u.info=a,u.content=e.getLines(t+1,c,o,!0),u.markup=h,u.map=[t,e.line],!0},wo=ne.isSpace,u6=function(e,t,r,s){var i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x,F,G,j=e.lineMax,D=e.bMarks[t]+e.tShift[t],X=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(D++)!==62)return!1;if(s)return!0;for(c=d=e.sCount[t]+1,e.src.charCodeAt(D)===32?(D++,c++,d++,i=!1,R=!0):e.src.charCodeAt(D)===9?(R=!0,(e.bsCount[t]+d)%4===3?(D++,c++,d++,i=!1):i=!0):R=!1,y=[e.bMarks[t]],e.bMarks[t]=D;D<X&&(o=e.src.charCodeAt(D),wo(o));){o===9?d+=4-(d+e.bsCount[t]+(i?1:0))%4:d++;D++}for(v=[e.bsCount[t]],e.bsCount[t]=e.sCount[t]+1+(R?1:0),u=D>=X,_=[e.sCount[t]],e.sCount[t]=d-c,w=[e.tShift[t]],e.tShift[t]=D-e.bMarks[t],x=e.md.block.ruler.getRules("blockquote"),k=e.parentType,e.parentType="blockquote",p=t+1;p<r&&(G=e.sCount[p]<e.blkIndent,D=e.bMarks[p]+e.tShift[p],X=e.eMarks[p],!(D>=X));p++){if(e.src.charCodeAt(D++)===62&&!G){for(c=d=e.sCount[p]+1,e.src.charCodeAt(D)===32?(D++,c++,d++,i=!1,R=!0):e.src.charCodeAt(D)===9?(R=!0,(e.bsCount[p]+d)%4===3?(D++,c++,d++,i=!1):i=!0):R=!1,y.push(e.bMarks[p]),e.bMarks[p]=D;D<X&&(o=e.src.charCodeAt(D),wo(o));){o===9?d+=4-(d+e.bsCount[p]+(i?1:0))%4:d++;D++}u=D>=X,v.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(R?1:0),_.push(e.sCount[p]),e.sCount[p]=d-c,w.push(e.tShift[p]),e.tShift[p]=D-e.bMarks[p];continue}if(u)break;for($=!1,a=0,l=x.length;a<l;a++)if(x[a](e,p,r,!0)){$=!0;break}if($){e.lineMax=p,e.blkIndent!==0&&(y.push(e.bMarks[p]),v.push(e.bsCount[p]),w.push(e.tShift[p]),_.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}y.push(e.bMarks[p]),v.push(e.bsCount[p]),w.push(e.tShift[p]),_.push(e.sCount[p]),e.sCount[p]=-1}for(A=e.blkIndent,e.blkIndent=0,F=e.push("blockquote_open","blockquote",1),F.markup=">",F.map=h=[t,0],e.md.block.tokenize(e,t,p),F=e.push("blockquote_close","blockquote",-1),F.markup=">",e.lineMax=j,e.parentType=k,h[1]=e.line,a=0;a<w.length;a++)e.bMarks[a+t]=y[a],e.tShift[a+t]=w[a],e.sCount[a+t]=_[a],e.bsCount[a+t]=v[a];return e.blkIndent=A,!0},h6=ne.isSpace,d6=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(i=e.src.charCodeAt(l++),i!==42&&i!==45&&i!==95))return!1;for(o=1;l<u;){if(a=e.src.charCodeAt(l++),a!==i&&!h6(a))return!1;a===i&&o++}return o<3?!1:(s||(e.line=t+1,c=e.push("hr","hr",0),c.map=[t,e.line],c.markup=Array(o+1).join(String.fromCharCode(i))),!0)},Va=ne.isSpace;function ko(n,e){var t,r,s,i;return r=n.bMarks[e]+n.tShift[e],s=n.eMarks[e],t=n.src.charCodeAt(r++),t!==42&&t!==45&&t!==43||r<s&&(i=n.src.charCodeAt(r),!Va(i))?-1:r}function xo(n,e){var t,r=n.bMarks[e]+n.tShift[e],s=r,i=n.eMarks[e];if(s+1>=i||(t=n.src.charCodeAt(s++),t<48||t>57))return-1;for(;;){if(s>=i)return-1;if(t=n.src.charCodeAt(s++),t>=48&&t<=57){if(s-r>=10)return-1;continue}if(t===41||t===46)break;return-1}return s<i&&(t=n.src.charCodeAt(s),!Va(t))?-1:s}function p6(n,e){var t,r,s=n.level+2;for(t=e+2,r=n.tokens.length-2;t<r;t++)n.tokens[t].level===s&&n.tokens[t].type==="paragraph_open"&&(n.tokens[t+2].hidden=!0,n.tokens[t].hidden=!0,t+=2)}var f6=function(e,t,r,s){var i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$,x,F,G,j,D,X,ce,M,b,S,f,m=!1,E=!0;if(e.sCount[t]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[t]-e.listIndent>=4&&e.sCount[t]<e.blkIndent)return!1;if(s&&e.parentType==="paragraph"&&e.sCount[t]>=e.blkIndent&&(m=!0),(X=xo(e,t))>=0){if(h=!0,M=e.bMarks[t]+e.tShift[t],k=Number(e.src.slice(M,X-1)),m&&k!==1)return!1}else if((X=ko(e,t))>=0)h=!1;else return!1;if(m&&e.skipSpaces(X)>=e.eMarks[t])return!1;if(A=e.src.charCodeAt(X-1),s)return!0;for(v=e.tokens.length,h?(f=e.push("ordered_list_open","ol",1),k!==1&&(f.attrs=[["start",k]])):f=e.push("bullet_list_open","ul",1),f.map=y=[t,0],f.markup=String.fromCharCode(A),w=t,ce=!1,S=e.md.block.ruler.getRules("list"),x=e.parentType,e.parentType="list";w<r;){for(D=X,_=e.eMarks[w],u=R=e.sCount[w]+X-(e.bMarks[t]+e.tShift[t]);D<_;){if(i=e.src.charCodeAt(D),i===9)R+=4-(R+e.bsCount[w])%4;else if(i===32)R++;else break;D++}if(o=D,o>=_?l=1:l=R-u,l>4&&(l=1),c=u+l,f=e.push("list_item_open","li",1),f.markup=String.fromCharCode(A),f.map=p=[t,0],h&&(f.info=e.src.slice(M,X-1)),j=e.tight,G=e.tShift[t],F=e.sCount[t],$=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=c,e.tight=!0,e.tShift[t]=o-e.bMarks[t],e.sCount[t]=R,o>=_&&e.isEmpty(t+1)?e.line=Math.min(e.line+2,r):e.md.block.tokenize(e,t,r,!0),(!e.tight||ce)&&(E=!1),ce=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=$,e.tShift[t]=G,e.sCount[t]=F,e.tight=j,f=e.push("list_item_close","li",-1),f.markup=String.fromCharCode(A),w=t=e.line,p[1]=w,o=e.bMarks[t],w>=r||e.sCount[w]<e.blkIndent||e.sCount[t]-e.blkIndent>=4)break;for(b=!1,a=0,d=S.length;a<d;a++)if(S[a](e,w,r,!0)){b=!0;break}if(b)break;if(h){if(X=xo(e,w),X<0)break;M=e.bMarks[w]+e.tShift[w]}else if(X=ko(e,w),X<0)break;if(A!==e.src.charCodeAt(X-1))break}return h?f=e.push("ordered_list_close","ol",-1):f=e.push("bullet_list_close","ul",-1),f.markup=String.fromCharCode(A),y[1]=w,e.line=w,e.parentType=x,E&&p6(e,v),!0},m6=ne.normalizeReference,Xn=ne.isSpace,g6=function(e,t,r,s){var i,o,a,c,l,u,h,p,d,y,v,A,k,_,w,R,$=0,x=e.bMarks[t]+e.tShift[t],F=e.eMarks[t],G=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(x)!==91)return!1;for(;++x<F;)if(e.src.charCodeAt(x)===93&&e.src.charCodeAt(x-1)!==92){if(x+1===F||e.src.charCodeAt(x+1)!==58)return!1;break}for(c=e.lineMax,w=e.md.block.ruler.getRules("reference"),y=e.parentType,e.parentType="reference";G<c&&!e.isEmpty(G);G++)if(!(e.sCount[G]-e.blkIndent>3)&&!(e.sCount[G]<0)){for(_=!1,u=0,h=w.length;u<h;u++)if(w[u](e,G,c,!0)){_=!0;break}if(_)break}for(k=e.getLines(t,G,e.blkIndent,!1).trim(),F=k.length,x=1;x<F;x++){if(i=k.charCodeAt(x),i===91)return!1;if(i===93){d=x;break}else i===10?$++:i===92&&(x++,x<F&&k.charCodeAt(x)===10&&$++)}if(d<0||k.charCodeAt(d+1)!==58)return!1;for(x=d+2;x<F;x++)if(i=k.charCodeAt(x),i===10)$++;else if(!Xn(i))break;if(v=e.md.helpers.parseLinkDestination(k,x,F),!v.ok||(l=e.md.normalizeLink(v.str),!e.md.validateLink(l)))return!1;for(x=v.pos,$+=v.lines,o=x,a=$,A=x;x<F;x++)if(i=k.charCodeAt(x),i===10)$++;else if(!Xn(i))break;for(v=e.md.helpers.parseLinkTitle(k,x,F),x<F&&A!==x&&v.ok?(R=v.str,x=v.pos,$+=v.lines):(R="",x=o,$=a);x<F&&(i=k.charCodeAt(x),!!Xn(i));)x++;if(x<F&&k.charCodeAt(x)!==10&&R)for(R="",x=o,$=a;x<F&&(i=k.charCodeAt(x),!!Xn(i));)x++;return x<F&&k.charCodeAt(x)!==10||(p=m6(k.slice(1,d)),!p)?!1:(s||(typeof e.env.references=="undefined"&&(e.env.references={}),typeof e.env.references[p]=="undefined"&&(e.env.references[p]={title:R,href:l}),e.parentType=y,e.line=t+$+1),!0)},b6=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Cr={},v6="[a-zA-Z_:][a-zA-Z0-9:._-]*",y6="[^\"'=<>`\\x00-\\x20]+",_6="'[^']*'",w6='"[^"]*"',k6="(?:"+y6+"|"+_6+"|"+w6+")",x6="(?:\\s+"+v6+"(?:\\s*=\\s*"+k6+")?)",Ga="<[A-Za-z][A-Za-z0-9\\-]*"+x6+"*\\s*\\/?>",Wa="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",E6="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",A6="<[?][\\s\\S]*?[?]>",S6="<![A-Z]+\\s+[^>]*>",C6="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",T6=new RegExp("^(?:"+Ga+"|"+Wa+"|"+E6+"|"+A6+"|"+S6+"|"+C6+")"),$6=new RegExp("^(?:"+Ga+"|"+Wa+")");Cr.HTML_TAG_RE=T6;Cr.HTML_OPEN_CLOSE_TAG_RE=$6;var R6=b6,D6=Cr.HTML_OPEN_CLOSE_TAG_RE,Ut=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+R6.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(D6.source+"\\s*$"),/^$/,!1]],L6=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(l)!==60)return!1;for(c=e.src.slice(l,u),i=0;i<Ut.length&&!Ut[i][0].test(c);i++);if(i===Ut.length)return!1;if(s)return Ut[i][2];if(o=t+1,!Ut[i][1].test(c)){for(;o<r&&!(e.sCount[o]<e.blkIndent);o++)if(l=e.bMarks[o]+e.tShift[o],u=e.eMarks[o],c=e.src.slice(l,u),Ut[i][1].test(c)){c.length!==0&&o++;break}}return e.line=o,a=e.push("html_block","",0),a.map=[t,o],a.content=e.getLines(t,o,e.blkIndent,!0),!0},Eo=ne.isSpace,M6=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(i=e.src.charCodeAt(l),i!==35||l>=u))return!1;for(o=1,i=e.src.charCodeAt(++l);i===35&&l<u&&o<=6;)o++,i=e.src.charCodeAt(++l);return o>6||l<u&&!Eo(i)?!1:(s||(u=e.skipSpacesBack(u,l),a=e.skipCharsBack(u,35,l),a>l&&Eo(e.src.charCodeAt(a-1))&&(u=a),e.line=t+1,c=e.push("heading_open","h"+String(o),1),c.markup="########".slice(0,o),c.map=[t,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[t,e.line],c.children=[],c=e.push("heading_close","h"+String(o),-1),c.markup="########".slice(0,o)),!0)},O6=function(e,t,r){var s,i,o,a,c,l,u,h,p,d=t+1,y,v=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(y=e.parentType,e.parentType="paragraph";d<r&&!e.isEmpty(d);d++)if(!(e.sCount[d]-e.blkIndent>3)){if(e.sCount[d]>=e.blkIndent&&(l=e.bMarks[d]+e.tShift[d],u=e.eMarks[d],l<u&&(p=e.src.charCodeAt(l),(p===45||p===61)&&(l=e.skipChars(l,p),l=e.skipSpaces(l),l>=u)))){h=p===61?1:2;break}if(!(e.sCount[d]<0)){for(i=!1,o=0,a=v.length;o<a;o++)if(v[o](e,d,r,!0)){i=!0;break}if(i)break}}return h?(s=e.getLines(t,d,e.blkIndent,!1).trim(),e.line=d+1,c=e.push("heading_open","h"+String(h),1),c.markup=String.fromCharCode(p),c.map=[t,e.line],c=e.push("inline","",0),c.content=s,c.map=[t,e.line-1],c.children=[],c=e.push("heading_close","h"+String(h),-1),c.markup=String.fromCharCode(p),e.parentType=y,!0):!1},N6=function(e,t){var r,s,i,o,a,c,l=t+1,u=e.md.block.ruler.getRules("paragraph"),h=e.lineMax;for(c=e.parentType,e.parentType="paragraph";l<h&&!e.isEmpty(l);l++)if(!(e.sCount[l]-e.blkIndent>3)&&!(e.sCount[l]<0)){for(s=!1,i=0,o=u.length;i<o;i++)if(u[i](e,l,h,!0)){s=!0;break}if(s)break}return r=e.getLines(t,l,e.blkIndent,!1).trim(),e.line=l,a=e.push("paragraph_open","p",1),a.map=[t,e.line],a=e.push("inline","",0),a.content=r,a.map=[t,e.line],a.children=[],a=e.push("paragraph_close","p",-1),e.parentType=c,!0},Za=Ks,Tr=ne.isSpace;function et(n,e,t,r){var s,i,o,a,c,l,u,h;for(this.src=n,this.md=e,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,h=!1,o=a=l=u=0,c=i.length;a<c;a++){if(s=i.charCodeAt(a),!h)if(Tr(s)){l++,s===9?u+=4-u%4:u++;continue}else h=!0;(s===10||a===c-1)&&(s!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),h=!1,l=0,u=0,o=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}et.prototype.push=function(n,e,t){var r=new Za(n,e,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};et.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};et.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};et.prototype.skipSpaces=function(e){for(var t,r=this.src.length;e<r&&(t=this.src.charCodeAt(e),!!Tr(t));e++);return e};et.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!Tr(this.src.charCodeAt(--e)))return e+1;return e};et.prototype.skipChars=function(e,t){for(var r=this.src.length;e<r&&this.src.charCodeAt(e)===t;e++);return e};et.prototype.skipCharsBack=function(e,t,r){if(e<=r)return e;for(;e>r;)if(t!==this.src.charCodeAt(--e))return e+1;return e};et.prototype.getLines=function(e,t,r,s){var i,o,a,c,l,u,h,p=e;if(e>=t)return"";for(u=new Array(t-e),i=0;p<t;p++,i++){for(o=0,h=c=this.bMarks[p],p+1<t||s?l=this.eMarks[p]+1:l=this.eMarks[p];c<l&&o<r;){if(a=this.src.charCodeAt(c),Tr(a))a===9?o+=4-(o+this.bsCount[p])%4:o++;else if(c-h<this.tShift[p])o++;else break;c++}o>r?u[i]=new Array(o-r+1).join(" ")+this.src.slice(c,l):u[i]=this.src.slice(c,l)}return u.join("")};et.prototype.Token=Za;var I6=et,P6=Zs,Jn=[["table",a6,["paragraph","reference"]],["code",c6],["fence",l6,["paragraph","reference","blockquote","list"]],["blockquote",u6,["paragraph","reference","blockquote","list"]],["hr",d6,["paragraph","reference","blockquote","list"]],["list",f6,["paragraph","reference","blockquote"]],["reference",g6],["html_block",L6,["paragraph","reference","blockquote"]],["heading",M6,["paragraph","reference","blockquote"]],["lheading",O6],["paragraph",N6]];function $r(){this.ruler=new P6;for(var n=0;n<Jn.length;n++)this.ruler.push(Jn[n][0],Jn[n][1],{alt:(Jn[n][2]||[]).slice()})}$r.prototype.tokenize=function(n,e,t){for(var r,s,i=this.ruler.getRules(""),o=i.length,a=e,c=!1,l=n.md.options.maxNesting;a<t&&(n.line=a=n.skipEmptyLines(a),!(a>=t||n.sCount[a]<n.blkIndent));){if(n.level>=l){n.line=t;break}for(s=0;s<o&&(r=i[s](n,a,t,!1),!r);s++);n.tight=!c,n.isEmpty(n.line-1)&&(c=!0),a=n.line,a<t&&n.isEmpty(a)&&(c=!0,a++,n.line=a)}};$r.prototype.parse=function(n,e,t,r){var s;!n||(s=new this.State(n,e,t,r),this.tokenize(s,s.line,s.lineMax))};$r.prototype.State=I6;var q6=$r;function F6(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var B6=function(e,t){for(var r=e.pos;r<e.posMax&&!F6(e.src.charCodeAt(r));)r++;return r===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,r)),e.pos=r,!0)},z6=ne.isSpace,H6=function(e,t){var r,s,i,o=e.pos;if(e.src.charCodeAt(o)!==10)return!1;if(r=e.pending.length-1,s=e.posMax,!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){for(i=r-1;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(o++;o<s&&z6(e.src.charCodeAt(o));)o++;return e.pos=o,!0},U6=ne.isSpace,Xs=[];for(var Ao=0;Ao<256;Ao++)Xs.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){Xs[n.charCodeAt(0)]=1});var j6=function(e,t){var r,s=e.pos,i=e.posMax;if(e.src.charCodeAt(s)!==92)return!1;if(s++,s<i){if(r=e.src.charCodeAt(s),r<256&&Xs[r]!==0)return t||(e.pending+=e.src[s]),e.pos+=2,!0;if(r===10){for(t||e.push("hardbreak","br",0),s++;s<i&&(r=e.src.charCodeAt(s),!!U6(r));)s++;return e.pos=s,!0}}return t||(e.pending+="\\"),e.pos++,!0},V6=function(e,t){var r,s,i,o,a,c,l,u,h=e.pos,p=e.src.charCodeAt(h);if(p!==96)return!1;for(r=h,h++,s=e.posMax;h<s&&e.src.charCodeAt(h)===96;)h++;if(i=e.src.slice(r,h),l=i.length,e.backticksScanned&&(e.backticks[l]||0)<=r)return t||(e.pending+=i),e.pos+=l,!0;for(a=c=h;(a=e.src.indexOf("`",c))!==-1;){for(c=a+1;c<s&&e.src.charCodeAt(c)===96;)c++;if(u=c-a,u===l)return t||(o=e.push("code_inline","code",0),o.markup=i,o.content=e.src.slice(h,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=c,!0;e.backticks[u]=a}return e.backticksScanned=!0,t||(e.pending+=i),e.pos+=l,!0},Rr={};Rr.tokenize=function(e,t){var r,s,i,o,a,c=e.pos,l=e.src.charCodeAt(c);if(t||l!==126||(s=e.scanDelims(e.pos,!0),o=s.length,a=String.fromCharCode(l),o<2))return!1;for(o%2&&(i=e.push("text","",0),i.content=a,o--),r=0;r<o;r+=2)i=e.push("text","",0),i.content=a+a,e.delimiters.push({marker:l,length:0,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0};function So(n,e){var t,r,s,i,o,a=[],c=e.length;for(t=0;t<c;t++)s=e[t],s.marker===126&&s.end!==-1&&(i=e[s.end],o=n.tokens[s.token],o.type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",o=n.tokens[i.token],o.type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="",n.tokens[i.token-1].type==="text"&&n.tokens[i.token-1].content==="~"&&a.push(i.token-1));for(;a.length;){for(t=a.pop(),r=t+1;r<n.tokens.length&&n.tokens[r].type==="s_close";)r++;r--,t!==r&&(o=n.tokens[r],n.tokens[r]=n.tokens[t],n.tokens[t]=o)}}Rr.postProcess=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(So(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&So(e,r[t].delimiters)};var Dr={};Dr.tokenize=function(e,t){var r,s,i,o=e.pos,a=e.src.charCodeAt(o);if(t||a!==95&&a!==42)return!1;for(s=e.scanDelims(e.pos,a===42),r=0;r<s.length;r++)i=e.push("text","",0),i.content=String.fromCharCode(a),e.delimiters.push({marker:a,length:s.length,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0};function Co(n,e){var t,r,s,i,o,a,c=e.length;for(t=c-1;t>=0;t--)r=e[t],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(s=e[r.end],a=t>0&&e[t-1].end===r.end+1&&e[t-1].marker===r.marker&&e[t-1].token===r.token-1&&e[r.end+1].token===s.token+1,o=String.fromCharCode(r.marker),i=n.tokens[r.token],i.type=a?"strong_open":"em_open",i.tag=a?"strong":"em",i.nesting=1,i.markup=a?o+o:o,i.content="",i=n.tokens[s.token],i.type=a?"strong_close":"em_close",i.tag=a?"strong":"em",i.nesting=-1,i.markup=a?o+o:o,i.content="",a&&(n.tokens[e[t-1].token].content="",n.tokens[e[r.end+1].token].content="",t--))}Dr.postProcess=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(Co(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&Co(e,r[t].delimiters)};var G6=ne.normalizeReference,rs=ne.isSpace,W6=function(e,t){var r,s,i,o,a,c,l,u,h,p="",d="",y=e.pos,v=e.posMax,A=e.pos,k=!0;if(e.src.charCodeAt(e.pos)!==91||(a=e.pos+1,o=e.md.helpers.parseLinkLabel(e,e.pos,!0),o<0))return!1;if(c=o+1,c<v&&e.src.charCodeAt(c)===40){for(k=!1,c++;c<v&&(s=e.src.charCodeAt(c),!(!rs(s)&&s!==10));c++);if(c>=v)return!1;if(A=c,l=e.md.helpers.parseLinkDestination(e.src,c,e.posMax),l.ok){for(p=e.md.normalizeLink(l.str),e.md.validateLink(p)?c=l.pos:p="",A=c;c<v&&(s=e.src.charCodeAt(c),!(!rs(s)&&s!==10));c++);if(l=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<v&&A!==c&&l.ok)for(d=l.str,c=l.pos;c<v&&(s=e.src.charCodeAt(c),!(!rs(s)&&s!==10));c++);}(c>=v||e.src.charCodeAt(c)!==41)&&(k=!0),c++}if(k){if(typeof e.env.references=="undefined")return!1;if(c<v&&e.src.charCodeAt(c)===91?(A=c+1,c=e.md.helpers.parseLinkLabel(e,c),c>=0?i=e.src.slice(A,c++):c=o+1):c=o+1,i||(i=e.src.slice(a,o)),u=e.env.references[G6(i)],!u)return e.pos=y,!1;p=u.href,d=u.title}return t||(e.pos=a,e.posMax=o,h=e.push("link_open","a",1),h.attrs=r=[["href",p]],d&&r.push(["title",d]),e.md.inline.tokenize(e),h=e.push("link_close","a",-1)),e.pos=c,e.posMax=v,!0},Z6=ne.normalizeReference,ss=ne.isSpace,K6=function(e,t){var r,s,i,o,a,c,l,u,h,p,d,y,v,A="",k=e.pos,_=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(c=e.pos+2,a=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),a<0))return!1;if(l=a+1,l<_&&e.src.charCodeAt(l)===40){for(l++;l<_&&(s=e.src.charCodeAt(l),!(!ss(s)&&s!==10));l++);if(l>=_)return!1;for(v=l,h=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),h.ok&&(A=e.md.normalizeLink(h.str),e.md.validateLink(A)?l=h.pos:A=""),v=l;l<_&&(s=e.src.charCodeAt(l),!(!ss(s)&&s!==10));l++);if(h=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<_&&v!==l&&h.ok)for(p=h.str,l=h.pos;l<_&&(s=e.src.charCodeAt(l),!(!ss(s)&&s!==10));l++);else p="";if(l>=_||e.src.charCodeAt(l)!==41)return e.pos=k,!1;l++}else{if(typeof e.env.references=="undefined")return!1;if(l<_&&e.src.charCodeAt(l)===91?(v=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?o=e.src.slice(v,l++):l=a+1):l=a+1,o||(o=e.src.slice(c,a)),u=e.env.references[Z6(o)],!u)return e.pos=k,!1;A=u.href,p=u.title}return t||(i=e.src.slice(c,a),e.md.inline.parse(i,e.md,e.env,y=[]),d=e.push("image","img",0),d.attrs=r=[["src",A],["alt",""]],d.children=y,d.content=i,p&&r.push(["title",p])),e.pos=l,e.posMax=_,!0},Y6=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,X6=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,J6=function(e,t){var r,s,i,o,a,c,l=e.pos;if(e.src.charCodeAt(l)!==60)return!1;for(a=e.pos,c=e.posMax;;){if(++l>=c||(o=e.src.charCodeAt(l),o===60))return!1;if(o===62)break}return r=e.src.slice(a+1,l),X6.test(r)?(s=e.md.normalizeLink(r),e.md.validateLink(s)?(t||(i=e.push("link_open","a",1),i.attrs=[["href",s]],i.markup="autolink",i.info="auto",i=e.push("text","",0),i.content=e.md.normalizeLinkText(r),i=e.push("link_close","a",-1),i.markup="autolink",i.info="auto"),e.pos+=r.length+2,!0):!1):Y6.test(r)?(s=e.md.normalizeLink("mailto:"+r),e.md.validateLink(s)?(t||(i=e.push("link_open","a",1),i.attrs=[["href",s]],i.markup="autolink",i.info="auto",i=e.push("text","",0),i.content=e.md.normalizeLinkText(r),i=e.push("link_close","a",-1),i.markup="autolink",i.info="auto"),e.pos+=r.length+2,!0):!1):!1},Q6=Cr.HTML_TAG_RE;function eV(n){var e=n|32;return e>=97&&e<=122}var tV=function(e,t){var r,s,i,o,a=e.pos;return!e.md.options.html||(i=e.posMax,e.src.charCodeAt(a)!==60||a+2>=i)||(r=e.src.charCodeAt(a+1),r!==33&&r!==63&&r!==47&&!eV(r))||(s=e.src.slice(a).match(Q6),!s)?!1:(t||(o=e.push("html_inline","",0),o.content=e.src.slice(a,a+s[0].length)),e.pos+=s[0].length,!0)},To=Fa,nV=ne.has,rV=ne.isValidEntityCode,$o=ne.fromCodePoint,sV=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,iV=/^&([a-z][a-z0-9]{1,31});/i,oV=function(e,t){var r,s,i,o=e.pos,a=e.posMax;if(e.src.charCodeAt(o)!==38)return!1;if(o+1<a){if(r=e.src.charCodeAt(o+1),r===35){if(i=e.src.slice(o).match(sV),i)return t||(s=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),e.pending+=rV(s)?$o(s):$o(65533)),e.pos+=i[0].length,!0}else if(i=e.src.slice(o).match(iV),i&&nV(To,i[1]))return t||(e.pending+=To[i[1]]),e.pos+=i[0].length,!0}return t||(e.pending+="&"),e.pos++,!0};function Ro(n,e){var t,r,s,i,o,a,c,l,u={},h=e.length;if(!!h){var p=0,d=-2,y=[];for(t=0;t<h;t++)if(s=e[t],y.push(0),(e[p].marker!==s.marker||d!==s.token-1)&&(p=t),d=s.token,s.length=s.length||0,!!s.close){for(u.hasOwnProperty(s.marker)||(u[s.marker]=[-1,-1,-1,-1,-1,-1]),o=u[s.marker][(s.open?3:0)+s.length%3],r=p-y[p]-1,a=r;r>o;r-=y[r]+1)if(i=e[r],i.marker===s.marker&&i.open&&i.end<0&&(c=!1,(i.close||s.open)&&(i.length+s.length)%3===0&&(i.length%3!==0||s.length%3!==0)&&(c=!0),!c)){l=r>0&&!e[r-1].open?y[r-1]+1:0,y[t]=t-r+l,y[r]=l,s.open=!1,i.end=t,i.close=!1,a=-1,d=-2;break}a!==-1&&(u[s.marker][(s.open?3:0)+(s.length||0)%3]=a)}}}var aV=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(Ro(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&Ro(e,r[t].delimiters)},cV=function(e){var t,r,s=0,i=e.tokens,o=e.tokens.length;for(t=r=0;t<o;t++)i[t].nesting<0&&s--,i[t].level=s,i[t].nesting>0&&s++,i[t].type==="text"&&t+1<o&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==r&&(i[r]=i[t]),r++);t!==r&&(i.length=r)},Js=Ks,Do=ne.isWhiteSpace,Lo=ne.isPunctChar,Mo=ne.isMdAsciiPunct;function In(n,e,t,r){this.src=n,this.env=t,this.md=e,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}In.prototype.pushPending=function(){var n=new Js("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};In.prototype.push=function(n,e,t){this.pending&&this.pushPending();var r=new Js(n,e,t),s=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(s),r};In.prototype.scanDelims=function(n,e){var t=n,r,s,i,o,a,c,l,u,h,p=!0,d=!0,y=this.posMax,v=this.src.charCodeAt(n);for(r=n>0?this.src.charCodeAt(n-1):32;t<y&&this.src.charCodeAt(t)===v;)t++;return i=t-n,s=t<y?this.src.charCodeAt(t):32,l=Mo(r)||Lo(String.fromCharCode(r)),h=Mo(s)||Lo(String.fromCharCode(s)),c=Do(r),u=Do(s),u?p=!1:h&&(c||l||(p=!1)),c?d=!1:l&&(u||h||(d=!1)),e?(o=p,a=d):(o=p&&(!d||l),a=d&&(!p||h)),{can_open:o,can_close:a,length:i}};In.prototype.Token=Js;var lV=In,Oo=Zs,is=[["text",B6],["newline",H6],["escape",j6],["backticks",V6],["strikethrough",Rr.tokenize],["emphasis",Dr.tokenize],["link",W6],["image",K6],["autolink",J6],["html_inline",tV],["entity",oV]],os=[["balance_pairs",aV],["strikethrough",Rr.postProcess],["emphasis",Dr.postProcess],["text_collapse",cV]];function Pn(){var n;for(this.ruler=new Oo,n=0;n<is.length;n++)this.ruler.push(is[n][0],is[n][1]);for(this.ruler2=new Oo,n=0;n<os.length;n++)this.ruler2.push(os[n][0],os[n][1])}Pn.prototype.skipToken=function(n){var e,t,r=n.pos,s=this.ruler.getRules(""),i=s.length,o=n.md.options.maxNesting,a=n.cache;if(typeof a[r]!="undefined"){n.pos=a[r];return}if(n.level<o)for(t=0;t<i&&(n.level++,e=s[t](n,!0),n.level--,!e);t++);else n.pos=n.posMax;e||n.pos++,a[r]=n.pos};Pn.prototype.tokenize=function(n){for(var e,t,r=this.ruler.getRules(""),s=r.length,i=n.posMax,o=n.md.options.maxNesting;n.pos<i;){if(n.level<o)for(t=0;t<s&&(e=r[t](n,!1),!e);t++);if(e){if(n.pos>=i)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};Pn.prototype.parse=function(n,e,t,r){var s,i,o,a=new this.State(n,e,t,r);for(this.tokenize(a),i=this.ruler2.getRules(""),o=i.length,s=0;s<o;s++)i[s](a)};Pn.prototype.State=lV;var uV=Pn,hV=function(n){var e={};e.src_Any=Ba.source,e.src_Cc=za.source,e.src_Z=Ha.source,e.src_P=Ws.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var t="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+t+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+t+"|"+e.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]).|"+(n&&n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+").|;(?!"+e.src_ZCc+").|\\!+(?!"+e.src_ZCc+"|[!]).|\\?(?!"+e.src_ZCc+"|[?]).)+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e};function _s(n){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(t){!t||Object.keys(t).forEach(function(r){n[r]=t[r]})}),n}function Lr(n){return Object.prototype.toString.call(n)}function dV(n){return Lr(n)==="[object String]"}function pV(n){return Lr(n)==="[object Object]"}function fV(n){return Lr(n)==="[object RegExp]"}function No(n){return Lr(n)==="[object Function]"}function mV(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Ka={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function gV(n){return Object.keys(n||{}).reduce(function(e,t){return e||Ka.hasOwnProperty(t)},!1)}var bV={"http:":{validate:function(n,e,t){var r=n.slice(e);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,t){var r=n.slice(e);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,t){var r=n.slice(e);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},vV="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",yV="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function _V(n){n.__index__=-1,n.__text_cache__=""}function wV(n){return function(e,t){var r=e.slice(t);return n.test(r)?r.match(n)[0].length:0}}function Io(){return function(n,e){e.normalize(n)}}function hr(n){var e=n.re=hV(n.__opts__),t=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||t.push(vV),t.push(e.src_xn),e.src_tlds=t.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];n.__compiled__={};function i(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(n.__schemas__).forEach(function(a){var c=n.__schemas__[a];if(c!==null){var l={validate:null,link:null};if(n.__compiled__[a]=l,pV(c)){fV(c.validate)?l.validate=wV(c.validate):No(c.validate)?l.validate=c.validate:i(a,c),No(c.normalize)?l.normalize=c.normalize:c.normalize?i(a,c):l.normalize=Io();return}if(dV(c)){s.push(a);return}i(a,c)}}),s.forEach(function(a){!n.__compiled__[n.__schemas__[a]]||(n.__compiled__[a].validate=n.__compiled__[n.__schemas__[a]].validate,n.__compiled__[a].normalize=n.__compiled__[n.__schemas__[a]].normalize)}),n.__compiled__[""]={validate:null,normalize:Io()};var o=Object.keys(n.__compiled__).filter(function(a){return a.length>0&&n.__compiled__[a]}).map(mV).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","ig"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),_V(n)}function kV(n,e){var t=n.__index__,r=n.__last_index__,s=n.__text_cache__.slice(t,r);this.schema=n.__schema__.toLowerCase(),this.index=t+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function Po(n,e){var t=new kV(n,e);return n.__compiled__[t.schema].normalize(t,n),t}function qe(n,e){if(!(this instanceof qe))return new qe(n,e);e||gV(n)&&(e=n,n={}),this.__opts__=_s({},Ka,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=_s({},bV,n),this.__compiled__={},this.__tlds__=yV,this.__tlds_replaced__=!1,this.re={},hr(this)}qe.prototype.add=function(e,t){return this.__schemas__[e]=t,hr(this),this};qe.prototype.set=function(e){return this.__opts__=_s(this.__opts__,e),this};qe.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var t,r,s,i,o,a,c,l,u;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(e))!==null;)if(i=this.testSchemaAt(e,t[2],c.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,a=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};qe.prototype.pretest=function(e){return this.re.pretest.test(e)};qe.prototype.testSchemaAt=function(e,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,r,this):0};qe.prototype.match=function(e){var t=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(Po(this,t)),t=this.__last_index__);for(var s=t?e.slice(t):e;this.test(s);)r.push(Po(this,t)),s=s.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};qe.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),hr(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,hr(this),this)};qe.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};qe.prototype.onCompile=function(){};var xV=qe;const Kt=2147483647,Ye=36,Qs=1,An=26,EV=38,AV=700,Ya=72,Xa=128,Ja="-",SV=/^xn--/,CV=/[^\0-\x7E]/,TV=/[\x2E\u3002\uFF0E\uFF61]/g,$V={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},as=Ye-Qs,Xe=Math.floor,cs=String.fromCharCode;function Tt(n){throw new RangeError($V[n])}function RV(n,e){const t=[];let r=n.length;for(;r--;)t[r]=e(n[r]);return t}function Qa(n,e){const t=n.split("@");let r="";t.length>1&&(r=t[0]+"@",n=t[1]),n=n.replace(TV,".");const s=n.split("."),i=RV(s,e).join(".");return r+i}function ei(n){const e=[];let t=0;const r=n.length;for(;t<r;){const s=n.charCodeAt(t++);if(s>=55296&&s<=56319&&t<r){const i=n.charCodeAt(t++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),t--)}else e.push(s)}return e}const ec=n=>String.fromCodePoint(...n),DV=function(n){return n-48<10?n-22:n-65<26?n-65:n-97<26?n-97:Ye},qo=function(n,e){return n+22+75*(n<26)-((e!=0)<<5)},tc=function(n,e,t){let r=0;for(n=t?Xe(n/AV):n>>1,n+=Xe(n/e);n>as*An>>1;r+=Ye)n=Xe(n/as);return Xe(r+(as+1)*n/(n+EV))},ti=function(n){const e=[],t=n.length;let r=0,s=Xa,i=Ya,o=n.lastIndexOf(Ja);o<0&&(o=0);for(let a=0;a<o;++a)n.charCodeAt(a)>=128&&Tt("not-basic"),e.push(n.charCodeAt(a));for(let a=o>0?o+1:0;a<t;){let c=r;for(let u=1,h=Ye;;h+=Ye){a>=t&&Tt("invalid-input");const p=DV(n.charCodeAt(a++));(p>=Ye||p>Xe((Kt-r)/u))&&Tt("overflow"),r+=p*u;const d=h<=i?Qs:h>=i+An?An:h-i;if(p<d)break;const y=Ye-d;u>Xe(Kt/y)&&Tt("overflow"),u*=y}const l=e.length+1;i=tc(r-c,l,c==0),Xe(r/l)>Kt-s&&Tt("overflow"),s+=Xe(r/l),r%=l,e.splice(r++,0,s)}return String.fromCodePoint(...e)},ni=function(n){const e=[];n=ei(n);let t=n.length,r=Xa,s=0,i=Ya;for(const c of n)c<128&&e.push(cs(c));let o=e.length,a=o;for(o&&e.push(Ja);a<t;){let c=Kt;for(const u of n)u>=r&&u<c&&(c=u);const l=a+1;c-r>Xe((Kt-s)/l)&&Tt("overflow"),s+=(c-r)*l,r=c;for(const u of n)if(u<r&&++s>Kt&&Tt("overflow"),u==r){let h=s;for(let p=Ye;;p+=Ye){const d=p<=i?Qs:p>=i+An?An:p-i;if(h<d)break;const y=h-d,v=Ye-d;e.push(cs(qo(d+y%v,0))),h=Xe(y/v)}e.push(cs(qo(h,0))),i=tc(s,l,a==o),s=0,++a}++s,++r}return e.join("")},nc=function(n){return Qa(n,function(e){return SV.test(e)?ti(e.slice(4).toLowerCase()):e})},rc=function(n){return Qa(n,function(e){return CV.test(e)?"xn--"+ni(e):e})},LV={version:"2.1.0",ucs2:{decode:ei,encode:ec},decode:ti,encode:ni,toASCII:rc,toUnicode:nc};var MV=Object.freeze(Object.defineProperty({__proto__:null,ucs2decode:ei,ucs2encode:ec,decode:ti,encode:ni,toASCII:rc,toUnicode:nc,default:LV},Symbol.toStringTag,{value:"Module"})),OV=Kh(MV),NV={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},IV={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},PV={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}},_n=ne,qV=Sr,FV=P4,BV=o6,zV=q6,HV=uV,UV=xV,$t=on,sc=OV,jV={default:NV,zero:IV,commonmark:PV},VV=/^(vbscript|javascript|file|data):/,GV=/^data:image\/(gif|png|jpeg|webp);/;function WV(n){var e=n.trim().toLowerCase();return VV.test(e)?!!GV.test(e):!0}var ic=["http:","https:","mailto:"];function ZV(n){var e=$t.parse(n,!0);if(e.hostname&&(!e.protocol||ic.indexOf(e.protocol)>=0))try{e.hostname=sc.toASCII(e.hostname)}catch{}return $t.encode($t.format(e))}function KV(n){var e=$t.parse(n,!0);if(e.hostname&&(!e.protocol||ic.indexOf(e.protocol)>=0))try{e.hostname=sc.toUnicode(e.hostname)}catch{}return $t.decode($t.format(e),$t.decode.defaultChars+"%")}function Fe(n,e){if(!(this instanceof Fe))return new Fe(n,e);e||_n.isString(n)||(e=n||{},n="default"),this.inline=new HV,this.block=new zV,this.core=new BV,this.renderer=new FV,this.linkify=new UV,this.validateLink=WV,this.normalizeLink=ZV,this.normalizeLinkText=KV,this.utils=_n,this.helpers=_n.assign({},qV),this.options={},this.configure(n),e&&this.set(e)}Fe.prototype.set=function(n){return _n.assign(this.options,n),this};Fe.prototype.configure=function(n){var e=this,t;if(_n.isString(n)&&(t=n,n=jV[t],!n))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(r){n.components[r].rules&&e[r].ruler.enableOnly(n.components[r].rules),n.components[r].rules2&&e[r].ruler2.enableOnly(n.components[r].rules2)}),this};Fe.prototype.enable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(s){t=t.concat(this[s].ruler.enable(n,!0))},this),t=t.concat(this.inline.ruler2.enable(n,!0));var r=n.filter(function(s){return t.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Fe.prototype.disable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(s){t=t.concat(this[s].ruler.disable(n,!0))},this),t=t.concat(this.inline.ruler2.disable(n,!0));var r=n.filter(function(s){return t.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Fe.prototype.use=function(n){var e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};Fe.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");var t=new this.core.State(n,this,e);return this.core.process(t),t.tokens};Fe.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};Fe.prototype.parseInline=function(n,e){var t=new this.core.State(n,this,e);return t.inlineMode=!0,this.core.process(t),t.tokens};Fe.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};var YV=Fe,XV=YV,ri={exports:{}};function si(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var t=n[e];typeof t=="object"&&!Object.isFrozen(t)&&si(t)}),n}ri.exports=si;ri.exports.default=si;var JV=ri.exports;class Fo{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function oc(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function mt(n,...e){const t=Object.create(null);for(const r in n)t[r]=n[r];return e.forEach(function(r){for(const s in r)t[s]=r[s]}),t}const QV="</span>",Bo=n=>!!n.kind,e7=(n,{prefix:e})=>{if(n.includes(".")){const t=n.split(".");return[`${e}${t.shift()}`,...t.map((r,s)=>`${r}${"_".repeat(s+1)}`)].join(" ")}return`${e}${n}`};class t7{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=oc(e)}openNode(e){if(!Bo(e))return;let t=e.kind;e.sublanguage?t=`language-${t}`:t=e7(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){!Bo(e)||(this.buffer+=QV)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class ii{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(r=>this._walk(e,r)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&(!e.children||(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{ii._collapse(t)})))}}class n7 extends ii{constructor(e){super();this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const r=e.root;r.kind=t,r.sublanguage=!0,this.add(r)}toHTML(){return new t7(this,this.options).value()}finalize(){return!0}}function Sn(n){return n?typeof n=="string"?n:n.source:null}function ac(n){return It("(?=",n,")")}function r7(n){return It("(?:",n,")*")}function s7(n){return It("(?:",n,")?")}function It(...n){return n.map(t=>Sn(t)).join("")}function i7(n){const e=n[n.length-1];return typeof e=="object"&&e.constructor===Object?(n.splice(n.length-1,1),e):{}}function oi(...n){const e=i7(n);return"("+(e.capture?"":"?:")+n.map(r=>Sn(r)).join("|")+")"}function cc(n){return new RegExp(n.toString()+"|").exec("").length-1}function o7(n,e){const t=n&&n.exec(e);return t&&t.index===0}const a7=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ai(n,{joinWith:e}){let t=0;return n.map(r=>{t+=1;const s=t;let i=Sn(r),o="";for(;i.length>0;){const a=a7.exec(i);if(!a){o+=i;break}o+=i.substring(0,a.index),i=i.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+s):(o+=a[0],a[0]==="("&&t++)}return o}).map(r=>`(${r})`).join(e)}const c7=/\b\B/,lc="[a-zA-Z]\\w*",ci="[a-zA-Z_]\\w*",uc="\\b\\d+(\\.\\d+)?",hc="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",dc="\\b(0b[01]+)",l7="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",u7=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=It(e,/.*\b/,n.binary,/\b.*/)),mt({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,r)=>{t.index!==0&&r.ignoreMatch()}},n)},Cn={begin:"\\\\[\\s\\S]",relevance:0},h7={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Cn]},d7={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Cn]},p7={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Mr=function(n,e,t={}){const r=mt({scope:"comment",begin:n,end:e,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=oi("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:It(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},f7=Mr("//","$"),m7=Mr("/\\*","\\*/"),g7=Mr("#","$"),b7={scope:"number",begin:uc,relevance:0},v7={scope:"number",begin:hc,relevance:0},y7={scope:"number",begin:dc,relevance:0},_7={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Cn,{begin:/\[/,end:/\]/,relevance:0,contains:[Cn]}]}]},w7={scope:"title",begin:lc,relevance:0},k7={scope:"title",begin:ci,relevance:0},x7={begin:"\\.\\s*"+ci,relevance:0},E7=function(n){return Object.assign(n,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var Qn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:c7,IDENT_RE:lc,UNDERSCORE_IDENT_RE:ci,NUMBER_RE:uc,C_NUMBER_RE:hc,BINARY_NUMBER_RE:dc,RE_STARTERS_RE:l7,SHEBANG:u7,BACKSLASH_ESCAPE:Cn,APOS_STRING_MODE:h7,QUOTE_STRING_MODE:d7,PHRASAL_WORDS_MODE:p7,COMMENT:Mr,C_LINE_COMMENT_MODE:f7,C_BLOCK_COMMENT_MODE:m7,HASH_COMMENT_MODE:g7,NUMBER_MODE:b7,C_NUMBER_MODE:v7,BINARY_NUMBER_MODE:y7,REGEXP_MODE:_7,TITLE_MODE:w7,UNDERSCORE_TITLE_MODE:k7,METHOD_GUARD:x7,END_SAME_AS_BEGIN:E7});function A7(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function S7(n,e){n.className!==void 0&&(n.scope=n.className,delete n.className)}function C7(n,e){!e||!n.beginKeywords||(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=A7,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function T7(n,e){!Array.isArray(n.illegal)||(n.illegal=oi(...n.illegal))}function $7(n,e){if(!!n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function R7(n,e){n.relevance===void 0&&(n.relevance=1)}const D7=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(r=>{delete n[r]}),n.keywords=t.keywords,n.begin=It(t.beforeMatch,ac(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},L7=["of","and","for","in","not","or","if","then","parent","list","value"],M7="keyword";function pc(n,e,t=M7){const r=Object.create(null);return typeof n=="string"?s(t,n.split(" ")):Array.isArray(n)?s(t,n):Object.keys(n).forEach(function(i){Object.assign(r,pc(n[i],e,i))}),r;function s(i,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");r[c[0]]=[i,O7(c[0],c[1])]})}}function O7(n,e){return e?Number(e):N7(n)?0:1}function N7(n){return L7.includes(n.toLowerCase())}const zo={},Dt=n=>{console.error(n)},Ho=(n,...e)=>{console.log(`WARN: ${n}`,...e)},jt=(n,e)=>{zo[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),zo[`${n}/${e}`]=!0)},dr=new Error;function fc(n,e,{key:t}){let r=0;const s=n[t],i={},o={};for(let a=1;a<=e.length;a++)o[a+r]=s[a],i[a+r]=!0,r+=cc(e[a-1]);n[t]=o,n[t]._emit=i,n[t]._multi=!0}function I7(n){if(!!Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw Dt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),dr;if(typeof n.beginScope!="object"||n.beginScope===null)throw Dt("beginScope must be object"),dr;fc(n,n.begin,{key:"beginScope"}),n.begin=ai(n.begin,{joinWith:""})}}function P7(n){if(!!Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw Dt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),dr;if(typeof n.endScope!="object"||n.endScope===null)throw Dt("endScope must be object"),dr;fc(n,n.end,{key:"endScope"}),n.end=ai(n.end,{joinWith:""})}}function q7(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function F7(n){q7(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),I7(n),P7(n)}function B7(n){function e(o,a){return new RegExp(Sn(o),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(a?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=cc(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(ai(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const l=c.findIndex((h,p)=>p>0&&h!==void 0),u=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,u)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new t;return this.rules.slice(a).forEach(([l,u])=>c.addRule(l,u)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(a);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,l=u.exec(a)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function s(o){const a=new r;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function i(o,a){const c=o;if(o.isCompiled)return c;[S7,$7,F7,D7].forEach(u=>u(o,a)),n.compilerExtensions.forEach(u=>u(o,a)),o.__beforeBegin=null,[C7,T7,R7].forEach(u=>u(o,a)),o.isCompiled=!0;let l=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),l=o.keywords.$pattern,delete o.keywords.$pattern),l=l||/\w+/,o.keywords&&(o.keywords=pc(o.keywords,n.case_insensitive)),c.keywordPatternRe=e(l,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=Sn(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(u){return z7(u==="self"?o:u)})),o.contains.forEach(function(u){i(u,c)}),o.starts&&i(o.starts,a),c.matcher=s(c),c}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=mt(n.classNameAliases||{}),i(n)}function mc(n){return n?n.endsWithParent||mc(n.starts):!1}function z7(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return mt(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:mc(n)?mt(n,{starts:n.starts?mt(n.starts):null}):Object.isFrozen(n)?mt(n):n}var H7="11.5.1";class U7 extends Error{constructor(e,t){super(e);this.name="HTMLInjectionError",this.html=t}}const ls=oc,Uo=mt,jo=Symbol("nomatch"),j7=7,V7=function(n){const e=Object.create(null),t=Object.create(null),r=[];let s=!0;const i="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:n7};function c(f){return a.noHighlightRe.test(f)}function l(f){let m=f.className+" ";m+=f.parentNode?f.parentNode.className:"";const E=a.languageDetectRe.exec(m);if(E){const C=j(E[1]);return C||(Ho(i.replace("{}",E[1])),Ho("Falling back to no-highlight mode for this block.",f)),C?E[1]:"no-highlight"}return m.split(/\s+/).find(C=>c(C)||j(C))}function u(f,m,E){let C="",O="";typeof m=="object"?(C=f,E=m.ignoreIllegals,O=m.language):(jt("10.7.0","highlight(lang, code, ...args) has been deprecated."),jt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),O=f,C=m),E===void 0&&(E=!0);const q={code:C,language:O};b("before:highlight",q);const Z=q.result?q.result:h(q.language,q.code,E);return Z.code=q.code,b("after:highlight",Z),Z}function h(f,m,E,C){const O=Object.create(null);function q(L,B){return L.keywords[B]}function Z(){if(!V.keywords){ue.addText(te);return}let L=0;V.keywordPatternRe.lastIndex=0;let B=V.keywordPatternRe.exec(te),Y="";for(;B;){Y+=te.substring(L,B.index);const ee=Ne.case_insensitive?B[0].toLowerCase():B[0],fe=q(V,ee);if(fe){const[me,Bt]=fe;if(ue.addText(Y),Y="",O[ee]=(O[ee]||0)+1,O[ee]<=j7&&(He+=Bt),me.startsWith("_"))Y+=B[0];else{const dn=Ne.classNameAliases[me]||me;ue.addKeyword(B[0],dn)}}else Y+=B[0];L=V.keywordPatternRe.lastIndex,B=V.keywordPatternRe.exec(te)}Y+=te.substr(L),ue.addText(Y)}function W(){if(te==="")return;let L=null;if(typeof V.subLanguage=="string"){if(!e[V.subLanguage]){ue.addText(te);return}L=h(V.subLanguage,te,!0,hn[V.subLanguage]),hn[V.subLanguage]=L._top}else L=d(te,V.subLanguage.length?V.subLanguage:null);V.relevance>0&&(He+=L.relevance),ue.addSublanguage(L._emitter,L.language)}function re(){V.subLanguage!=null?W():Z(),te=""}function J(L,B){let Y=1;const ee=B.length-1;for(;Y<=ee;){if(!L._emit[Y]){Y++;continue}const fe=Ne.classNameAliases[L[Y]]||L[Y],me=B[Y];fe?ue.addKeyword(me,fe):(te=me,Z(),te=""),Y++}}function Se(L,B){return L.scope&&typeof L.scope=="string"&&ue.openNode(Ne.classNameAliases[L.scope]||L.scope),L.beginScope&&(L.beginScope._wrap?(ue.addKeyword(te,Ne.classNameAliases[L.beginScope._wrap]||L.beginScope._wrap),te=""):L.beginScope._multi&&(J(L.beginScope,B),te="")),V=Object.create(L,{parent:{value:V}}),V}function Me(L,B,Y){let ee=o7(L.endRe,Y);if(ee){if(L["on:end"]){const fe=new Fo(L);L["on:end"](B,fe),fe.isMatchIgnored&&(ee=!1)}if(ee){for(;L.endsParent&&L.parent;)L=L.parent;return L}}if(L.endsWithParent)return Me(L.parent,B,Y)}function ze(L){return V.matcher.regexIndex===0?(te+=L[0],1):(Ft=!0,0)}function pe(L){const B=L[0],Y=L.rule,ee=new Fo(Y),fe=[Y.__beforeBegin,Y["on:begin"]];for(const me of fe)if(!!me&&(me(L,ee),ee.isMatchIgnored))return ze(B);return Y.skip?te+=B:(Y.excludeBegin&&(te+=B),re(),!Y.returnBegin&&!Y.excludeBegin&&(te=B)),Se(Y,L),Y.returnBegin?0:B.length}function De(L){const B=L[0],Y=m.substr(L.index),ee=Me(V,L,Y);if(!ee)return jo;const fe=V;V.endScope&&V.endScope._wrap?(re(),ue.addKeyword(B,V.endScope._wrap)):V.endScope&&V.endScope._multi?(re(),J(V.endScope,L)):fe.skip?te+=B:(fe.returnEnd||fe.excludeEnd||(te+=B),re(),fe.excludeEnd&&(te=B));do V.scope&&ue.closeNode(),!V.skip&&!V.subLanguage&&(He+=V.relevance),V=V.parent;while(V!==ee.parent);return ee.starts&&Se(ee.starts,L),fe.returnEnd?0:B.length}function Oe(){const L=[];for(let B=V;B!==Ne;B=B.parent)B.scope&&L.unshift(B.scope);L.forEach(B=>ue.openNode(B))}let be={};function Pt(L,B){const Y=B&&B[0];if(te+=L,Y==null)return re(),0;if(be.type==="begin"&&B.type==="end"&&be.index===B.index&&Y===""){if(te+=m.slice(B.index,B.index+1),!s){const ee=new Error(`0 width match regex (${f})`);throw ee.languageName=f,ee.badRule=be.rule,ee}return 1}if(be=B,B.type==="begin")return pe(B);if(B.type==="illegal"&&!E){const ee=new Error('Illegal lexeme "'+Y+'" for mode "'+(V.scope||"<unnamed>")+'"');throw ee.mode=V,ee}else if(B.type==="end"){const ee=De(B);if(ee!==jo)return ee}if(B.type==="illegal"&&Y==="")return 1;if(qt>1e5&&qt>B.index*3)throw new Error("potential infinite loop, way more iterations than matches");return te+=Y,Y.length}const Ne=j(f);if(!Ne)throw Dt(i.replace("{}",f)),new Error('Unknown language: "'+f+'"');const ut=B7(Ne);let ht="",V=C||ut;const hn={},ue=new a.__emitter(a);Oe();let te="",He=0,Ce=0,qt=0,Ft=!1;try{for(V.matcher.considerAll();;){qt++,Ft?Ft=!1:V.matcher.considerAll(),V.matcher.lastIndex=Ce;const L=V.matcher.exec(m);if(!L)break;const B=m.substring(Ce,L.index),Y=Pt(B,L);Ce=L.index+Y}return Pt(m.substr(Ce)),ue.closeAllNodes(),ue.finalize(),ht=ue.toHTML(),{language:f,value:ht,relevance:He,illegal:!1,_emitter:ue,_top:V}}catch(L){if(L.message&&L.message.includes("Illegal"))return{language:f,value:ls(m),illegal:!0,relevance:0,_illegalBy:{message:L.message,index:Ce,context:m.slice(Ce-100,Ce+100),mode:L.mode,resultSoFar:ht},_emitter:ue};if(s)return{language:f,value:ls(m),illegal:!1,relevance:0,errorRaised:L,_emitter:ue,_top:V};throw L}}function p(f){const m={value:ls(f),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return m._emitter.addText(f),m}function d(f,m){m=m||a.languages||Object.keys(e);const E=p(f),C=m.filter(j).filter(X).map(re=>h(re,f,!1));C.unshift(E);const O=C.sort((re,J)=>{if(re.relevance!==J.relevance)return J.relevance-re.relevance;if(re.language&&J.language){if(j(re.language).supersetOf===J.language)return 1;if(j(J.language).supersetOf===re.language)return-1}return 0}),[q,Z]=O,W=q;return W.secondBest=Z,W}function y(f,m,E){const C=m&&t[m]||E;f.classList.add("hljs"),f.classList.add(`language-${C}`)}function v(f){let m=null;const E=l(f);if(c(E))return;if(b("before:highlightElement",{el:f,language:E}),f.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(f)),a.throwUnescapedHTML))throw new U7("One of your code blocks includes unescaped HTML.",f.innerHTML);m=f;const C=m.textContent,O=E?u(C,{language:E,ignoreIllegals:!0}):d(C);f.innerHTML=O.value,y(f,E,O.language),f.result={language:O.language,re:O.relevance,relevance:O.relevance},O.secondBest&&(f.secondBest={language:O.secondBest.language,relevance:O.secondBest.relevance}),b("after:highlightElement",{el:f,result:O,text:C})}function A(f){a=Uo(a,f)}const k=()=>{R(),jt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function _(){R(),jt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let w=!1;function R(){if(document.readyState==="loading"){w=!0;return}document.querySelectorAll(a.cssSelector).forEach(v)}function $(){w&&R()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",$,!1);function x(f,m){let E=null;try{E=m(n)}catch(C){if(Dt("Language definition for '{}' could not be registered.".replace("{}",f)),s)Dt(C);else throw C;E=o}E.name||(E.name=f),e[f]=E,E.rawDefinition=m.bind(null,n),E.aliases&&D(E.aliases,{languageName:f})}function F(f){delete e[f];for(const m of Object.keys(t))t[m]===f&&delete t[m]}function G(){return Object.keys(e)}function j(f){return f=(f||"").toLowerCase(),e[f]||e[t[f]]}function D(f,{languageName:m}){typeof f=="string"&&(f=[f]),f.forEach(E=>{t[E.toLowerCase()]=m})}function X(f){const m=j(f);return m&&!m.disableAutodetect}function ce(f){f["before:highlightBlock"]&&!f["before:highlightElement"]&&(f["before:highlightElement"]=m=>{f["before:highlightBlock"](Object.assign({block:m.el},m))}),f["after:highlightBlock"]&&!f["after:highlightElement"]&&(f["after:highlightElement"]=m=>{f["after:highlightBlock"](Object.assign({block:m.el},m))})}function M(f){ce(f),r.push(f)}function b(f,m){const E=f;r.forEach(function(C){C[E]&&C[E](m)})}function S(f){return jt("10.7.0","highlightBlock will be removed entirely in v12.0"),jt("10.7.0","Please use highlightElement now."),v(f)}Object.assign(n,{highlight:u,highlightAuto:d,highlightAll:R,highlightElement:v,highlightBlock:S,configure:A,initHighlighting:k,initHighlightingOnLoad:_,registerLanguage:x,unregisterLanguage:F,listLanguages:G,getLanguage:j,registerAliases:D,autoDetection:X,inherit:Uo,addPlugin:M}),n.debugMode=function(){s=!1},n.safeMode=function(){s=!0},n.versionString=H7,n.regex={concat:It,lookahead:ac,either:oi,optional:s7,anyNumberOfTimes:r7};for(const f in Qn)typeof Qn[f]=="object"&&JV(Qn[f]);return Object.assign(n,Qn),n};var Tn=V7({}),G7=Tn;Tn.HighlightJS=Tn;Tn.default=Tn;var W7=G7;function Z7(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var r=Array.from(typeof n=="string"?[n]:n);r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");var s=r.reduce(function(a,c){var l=c.match(/\n([\t ]+|(?!\s).)/g);return l?a.concat(l.map(function(u){var h,p;return(p=(h=u.match(/[\t ]/g))===null||h===void 0?void 0:h.length)!==null&&p!==void 0?p:0})):a},[]);if(s.length){var i=new RegExp(`
[	 ]{`+Math.min.apply(Math,s)+"}","g");r=r.map(function(a){return a.replace(i,`
`)})}r[0]=r[0].replace(/^\r?\n/,"");var o=r[0];return e.forEach(function(a,c){var l=o.match(/(?:^|\n)( *)$/),u=l?l[1]:"",h=a;typeof a=="string"&&a.includes(`
`)&&(h=String(a).split(`
`).map(function(p,d){return d===0?p:""+u+p}).join(`
`)),o+=h+r[c+1]}),o}const K7=he`
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
`;var Y7=Object.defineProperty,X7=Object.getOwnPropertyDescriptor,gc=(n,e,t,r)=>{for(var s=r>1?void 0:r?X7(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Y7(e,t,s),s};let de=class extends le{static registerHighlightStyle(n){de.hightlightStyle=n}static registerHighlightLanguage(n,e){de.hljs.registerLanguage(n,e)}static use(n){this.plugins.push(n)}constructor(){super();this.content="",this.parser=new XV({highlight:this.setupHighlight.bind(this)}),de.plugins.forEach(n=>this.parser.use(n))}isScriptMarkdown(n){return n instanceof HTMLScriptElement&&n.type==="text/markdown"}setupHighlight(n,e){if(e&&de.hljs.getLanguage(e))try{return`<pre class="hljs"><code class="hljs__code">${this.renderHighlight(n,e)}</code></pre>`}catch{return""}return`<pre><code>${this.parser.utils.escapeHtml(n)}</code></pre>`}registerMarkdown(){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");if(!n||this.observer)return;const t=n.assignedNodes({flatten:!0}).find(this.isScriptMarkdown.bind(this));!t||(this.observer=new MutationObserver(()=>this.updateMarkdown(t)),this.observer.observe(t,{childList:!0}),this.updateMarkdown(t))}updateMarkdown(n){const e=n.innerText.replace(/&lt;(\/?script)(.*?)&gt;/g,"<$1$2>");this.content=Z7(e.trim())}renderHighlight(n,e){const{value:t}=de.hljs.highlight(n,{language:e,ignoreIllegals:!0});return t}render(){return P`
      <style>
        ${ra(de.hightlightStyle)}
      </style>
      <slot style="display: none" @slotchange=${this.registerMarkdown}></slot>
      <article>
        ${En(this.parser.render(this.content))}
      </article>
    `}};de.styles=K7;de.plugins=[];de.hljs=W7;de.hightlightStyle="";gc([_t()],de.prototype,"content",2);de=gc([we("kami-markdown")],de);var $n=(n=>(n.GITHUB="github",n.GITLAB="gitlab",n))($n||{}),bc={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Zh,function(){var t=1e3,r=6e4,s=36e5,i="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",p="quarter",d="year",y="date",v="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,k=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},w=function(M,b,S){var f=String(M);return!f||f.length>=b?M:""+Array(b+1-f.length).join(S)+M},R={s:w,z:function(M){var b=-M.utcOffset(),S=Math.abs(b),f=Math.floor(S/60),m=S%60;return(b<=0?"+":"-")+w(f,2,"0")+":"+w(m,2,"0")},m:function M(b,S){if(b.date()<S.date())return-M(S,b);var f=12*(S.year()-b.year())+(S.month()-b.month()),m=b.clone().add(f,h),E=S-m<0,C=b.clone().add(f+(E?-1:1),h);return+(-(f+(S-m)/(E?m-C:C-m))||0)},a:function(M){return M<0?Math.ceil(M)||0:Math.floor(M)},p:function(M){return{M:h,y:d,w:u,d:l,D:y,h:c,m:a,s:o,ms:i,Q:p}[M]||String(M||"").toLowerCase().replace(/s$/,"")},u:function(M){return M===void 0}},$="en",x={};x[$]=_;var F=function(M){return M instanceof X},G=function M(b,S,f){var m;if(!b)return $;if(typeof b=="string"){var E=b.toLowerCase();x[E]&&(m=E),S&&(x[E]=S,m=E);var C=b.split("-");if(!m&&C.length>1)return M(C[0])}else{var O=b.name;x[O]=b,m=O}return!f&&m&&($=m),m||!f&&$},j=function(M,b){if(F(M))return M.clone();var S=typeof b=="object"?b:{};return S.date=M,S.args=arguments,new X(S)},D=R;D.l=G,D.i=F,D.w=function(M,b){return j(M,{locale:b.$L,utc:b.$u,x:b.$x,$offset:b.$offset})};var X=function(){function M(S){this.$L=G(S.locale,null,!0),this.parse(S)}var b=M.prototype;return b.parse=function(S){this.$d=function(f){var m=f.date,E=f.utc;if(m===null)return new Date(NaN);if(D.u(m))return new Date;if(m instanceof Date)return new Date(m);if(typeof m=="string"&&!/Z$/i.test(m)){var C=m.match(A);if(C){var O=C[2]-1||0,q=(C[7]||"0").substring(0,3);return E?new Date(Date.UTC(C[1],O,C[3]||1,C[4]||0,C[5]||0,C[6]||0,q)):new Date(C[1],O,C[3]||1,C[4]||0,C[5]||0,C[6]||0,q)}}return new Date(m)}(S),this.$x=S.x||{},this.init()},b.init=function(){var S=this.$d;this.$y=S.getFullYear(),this.$M=S.getMonth(),this.$D=S.getDate(),this.$W=S.getDay(),this.$H=S.getHours(),this.$m=S.getMinutes(),this.$s=S.getSeconds(),this.$ms=S.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return this.$d.toString()!==v},b.isSame=function(S,f){var m=j(S);return this.startOf(f)<=m&&m<=this.endOf(f)},b.isAfter=function(S,f){return j(S)<this.startOf(f)},b.isBefore=function(S,f){return this.endOf(f)<j(S)},b.$g=function(S,f,m){return D.u(S)?this[f]:this.set(m,S)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(S,f){var m=this,E=!!D.u(f)||f,C=D.p(S),O=function(ze,pe){var De=D.w(m.$u?Date.UTC(m.$y,pe,ze):new Date(m.$y,pe,ze),m);return E?De:De.endOf(l)},q=function(ze,pe){return D.w(m.toDate()[ze].apply(m.toDate("s"),(E?[0,0,0,0]:[23,59,59,999]).slice(pe)),m)},Z=this.$W,W=this.$M,re=this.$D,J="set"+(this.$u?"UTC":"");switch(C){case d:return E?O(1,0):O(31,11);case h:return E?O(1,W):O(0,W+1);case u:var Se=this.$locale().weekStart||0,Me=(Z<Se?Z+7:Z)-Se;return O(E?re-Me:re+(6-Me),W);case l:case y:return q(J+"Hours",0);case c:return q(J+"Minutes",1);case a:return q(J+"Seconds",2);case o:return q(J+"Milliseconds",3);default:return this.clone()}},b.endOf=function(S){return this.startOf(S,!1)},b.$set=function(S,f){var m,E=D.p(S),C="set"+(this.$u?"UTC":""),O=(m={},m[l]=C+"Date",m[y]=C+"Date",m[h]=C+"Month",m[d]=C+"FullYear",m[c]=C+"Hours",m[a]=C+"Minutes",m[o]=C+"Seconds",m[i]=C+"Milliseconds",m)[E],q=E===l?this.$D+(f-this.$W):f;if(E===h||E===d){var Z=this.clone().set(y,1);Z.$d[O](q),Z.init(),this.$d=Z.set(y,Math.min(this.$D,Z.daysInMonth())).$d}else O&&this.$d[O](q);return this.init(),this},b.set=function(S,f){return this.clone().$set(S,f)},b.get=function(S){return this[D.p(S)]()},b.add=function(S,f){var m,E=this;S=Number(S);var C=D.p(f),O=function(W){var re=j(E);return D.w(re.date(re.date()+Math.round(W*S)),E)};if(C===h)return this.set(h,this.$M+S);if(C===d)return this.set(d,this.$y+S);if(C===l)return O(1);if(C===u)return O(7);var q=(m={},m[a]=r,m[c]=s,m[o]=t,m)[C]||1,Z=this.$d.getTime()+S*q;return D.w(Z,this)},b.subtract=function(S,f){return this.add(-1*S,f)},b.format=function(S){var f=this,m=this.$locale();if(!this.isValid())return m.invalidDate||v;var E=S||"YYYY-MM-DDTHH:mm:ssZ",C=D.z(this),O=this.$H,q=this.$m,Z=this.$M,W=m.weekdays,re=m.months,J=function(pe,De,Oe,be){return pe&&(pe[De]||pe(f,E))||Oe[De].substr(0,be)},Se=function(pe){return D.s(O%12||12,pe,"0")},Me=m.meridiem||function(pe,De,Oe){var be=pe<12?"AM":"PM";return Oe?be.toLowerCase():be},ze={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Z+1,MM:D.s(Z+1,2,"0"),MMM:J(m.monthsShort,Z,re,3),MMMM:J(re,Z),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:J(m.weekdaysMin,this.$W,W,2),ddd:J(m.weekdaysShort,this.$W,W,3),dddd:W[this.$W],H:String(O),HH:D.s(O,2,"0"),h:Se(1),hh:Se(2),a:Me(O,q,!0),A:Me(O,q,!1),m:String(q),mm:D.s(q,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:C};return E.replace(k,function(pe,De){return De||ze[pe]||C.replace(":","")})},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(S,f,m){var E,C=D.p(f),O=j(S),q=(O.utcOffset()-this.utcOffset())*r,Z=this-O,W=D.m(this,O);return W=(E={},E[d]=W/12,E[h]=W,E[p]=W/3,E[u]=(Z-q)/6048e5,E[l]=(Z-q)/864e5,E[c]=Z/s,E[a]=Z/r,E[o]=Z/t,E)[C]||Z,m?W:D.a(W)},b.daysInMonth=function(){return this.endOf(h).$D},b.$locale=function(){return x[this.$L]},b.locale=function(S,f){if(!S)return this.$L;var m=this.clone(),E=G(S,f,!0);return E&&(m.$L=E),m},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},M}(),ce=X.prototype;return j.prototype=ce,[["$ms",i],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",d],["$D",y]].forEach(function(M){ce[M[1]]=function(b){return this.$g(b,M[0],M[1])}}),j.extend=function(M,b){return M.$i||(M(b,X,j),M.$i=!0),j},j.locale=G,j.isDayjs=F,j.unix=function(M){return j(1e3*M)},j.en=x[$],j.Ls=x,j.p={},j})})(bc);var pr=bc.exports;class vc{constructor(e){this.data=e}}class J7 extends vc{get provider(){return $n.GITHUB}getContent(){return Array.isArray(this.data)?this.data.reduce((e,{body:t})=>e+t,""):this.data.body}getDate(){var e;return Array.isArray(this.data)?pr((e=this.data.pop())==null?void 0:e.published_at).toDate():pr(this.data.published_at).toDate()}}class Q7 extends vc{get provider(){return $n.GITLAB}getContent(){return Array.isArray(this.data)?this.data.reduce((e,{description:t})=>e+t,""):this.data.description}getDate(){var e;return Array.isArray(this.data)?pr((e=this.data.pop())==null?void 0:e.released_at).toDate():pr(this.data.released_at).toDate()}}function e8(n,e){switch(n){case $n.GITHUB:return new J7(e);case $n.GITLAB:return new Q7(e);default:throw new TypeError("Provider doesn't exist or is not define !")}}var Vo=Object.freeze,yc=Object.defineProperty,t8=Object.getOwnPropertyDescriptor,un=(n,e,t,r)=>{for(var s=r>1?void 0:r?t8(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&yc(e,t,s),s},n8=(n,e)=>Vo(yc(n,"raw",{value:Vo(e||n.slice())})),Go;customElements.get("kami-markdown")||customElements.define("kami-markdown",de);customElements.get("kami-transition")||customElements.define("kami-transition",Le);let yt=class extends le{constructor(){super(...arguments);this.display=!1}get hasRelease(){return this.release&&this.release.getContent()!==void 0&&this.release.getContent()!==""}async connectedCallback(){if(super.connectedCallback(),!this.src)throw new Error("Missing src attribute !");if(!this.provider)throw new Error("Missing provider attribute !");const e=await(await fetch(this.src)).json();this.release=e8(this.provider,e)}toggleDisplay(){this.display=!this.display}releaseTemplate(n){return P(Go||(Go=n8([`
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
    `])),this.header||"kami-changelog",n==null?void 0:n.getContent())}btnTemplate(n){return P`
      <svg @click=${this.toggleDisplay} class="kami-changelog__btn" viewBox="0 0 24 25">
        <path d=${n}></path>
      </svg>
    `}render(){return P`
      <kami-transition transition="slide-y"  show="${this.hasRelease}">
        <div class="kami-changelog">
          <kami-transition transition="slide-y" duration="200" show="${this.display}">
            ${this.releaseTemplate(this.release)}
          </kami-transition>
          <kami-transition transition="fade" duration="250" easing="linear" show="${this.display}">
            <div slot="in">${this.btnTemplate(qa)}</div>
            <div slot="out">${this.btnTemplate(jh)}</div>
          </kami-transition>
        </div>
      </kami-transition>
    `}};yt.styles=he`
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
  `;un([U()],yt.prototype,"src",2);un([U()],yt.prototype,"provider",2);un([U()],yt.prototype,"header",2);un([_t()],yt.prototype,"release",2);un([_t()],yt.prototype,"display",2);yt=un([we("kami-changelog")],yt);(function(){if(window.Reflect===void 0||window.customElements===void 0||window.customElements.polyfillWrapFlushCallback)return;const n=HTMLElement,e={HTMLElement:function(){return Reflect.construct(n,[],this.constructor)}};window.HTMLElement=e.HTMLElement,HTMLElement.prototype=n.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,n)})();(function(n){if(typeof n.requestSubmit=="function")return;n.requestSubmit=function(r){r?(e(r,this),r.click()):(r=document.createElement("input"),r.type="submit",r.hidden=!0,this.appendChild(r),r.click(),this.removeChild(r))};function e(r,s){r instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),r.type=="submit"||t(TypeError,"The specified element is not a submit button"),r.form==s||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}function t(r,s,i){throw new r("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+s+".",i)}})(HTMLFormElement.prototype);const _c=new WeakMap;function r8(n){const e=n instanceof Element?n:n instanceof Node?n.parentElement:null,t=e?e.closest("input, button"):null;return(t==null?void 0:t.type)=="submit"?t:null}function s8(n){const e=r8(n.target);e&&e.form&&_c.set(e.form,e)}(function(){if("submitter"in Event.prototype)return;let n;if("SubmitEvent"in window&&/Apple Computer/.test(navigator.vendor))n=window.SubmitEvent.prototype;else{if("SubmitEvent"in window)return;n=window.Event.prototype}addEventListener("click",s8,!0),Object.defineProperty(n,"submitter",{get(){if(this.type=="submit"&&this.target instanceof HTMLFormElement)return _c.get(this.target)}})})();var gt;(function(n){n.eager="eager",n.lazy="lazy"})(gt||(gt={}));class wt extends HTMLElement{constructor(){super();this.loaded=Promise.resolve(),this.delegate=new wt.delegateConstructor(this)}static get observedAttributes(){return["disabled","loading","src"]}connectedCallback(){this.delegate.connect()}disconnectedCallback(){this.delegate.disconnect()}reload(){const{src:e}=this;this.src=null,this.src=e}attributeChangedCallback(e){e=="loading"?this.delegate.loadingStyleChanged():e=="src"?this.delegate.sourceURLChanged():this.delegate.disabledChanged()}get src(){return this.getAttribute("src")}set src(e){e?this.setAttribute("src",e):this.removeAttribute("src")}get loading(){return i8(this.getAttribute("loading")||"")}set loading(e){e?this.setAttribute("loading",e):this.removeAttribute("loading")}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get autoscroll(){return this.hasAttribute("autoscroll")}set autoscroll(e){e?this.setAttribute("autoscroll",""):this.removeAttribute("autoscroll")}get complete(){return!this.delegate.isLoading}get isActive(){return this.ownerDocument===document&&!this.isPreview}get isPreview(){var e,t;return(t=(e=this.ownerDocument)===null||e===void 0?void 0:e.documentElement)===null||t===void 0?void 0:t.hasAttribute("data-turbo-preview")}}function i8(n){switch(n.toLowerCase()){case"lazy":return gt.lazy;default:return gt.eager}}function Ee(n){return new URL(n.toString(),document.baseURI)}function Lt(n){let e;if(n.hash)return n.hash.slice(1);if(e=n.href.match(/#(.*)$/))return e[1]}function li(n,e){const t=(e==null?void 0:e.getAttribute("formaction"))||n.getAttribute("action")||n.action;return Ee(t)}function o8(n){return(h8(n).match(/\.[^.]*$/)||[])[0]||""}function a8(n){return!!o8(n).match(/^(?:|\.(?:htm|html|xhtml))$/)}function c8(n,e){const t=d8(e);return n.href===Ee(t).href||n.href.startsWith(t)}function Rn(n,e){return c8(n,e)&&a8(n)}function ws(n){const e=Lt(n);return e!=null?n.href.slice(0,-(e.length+1)):n.href}function er(n){return ws(n)}function l8(n,e){return Ee(n).href==Ee(e).href}function u8(n){return n.pathname.split("/").slice(1)}function h8(n){return u8(n).slice(-1)[0]}function d8(n){return p8(n.origin+n.pathname)}function p8(n){return n.endsWith("/")?n:n+"/"}class wc{constructor(e){this.response=e}get succeeded(){return this.response.ok}get failed(){return!this.succeeded}get clientError(){return this.statusCode>=400&&this.statusCode<=499}get serverError(){return this.statusCode>=500&&this.statusCode<=599}get redirected(){return this.response.redirected}get location(){return Ee(this.response.url)}get isHTML(){return this.contentType&&this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/)}get statusCode(){return this.response.status}get contentType(){return this.header("Content-Type")}get responseText(){return this.response.clone().text()}get responseHTML(){return this.isHTML?this.response.clone().text():Promise.resolve(void 0)}header(e){return this.response.headers.get(e)}}function Re(n,{target:e,cancelable:t,detail:r}={}){const s=new CustomEvent(n,{cancelable:t,bubbles:!0,detail:r});return e&&e.isConnected?e.dispatchEvent(s):document.documentElement.dispatchEvent(s),s}function rr(){return new Promise(n=>requestAnimationFrame(()=>n()))}function f8(){return new Promise(n=>setTimeout(()=>n(),0))}function m8(){return Promise.resolve()}function kc(n=""){return new DOMParser().parseFromString(n,"text/html")}function xc(n,...e){const t=g8(n,e).replace(/^\n/,"").split(`
`),r=t[0].match(/^\s+/),s=r?r[0].length:0;return t.map(i=>i.slice(s)).join(`
`)}function g8(n,e){return n.reduce((t,r,s)=>{const i=e[s]==null?"":e[s];return t+r+i},"")}function Dn(){return Array.apply(null,{length:36}).map((n,e)=>e==8||e==13||e==18||e==23?"-":e==14?"4":e==19?(Math.floor(Math.random()*4)+8).toString(16):Math.floor(Math.random()*15).toString(16)).join("")}function sr(n,...e){for(const t of e.map(r=>r==null?void 0:r.getAttribute(n)))if(typeof t=="string")return t;return null}function ks(...n){for(const e of n)e.localName=="turbo-frame"&&e.setAttribute("busy",""),e.setAttribute("aria-busy","true")}function xs(...n){for(const e of n)e.localName=="turbo-frame"&&e.removeAttribute("busy"),e.removeAttribute("aria-busy")}var ke;(function(n){n[n.get=0]="get",n[n.post=1]="post",n[n.put=2]="put",n[n.patch=3]="patch",n[n.delete=4]="delete"})(ke||(ke={}));function b8(n){switch(n.toLowerCase()){case"get":return ke.get;case"post":return ke.post;case"put":return ke.put;case"patch":return ke.patch;case"delete":return ke.delete}}class ui{constructor(e,t,r,s=new URLSearchParams,i=null){this.abortController=new AbortController,this.resolveRequestPromise=o=>{},this.delegate=e,this.method=t,this.headers=this.defaultHeaders,this.body=s,this.url=r,this.target=i}get location(){return this.url}get params(){return this.url.searchParams}get entries(){return this.body?Array.from(this.body.entries()):[]}cancel(){this.abortController.abort()}async perform(){var e,t;const{fetchOptions:r}=this;(t=(e=this.delegate).prepareHeadersForRequest)===null||t===void 0||t.call(e,this.headers,this),await this.allowRequestToBeIntercepted(r);try{this.delegate.requestStarted(this);const s=await fetch(this.url.href,r);return await this.receive(s)}catch(s){if(s.name!=="AbortError")throw this.delegate.requestErrored(this,s),s}finally{this.delegate.requestFinished(this)}}async receive(e){const t=new wc(e);return Re("turbo:before-fetch-response",{cancelable:!0,detail:{fetchResponse:t},target:this.target}).defaultPrevented?this.delegate.requestPreventedHandlingResponse(this,t):t.succeeded?this.delegate.requestSucceededWithResponse(this,t):this.delegate.requestFailedWithResponse(this,t),t}get fetchOptions(){var e;return{method:ke[this.method].toUpperCase(),credentials:"same-origin",headers:this.headers,redirect:"follow",body:this.isIdempotent?null:this.body,signal:this.abortSignal,referrer:(e=this.delegate.referrer)===null||e===void 0?void 0:e.href}}get defaultHeaders(){return{Accept:"text/html, application/xhtml+xml"}}get isIdempotent(){return this.method==ke.get}get abortSignal(){return this.abortController.signal}async allowRequestToBeIntercepted(e){const t=new Promise(s=>this.resolveRequestPromise=s);Re("turbo:before-fetch-request",{cancelable:!0,detail:{fetchOptions:e,url:this.url,resume:this.resolveRequestPromise},target:this.target}).defaultPrevented&&await t}}class v8{constructor(e,t){this.started=!1,this.intersect=r=>{const s=r.slice(-1)[0];s!=null&&s.isIntersecting&&this.delegate.elementAppearedInViewport(this.element)},this.delegate=e,this.element=t,this.intersectionObserver=new IntersectionObserver(this.intersect)}start(){this.started||(this.started=!0,this.intersectionObserver.observe(this.element))}stop(){this.started&&(this.started=!1,this.intersectionObserver.unobserve(this.element))}}class qn{constructor(e){this.templateElement=document.createElement("template"),this.templateElement.innerHTML=e}static wrap(e){return typeof e=="string"?new this(e):e}get fragment(){const e=document.createDocumentFragment();for(const t of this.foreignElements)e.appendChild(document.importNode(t,!0));return e}get foreignElements(){return this.templateChildren.reduce((e,t)=>t.tagName.toLowerCase()=="turbo-stream"?[...e,t]:e,[])}get templateChildren(){return Array.from(this.templateElement.content.children)}}qn.contentType="text/vnd.turbo-stream.html";var pt;(function(n){n[n.initialized=0]="initialized",n[n.requesting=1]="requesting",n[n.waiting=2]="waiting",n[n.receiving=3]="receiving",n[n.stopping=4]="stopping",n[n.stopped=5]="stopped"})(pt||(pt={}));var ft;(function(n){n.urlEncoded="application/x-www-form-urlencoded",n.multipart="multipart/form-data",n.plain="text/plain"})(ft||(ft={}));function y8(n){switch(n.toLowerCase()){case ft.multipart:return ft.multipart;case ft.plain:return ft.plain;default:return ft.urlEncoded}}class Fn{constructor(e,t,r,s=!1){this.state=pt.initialized,this.delegate=e,this.formElement=t,this.submitter=r,this.formData=_8(t,r),this.location=Ee(this.action),this.method==ke.get&&x8(this.location,[...this.body.entries()]),this.fetchRequest=new ui(this,this.method,this.location,this.body,this.formElement),this.mustRedirect=s}static confirmMethod(e,t){return confirm(e)}get method(){var e;const t=((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formmethod"))||this.formElement.getAttribute("method")||"";return b8(t.toLowerCase())||ke.get}get action(){var e;const t=typeof this.formElement.action=="string"?this.formElement.action:null;return((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formaction"))||this.formElement.getAttribute("action")||t||""}get body(){return this.enctype==ft.urlEncoded||this.method==ke.get?new URLSearchParams(this.stringFormData):this.formData}get enctype(){var e;return y8(((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formenctype"))||this.formElement.enctype)}get isIdempotent(){return this.fetchRequest.isIdempotent}get stringFormData(){return[...this.formData].reduce((e,[t,r])=>e.concat(typeof r=="string"?[[t,r]]:[]),[])}get confirmationMessage(){return this.formElement.getAttribute("data-turbo-confirm")}get needsConfirmation(){return this.confirmationMessage!==null}async start(){const{initialized:e,requesting:t}=pt;if(!(this.needsConfirmation&&!Fn.confirmMethod(this.confirmationMessage,this.formElement))&&this.state==e)return this.state=t,this.fetchRequest.perform()}stop(){const{stopping:e,stopped:t}=pt;if(this.state!=e&&this.state!=t)return this.state=e,this.fetchRequest.cancel(),!0}prepareHeadersForRequest(e,t){if(!t.isIdempotent){const r=w8(Wo("csrf-param"))||Wo("csrf-token");r&&(e["X-CSRF-Token"]=r),e.Accept=[qn.contentType,e.Accept].join(", ")}}requestStarted(e){var t;this.state=pt.waiting,(t=this.submitter)===null||t===void 0||t.setAttribute("disabled",""),Re("turbo:submit-start",{target:this.formElement,detail:{formSubmission:this}}),this.delegate.formSubmissionStarted(this)}requestPreventedHandlingResponse(e,t){this.result={success:t.succeeded,fetchResponse:t}}requestSucceededWithResponse(e,t){if(t.clientError||t.serverError)this.delegate.formSubmissionFailedWithResponse(this,t);else if(this.requestMustRedirect(e)&&k8(t)){const r=new Error("Form responses must redirect to another location");this.delegate.formSubmissionErrored(this,r)}else this.state=pt.receiving,this.result={success:!0,fetchResponse:t},this.delegate.formSubmissionSucceededWithResponse(this,t)}requestFailedWithResponse(e,t){this.result={success:!1,fetchResponse:t},this.delegate.formSubmissionFailedWithResponse(this,t)}requestErrored(e,t){this.result={success:!1,error:t},this.delegate.formSubmissionErrored(this,t)}requestFinished(e){var t;this.state=pt.stopped,(t=this.submitter)===null||t===void 0||t.removeAttribute("disabled"),Re("turbo:submit-end",{target:this.formElement,detail:Object.assign({formSubmission:this},this.result)}),this.delegate.formSubmissionFinished(this)}requestMustRedirect(e){return!e.isIdempotent&&this.mustRedirect}}function _8(n,e){const t=new FormData(n),r=e==null?void 0:e.getAttribute("name"),s=e==null?void 0:e.getAttribute("value");return r&&s!=null&&t.get(r)!=s&&t.append(r,s),t}function w8(n){if(n!=null){const t=(document.cookie?document.cookie.split("; "):[]).find(r=>r.startsWith(n));if(t){const r=t.split("=").slice(1).join("=");return r?decodeURIComponent(r):void 0}}}function Wo(n){const e=document.querySelector(`meta[name="${n}"]`);return e&&e.content}function k8(n){return n.statusCode==200&&!n.redirected}function x8(n,e){const t=new URLSearchParams;for(const[r,s]of e)s instanceof File||t.append(r,s);return n.search=t.toString(),n}class Or{constructor(e){this.element=e}get children(){return[...this.element.children]}hasAnchor(e){return this.getElementForAnchor(e)!=null}getElementForAnchor(e){return e?this.element.querySelector(`[id='${e}'], a[name='${e}']`):null}get isConnected(){return this.element.isConnected}get firstAutofocusableElement(){return this.element.querySelector("[autofocus]")}get permanentElements(){return[...this.element.querySelectorAll("[id][data-turbo-permanent]")]}getPermanentElementById(e){return this.element.querySelector(`#${e}[data-turbo-permanent]`)}getPermanentElementMapForSnapshot(e){const t={};for(const r of this.permanentElements){const{id:s}=r,i=e.getPermanentElementById(s);i&&(t[s]=[r,i])}return t}}class Ec{constructor(e,t){this.submitBubbled=r=>{const s=r.target;if(!r.defaultPrevented&&s instanceof HTMLFormElement&&s.closest("turbo-frame, html")==this.element){const i=r.submitter||void 0;((i==null?void 0:i.getAttribute("formmethod"))||s.method)!="dialog"&&this.delegate.shouldInterceptFormSubmission(s,i)&&(r.preventDefault(),r.stopImmediatePropagation(),this.delegate.formSubmissionIntercepted(s,i))}},this.delegate=e,this.element=t}start(){this.element.addEventListener("submit",this.submitBubbled)}stop(){this.element.removeEventListener("submit",this.submitBubbled)}}class Ac{constructor(e,t){this.resolveRenderPromise=r=>{},this.resolveInterceptionPromise=r=>{},this.delegate=e,this.element=t}scrollToAnchor(e){const t=this.snapshot.getElementForAnchor(e);t?(this.scrollToElement(t),this.focusElement(t)):this.scrollToPosition({x:0,y:0})}scrollToAnchorFromLocation(e){this.scrollToAnchor(Lt(e))}scrollToElement(e){e.scrollIntoView()}focusElement(e){e instanceof HTMLElement&&(e.hasAttribute("tabindex")?e.focus():(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")))}scrollToPosition({x:e,y:t}){this.scrollRoot.scrollTo(e,t)}scrollToTop(){this.scrollToPosition({x:0,y:0})}get scrollRoot(){return window}async render(e){const{isPreview:t,shouldRender:r,newSnapshot:s}=e;if(r)try{this.renderPromise=new Promise(a=>this.resolveRenderPromise=a),this.renderer=e,this.prepareToRenderSnapshot(e);const i=new Promise(a=>this.resolveInterceptionPromise=a);this.delegate.allowsImmediateRender(s,this.resolveInterceptionPromise)||await i,await this.renderSnapshot(e),this.delegate.viewRenderedSnapshot(s,t),this.finishRenderingSnapshot(e)}finally{delete this.renderer,this.resolveRenderPromise(void 0),delete this.renderPromise}else this.invalidate()}invalidate(){this.delegate.viewInvalidated()}prepareToRenderSnapshot(e){this.markAsPreview(e.isPreview),e.prepareToRender()}markAsPreview(e){e?this.element.setAttribute("data-turbo-preview",""):this.element.removeAttribute("data-turbo-preview")}async renderSnapshot(e){await e.render()}finishRenderingSnapshot(e){e.finishRendering()}}class E8 extends Ac{invalidate(){this.element.innerHTML=""}get snapshot(){return new Or(this.element)}}class Sc{constructor(e,t){this.clickBubbled=r=>{this.respondsToEventTarget(r.target)?this.clickEvent=r:delete this.clickEvent},this.linkClicked=r=>{this.clickEvent&&this.respondsToEventTarget(r.target)&&r.target instanceof Element&&this.delegate.shouldInterceptLinkClick(r.target,r.detail.url)&&(this.clickEvent.preventDefault(),r.preventDefault(),this.delegate.linkClickIntercepted(r.target,r.detail.url)),delete this.clickEvent},this.willVisit=()=>{delete this.clickEvent},this.delegate=e,this.element=t}start(){this.element.addEventListener("click",this.clickBubbled),document.addEventListener("turbo:click",this.linkClicked),document.addEventListener("turbo:before-visit",this.willVisit)}stop(){this.element.removeEventListener("click",this.clickBubbled),document.removeEventListener("turbo:click",this.linkClicked),document.removeEventListener("turbo:before-visit",this.willVisit)}respondsToEventTarget(e){const t=e instanceof Element?e:e instanceof Node?e.parentElement:null;return t&&t.closest("turbo-frame, html")==this.element}}class A8{constructor(e){this.permanentElementMap=e}static preservingPermanentElements(e,t){const r=new this(e);r.enter(),t(),r.leave()}enter(){for(const e in this.permanentElementMap){const[,t]=this.permanentElementMap[e];this.replaceNewPermanentElementWithPlaceholder(t)}}leave(){for(const e in this.permanentElementMap){const[t]=this.permanentElementMap[e];this.replaceCurrentPermanentElementWithClone(t),this.replacePlaceholderWithPermanentElement(t)}}replaceNewPermanentElementWithPlaceholder(e){const t=S8(e);e.replaceWith(t)}replaceCurrentPermanentElementWithClone(e){const t=e.cloneNode(!0);e.replaceWith(t)}replacePlaceholderWithPermanentElement(e){const t=this.getPlaceholderById(e.id);t==null||t.replaceWith(e)}getPlaceholderById(e){return this.placeholders.find(t=>t.content==e)}get placeholders(){return[...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")]}}function S8(n){const e=document.createElement("meta");return e.setAttribute("name","turbo-permanent-placeholder"),e.setAttribute("content",n.id),e}class hi{constructor(e,t,r,s=!0){this.currentSnapshot=e,this.newSnapshot=t,this.isPreview=r,this.willRender=s,this.promise=new Promise((i,o)=>this.resolvingFunctions={resolve:i,reject:o})}get shouldRender(){return!0}prepareToRender(){}finishRendering(){this.resolvingFunctions&&(this.resolvingFunctions.resolve(),delete this.resolvingFunctions)}createScriptElement(e){if(e.getAttribute("data-turbo-eval")=="false")return e;{const t=document.createElement("script");return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=e.textContent,t.async=!1,C8(t,e),t}}preservingPermanentElements(e){A8.preservingPermanentElements(this.permanentElementMap,e)}focusFirstAutofocusableElement(){const e=this.connectedSnapshot.firstAutofocusableElement;T8(e)&&e.focus()}get connectedSnapshot(){return this.newSnapshot.isConnected?this.newSnapshot:this.currentSnapshot}get currentElement(){return this.currentSnapshot.element}get newElement(){return this.newSnapshot.element}get permanentElementMap(){return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot)}get cspNonce(){var e;return(e=document.head.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content")}}function C8(n,e){for(const{name:t,value:r}of[...e.attributes])n.setAttribute(t,r)}function T8(n){return n&&typeof n.focus=="function"}class $8 extends hi{get shouldRender(){return!0}async render(){await rr(),this.preservingPermanentElements(()=>{this.loadFrameElement()}),this.scrollFrameIntoView(),await rr(),this.focusFirstAutofocusableElement(),await rr(),this.activateScriptElements()}loadFrameElement(){var e;const t=document.createRange();t.selectNodeContents(this.currentElement),t.deleteContents();const r=this.newElement,s=(e=r.ownerDocument)===null||e===void 0?void 0:e.createRange();s&&(s.selectNodeContents(r),this.currentElement.appendChild(s.extractContents()))}scrollFrameIntoView(){if(this.currentElement.autoscroll||this.newElement.autoscroll){const e=this.currentElement.firstElementChild,t=R8(this.currentElement.getAttribute("data-autoscroll-block"),"end");if(e)return e.scrollIntoView({block:t}),!0}return!1}activateScriptElements(){for(const e of this.newScriptElements){const t=this.createScriptElement(e);e.replaceWith(t)}}get newScriptElements(){return this.currentElement.querySelectorAll("script")}}function R8(n,e){return n=="end"||n=="start"||n=="center"||n=="nearest"?n:e}class it{constructor(){this.hiding=!1,this.value=0,this.visible=!1,this.trickle=()=>{this.setValue(this.value+Math.random()/100)},this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement(),this.installStylesheetElement(),this.setValue(0)}static get defaultCSS(){return xc`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 9999;
        transition:
          width ${it.animationDuration}ms ease-out,
          opacity ${it.animationDuration/2}ms ${it.animationDuration/2}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `}show(){this.visible||(this.visible=!0,this.installProgressElement(),this.startTrickling())}hide(){this.visible&&!this.hiding&&(this.hiding=!0,this.fadeProgressElement(()=>{this.uninstallProgressElement(),this.stopTrickling(),this.visible=!1,this.hiding=!1}))}setValue(e){this.value=e,this.refresh()}installStylesheetElement(){document.head.insertBefore(this.stylesheetElement,document.head.firstChild)}installProgressElement(){this.progressElement.style.width="0",this.progressElement.style.opacity="1",document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()}fadeProgressElement(e){this.progressElement.style.opacity="0",setTimeout(e,it.animationDuration*1.5)}uninstallProgressElement(){this.progressElement.parentNode&&document.documentElement.removeChild(this.progressElement)}startTrickling(){this.trickleInterval||(this.trickleInterval=window.setInterval(this.trickle,it.animationDuration))}stopTrickling(){window.clearInterval(this.trickleInterval),delete this.trickleInterval}refresh(){requestAnimationFrame(()=>{this.progressElement.style.width=`${10+this.value*90}%`})}createStylesheetElement(){const e=document.createElement("style");return e.type="text/css",e.textContent=it.defaultCSS,e}createProgressElement(){const e=document.createElement("div");return e.className="turbo-progress-bar",e}}it.animationDuration=300;class D8 extends Or{constructor(){super(...arguments);this.detailsByOuterHTML=this.children.filter(e=>!N8(e)).map(e=>q8(e)).reduce((e,t)=>{const{outerHTML:r}=t,s=r in e?e[r]:{type:L8(t),tracked:M8(t),elements:[]};return Object.assign(Object.assign({},e),{[r]:Object.assign(Object.assign({},s),{elements:[...s.elements,t]})})},{})}get trackedElementSignature(){return Object.keys(this.detailsByOuterHTML).filter(e=>this.detailsByOuterHTML[e].tracked).join("")}getScriptElementsNotInSnapshot(e){return this.getElementsMatchingTypeNotInSnapshot("script",e)}getStylesheetElementsNotInSnapshot(e){return this.getElementsMatchingTypeNotInSnapshot("stylesheet",e)}getElementsMatchingTypeNotInSnapshot(e,t){return Object.keys(this.detailsByOuterHTML).filter(r=>!(r in t.detailsByOuterHTML)).map(r=>this.detailsByOuterHTML[r]).filter(({type:r})=>r==e).map(({elements:[r]})=>r)}get provisionalElements(){return Object.keys(this.detailsByOuterHTML).reduce((e,t)=>{const{type:r,tracked:s,elements:i}=this.detailsByOuterHTML[t];return r==null&&!s?[...e,...i]:i.length>1?[...e,...i.slice(1)]:e},[])}getMetaValue(e){const t=this.findMetaElementByName(e);return t?t.getAttribute("content"):null}findMetaElementByName(e){return Object.keys(this.detailsByOuterHTML).reduce((t,r)=>{const{elements:[s]}=this.detailsByOuterHTML[r];return P8(s,e)?s:t},void 0)}}function L8(n){if(O8(n))return"script";if(I8(n))return"stylesheet"}function M8(n){return n.getAttribute("data-turbo-track")=="reload"}function O8(n){return n.tagName.toLowerCase()=="script"}function N8(n){return n.tagName.toLowerCase()=="noscript"}function I8(n){const e=n.tagName.toLowerCase();return e=="style"||e=="link"&&n.getAttribute("rel")=="stylesheet"}function P8(n,e){return n.tagName.toLowerCase()=="meta"&&n.getAttribute("name")==e}function q8(n){return n.hasAttribute("nonce")&&n.setAttribute("nonce",""),n}class bt extends Or{constructor(e,t){super(e);this.headSnapshot=t}static fromHTMLString(e=""){return this.fromDocument(kc(e))}static fromElement(e){return this.fromDocument(e.ownerDocument)}static fromDocument({head:e,body:t}){return new this(t,new D8(e))}clone(){return new bt(this.element.cloneNode(!0),this.headSnapshot)}get headElement(){return this.headSnapshot.element}get rootLocation(){var e;const t=(e=this.getSetting("root"))!==null&&e!==void 0?e:"/";return Ee(t)}get cacheControlValue(){return this.getSetting("cache-control")}get isPreviewable(){return this.cacheControlValue!="no-preview"}get isCacheable(){return this.cacheControlValue!="no-cache"}get isVisitable(){return this.getSetting("visit-control")!="reload"}getSetting(e){return this.headSnapshot.getMetaValue(`turbo-${e}`)}}var Gt;(function(n){n.visitStart="visitStart",n.requestStart="requestStart",n.requestEnd="requestEnd",n.visitEnd="visitEnd"})(Gt||(Gt={}));var Ue;(function(n){n.initialized="initialized",n.started="started",n.canceled="canceled",n.failed="failed",n.completed="completed"})(Ue||(Ue={}));const F8={action:"advance",historyChanged:!1,visitCachedSnapshot:()=>{},willRender:!0};var vt;(function(n){n[n.networkFailure=0]="networkFailure",n[n.timeoutFailure=-1]="timeoutFailure",n[n.contentTypeMismatch=-2]="contentTypeMismatch"})(vt||(vt={}));class B8{constructor(e,t,r,s={}){this.identifier=Dn(),this.timingMetrics={},this.followedRedirect=!1,this.historyChanged=!1,this.scrolled=!1,this.snapshotCached=!1,this.state=Ue.initialized,this.delegate=e,this.location=t,this.restorationIdentifier=r||Dn();const{action:i,historyChanged:o,referrer:a,snapshotHTML:c,response:l,visitCachedSnapshot:u,willRender:h}=Object.assign(Object.assign({},F8),s);this.action=i,this.historyChanged=o,this.referrer=a,this.snapshotHTML=c,this.response=l,this.isSamePage=this.delegate.locationWithActionIsSamePage(this.location,this.action),this.visitCachedSnapshot=u,this.willRender=h,this.scrolled=!h}get adapter(){return this.delegate.adapter}get view(){return this.delegate.view}get history(){return this.delegate.history}get restorationData(){return this.history.getRestorationDataForIdentifier(this.restorationIdentifier)}get silent(){return this.isSamePage}start(){this.state==Ue.initialized&&(this.recordTimingMetric(Gt.visitStart),this.state=Ue.started,this.adapter.visitStarted(this),this.delegate.visitStarted(this))}cancel(){this.state==Ue.started&&(this.request&&this.request.cancel(),this.cancelRender(),this.state=Ue.canceled)}complete(){this.state==Ue.started&&(this.recordTimingMetric(Gt.visitEnd),this.state=Ue.completed,this.adapter.visitCompleted(this),this.delegate.visitCompleted(this),this.followRedirect())}fail(){this.state==Ue.started&&(this.state=Ue.failed,this.adapter.visitFailed(this))}changeHistory(){var e;if(!this.historyChanged){const t=this.location.href===((e=this.referrer)===null||e===void 0?void 0:e.href)?"replace":this.action,r=this.getHistoryMethodForAction(t);this.history.update(r,this.location,this.restorationIdentifier),this.historyChanged=!0}}issueRequest(){this.hasPreloadedResponse()?this.simulateRequest():this.shouldIssueRequest()&&!this.request&&(this.request=new ui(this,ke.get,this.location),this.request.perform())}simulateRequest(){this.response&&(this.startRequest(),this.recordResponse(),this.finishRequest())}startRequest(){this.recordTimingMetric(Gt.requestStart),this.adapter.visitRequestStarted(this)}recordResponse(e=this.response){if(this.response=e,e){const{statusCode:t}=e;Zo(t)?this.adapter.visitRequestCompleted(this):this.adapter.visitRequestFailedWithStatusCode(this,t)}}finishRequest(){this.recordTimingMetric(Gt.requestEnd),this.adapter.visitRequestFinished(this)}loadResponse(){if(this.response){const{statusCode:e,responseHTML:t}=this.response;this.render(async()=>{this.cacheSnapshot(),this.view.renderPromise&&await this.view.renderPromise,Zo(e)&&t!=null?(await this.view.renderPage(bt.fromHTMLString(t),!1,this.willRender),this.adapter.visitRendered(this),this.complete()):(await this.view.renderError(bt.fromHTMLString(t)),this.adapter.visitRendered(this),this.fail())})}}getCachedSnapshot(){const e=this.view.getCachedSnapshotForLocation(this.location)||this.getPreloadedSnapshot();if(e&&(!Lt(this.location)||e.hasAnchor(Lt(this.location)))&&(this.action=="restore"||e.isPreviewable))return e}getPreloadedSnapshot(){if(this.snapshotHTML)return bt.fromHTMLString(this.snapshotHTML)}hasCachedSnapshot(){return this.getCachedSnapshot()!=null}loadCachedSnapshot(){const e=this.getCachedSnapshot();if(e){const t=this.shouldIssueRequest();this.render(async()=>{this.cacheSnapshot(),this.isSamePage?this.adapter.visitRendered(this):(this.view.renderPromise&&await this.view.renderPromise,await this.view.renderPage(e,t,this.willRender),this.adapter.visitRendered(this),t||this.complete())})}}followRedirect(){var e;this.redirectedToLocation&&!this.followedRedirect&&((e=this.response)===null||e===void 0?void 0:e.redirected)&&(this.adapter.visitProposedToLocation(this.redirectedToLocation,{action:"replace",response:this.response}),this.followedRedirect=!0)}goToSamePageAnchor(){this.isSamePage&&this.render(async()=>{this.cacheSnapshot(),this.adapter.visitRendered(this)})}requestStarted(){this.startRequest()}requestPreventedHandlingResponse(e,t){}async requestSucceededWithResponse(e,t){const r=await t.responseHTML,{redirected:s,statusCode:i}=t;r==null?this.recordResponse({statusCode:vt.contentTypeMismatch,redirected:s}):(this.redirectedToLocation=t.redirected?t.location:void 0,this.recordResponse({statusCode:i,responseHTML:r,redirected:s}))}async requestFailedWithResponse(e,t){const r=await t.responseHTML,{redirected:s,statusCode:i}=t;r==null?this.recordResponse({statusCode:vt.contentTypeMismatch,redirected:s}):this.recordResponse({statusCode:i,responseHTML:r,redirected:s})}requestErrored(e,t){this.recordResponse({statusCode:vt.networkFailure,redirected:!1})}requestFinished(){this.finishRequest()}performScroll(){this.scrolled||(this.action=="restore"?this.scrollToRestoredPosition()||this.scrollToAnchor()||this.view.scrollToTop():this.scrollToAnchor()||this.view.scrollToTop(),this.isSamePage&&this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation,this.location),this.scrolled=!0)}scrollToRestoredPosition(){const{scrollPosition:e}=this.restorationData;if(e)return this.view.scrollToPosition(e),!0}scrollToAnchor(){const e=Lt(this.location);if(e!=null)return this.view.scrollToAnchor(e),!0}recordTimingMetric(e){this.timingMetrics[e]=new Date().getTime()}getTimingMetrics(){return Object.assign({},this.timingMetrics)}getHistoryMethodForAction(e){switch(e){case"replace":return history.replaceState;case"advance":case"restore":return history.pushState}}hasPreloadedResponse(){return typeof this.response=="object"}shouldIssueRequest(){return this.isSamePage?!1:this.action=="restore"?!this.hasCachedSnapshot():this.willRender}cacheSnapshot(){this.snapshotCached||(this.view.cacheSnapshot().then(e=>e&&this.visitCachedSnapshot(e)),this.snapshotCached=!0)}async render(e){this.cancelRender(),await new Promise(t=>{this.frame=requestAnimationFrame(()=>t())}),await e(),delete this.frame,this.performScroll()}cancelRender(){this.frame&&(cancelAnimationFrame(this.frame),delete this.frame)}}function Zo(n){return n>=200&&n<300}class z8{constructor(e){this.progressBar=new it,this.showProgressBar=()=>{this.progressBar.show()},this.session=e}visitProposedToLocation(e,t){this.navigator.startVisit(e,Dn(),t)}visitStarted(e){e.loadCachedSnapshot(),e.issueRequest(),e.changeHistory(),e.goToSamePageAnchor()}visitRequestStarted(e){this.progressBar.setValue(0),e.hasCachedSnapshot()||e.action!="restore"?this.showVisitProgressBarAfterDelay():this.showProgressBar()}visitRequestCompleted(e){e.loadResponse()}visitRequestFailedWithStatusCode(e,t){switch(t){case vt.networkFailure:case vt.timeoutFailure:case vt.contentTypeMismatch:return this.reload();default:return e.loadResponse()}}visitRequestFinished(e){this.progressBar.setValue(1),this.hideVisitProgressBar()}visitCompleted(e){}pageInvalidated(){this.reload()}visitFailed(e){}visitRendered(e){}formSubmissionStarted(e){this.progressBar.setValue(0),this.showFormProgressBarAfterDelay()}formSubmissionFinished(e){this.progressBar.setValue(1),this.hideFormProgressBar()}showVisitProgressBarAfterDelay(){this.visitProgressBarTimeout=window.setTimeout(this.showProgressBar,this.session.progressBarDelay)}hideVisitProgressBar(){this.progressBar.hide(),this.visitProgressBarTimeout!=null&&(window.clearTimeout(this.visitProgressBarTimeout),delete this.visitProgressBarTimeout)}showFormProgressBarAfterDelay(){this.formProgressBarTimeout==null&&(this.formProgressBarTimeout=window.setTimeout(this.showProgressBar,this.session.progressBarDelay))}hideFormProgressBar(){this.progressBar.hide(),this.formProgressBarTimeout!=null&&(window.clearTimeout(this.formProgressBarTimeout),delete this.formProgressBarTimeout)}reload(){window.location.reload()}get navigator(){return this.session.navigator}}class H8{constructor(){this.started=!1}start(){this.started||(this.started=!0,addEventListener("turbo:before-cache",this.removeStaleElements,!1))}stop(){this.started&&(this.started=!1,removeEventListener("turbo:before-cache",this.removeStaleElements,!1))}removeStaleElements(){const e=[...document.querySelectorAll('[data-turbo-cache="false"]')];for(const t of e)t.remove()}}class U8{constructor(e){this.started=!1,this.submitCaptured=()=>{removeEventListener("submit",this.submitBubbled,!1),addEventListener("submit",this.submitBubbled,!1)},this.submitBubbled=t=>{if(!t.defaultPrevented){const r=t.target instanceof HTMLFormElement?t.target:void 0,s=t.submitter||void 0;r&&((s==null?void 0:s.getAttribute("formmethod"))||r.getAttribute("method"))!="dialog"&&this.delegate.willSubmitForm(r,s)&&(t.preventDefault(),this.delegate.formSubmitted(r,s))}},this.delegate=e}start(){this.started||(addEventListener("submit",this.submitCaptured,!0),this.started=!0)}stop(){this.started&&(removeEventListener("submit",this.submitCaptured,!0),this.started=!1)}}class j8{constructor(e){this.element=e,this.linkInterceptor=new Sc(this,e),this.formInterceptor=new Ec(this,e)}start(){this.linkInterceptor.start(),this.formInterceptor.start()}stop(){this.linkInterceptor.stop(),this.formInterceptor.stop()}shouldInterceptLinkClick(e,t){return this.shouldRedirect(e)}linkClickIntercepted(e,t){const r=this.findFrameElement(e);r&&r.delegate.linkClickIntercepted(e,t)}shouldInterceptFormSubmission(e,t){return this.shouldSubmit(e,t)}formSubmissionIntercepted(e,t){const r=this.findFrameElement(e,t);r&&(r.removeAttribute("reloadable"),r.delegate.formSubmissionIntercepted(e,t))}shouldSubmit(e,t){var r;const s=li(e,t),i=this.element.ownerDocument.querySelector('meta[name="turbo-root"]'),o=Ee((r=i==null?void 0:i.content)!==null&&r!==void 0?r:"/");return this.shouldRedirect(e,t)&&Rn(s,o)}shouldRedirect(e,t){const r=this.findFrameElement(e,t);return r?r!=e.closest("turbo-frame"):!1}findFrameElement(e,t){const r=(t==null?void 0:t.getAttribute("data-turbo-frame"))||e.getAttribute("data-turbo-frame");if(r&&r!="_top"){const s=this.element.querySelector(`#${r}:not([disabled])`);if(s instanceof wt)return s}}}class V8{constructor(e){this.restorationIdentifier=Dn(),this.restorationData={},this.started=!1,this.pageLoaded=!1,this.onPopState=t=>{if(this.shouldHandlePopState()){const{turbo:r}=t.state||{};if(r){this.location=new URL(window.location.href);const{restorationIdentifier:s}=r;this.restorationIdentifier=s,this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location,s)}}},this.onPageLoad=async t=>{await m8(),this.pageLoaded=!0},this.delegate=e}start(){this.started||(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0,this.replace(new URL(window.location.href)))}stop(){this.started&&(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1)}push(e,t){this.update(history.pushState,e,t)}replace(e,t){this.update(history.replaceState,e,t)}update(e,t,r=Dn()){const s={turbo:{restorationIdentifier:r}};e.call(history,s,"",t.href),this.location=t,this.restorationIdentifier=r}getRestorationDataForIdentifier(e){return this.restorationData[e]||{}}updateRestorationData(e){const{restorationIdentifier:t}=this,r=this.restorationData[t];this.restorationData[t]=Object.assign(Object.assign({},r),e)}assumeControlOfScrollRestoration(){var e;this.previousScrollRestoration||(this.previousScrollRestoration=(e=history.scrollRestoration)!==null&&e!==void 0?e:"auto",history.scrollRestoration="manual")}relinquishControlOfScrollRestoration(){this.previousScrollRestoration&&(history.scrollRestoration=this.previousScrollRestoration,delete this.previousScrollRestoration)}shouldHandlePopState(){return this.pageIsLoaded()}pageIsLoaded(){return this.pageLoaded||document.readyState=="complete"}}class G8{constructor(e){this.started=!1,this.clickCaptured=()=>{removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},this.clickBubbled=t=>{if(this.clickEventIsSignificant(t)){const r=t.composedPath&&t.composedPath()[0]||t.target,s=this.findLinkFromClickTarget(r);if(s){const i=this.getLocationForLink(s);this.delegate.willFollowLinkToLocation(s,i)&&(t.preventDefault(),this.delegate.followedLinkToLocation(s,i))}}},this.delegate=e}start(){this.started||(addEventListener("click",this.clickCaptured,!0),this.started=!0)}stop(){this.started&&(removeEventListener("click",this.clickCaptured,!0),this.started=!1)}clickEventIsSignificant(e){return!(e.target&&e.target.isContentEditable||e.defaultPrevented||e.which>1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}findLinkFromClickTarget(e){if(e instanceof Element)return e.closest("a[href]:not([target^=_]):not([download])")}getLocationForLink(e){return Ee(e.getAttribute("href")||"")}}function di(n){return n=="advance"||n=="replace"||n=="restore"}class W8{constructor(e){this.delegate=e}proposeVisit(e,t={}){this.delegate.allowsVisitingLocationWithAction(e,t.action)&&(Rn(e,this.view.snapshot.rootLocation)?this.delegate.visitProposedToLocation(e,t):window.location.href=e.toString())}startVisit(e,t,r={}){this.stop(),this.currentVisit=new B8(this,Ee(e),t,Object.assign({referrer:this.location},r)),this.currentVisit.start()}submitForm(e,t){this.stop(),this.formSubmission=new Fn(this,e,t,!0),this.formSubmission.start()}stop(){this.formSubmission&&(this.formSubmission.stop(),delete this.formSubmission),this.currentVisit&&(this.currentVisit.cancel(),delete this.currentVisit)}get adapter(){return this.delegate.adapter}get view(){return this.delegate.view}get history(){return this.delegate.history}formSubmissionStarted(e){typeof this.adapter.formSubmissionStarted=="function"&&this.adapter.formSubmissionStarted(e)}async formSubmissionSucceededWithResponse(e,t){if(e==this.formSubmission){const r=await t.responseHTML;if(r){e.method!=ke.get&&this.view.clearSnapshotCache();const{statusCode:s,redirected:i}=t,a={action:this.getActionForFormSubmission(e),response:{statusCode:s,responseHTML:r,redirected:i}};this.proposeVisit(t.location,a)}}}async formSubmissionFailedWithResponse(e,t){const r=await t.responseHTML;if(r){const s=bt.fromHTMLString(r);t.serverError?await this.view.renderError(s):await this.view.renderPage(s),this.view.scrollToTop(),this.view.clearSnapshotCache()}}formSubmissionErrored(e,t){console.error(t)}formSubmissionFinished(e){typeof this.adapter.formSubmissionFinished=="function"&&this.adapter.formSubmissionFinished(e)}visitStarted(e){this.delegate.visitStarted(e)}visitCompleted(e){this.delegate.visitCompleted(e)}locationWithActionIsSamePage(e,t){const r=Lt(e),s=Lt(this.view.lastRenderedLocation),i=t==="restore"&&typeof r=="undefined";return t!=="replace"&&ws(e)===ws(this.view.lastRenderedLocation)&&(i||r!=null&&r!==s)}visitScrolledToSamePageLocation(e,t){this.delegate.visitScrolledToSamePageLocation(e,t)}get location(){return this.history.location}get restorationIdentifier(){return this.history.restorationIdentifier}getActionForFormSubmission(e){const{formElement:t,submitter:r}=e,s=sr("data-turbo-action",r,t);return di(s)?s:"advance"}}var st;(function(n){n[n.initial=0]="initial",n[n.loading=1]="loading",n[n.interactive=2]="interactive",n[n.complete=3]="complete"})(st||(st={}));class Z8{constructor(e){this.stage=st.initial,this.started=!1,this.interpretReadyState=()=>{const{readyState:t}=this;t=="interactive"?this.pageIsInteractive():t=="complete"&&this.pageIsComplete()},this.pageWillUnload=()=>{this.delegate.pageWillUnload()},this.delegate=e}start(){this.started||(this.stage==st.initial&&(this.stage=st.loading),document.addEventListener("readystatechange",this.interpretReadyState,!1),addEventListener("pagehide",this.pageWillUnload,!1),this.started=!0)}stop(){this.started&&(document.removeEventListener("readystatechange",this.interpretReadyState,!1),removeEventListener("pagehide",this.pageWillUnload,!1),this.started=!1)}pageIsInteractive(){this.stage==st.loading&&(this.stage=st.interactive,this.delegate.pageBecameInteractive())}pageIsComplete(){this.pageIsInteractive(),this.stage==st.interactive&&(this.stage=st.complete,this.delegate.pageLoaded())}get readyState(){return document.readyState}}class K8{constructor(e){this.started=!1,this.onScroll=()=>{this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},this.delegate=e}start(){this.started||(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)}stop(){this.started&&(removeEventListener("scroll",this.onScroll,!1),this.started=!1)}updatePosition(e){this.delegate.scrollPositionChanged(e)}}class Y8{constructor(e){this.sources=new Set,this.started=!1,this.inspectFetchResponse=t=>{const r=X8(t);r&&J8(r)&&(t.preventDefault(),this.receiveMessageResponse(r))},this.receiveMessageEvent=t=>{this.started&&typeof t.data=="string"&&this.receiveMessageHTML(t.data)},this.delegate=e}start(){this.started||(this.started=!0,addEventListener("turbo:before-fetch-response",this.inspectFetchResponse,!1))}stop(){this.started&&(this.started=!1,removeEventListener("turbo:before-fetch-response",this.inspectFetchResponse,!1))}connectStreamSource(e){this.streamSourceIsConnected(e)||(this.sources.add(e),e.addEventListener("message",this.receiveMessageEvent,!1))}disconnectStreamSource(e){this.streamSourceIsConnected(e)&&(this.sources.delete(e),e.removeEventListener("message",this.receiveMessageEvent,!1))}streamSourceIsConnected(e){return this.sources.has(e)}async receiveMessageResponse(e){const t=await e.responseHTML;t&&this.receiveMessageHTML(t)}receiveMessageHTML(e){this.delegate.receivedMessageFromStream(new qn(e))}}function X8(n){var e;const t=(e=n.detail)===null||e===void 0?void 0:e.fetchResponse;if(t instanceof wc)return t}function J8(n){var e;return((e=n.contentType)!==null&&e!==void 0?e:"").startsWith(qn.contentType)}class Q8 extends hi{async render(){this.replaceHeadAndBody(),this.activateScriptElements()}replaceHeadAndBody(){const{documentElement:e,head:t,body:r}=document;e.replaceChild(this.newHead,t),e.replaceChild(this.newElement,r)}activateScriptElements(){for(const e of this.scriptElements){const t=e.parentNode;if(t){const r=this.createScriptElement(e);t.replaceChild(r,e)}}}get newHead(){return this.newSnapshot.headSnapshot.element}get scriptElements(){return[...document.documentElement.querySelectorAll("script")]}}class Cc extends hi{get shouldRender(){return this.newSnapshot.isVisitable&&this.trackedElementsAreIdentical}prepareToRender(){this.mergeHead()}async render(){this.willRender&&this.replaceBody()}finishRendering(){super.finishRendering(),this.isPreview||this.focusFirstAutofocusableElement()}get currentHeadSnapshot(){return this.currentSnapshot.headSnapshot}get newHeadSnapshot(){return this.newSnapshot.headSnapshot}get newElement(){return this.newSnapshot.element}mergeHead(){this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()}replaceBody(){this.preservingPermanentElements(()=>{this.activateNewBody(),this.assignNewBody()})}get trackedElementsAreIdentical(){return this.currentHeadSnapshot.trackedElementSignature==this.newHeadSnapshot.trackedElementSignature}copyNewHeadStylesheetElements(){for(const e of this.newHeadStylesheetElements)document.head.appendChild(e)}copyNewHeadScriptElements(){for(const e of this.newHeadScriptElements)document.head.appendChild(this.createScriptElement(e))}removeCurrentHeadProvisionalElements(){for(const e of this.currentHeadProvisionalElements)document.head.removeChild(e)}copyNewHeadProvisionalElements(){for(const e of this.newHeadProvisionalElements)document.head.appendChild(e)}activateNewBody(){document.adoptNode(this.newElement),this.activateNewBodyScriptElements()}activateNewBodyScriptElements(){for(const e of this.newBodyScriptElements){const t=this.createScriptElement(e);e.replaceWith(t)}}assignNewBody(){document.body&&this.newElement instanceof HTMLBodyElement?document.body.replaceWith(this.newElement):document.documentElement.appendChild(this.newElement)}get newHeadStylesheetElements(){return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot)}get newHeadScriptElements(){return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot)}get currentHeadProvisionalElements(){return this.currentHeadSnapshot.provisionalElements}get newHeadProvisionalElements(){return this.newHeadSnapshot.provisionalElements}get newBodyScriptElements(){return this.newElement.querySelectorAll("script")}}class eG{constructor(e){this.keys=[],this.snapshots={},this.size=e}has(e){return er(e)in this.snapshots}get(e){if(this.has(e)){const t=this.read(e);return this.touch(e),t}}put(e,t){return this.write(e,t),this.touch(e),t}clear(){this.snapshots={}}read(e){return this.snapshots[er(e)]}write(e,t){this.snapshots[er(e)]=t}touch(e){const t=er(e),r=this.keys.indexOf(t);r>-1&&this.keys.splice(r,1),this.keys.unshift(t),this.trim()}trim(){for(const e of this.keys.splice(this.size))delete this.snapshots[e]}}class tG extends Ac{constructor(){super(...arguments);this.snapshotCache=new eG(10),this.lastRenderedLocation=new URL(location.href)}renderPage(e,t=!1,r=!0){const s=new Cc(this.snapshot,e,t,r);return this.render(s)}renderError(e){const t=new Q8(this.snapshot,e,!1);return this.render(t)}clearSnapshotCache(){this.snapshotCache.clear()}async cacheSnapshot(){if(this.shouldCacheSnapshot){this.delegate.viewWillCacheSnapshot();const{snapshot:e,lastRenderedLocation:t}=this;await f8();const r=e.clone();return this.snapshotCache.put(t,r),r}}getCachedSnapshotForLocation(e){return this.snapshotCache.get(e)}get snapshot(){return bt.fromElement(this.element)}get shouldCacheSnapshot(){return this.snapshot.isCacheable}}class nG{constructor(){this.navigator=new W8(this),this.history=new V8(this),this.view=new tG(this,document.documentElement),this.adapter=new z8(this),this.pageObserver=new Z8(this),this.cacheObserver=new H8,this.linkClickObserver=new G8(this),this.formSubmitObserver=new U8(this),this.scrollObserver=new K8(this),this.streamObserver=new Y8(this),this.frameRedirector=new j8(document.documentElement),this.drive=!0,this.enabled=!0,this.progressBarDelay=500,this.started=!1}start(){this.started||(this.pageObserver.start(),this.cacheObserver.start(),this.linkClickObserver.start(),this.formSubmitObserver.start(),this.scrollObserver.start(),this.streamObserver.start(),this.frameRedirector.start(),this.history.start(),this.started=!0,this.enabled=!0)}disable(){this.enabled=!1}stop(){this.started&&(this.pageObserver.stop(),this.cacheObserver.stop(),this.linkClickObserver.stop(),this.formSubmitObserver.stop(),this.scrollObserver.stop(),this.streamObserver.stop(),this.frameRedirector.stop(),this.history.stop(),this.started=!1)}registerAdapter(e){this.adapter=e}visit(e,t={}){this.navigator.proposeVisit(Ee(e),t)}connectStreamSource(e){this.streamObserver.connectStreamSource(e)}disconnectStreamSource(e){this.streamObserver.disconnectStreamSource(e)}renderStreamMessage(e){document.documentElement.appendChild(qn.wrap(e).fragment)}clearCache(){this.view.clearSnapshotCache()}setProgressBarDelay(e){this.progressBarDelay=e}get location(){return this.history.location}get restorationIdentifier(){return this.history.restorationIdentifier}historyPoppedToLocationWithRestorationIdentifier(e,t){this.enabled?this.navigator.startVisit(e,t,{action:"restore",historyChanged:!0}):this.adapter.pageInvalidated()}scrollPositionChanged(e){this.history.updateRestorationData({scrollPosition:e})}willFollowLinkToLocation(e,t){return this.elementDriveEnabled(e)&&Rn(t,this.snapshot.rootLocation)&&this.applicationAllowsFollowingLinkToLocation(e,t)}followedLinkToLocation(e,t){const r=this.getActionForLink(e);this.convertLinkWithMethodClickToFormSubmission(e)||this.visit(t.href,{action:r})}convertLinkWithMethodClickToFormSubmission(e){const t=e.getAttribute("data-turbo-method");if(t){const r=document.createElement("form");r.method=t,r.action=e.getAttribute("href")||"undefined",r.hidden=!0,e.hasAttribute("data-turbo-confirm")&&r.setAttribute("data-turbo-confirm",e.getAttribute("data-turbo-confirm"));const s=this.getTargetFrameForLink(e);return s?(r.setAttribute("data-turbo-frame",s),r.addEventListener("turbo:submit-start",()=>r.remove())):r.addEventListener("submit",()=>r.remove()),document.body.appendChild(r),Re("submit",{cancelable:!0,target:r})}else return!1}allowsVisitingLocationWithAction(e,t){return this.locationWithActionIsSamePage(e,t)||this.applicationAllowsVisitingLocation(e)}visitProposedToLocation(e,t){Ko(e),this.adapter.visitProposedToLocation(e,t)}visitStarted(e){Ko(e.location),e.silent||this.notifyApplicationAfterVisitingLocation(e.location,e.action)}visitCompleted(e){this.notifyApplicationAfterPageLoad(e.getTimingMetrics())}locationWithActionIsSamePage(e,t){return this.navigator.locationWithActionIsSamePage(e,t)}visitScrolledToSamePageLocation(e,t){this.notifyApplicationAfterVisitingSamePageLocation(e,t)}willSubmitForm(e,t){const r=li(e,t);return this.elementDriveEnabled(e)&&(!t||this.elementDriveEnabled(t))&&Rn(Ee(r),this.snapshot.rootLocation)}formSubmitted(e,t){this.navigator.submitForm(e,t)}pageBecameInteractive(){this.view.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()}pageLoaded(){this.history.assumeControlOfScrollRestoration()}pageWillUnload(){this.history.relinquishControlOfScrollRestoration()}receivedMessageFromStream(e){this.renderStreamMessage(e)}viewWillCacheSnapshot(){var e;!((e=this.navigator.currentVisit)===null||e===void 0)&&e.silent||this.notifyApplicationBeforeCachingSnapshot()}allowsImmediateRender({element:e},t){return!this.notifyApplicationBeforeRender(e,t).defaultPrevented}viewRenderedSnapshot(e,t){this.view.lastRenderedLocation=this.history.location,this.notifyApplicationAfterRender()}viewInvalidated(){this.adapter.pageInvalidated()}frameLoaded(e){this.notifyApplicationAfterFrameLoad(e)}frameRendered(e,t){this.notifyApplicationAfterFrameRender(e,t)}applicationAllowsFollowingLinkToLocation(e,t){return!this.notifyApplicationAfterClickingLinkToLocation(e,t).defaultPrevented}applicationAllowsVisitingLocation(e){return!this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented}notifyApplicationAfterClickingLinkToLocation(e,t){return Re("turbo:click",{target:e,detail:{url:t.href},cancelable:!0})}notifyApplicationBeforeVisitingLocation(e){return Re("turbo:before-visit",{detail:{url:e.href},cancelable:!0})}notifyApplicationAfterVisitingLocation(e,t){return ks(document.documentElement),Re("turbo:visit",{detail:{url:e.href,action:t}})}notifyApplicationBeforeCachingSnapshot(){return Re("turbo:before-cache")}notifyApplicationBeforeRender(e,t){return Re("turbo:before-render",{detail:{newBody:e,resume:t},cancelable:!0})}notifyApplicationAfterRender(){return Re("turbo:render")}notifyApplicationAfterPageLoad(e={}){return xs(document.documentElement),Re("turbo:load",{detail:{url:this.location.href,timing:e}})}notifyApplicationAfterVisitingSamePageLocation(e,t){dispatchEvent(new HashChangeEvent("hashchange",{oldURL:e.toString(),newURL:t.toString()}))}notifyApplicationAfterFrameLoad(e){return Re("turbo:frame-load",{target:e})}notifyApplicationAfterFrameRender(e,t){return Re("turbo:frame-render",{detail:{fetchResponse:e},target:t,cancelable:!0})}elementDriveEnabled(e){const t=e==null?void 0:e.closest("[data-turbo]");return this.drive?t?t.getAttribute("data-turbo")!="false":!0:t?t.getAttribute("data-turbo")=="true":!1}getActionForLink(e){const t=e.getAttribute("data-turbo-action");return di(t)?t:"advance"}getTargetFrameForLink(e){const t=e.getAttribute("data-turbo-frame");if(t)return t;{const r=e.closest("turbo-frame");if(r)return r.id}}get snapshot(){return this.view.snapshot}}function Ko(n){Object.defineProperties(n,rG)}const rG={absoluteURL:{get(){return this.toString()}}},xe=new nG,{navigator:sG}=xe;function Tc(){xe.start()}function iG(n){xe.registerAdapter(n)}function oG(n,e){xe.visit(n,e)}function aG(n){xe.connectStreamSource(n)}function cG(n){xe.disconnectStreamSource(n)}function lG(n){xe.renderStreamMessage(n)}function uG(){xe.clearCache()}function $c(n){xe.setProgressBarDelay(n)}function hG(n){Fn.confirmMethod=n}var dG=Object.freeze({__proto__:null,navigator:sG,session:xe,PageRenderer:Cc,PageSnapshot:bt,start:Tc,registerAdapter:iG,visit:oG,connectStreamSource:aG,disconnectStreamSource:cG,renderStreamMessage:lG,clearCache:uG,setProgressBarDelay:$c,setConfirmMethod:hG});class pG{constructor(e){this.fetchResponseLoaded=t=>{},this.currentFetchRequest=null,this.resolveVisitPromise=()=>{},this.connected=!1,this.hasBeenLoaded=!1,this.settingSourceURL=!1,this.element=e,this.view=new E8(this,this.element),this.appearanceObserver=new v8(this,this.element),this.linkInterceptor=new Sc(this,this.element),this.formInterceptor=new Ec(this,this.element)}connect(){this.connected||(this.connected=!0,this.reloadable=!1,this.loadingStyle==gt.lazy&&this.appearanceObserver.start(),this.linkInterceptor.start(),this.formInterceptor.start(),this.sourceURLChanged())}disconnect(){this.connected&&(this.connected=!1,this.appearanceObserver.stop(),this.linkInterceptor.stop(),this.formInterceptor.stop())}disabledChanged(){this.loadingStyle==gt.eager&&this.loadSourceURL()}sourceURLChanged(){(this.loadingStyle==gt.eager||this.hasBeenLoaded)&&this.loadSourceURL()}loadingStyleChanged(){this.loadingStyle==gt.lazy?this.appearanceObserver.start():(this.appearanceObserver.stop(),this.loadSourceURL())}async loadSourceURL(){if(!this.settingSourceURL&&this.enabled&&this.isActive&&(this.reloadable||this.sourceURL!=this.currentURL)){const e=this.currentURL;if(this.currentURL=this.sourceURL,this.sourceURL)try{this.element.loaded=this.visit(Ee(this.sourceURL)),this.appearanceObserver.stop(),await this.element.loaded,this.hasBeenLoaded=!0}catch(t){throw this.currentURL=e,t}}}async loadResponse(e){(e.redirected||e.succeeded&&e.isHTML)&&(this.sourceURL=e.response.url);try{const t=await e.responseHTML;if(t){const{body:r}=kc(t),s=new Or(await this.extractForeignFrameElement(r)),i=new $8(this.view.snapshot,s,!1,!1);this.view.renderPromise&&await this.view.renderPromise,await this.view.render(i),xe.frameRendered(e,this.element),xe.frameLoaded(this.element),this.fetchResponseLoaded(e)}}catch(t){console.error(t),this.view.invalidate()}finally{this.fetchResponseLoaded=()=>{}}}elementAppearedInViewport(e){this.loadSourceURL()}shouldInterceptLinkClick(e,t){return e.hasAttribute("data-turbo-method")?!1:this.shouldInterceptNavigation(e)}linkClickIntercepted(e,t){this.reloadable=!0,this.navigateFrame(e,t)}shouldInterceptFormSubmission(e,t){return this.shouldInterceptNavigation(e,t)}formSubmissionIntercepted(e,t){this.formSubmission&&this.formSubmission.stop(),this.reloadable=!1,this.formSubmission=new Fn(this,e,t);const{fetchRequest:r}=this.formSubmission;this.prepareHeadersForRequest(r.headers,r),this.formSubmission.start()}prepareHeadersForRequest(e,t){e["Turbo-Frame"]=this.id}requestStarted(e){ks(this.element)}requestPreventedHandlingResponse(e,t){this.resolveVisitPromise()}async requestSucceededWithResponse(e,t){await this.loadResponse(t),this.resolveVisitPromise()}requestFailedWithResponse(e,t){console.error(t),this.resolveVisitPromise()}requestErrored(e,t){console.error(t),this.resolveVisitPromise()}requestFinished(e){xs(this.element)}formSubmissionStarted({formElement:e}){ks(e,this.findFrameElement(e))}formSubmissionSucceededWithResponse(e,t){const r=this.findFrameElement(e.formElement,e.submitter);this.proposeVisitIfNavigatedWithAction(r,e.formElement,e.submitter),r.delegate.loadResponse(t)}formSubmissionFailedWithResponse(e,t){this.element.delegate.loadResponse(t)}formSubmissionErrored(e,t){console.error(t)}formSubmissionFinished({formElement:e}){xs(e,this.findFrameElement(e))}allowsImmediateRender(e,t){return!0}viewRenderedSnapshot(e,t){}viewInvalidated(){}async visit(e){var t;const r=new ui(this,ke.get,e,new URLSearchParams,this.element);return(t=this.currentFetchRequest)===null||t===void 0||t.cancel(),this.currentFetchRequest=r,new Promise(s=>{this.resolveVisitPromise=()=>{this.resolveVisitPromise=()=>{},this.currentFetchRequest=null,s()},r.perform()})}navigateFrame(e,t,r){const s=this.findFrameElement(e,r);this.proposeVisitIfNavigatedWithAction(s,e,r),s.setAttribute("reloadable",""),s.src=t}proposeVisitIfNavigatedWithAction(e,t,r){const s=sr("data-turbo-action",r,t,e);if(di(s)){const{visitCachedSnapshot:i}=new fG(e);e.delegate.fetchResponseLoaded=o=>{if(e.src){const{statusCode:a,redirected:c}=o,l=e.ownerDocument.documentElement.outerHTML,u={statusCode:a,redirected:c,responseHTML:l};xe.visit(e.src,{action:s,response:u,visitCachedSnapshot:i,willRender:!1})}}}}findFrameElement(e,t){var r;const s=sr("data-turbo-frame",t,e)||this.element.getAttribute("target");return(r=Yo(s))!==null&&r!==void 0?r:this.element}async extractForeignFrameElement(e){let t;const r=CSS.escape(this.id);try{if(t=Xo(e.querySelector(`turbo-frame#${r}`),this.currentURL))return t;if(t=Xo(e.querySelector(`turbo-frame[src][recurse~=${r}]`),this.currentURL))return await t.loaded,await this.extractForeignFrameElement(t);console.error(`Response has no matching <turbo-frame id="${r}"> element`)}catch(s){console.error(s)}return new wt}formActionIsVisitable(e,t){const r=li(e,t);return Rn(Ee(r),this.rootLocation)}shouldInterceptNavigation(e,t){const r=sr("data-turbo-frame",t,e)||this.element.getAttribute("target");if(e instanceof HTMLFormElement&&!this.formActionIsVisitable(e,t)||!this.enabled||r=="_top")return!1;if(r){const s=Yo(r);if(s)return!s.disabled}return!(!xe.elementDriveEnabled(e)||t&&!xe.elementDriveEnabled(t))}get id(){return this.element.id}get enabled(){return!this.element.disabled}get sourceURL(){if(this.element.src)return this.element.src}get reloadable(){return this.findFrameElement(this.element).hasAttribute("reloadable")}set reloadable(e){const t=this.findFrameElement(this.element);e?t.setAttribute("reloadable",""):t.removeAttribute("reloadable")}set sourceURL(e){this.settingSourceURL=!0,this.element.src=e!=null?e:null,this.currentURL=this.element.src,this.settingSourceURL=!1}get loadingStyle(){return this.element.loading}get isLoading(){return this.formSubmission!==void 0||this.resolveVisitPromise()!==void 0}get isActive(){return this.element.isActive&&this.connected}get rootLocation(){var e;const t=this.element.ownerDocument.querySelector('meta[name="turbo-root"]'),r=(e=t==null?void 0:t.content)!==null&&e!==void 0?e:"/";return Ee(r)}}class fG{constructor(e){this.visitCachedSnapshot=({element:t})=>{var r;const{id:s,clone:i}=this;(r=t.querySelector("#"+s))===null||r===void 0||r.replaceWith(i)},this.clone=e.cloneNode(!0),this.id=e.id}}function Yo(n){if(n!=null){const e=document.getElementById(n);if(e instanceof wt)return e}}function Xo(n,e){if(n){const t=n.getAttribute("src");if(t!=null&&e!=null&&l8(t,e))throw new Error(`Matching <turbo-frame id="${n.id}"> element has a source URL which references itself`);if(n.ownerDocument!==document&&(n=document.importNode(n,!0)),n instanceof wt)return n.connectedCallback(),n.disconnectedCallback(),n}}const mG={after(){this.targetElements.forEach(n=>{var e;return(e=n.parentElement)===null||e===void 0?void 0:e.insertBefore(this.templateContent,n.nextSibling)})},append(){this.removeDuplicateTargetChildren(),this.targetElements.forEach(n=>n.append(this.templateContent))},before(){this.targetElements.forEach(n=>{var e;return(e=n.parentElement)===null||e===void 0?void 0:e.insertBefore(this.templateContent,n)})},prepend(){this.removeDuplicateTargetChildren(),this.targetElements.forEach(n=>n.prepend(this.templateContent))},remove(){this.targetElements.forEach(n=>n.remove())},replace(){this.targetElements.forEach(n=>n.replaceWith(this.templateContent))},update(){this.targetElements.forEach(n=>{n.innerHTML="",n.append(this.templateContent)})}};class gG extends HTMLElement{async connectedCallback(){try{await this.render()}catch(e){console.error(e)}finally{this.disconnect()}}async render(){var e;return(e=this.renderPromise)!==null&&e!==void 0?e:this.renderPromise=(async()=>{this.dispatchEvent(this.beforeRenderEvent)&&(await rr(),this.performAction())})()}disconnect(){try{this.remove()}catch{}}removeDuplicateTargetChildren(){this.duplicateChildren.forEach(e=>e.remove())}get duplicateChildren(){var e;const t=this.targetElements.flatMap(s=>[...s.children]).filter(s=>!!s.id),r=[...(e=this.templateContent)===null||e===void 0?void 0:e.children].filter(s=>!!s.id).map(s=>s.id);return t.filter(s=>r.includes(s.id))}get performAction(){if(this.action){const e=mG[this.action];if(e)return e;this.raise("unknown action")}this.raise("action attribute is missing")}get targetElements(){if(this.target)return this.targetElementsById;if(this.targets)return this.targetElementsByQuery;this.raise("target or targets attribute is missing")}get templateContent(){return this.templateElement.content.cloneNode(!0)}get templateElement(){if(this.firstElementChild instanceof HTMLTemplateElement)return this.firstElementChild;this.raise("first child element must be a <template> element")}get action(){return this.getAttribute("action")}get target(){return this.getAttribute("target")}get targets(){return this.getAttribute("targets")}raise(e){throw new Error(`${this.description}: ${e}`)}get description(){var e,t;return(t=((e=this.outerHTML.match(/<[^>]+>/))!==null&&e!==void 0?e:[])[0])!==null&&t!==void 0?t:"<turbo-stream>"}get beforeRenderEvent(){return new CustomEvent("turbo:before-stream-render",{bubbles:!0,cancelable:!0})}get targetElementsById(){var e;const t=(e=this.ownerDocument)===null||e===void 0?void 0:e.getElementById(this.target);return t!==null?[t]:[]}get targetElementsByQuery(){var e;const t=(e=this.ownerDocument)===null||e===void 0?void 0:e.querySelectorAll(this.targets);return t.length!==0?Array.prototype.slice.call(t):[]}}wt.delegateConstructor=pG;customElements.define("turbo-frame",wt);customElements.define("turbo-stream",gG);(()=>{let n=document.currentScript;if(!!n&&!n.hasAttribute("data-turbo-suppress-warning")){for(;n=n.parentElement;)if(n==document.body)return console.warn(xc`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `,n.outerHTML)}})();window.Turbo=dG;Tc();const Jo="[A-Za-z$_][0-9A-Za-z$_]*",bG=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],vG=["true","false","null","undefined","NaN","Infinity"],Rc=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Dc=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Lc=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],yG=["arguments","this","super","console","window","document","localStorage","module","global"],_G=[].concat(Lc,Rc,Dc);function wG(n){const e=n.regex,t=(m,{after:E})=>{const C="</"+m[0].slice(1);return m.input.indexOf(C,E)!==-1},r=Jo,s={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,E)=>{const C=m[0].length+m.index,O=m.input[C];if(O==="<"||O===","){E.ignoreMatch();return}O===">"&&(t(m,{after:C})||E.ignoreMatch());let q;if((q=m.input.substr(C).match(/^\s+extends\s+/))&&q.index===0){E.ignoreMatch();return}}},a={$pattern:Jo,keyword:bG,literal:vG,built_in:_G,"variable.language":yG},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},d={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,p],subLanguage:"css"}},v={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,p]},A=n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),k={className:"comment",variants:[A,n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},_=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,d,y,v,h];p.contains=_.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(_)});const w=[].concat(k,p.contains),R=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),$={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R},x={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,e.concat(r,"(",e.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Rc,...Dc]}},G={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[$],illegal:/%/},D={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function X(m){return e.concat("(?!",m.join("|"),")")}const ce={match:e.concat(/\b/,X([...Lc,"super"]),r,e.lookahead(/\(/)),className:"title.function",relevance:0},M={begin:e.concat(/\./,e.lookahead(e.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},b={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},$]},S="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(S)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[$]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),G,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,d,y,v,k,h,F,{className:"attr",begin:r+e.lookahead(":"),relevance:0},f,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[k,n.REGEXP_MODE,{className:"function",begin:S,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:i},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[$,n.inherit(n.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},M,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[$]},ce,D,x,b,{match:/\$[(.]/}]}}const fr="[A-Za-z$_][0-9A-Za-z$_]*",Mc=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Oc=["true","false","null","undefined","NaN","Infinity"],Nc=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Ic=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Pc=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],qc=["arguments","this","super","console","window","document","localStorage","module","global"],Fc=[].concat(Pc,Nc,Ic);function kG(n){const e=n.regex,t=(m,{after:E})=>{const C="</"+m[0].slice(1);return m.input.indexOf(C,E)!==-1},r=fr,s={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,E)=>{const C=m[0].length+m.index,O=m.input[C];if(O==="<"||O===","){E.ignoreMatch();return}O===">"&&(t(m,{after:C})||E.ignoreMatch());let q;if((q=m.input.substr(C).match(/^\s+extends\s+/))&&q.index===0){E.ignoreMatch();return}}},a={$pattern:fr,keyword:Mc,literal:Oc,built_in:Fc,"variable.language":qc},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},d={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,p],subLanguage:"css"}},v={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,p]},A=n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),k={className:"comment",variants:[A,n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},_=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,d,y,v,h];p.contains=_.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(_)});const w=[].concat(k,p.contains),R=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),$={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R},x={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,e.concat(r,"(",e.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Nc,...Ic]}},G={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},j={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[$],illegal:/%/},D={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function X(m){return e.concat("(?!",m.join("|"),")")}const ce={match:e.concat(/\b/,X([...Pc,"super"]),r,e.lookahead(/\(/)),className:"title.function",relevance:0},M={begin:e.concat(/\./,e.lookahead(e.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},b={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},$]},S="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(S)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[$]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),G,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,d,y,v,k,h,F,{className:"attr",begin:r+e.lookahead(":"),relevance:0},f,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[k,n.REGEXP_MODE,{className:"function",begin:S,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:i},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},j,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[$,n.inherit(n.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},M,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[$]},ce,D,x,b,{match:/\$[(.]/}]}}function xG(n){const e=kG(n),t=fr,r=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[e.exports.CLASS_REFERENCE]},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},contains:[e.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},a=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],c={$pattern:fr,keyword:Mc.concat(a),literal:Oc,built_in:Fc.concat(r),"variable.language":qc},l={className:"meta",begin:"@"+t},u=(p,d,y)=>{const v=p.contains.findIndex(A=>A.label===d);if(v===-1)throw new Error("can not find mode to replace");p.contains.splice(v,1,y)};Object.assign(e.keywords,c),e.exports.PARAMS_CONTAINS.push(l),e.contains=e.contains.concat([l,s,i]),u(e,"shebang",n.SHEBANG()),u(e,"use_strict",o);const h=e.contains.find(p=>p.label==="func.def");return h.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx"]}),e}function EG(n){const e=n.regex,t=e.concat(/[A-Z_]/,e.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),r=/[A-Za-z0-9._:-]+/,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=n.inherit(i,{begin:/\(/,end:/\)/}),a=n.inherit(n.APOS_STRING_MODE,{className:"string"}),c=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,o,c,a]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function AG(n){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}var SG=`pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}`,Qo=!1,en={false:"push",true:"unshift",after:"push",before:"unshift"},mr={isPermalinkSymbol:!0};function Es(n,e,t,r){var s;if(!Qo){var i="Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#todo-anchor-or-file";typeof process=="object"&&process&&process.emitWarning?process.emitWarning(i):console.warn(i),Qo=!0}var o=[Object.assign(new t.Token("link_open","a",1),{attrs:[].concat(e.permalinkClass?[["class",e.permalinkClass]]:[],[["href",e.permalinkHref(n,t)]],Object.entries(e.permalinkAttrs(n,t)))}),Object.assign(new t.Token("html_block","",0),{content:e.permalinkSymbol,meta:mr}),new t.Token("link_close","a",-1)];e.permalinkSpace&&t.tokens[r+1].children[en[e.permalinkBefore]](Object.assign(new t.Token("text","",0),{content:" "})),(s=t.tokens[r+1].children)[en[e.permalinkBefore]].apply(s,o)}function Bc(n){return"#"+n}function zc(n){return{}}var CG={class:"header-anchor",symbol:"#",renderHref:Bc,renderAttrs:zc};function Bn(n){function e(t){return t=Object.assign({},e.defaults,t),function(r,s,i,o){return n(r,t,s,i,o)}}return e.defaults=Object.assign({},CG),e.renderPermalinkImpl=n,e}var Nr=Bn(function(n,e,t,r,s){var i,o=[Object.assign(new r.Token("link_open","a",1),{attrs:[].concat(e.class?[["class",e.class]]:[],[["href",e.renderHref(n,r)]],e.ariaHidden?[["aria-hidden","true"]]:[],Object.entries(e.renderAttrs(n,r)))}),Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:mr}),new r.Token("link_close","a",-1)];if(e.space){var a=typeof e.space=="string"?e.space:" ";r.tokens[s+1].children[en[e.placement]](Object.assign(new r.Token(typeof e.space=="string"?"html_inline":"text","",0),{content:a}))}(i=r.tokens[s+1].children)[en[e.placement]].apply(i,o)});Object.assign(Nr.defaults,{space:!0,placement:"after",ariaHidden:!1});var Ct=Bn(Nr.renderPermalinkImpl);Ct.defaults=Object.assign({},Nr.defaults,{ariaHidden:!0});var Hc=Bn(function(n,e,t,r,s){var i=[Object.assign(new r.Token("link_open","a",1),{attrs:[].concat(e.class?[["class",e.class]]:[],[["href",e.renderHref(n,r)]],Object.entries(e.renderAttrs(n,r)))})].concat(e.safariReaderFix?[new r.Token("span_open","span",1)]:[],r.tokens[s+1].children,e.safariReaderFix?[new r.Token("span_close","span",-1)]:[],[new r.Token("link_close","a",-1)]);r.tokens[s+1]=Object.assign(new r.Token("inline","",0),{children:i})});Object.assign(Hc.defaults,{safariReaderFix:!1});var ea=Bn(function(n,e,t,r,s){var i;if(!["visually-hidden","aria-label","aria-describedby","aria-labelledby"].includes(e.style))throw new Error("`permalink.linkAfterHeader` called with unknown style option `"+e.style+"`");if(!["aria-describedby","aria-labelledby"].includes(e.style)&&!e.assistiveText)throw new Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `"+e.style+"` style");if(e.style==="visually-hidden"&&!e.visuallyHiddenClass)throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");var o=r.tokens[s+1].children.filter(function(h){return h.type==="text"||h.type==="code_inline"}).reduce(function(h,p){return h+p.content},""),a=[],c=[];if(e.class&&c.push(["class",e.class]),c.push(["href",e.renderHref(n,r)]),c.push.apply(c,Object.entries(e.renderAttrs(n,r))),e.style==="visually-hidden"){if(a.push(Object.assign(new r.Token("span_open","span",1),{attrs:[["class",e.visuallyHiddenClass]]}),Object.assign(new r.Token("text","",0),{content:e.assistiveText(o)}),new r.Token("span_close","span",-1)),e.space){var l=typeof e.space=="string"?e.space:" ";a[en[e.placement]](Object.assign(new r.Token(typeof e.space=="string"?"html_inline":"text","",0),{content:l}))}a[en[e.placement]](Object.assign(new r.Token("span_open","span",1),{attrs:[["aria-hidden","true"]]}),Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:mr}),new r.Token("span_close","span",-1))}else a.push(Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:mr}));e.style==="aria-label"?c.push(["aria-label",e.assistiveText(o)]):["aria-describedby","aria-labelledby"].includes(e.style)&&c.push([e.style,n]);var u=[Object.assign(new r.Token("link_open","a",1),{attrs:c})].concat(a,[new r.Token("link_close","a",-1)]);(i=r.tokens).splice.apply(i,[s+3,0].concat(u)),e.wrapper&&(r.tokens.splice(s,0,Object.assign(new r.Token("html_block","",0),{content:e.wrapper[0]+`
`})),r.tokens.splice(s+3+u.length+1,0,Object.assign(new r.Token("html_block","",0),{content:e.wrapper[1]+`
`})))});function ta(n,e,t,r){var s=n,i=r;if(t&&Object.prototype.hasOwnProperty.call(e,s))throw new Error("User defined `id` attribute `"+n+"` is not unique. Please fix it in your Markdown to continue.");for(;Object.prototype.hasOwnProperty.call(e,s);)s=n+"-"+i,i+=1;return e[s]=!0,s}function Wt(n,e){e=Object.assign({},Wt.defaults,e),n.core.ruler.push("anchor",function(t){for(var r,s={},i=t.tokens,o=Array.isArray(e.level)?(r=e.level,function(h){return r.includes(h)}):function(h){return function(p){return p>=h}}(e.level),a=0;a<i.length;a++){var c=i[a];if(c.type==="heading_open"&&o(Number(c.tag.substr(1)))){var l=e.getTokensText(i[a+1].children),u=c.attrGet("id");u=u==null?ta(e.slugify(l),s,!1,e.uniqueSlugStartIndex):ta(u,s,!0,e.uniqueSlugStartIndex),c.attrSet("id",u),e.tabIndex!==!1&&c.attrSet("tabindex",""+e.tabIndex),typeof e.permalink=="function"?e.permalink(u,e,t,a):(e.permalink||e.renderPermalink&&e.renderPermalink!==Es)&&e.renderPermalink(u,e,t,a),a=i.indexOf(c),e.callback&&e.callback(c,{slug:u,title:l})}}})}Object.assign(ea.defaults,{style:"visually-hidden",space:!0,placement:"after",wrapper:null}),Wt.permalink={__proto__:null,legacy:Es,renderHref:Bc,renderAttrs:zc,makePermalink:Bn,linkInsideHeader:Nr,ariaHidden:Ct,headerLink:Hc,linkAfterHeader:ea},Wt.defaults={level:1,slugify:function(n){return encodeURIComponent(String(n).trim().toLowerCase().replace(/\s+/g,"-"))},uniqueSlugStartIndex:1,tabIndex:"-1",getTokensText:function(n){return n.filter(function(e){return["text","code_inline"].includes(e.type)}).map(function(e){return e.content}).join("")},permalink:!1,renderPermalink:Es,permalinkClass:Ct.defaults.class,permalinkSpace:Ct.defaults.space,permalinkSymbol:"\xB6",permalinkBefore:Ct.defaults.placement==="before",permalinkHref:Ct.defaults.renderHref,permalinkAttrs:Ct.defaults.renderAttrs},Wt.default=Wt;const TG=function(n){return encodeURIComponent(String(n).trim().toLowerCase().replace(/\s+/g,"-"))},$G={includeLevel:[1,2],containerClass:"table-of-contents",slugify:TG,markerPattern:/^\[\[toc\]\]/im,listType:"ul",format:function(n,e){return e.renderInline(n)},forceFullToc:!1,containerHeaderHtml:void 0,containerFooterHtml:void 0,transformLink:void 0};function RG(n,e,t){const r=[];let s=null;return e.forEach(i=>{if(i.type==="heading_open"){const o=DG(i),a=parseInt(i.tag.toLowerCase().replace("h",""),10);n.indexOf(a)>=0&&(s={level:a,text:null,anchor:o||null})}else if(s&&i.type==="inline"){const o=i.children.filter(a=>a.type==="text"||a.type==="code_inline").reduce((a,c)=>a+c.content,"");s.text=o,s.anchor||(s.anchor=t.slugify(o,i.content))}else i.type==="heading_close"&&(s&&r.push(s),s=null)}),r}function DG(n){if(n&&n.attrs&&n.attrs.length>0){const e=n.attrs.find(t=>Array.isArray(t)&&t.length>=2?t[0]==="id":!1);if(e&&Array.isArray(e)&&e.length>=2){const[t,r]=e;return r}}return null}function LG(n){return Math.min(...n.map(e=>e.level))}function us(n,e,t,r){const s={level:n,text:e,anchor:t,children:[],parent:r};return r.children.push(s),s}function MG(n){const e={level:LG(n)-1,anchor:null,text:null,children:[],parent:null};let t=e,r=t;return n.forEach(s=>{if(s.level>r.level)Array.from({length:s.level-r.level}).forEach(i=>{t=r,r=us(s.level,null,null,t)}),r.text=s.text,r.anchor=s.anchor;else if(s.level===r.level)r=us(s.level,s.text,s.anchor,t);else if(s.level<r.level){for(let i=0;i<r.level-s.level;i++)t=t.parent;r=us(s.level,s.text,s.anchor,t)}}),e}function Uc(n,e,t){return"<"+e.listType+">"+n.children.map(r=>{let s="<li>",i=r.anchor;e&&e.transformLink&&(i=e.transformLink(i));let o=r.text?e.format(r.text,t,i):null;return s+=i?`<a href="#${i}">${o}</a>`:o||"",s+(r.children.length>0?Uc(r,e,t):"")+"</li>"}).join("")+"</"+e.listType+">"}var OG=function(n,e){const t=Object.assign({},$G,e),r=t.markerPattern;let s;function i(o,a){let c,l;if(o.src.charCodeAt(o.pos)!==91||a||(l=r.exec(o.src.substr(o.pos)),l=l?l.filter(function(h){return h}):[],l.length<1))return!1;c=o.push("toc_open","toc",1),c.markup="[[toc]]",c=o.push("toc_body","",0),c=o.push("toc_close","toc",-1);var u=o.src.indexOf(`
`,o.pos);return u!==-1?o.pos=u:o.pos=o.pos+o.posMax+1,!0}n.renderer.rules.toc_open=function(o,a){var c='<div class="'+t.containerClass+'">';return t.containerHeaderHtml&&(c+=t.containerHeaderHtml),c},n.renderer.rules.toc_close=function(o,a){var c="";return t.containerFooterHtml&&(c=t.containerFooterHtml),c+"</div>"},n.renderer.rules.toc_body=function(o,a){if(t.forceFullToc)throw"forceFullToc was removed in version 0.5.0. For more information, see https://github.com/Oktavilla/markdown-it-table-of-contents/pull/41";{const c=RG(t.includeLevel,s.tokens,t),l=MG(c);return Uc(l,t,n)}},n.core.ruler.push("grab_state",function(o){s=o}),n.inline.ruler.after("emphasis","toc",i)},NG=Object.defineProperty,IG=Object.getOwnPropertyDescriptor,jc=(n,e,t,r)=>{for(var s=r>1?void 0:r?IG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&NG(e,t,s),s};let gr=class extends le{get icone(){return this.theme!=="light"?Wh:Vh}connectedCallback(){super.connectedCallback(),this.theme=localStorage.getItem("kami-theme-mode")||"light",document.addEventListener("theme",({detail:n})=>{this.theme=n.theme})}updateTheme(){const n=document.querySelector("kami-theme");!n||n.updateTheme(this.theme==="light"?"dark":"light")}render(){return P`
      <svg @click=${this.updateTheme} class="mode" viewBox="0 0 24 25">
        <path d=${this.icone}></path>
      </svg>  
    `}};gr.styles=he`
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
  `;jc([_t()],gr.prototype,"theme",2);gr=jc([we("mode-element")],gr);var PG=Object.defineProperty,qG=Object.getOwnPropertyDescriptor,zn=(n,e,t,r)=>{for(var s=r>1?void 0:r?qG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&PG(e,t,s),s};let Nt=class extends le{constructor(){super(...arguments);this.stroke=!1,this.background=!1,this.small=!1,this.href=""}render(){return P`
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
    `}};Nt.styles=he`
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
  `;zn([U()],Nt.prototype,"stroke",2);zn([U()],Nt.prototype,"background",2);zn([U()],Nt.prototype,"small",2);zn([U()],Nt.prototype,"href",2);Nt=zn([we("button-element")],Nt);var FG=Object.defineProperty,BG=Object.getOwnPropertyDescriptor,Ir=(n,e,t,r)=>{for(var s=r>1?void 0:r?BG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&FG(e,t,s),s};let tn=class extends le{render(){return P`
      <h1 class="title" style="
        text-align: ${this.align||"left"};
        font-size: ${this.size||"72"}px;
        margin: ${this.margin||"0px auto 20px"}
      ">
        <span>
          <slot></slot>
        </span>  
      </h1>
    `}};tn.styles=he`
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
  `;Ir([U()],tn.prototype,"align",2);Ir([U()],tn.prototype,"size",2);Ir([U()],tn.prototype,"margin",2);tn=Ir([we("title-element")],tn);var zG=Object.defineProperty,HG=Object.getOwnPropertyDescriptor,Pr=(n,e,t,r)=>{for(var s=r>1?void 0:r?HG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&zG(e,t,s),s};let nn=class extends le{constructor(){super(...arguments);this.width=0,this.navIsOpen=!1}connectedCallback(){super.connectedCallback();const n=localStorage.getItem("kami-theme-mode");n&&["light","dark"].includes(n)&&(this.theme=n),document.addEventListener("theme",({detail:e})=>{this.theme=e.theme}),window.addEventListener("resize",this.updateWindowSize.bind(this)),this.updateWindowSize()}updateWindowSize(){this.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}openNav(){this.navIsOpen=!0}closeNav(){this.navIsOpen=!1}renderNav(){return P`
      <nav class="menu__nav">
        <a class="menu__link" href="/guide.html">guide</a>
        <a class="menu__link" href="/components.html">components</a>
        <a class="menu__link" href="https://github.com/Kamiapp-fr/kami-collection">github</a>
        <mode-element class="menu__link"></mode-element>
      </nav>
    `}renderResponsizeNav(){return P`
      <svg @click=${this.openNav} class="menu__icon" viewBox="0 0 24 25">
        <path d=${Gh}></path>
      </svg>  
    `}renderCloseNav(){return P`
      <svg @click=${this.closeNav} class="menu__icon menu__icon--close" viewBox="0 0 24 25">
        <path d=${qa}></path>
      </svg>  
    `}render(){return P`
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
    `}};nn.styles=he`
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
  `;Pr([_t()],nn.prototype,"theme",2);Pr([_t()],nn.prototype,"width",2);Pr([_t()],nn.prototype,"navIsOpen",2);nn=Pr([we("menu-element")],nn);var UG=Object.defineProperty,jG=Object.getOwnPropertyDescriptor,pi=(n,e,t,r)=>{for(var s=r>1?void 0:r?jG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&UG(e,t,s),s};let Ln=class extends le{constructor(){super(...arguments);this.name="",this.summary=""}get nameNoPrefix(){return this.name.split("-").pop()}render(){return P`
      <div class="component">
        <h2 class="component__name">${this.name}</h2>
        <h3 class="component__description">${this.summary}</h3>
        <div class="component__cta">
          <button-element href="/docs/${this.nameNoPrefix}.html" background="true" small="true">Docs</button-element>
          <button-element href="/playgrounds/${this.nameNoPrefix}.html" stroke="true" small="true">Playground</button-element>
        </div>
      </div>
    `}};Ln.styles=he`
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
  `;pi([U()],Ln.prototype,"name",2);pi([U()],Ln.prototype,"summary",2);Ln=pi([we("component-element")],Ln);const VG=he`
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
`;var GG=Object.defineProperty,WG=Object.getOwnPropertyDescriptor,Vc=(n,e,t,r)=>{for(var s=r>1?void 0:r?WG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&GG(e,t,s),s};let As=class extends Vs{static get styles(){return[Us,js,VG,he`
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

        header [part="select"] {
          display: none;
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
      `]}constructor(){super();this.src="/custom-elements.json"}connectedCallback(){if(super.connectedCallback(),!this.element)throw new Error("Missing element");this.only=[this.element],this.selected=this.element}firstUpdated(){this.setTemplates()}setTemplates(n){_r(Number(this._id),n||Array.from(this.querySelectorAll("template")))}render(){return P`
      <div class="playground">
        ${super.render()}
      </div>
    `}};Vc([U()],As.prototype,"element",2);As=Vc([we("playground-element")],As);var ZG=Object.defineProperty,KG=Object.getOwnPropertyDescriptor,YG=(n,e,t,r)=>{for(var s=r>1?void 0:r?KG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ZG(e,t,s),s};let Ss=class extends le{render(){return P`
      <footer class="footer">
        <p>Made with ☕ by the <a href="https://www.kamiapp.fr/en">Kami</a> team</p>
        <p>Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a></p>
        <p>Copyright © 2019-${new Date().getFullYear()} Kami</p>
      </footer>
    `}};Ss.styles=he`
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
  `;Ss=YG([we("footer-element")],Ss);var XG=Object.defineProperty,JG=Object.getOwnPropertyDescriptor,QG=(n,e,t,r)=>{for(var s=r>1?void 0:r?JG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&XG(e,t,s),s};let Cs=class extends le{render(){return P`
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
    `}};Cs.styles=he`
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
  `;Cs=QG([we("home-element")],Cs);var eW=Object.defineProperty,tW=Object.getOwnPropertyDescriptor,Gc=(n,e,t,r)=>{for(var s=r>1?void 0:r?tW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&eW(e,t,s),s};let br=class extends le{constructor(){super(...arguments);this.name="Guide"}render(){return P`
      <main class="guide">
        <title-element>${this.name}</title-element>
        <kami-markdown>
          <slot></slot>
        </kami-markdown>
      </main>
    `}};br.styles=he`
    .guide {
      padding: 0 40px;    
      margin: 40px 0px;
      box-sizing: border-box;
      min-height: calc(100vh - 185px);
    }

    @media screen and (max-width: 700px) {
      .guide {
        padding: 0px 30px;
      }

      title-element {
        margin-bottom: 10px;
      }
    }
  `;Gc([U()],br.prototype,"name",2);br=Gc([we("guide-element")],br);var nW=Object.defineProperty,rW=Object.getOwnPropertyDescriptor,Wc=(n,e,t,r)=>{for(var s=r>1?void 0:r?rW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&nW(e,t,s),s};let vr=class extends le{constructor(){super(...arguments);this.manifest={schemaVersion:"1.0.0",modules:[]}}get components(){return this.manifest.modules.map(({declarations:e})=>{if(!e||e.length===0)return;const[{name:t,summary:r}]=e;return{name:this.toKebabCase(t),summary:r||""}}).filter(e=>e!==void 0)}async connectedCallback(){super.connectedCallback();const e=await(await fetch("/custom-elements.json")).json();this.manifest=e}toKebabCase(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}render(){return P`
      <main class="components">
        <title-element align="center">Components</title-element>
        <div class="components__content">
          ${this.components.map(({name:n,summary:e})=>P`
            <component-element name="${n}" summary="${e}"></component-element>
          `)}
        </div>
      </main>
    `}};vr.styles=he`
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
  `;Wc([_t()],vr.prototype,"manifest",2);vr=Wc([we("components-element")],vr);var sW=Object.defineProperty,iW=Object.getOwnPropertyDescriptor,oW=(n,e,t,r)=>{for(var s=r>1?void 0:r?iW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&sW(e,t,s),s};let Ts=class extends le{render(){return P`
      <div class="app">
        <menu-element></menu-element>
        <slot></slot>
        <footer-element></footer-element>
      </div>
    `}};Ts.styles=he`
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
  `;Ts=oW([we("app-element")],Ts);de.registerHighlightLanguage("js",wG);de.registerHighlightLanguage("ts",xG);de.registerHighlightLanguage("html",EG);de.registerHighlightLanguage("sh",AG);de.registerHighlightStyle(SG);de.use(Wt);de.use(OG);$c(200);
