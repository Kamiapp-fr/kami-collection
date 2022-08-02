var $l=Object.defineProperty,Rl=Object.defineProperties;var Dl=Object.getOwnPropertyDescriptors;var eo=Object.getOwnPropertySymbols;var Ll=Object.prototype.hasOwnProperty,Ml=Object.prototype.propertyIsEnumerable;var to=(n,e,t)=>e in n?$l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ze=(n,e)=>{for(var t in e||(e={}))Ll.call(e,t)&&to(n,t,e[t]);if(eo)for(var t of eo(e))Ml.call(e,t)&&to(n,t,e[t]);return n},He=(n,e)=>Rl(n,Dl(e));const Ol=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};Ol();const Fr=[],Br=(n,e)=>{Fr[n]=e},cn=Object.freeze({HOST:"host",KNOB:"knob",SLOT:"slot",PREFIX:"prefix",SUFFIX:"suffix",WRAPPER:"wrapper"}),zt=n=>n instanceof HTMLTemplateElement,Xs=(n,e)=>t=>{const{element:r,target:s}=t.dataset;return r===n&&s===e},Sr=n=>zt(n)?n.content.firstElementChild:null,Dn=(n,e,t)=>Fr[n].find(Xs(e,t)),Nl=(n,e,t)=>Fr[n].filter(Xs(e,t)),Os=(n,e,t)=>Fr[n].some(Xs(e,t));/*! *****************************************************************************
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
***************************************************************************** */function ae(n,e,t,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(i=(s<3?o(i):s>3?o(e,t,i):o(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qs=Symbol(),no=new Map;class Ia{constructor(e,t){if(this._$cssResult$=!0,t!==Qs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=no.get(this.cssText);return Js&&e===void 0&&(no.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Pa=n=>new Ia(typeof n=="string"?n:n+"",Qs),le=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[i+1],n[0]);return new Ia(t,Qs)},Il=(n,e)=>{Js?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),s=window.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,n.appendChild(r)})},ro=Js?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Pa(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cs;const so=window.trustedTypes,Pl=so?so.emptyScript:"",io=window.reactiveElementPolyfillSupport,Ns={toAttribute(n,e){switch(e){case Boolean:n=n?Pl:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},qa=(n,e)=>e!==n&&(e==e||n==n),ls={attribute:!0,type:String,converter:Ns,reflect:!1,hasChanged:qa};class nn extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const s=this._$Eh(r,t);s!==void 0&&(this._$Eu.set(s,r),e.push(s))}),e}static createProperty(e,t=ls){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ls}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of r)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(ro(s))}else e!==void 0&&t.push(ro(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Il(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=ls){var s,i;const o=this.constructor._$Eh(e,r);if(o!==void 0&&r.reflect===!0){const a=((i=(s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&i!==void 0?i:Ns.toAttribute)(t,r.type);this._$Ei=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(e,t){var r,s,i;const o=this.constructor,a=o._$Eu.get(e);if(a!==void 0&&this._$Ei!==a){const c=o.getPropertyOptions(a),l=c.converter,u=(i=(s=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&s!==void 0?s:typeof l=="function"?l:null)!==null&&i!==void 0?i:Ns.fromAttribute;this._$Ei=a,this[a]=u(t,c.type),this._$Ei=null}}requestUpdate(e,t,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||qa)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,i)=>this[i]=s),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}nn.finalized=!0,nn.elementProperties=new Map,nn.elementStyles=[],nn.shadowRootOptions={mode:"open"},io==null||io({ReactiveElement:nn}),((cs=globalThis.reactiveElementVersions)!==null&&cs!==void 0?cs:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var us;const ln=globalThis.trustedTypes,oo=ln?ln.createPolicy("lit-html",{createHTML:n=>n}):void 0,mt=`lit$${(Math.random()+"").slice(9)}$`,ei="?"+mt,ql=`<${ei}>`,un=document,Nn=(n="")=>un.createComment(n),In=n=>n===null||typeof n!="object"&&typeof n!="function",Fa=Array.isArray,Ba=n=>{var e;return Fa(n)||typeof((e=n)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Tn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ao=/-->/g,co=/>/g,Ot=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,lo=/'/g,uo=/"/g,za=/^(?:script|style|textarea|title)$/i,Fl=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),M=Fl(1),Je=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),ho=new WeakMap,Ha=(n,e,t)=>{var r,s;const i=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new gn(e.insertBefore(Nn(),a),a,void 0,t!=null?t:{})}return o._$AI(n),o},on=un.createTreeWalker(un,129,null,!1),Ua=(n,e)=>{const t=n.length-1,r=[];let s,i=e===2?"<svg>":"",o=Tn;for(let c=0;c<t;c++){const l=n[c];let u,h,d=-1,p=0;for(;p<l.length&&(o.lastIndex=p,h=o.exec(l),h!==null);)p=o.lastIndex,o===Tn?h[1]==="!--"?o=ao:h[1]!==void 0?o=co:h[2]!==void 0?(za.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Ot):h[3]!==void 0&&(o=Ot):o===Ot?h[0]===">"?(o=s!=null?s:Tn,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?Ot:h[3]==='"'?uo:lo):o===uo||o===lo?o=Ot:o===ao||o===co?o=Tn:(o=Ot,s=void 0);const k=o===Ot&&n[c+1].startsWith("/>")?" ":"";i+=o===Tn?l+ql:d>=0?(r.push(u),l.slice(0,d)+"$lit$"+l.slice(d)+mt+k):l+mt+(d===-2?(r.push(void 0),c):k)}const a=i+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[oo!==void 0?oo.createHTML(a):a,r]};class Pn{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,c=this.parts,[l,u]=Ua(e,t);if(this.el=Pn.createElement(l,r),on.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=on.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(mt)){const p=u[o++];if(h.push(d),p!==void 0){const k=s.getAttribute(p.toLowerCase()+"$lit$").split(mt),b=/([.?@])?(.*)/.exec(p);c.push({type:1,index:i,name:b[2],strings:k,ctor:b[1]==="."?Va:b[1]==="?"?Ga:b[1]==="@"?Wa:Yn})}else c.push({type:6,index:i})}for(const d of h)s.removeAttribute(d)}if(za.test(s.tagName)){const h=s.textContent.split(mt),d=h.length-1;if(d>0){s.textContent=ln?ln.emptyScript:"";for(let p=0;p<d;p++)s.append(h[p],Nn()),on.nextNode(),c.push({type:2,index:++i});s.append(h[d],Nn())}}}else if(s.nodeType===8)if(s.data===ei)c.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(mt,h+1))!==-1;)c.push({type:7,index:i}),h+=mt.length-1}i++}}static createElement(e,t){const r=un.createElement("template");return r.innerHTML=e,r}}function jt(n,e,t=n,r){var s,i,o,a;if(e===Je)return e;let c=r!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[r]:t._$Cu;const l=In(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((i=c==null?void 0:c._$AO)===null||i===void 0||i.call(c,!1),l===void 0?c=void 0:(c=new l(n),c._$AT(n,t,r)),r!==void 0?((o=(a=t)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[r]=c:t._$Cu=c),c!==void 0&&(e=jt(n,c._$AS(n,e.values),c,r)),e}class ja{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:s}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:un).importNode(r,!0);on.currentNode=i;let o=on.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new gn(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new Za(o,this,e)),this.v.push(u),l=s[++c]}a!==(l==null?void 0:l.index)&&(o=on.nextNode(),a++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class gn{constructor(e,t,r,s){var i;this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cg=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=jt(this,e,t),In(e)?e===ie||e==null||e===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):e!==this._$AH&&e!==Je&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Ba(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==ie&&In(this._$AH)?this._$AA.nextSibling.data=e:this.k(un.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Pn.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const o=new ja(i,this),a=o.p(this.options);o.m(r),this.k(a),this._$AH=o}}_$AC(e){let t=ho.get(e.strings);return t===void 0&&ho.set(e.strings,t=new Pn(e)),t}S(e){Fa(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const i of e)s===t.length?t.push(r=new gn(this.A(Nn()),this.A(Nn()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Yn{constructor(e,t,r,s,i){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ie}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=jt(this,e,t,0),o=!In(e)||e!==this._$AH&&e!==Je,o&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=jt(this,a[r+c],t,c),l===Je&&(l=this._$AH[c]),o||(o=!In(l)||l!==this._$AH[c]),l===ie?e=ie:e!==ie&&(e+=(l!=null?l:"")+i[c+1]),this._$AH[c]=l}o&&!s&&this.C(e)}C(e){e===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Va extends Yn{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===ie?void 0:e}}const Bl=ln?ln.emptyScript:"";class Ga extends Yn{constructor(){super(...arguments),this.type=4}C(e){e&&e!==ie?this.element.setAttribute(this.name,Bl):this.element.removeAttribute(this.name)}}class Wa extends Yn{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=jt(this,e,t,0))!==null&&r!==void 0?r:ie)===Je)return;const s=this._$AH,i=e===ie&&s!==ie||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==ie&&(s===ie||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Za{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){jt(this,e)}}const zl={P:"$lit$",L:mt,V:ei,I:1,N:Ua,R:ja,D:Ba,j:jt,H:gn,O:Yn,F:Ga,B:Wa,W:Va,Z:Za},po=window.litHtmlPolyfillSupport;po==null||po(Pn,gn),((us=globalThis.litHtmlVersions)!==null&&us!==void 0?us:globalThis.litHtmlVersions=[]).push("2.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hs,ds;class oe extends nn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ha(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Je}}oe.finalized=!0,oe._$litElement$=!0,(hs=globalThis.litElementHydrateSupport)===null||hs===void 0||hs.call(globalThis,{LitElement:oe});const fo=globalThis.litElementPolyfillSupport;fo==null||fo({LitElement:oe});((ds=globalThis.litElementVersions)!==null&&ds!==void 0?ds:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hl=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?He(ze({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function D(n){return(e,t)=>t!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(n,e,t):Hl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xn=n=>(...e)=>({_$litDirective$:n,values:e});class Jn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Ul}=zl,jl=n=>n===null||typeof n!="object"&&typeof n!="function",ur=(n,e)=>{var t,r;return e===void 0?((t=n)===null||t===void 0?void 0:t._$litType$)!==void 0:((r=n)===null||r===void 0?void 0:r._$litType$)===e},Vl=n=>n.strings===void 0,mo=()=>document.createComment(""),go=(n,e,t)=>{var r;const s=n._$AA.parentNode,i=e===void 0?n._$AB:e._$AA;if(t===void 0){const o=s.insertBefore(mo(),i),a=s.insertBefore(mo(),i);t=new Ul(o,a,n,n.options)}else{const o=t._$AB.nextSibling,a=t._$AM,c=a!==n;if(c){let l;(r=t._$AQ)===null||r===void 0||r.call(t,n),t._$AM=n,t._$AP!==void 0&&(l=n._$AU)!==a._$AU&&t._$AP(l)}if(o!==i||c){let l=t._$AA;for(;l!==o;){const u=l.nextSibling;s.insertBefore(l,i),l=u}}}return t},Gl={},bo=(n,e=Gl)=>n._$AH=e,vo=n=>n._$AH,Wl=n=>{n._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ka=Xn(class extends Jn{constructor(n){super(n),this.tt=new WeakMap}render(n){return[n]}update(n,[e]){if(ur(this.it)&&(!ur(e)||this.it.strings!==e.strings)){const t=vo(n).pop();let r=this.tt.get(this.it.strings);if(r===void 0){const s=document.createDocumentFragment();r=Ha(ie,s),r.setConnected(!1),this.tt.set(this.it.strings,r)}bo(r,[t]),go(r,void 0,t)}if(ur(e)){if(!ur(this.it)||this.it.strings!==e.strings){const t=this.tt.get(e.strings);if(t!==void 0){const r=vo(t).pop();Wl(n),go(n,void 0,r),bo(n,[r])}}this.it=e}else this.it=void 0;return this.render(e)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mn=(n,e)=>{var t,r;const s=n._$AN;if(s===void 0)return!1;for(const i of s)(r=(t=i)._$AO)===null||r===void 0||r.call(t,e,!1),Mn(i,e);return!0},Cr=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},Ya=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),Yl(e)}};function Zl(n){this._$AN!==void 0?(Cr(this),this._$AM=n,Ya(this)):this._$AM=n}function Kl(n,e=!1,t=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let i=t;i<r.length;i++)Mn(r[i],!1),Cr(r[i]);else r!=null&&(Mn(r,!1),Cr(r));else Mn(this,n)}const Yl=n=>{var e,t,r,s;n.type==zr.CHILD&&((e=(r=n)._$AP)!==null&&e!==void 0||(r._$AP=Kl),(t=(s=n)._$AQ)!==null&&t!==void 0||(s._$AQ=Zl))};class Xl extends Jn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Ya(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),t&&(Mn(this,e),Cr(this))}setValue(e){if(Vl(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Jl{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class Ql{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;(e=this.Y)!==null&&e!==void 0||(this.Y=new Promise(t=>this.q=t))}resume(){var e;(e=this.q)===null||e===void 0||e.call(this),this.Y=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yo=n=>!jl(n)&&typeof n.then=="function";class eu extends Xl{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Jl(this),this._$CK=new Ql}render(...e){var t;return(t=e.find(r=>!yo(r)))!==null&&t!==void 0?t:Je}update(e,t){const r=this._$Cyt;let s=r.length;this._$Cyt=t;const i=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const c=t[a];if(!yo(c))return this._$Cwt=a,c;a<s&&c===r[a]||(this._$Cwt=1073741823,s=0,Promise.resolve(c).then(async l=>{for(;o.get();)await o.get();const u=i.deref();if(u!==void 0){const h=u._$Cyt.indexOf(c);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(l))}}))}return Je}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}}const ti=Xn(eu);function Qn(n){return!!n&&Array.isArray(n.modules)&&n.modules.some(e=>{var t,r;return((t=e.exports)==null?void 0:t.some(s=>s.kind==="custom-element-definition"))||((r=e.declarations)==null?void 0:r.some(s=>s.customElement))})}const tu=n=>n.kind==="custom-element-definition",nu=n=>n.customElement,Xa=n=>!(n.privacy==="private"||n.privacy==="protected");async function ru(n){try{const t=await(await fetch(n)).json();if(Qn(t))return t;throw new Error(`No element definitions found at ${n}`)}catch(e){return console.error(e),null}}function Hr(n,e){var r;const t=((r=n.modules)!=null?r:[]).flatMap(s=>{var i,o;return(o=(i=s.exports)==null?void 0:i.filter(tu))!=null?o:[]});return e?t.filter(s=>e.includes(s.name)):t}const ni=(n,e)=>{var c,l,u,h,d,p,k,b;const t=Hr(n),r=e?t.findIndex(x=>(x==null?void 0:x.name)===e):0,s=t[r];if(!s)return null;const{name:i,module:o}=s.declaration,a=o?(l=(c=n.modules.find(x=>x.path===o.replace(/^\//,"")))==null?void 0:c.declarations)==null?void 0:l.find(x=>x.name===i):n.modules.flatMap(x=>x.declarations).find(x=>(x==null?void 0:x.name)===i);if(!a||!nu(a))throw new Error(`Could not find declaration for ${e}`);return{customElement:!0,name:s.name,description:a==null?void 0:a.description,slots:(u=a.slots)!=null?u:[],attributes:(h=a.attributes)!=null?h:[],members:(d=a.members)!=null?d:[],events:(p=a.events)!=null?p:[],cssParts:(k=a.cssParts)!=null?k:[],cssProperties:[...(b=a.cssProperties)!=null?b:[]].sort((x,_)=>x.name>_.name?1:-1)}},ri=(n=[])=>n.filter(e=>e.kind==="field"&&Xa(e)),su=(n=[])=>n.filter(e=>e.kind==="method"&&Xa(e)),si=M`
  <div part="warning">No custom elements found in the JSON file.</div>
`,ii=n=>{class e extends n{constructor(){super(...arguments);this.jsonFetched=Promise.resolve(null)}willUpdate(){const{src:r}=this;this.manifest?Qn(this.manifest)?(this.lastSrc=void 0,this.jsonFetched=Promise.resolve(this.manifest)):console.error("No custom elements found in the `manifest` object."):r&&this.lastSrc!==r&&(this.lastSrc=r,this.jsonFetched=ru(r))}}return ae([D()],e.prototype,"src",void 0),ae([D({attribute:!1})],e.prototype,"manifest",void 0),ae([D({reflect:!0,converter:{fromAttribute:t=>t.split(","),toAttribute:t=>t.join(",")}})],e.prototype,"only",void 0),ae([D()],e.prototype,"selected",void 0),e},oi=n=>typeof n=="string"&&n.startsWith("'")&&n.endsWith("'")?n.slice(1,n.length-1):n;function ai(n,...e){const t=document.createElement("template");return t.innerHTML=e.reduce((r,s,i)=>r+s+n[i+1],n[0]),t}let iu=0;const ou=ai`
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
`;class Ja extends HTMLElement{constructor(){super();this._mousedown=!1,this._selected=!1,this.attachShadow({mode:"open"}).appendChild(ou.content.cloneNode(!0)),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)})}get selected(){return this._selected}set selected(e){this._selected=e,this.setAttribute("aria-selected",String(e)),this.setAttribute("tabindex",e?"0":"-1"),this.toggleAttribute("selected",e)}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id=`api-viewer-tab-${iu++}`)}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}}customElements.define("api-viewer-tab",Ja);let au=0;const cu=ai`
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
`;class lu extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).appendChild(cu.content.cloneNode(!0))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id=`api-viewer-panel-${au++}`)}}customElements.define("api-viewer-panel",lu);const uu=ai`
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
`;class hu extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(uu.content.cloneNode(!0));const t=e.querySelectorAll("slot");t[0].addEventListener("slotchange",()=>this._linkPanels()),t[1].addEventListener("slotchange",()=>this._linkPanels()),this.addEventListener("keydown",this.handleEvent),this.addEventListener("click",this.handleEvent)}connectedCallback(){this.setAttribute("role","tablist"),requestAnimationFrame(()=>{this._linkPanels()})}_linkPanels(){const{tabs:e}=this;e.forEach(r=>{const s=r.nextElementSibling;r.setAttribute("aria-controls",s.id),s.setAttribute("aria-labelledby",r.id)});const t=e.find(r=>r.selected)||e[0];this._selectTab(t)}get tabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,t){const{tabs:r}=this,s=r.length;for(let i=0;typeof e=="number"&&i<s;i++,e+=t||1)if(e<0?e=s-1:e>=s&&(e=0),!r[e].hasAttribute("hidden"))return e;return-1}_prevTab(e){const t=this._getAvailableIndex(e.findIndex(r=>r.selected)-1,-1);return e[(t+e.length)%e.length]}_nextTab(e){const t=this._getAvailableIndex(e.findIndex(r=>r.selected)+1,1);return e[t%e.length]}reset(){this.tabs.forEach(e=>{e.selected=!1}),this.querySelectorAll("api-viewer-panel").forEach(e=>{e.hidden=!0})}selectFirst(){const e=this._getAvailableIndex(0,1);this._selectTab(this.tabs[e%this.tabs.length])}_selectTab(e){this.reset();const t=e.getAttribute("aria-controls"),r=this.querySelector(`#${t}`);r&&(e.selected=!0,r.hidden=!1)}handleEvent(e){const{target:t}=e;if(t&&t instanceof Ja){let r;if(e.type==="keydown"){const{tabs:s}=this;switch(e.key){case"ArrowLeft":case"ArrowUp":r=this._prevTab(s);break;case"ArrowDown":case"ArrowRight":r=this._nextTab(s);break;case"Home":r=s[0];break;case"End":r=s[s.length-1];break;default:return}e.preventDefault()}else r=t;this._selectTab(r),r.focus()}}}customElements.define("api-viewer-tabs",hu);class ci{constructor(e,t){this._data=[],(this.host=e).addController(this),this.el=t}get data(){return this._data}set data(e){this._data=e,this.updateData(e)}updateData(e){this.host.isConnected&&this.host.requestUpdate()}clear(){this.data=[]}destroy(){this.host.removeController(this)}}class du extends ci{constructor(e,t,r){super(e,t);r.forEach(({name:s})=>{t.addEventListener(s,i=>{const o="-changed";if(s.endsWith(o)){const{knob:a}=e.getKnob(s.replace(o,""));a&&e.syncKnob(t,a)}this.data=[...this.data,i]})})}}const pu=n=>n[0].toUpperCase()+n.slice(1),Qa=n=>pu(n===""?"content":n),fu=(n,e)=>{const{name:t,value:r}=n;return M`
    <input
      id=${e}
      type="text"
      .value=${String(r)}
      data-name=${t}
      part="input"
    />
  `},_o=(n,e)=>{const{name:t,knobType:r,value:s,options:i}=n;let o;return r==="select"&&Array.isArray(i)?o=M`
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
    `,o},mu=(n,e)=>{const{name:t,content:r}=n;return M`
    <input
      id=${e}
      type="text"
      .value=${r}
      data-type="slot"
      data-slot=${t}
      part="input"
    />
  `},hr=(n,e,t,r)=>{const s=n.map(i=>{const{name:o}=i,a=`${t}-${o||"default"}`,c=t==="slot"?Qa(o):o;return M`
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
  `};class gu extends ci{constructor(e,t,r,s){super(e,t);this.enabled=!Os(r,t.localName,cn.SLOT),this.data=s.sort((i,o)=>i.name===""?1:o.name===""?-1:i.name.localeCompare(o.name)).map(i=>He(ze({},i),{content:Qa(i.name)}))}setValue(e,t){this.data=this.data.map(r=>r.name===e?He(ze({},r),{content:t}):r)}updateData(e){super.updateData(e),this.enabled&&this.el.isConnected&&e&&e.length&&(this.el.innerHTML="",e.forEach(t=>{let r;const{name:s,content:i}=t;s?(r=document.createElement("div"),r.setAttribute("slot",s),r.textContent=i):r=document.createTextNode(i),this.el.appendChild(r)}))}}class bu extends ci{constructor(e,t,r){super(e,t);if(r.length){const s=getComputedStyle(t);this.data=r.map(i=>{let o=i.default?oi(i.default):s.getPropertyValue(i.name);const a=i;return o&&(o=o.trim(),a.default=o,a.value=o),a})}}setValue(e,t){this.data=this.data.map(r=>r.name===e?He(ze({},r),{value:t}):r)}updateData(e){super.updateData(e),e.length&&e.forEach(t=>{const{name:r,value:s}=t;s&&(s===t.default?this.el.style.removeProperty(r):this.el.style.setProperty(r,s))})}}const vu=n=>{const e=n,t="undefined";return"value"in n&&n.value===void 0&&(e.value=t),` detail: ${JSON.stringify(n).replace(`"${t}"`,t)}`},yu=n=>M`
    ${n.map(e=>M`
        <p part="event-record">
          event:
          ${e.type}.${e.detail==null?ie:vu(e.detail)}
        </p>
      `)}
  `;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Is extends Jn{constructor(e){if(super(e),this.it=ie,e.type!==zr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ie||e==null)return this.ft=void 0,this.it=e;if(e===Je)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Is.directiveName="unsafeHTML",Is.resultType=1;const qn=Xn(Is);function _u(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var ku={text:function(n){return _u(n)},join:function(n){return n.join("")},wrap:function(n,e){return'<span class="'+n+'">'+e+"</span>"}};/*! *****************************************************************************
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
***************************************************************************** */var hn=function(){return hn=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hn.apply(this,arguments)};function Ps(n){return n&&n.source||n}var wu={exec:function(){return null}};function $n(n,e,t){return new RegExp(Ps(e),"m"+(n.case_insensitive?"i":"")+(t?"g":""))}function xu(n){var e=[];function t(a){for(var c=0,l=e;c<l.length;c++){var u=l[c],h=u[0],d=u[1];if(a===h)return d}}var r=[];function s(a){if(!(!a.variants||!a.variants.length)){for(var c=0,l=r;c<l.length;c++){var u=l[c],h=u[0],d=u[1];if(a===h)return d}var p=a.variants.map(function(k){return hn({},a,{variants:void 0},k)});return r.push([a,p]),p}}function i(a,c,l){var u=t(a);if(u)return u;var h={lexemesRe:$n(n,a.lexemes||/\w+/,!0),relevance:a.relevance==null?1:a.relevance,contains:[],terminators:wu,subLanguage:a.subLanguage==null?void 0:typeof a.subLanguage=="string"?[a.subLanguage]:a.subLanguage};e.push([a,h]),a.className&&(h.className=a.className),a.illegal&&(h.illegalRe=$n(n,a.illegal));for(var d=0,p=["endsParent","endsWithParent","skip","excludeBegin","excludeEnd","returnBegin","returnEnd"];d<p.length;d++){var k=p[d];a[k]&&(h[k]=!0)}var b;if(c){var x=a.beginKeywords?"\\b("+a.beginKeywords.split(/\s+/).join("|")+")\\b":a.begin||/\B|\b/;a.begin=x,h.beginRe=$n(n,x);var _=!a.end&&!a.endsWithParent?/\B|\b/:a.end;_&&(a.end=_,h.endRe=$n(n,_)),b=Ps(_)||"",a.endsWithParent&&l&&(b+=(_?"|":"")+l)}var y=a.keywords||a.beginKeywords;if(y){var w={},R=function(f,m){n.case_insensitive&&(m=m.toLowerCase());for(var A=m.split(/\s+/),C=0,I=A;C<I.length;C++){var F=I[C],Z=F.split(/\|/),W=Z[0],re=Z[1];w[W]=[f,re?Number(re):1]}};if(typeof y=="string")R("keyword",y);else for(var $ in y)R($,y[$]);h.keywords=w}var E=[];if(a.contains&&a.contains.length){for(var B=0,H=a.contains;B<H.length;B++)for(var V=H[B],L=V==="self"?a:V,X=s(L)||L.endsWithParent&&[hn({},L)]||[L],ue=0,N=X;ue<N.length;ue++){var v=N[ue];E.push(v)}h.contains=E.map(function(f){return i(f,h,b)})}a.starts&&(h.starts=i(a.starts,c,l));var S=E.map(function(f){return f.beginKeywords?"\\.?("+f.begin+")\\.?":f.begin}).concat([b,a.illegal]).map(Ps).filter(Boolean);return S.length&&(h.terminators=$n(n,S.join("|"),!0)),h}var o=i(n);return n.case_insensitive&&(o.case_insensitive=!0),o}var Tr={},ec={};function Eu(n){return"lexemesRe"in n}function Au(n){if(Tr[n.name]=n,n.aliases)for(var e=0,t=n.aliases;e<t.length;e++){var r=t[e];ec[r]=n.name}}function Su(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0,r=n;t<r.length;t++){var s=r[t];Au(s)}}function Cu(){return Object.keys(Tr)}function qs(n){n=(n||"").toLowerCase(),n=ec[n]||n;var e=Tr[n];if(!!e)return Eu(e)?e:Tr[n]=xu(e)}var Tu="\\b\\d+(\\.\\d+)?",tc={begin:"\\\\[\\s\\S]",relevance:0},li={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[tc]},ui={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[tc]},$u={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/};function Ur(n,e,t){t===void 0&&(t={});var r=hn({className:"comment",begin:n,end:e,contains:[]},t),s=r.contains;return s&&(s.push($u),s.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0})),r}Ur("//","$");var Fs=Ur("/\\*","\\*/");Ur("#","$");var nc={className:"number",begin:Tu+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},Ru="[A-Za-z0-9\\._:-]+",ps={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:Ru,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]},Du={name:"xml",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},Ur("<!--","-->",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[ps],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[ps],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},ps]}]};function fs(n,e){var t=n&&n.exec(e);return t&&t.index===0||!1}function hi(n,e,t,r,s,i){var o=[{content:[]}];function a(f){var m=o[0].content;typeof f=="string"&&m.length&&typeof m[m.length-1]=="string"?m[m.length-1]+=f:m.push(f)}function c(f){a(e.text(f))}function l(f,m){m||(f=n.classPrefix+f),o.unshift({className:f,content:[]})}function u(f){f=n.classPrefix+f,o.push({className:f,content:[]})}function h(){if(o.length<2)throw"unbalanced";var f=o.shift(),m=f.className,A=f.content,C=e.join(A);a(m?e.wrap(m,C):C)}function d(f,m){if(fs(f.endRe,m)){for(;f.endsParent&&f.parent;f=f.parent);return f}if(f.endsWithParent&&f.parent)return d(f.parent,m)}function p(){if(!w.keywords){c(E);return}var f=0;w.lexemesRe.lastIndex=0;for(var m=w.lexemesRe.exec(E);m;){c(E.substring(f,m.index));var A=y.case_insensitive?m[0].toLowerCase():m[0],C=w.keywords.hasOwnProperty(A)&&w.keywords[A];C?(B+=C[1],l(C[0],!1),c(m[0]),h()):c(m[0]),f=w.lexemesRe.lastIndex,m=w.lexemesRe.exec(E)}c(E.substr(f))}function k(f){var m=f.length==1&&f[0];if(m&&!qs(m)){c(E);return}var A=m?hi(n,e,m,E,!0,R[m]):rc(n,e,E,f.length?w.subLanguage:void 0);w.relevance>0&&(B+=A.relevance),m&&A.top&&(R[m]=A.top),l(A.language,!0),a(A.value),h()}function b(){w.subLanguage!=null?k(w.subLanguage):p(),E=""}function x(f){f.className&&l(f.className,!1),w=Object.create(f,{parent:{value:w}})}function _(f,m){if(E+=f,m==null)return b(),0;for(var A,C=0,I=w.contains;C<I.length;C++){var F=I[C];if(fs(F.beginRe,m)){A=F;break}}if(A)return A.skip?E+=m:(A.excludeBegin&&(E+=m),b(),!A.returnBegin&&!A.excludeBegin&&(E=m)),x(A),A.returnBegin?0:m.length;var Z=d(w,m);if(Z){var W=w;W.skip?E+=m:(W.returnEnd||W.excludeEnd||(E+=m),b(),W.excludeEnd&&(E=m));do w.className&&h(),!w.skip&&!w.subLanguage&&(B+=w.relevance),w=w.parent;while(w!==Z.parent);return Z.starts&&x(Z.starts),W.returnEnd?0:m.length}if(!s&&fs(w.illegalRe,m))throw new Error('Illegal lexeme "'+m+'" for mode "'+(w.className||"<unnamed>")+'"');return E+=m,m.length||1}var y=qs(t);if(!y)throw new Error('Unknown language: "'+t+'"');var w=i||y,R={},$;for($=w;$&&$!==y;$=$.parent)$.className&&u($.className);var E="",B=0;try{for(var H=void 0,V=void 0,L=0;w.terminators.lastIndex=L,H=w.terminators.exec(r),!!H;)V=_(r.substring(L,H.index),H[0]),L=H.index+V;for(_(r.substr(L)),$=w;$.parent;$=$.parent)$.className&&h();if(o.length!=1)throw"unbalanced";var X=o[0],ue=X.className,N=X.content,v=e.join(N),S=ue?e.wrap(ue,v):v;return{language:t,relevance:B,value:S,top:w}}catch(f){if(f.message&&f.message.indexOf("Illegal")!==-1)return{language:t,relevance:0,value:e.text(r)};throw f}}function rc(n,e,t,r){r===void 0&&(r=n.languages||Cu());var s={language:"",relevance:0,value:e.text(t)};if(t!=""){for(var i=s,o=r.filter(qs),a=0,c=o;a<c.length;a++){var l=c[a],u=hi(n,e,l,t,!1);u.relevance>i.relevance&&(i=u),u.relevance>s.relevance&&(i=s,s=u)}i.language&&(s.second_best=i)}return s}var Lu={classPrefix:"hljs-",useBr:!1};function Mu(n,e){return e===void 0&&(e={}),{render:n,options:hn({},Lu,e)}}function Ou(n,e,t){var r=n.render,s=n.options;return typeof t=="string"?hi(s,r,t,e,!1):rc(s,r,e,t)}const Nu={begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[li,ui,nc]}]},Iu={className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[Nu,nc,ui,li,Fs,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}},Pu="[a-zA-Z-][a-zA-Z0-9_-]*",qu={begin:/(?:[A-Z_.-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[Iu]},Fu={name:"css",case_insensitive:!0,illegal:/[=/|'$]/,contains:[Fs,{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[li,ui]},{className:"selector-tag",begin:Pu,relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[Fs,qu]}]};Su(Fu,Du);const Bu=Mu(ku,{classPrefix:""}),{PREFIX:zu,SLOT:Hu,SUFFIX:Uu,WRAPPER:ju}=cn,ht="  ",Vu=(n,e)=>{if(!n)return n;const t=n.replace(/\t/g,ht).split(`
`),r=t.reduce((s,i)=>{if(/^\s*$/.test(i))return s;const o=i.match(/^(\s*)/),a=o&&o[0].length;return s===null||a<s?a:s},null);return t.map(s=>e+s.substr(r)).join(`
`)},ms=(n,e)=>{const t=n.innerHTML.replace(/\s+$/,"").replace(/(="")/g,"");return Vu(t,e)},Gu=(n,e,t,r,s)=>{let i="";const o=Dn(n,e,zu);zt(o)&&(i+=`${ms(o,"").trim()}
`);let a="",c=null;const l=Dn(n,e,ju),u=Sr(l);if(u){a=ht;const b=u.outerHTML.match(/<([a-z]+)[^>]*>/);b&&(c=u.tagName.toLowerCase(),i+=`${b[0]}
${ht}`)}i+=`<${e}`,Object.keys(t).sort((b,x)=>b>x?1:-1).forEach(b=>{const{value:x,knobType:_,attribute:y}=t[b],w=y||b;switch(_){case"boolean":i+=x?` ${w}`:"";break;case"select":i+=x!==""?` ${w}="${x}"`:"";break;default:i+=x!=null?` ${w}="${x}"`:"";break}}),i+=">";const h=Dn(n,e,Hu);zt(h)?i+=`${ms(h,`${a}${ht}`)}
${a}`:r.length&&(r.length===1&&!r[0].name?i+=r[0].content:(i+=r.reduce((b,x)=>{const{name:_,content:y}=x,w=_?`<div slot="${_}">${y}</div>`:y;return`${b}
${a}${ht}${w}`},""),i+=`
${a}`)),i+=`</${e}>`,c&&(i+=`
</${c}>`);const d=Dn(n,e,Uu);zt(d)&&(i+=`
${ms(d,"").trim()}
`);const p=s.filter(b=>b.value!==b.default);p.length&&(i+=`
<style>
${ht}${e} {
`,p.forEach(b=>{b.value&&(i+=`${ht}${ht}${b.name}: ${b.value};
`)}),i+=`${ht}}
</style>`);const{value:k}=Ou(Bu,i,["xml","css"]);return M`<pre><code>${qn(k)}</code></pre>`},sc=n=>{const{knobType:e,default:t}=n;switch(e){case"boolean":return t!=="false";case"number":return Number(t);default:return oi(t)}},Wu=(n,e)=>{function t(s){return s===HTMLElement?void 0:Object.getOwnPropertyDescriptor(s.prototype,e)||t(Object.getPrototypeOf(s))}let r=!1;if(n){const s=t(n);r=Boolean(s&&s.get&&s.set===void 0)}return r},Zu=(n="")=>n.replace(" | undefined","").replace(" | null",""),Ku=(n,e,t="")=>{let r=e.filter(({name:s})=>!t.includes(s)&&!Wu(customElements.get(n),s));return r=r.map(s=>{var o;const i=He(ze({},s),{knobType:Zu((o=s.type)==null?void 0:o.text)});return typeof i.default=="string"&&(i.value=sc(i)),i}),r},Yu=(n,e)=>Nl(e,n,cn.KNOB).map(t=>{const{attr:r,type:s}=t.dataset;let i=null;if(r){if(s==="select"){const o=Sr(t),a=o?Array.from(o.children).filter(c=>c instanceof HTMLOptionElement).map(c=>c.value):[];o instanceof HTMLSelectElement&&a.length>1&&(i={name:r,attribute:r,knobType:s,options:a})}(s==="string"||s==="boolean")&&(i={name:r,attribute:r,knobType:s})}return i}).filter(Boolean),Xu=(n,e)=>n.filter(t=>{const{name:r,knobType:s}=t,i=sc(t);return e[r]!==i||s==="boolean"&&i});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=Xn(class extends Jn{constructor(n){if(super(n),n.type!==zr.CHILD)throw Error("templateContent can only be used in child bindings")}render(n){return this.vt===n?Je:(this.vt=n,document.importNode(n.content,!0))}}),{HOST:Ju,PREFIX:Qu,SLOT:eh,SUFFIX:th,WRAPPER:nh}=cn,rh=(n,e)=>{const{knobs:t}=e;Object.keys(t).forEach(r=>{const{attribute:s,value:i,custom:o}=t[r];o&&s?typeof i=="string"&&i?n.setAttribute(s,i):n.removeAttribute(s):n[r]=i})},wo=n=>typeof n=="object"&&Promise.resolve(n)===n;async function sh(n){let e=!1;const t=n,r=t.updateComplete;wo(r)&&(await r,e=!0);const s=t.componentOnReady?t.componentOnReady():!1;return wo(s)&&(await s,e=!0),e||await new Promise(requestAnimationFrame),t}class ih extends Jn{constructor(e){super(e);if(e.type!==zr.CHILD)throw new Error("renderer only supports binding to element")}render(e){return ie}update(e,[t]){var _;const r=(_=e.options)==null?void 0:_.host,{tag:s}=t,i=[],[o,a,c,l,u]=[Ju,Qu,th,eh,nh].map(y=>Dn(t.id,s,y)),h=Sr(u),d=h?h.localName:"";let p=r.querySelector(s);if(p){const y=r.querySelector('[part="demo-output"]'),w=p.parentElement;if(w&&w===y||w.localName===d)return rh(p,t),Je}const k=`</${s}>`,b=Sr(o);zt(a)&&i.push(ko(a));let x=b?b.outerHTML:`<${s}>${k}`;if(zt(l)&&(x=x.replace(k,`${l.innerHTML}${k}`)),d){const y=qn(`
        <${d}>
          ${x}
        </${d}>
      `);i.push(y)}else i.push(qn(x));return zt(c)&&i.push(ko(c)),Promise.resolve().then(()=>{p=r.querySelector(s),sh(p).then(()=>{p.dispatchEvent(new CustomEvent("rendered",{detail:{component:p},bubbles:!0,composed:!0}))})}),M`${i}`}}const oh=Xn(ih);class We extends oe{constructor(){super(...arguments);this.copyBtnText="copy",this.cssProps=[],this.events=[],this.slots=[],this.tag="",this.props=[],this.exclude="",this._whenDefined={}}createRenderRoot(){return this}render(){var p,k,b;const{tag:e}=this;if(!customElements.get(e))return this._whenDefined[e]=customElements.whenDefined(e),this._whenDefined[e].then(()=>{this.tag===e&&this.requestUpdate()}),M`
        <div part="warning">
          Element ${e} is not defined. Have you imported it?
        </div>
      `;const[t,r,s,i,o]=[this.cssProps,this.events,this.slots,this.customKnobs,this.propKnobs].map(x=>x.length===0),a=this.vid,c=((p=this.eventsController)==null?void 0:p.data)||[],l=((k=this.slotsController)==null?void 0:k.data)||[],u=((b=this.stylesController)==null?void 0:b.data)||[],h=s||Os(a,e,cn.SLOT),d=o&&i;return M`
      <div part="demo-output" @rendered=${this.onRendered}>
        ${oh({id:a,tag:e,knobs:this.knobs})}
      </div>
      <api-viewer-tabs part="demo-tabs">
        <api-viewer-tab slot="tab" part="tab">Source</api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <button @click=${this._onCopyClick} part="button">
            ${this.copyBtnText}
          </button>
          <div part="demo-snippet">
            ${Gu(a,e,this.knobs,l,u)}
          </div>
        </api-viewer-panel>
        <api-viewer-tab slot="tab" part="tab" ?hidden=${d&&h}>
          Knobs
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs">
            <section
              ?hidden=${d}
              part="knobs-column"
              @change=${this._onPropChanged}
            >
              ${hr(this.propKnobs,"Properties","prop",_o)}
              ${hr(this.customKnobs,"Attributes","attr",_o)}
            </section>
            <section
              ?hidden=${h}
              part="knobs-column"
              @change=${this._onSlotChanged}
            >
              ${hr(l,"Slots","slot",mu)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab slot="tab" part="tab" ?hidden=${t}>
          Styles
        </api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs" ?hidden=${t}>
            <section part="knobs-column" @change=${this._onCssChanged}>
              ${hr(u,"Custom CSS Properties","css-prop",fu)}
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
            ${Ka(c.length?yu(c):M`
                    <p part="event-record">
                      Interact with component to see the event log.
                    </p>
                  `)}
          </div>
        </api-viewer-panel>
      </api-viewer-tabs>
    `}willUpdate(e){e.has("tag")&&(this.knobs={},this.propKnobs=Ku(this.tag,this.props,this.exclude),this.customKnobs=Yu(this.tag,this.vid))}updated(e){if(e.has("tag")&&e.get("tag")){const t=this.renderRoot.querySelector("api-viewer-tabs");t&&t.selectFirst()}}_onLogClear(){this.eventsController.clear();const e=this.querySelector("#events");e&&e.focus()}_onCopyClick(){const e=this.renderRoot.querySelector('[part="demo-snippet"] code');if(e){const t=document.createRange();t.selectNodeContents(e);const r=window.getSelection();r.removeAllRanges(),r.addRange(t);try{document.execCommand("copy"),this.copyBtnText="done"}catch(s){console.error(s),this.copyBtnText="error"}setTimeout(()=>{this.copyBtnText="copy"},1e3),r.removeAllRanges()}}onRendered(e){const{component:t}=e.detail;this.initKnobs(t),this.initEvents(t),this.initSlots(t),this.initStyles(t)}initEvents(e){const t=this.eventsController;t&&t.destroy(),this.eventsController=new du(this,e,this.events)}initKnobs(e){Os(this.vid,this.tag,cn.HOST)&&Xu(this.propKnobs,e).forEach(r=>{this.syncKnob(e,r)})}initSlots(e){const t=this.slotsController;t&&t.destroy(),this.slotsController=new gu(this,e,this.vid,this.slots)}initStyles(e){const t=this.stylesController;t&&t.destroy(),this.stylesController=new bu(this,e,this.cssProps)}getKnob(e){const t=i=>i.name===e||i.attribute===e;let r=this.propKnobs.find(t),s=!1;return r||(r=this.customKnobs.find(t),s=!0),{knob:r,custom:s}}setKnobs(e,t,r,s,i=!1){this.knobs=He(ze({},this.knobs),{[e]:{knobType:t,value:r,attribute:s,custom:i}})}syncKnob(e,t){const{name:r,knobType:s,attribute:i}=t,o=e[r];this.setKnobs(r,s,o,i),this.propKnobs=this.propKnobs.map(a=>a.name===r?He(ze({},a),{value:o}):a)}_onCssChanged(e){const t=e.composedPath()[0];this.stylesController.setValue(t.dataset.name,t.value)}_onPropChanged(e){const t=e.composedPath()[0],{name:r,type:s}=t.dataset;let i;switch(s){case"boolean":i=t.checked;break;case"number":i=t.value===""?null:Number(t.value);break;default:i=t.value}const{knob:o,custom:a}=this.getKnob(r);o&&this.setKnobs(r,s,i,o.attribute,a)}_onSlotChanged(e){const t=e.composedPath()[0];this.slotsController.setValue(t.dataset.slot,t.value)}}ae([D()],We.prototype,"copyBtnText",void 0);ae([D({attribute:!1})],We.prototype,"cssProps",void 0);ae([D({attribute:!1})],We.prototype,"events",void 0);ae([D({attribute:!1})],We.prototype,"slots",void 0);ae([D()],We.prototype,"tag",void 0);ae([D({attribute:!1})],We.prototype,"props",void 0);ae([D()],We.prototype,"exclude",void 0);ae([D({type:Number})],We.prototype,"vid",void 0);ae([D({attribute:!1})],We.prototype,"customKnobs",void 0);ae([D({attribute:!1})],We.prototype,"knobs",void 0);ae([D({attribute:!1})],We.prototype,"propKnobs",void 0);customElements.define("api-demo-layout",We);function ic(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let bn=ic();function ah(n){bn=n}const ch=/[&<>"']/,lh=/[&<>"']/g,uh=/[<>"']|&(?!#?\w+;)/,hh=/[<>"']|&(?!#?\w+;)/g,dh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xo=n=>dh[n];function ye(n,e){if(e){if(ch.test(n))return n.replace(lh,xo)}else if(uh.test(n))return n.replace(hh,xo);return n}const ph=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function oc(n){return n.replace(ph,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const fh=/(^|[^\[])\^/g;function ce(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(r,s)=>(s=s.source||s,s=s.replace(fh,"$1"),n=n.replace(r,s),t),getRegex:()=>new RegExp(n,e)};return t}const mh=/[^\w:]/g,gh=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Eo(n,e,t){if(n){let r;try{r=decodeURIComponent(oc(t)).replace(mh,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!gh.test(t)&&(t=_h(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const dr={},bh=/^[^:]+:\/*[^/]*$/,vh=/^([^:]+:)[\s\S]*$/,yh=/^([^:]+:\/*[^/]*)[\s\S]*$/;function _h(n,e){dr[" "+n]||(bh.test(n)?dr[" "+n]=n+"/":dr[" "+n]=wr(n,"/",!0)),n=dr[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(vh,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(yh,"$1")+e:n+e}const $r={exec:function(){}};function et(n){let e=1,t,r;for(;e<arguments.length;e++){t=arguments[e];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}function Ao(n,e){const t=n.replace(/\|/g,(i,o,a)=>{let c=!1,l=o;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),r=t.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function wr(n,e,t){const r=n.length;if(r===0)return"";let s=0;for(;s<r;){const i=n.charAt(r-s-1);if(i===e&&!t)s++;else if(i!==e&&t)s++;else break}return n.slice(0,r-s)}function kh(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let r=0,s=0;for(;s<t;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])r++;else if(n[s]===e[1]&&(r--,r<0))return s;return-1}function ac(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function So(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function Co(n,e,t,r){const s=e.href,i=e.title?ye(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:t,href:s,title:i,text:o,tokens:r.inlineTokens(o,[])};return r.state.inLink=!1,a}else return{type:"image",raw:t,href:s,title:i,text:ye(o)}}function wh(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}class di{constructor(e){this.options=e||bn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:wr(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],s=wh(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const i=wr(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}const s={type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const r=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,s,i,o,a,c,l,u,h,d,p,k,b=t[1].trim();const x=b.length>1,_={type:"list",raw:"",ordered:x,start:x?+b.slice(0,-1):"",loose:!1,items:[]};b=x?`\\d{1,9}\\${b.slice(-1)}`:`\\${b}`,this.options.pedantic&&(b=x?b:"[*+-]");const y=new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(k=!1,!(!(t=y.exec(e))||this.rules.block.hr.test(e)));){if(r=t[0],e=e.substring(r.length),u=t[2].split(`
`,1)[0],h=e.split(`
`,1)[0],this.options.pedantic?(o=2,p=u.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,p=u.slice(o),o+=t[1].length),c=!1,!u&&/^ *$/.test(h)&&(r+=h+`
`,e=e.substring(h.length+1),k=!0),!k){const R=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!R.test(u));){if(u.search(/[^ ]/)>=o||!u.trim())p+=`
`+u.slice(o);else if(!c)p+=`
`+u;else break;!c&&!u.trim()&&(c=!0),r+=d+`
`,e=e.substring(d.length+1)}}_.loose||(l?_.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(p),s&&(i=s[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),_.items.push({type:"list_item",raw:r,task:!!s,checked:i,loose:!1,text:p}),_.raw+=r}_.items[_.items.length-1].raw=r.trimRight(),_.items[_.items.length-1].text=p.trimRight(),_.raw=_.raw.trimRight();const w=_.items.length;for(a=0;a<w;a++){this.lexer.state.top=!1,_.items[a].tokens=this.lexer.blockTokens(_.items[a].text,[]);const R=_.items[a].tokens.filter(E=>E.type==="space"),$=R.every(E=>{const B=E.raw.split("");let H=0;for(const V of B)if(V===`
`&&(H+=1),H>1)return!0;return!1});!_.loose&&R.length&&$&&(_.loose=!0,_.items[a].loose=!0)}return _}}html(e){const t=this.rules.block.html.exec(e);if(t){const r={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(t[0]):ye(t[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const r=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const r={type:"table",header:Ao(t[1]).map(s=>({text:s})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];let s=r.align.length,i,o,a,c;for(i=0;i<s;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(s=r.rows.length,i=0;i<s;i++)r.rows[i]=Ao(r.rows[i],r.header.length).map(l=>({text:l}));for(s=r.header.length,o=0;o<s;o++)r.header[o].tokens=[],this.lexer.inlineTokens(r.header[o].text,r.header[o].tokens);for(s=r.rows.length,o=0;o<s;o++)for(c=r.rows[o],a=0;a<c.length;a++)c[a].tokens=[],this.lexer.inlineTokens(c[a].text,c[a].tokens);return r}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const r={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(e){const t=this.rules.block.text.exec(e);if(t){const r={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:ye(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):ye(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=wr(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=kh(t[2],"()");if(o>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),Co(t,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let s=(r[2]||r[1]).replace(/\s+/g," ");if(s=t[s.toLowerCase()],!s||!s.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return Co(r,s,r[0],this.lexer)}}emStrong(e,t,r=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=s[1]||s[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const o=s[0].length-1;let a,c,l=o,u=0;const h=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(s=h.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(c=a.length,s[3]||s[4]){l+=c;continue}else if((s[5]||s[6])&&o%3&&!((o+c)%3)){u+=c;continue}if(l-=c,l>0)continue;if(c=Math.min(c,c+l+u),Math.min(o,c)%2){const p=e.slice(1,o+s.index+c);return{type:"em",raw:e.slice(0,o+s.index+c+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}const d=e.slice(2,o+s.index+c-1);return{type:"strong",raw:e.slice(0,o+s.index+c+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const s=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return s&&i&&(r=r.substring(1,r.length-1)),r=ye(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let s,i;return r[2]==="@"?(s=ye(this.options.mangle?t(r[1]):r[1]),i="mailto:"+s):(s=ye(r[1]),i=s),{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let s,i;if(r[2]==="@")s=ye(this.options.mangle?t(r[0]):r[0]),i="mailto:"+s;else{let o;do o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(o!==r[0]);s=ye(r[0]),r[1]==="www."?i="http://"+s:i=s}return{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):ye(r[0]):r[0]:s=ye(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:s}}}}const j={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:$r,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};j._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;j._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;j.def=ce(j.def).replace("label",j._label).replace("title",j._title).getRegex();j.bullet=/(?:[*+-]|\d{1,9}[.)])/;j.listItemStart=ce(/^( *)(bull) */).replace("bull",j.bullet).getRegex();j.list=ce(j.list).replace(/bull/g,j.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+j.def.source+")").getRegex();j._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";j._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;j.html=ce(j.html,"i").replace("comment",j._comment).replace("tag",j._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();j.paragraph=ce(j._paragraph).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j._tag).getRegex();j.blockquote=ce(j.blockquote).replace("paragraph",j.paragraph).getRegex();j.normal=et({},j);j.gfm=et({},j.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});j.gfm.table=ce(j.gfm.table).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j._tag).getRegex();j.gfm.paragraph=ce(j._paragraph).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",j.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j._tag).getRegex();j.pedantic=et({},j.normal,{html:ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",j._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$r,paragraph:ce(j.normal._paragraph).replace("hr",j.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",j.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const P={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:$r,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:$r,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};P._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";P.punctuation=ce(P.punctuation).replace(/punctuation/g,P._punctuation).getRegex();P.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;P.escapedEmSt=/\\\*|\\_/g;P._comment=ce(j._comment).replace("(?:-->|$)","-->").getRegex();P.emStrong.lDelim=ce(P.emStrong.lDelim).replace(/punct/g,P._punctuation).getRegex();P.emStrong.rDelimAst=ce(P.emStrong.rDelimAst,"g").replace(/punct/g,P._punctuation).getRegex();P.emStrong.rDelimUnd=ce(P.emStrong.rDelimUnd,"g").replace(/punct/g,P._punctuation).getRegex();P._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;P._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;P._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;P.autolink=ce(P.autolink).replace("scheme",P._scheme).replace("email",P._email).getRegex();P._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;P.tag=ce(P.tag).replace("comment",P._comment).replace("attribute",P._attribute).getRegex();P._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;P._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;P._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;P.link=ce(P.link).replace("label",P._label).replace("href",P._href).replace("title",P._title).getRegex();P.reflink=ce(P.reflink).replace("label",P._label).replace("ref",j._label).getRegex();P.nolink=ce(P.nolink).replace("ref",j._label).getRegex();P.reflinkSearch=ce(P.reflinkSearch,"g").replace("reflink",P.reflink).replace("nolink",P.nolink).getRegex();P.normal=et({},P);P.pedantic=et({},P.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ce(/^!?\[(label)\]\((.*?)\)/).replace("label",P._label).getRegex(),reflink:ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",P._label).getRegex()});P.gfm=et({},P.normal,{escape:ce(P.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});P.gfm.url=ce(P.gfm.url,"i").replace("email",P.gfm._extended_email).getRegex();P.breaks=et({},P.gfm,{br:ce(P.br).replace("{2,}","*").getRegex(),text:ce(P.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function xh(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function To(n){let e="",t,r;const s=n.length;for(t=0;t<s;t++)r=n.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class gt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||bn,this.options.tokenizer=this.options.tokenizer||new di,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:j.normal,inline:P.normal};this.options.pedantic?(t.block=j.pedantic,t.inline=P.pedantic):this.options.gfm&&(t.block=j.gfm,this.options.breaks?t.inline=P.breaks:t.inline=P.gfm),this.tokenizer.rules=t}static get rules(){return{block:j,inline:P}}static lex(e,t){return new gt(t).lex(e)}static lexInline(e,t){return new gt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,c,l)=>c+"    ".repeat(l.length));let r,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const c=e.slice(1);let l;this.options.extensions.startBlock.forEach(function(u){l=u.call({lexer:this},c),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,s,i,o=e,a,c,l;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+So("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+So("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(c||(l=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,o,l)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e,To)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,To))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(function(p){d=p.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(i=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,xh)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(l=r.raw.slice(-1)),c=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class pi{constructor(e){this.options=e||bn}code(e,t,r){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,s);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+ye(s,!0)+'">'+(r?e:ye(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:ye(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(e=Eo(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s='<a href="'+ye(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>",s}image(e,t,r){if(e=Eo(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s=`<img src="${e}" alt="${r}"`;return t&&(s+=` title="${t}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class cc{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class lc{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,s=0;if(this.seen.hasOwnProperty(r)){s=this.seen[e];do s++,r=e+"-"+s;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=s,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class bt{constructor(e){this.options=e||bn,this.options.renderer=this.options.renderer||new pi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new cc,this.slugger=new lc}static parse(e,t){return new bt(t).parse(e)}static parseInline(e,t){return new bt(t).parseInline(e)}parse(e,t=!0){let r="",s,i,o,a,c,l,u,h,d,p,k,b,x,_,y,w,R,$,E;const B=e.length;for(s=0;s<B;s++){if(p=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(E=this.options.extensions.renderers[p.type].call({parser:this},p),E!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){r+=E||"";continue}switch(p.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(p.tokens),p.depth,oc(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(h="",u="",a=p.header.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(p.header[i].tokens),{header:!0,align:p.align[i]});for(h+=this.renderer.tablerow(u),d="",a=p.rows.length,i=0;i<a;i++){for(l=p.rows[i],u="",c=l.length,o=0;o<c;o++)u+=this.renderer.tablecell(this.parseInline(l[o].tokens),{header:!1,align:p.align[o]});d+=this.renderer.tablerow(u)}r+=this.renderer.table(h,d);continue}case"blockquote":{d=this.parse(p.tokens),r+=this.renderer.blockquote(d);continue}case"list":{for(k=p.ordered,b=p.start,x=p.loose,a=p.items.length,d="",i=0;i<a;i++)y=p.items[i],w=y.checked,R=y.task,_="",y.task&&($=this.renderer.checkbox(w),x?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=$+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=$+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:$}):_+=$),_+=this.parse(y.tokens,x),d+=this.renderer.listitem(_,R,w);r+=this.renderer.list(d,k,b);continue}case"html":{r+=this.renderer.html(p.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(d=p.tokens?this.parseInline(p.tokens):p.text;s+1<B&&e[s+1].type==="text";)p=e[++s],d+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);r+=t?this.renderer.paragraph(d):d;continue}default:{const H='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(H);return}else throw new Error(H)}}}return r}parseInline(e,t){t=t||this.renderer;let r="",s,i,o;const a=e.length;for(s=0;s<a;s++){if(i=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=o||"";continue}switch(i.type){case"escape":{r+=t.text(i.text);break}case"html":{r+=t.html(i.text);break}case"link":{r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{r+=t.image(i.href,i.title,i.text);break}case"strong":{r+=t.strong(this.parseInline(i.tokens,t));break}case"em":{r+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{r+=t.codespan(i.text);break}case"br":{r+=t.br();break}case"del":{r+=t.del(this.parseInline(i.tokens,t));break}case"text":{r+=t.text(i.text);break}default:{const c='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(c);return}else throw new Error(c)}}}return r}}function K(n,e,t){if(typeof n=="undefined"||n===null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=et({},K.defaults,e||{}),ac(e),t){const r=e.highlight;let s;try{s=gt.lex(n,e)}catch(a){return t(a)}const i=function(a){let c;if(!a)try{e.walkTokens&&K.walkTokens(s,e.walkTokens),c=bt.parse(s,e)}catch(l){a=l}return e.highlight=r,a?t(a):t(null,c)};if(!r||r.length<3||(delete e.highlight,!s.length))return i();let o=0;K.walkTokens(s,function(a){a.type==="code"&&(o++,setTimeout(()=>{r(a.text,a.lang,function(c,l){if(c)return i(c);l!=null&&l!==a.text&&(a.text=l,a.escaped=!0),o--,o===0&&i()})},0))}),o===0&&i();return}try{const r=gt.lex(n,e);return e.walkTokens&&K.walkTokens(r,e.walkTokens),bt.parse(r,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ye(r.message+"",!0)+"</pre>";throw r}}K.options=K.setOptions=function(n){return et(K.defaults,n),ah(K.defaults),K};K.getDefaults=ic;K.defaults=bn;K.use=function(...n){const e=et({},...n),t=K.defaults.extensions||{renderers:{},childTokens:{}};let r;n.forEach(s=>{if(s.extensions&&(r=!0,s.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const o=t.renderers?t.renderers[i.name]:null;o?t.renderers[i.name]=function(...a){let c=i.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:t.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)})),s.renderer){const i=K.defaults.renderer||new pi;for(const o in s.renderer){const a=i[o];i[o]=(...c)=>{let l=s.renderer[o].apply(i,c);return l===!1&&(l=a.apply(i,c)),l}}e.renderer=i}if(s.tokenizer){const i=K.defaults.tokenizer||new di;for(const o in s.tokenizer){const a=i[o];i[o]=(...c)=>{let l=s.tokenizer[o].apply(i,c);return l===!1&&(l=a.apply(i,c)),l}}e.tokenizer=i}if(s.walkTokens){const i=K.defaults.walkTokens;e.walkTokens=function(o){s.walkTokens.call(this,o),i&&i.call(this,o)}}r&&(e.extensions=t),K.setOptions(e)})};K.walkTokens=function(n,e){for(const t of n)switch(e.call(K,t),t.type){case"table":{for(const r of t.header)K.walkTokens(r.tokens,e);for(const r of t.rows)for(const s of r)K.walkTokens(s.tokens,e);break}case"list":{K.walkTokens(t.items,e);break}default:K.defaults.extensions&&K.defaults.extensions.childTokens&&K.defaults.extensions.childTokens[t.type]?K.defaults.extensions.childTokens[t.type].forEach(function(r){K.walkTokens(t[r],e)}):t.tokens&&K.walkTokens(t.tokens,e)}};K.parseInline=function(n,e){if(typeof n=="undefined"||n===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");e=et({},K.defaults,e||{}),ac(e);try{const t=gt.lexInline(n,e);return e.walkTokens&&K.walkTokens(t,e.walkTokens),bt.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ye(t.message+"",!0)+"</pre>";throw t}};K.Parser=bt;K.parser=bt.parse;K.Renderer=pi;K.TextRenderer=cc;K.Lexer=gt;K.lexer=gt.lex;K.Tokenizer=di;K.Slugger=lc;K.parse=K;bt.parse;gt.lex;/*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */function Eh(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var Ah=Object.hasOwnProperty,$o=Object.setPrototypeOf,Sh=Object.isFrozen,Ch=Object.getPrototypeOf,Th=Object.getOwnPropertyDescriptor,Te=Object.freeze,it=Object.seal,$h=Object.create,uc=typeof Reflect!="undefined"&&Reflect,Rr=uc.apply,Bs=uc.construct;Rr||(Rr=function(e,t,r){return e.apply(t,r)});Te||(Te=function(e){return e});it||(it=function(e){return e});Bs||(Bs=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(Eh(t))))});var Rh=Qe(Array.prototype.forEach),Ro=Qe(Array.prototype.pop),Rn=Qe(Array.prototype.push),xr=Qe(String.prototype.toLowerCase),Do=Qe(String.prototype.match),xt=Qe(String.prototype.replace),Dh=Qe(String.prototype.indexOf),Lh=Qe(String.prototype.trim),Oe=Qe(RegExp.prototype.test),gs=Mh(TypeError);function Qe(n){return function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return Rr(n,e,r)}}function Mh(n){return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return Bs(n,t)}}function Q(n,e){$o&&$o(n,null);for(var t=e.length;t--;){var r=e[t];if(typeof r=="string"){var s=xr(r);s!==r&&(Sh(e)||(e[t]=s),r=s)}n[r]=!0}return n}function Nt(n){var e=$h(null),t=void 0;for(t in n)Rr(Ah,n,[t])&&(e[t]=n[t]);return e}function pr(n,e){for(;n!==null;){var t=Th(n,e);if(t){if(t.get)return Qe(t.get);if(typeof t.value=="function")return Qe(t.value)}n=Ch(n)}function r(s){return console.warn("fallback value for",s),null}return r}var Lo=Te(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),bs=Te(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),vs=Te(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Oh=Te(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ys=Te(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Nh=Te(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Mo=Te(["#text"]),Oo=Te(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),_s=Te(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),No=Te(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),fr=Te(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ih=it(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Ph=it(/<%[\s\S]*|[\s\S]*%>/gm),qh=it(/^data-[\-\w.\u00B7-\uFFFF]/),Fh=it(/^aria-[\-\w]+$/),Bh=it(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),zh=it(/^(?:\w+script|data):/i),Hh=it(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Uh=it(/^html$/i),Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};function nt(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)}var jh=function(){return typeof window=="undefined"?null:window},Vh=function(e,t){if((typeof e=="undefined"?"undefined":Ln(e))!=="object"||typeof e.createPolicy!="function")return null;var r=null,s="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(s)&&(r=t.currentScript.getAttribute(s));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function hc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jh(),e=function(g){return hc(g)};if(e.version="2.3.6",e.removed=[],!n||!n.document||n.document.nodeType!==9)return e.isSupported=!1,e;var t=n.document,r=n.document,s=n.DocumentFragment,i=n.HTMLTemplateElement,o=n.Node,a=n.Element,c=n.NodeFilter,l=n.NamedNodeMap,u=l===void 0?n.NamedNodeMap||n.MozNamedAttrMap:l,h=n.HTMLFormElement,d=n.DOMParser,p=n.trustedTypes,k=a.prototype,b=pr(k,"cloneNode"),x=pr(k,"nextSibling"),_=pr(k,"childNodes"),y=pr(k,"parentNode");if(typeof i=="function"){var w=r.createElement("template");w.content&&w.content.ownerDocument&&(r=w.content.ownerDocument)}var R=Vh(p,t),$=R?R.createHTML(""):"",E=r,B=E.implementation,H=E.createNodeIterator,V=E.createDocumentFragment,L=E.getElementsByTagName,X=t.importNode,ue={};try{ue=Nt(r).documentMode?r.documentMode:{}}catch{}var N={};e.isSupported=typeof y=="function"&&B&&typeof B.createHTMLDocument!="undefined"&&ue!==9;var v=Ih,S=Ph,f=qh,m=Fh,A=zh,C=Hh,I=Bh,F=null,Z=Q({},[].concat(nt(Lo),nt(bs),nt(vs),nt(ys),nt(Mo))),W=null,re=Q({},[].concat(nt(Oo),nt(_s),nt(No),nt(fr))),J=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,qe=null,Ke=!0,me=!0,Ie=!1,Fe=!1,_e=!1,Zt=!1,Be=!1,kt=!1,wt=!1,G=!1,An=!0,he=!0,te=!1,Ye={},Le=null,Kt=Q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Yt=null,O=Q({},["audio","video","img","source","image","track"]),z=null,Y=Q({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ee="http://www.w3.org/1998/Math/MathML",ge="http://www.w3.org/2000/svg",ve="http://www.w3.org/1999/xhtml",Xt=ve,Sn=!1,Jt=void 0,wl=["application/xhtml+xml","text/html"],xl="text/html",Mt=void 0,Qt=null,El=r.createElement("form"),Ui=function(g){return g instanceof RegExp||g instanceof Function},os=function(g){Qt&&Qt===g||((!g||(typeof g=="undefined"?"undefined":Ln(g))!=="object")&&(g={}),g=Nt(g),F="ALLOWED_TAGS"in g?Q({},g.ALLOWED_TAGS):Z,W="ALLOWED_ATTR"in g?Q({},g.ALLOWED_ATTR):re,z="ADD_URI_SAFE_ATTR"in g?Q(Nt(Y),g.ADD_URI_SAFE_ATTR):Y,Yt="ADD_DATA_URI_TAGS"in g?Q(Nt(O),g.ADD_DATA_URI_TAGS):O,Le="FORBID_CONTENTS"in g?Q({},g.FORBID_CONTENTS):Kt,De="FORBID_TAGS"in g?Q({},g.FORBID_TAGS):{},qe="FORBID_ATTR"in g?Q({},g.FORBID_ATTR):{},Ye="USE_PROFILES"in g?g.USE_PROFILES:!1,Ke=g.ALLOW_ARIA_ATTR!==!1,me=g.ALLOW_DATA_ATTR!==!1,Ie=g.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=g.SAFE_FOR_TEMPLATES||!1,_e=g.WHOLE_DOCUMENT||!1,kt=g.RETURN_DOM||!1,wt=g.RETURN_DOM_FRAGMENT||!1,G=g.RETURN_TRUSTED_TYPE||!1,Be=g.FORCE_BODY||!1,An=g.SANITIZE_DOM!==!1,he=g.KEEP_CONTENT!==!1,te=g.IN_PLACE||!1,I=g.ALLOWED_URI_REGEXP||I,Xt=g.NAMESPACE||ve,g.CUSTOM_ELEMENT_HANDLING&&Ui(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(J.tagNameCheck=g.CUSTOM_ELEMENT_HANDLING.tagNameCheck),g.CUSTOM_ELEMENT_HANDLING&&Ui(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(J.attributeNameCheck=g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),g.CUSTOM_ELEMENT_HANDLING&&typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(J.allowCustomizedBuiltInElements=g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Jt=wl.indexOf(g.PARSER_MEDIA_TYPE)===-1?Jt=xl:Jt=g.PARSER_MEDIA_TYPE,Mt=Jt==="application/xhtml+xml"?function(T){return T}:xr,Fe&&(me=!1),wt&&(kt=!0),Ye&&(F=Q({},[].concat(nt(Mo))),W=[],Ye.html===!0&&(Q(F,Lo),Q(W,Oo)),Ye.svg===!0&&(Q(F,bs),Q(W,_s),Q(W,fr)),Ye.svgFilters===!0&&(Q(F,vs),Q(W,_s),Q(W,fr)),Ye.mathMl===!0&&(Q(F,ys),Q(W,No),Q(W,fr))),g.ADD_TAGS&&(F===Z&&(F=Nt(F)),Q(F,g.ADD_TAGS)),g.ADD_ATTR&&(W===re&&(W=Nt(W)),Q(W,g.ADD_ATTR)),g.ADD_URI_SAFE_ATTR&&Q(z,g.ADD_URI_SAFE_ATTR),g.FORBID_CONTENTS&&(Le===Kt&&(Le=Nt(Le)),Q(Le,g.FORBID_CONTENTS)),he&&(F["#text"]=!0),_e&&Q(F,["html","head","body"]),F.table&&(Q(F,["tbody"]),delete De.tbody),Te&&Te(g),Qt=g)},ji=Q({},["mi","mo","mn","ms","mtext"]),Vi=Q({},["foreignobject","desc","title","annotation-xml"]),cr=Q({},bs);Q(cr,vs),Q(cr,Oh);var as=Q({},ys);Q(as,Nh);var Al=function(g){var T=y(g);(!T||!T.tagName)&&(T={namespaceURI:ve,tagName:"template"});var q=xr(g.tagName),se=xr(T.tagName);if(g.namespaceURI===ge)return T.namespaceURI===ve?q==="svg":T.namespaceURI===ee?q==="svg"&&(se==="annotation-xml"||ji[se]):Boolean(cr[q]);if(g.namespaceURI===ee)return T.namespaceURI===ve?q==="math":T.namespaceURI===ge?q==="math"&&Vi[se]:Boolean(as[q]);if(g.namespaceURI===ve){if(T.namespaceURI===ge&&!Vi[se]||T.namespaceURI===ee&&!ji[se])return!1;var xe=Q({},["title","style","font","a","script"]);return!as[q]&&(xe[q]||!cr[q])}return!1},lt=function(g){Rn(e.removed,{element:g});try{g.parentNode.removeChild(g)}catch{try{g.outerHTML=$}catch{g.remove()}}},Gi=function(g,T){try{Rn(e.removed,{attribute:T.getAttributeNode(g),from:T})}catch{Rn(e.removed,{attribute:null,from:T})}if(T.removeAttribute(g),g==="is"&&!W[g])if(kt||wt)try{lt(T)}catch{}else try{T.setAttribute(g,"")}catch{}},Wi=function(g){var T=void 0,q=void 0;if(Be)g="<remove></remove>"+g;else{var se=Do(g,/^[\r\n\t ]+/);q=se&&se[0]}Jt==="application/xhtml+xml"&&(g='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+g+"</body></html>");var xe=R?R.createHTML(g):g;if(Xt===ve)try{T=new d().parseFromString(xe,Jt)}catch{}if(!T||!T.documentElement){T=B.createDocument(Xt,"template",null);try{T.documentElement.innerHTML=Sn?"":xe}catch{}}var Ee=T.body||T.documentElement;return g&&q&&Ee.insertBefore(r.createTextNode(q),Ee.childNodes[0]||null),Xt===ve?L.call(T,_e?"html":"body")[0]:_e?T.documentElement:Ee},Zi=function(g){return H.call(g.ownerDocument||g,g,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},Sl=function(g){return g instanceof h&&(typeof g.nodeName!="string"||typeof g.textContent!="string"||typeof g.removeChild!="function"||!(g.attributes instanceof u)||typeof g.removeAttribute!="function"||typeof g.setAttribute!="function"||typeof g.namespaceURI!="string"||typeof g.insertBefore!="function")},Cn=function(g){return(typeof o=="undefined"?"undefined":Ln(o))==="object"?g instanceof o:g&&(typeof g=="undefined"?"undefined":Ln(g))==="object"&&typeof g.nodeType=="number"&&typeof g.nodeName=="string"},ut=function(g,T,q){!N[g]||Rh(N[g],function(se){se.call(e,T,q,Qt)})},Ki=function(g){var T=void 0;if(ut("beforeSanitizeElements",g,null),Sl(g)||Do(g.nodeName,/[\u0080-\uFFFF]/))return lt(g),!0;var q=Mt(g.nodeName);if(ut("uponSanitizeElement",g,{tagName:q,allowedTags:F}),!Cn(g.firstElementChild)&&(!Cn(g.content)||!Cn(g.content.firstElementChild))&&Oe(/<[/\w]/g,g.innerHTML)&&Oe(/<[/\w]/g,g.textContent)||q==="select"&&Oe(/<template/i,g.innerHTML))return lt(g),!0;if(!F[q]||De[q]){if(!De[q]&&Xi(q)&&(J.tagNameCheck instanceof RegExp&&Oe(J.tagNameCheck,q)||J.tagNameCheck instanceof Function&&J.tagNameCheck(q)))return!1;if(he&&!Le[q]){var se=y(g)||g.parentNode,xe=_(g)||g.childNodes;if(xe&&se)for(var Ee=xe.length,ke=Ee-1;ke>=0;--ke)se.insertBefore(b(xe[ke],!0),x(g))}return lt(g),!0}return g instanceof a&&!Al(g)||(q==="noscript"||q==="noembed")&&Oe(/<\/no(script|embed)/i,g.innerHTML)?(lt(g),!0):(Fe&&g.nodeType===3&&(T=g.textContent,T=xt(T,v," "),T=xt(T,S," "),g.textContent!==T&&(Rn(e.removed,{element:g.cloneNode()}),g.textContent=T)),ut("afterSanitizeElements",g,null),!1)},Yi=function(g,T,q){if(An&&(T==="id"||T==="name")&&(q in r||q in El))return!1;if(!(me&&!qe[T]&&Oe(f,T))){if(!(Ke&&Oe(m,T))){if(!W[T]||qe[T]){if(!(Xi(g)&&(J.tagNameCheck instanceof RegExp&&Oe(J.tagNameCheck,g)||J.tagNameCheck instanceof Function&&J.tagNameCheck(g))&&(J.attributeNameCheck instanceof RegExp&&Oe(J.attributeNameCheck,T)||J.attributeNameCheck instanceof Function&&J.attributeNameCheck(T))||T==="is"&&J.allowCustomizedBuiltInElements&&(J.tagNameCheck instanceof RegExp&&Oe(J.tagNameCheck,q)||J.tagNameCheck instanceof Function&&J.tagNameCheck(q))))return!1}else if(!z[T]){if(!Oe(I,xt(q,C,""))){if(!((T==="src"||T==="xlink:href"||T==="href")&&g!=="script"&&Dh(q,"data:")===0&&Yt[g])){if(!(Ie&&!Oe(A,xt(q,C,"")))){if(q)return!1}}}}}}return!0},Xi=function(g){return g.indexOf("-")>0},Ji=function(g){var T=void 0,q=void 0,se=void 0,xe=void 0;ut("beforeSanitizeAttributes",g,null);var Ee=g.attributes;if(!!Ee){var ke={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W};for(xe=Ee.length;xe--;){T=Ee[xe];var lr=T,Me=lr.name,Qi=lr.namespaceURI;if(q=Lh(T.value),se=Mt(Me),ke.attrName=se,ke.attrValue=q,ke.keepAttr=!0,ke.forceKeepAttr=void 0,ut("uponSanitizeAttribute",g,ke),q=ke.attrValue,!ke.forceKeepAttr&&(Gi(Me,g),!!ke.keepAttr)){if(Oe(/\/>/i,q)){Gi(Me,g);continue}Fe&&(q=xt(q,v," "),q=xt(q,S," "));var Tl=Mt(g.nodeName);if(!!Yi(Tl,se,q))try{Qi?g.setAttributeNS(Qi,Me,q):g.setAttribute(Me,q),Ro(e.removed)}catch{}}}ut("afterSanitizeAttributes",g,null)}},Cl=function U(g){var T=void 0,q=Zi(g);for(ut("beforeSanitizeShadowDOM",g,null);T=q.nextNode();)ut("uponSanitizeShadowNode",T,null),!Ki(T)&&(T.content instanceof s&&U(T.content),Ji(T));ut("afterSanitizeShadowDOM",g,null)};return e.sanitize=function(U,g){var T=void 0,q=void 0,se=void 0,xe=void 0,Ee=void 0;if(Sn=!U,Sn&&(U="<!-->"),typeof U!="string"&&!Cn(U)){if(typeof U.toString!="function")throw gs("toString is not a function");if(U=U.toString(),typeof U!="string")throw gs("dirty is not a string, aborting")}if(!e.isSupported){if(Ln(n.toStaticHTML)==="object"||typeof n.toStaticHTML=="function"){if(typeof U=="string")return n.toStaticHTML(U);if(Cn(U))return n.toStaticHTML(U.outerHTML)}return U}if(Zt||os(g),e.removed=[],typeof U=="string"&&(te=!1),te){if(U.nodeName){var ke=Mt(U.nodeName);if(!F[ke]||De[ke])throw gs("root node is forbidden and cannot be sanitized in-place")}}else if(U instanceof o)T=Wi("<!---->"),q=T.ownerDocument.importNode(U,!0),q.nodeType===1&&q.nodeName==="BODY"||q.nodeName==="HTML"?T=q:T.appendChild(q);else{if(!kt&&!Fe&&!_e&&U.indexOf("<")===-1)return R&&G?R.createHTML(U):U;if(T=Wi(U),!T)return kt?null:G?$:""}T&&Be&&lt(T.firstChild);for(var lr=Zi(te?U:T);se=lr.nextNode();)se.nodeType===3&&se===xe||Ki(se)||(se.content instanceof s&&Cl(se.content),Ji(se),xe=se);if(xe=null,te)return U;if(kt){if(wt)for(Ee=V.call(T.ownerDocument);T.firstChild;)Ee.appendChild(T.firstChild);else Ee=T;return W.shadowroot&&(Ee=X.call(t,Ee,!0)),Ee}var Me=_e?T.outerHTML:T.innerHTML;return _e&&F["!doctype"]&&T.ownerDocument&&T.ownerDocument.doctype&&T.ownerDocument.doctype.name&&Oe(Uh,T.ownerDocument.doctype.name)&&(Me="<!DOCTYPE "+T.ownerDocument.doctype.name+`>
`+Me),Fe&&(Me=xt(Me,v," "),Me=xt(Me,S," ")),R&&G?R.createHTML(Me):Me},e.setConfig=function(U){os(U),Zt=!0},e.clearConfig=function(){Qt=null,Zt=!1},e.isValidAttribute=function(U,g,T){Qt||os({});var q=Mt(U),se=Mt(g);return Yi(q,se,T)},e.addHook=function(U,g){typeof g=="function"&&(N[U]=N[U]||[],Rn(N[U],g))},e.removeHook=function(U){N[U]&&Ro(N[U])},e.removeHooks=function(U){N[U]&&(N[U]=[])},e.removeAllHooks=function(){N={}},e}var Gh=hc();K.setOptions({headerIds:!1});const fi=n=>M`
    ${n?qn(Gh.sanitize(K(n)).replace(/<(h[1-6]|a|p|ul|ol|li|pre|code|strong|em|blockquote|del)(\s+href="[^"]+")*>/g,'<$1 part="md-$1"$2>')):ie}
  `,It=(n,e,t,r,s,i)=>M`
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
        <div part="docs-markdown">${fi(t)}</div>
      </div>
    </div>
  `,Pt=(n,e,t)=>{const r=e.length===0;return M`
    <api-viewer-tab slot="tab" part="tab" ?hidden=${r}>
      ${n}
    </api-viewer-tab>
    <api-viewer-panel slot="panel" part="tab-panel" ?hidden=${r}>
      ${t}
    </api-viewer-panel>
  `},Wh=n=>{var r,s;const e=n.parameters||[],t=((s=(r=n.return)==null?void 0:r.type)==null?void 0:s.text)||"void";return M`
    <span part="docs-method">
      ${n.name}(<span part="docs-method-params"
        >${e.map((i,o)=>{var a;return M`<span part="docs-param-name">${i.name}</span>:
              <span part="docs-param-type">${(a=i.type)==null?void 0:a.text}</span>${o===e.length-1?"":", "}`})}</span
      >)</span
    ><span part="docs-method-type">: ${t}</span>
  `};class yt extends oe{constructor(){super(...arguments);this.name="",this.props=[],this.attrs=[],this.methods=[],this.slots=[],this.events=[],this.cssParts=[],this.cssProps=[]}createRenderRoot(){return this}render(){const{slots:e,props:t,attrs:r,methods:s,events:i,cssParts:o,cssProps:a}=this,c=[t,r,s,e,i,a,o].every(u=>u.length===0),l=(r||[]).filter(u=>!t.some(h=>h.name===u.fieldName));return c?M`
          <div part="warning">
            The element &lt;${this.name}&gt; does not provide any documented
            API.
          </div>
        `:M`
          <api-viewer-tabs>
            ${Pt("Properties",t,M`
                ${t.map(u=>{const{name:h,description:d,type:p}=u,k=(r||[]).find(b=>b.fieldName===h);return It("prop",h,d,p==null?void 0:p.text,u.default,k==null?void 0:k.name)})}
              `)}
            ${Pt("Attributes",l,M`
                ${l.map(({name:u,description:h,type:d})=>It("attr",u,h,d==null?void 0:d.text))}
              `)}
            ${Pt("Methods",s,M`
                ${s.map(u=>It("method",Wh(u),u.description))}
              `)}
            ${Pt("Slots",e,M`
                ${e.map(({name:u,description:h})=>It("slot",u,h))}
              `)}
            ${Pt("Events",i,M`
                ${i.map(({name:u,description:h})=>It("event",u,h))}
              `)}
            ${Pt("CSS Custom Properties",a,M`
                ${a.map(u=>{const{name:h,description:d}=u;return It("css",h,d,"",oi(u.default))})}
              `)}
            ${Pt("CSS Shadow Parts",o,M`
                ${o.map(({name:u,description:h})=>It("part",u,h))}
              `)}
          </api-viewer-tabs>
        `}updated(e){if(e.has("name")&&e.get("name")){const t=this.renderRoot.querySelector("api-viewer-tabs");t&&t.selectFirst()}}}ae([D()],yt.prototype,"name",void 0);ae([D({attribute:!1})],yt.prototype,"props",void 0);ae([D({attribute:!1})],yt.prototype,"attrs",void 0);ae([D({attribute:!1})],yt.prototype,"methods",void 0);ae([D({attribute:!1})],yt.prototype,"slots",void 0);ae([D({attribute:!1})],yt.prototype,"events",void 0);ae([D({attribute:!1})],yt.prototype,"cssParts",void 0);ae([D({attribute:!1})],yt.prototype,"cssProps",void 0);customElements.define("api-docs-layout",yt);async function Zh(n,e,t,r,s,i,o=""){var h,d,p,k,b,x,_,y;const a=await n;if(!Qn(a))return si;const c=Hr(a),l=ni(a,s),u=ri(l.members);return M`
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
    ${Ka(e==="docs"?M`
            <div ?hidden=${l.description===""} part="docs-description">
              ${fi(l.description)}
            </div>
            <api-docs-layout
              .name=${l.name}
              .props=${u}
              .attrs=${(h=l.attributes)!=null?h:[]}
              .events=${(d=l.events)!=null?d:[]}
              .slots=${(p=l.slots)!=null?p:[]}
              .cssParts=${(k=l.cssParts)!=null?k:[]}
              .cssProps=${(b=l.cssProperties)!=null?b:[]}
              part="docs-container"
            ></api-docs-layout>
          `:M`
            <api-demo-layout
              .tag=${l.name}
              .props=${u}
              .events=${(x=l.events)!=null?x:[]}
              .slots=${(_=l.slots)!=null?_:[]}
              .cssProps=${(y=l.cssProperties)!=null?y:[]}
              .exclude=${o}
              .vid=${i}
              part="demo-container"
            ></api-demo-layout>
          `)}
  `}let Kh=0;class mi extends ii(oe){constructor(){super();this.section="docs",this._id=Kh++}render(){return M`
      ${ti(Zh(this.jsonFetched,this.section,this._onSelect,this._onToggle,this.selected,this._id,this.excludeKnobs))}
    `}firstUpdated(){this.setTemplates()}setTemplates(e){Br(this._id,e||Array.from(this.querySelectorAll("template")))}_onSelect(e){this.selected=e.target.value}_onToggle(e){this.section=e.target.value}}ae([D()],mi.prototype,"section",void 0);ae([D({type:String,attribute:"exclude-knobs"})],mi.prototype,"excludeKnobs",void 0);var jr=le`
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
`;const Yh=le`
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
`,Xh=le`
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
`;var gi=le`
  ${Xh}
  ${Yh}
`,dc=le`
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
`,Jh=le`
  ${jr}
  ${dc}
  ${gi}

  [part='radio-label'] {
    margin: 0 0.75rem 0 0.25rem;
    color: var(--ave-header-color);
    font-size: 0.875rem;
  }
`;class Qh extends mi{static get styles(){return Jh}firstUpdated(){this.setTemplates()}setTemplates(e){Br(this._id,e||Array.from(this.querySelectorAll("template")))}}customElements.define("api-viewer",Qh);async function ed(n,e,t,r,s,i=""){var u,h,d;const o=await n;if(!Qn(o))return si;const a=Hr(o,t),c=ni(o,r),l=ri(c.members);return M`
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
            ${a.map(p=>M`<option value=${p.name}>${p.name}</option>`)}
          </select>
        </label>
      </nav>
    </header>
    <api-demo-layout
      .tag=${c.name}
      .props=${l}
      .events=${(u=c.events)!=null?u:[]}
      .slots=${(h=c.slots)!=null?h:[]}
      .cssProps=${(d=c.cssProperties)!=null?d:[]}
      .exclude=${i}
      .vid=${s}
      part="demo-container"
    ></api-demo-layout>
  `}let td=0;class bi extends ii(oe){constructor(){super();this._id=td++}render(){return M`
      ${ti(ed(this.jsonFetched,this._onSelect,this.only,this.selected,this._id,this.excludeKnobs))}
    `}_onSelect(e){this.selected=e.target.value}}ae([D({type:String,attribute:"exclude-knobs"})],bi.prototype,"excludeKnobs",void 0);class nd extends bi{static get styles(){return[jr,gi]}firstUpdated(){this.setTemplates()}setTemplates(e){Br(this._id,e||Array.from(this.querySelectorAll("template")))}}customElements.define("api-demo",nd);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=n=>e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(n,e):((t,r)=>{const{kind:s,elements:i}=r;return{kind:s,elements:i,finisher(o){window.customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(n){return D(He(ze({},n),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rd=({finisher:n,descriptor:e})=>(t,r)=>{var s;if(r===void 0){const i=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(t.key)}:He(ze({},t),{key:i});return n!=null&&(o.finisher=function(a){n(a,i)}),o}{const i=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),n==null||n(i,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(n,e){return rd({descriptor:t=>{const r={get(){var s,i;return(i=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var i,o;return this[s]===void 0&&(this[s]=(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return r}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ks;((ks=window.HTMLSlotElement)===null||ks===void 0?void 0:ks.prototype.assignedElements)!=null;var sd=Object.defineProperty,id=Object.getOwnPropertyDescriptor,od=(n,e,t,r)=>{for(var s=r>1?void 0:r?id(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&sd(e,t,s),s};class pc extends oe{constructor(){super(...arguments);this.theme="light"}updated(e){!e.get("theme")||this.updateTheme(this.theme)}connectedCallback(){super.connectedCallback();const e=localStorage.getItem("kami-theme-mode");!e||this.updateTheme(e)}updateTheme(e){e!=="light"&&e!=="dark"||(this.theme=e,this.emitUpdateTheme(e),localStorage.setItem("kami-theme-mode",e))}emitUpdateTheme(e){const t=new CustomEvent("theme",{detail:{theme:e}});document.dispatchEvent(t)}render(){return M`
      <slot class="kami-${this.theme||"light"}-mode"></slot>
    `}}od([D({reflect:!0})],pc.prototype,"theme",2);var ad=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,ld=(n,e,t,r)=>{for(var s=r>1?void 0:r?cd(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ad(e,t,s),s};let zs=class extends pc{};zs.styles=le`
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

      --kami-theme-text-rgb: 86, 86, 86;
    }
  
    .kami-dark-mode::slotted(*) {
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: white;
      --kami-theme-background: #303032;
      --kami-theme-border-color: rgba(255, 255, 255, 0.09);
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);

      --kami-theme-text-rgb: 255, 255, 255;
    }
  `;zs=ld([fe("kami-theme")],zs);function ud(n="0",e="1"){return[{opacity:n},{opacity:e}]}function hd(n="0",e="1"){return[{transform:`scale(${n})`,opacity:0},{transform:`scale(${e})`,opacity:1}]}function dd(n="50",e="0"){return[{transform:`translateY(${n}px)`,opacity:0},{opacity:0,offset:.3},{transform:`translateY(${e}px)`,opacity:1}]}function pd(n="50",e="0"){return[{transform:`translateX(${n}px)`,opacity:0},{opacity:0,offset:.3},{transform:`translateX(${e}px)`,opacity:1}]}const mr={fade:ud,scale:hd,"slide-x":pd,"slide-y":dd};var fd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,Pe=(n,e,t,r)=>{for(var s=r>1?void 0:r?md(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&fd(e,t,s),s};let we=class extends oe{constructor(){super(...arguments);this.appear=!1,this.intersection=!1,this.duration=500,this.delay=0,this.easing="ease",this.transition="fade"}get options(){return{duration:this.duration,delay:this.delay,easing:this.easing}}get single(){return this.getElementSlot(this.child)}get in(){return this.getElementSlot(this.childIn)}get out(){return this.getElementSlot(this.childOut)}getElementSlot(n){const e=n==null?void 0:n.assignedElements({flatten:!0})[0];if(!!e)return e}updated(n){n.get("show")!==void 0&&(this.cancelAnimation(this.animation),this.cancelAnimation(this.animationIn),this.cancelAnimation(this.animationOut),this.updateHostSize(this.in),this.updateHostSize(this.out),this.toggle(this.show))}toggle(n){n&&this.single&&this.display(),n&&this.in&&this.out&&this.displayInOut(),!n&&this.single&&this.hide(),!n&&this.in&&this.out&&this.hideInOut()}firstUpdated(){if(this.single&&(this.in||this.out))throw new Error("In-out does not work with default slot");if(this.in&&!this.out)throw new Error("Missing out slot");if(this.out&&!this.in)throw new Error("Missing in slot");this.show&&this.single&&this.displayEl(this.child),!this.show&&this.in&&this.out&&(this.hideEl(this.childIn),this.displayEl(this.childOut)),this.show&&this.in&&this.out&&(this.displayEl(this.childIn),this.hideEl(this.childOut)),this.updateHostSize(this.in),this.updateHostSize(this.out),this.style.display="block",this.style.opacity="1",this.appear&&!this.intersection&&this.toggle(!0),this.appear&&this.intersection&&(this.displayEl(this.child),this.style.opacity="0",this.observer=this.createObserver(),this.observer.observe(this))}createObserver(){return new IntersectionObserver(n=>{const[{intersectionRatio:e}]=n;e>0&&this.style.opacity!=="1"&&(this.style.opacity="1",this.toggle(!0))},{root:null,rootMargin:"0px",threshold:.1})}runAnimation({child:n,el:e,keyframes:t,options:r,show:s=!0}){s&&this.displayEl(n);const i=e.animate(t,r);return i.onfinish=()=>{s?(this.displayEl(n),this.dispatchEvent(new CustomEvent("display"))):(this.hideEl(n),this.dispatchEvent(new CustomEvent("hide")))},i}runAnimationInOut({childIn:n,childOut:e,inEl:t,outEl:r,keyframes:s,options:i}){this.displayEl(n);const o=t.animate(s,i),a=r.animate(s,He(ze({},i),{direction:"reverse"}));return o.onfinish=()=>this.displayEl(n),o.oncancel=()=>this.displayEl(n),a.onfinish=()=>this.hideEl(e),a.oncancel=()=>this.hideEl(e),{animationIn:o,animationOut:a}}display(){!this.child||!this.single||(this.animation=this.runAnimation({child:this.child,el:this.single,keyframes:mr[this.transition](this.from,this.to),options:this.options}))}displayInOut(){if(!this.childIn||!this.childOut||!this.in||!this.out)return;const{animationIn:n,animationOut:e}=this.runAnimationInOut({childIn:this.childIn,childOut:this.childOut,inEl:this.in,outEl:this.out,keyframes:mr[this.transition](this.from,this.to),options:this.options});this.animationIn=n,this.animationOut=e}hide(){!this.child||!this.single||(this.animation=this.runAnimation({child:this.child,el:this.single,keyframes:mr[this.transition](this.from,this.to),show:!1,options:He(ze({},this.options),{direction:"reverse"})}))}hideInOut(){if(!this.childIn||!this.childOut||!this.in||!this.out)return;const{animationIn:n,animationOut:e}=this.runAnimationInOut({childIn:this.childOut,childOut:this.childIn,inEl:this.out,outEl:this.in,keyframes:mr[this.transition](this.from,this.to),options:this.options});this.animationIn=e,this.animationOut=n}updateHostSize(n){!n||!n.clientWidth&&!n.clientHeight||(this.style.width=`${n.clientWidth}px`,this.style.height=`${n.clientHeight}px`)}cancelAnimation(n){!n||n.playState==="finished"||n.cancel()}displayEl(n){!n||(n.style.display="inherit")}hideEl(n){!n||(n.style.display="none")}render(){return M`
      <slot id="single" style="display: none;"></slot>
      <slot id="in" name="in" style="display: none; position: absolute;"></slot>
      <slot id="out" name="out" style="display: none; position: absolute;"></slot>
    `}};Pe([_t("#single")],we.prototype,"child",2);Pe([_t("#in")],we.prototype,"childIn",2);Pe([_t("#out")],we.prototype,"childOut",2);Pe([D({converter:n=>n==="true"})],we.prototype,"show",2);Pe([D({type:Boolean})],we.prototype,"appear",2);Pe([D({type:Boolean})],we.prototype,"intersection",2);Pe([D({type:String})],we.prototype,"from",2);Pe([D({type:String})],we.prototype,"to",2);Pe([D({type:Number})],we.prototype,"duration",2);Pe([D({type:Number})],we.prototype,"delay",2);Pe([D({type:String})],we.prototype,"easing",2);Pe([D({type:String})],we.prototype,"transition",2);we=Pe([fe("kami-transition")],we);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const gd=le`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Hs=class extends oe{render(){return M`<span><slot></slot></span>`}};Hs.styles=[gd];Hs=ae([fe("mwc-icon")],Hs);var bd="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",vd="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",yd="M19 17V11.8C18.5 11.9 18 12 17.5 12H17V18H7V11C7 8.2 9.2 6 12 6C12.1 4.7 12.7 3.6 13.5 2.7C13.2 2.3 12.6 2 12 2C10.9 2 10 2.9 10 4V4.3C7 5.2 5 7.9 5 11V17L3 19V20H21V19L19 17M10 21C10 22.1 10.9 23 12 23S14 22.1 14 21H10M21 6.5C21 8.4 19.4 10 17.5 10S14 8.4 14 6.5 15.6 3 17.5 3 21 4.6 21 6.5",_d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z",kd="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",Vr="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",wd="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",xd="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",Ed="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",Ad="M19 17H22L18 21L14 17H17V3H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z",Sd="M19 7H22L18 3L14 7H17V21H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z",Cd="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",Td=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function $d(n){if(n.__esModule)return n;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(n).forEach(function(t){var r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}),e}var ne={};const Rd="\xC1",Dd="\xE1",Ld="\u0102",Md="\u0103",Od="\u223E",Nd="\u223F",Id="\u223E\u0333",Pd="\xC2",qd="\xE2",Fd="\xB4",Bd="\u0410",zd="\u0430",Hd="\xC6",Ud="\xE6",jd="\u2061",Vd="\u{1D504}",Gd="\u{1D51E}",Wd="\xC0",Zd="\xE0",Kd="\u2135",Yd="\u2135",Xd="\u0391",Jd="\u03B1",Qd="\u0100",ep="\u0101",tp="\u2A3F",np="&",rp="&",sp="\u2A55",ip="\u2A53",op="\u2227",ap="\u2A5C",cp="\u2A58",lp="\u2A5A",up="\u2220",hp="\u29A4",dp="\u2220",pp="\u29A8",fp="\u29A9",mp="\u29AA",gp="\u29AB",bp="\u29AC",vp="\u29AD",yp="\u29AE",_p="\u29AF",kp="\u2221",wp="\u221F",xp="\u22BE",Ep="\u299D",Ap="\u2222",Sp="\xC5",Cp="\u237C",Tp="\u0104",$p="\u0105",Rp="\u{1D538}",Dp="\u{1D552}",Lp="\u2A6F",Mp="\u2248",Op="\u2A70",Np="\u224A",Ip="\u224B",Pp="'",qp="\u2061",Fp="\u2248",Bp="\u224A",zp="\xC5",Hp="\xE5",Up="\u{1D49C}",jp="\u{1D4B6}",Vp="\u2254",Gp="*",Wp="\u2248",Zp="\u224D",Kp="\xC3",Yp="\xE3",Xp="\xC4",Jp="\xE4",Qp="\u2233",ef="\u2A11",tf="\u224C",nf="\u03F6",rf="\u2035",sf="\u223D",of="\u22CD",af="\u2216",cf="\u2AE7",lf="\u22BD",uf="\u2305",hf="\u2306",df="\u2305",pf="\u23B5",ff="\u23B6",mf="\u224C",gf="\u0411",bf="\u0431",vf="\u201E",yf="\u2235",_f="\u2235",kf="\u2235",wf="\u29B0",xf="\u03F6",Ef="\u212C",Af="\u212C",Sf="\u0392",Cf="\u03B2",Tf="\u2136",$f="\u226C",Rf="\u{1D505}",Df="\u{1D51F}",Lf="\u22C2",Mf="\u25EF",Of="\u22C3",Nf="\u2A00",If="\u2A01",Pf="\u2A02",qf="\u2A06",Ff="\u2605",Bf="\u25BD",zf="\u25B3",Hf="\u2A04",Uf="\u22C1",jf="\u22C0",Vf="\u290D",Gf="\u29EB",Wf="\u25AA",Zf="\u25B4",Kf="\u25BE",Yf="\u25C2",Xf="\u25B8",Jf="\u2423",Qf="\u2592",em="\u2591",tm="\u2593",nm="\u2588",rm="=\u20E5",sm="\u2261\u20E5",im="\u2AED",om="\u2310",am="\u{1D539}",cm="\u{1D553}",lm="\u22A5",um="\u22A5",hm="\u22C8",dm="\u29C9",pm="\u2510",fm="\u2555",mm="\u2556",gm="\u2557",bm="\u250C",vm="\u2552",ym="\u2553",_m="\u2554",km="\u2500",wm="\u2550",xm="\u252C",Em="\u2564",Am="\u2565",Sm="\u2566",Cm="\u2534",Tm="\u2567",$m="\u2568",Rm="\u2569",Dm="\u229F",Lm="\u229E",Mm="\u22A0",Om="\u2518",Nm="\u255B",Im="\u255C",Pm="\u255D",qm="\u2514",Fm="\u2558",Bm="\u2559",zm="\u255A",Hm="\u2502",Um="\u2551",jm="\u253C",Vm="\u256A",Gm="\u256B",Wm="\u256C",Zm="\u2524",Km="\u2561",Ym="\u2562",Xm="\u2563",Jm="\u251C",Qm="\u255E",eg="\u255F",tg="\u2560",ng="\u2035",rg="\u02D8",sg="\u02D8",ig="\xA6",og="\u{1D4B7}",ag="\u212C",cg="\u204F",lg="\u223D",ug="\u22CD",hg="\u29C5",dg="\\",pg="\u27C8",fg="\u2022",mg="\u2022",gg="\u224E",bg="\u2AAE",vg="\u224F",yg="\u224E",_g="\u224F",kg="\u0106",wg="\u0107",xg="\u2A44",Eg="\u2A49",Ag="\u2A4B",Sg="\u2229",Cg="\u22D2",Tg="\u2A47",$g="\u2A40",Rg="\u2145",Dg="\u2229\uFE00",Lg="\u2041",Mg="\u02C7",Og="\u212D",Ng="\u2A4D",Ig="\u010C",Pg="\u010D",qg="\xC7",Fg="\xE7",Bg="\u0108",zg="\u0109",Hg="\u2230",Ug="\u2A4C",jg="\u2A50",Vg="\u010A",Gg="\u010B",Wg="\xB8",Zg="\xB8",Kg="\u29B2",Yg="\xA2",Xg="\xB7",Jg="\xB7",Qg="\u{1D520}",eb="\u212D",tb="\u0427",nb="\u0447",rb="\u2713",sb="\u2713",ib="\u03A7",ob="\u03C7",ab="\u02C6",cb="\u2257",lb="\u21BA",ub="\u21BB",hb="\u229B",db="\u229A",pb="\u229D",fb="\u2299",mb="\xAE",gb="\u24C8",bb="\u2296",vb="\u2295",yb="\u2297",_b="\u25CB",kb="\u29C3",wb="\u2257",xb="\u2A10",Eb="\u2AEF",Ab="\u29C2",Sb="\u2232",Cb="\u201D",Tb="\u2019",$b="\u2663",Rb="\u2663",Db=":",Lb="\u2237",Mb="\u2A74",Ob="\u2254",Nb="\u2254",Ib=",",Pb="@",qb="\u2201",Fb="\u2218",Bb="\u2201",zb="\u2102",Hb="\u2245",Ub="\u2A6D",jb="\u2261",Vb="\u222E",Gb="\u222F",Wb="\u222E",Zb="\u{1D554}",Kb="\u2102",Yb="\u2210",Xb="\u2210",Jb="\xA9",Qb="\xA9",ev="\u2117",tv="\u2233",nv="\u21B5",rv="\u2717",sv="\u2A2F",iv="\u{1D49E}",ov="\u{1D4B8}",av="\u2ACF",cv="\u2AD1",lv="\u2AD0",uv="\u2AD2",hv="\u22EF",dv="\u2938",pv="\u2935",fv="\u22DE",mv="\u22DF",gv="\u21B6",bv="\u293D",vv="\u2A48",yv="\u2A46",_v="\u224D",kv="\u222A",wv="\u22D3",xv="\u2A4A",Ev="\u228D",Av="\u2A45",Sv="\u222A\uFE00",Cv="\u21B7",Tv="\u293C",$v="\u22DE",Rv="\u22DF",Dv="\u22CE",Lv="\u22CF",Mv="\xA4",Ov="\u21B6",Nv="\u21B7",Iv="\u22CE",Pv="\u22CF",qv="\u2232",Fv="\u2231",Bv="\u232D",zv="\u2020",Hv="\u2021",Uv="\u2138",jv="\u2193",Vv="\u21A1",Gv="\u21D3",Wv="\u2010",Zv="\u2AE4",Kv="\u22A3",Yv="\u290F",Xv="\u02DD",Jv="\u010E",Qv="\u010F",e0="\u0414",t0="\u0434",n0="\u2021",r0="\u21CA",s0="\u2145",i0="\u2146",o0="\u2911",a0="\u2A77",c0="\xB0",l0="\u2207",u0="\u0394",h0="\u03B4",d0="\u29B1",p0="\u297F",f0="\u{1D507}",m0="\u{1D521}",g0="\u2965",b0="\u21C3",v0="\u21C2",y0="\xB4",_0="\u02D9",k0="\u02DD",w0="`",x0="\u02DC",E0="\u22C4",A0="\u22C4",S0="\u22C4",C0="\u2666",T0="\u2666",$0="\xA8",R0="\u2146",D0="\u03DD",L0="\u22F2",M0="\xF7",O0="\xF7",N0="\u22C7",I0="\u22C7",P0="\u0402",q0="\u0452",F0="\u231E",B0="\u230D",z0="$",H0="\u{1D53B}",U0="\u{1D555}",j0="\xA8",V0="\u02D9",G0="\u20DC",W0="\u2250",Z0="\u2251",K0="\u2250",Y0="\u2238",X0="\u2214",J0="\u22A1",Q0="\u2306",ey="\u222F",ty="\xA8",ny="\u21D3",ry="\u21D0",sy="\u21D4",iy="\u2AE4",oy="\u27F8",ay="\u27FA",cy="\u27F9",ly="\u21D2",uy="\u22A8",hy="\u21D1",dy="\u21D5",py="\u2225",fy="\u2913",my="\u2193",gy="\u2193",by="\u21D3",vy="\u21F5",yy="\u0311",_y="\u21CA",ky="\u21C3",wy="\u21C2",xy="\u2950",Ey="\u295E",Ay="\u2956",Sy="\u21BD",Cy="\u295F",Ty="\u2957",$y="\u21C1",Ry="\u21A7",Dy="\u22A4",Ly="\u2910",My="\u231F",Oy="\u230C",Ny="\u{1D49F}",Iy="\u{1D4B9}",Py="\u0405",qy="\u0455",Fy="\u29F6",By="\u0110",zy="\u0111",Hy="\u22F1",Uy="\u25BF",jy="\u25BE",Vy="\u21F5",Gy="\u296F",Wy="\u29A6",Zy="\u040F",Ky="\u045F",Yy="\u27FF",Xy="\xC9",Jy="\xE9",Qy="\u2A6E",e_="\u011A",t_="\u011B",n_="\xCA",r_="\xEA",s_="\u2256",i_="\u2255",o_="\u042D",a_="\u044D",c_="\u2A77",l_="\u0116",u_="\u0117",h_="\u2251",d_="\u2147",p_="\u2252",f_="\u{1D508}",m_="\u{1D522}",g_="\u2A9A",b_="\xC8",v_="\xE8",y_="\u2A96",__="\u2A98",k_="\u2A99",w_="\u2208",x_="\u23E7",E_="\u2113",A_="\u2A95",S_="\u2A97",C_="\u0112",T_="\u0113",$_="\u2205",R_="\u2205",D_="\u25FB",L_="\u2205",M_="\u25AB",O_="\u2004",N_="\u2005",I_="\u2003",P_="\u014A",q_="\u014B",F_="\u2002",B_="\u0118",z_="\u0119",H_="\u{1D53C}",U_="\u{1D556}",j_="\u22D5",V_="\u29E3",G_="\u2A71",W_="\u03B5",Z_="\u0395",K_="\u03B5",Y_="\u03F5",X_="\u2256",J_="\u2255",Q_="\u2242",ek="\u2A96",tk="\u2A95",nk="\u2A75",rk="=",sk="\u2242",ik="\u225F",ok="\u21CC",ak="\u2261",ck="\u2A78",lk="\u29E5",uk="\u2971",hk="\u2253",dk="\u212F",pk="\u2130",fk="\u2250",mk="\u2A73",gk="\u2242",bk="\u0397",vk="\u03B7",yk="\xD0",_k="\xF0",kk="\xCB",wk="\xEB",xk="\u20AC",Ek="!",Ak="\u2203",Sk="\u2203",Ck="\u2130",Tk="\u2147",$k="\u2147",Rk="\u2252",Dk="\u0424",Lk="\u0444",Mk="\u2640",Ok="\uFB03",Nk="\uFB00",Ik="\uFB04",Pk="\u{1D509}",qk="\u{1D523}",Fk="\uFB01",Bk="\u25FC",zk="\u25AA",Hk="fj",Uk="\u266D",jk="\uFB02",Vk="\u25B1",Gk="\u0192",Wk="\u{1D53D}",Zk="\u{1D557}",Kk="\u2200",Yk="\u2200",Xk="\u22D4",Jk="\u2AD9",Qk="\u2131",ew="\u2A0D",tw="\xBD",nw="\u2153",rw="\xBC",sw="\u2155",iw="\u2159",ow="\u215B",aw="\u2154",cw="\u2156",lw="\xBE",uw="\u2157",hw="\u215C",dw="\u2158",pw="\u215A",fw="\u215D",mw="\u215E",gw="\u2044",bw="\u2322",vw="\u{1D4BB}",yw="\u2131",_w="\u01F5",kw="\u0393",ww="\u03B3",xw="\u03DC",Ew="\u03DD",Aw="\u2A86",Sw="\u011E",Cw="\u011F",Tw="\u0122",$w="\u011C",Rw="\u011D",Dw="\u0413",Lw="\u0433",Mw="\u0120",Ow="\u0121",Nw="\u2265",Iw="\u2267",Pw="\u2A8C",qw="\u22DB",Fw="\u2265",Bw="\u2267",zw="\u2A7E",Hw="\u2AA9",Uw="\u2A7E",jw="\u2A80",Vw="\u2A82",Gw="\u2A84",Ww="\u22DB\uFE00",Zw="\u2A94",Kw="\u{1D50A}",Yw="\u{1D524}",Xw="\u226B",Jw="\u22D9",Qw="\u22D9",ex="\u2137",tx="\u0403",nx="\u0453",rx="\u2AA5",sx="\u2277",ix="\u2A92",ox="\u2AA4",ax="\u2A8A",cx="\u2A8A",lx="\u2A88",ux="\u2269",hx="\u2A88",dx="\u2269",px="\u22E7",fx="\u{1D53E}",mx="\u{1D558}",gx="`",bx="\u2265",vx="\u22DB",yx="\u2267",_x="\u2AA2",kx="\u2277",wx="\u2A7E",xx="\u2273",Ex="\u{1D4A2}",Ax="\u210A",Sx="\u2273",Cx="\u2A8E",Tx="\u2A90",$x="\u2AA7",Rx="\u2A7A",Dx=">",Lx=">",Mx="\u226B",Ox="\u22D7",Nx="\u2995",Ix="\u2A7C",Px="\u2A86",qx="\u2978",Fx="\u22D7",Bx="\u22DB",zx="\u2A8C",Hx="\u2277",Ux="\u2273",jx="\u2269\uFE00",Vx="\u2269\uFE00",Gx="\u02C7",Wx="\u200A",Zx="\xBD",Kx="\u210B",Yx="\u042A",Xx="\u044A",Jx="\u2948",Qx="\u2194",eE="\u21D4",tE="\u21AD",nE="^",rE="\u210F",sE="\u0124",iE="\u0125",oE="\u2665",aE="\u2665",cE="\u2026",lE="\u22B9",uE="\u{1D525}",hE="\u210C",dE="\u210B",pE="\u2925",fE="\u2926",mE="\u21FF",gE="\u223B",bE="\u21A9",vE="\u21AA",yE="\u{1D559}",_E="\u210D",kE="\u2015",wE="\u2500",xE="\u{1D4BD}",EE="\u210B",AE="\u210F",SE="\u0126",CE="\u0127",TE="\u224E",$E="\u224F",RE="\u2043",DE="\u2010",LE="\xCD",ME="\xED",OE="\u2063",NE="\xCE",IE="\xEE",PE="\u0418",qE="\u0438",FE="\u0130",BE="\u0415",zE="\u0435",HE="\xA1",UE="\u21D4",jE="\u{1D526}",VE="\u2111",GE="\xCC",WE="\xEC",ZE="\u2148",KE="\u2A0C",YE="\u222D",XE="\u29DC",JE="\u2129",QE="\u0132",e1="\u0133",t1="\u012A",n1="\u012B",r1="\u2111",s1="\u2148",i1="\u2110",o1="\u2111",a1="\u0131",c1="\u2111",l1="\u22B7",u1="\u01B5",h1="\u21D2",d1="\u2105",p1="\u221E",f1="\u29DD",m1="\u0131",g1="\u22BA",b1="\u222B",v1="\u222C",y1="\u2124",_1="\u222B",k1="\u22BA",w1="\u22C2",x1="\u2A17",E1="\u2A3C",A1="\u2063",S1="\u2062",C1="\u0401",T1="\u0451",$1="\u012E",R1="\u012F",D1="\u{1D540}",L1="\u{1D55A}",M1="\u0399",O1="\u03B9",N1="\u2A3C",I1="\xBF",P1="\u{1D4BE}",q1="\u2110",F1="\u2208",B1="\u22F5",z1="\u22F9",H1="\u22F4",U1="\u22F3",j1="\u2208",V1="\u2062",G1="\u0128",W1="\u0129",Z1="\u0406",K1="\u0456",Y1="\xCF",X1="\xEF",J1="\u0134",Q1="\u0135",eA="\u0419",tA="\u0439",nA="\u{1D50D}",rA="\u{1D527}",sA="\u0237",iA="\u{1D541}",oA="\u{1D55B}",aA="\u{1D4A5}",cA="\u{1D4BF}",lA="\u0408",uA="\u0458",hA="\u0404",dA="\u0454",pA="\u039A",fA="\u03BA",mA="\u03F0",gA="\u0136",bA="\u0137",vA="\u041A",yA="\u043A",_A="\u{1D50E}",kA="\u{1D528}",wA="\u0138",xA="\u0425",EA="\u0445",AA="\u040C",SA="\u045C",CA="\u{1D542}",TA="\u{1D55C}",$A="\u{1D4A6}",RA="\u{1D4C0}",DA="\u21DA",LA="\u0139",MA="\u013A",OA="\u29B4",NA="\u2112",IA="\u039B",PA="\u03BB",qA="\u27E8",FA="\u27EA",BA="\u2991",zA="\u27E8",HA="\u2A85",UA="\u2112",jA="\xAB",VA="\u21E4",GA="\u291F",WA="\u2190",ZA="\u219E",KA="\u21D0",YA="\u291D",XA="\u21A9",JA="\u21AB",QA="\u2939",eS="\u2973",tS="\u21A2",nS="\u2919",rS="\u291B",sS="\u2AAB",iS="\u2AAD",oS="\u2AAD\uFE00",aS="\u290C",cS="\u290E",lS="\u2772",uS="{",hS="[",dS="\u298B",pS="\u298F",fS="\u298D",mS="\u013D",gS="\u013E",bS="\u013B",vS="\u013C",yS="\u2308",_S="{",kS="\u041B",wS="\u043B",xS="\u2936",ES="\u201C",AS="\u201E",SS="\u2967",CS="\u294B",TS="\u21B2",$S="\u2264",RS="\u2266",DS="\u27E8",LS="\u21E4",MS="\u2190",OS="\u2190",NS="\u21D0",IS="\u21C6",PS="\u21A2",qS="\u2308",FS="\u27E6",BS="\u2961",zS="\u2959",HS="\u21C3",US="\u230A",jS="\u21BD",VS="\u21BC",GS="\u21C7",WS="\u2194",ZS="\u2194",KS="\u21D4",YS="\u21C6",XS="\u21CB",JS="\u21AD",QS="\u294E",eC="\u21A4",tC="\u22A3",nC="\u295A",rC="\u22CB",sC="\u29CF",iC="\u22B2",oC="\u22B4",aC="\u2951",cC="\u2960",lC="\u2958",uC="\u21BF",hC="\u2952",dC="\u21BC",pC="\u2A8B",fC="\u22DA",mC="\u2264",gC="\u2266",bC="\u2A7D",vC="\u2AA8",yC="\u2A7D",_C="\u2A7F",kC="\u2A81",wC="\u2A83",xC="\u22DA\uFE00",EC="\u2A93",AC="\u2A85",SC="\u22D6",CC="\u22DA",TC="\u2A8B",$C="\u22DA",RC="\u2266",DC="\u2276",LC="\u2276",MC="\u2AA1",OC="\u2272",NC="\u2A7D",IC="\u2272",PC="\u297C",qC="\u230A",FC="\u{1D50F}",BC="\u{1D529}",zC="\u2276",HC="\u2A91",UC="\u2962",jC="\u21BD",VC="\u21BC",GC="\u296A",WC="\u2584",ZC="\u0409",KC="\u0459",YC="\u21C7",XC="\u226A",JC="\u22D8",QC="\u231E",eT="\u21DA",tT="\u296B",nT="\u25FA",rT="\u013F",sT="\u0140",iT="\u23B0",oT="\u23B0",aT="\u2A89",cT="\u2A89",lT="\u2A87",uT="\u2268",hT="\u2A87",dT="\u2268",pT="\u22E6",fT="\u27EC",mT="\u21FD",gT="\u27E6",bT="\u27F5",vT="\u27F5",yT="\u27F8",_T="\u27F7",kT="\u27F7",wT="\u27FA",xT="\u27FC",ET="\u27F6",AT="\u27F6",ST="\u27F9",CT="\u21AB",TT="\u21AC",$T="\u2985",RT="\u{1D543}",DT="\u{1D55D}",LT="\u2A2D",MT="\u2A34",OT="\u2217",NT="_",IT="\u2199",PT="\u2198",qT="\u25CA",FT="\u25CA",BT="\u29EB",zT="(",HT="\u2993",UT="\u21C6",jT="\u231F",VT="\u21CB",GT="\u296D",WT="\u200E",ZT="\u22BF",KT="\u2039",YT="\u{1D4C1}",XT="\u2112",JT="\u21B0",QT="\u21B0",e$="\u2272",t$="\u2A8D",n$="\u2A8F",r$="[",s$="\u2018",i$="\u201A",o$="\u0141",a$="\u0142",c$="\u2AA6",l$="\u2A79",u$="<",h$="<",d$="\u226A",p$="\u22D6",f$="\u22CB",m$="\u22C9",g$="\u2976",b$="\u2A7B",v$="\u25C3",y$="\u22B4",_$="\u25C2",k$="\u2996",w$="\u294A",x$="\u2966",E$="\u2268\uFE00",A$="\u2268\uFE00",S$="\xAF",C$="\u2642",T$="\u2720",$$="\u2720",R$="\u21A6",D$="\u21A6",L$="\u21A7",M$="\u21A4",O$="\u21A5",N$="\u25AE",I$="\u2A29",P$="\u041C",q$="\u043C",F$="\u2014",B$="\u223A",z$="\u2221",H$="\u205F",U$="\u2133",j$="\u{1D510}",V$="\u{1D52A}",G$="\u2127",W$="\xB5",Z$="*",K$="\u2AF0",Y$="\u2223",X$="\xB7",J$="\u229F",Q$="\u2212",eR="\u2238",tR="\u2A2A",nR="\u2213",rR="\u2ADB",sR="\u2026",iR="\u2213",oR="\u22A7",aR="\u{1D544}",cR="\u{1D55E}",lR="\u2213",uR="\u{1D4C2}",hR="\u2133",dR="\u223E",pR="\u039C",fR="\u03BC",mR="\u22B8",gR="\u22B8",bR="\u2207",vR="\u0143",yR="\u0144",_R="\u2220\u20D2",kR="\u2249",wR="\u2A70\u0338",xR="\u224B\u0338",ER="\u0149",AR="\u2249",SR="\u266E",CR="\u2115",TR="\u266E",$R="\xA0",RR="\u224E\u0338",DR="\u224F\u0338",LR="\u2A43",MR="\u0147",OR="\u0148",NR="\u0145",IR="\u0146",PR="\u2247",qR="\u2A6D\u0338",FR="\u2A42",BR="\u041D",zR="\u043D",HR="\u2013",UR="\u2924",jR="\u2197",VR="\u21D7",GR="\u2197",WR="\u2260",ZR="\u2250\u0338",KR="\u200B",YR="\u200B",XR="\u200B",JR="\u200B",QR="\u2262",eD="\u2928",tD="\u2242\u0338",nD="\u226B",rD="\u226A",sD=`
`,iD="\u2204",oD="\u2204",aD="\u{1D511}",cD="\u{1D52B}",lD="\u2267\u0338",uD="\u2271",hD="\u2271",dD="\u2267\u0338",pD="\u2A7E\u0338",fD="\u2A7E\u0338",mD="\u22D9\u0338",gD="\u2275",bD="\u226B\u20D2",vD="\u226F",yD="\u226F",_D="\u226B\u0338",kD="\u21AE",wD="\u21CE",xD="\u2AF2",ED="\u220B",AD="\u22FC",SD="\u22FA",CD="\u220B",TD="\u040A",$D="\u045A",RD="\u219A",DD="\u21CD",LD="\u2025",MD="\u2266\u0338",OD="\u2270",ND="\u219A",ID="\u21CD",PD="\u21AE",qD="\u21CE",FD="\u2270",BD="\u2266\u0338",zD="\u2A7D\u0338",HD="\u2A7D\u0338",UD="\u226E",jD="\u22D8\u0338",VD="\u2274",GD="\u226A\u20D2",WD="\u226E",ZD="\u22EA",KD="\u22EC",YD="\u226A\u0338",XD="\u2224",JD="\u2060",QD="\xA0",eL="\u{1D55F}",tL="\u2115",nL="\u2AEC",rL="\xAC",sL="\u2262",iL="\u226D",oL="\u2226",aL="\u2209",cL="\u2260",lL="\u2242\u0338",uL="\u2204",hL="\u226F",dL="\u2271",pL="\u2267\u0338",fL="\u226B\u0338",mL="\u2279",gL="\u2A7E\u0338",bL="\u2275",vL="\u224E\u0338",yL="\u224F\u0338",_L="\u2209",kL="\u22F5\u0338",wL="\u22F9\u0338",xL="\u2209",EL="\u22F7",AL="\u22F6",SL="\u29CF\u0338",CL="\u22EA",TL="\u22EC",$L="\u226E",RL="\u2270",DL="\u2278",LL="\u226A\u0338",ML="\u2A7D\u0338",OL="\u2274",NL="\u2AA2\u0338",IL="\u2AA1\u0338",PL="\u220C",qL="\u220C",FL="\u22FE",BL="\u22FD",zL="\u2280",HL="\u2AAF\u0338",UL="\u22E0",jL="\u220C",VL="\u29D0\u0338",GL="\u22EB",WL="\u22ED",ZL="\u228F\u0338",KL="\u22E2",YL="\u2290\u0338",XL="\u22E3",JL="\u2282\u20D2",QL="\u2288",eM="\u2281",tM="\u2AB0\u0338",nM="\u22E1",rM="\u227F\u0338",sM="\u2283\u20D2",iM="\u2289",oM="\u2241",aM="\u2244",cM="\u2247",lM="\u2249",uM="\u2224",hM="\u2226",dM="\u2226",pM="\u2AFD\u20E5",fM="\u2202\u0338",mM="\u2A14",gM="\u2280",bM="\u22E0",vM="\u2280",yM="\u2AAF\u0338",_M="\u2AAF\u0338",kM="\u2933\u0338",wM="\u219B",xM="\u21CF",EM="\u219D\u0338",AM="\u219B",SM="\u21CF",CM="\u22EB",TM="\u22ED",$M="\u2281",RM="\u22E1",DM="\u2AB0\u0338",LM="\u{1D4A9}",MM="\u{1D4C3}",OM="\u2224",NM="\u2226",IM="\u2241",PM="\u2244",qM="\u2244",FM="\u2224",BM="\u2226",zM="\u22E2",HM="\u22E3",UM="\u2284",jM="\u2AC5\u0338",VM="\u2288",GM="\u2282\u20D2",WM="\u2288",ZM="\u2AC5\u0338",KM="\u2281",YM="\u2AB0\u0338",XM="\u2285",JM="\u2AC6\u0338",QM="\u2289",eO="\u2283\u20D2",tO="\u2289",nO="\u2AC6\u0338",rO="\u2279",sO="\xD1",iO="\xF1",oO="\u2278",aO="\u22EA",cO="\u22EC",lO="\u22EB",uO="\u22ED",hO="\u039D",dO="\u03BD",pO="#",fO="\u2116",mO="\u2007",gO="\u224D\u20D2",bO="\u22AC",vO="\u22AD",yO="\u22AE",_O="\u22AF",kO="\u2265\u20D2",wO=">\u20D2",xO="\u2904",EO="\u29DE",AO="\u2902",SO="\u2264\u20D2",CO="<\u20D2",TO="\u22B4\u20D2",$O="\u2903",RO="\u22B5\u20D2",DO="\u223C\u20D2",LO="\u2923",MO="\u2196",OO="\u21D6",NO="\u2196",IO="\u2927",PO="\xD3",qO="\xF3",FO="\u229B",BO="\xD4",zO="\xF4",HO="\u229A",UO="\u041E",jO="\u043E",VO="\u229D",GO="\u0150",WO="\u0151",ZO="\u2A38",KO="\u2299",YO="\u29BC",XO="\u0152",JO="\u0153",QO="\u29BF",e2="\u{1D512}",t2="\u{1D52C}",n2="\u02DB",r2="\xD2",s2="\xF2",i2="\u29C1",o2="\u29B5",a2="\u03A9",c2="\u222E",l2="\u21BA",u2="\u29BE",h2="\u29BB",d2="\u203E",p2="\u29C0",f2="\u014C",m2="\u014D",g2="\u03A9",b2="\u03C9",v2="\u039F",y2="\u03BF",_2="\u29B6",k2="\u2296",w2="\u{1D546}",x2="\u{1D560}",E2="\u29B7",A2="\u201C",S2="\u2018",C2="\u29B9",T2="\u2295",$2="\u21BB",R2="\u2A54",D2="\u2228",L2="\u2A5D",M2="\u2134",O2="\u2134",N2="\xAA",I2="\xBA",P2="\u22B6",q2="\u2A56",F2="\u2A57",B2="\u2A5B",z2="\u24C8",H2="\u{1D4AA}",U2="\u2134",j2="\xD8",V2="\xF8",G2="\u2298",W2="\xD5",Z2="\xF5",K2="\u2A36",Y2="\u2A37",X2="\u2297",J2="\xD6",Q2="\xF6",eN="\u233D",tN="\u203E",nN="\u23DE",rN="\u23B4",sN="\u23DC",iN="\xB6",oN="\u2225",aN="\u2225",cN="\u2AF3",lN="\u2AFD",uN="\u2202",hN="\u2202",dN="\u041F",pN="\u043F",fN="%",mN=".",gN="\u2030",bN="\u22A5",vN="\u2031",yN="\u{1D513}",_N="\u{1D52D}",kN="\u03A6",wN="\u03C6",xN="\u03D5",EN="\u2133",AN="\u260E",SN="\u03A0",CN="\u03C0",TN="\u22D4",$N="\u03D6",RN="\u210F",DN="\u210E",LN="\u210F",MN="\u2A23",ON="\u229E",NN="\u2A22",IN="+",PN="\u2214",qN="\u2A25",FN="\u2A72",BN="\xB1",zN="\xB1",HN="\u2A26",UN="\u2A27",jN="\xB1",VN="\u210C",GN="\u2A15",WN="\u{1D561}",ZN="\u2119",KN="\xA3",YN="\u2AB7",XN="\u2ABB",JN="\u227A",QN="\u227C",eI="\u2AB7",tI="\u227A",nI="\u227C",rI="\u227A",sI="\u2AAF",iI="\u227C",oI="\u227E",aI="\u2AAF",cI="\u2AB9",lI="\u2AB5",uI="\u22E8",hI="\u2AAF",dI="\u2AB3",pI="\u227E",fI="\u2032",mI="\u2033",gI="\u2119",bI="\u2AB9",vI="\u2AB5",yI="\u22E8",_I="\u220F",kI="\u220F",wI="\u232E",xI="\u2312",EI="\u2313",AI="\u221D",SI="\u221D",CI="\u2237",TI="\u221D",$I="\u227E",RI="\u22B0",DI="\u{1D4AB}",LI="\u{1D4C5}",MI="\u03A8",OI="\u03C8",NI="\u2008",II="\u{1D514}",PI="\u{1D52E}",qI="\u2A0C",FI="\u{1D562}",BI="\u211A",zI="\u2057",HI="\u{1D4AC}",UI="\u{1D4C6}",jI="\u210D",VI="\u2A16",GI="?",WI="\u225F",ZI='"',KI='"',YI="\u21DB",XI="\u223D\u0331",JI="\u0154",QI="\u0155",eP="\u221A",tP="\u29B3",nP="\u27E9",rP="\u27EB",sP="\u2992",iP="\u29A5",oP="\u27E9",aP="\xBB",cP="\u2975",lP="\u21E5",uP="\u2920",hP="\u2933",dP="\u2192",pP="\u21A0",fP="\u21D2",mP="\u291E",gP="\u21AA",bP="\u21AC",vP="\u2945",yP="\u2974",_P="\u2916",kP="\u21A3",wP="\u219D",xP="\u291A",EP="\u291C",AP="\u2236",SP="\u211A",CP="\u290D",TP="\u290F",$P="\u2910",RP="\u2773",DP="}",LP="]",MP="\u298C",OP="\u298E",NP="\u2990",IP="\u0158",PP="\u0159",qP="\u0156",FP="\u0157",BP="\u2309",zP="}",HP="\u0420",UP="\u0440",jP="\u2937",VP="\u2969",GP="\u201D",WP="\u201D",ZP="\u21B3",KP="\u211C",YP="\u211B",XP="\u211C",JP="\u211D",QP="\u211C",eq="\u25AD",tq="\xAE",nq="\xAE",rq="\u220B",sq="\u21CB",iq="\u296F",oq="\u297D",aq="\u230B",cq="\u{1D52F}",lq="\u211C",uq="\u2964",hq="\u21C1",dq="\u21C0",pq="\u296C",fq="\u03A1",mq="\u03C1",gq="\u03F1",bq="\u27E9",vq="\u21E5",yq="\u2192",_q="\u2192",kq="\u21D2",wq="\u21C4",xq="\u21A3",Eq="\u2309",Aq="\u27E7",Sq="\u295D",Cq="\u2955",Tq="\u21C2",$q="\u230B",Rq="\u21C1",Dq="\u21C0",Lq="\u21C4",Mq="\u21CC",Oq="\u21C9",Nq="\u219D",Iq="\u21A6",Pq="\u22A2",qq="\u295B",Fq="\u22CC",Bq="\u29D0",zq="\u22B3",Hq="\u22B5",Uq="\u294F",jq="\u295C",Vq="\u2954",Gq="\u21BE",Wq="\u2953",Zq="\u21C0",Kq="\u02DA",Yq="\u2253",Xq="\u21C4",Jq="\u21CC",Qq="\u200F",eF="\u23B1",tF="\u23B1",nF="\u2AEE",rF="\u27ED",sF="\u21FE",iF="\u27E7",oF="\u2986",aF="\u{1D563}",cF="\u211D",lF="\u2A2E",uF="\u2A35",hF="\u2970",dF=")",pF="\u2994",fF="\u2A12",mF="\u21C9",gF="\u21DB",bF="\u203A",vF="\u{1D4C7}",yF="\u211B",_F="\u21B1",kF="\u21B1",wF="]",xF="\u2019",EF="\u2019",AF="\u22CC",SF="\u22CA",CF="\u25B9",TF="\u22B5",$F="\u25B8",RF="\u29CE",DF="\u29F4",LF="\u2968",MF="\u211E",OF="\u015A",NF="\u015B",IF="\u201A",PF="\u2AB8",qF="\u0160",FF="\u0161",BF="\u2ABC",zF="\u227B",HF="\u227D",UF="\u2AB0",jF="\u2AB4",VF="\u015E",GF="\u015F",WF="\u015C",ZF="\u015D",KF="\u2ABA",YF="\u2AB6",XF="\u22E9",JF="\u2A13",QF="\u227F",eB="\u0421",tB="\u0441",nB="\u22A1",rB="\u22C5",sB="\u2A66",iB="\u2925",oB="\u2198",aB="\u21D8",cB="\u2198",lB="\xA7",uB=";",hB="\u2929",dB="\u2216",pB="\u2216",fB="\u2736",mB="\u{1D516}",gB="\u{1D530}",bB="\u2322",vB="\u266F",yB="\u0429",_B="\u0449",kB="\u0428",wB="\u0448",xB="\u2193",EB="\u2190",AB="\u2223",SB="\u2225",CB="\u2192",TB="\u2191",$B="\xAD",RB="\u03A3",DB="\u03C3",LB="\u03C2",MB="\u03C2",OB="\u223C",NB="\u2A6A",IB="\u2243",PB="\u2243",qB="\u2A9E",FB="\u2AA0",BB="\u2A9D",zB="\u2A9F",HB="\u2246",UB="\u2A24",jB="\u2972",VB="\u2190",GB="\u2218",WB="\u2216",ZB="\u2A33",KB="\u29E4",YB="\u2223",XB="\u2323",JB="\u2AAA",QB="\u2AAC",ez="\u2AAC\uFE00",tz="\u042C",nz="\u044C",rz="\u233F",sz="\u29C4",iz="/",oz="\u{1D54A}",az="\u{1D564}",cz="\u2660",lz="\u2660",uz="\u2225",hz="\u2293",dz="\u2293\uFE00",pz="\u2294",fz="\u2294\uFE00",mz="\u221A",gz="\u228F",bz="\u2291",vz="\u228F",yz="\u2291",_z="\u2290",kz="\u2292",wz="\u2290",xz="\u2292",Ez="\u25A1",Az="\u25A1",Sz="\u2293",Cz="\u228F",Tz="\u2291",$z="\u2290",Rz="\u2292",Dz="\u2294",Lz="\u25AA",Mz="\u25A1",Oz="\u25AA",Nz="\u2192",Iz="\u{1D4AE}",Pz="\u{1D4C8}",qz="\u2216",Fz="\u2323",Bz="\u22C6",zz="\u22C6",Hz="\u2606",Uz="\u2605",jz="\u03F5",Vz="\u03D5",Gz="\xAF",Wz="\u2282",Zz="\u22D0",Kz="\u2ABD",Yz="\u2AC5",Xz="\u2286",Jz="\u2AC3",Qz="\u2AC1",eH="\u2ACB",tH="\u228A",nH="\u2ABF",rH="\u2979",sH="\u2282",iH="\u22D0",oH="\u2286",aH="\u2AC5",cH="\u2286",lH="\u228A",uH="\u2ACB",hH="\u2AC7",dH="\u2AD5",pH="\u2AD3",fH="\u2AB8",mH="\u227B",gH="\u227D",bH="\u227B",vH="\u2AB0",yH="\u227D",_H="\u227F",kH="\u2AB0",wH="\u2ABA",xH="\u2AB6",EH="\u22E9",AH="\u227F",SH="\u220B",CH="\u2211",TH="\u2211",$H="\u266A",RH="\xB9",DH="\xB2",LH="\xB3",MH="\u2283",OH="\u22D1",NH="\u2ABE",IH="\u2AD8",PH="\u2AC6",qH="\u2287",FH="\u2AC4",BH="\u2283",zH="\u2287",HH="\u27C9",UH="\u2AD7",jH="\u297B",VH="\u2AC2",GH="\u2ACC",WH="\u228B",ZH="\u2AC0",KH="\u2283",YH="\u22D1",XH="\u2287",JH="\u2AC6",QH="\u228B",e3="\u2ACC",t3="\u2AC8",n3="\u2AD4",r3="\u2AD6",s3="\u2926",i3="\u2199",o3="\u21D9",a3="\u2199",c3="\u292A",l3="\xDF",u3="	",h3="\u2316",d3="\u03A4",p3="\u03C4",f3="\u23B4",m3="\u0164",g3="\u0165",b3="\u0162",v3="\u0163",y3="\u0422",_3="\u0442",k3="\u20DB",w3="\u2315",x3="\u{1D517}",E3="\u{1D531}",A3="\u2234",S3="\u2234",C3="\u2234",T3="\u0398",$3="\u03B8",R3="\u03D1",D3="\u03D1",L3="\u2248",M3="\u223C",O3="\u205F\u200A",N3="\u2009",I3="\u2009",P3="\u2248",q3="\u223C",F3="\xDE",B3="\xFE",z3="\u02DC",H3="\u223C",U3="\u2243",j3="\u2245",V3="\u2248",G3="\u2A31",W3="\u22A0",Z3="\xD7",K3="\u2A30",Y3="\u222D",X3="\u2928",J3="\u2336",Q3="\u2AF1",eU="\u22A4",tU="\u{1D54B}",nU="\u{1D565}",rU="\u2ADA",sU="\u2929",iU="\u2034",oU="\u2122",aU="\u2122",cU="\u25B5",lU="\u25BF",uU="\u25C3",hU="\u22B4",dU="\u225C",pU="\u25B9",fU="\u22B5",mU="\u25EC",gU="\u225C",bU="\u2A3A",vU="\u20DB",yU="\u2A39",_U="\u29CD",kU="\u2A3B",wU="\u23E2",xU="\u{1D4AF}",EU="\u{1D4C9}",AU="\u0426",SU="\u0446",CU="\u040B",TU="\u045B",$U="\u0166",RU="\u0167",DU="\u226C",LU="\u219E",MU="\u21A0",OU="\xDA",NU="\xFA",IU="\u2191",PU="\u219F",qU="\u21D1",FU="\u2949",BU="\u040E",zU="\u045E",HU="\u016C",UU="\u016D",jU="\xDB",VU="\xFB",GU="\u0423",WU="\u0443",ZU="\u21C5",KU="\u0170",YU="\u0171",XU="\u296E",JU="\u297E",QU="\u{1D518}",e5="\u{1D532}",t5="\xD9",n5="\xF9",r5="\u2963",s5="\u21BF",i5="\u21BE",o5="\u2580",a5="\u231C",c5="\u231C",l5="\u230F",u5="\u25F8",h5="\u016A",d5="\u016B",p5="\xA8",f5="_",m5="\u23DF",g5="\u23B5",b5="\u23DD",v5="\u22C3",y5="\u228E",_5="\u0172",k5="\u0173",w5="\u{1D54C}",x5="\u{1D566}",E5="\u2912",A5="\u2191",S5="\u2191",C5="\u21D1",T5="\u21C5",$5="\u2195",R5="\u2195",D5="\u21D5",L5="\u296E",M5="\u21BF",O5="\u21BE",N5="\u228E",I5="\u2196",P5="\u2197",q5="\u03C5",F5="\u03D2",B5="\u03D2",z5="\u03A5",H5="\u03C5",U5="\u21A5",j5="\u22A5",V5="\u21C8",G5="\u231D",W5="\u231D",Z5="\u230E",K5="\u016E",Y5="\u016F",X5="\u25F9",J5="\u{1D4B0}",Q5="\u{1D4CA}",ej="\u22F0",tj="\u0168",nj="\u0169",rj="\u25B5",sj="\u25B4",ij="\u21C8",oj="\xDC",aj="\xFC",cj="\u29A7",lj="\u299C",uj="\u03F5",hj="\u03F0",dj="\u2205",pj="\u03D5",fj="\u03D6",mj="\u221D",gj="\u2195",bj="\u21D5",vj="\u03F1",yj="\u03C2",_j="\u228A\uFE00",kj="\u2ACB\uFE00",wj="\u228B\uFE00",xj="\u2ACC\uFE00",Ej="\u03D1",Aj="\u22B2",Sj="\u22B3",Cj="\u2AE8",Tj="\u2AEB",$j="\u2AE9",Rj="\u0412",Dj="\u0432",Lj="\u22A2",Mj="\u22A8",Oj="\u22A9",Nj="\u22AB",Ij="\u2AE6",Pj="\u22BB",qj="\u2228",Fj="\u22C1",Bj="\u225A",zj="\u22EE",Hj="|",Uj="\u2016",jj="|",Vj="\u2016",Gj="\u2223",Wj="|",Zj="\u2758",Kj="\u2240",Yj="\u200A",Xj="\u{1D519}",Jj="\u{1D533}",Qj="\u22B2",e9="\u2282\u20D2",t9="\u2283\u20D2",n9="\u{1D54D}",r9="\u{1D567}",s9="\u221D",i9="\u22B3",o9="\u{1D4B1}",a9="\u{1D4CB}",c9="\u2ACB\uFE00",l9="\u228A\uFE00",u9="\u2ACC\uFE00",h9="\u228B\uFE00",d9="\u22AA",p9="\u299A",f9="\u0174",m9="\u0175",g9="\u2A5F",b9="\u2227",v9="\u22C0",y9="\u2259",_9="\u2118",k9="\u{1D51A}",w9="\u{1D534}",x9="\u{1D54E}",E9="\u{1D568}",A9="\u2118",S9="\u2240",C9="\u2240",T9="\u{1D4B2}",$9="\u{1D4CC}",R9="\u22C2",D9="\u25EF",L9="\u22C3",M9="\u25BD",O9="\u{1D51B}",N9="\u{1D535}",I9="\u27F7",P9="\u27FA",q9="\u039E",F9="\u03BE",B9="\u27F5",z9="\u27F8",H9="\u27FC",U9="\u22FB",j9="\u2A00",V9="\u{1D54F}",G9="\u{1D569}",W9="\u2A01",Z9="\u2A02",K9="\u27F6",Y9="\u27F9",X9="\u{1D4B3}",J9="\u{1D4CD}",Q9="\u2A06",e4="\u2A04",t4="\u25B3",n4="\u22C1",r4="\u22C0",s4="\xDD",i4="\xFD",o4="\u042F",a4="\u044F",c4="\u0176",l4="\u0177",u4="\u042B",h4="\u044B",d4="\xA5",p4="\u{1D51C}",f4="\u{1D536}",m4="\u0407",g4="\u0457",b4="\u{1D550}",v4="\u{1D56A}",y4="\u{1D4B4}",_4="\u{1D4CE}",k4="\u042E",w4="\u044E",x4="\xFF",E4="\u0178",A4="\u0179",S4="\u017A",C4="\u017D",T4="\u017E",$4="\u0417",R4="\u0437",D4="\u017B",L4="\u017C",M4="\u2128",O4="\u200B",N4="\u0396",I4="\u03B6",P4="\u{1D537}",q4="\u2128",F4="\u0416",B4="\u0436",z4="\u21DD",H4="\u{1D56B}",U4="\u2124",j4="\u{1D4B5}",V4="\u{1D4CF}",G4="\u200D",W4="\u200C";var Z4={Aacute:Rd,aacute:Dd,Abreve:Ld,abreve:Md,ac:Od,acd:Nd,acE:Id,Acirc:Pd,acirc:qd,acute:Fd,Acy:Bd,acy:zd,AElig:Hd,aelig:Ud,af:jd,Afr:Vd,afr:Gd,Agrave:Wd,agrave:Zd,alefsym:Kd,aleph:Yd,Alpha:Xd,alpha:Jd,Amacr:Qd,amacr:ep,amalg:tp,amp:np,AMP:rp,andand:sp,And:ip,and:op,andd:ap,andslope:cp,andv:lp,ang:up,ange:hp,angle:dp,angmsdaa:pp,angmsdab:fp,angmsdac:mp,angmsdad:gp,angmsdae:bp,angmsdaf:vp,angmsdag:yp,angmsdah:_p,angmsd:kp,angrt:wp,angrtvb:xp,angrtvbd:Ep,angsph:Ap,angst:Sp,angzarr:Cp,Aogon:Tp,aogon:$p,Aopf:Rp,aopf:Dp,apacir:Lp,ap:Mp,apE:Op,ape:Np,apid:Ip,apos:Pp,ApplyFunction:qp,approx:Fp,approxeq:Bp,Aring:zp,aring:Hp,Ascr:Up,ascr:jp,Assign:Vp,ast:Gp,asymp:Wp,asympeq:Zp,Atilde:Kp,atilde:Yp,Auml:Xp,auml:Jp,awconint:Qp,awint:ef,backcong:tf,backepsilon:nf,backprime:rf,backsim:sf,backsimeq:of,Backslash:af,Barv:cf,barvee:lf,barwed:uf,Barwed:hf,barwedge:df,bbrk:pf,bbrktbrk:ff,bcong:mf,Bcy:gf,bcy:bf,bdquo:vf,becaus:yf,because:_f,Because:kf,bemptyv:wf,bepsi:xf,bernou:Ef,Bernoullis:Af,Beta:Sf,beta:Cf,beth:Tf,between:$f,Bfr:Rf,bfr:Df,bigcap:Lf,bigcirc:Mf,bigcup:Of,bigodot:Nf,bigoplus:If,bigotimes:Pf,bigsqcup:qf,bigstar:Ff,bigtriangledown:Bf,bigtriangleup:zf,biguplus:Hf,bigvee:Uf,bigwedge:jf,bkarow:Vf,blacklozenge:Gf,blacksquare:Wf,blacktriangle:Zf,blacktriangledown:Kf,blacktriangleleft:Yf,blacktriangleright:Xf,blank:Jf,blk12:Qf,blk14:em,blk34:tm,block:nm,bne:rm,bnequiv:sm,bNot:im,bnot:om,Bopf:am,bopf:cm,bot:lm,bottom:um,bowtie:hm,boxbox:dm,boxdl:pm,boxdL:fm,boxDl:mm,boxDL:gm,boxdr:bm,boxdR:vm,boxDr:ym,boxDR:_m,boxh:km,boxH:wm,boxhd:xm,boxHd:Em,boxhD:Am,boxHD:Sm,boxhu:Cm,boxHu:Tm,boxhU:$m,boxHU:Rm,boxminus:Dm,boxplus:Lm,boxtimes:Mm,boxul:Om,boxuL:Nm,boxUl:Im,boxUL:Pm,boxur:qm,boxuR:Fm,boxUr:Bm,boxUR:zm,boxv:Hm,boxV:Um,boxvh:jm,boxvH:Vm,boxVh:Gm,boxVH:Wm,boxvl:Zm,boxvL:Km,boxVl:Ym,boxVL:Xm,boxvr:Jm,boxvR:Qm,boxVr:eg,boxVR:tg,bprime:ng,breve:rg,Breve:sg,brvbar:ig,bscr:og,Bscr:ag,bsemi:cg,bsim:lg,bsime:ug,bsolb:hg,bsol:dg,bsolhsub:pg,bull:fg,bullet:mg,bump:gg,bumpE:bg,bumpe:vg,Bumpeq:yg,bumpeq:_g,Cacute:kg,cacute:wg,capand:xg,capbrcup:Eg,capcap:Ag,cap:Sg,Cap:Cg,capcup:Tg,capdot:$g,CapitalDifferentialD:Rg,caps:Dg,caret:Lg,caron:Mg,Cayleys:Og,ccaps:Ng,Ccaron:Ig,ccaron:Pg,Ccedil:qg,ccedil:Fg,Ccirc:Bg,ccirc:zg,Cconint:Hg,ccups:Ug,ccupssm:jg,Cdot:Vg,cdot:Gg,cedil:Wg,Cedilla:Zg,cemptyv:Kg,cent:Yg,centerdot:Xg,CenterDot:Jg,cfr:Qg,Cfr:eb,CHcy:tb,chcy:nb,check:rb,checkmark:sb,Chi:ib,chi:ob,circ:ab,circeq:cb,circlearrowleft:lb,circlearrowright:ub,circledast:hb,circledcirc:db,circleddash:pb,CircleDot:fb,circledR:mb,circledS:gb,CircleMinus:bb,CirclePlus:vb,CircleTimes:yb,cir:_b,cirE:kb,cire:wb,cirfnint:xb,cirmid:Eb,cirscir:Ab,ClockwiseContourIntegral:Sb,CloseCurlyDoubleQuote:Cb,CloseCurlyQuote:Tb,clubs:$b,clubsuit:Rb,colon:Db,Colon:Lb,Colone:Mb,colone:Ob,coloneq:Nb,comma:Ib,commat:Pb,comp:qb,compfn:Fb,complement:Bb,complexes:zb,cong:Hb,congdot:Ub,Congruent:jb,conint:Vb,Conint:Gb,ContourIntegral:Wb,copf:Zb,Copf:Kb,coprod:Yb,Coproduct:Xb,copy:Jb,COPY:Qb,copysr:ev,CounterClockwiseContourIntegral:tv,crarr:nv,cross:rv,Cross:sv,Cscr:iv,cscr:ov,csub:av,csube:cv,csup:lv,csupe:uv,ctdot:hv,cudarrl:dv,cudarrr:pv,cuepr:fv,cuesc:mv,cularr:gv,cularrp:bv,cupbrcap:vv,cupcap:yv,CupCap:_v,cup:kv,Cup:wv,cupcup:xv,cupdot:Ev,cupor:Av,cups:Sv,curarr:Cv,curarrm:Tv,curlyeqprec:$v,curlyeqsucc:Rv,curlyvee:Dv,curlywedge:Lv,curren:Mv,curvearrowleft:Ov,curvearrowright:Nv,cuvee:Iv,cuwed:Pv,cwconint:qv,cwint:Fv,cylcty:Bv,dagger:zv,Dagger:Hv,daleth:Uv,darr:jv,Darr:Vv,dArr:Gv,dash:Wv,Dashv:Zv,dashv:Kv,dbkarow:Yv,dblac:Xv,Dcaron:Jv,dcaron:Qv,Dcy:e0,dcy:t0,ddagger:n0,ddarr:r0,DD:s0,dd:i0,DDotrahd:o0,ddotseq:a0,deg:c0,Del:l0,Delta:u0,delta:h0,demptyv:d0,dfisht:p0,Dfr:f0,dfr:m0,dHar:g0,dharl:b0,dharr:v0,DiacriticalAcute:y0,DiacriticalDot:_0,DiacriticalDoubleAcute:k0,DiacriticalGrave:w0,DiacriticalTilde:x0,diam:E0,diamond:A0,Diamond:S0,diamondsuit:C0,diams:T0,die:$0,DifferentialD:R0,digamma:D0,disin:L0,div:M0,divide:O0,divideontimes:N0,divonx:I0,DJcy:P0,djcy:q0,dlcorn:F0,dlcrop:B0,dollar:z0,Dopf:H0,dopf:U0,Dot:j0,dot:V0,DotDot:G0,doteq:W0,doteqdot:Z0,DotEqual:K0,dotminus:Y0,dotplus:X0,dotsquare:J0,doublebarwedge:Q0,DoubleContourIntegral:ey,DoubleDot:ty,DoubleDownArrow:ny,DoubleLeftArrow:ry,DoubleLeftRightArrow:sy,DoubleLeftTee:iy,DoubleLongLeftArrow:oy,DoubleLongLeftRightArrow:ay,DoubleLongRightArrow:cy,DoubleRightArrow:ly,DoubleRightTee:uy,DoubleUpArrow:hy,DoubleUpDownArrow:dy,DoubleVerticalBar:py,DownArrowBar:fy,downarrow:my,DownArrow:gy,Downarrow:by,DownArrowUpArrow:vy,DownBreve:yy,downdownarrows:_y,downharpoonleft:ky,downharpoonright:wy,DownLeftRightVector:xy,DownLeftTeeVector:Ey,DownLeftVectorBar:Ay,DownLeftVector:Sy,DownRightTeeVector:Cy,DownRightVectorBar:Ty,DownRightVector:$y,DownTeeArrow:Ry,DownTee:Dy,drbkarow:Ly,drcorn:My,drcrop:Oy,Dscr:Ny,dscr:Iy,DScy:Py,dscy:qy,dsol:Fy,Dstrok:By,dstrok:zy,dtdot:Hy,dtri:Uy,dtrif:jy,duarr:Vy,duhar:Gy,dwangle:Wy,DZcy:Zy,dzcy:Ky,dzigrarr:Yy,Eacute:Xy,eacute:Jy,easter:Qy,Ecaron:e_,ecaron:t_,Ecirc:n_,ecirc:r_,ecir:s_,ecolon:i_,Ecy:o_,ecy:a_,eDDot:c_,Edot:l_,edot:u_,eDot:h_,ee:d_,efDot:p_,Efr:f_,efr:m_,eg:g_,Egrave:b_,egrave:v_,egs:y_,egsdot:__,el:k_,Element:w_,elinters:x_,ell:E_,els:A_,elsdot:S_,Emacr:C_,emacr:T_,empty:$_,emptyset:R_,EmptySmallSquare:D_,emptyv:L_,EmptyVerySmallSquare:M_,emsp13:O_,emsp14:N_,emsp:I_,ENG:P_,eng:q_,ensp:F_,Eogon:B_,eogon:z_,Eopf:H_,eopf:U_,epar:j_,eparsl:V_,eplus:G_,epsi:W_,Epsilon:Z_,epsilon:K_,epsiv:Y_,eqcirc:X_,eqcolon:J_,eqsim:Q_,eqslantgtr:ek,eqslantless:tk,Equal:nk,equals:rk,EqualTilde:sk,equest:ik,Equilibrium:ok,equiv:ak,equivDD:ck,eqvparsl:lk,erarr:uk,erDot:hk,escr:dk,Escr:pk,esdot:fk,Esim:mk,esim:gk,Eta:bk,eta:vk,ETH:yk,eth:_k,Euml:kk,euml:wk,euro:xk,excl:Ek,exist:Ak,Exists:Sk,expectation:Ck,exponentiale:Tk,ExponentialE:$k,fallingdotseq:Rk,Fcy:Dk,fcy:Lk,female:Mk,ffilig:Ok,fflig:Nk,ffllig:Ik,Ffr:Pk,ffr:qk,filig:Fk,FilledSmallSquare:Bk,FilledVerySmallSquare:zk,fjlig:Hk,flat:Uk,fllig:jk,fltns:Vk,fnof:Gk,Fopf:Wk,fopf:Zk,forall:Kk,ForAll:Yk,fork:Xk,forkv:Jk,Fouriertrf:Qk,fpartint:ew,frac12:tw,frac13:nw,frac14:rw,frac15:sw,frac16:iw,frac18:ow,frac23:aw,frac25:cw,frac34:lw,frac35:uw,frac38:hw,frac45:dw,frac56:pw,frac58:fw,frac78:mw,frasl:gw,frown:bw,fscr:vw,Fscr:yw,gacute:_w,Gamma:kw,gamma:ww,Gammad:xw,gammad:Ew,gap:Aw,Gbreve:Sw,gbreve:Cw,Gcedil:Tw,Gcirc:$w,gcirc:Rw,Gcy:Dw,gcy:Lw,Gdot:Mw,gdot:Ow,ge:Nw,gE:Iw,gEl:Pw,gel:qw,geq:Fw,geqq:Bw,geqslant:zw,gescc:Hw,ges:Uw,gesdot:jw,gesdoto:Vw,gesdotol:Gw,gesl:Ww,gesles:Zw,Gfr:Kw,gfr:Yw,gg:Xw,Gg:Jw,ggg:Qw,gimel:ex,GJcy:tx,gjcy:nx,gla:rx,gl:sx,glE:ix,glj:ox,gnap:ax,gnapprox:cx,gne:lx,gnE:ux,gneq:hx,gneqq:dx,gnsim:px,Gopf:fx,gopf:mx,grave:gx,GreaterEqual:bx,GreaterEqualLess:vx,GreaterFullEqual:yx,GreaterGreater:_x,GreaterLess:kx,GreaterSlantEqual:wx,GreaterTilde:xx,Gscr:Ex,gscr:Ax,gsim:Sx,gsime:Cx,gsiml:Tx,gtcc:$x,gtcir:Rx,gt:Dx,GT:Lx,Gt:Mx,gtdot:Ox,gtlPar:Nx,gtquest:Ix,gtrapprox:Px,gtrarr:qx,gtrdot:Fx,gtreqless:Bx,gtreqqless:zx,gtrless:Hx,gtrsim:Ux,gvertneqq:jx,gvnE:Vx,Hacek:Gx,hairsp:Wx,half:Zx,hamilt:Kx,HARDcy:Yx,hardcy:Xx,harrcir:Jx,harr:Qx,hArr:eE,harrw:tE,Hat:nE,hbar:rE,Hcirc:sE,hcirc:iE,hearts:oE,heartsuit:aE,hellip:cE,hercon:lE,hfr:uE,Hfr:hE,HilbertSpace:dE,hksearow:pE,hkswarow:fE,hoarr:mE,homtht:gE,hookleftarrow:bE,hookrightarrow:vE,hopf:yE,Hopf:_E,horbar:kE,HorizontalLine:wE,hscr:xE,Hscr:EE,hslash:AE,Hstrok:SE,hstrok:CE,HumpDownHump:TE,HumpEqual:$E,hybull:RE,hyphen:DE,Iacute:LE,iacute:ME,ic:OE,Icirc:NE,icirc:IE,Icy:PE,icy:qE,Idot:FE,IEcy:BE,iecy:zE,iexcl:HE,iff:UE,ifr:jE,Ifr:VE,Igrave:GE,igrave:WE,ii:ZE,iiiint:KE,iiint:YE,iinfin:XE,iiota:JE,IJlig:QE,ijlig:e1,Imacr:t1,imacr:n1,image:r1,ImaginaryI:s1,imagline:i1,imagpart:o1,imath:a1,Im:c1,imof:l1,imped:u1,Implies:h1,incare:d1,in:"\u2208",infin:p1,infintie:f1,inodot:m1,intcal:g1,int:b1,Int:v1,integers:y1,Integral:_1,intercal:k1,Intersection:w1,intlarhk:x1,intprod:E1,InvisibleComma:A1,InvisibleTimes:S1,IOcy:C1,iocy:T1,Iogon:$1,iogon:R1,Iopf:D1,iopf:L1,Iota:M1,iota:O1,iprod:N1,iquest:I1,iscr:P1,Iscr:q1,isin:F1,isindot:B1,isinE:z1,isins:H1,isinsv:U1,isinv:j1,it:V1,Itilde:G1,itilde:W1,Iukcy:Z1,iukcy:K1,Iuml:Y1,iuml:X1,Jcirc:J1,jcirc:Q1,Jcy:eA,jcy:tA,Jfr:nA,jfr:rA,jmath:sA,Jopf:iA,jopf:oA,Jscr:aA,jscr:cA,Jsercy:lA,jsercy:uA,Jukcy:hA,jukcy:dA,Kappa:pA,kappa:fA,kappav:mA,Kcedil:gA,kcedil:bA,Kcy:vA,kcy:yA,Kfr:_A,kfr:kA,kgreen:wA,KHcy:xA,khcy:EA,KJcy:AA,kjcy:SA,Kopf:CA,kopf:TA,Kscr:$A,kscr:RA,lAarr:DA,Lacute:LA,lacute:MA,laemptyv:OA,lagran:NA,Lambda:IA,lambda:PA,lang:qA,Lang:FA,langd:BA,langle:zA,lap:HA,Laplacetrf:UA,laquo:jA,larrb:VA,larrbfs:GA,larr:WA,Larr:ZA,lArr:KA,larrfs:YA,larrhk:XA,larrlp:JA,larrpl:QA,larrsim:eS,larrtl:tS,latail:nS,lAtail:rS,lat:sS,late:iS,lates:oS,lbarr:aS,lBarr:cS,lbbrk:lS,lbrace:uS,lbrack:hS,lbrke:dS,lbrksld:pS,lbrkslu:fS,Lcaron:mS,lcaron:gS,Lcedil:bS,lcedil:vS,lceil:yS,lcub:_S,Lcy:kS,lcy:wS,ldca:xS,ldquo:ES,ldquor:AS,ldrdhar:SS,ldrushar:CS,ldsh:TS,le:$S,lE:RS,LeftAngleBracket:DS,LeftArrowBar:LS,leftarrow:MS,LeftArrow:OS,Leftarrow:NS,LeftArrowRightArrow:IS,leftarrowtail:PS,LeftCeiling:qS,LeftDoubleBracket:FS,LeftDownTeeVector:BS,LeftDownVectorBar:zS,LeftDownVector:HS,LeftFloor:US,leftharpoondown:jS,leftharpoonup:VS,leftleftarrows:GS,leftrightarrow:WS,LeftRightArrow:ZS,Leftrightarrow:KS,leftrightarrows:YS,leftrightharpoons:XS,leftrightsquigarrow:JS,LeftRightVector:QS,LeftTeeArrow:eC,LeftTee:tC,LeftTeeVector:nC,leftthreetimes:rC,LeftTriangleBar:sC,LeftTriangle:iC,LeftTriangleEqual:oC,LeftUpDownVector:aC,LeftUpTeeVector:cC,LeftUpVectorBar:lC,LeftUpVector:uC,LeftVectorBar:hC,LeftVector:dC,lEg:pC,leg:fC,leq:mC,leqq:gC,leqslant:bC,lescc:vC,les:yC,lesdot:_C,lesdoto:kC,lesdotor:wC,lesg:xC,lesges:EC,lessapprox:AC,lessdot:SC,lesseqgtr:CC,lesseqqgtr:TC,LessEqualGreater:$C,LessFullEqual:RC,LessGreater:DC,lessgtr:LC,LessLess:MC,lesssim:OC,LessSlantEqual:NC,LessTilde:IC,lfisht:PC,lfloor:qC,Lfr:FC,lfr:BC,lg:zC,lgE:HC,lHar:UC,lhard:jC,lharu:VC,lharul:GC,lhblk:WC,LJcy:ZC,ljcy:KC,llarr:YC,ll:XC,Ll:JC,llcorner:QC,Lleftarrow:eT,llhard:tT,lltri:nT,Lmidot:rT,lmidot:sT,lmoustache:iT,lmoust:oT,lnap:aT,lnapprox:cT,lne:lT,lnE:uT,lneq:hT,lneqq:dT,lnsim:pT,loang:fT,loarr:mT,lobrk:gT,longleftarrow:bT,LongLeftArrow:vT,Longleftarrow:yT,longleftrightarrow:_T,LongLeftRightArrow:kT,Longleftrightarrow:wT,longmapsto:xT,longrightarrow:ET,LongRightArrow:AT,Longrightarrow:ST,looparrowleft:CT,looparrowright:TT,lopar:$T,Lopf:RT,lopf:DT,loplus:LT,lotimes:MT,lowast:OT,lowbar:NT,LowerLeftArrow:IT,LowerRightArrow:PT,loz:qT,lozenge:FT,lozf:BT,lpar:zT,lparlt:HT,lrarr:UT,lrcorner:jT,lrhar:VT,lrhard:GT,lrm:WT,lrtri:ZT,lsaquo:KT,lscr:YT,Lscr:XT,lsh:JT,Lsh:QT,lsim:e$,lsime:t$,lsimg:n$,lsqb:r$,lsquo:s$,lsquor:i$,Lstrok:o$,lstrok:a$,ltcc:c$,ltcir:l$,lt:u$,LT:h$,Lt:d$,ltdot:p$,lthree:f$,ltimes:m$,ltlarr:g$,ltquest:b$,ltri:v$,ltrie:y$,ltrif:_$,ltrPar:k$,lurdshar:w$,luruhar:x$,lvertneqq:E$,lvnE:A$,macr:S$,male:C$,malt:T$,maltese:$$,Map:"\u2905",map:R$,mapsto:D$,mapstodown:L$,mapstoleft:M$,mapstoup:O$,marker:N$,mcomma:I$,Mcy:P$,mcy:q$,mdash:F$,mDDot:B$,measuredangle:z$,MediumSpace:H$,Mellintrf:U$,Mfr:j$,mfr:V$,mho:G$,micro:W$,midast:Z$,midcir:K$,mid:Y$,middot:X$,minusb:J$,minus:Q$,minusd:eR,minusdu:tR,MinusPlus:nR,mlcp:rR,mldr:sR,mnplus:iR,models:oR,Mopf:aR,mopf:cR,mp:lR,mscr:uR,Mscr:hR,mstpos:dR,Mu:pR,mu:fR,multimap:mR,mumap:gR,nabla:bR,Nacute:vR,nacute:yR,nang:_R,nap:kR,napE:wR,napid:xR,napos:ER,napprox:AR,natural:SR,naturals:CR,natur:TR,nbsp:$R,nbump:RR,nbumpe:DR,ncap:LR,Ncaron:MR,ncaron:OR,Ncedil:NR,ncedil:IR,ncong:PR,ncongdot:qR,ncup:FR,Ncy:BR,ncy:zR,ndash:HR,nearhk:UR,nearr:jR,neArr:VR,nearrow:GR,ne:WR,nedot:ZR,NegativeMediumSpace:KR,NegativeThickSpace:YR,NegativeThinSpace:XR,NegativeVeryThinSpace:JR,nequiv:QR,nesear:eD,nesim:tD,NestedGreaterGreater:nD,NestedLessLess:rD,NewLine:sD,nexist:iD,nexists:oD,Nfr:aD,nfr:cD,ngE:lD,nge:uD,ngeq:hD,ngeqq:dD,ngeqslant:pD,nges:fD,nGg:mD,ngsim:gD,nGt:bD,ngt:vD,ngtr:yD,nGtv:_D,nharr:kD,nhArr:wD,nhpar:xD,ni:ED,nis:AD,nisd:SD,niv:CD,NJcy:TD,njcy:$D,nlarr:RD,nlArr:DD,nldr:LD,nlE:MD,nle:OD,nleftarrow:ND,nLeftarrow:ID,nleftrightarrow:PD,nLeftrightarrow:qD,nleq:FD,nleqq:BD,nleqslant:zD,nles:HD,nless:UD,nLl:jD,nlsim:VD,nLt:GD,nlt:WD,nltri:ZD,nltrie:KD,nLtv:YD,nmid:XD,NoBreak:JD,NonBreakingSpace:QD,nopf:eL,Nopf:tL,Not:nL,not:rL,NotCongruent:sL,NotCupCap:iL,NotDoubleVerticalBar:oL,NotElement:aL,NotEqual:cL,NotEqualTilde:lL,NotExists:uL,NotGreater:hL,NotGreaterEqual:dL,NotGreaterFullEqual:pL,NotGreaterGreater:fL,NotGreaterLess:mL,NotGreaterSlantEqual:gL,NotGreaterTilde:bL,NotHumpDownHump:vL,NotHumpEqual:yL,notin:_L,notindot:kL,notinE:wL,notinva:xL,notinvb:EL,notinvc:AL,NotLeftTriangleBar:SL,NotLeftTriangle:CL,NotLeftTriangleEqual:TL,NotLess:$L,NotLessEqual:RL,NotLessGreater:DL,NotLessLess:LL,NotLessSlantEqual:ML,NotLessTilde:OL,NotNestedGreaterGreater:NL,NotNestedLessLess:IL,notni:PL,notniva:qL,notnivb:FL,notnivc:BL,NotPrecedes:zL,NotPrecedesEqual:HL,NotPrecedesSlantEqual:UL,NotReverseElement:jL,NotRightTriangleBar:VL,NotRightTriangle:GL,NotRightTriangleEqual:WL,NotSquareSubset:ZL,NotSquareSubsetEqual:KL,NotSquareSuperset:YL,NotSquareSupersetEqual:XL,NotSubset:JL,NotSubsetEqual:QL,NotSucceeds:eM,NotSucceedsEqual:tM,NotSucceedsSlantEqual:nM,NotSucceedsTilde:rM,NotSuperset:sM,NotSupersetEqual:iM,NotTilde:oM,NotTildeEqual:aM,NotTildeFullEqual:cM,NotTildeTilde:lM,NotVerticalBar:uM,nparallel:hM,npar:dM,nparsl:pM,npart:fM,npolint:mM,npr:gM,nprcue:bM,nprec:vM,npreceq:yM,npre:_M,nrarrc:kM,nrarr:wM,nrArr:xM,nrarrw:EM,nrightarrow:AM,nRightarrow:SM,nrtri:CM,nrtrie:TM,nsc:$M,nsccue:RM,nsce:DM,Nscr:LM,nscr:MM,nshortmid:OM,nshortparallel:NM,nsim:IM,nsime:PM,nsimeq:qM,nsmid:FM,nspar:BM,nsqsube:zM,nsqsupe:HM,nsub:UM,nsubE:jM,nsube:VM,nsubset:GM,nsubseteq:WM,nsubseteqq:ZM,nsucc:KM,nsucceq:YM,nsup:XM,nsupE:JM,nsupe:QM,nsupset:eO,nsupseteq:tO,nsupseteqq:nO,ntgl:rO,Ntilde:sO,ntilde:iO,ntlg:oO,ntriangleleft:aO,ntrianglelefteq:cO,ntriangleright:lO,ntrianglerighteq:uO,Nu:hO,nu:dO,num:pO,numero:fO,numsp:mO,nvap:gO,nvdash:bO,nvDash:vO,nVdash:yO,nVDash:_O,nvge:kO,nvgt:wO,nvHarr:xO,nvinfin:EO,nvlArr:AO,nvle:SO,nvlt:CO,nvltrie:TO,nvrArr:$O,nvrtrie:RO,nvsim:DO,nwarhk:LO,nwarr:MO,nwArr:OO,nwarrow:NO,nwnear:IO,Oacute:PO,oacute:qO,oast:FO,Ocirc:BO,ocirc:zO,ocir:HO,Ocy:UO,ocy:jO,odash:VO,Odblac:GO,odblac:WO,odiv:ZO,odot:KO,odsold:YO,OElig:XO,oelig:JO,ofcir:QO,Ofr:e2,ofr:t2,ogon:n2,Ograve:r2,ograve:s2,ogt:i2,ohbar:o2,ohm:a2,oint:c2,olarr:l2,olcir:u2,olcross:h2,oline:d2,olt:p2,Omacr:f2,omacr:m2,Omega:g2,omega:b2,Omicron:v2,omicron:y2,omid:_2,ominus:k2,Oopf:w2,oopf:x2,opar:E2,OpenCurlyDoubleQuote:A2,OpenCurlyQuote:S2,operp:C2,oplus:T2,orarr:$2,Or:R2,or:D2,ord:L2,order:M2,orderof:O2,ordf:N2,ordm:I2,origof:P2,oror:q2,orslope:F2,orv:B2,oS:z2,Oscr:H2,oscr:U2,Oslash:j2,oslash:V2,osol:G2,Otilde:W2,otilde:Z2,otimesas:K2,Otimes:Y2,otimes:X2,Ouml:J2,ouml:Q2,ovbar:eN,OverBar:tN,OverBrace:nN,OverBracket:rN,OverParenthesis:sN,para:iN,parallel:oN,par:aN,parsim:cN,parsl:lN,part:uN,PartialD:hN,Pcy:dN,pcy:pN,percnt:fN,period:mN,permil:gN,perp:bN,pertenk:vN,Pfr:yN,pfr:_N,Phi:kN,phi:wN,phiv:xN,phmmat:EN,phone:AN,Pi:SN,pi:CN,pitchfork:TN,piv:$N,planck:RN,planckh:DN,plankv:LN,plusacir:MN,plusb:ON,pluscir:NN,plus:IN,plusdo:PN,plusdu:qN,pluse:FN,PlusMinus:BN,plusmn:zN,plussim:HN,plustwo:UN,pm:jN,Poincareplane:VN,pointint:GN,popf:WN,Popf:ZN,pound:KN,prap:YN,Pr:XN,pr:JN,prcue:QN,precapprox:eI,prec:tI,preccurlyeq:nI,Precedes:rI,PrecedesEqual:sI,PrecedesSlantEqual:iI,PrecedesTilde:oI,preceq:aI,precnapprox:cI,precneqq:lI,precnsim:uI,pre:hI,prE:dI,precsim:pI,prime:fI,Prime:mI,primes:gI,prnap:bI,prnE:vI,prnsim:yI,prod:_I,Product:kI,profalar:wI,profline:xI,profsurf:EI,prop:AI,Proportional:SI,Proportion:CI,propto:TI,prsim:$I,prurel:RI,Pscr:DI,pscr:LI,Psi:MI,psi:OI,puncsp:NI,Qfr:II,qfr:PI,qint:qI,qopf:FI,Qopf:BI,qprime:zI,Qscr:HI,qscr:UI,quaternions:jI,quatint:VI,quest:GI,questeq:WI,quot:ZI,QUOT:KI,rAarr:YI,race:XI,Racute:JI,racute:QI,radic:eP,raemptyv:tP,rang:nP,Rang:rP,rangd:sP,range:iP,rangle:oP,raquo:aP,rarrap:cP,rarrb:lP,rarrbfs:uP,rarrc:hP,rarr:dP,Rarr:pP,rArr:fP,rarrfs:mP,rarrhk:gP,rarrlp:bP,rarrpl:vP,rarrsim:yP,Rarrtl:_P,rarrtl:kP,rarrw:wP,ratail:xP,rAtail:EP,ratio:AP,rationals:SP,rbarr:CP,rBarr:TP,RBarr:$P,rbbrk:RP,rbrace:DP,rbrack:LP,rbrke:MP,rbrksld:OP,rbrkslu:NP,Rcaron:IP,rcaron:PP,Rcedil:qP,rcedil:FP,rceil:BP,rcub:zP,Rcy:HP,rcy:UP,rdca:jP,rdldhar:VP,rdquo:GP,rdquor:WP,rdsh:ZP,real:KP,realine:YP,realpart:XP,reals:JP,Re:QP,rect:eq,reg:tq,REG:nq,ReverseElement:rq,ReverseEquilibrium:sq,ReverseUpEquilibrium:iq,rfisht:oq,rfloor:aq,rfr:cq,Rfr:lq,rHar:uq,rhard:hq,rharu:dq,rharul:pq,Rho:fq,rho:mq,rhov:gq,RightAngleBracket:bq,RightArrowBar:vq,rightarrow:yq,RightArrow:_q,Rightarrow:kq,RightArrowLeftArrow:wq,rightarrowtail:xq,RightCeiling:Eq,RightDoubleBracket:Aq,RightDownTeeVector:Sq,RightDownVectorBar:Cq,RightDownVector:Tq,RightFloor:$q,rightharpoondown:Rq,rightharpoonup:Dq,rightleftarrows:Lq,rightleftharpoons:Mq,rightrightarrows:Oq,rightsquigarrow:Nq,RightTeeArrow:Iq,RightTee:Pq,RightTeeVector:qq,rightthreetimes:Fq,RightTriangleBar:Bq,RightTriangle:zq,RightTriangleEqual:Hq,RightUpDownVector:Uq,RightUpTeeVector:jq,RightUpVectorBar:Vq,RightUpVector:Gq,RightVectorBar:Wq,RightVector:Zq,ring:Kq,risingdotseq:Yq,rlarr:Xq,rlhar:Jq,rlm:Qq,rmoustache:eF,rmoust:tF,rnmid:nF,roang:rF,roarr:sF,robrk:iF,ropar:oF,ropf:aF,Ropf:cF,roplus:lF,rotimes:uF,RoundImplies:hF,rpar:dF,rpargt:pF,rppolint:fF,rrarr:mF,Rrightarrow:gF,rsaquo:bF,rscr:vF,Rscr:yF,rsh:_F,Rsh:kF,rsqb:wF,rsquo:xF,rsquor:EF,rthree:AF,rtimes:SF,rtri:CF,rtrie:TF,rtrif:$F,rtriltri:RF,RuleDelayed:DF,ruluhar:LF,rx:MF,Sacute:OF,sacute:NF,sbquo:IF,scap:PF,Scaron:qF,scaron:FF,Sc:BF,sc:zF,sccue:HF,sce:UF,scE:jF,Scedil:VF,scedil:GF,Scirc:WF,scirc:ZF,scnap:KF,scnE:YF,scnsim:XF,scpolint:JF,scsim:QF,Scy:eB,scy:tB,sdotb:nB,sdot:rB,sdote:sB,searhk:iB,searr:oB,seArr:aB,searrow:cB,sect:lB,semi:uB,seswar:hB,setminus:dB,setmn:pB,sext:fB,Sfr:mB,sfr:gB,sfrown:bB,sharp:vB,SHCHcy:yB,shchcy:_B,SHcy:kB,shcy:wB,ShortDownArrow:xB,ShortLeftArrow:EB,shortmid:AB,shortparallel:SB,ShortRightArrow:CB,ShortUpArrow:TB,shy:$B,Sigma:RB,sigma:DB,sigmaf:LB,sigmav:MB,sim:OB,simdot:NB,sime:IB,simeq:PB,simg:qB,simgE:FB,siml:BB,simlE:zB,simne:HB,simplus:UB,simrarr:jB,slarr:VB,SmallCircle:GB,smallsetminus:WB,smashp:ZB,smeparsl:KB,smid:YB,smile:XB,smt:JB,smte:QB,smtes:ez,SOFTcy:tz,softcy:nz,solbar:rz,solb:sz,sol:iz,Sopf:oz,sopf:az,spades:cz,spadesuit:lz,spar:uz,sqcap:hz,sqcaps:dz,sqcup:pz,sqcups:fz,Sqrt:mz,sqsub:gz,sqsube:bz,sqsubset:vz,sqsubseteq:yz,sqsup:_z,sqsupe:kz,sqsupset:wz,sqsupseteq:xz,square:Ez,Square:Az,SquareIntersection:Sz,SquareSubset:Cz,SquareSubsetEqual:Tz,SquareSuperset:$z,SquareSupersetEqual:Rz,SquareUnion:Dz,squarf:Lz,squ:Mz,squf:Oz,srarr:Nz,Sscr:Iz,sscr:Pz,ssetmn:qz,ssmile:Fz,sstarf:Bz,Star:zz,star:Hz,starf:Uz,straightepsilon:jz,straightphi:Vz,strns:Gz,sub:Wz,Sub:Zz,subdot:Kz,subE:Yz,sube:Xz,subedot:Jz,submult:Qz,subnE:eH,subne:tH,subplus:nH,subrarr:rH,subset:sH,Subset:iH,subseteq:oH,subseteqq:aH,SubsetEqual:cH,subsetneq:lH,subsetneqq:uH,subsim:hH,subsub:dH,subsup:pH,succapprox:fH,succ:mH,succcurlyeq:gH,Succeeds:bH,SucceedsEqual:vH,SucceedsSlantEqual:yH,SucceedsTilde:_H,succeq:kH,succnapprox:wH,succneqq:xH,succnsim:EH,succsim:AH,SuchThat:SH,sum:CH,Sum:TH,sung:$H,sup1:RH,sup2:DH,sup3:LH,sup:MH,Sup:OH,supdot:NH,supdsub:IH,supE:PH,supe:qH,supedot:FH,Superset:BH,SupersetEqual:zH,suphsol:HH,suphsub:UH,suplarr:jH,supmult:VH,supnE:GH,supne:WH,supplus:ZH,supset:KH,Supset:YH,supseteq:XH,supseteqq:JH,supsetneq:QH,supsetneqq:e3,supsim:t3,supsub:n3,supsup:r3,swarhk:s3,swarr:i3,swArr:o3,swarrow:a3,swnwar:c3,szlig:l3,Tab:u3,target:h3,Tau:d3,tau:p3,tbrk:f3,Tcaron:m3,tcaron:g3,Tcedil:b3,tcedil:v3,Tcy:y3,tcy:_3,tdot:k3,telrec:w3,Tfr:x3,tfr:E3,there4:A3,therefore:S3,Therefore:C3,Theta:T3,theta:$3,thetasym:R3,thetav:D3,thickapprox:L3,thicksim:M3,ThickSpace:O3,ThinSpace:N3,thinsp:I3,thkap:P3,thksim:q3,THORN:F3,thorn:B3,tilde:z3,Tilde:H3,TildeEqual:U3,TildeFullEqual:j3,TildeTilde:V3,timesbar:G3,timesb:W3,times:Z3,timesd:K3,tint:Y3,toea:X3,topbot:J3,topcir:Q3,top:eU,Topf:tU,topf:nU,topfork:rU,tosa:sU,tprime:iU,trade:oU,TRADE:aU,triangle:cU,triangledown:lU,triangleleft:uU,trianglelefteq:hU,triangleq:dU,triangleright:pU,trianglerighteq:fU,tridot:mU,trie:gU,triminus:bU,TripleDot:vU,triplus:yU,trisb:_U,tritime:kU,trpezium:wU,Tscr:xU,tscr:EU,TScy:AU,tscy:SU,TSHcy:CU,tshcy:TU,Tstrok:$U,tstrok:RU,twixt:DU,twoheadleftarrow:LU,twoheadrightarrow:MU,Uacute:OU,uacute:NU,uarr:IU,Uarr:PU,uArr:qU,Uarrocir:FU,Ubrcy:BU,ubrcy:zU,Ubreve:HU,ubreve:UU,Ucirc:jU,ucirc:VU,Ucy:GU,ucy:WU,udarr:ZU,Udblac:KU,udblac:YU,udhar:XU,ufisht:JU,Ufr:QU,ufr:e5,Ugrave:t5,ugrave:n5,uHar:r5,uharl:s5,uharr:i5,uhblk:o5,ulcorn:a5,ulcorner:c5,ulcrop:l5,ultri:u5,Umacr:h5,umacr:d5,uml:p5,UnderBar:f5,UnderBrace:m5,UnderBracket:g5,UnderParenthesis:b5,Union:v5,UnionPlus:y5,Uogon:_5,uogon:k5,Uopf:w5,uopf:x5,UpArrowBar:E5,uparrow:A5,UpArrow:S5,Uparrow:C5,UpArrowDownArrow:T5,updownarrow:$5,UpDownArrow:R5,Updownarrow:D5,UpEquilibrium:L5,upharpoonleft:M5,upharpoonright:O5,uplus:N5,UpperLeftArrow:I5,UpperRightArrow:P5,upsi:q5,Upsi:F5,upsih:B5,Upsilon:z5,upsilon:H5,UpTeeArrow:U5,UpTee:j5,upuparrows:V5,urcorn:G5,urcorner:W5,urcrop:Z5,Uring:K5,uring:Y5,urtri:X5,Uscr:J5,uscr:Q5,utdot:ej,Utilde:tj,utilde:nj,utri:rj,utrif:sj,uuarr:ij,Uuml:oj,uuml:aj,uwangle:cj,vangrt:lj,varepsilon:uj,varkappa:hj,varnothing:dj,varphi:pj,varpi:fj,varpropto:mj,varr:gj,vArr:bj,varrho:vj,varsigma:yj,varsubsetneq:_j,varsubsetneqq:kj,varsupsetneq:wj,varsupsetneqq:xj,vartheta:Ej,vartriangleleft:Aj,vartriangleright:Sj,vBar:Cj,Vbar:Tj,vBarv:$j,Vcy:Rj,vcy:Dj,vdash:Lj,vDash:Mj,Vdash:Oj,VDash:Nj,Vdashl:Ij,veebar:Pj,vee:qj,Vee:Fj,veeeq:Bj,vellip:zj,verbar:Hj,Verbar:Uj,vert:jj,Vert:Vj,VerticalBar:Gj,VerticalLine:Wj,VerticalSeparator:Zj,VerticalTilde:Kj,VeryThinSpace:Yj,Vfr:Xj,vfr:Jj,vltri:Qj,vnsub:e9,vnsup:t9,Vopf:n9,vopf:r9,vprop:s9,vrtri:i9,Vscr:o9,vscr:a9,vsubnE:c9,vsubne:l9,vsupnE:u9,vsupne:h9,Vvdash:d9,vzigzag:p9,Wcirc:f9,wcirc:m9,wedbar:g9,wedge:b9,Wedge:v9,wedgeq:y9,weierp:_9,Wfr:k9,wfr:w9,Wopf:x9,wopf:E9,wp:A9,wr:S9,wreath:C9,Wscr:T9,wscr:$9,xcap:R9,xcirc:D9,xcup:L9,xdtri:M9,Xfr:O9,xfr:N9,xharr:I9,xhArr:P9,Xi:q9,xi:F9,xlarr:B9,xlArr:z9,xmap:H9,xnis:U9,xodot:j9,Xopf:V9,xopf:G9,xoplus:W9,xotime:Z9,xrarr:K9,xrArr:Y9,Xscr:X9,xscr:J9,xsqcup:Q9,xuplus:e4,xutri:t4,xvee:n4,xwedge:r4,Yacute:s4,yacute:i4,YAcy:o4,yacy:a4,Ycirc:c4,ycirc:l4,Ycy:u4,ycy:h4,yen:d4,Yfr:p4,yfr:f4,YIcy:m4,yicy:g4,Yopf:b4,yopf:v4,Yscr:y4,yscr:_4,YUcy:k4,yucy:w4,yuml:x4,Yuml:E4,Zacute:A4,zacute:S4,Zcaron:C4,zcaron:T4,Zcy:$4,zcy:R4,Zdot:D4,zdot:L4,zeetrf:M4,ZeroWidthSpace:O4,Zeta:N4,zeta:I4,zfr:P4,Zfr:q4,ZHcy:F4,zhcy:B4,zigrarr:z4,zopf:H4,Zopf:U4,Zscr:j4,zscr:V4,zwj:G4,zwnj:W4},fc=Z4,vi=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,vn={},Io={};function K4(n){var e,t,r=Io[n];if(r)return r;for(r=Io[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),/^[0-9a-z]$/i.test(t)?r.push(t):r.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<n.length;e++)r[n.charCodeAt(e)]=n[e];return r}function Gr(n,e,t){var r,s,i,o,a,c="";for(typeof e!="string"&&(t=e,e=Gr.defaultChars),typeof t=="undefined"&&(t=!0),a=K4(e),r=0,s=n.length;r<s;r++){if(i=n.charCodeAt(r),t&&i===37&&r+2<s&&/^[0-9a-f]{2}$/i.test(n.slice(r+1,r+3))){c+=n.slice(r,r+3),r+=2;continue}if(i<128){c+=a[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&r+1<s&&(o=n.charCodeAt(r+1),o>=56320&&o<=57343)){c+=encodeURIComponent(n[r]+n[r+1]),r++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(n[r])}return c}Gr.defaultChars=";/?:@&=+$,-_.!~*'()#";Gr.componentChars="-_.!~*'()";var Y4=Gr,Po={};function X4(n){var e,t,r=Po[n];if(r)return r;for(r=Po[n]=[],e=0;e<128;e++)t=String.fromCharCode(e),r.push(t);for(e=0;e<n.length;e++)t=n.charCodeAt(e),r[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return r}function Wr(n,e){var t;return typeof e!="string"&&(e=Wr.defaultChars),t=X4(e),n.replace(/(%[a-f0-9]{2})+/gi,function(r){var s,i,o,a,c,l,u,h="";for(s=0,i=r.length;s<i;s+=3){if(o=parseInt(r.slice(s+1,s+3),16),o<128){h+=t[o];continue}if((o&224)===192&&s+3<i&&(a=parseInt(r.slice(s+4,s+6),16),(a&192)===128)){u=o<<6&1984|a&63,u<128?h+="\uFFFD\uFFFD":h+=String.fromCharCode(u),s+=3;continue}if((o&240)===224&&s+6<i&&(a=parseInt(r.slice(s+4,s+6),16),c=parseInt(r.slice(s+7,s+9),16),(a&192)===128&&(c&192)===128)){u=o<<12&61440|a<<6&4032|c&63,u<2048||u>=55296&&u<=57343?h+="\uFFFD\uFFFD\uFFFD":h+=String.fromCharCode(u),s+=6;continue}if((o&248)===240&&s+9<i&&(a=parseInt(r.slice(s+4,s+6),16),c=parseInt(r.slice(s+7,s+9),16),l=parseInt(r.slice(s+10,s+12),16),(a&192)===128&&(c&192)===128&&(l&192)===128)){u=o<<18&1835008|a<<12&258048|c<<6&4032|l&63,u<65536||u>1114111?h+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,h+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),s+=9;continue}h+="\uFFFD"}return h})}Wr.defaultChars=";/?:@&=+$,#";Wr.componentChars="";var J4=Wr,Q4=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t};function Dr(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var e6=/^([a-z0-9.+-]+:)/i,t6=/:[0-9]*$/,n6=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,r6=["<",">",'"',"`"," ","\r",`
`,"	"],s6=["{","}","|","\\","^","`"].concat(r6),i6=["'"].concat(s6),qo=["%","/","?",";","#"].concat(i6),Fo=["/","?","#"],o6=255,Bo=/^[+a-z0-9A-Z_-]{0,63}$/,a6=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,zo={javascript:!0,"javascript:":!0},Ho={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function c6(n,e){if(n&&n instanceof Dr)return n;var t=new Dr;return t.parse(n,e),t}Dr.prototype.parse=function(n,e){var t,r,s,i,o,a=n;if(a=a.trim(),!e&&n.split("#").length===1){var c=n6.exec(a);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=e6.exec(a);if(l&&(l=l[0],s=l.toLowerCase(),this.protocol=l,a=a.substr(l.length)),(e||l||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(o=a.substr(0,2)==="//",o&&!(l&&zo[l])&&(a=a.substr(2),this.slashes=!0)),!zo[l]&&(o||l&&!Ho[l])){var u=-1;for(t=0;t<Fo.length;t++)i=a.indexOf(Fo[t]),i!==-1&&(u===-1||i<u)&&(u=i);var h,d;for(u===-1?d=a.lastIndexOf("@"):d=a.lastIndexOf("@",u),d!==-1&&(h=a.slice(0,d),a=a.slice(d+1),this.auth=h),u=-1,t=0;t<qo.length;t++)i=a.indexOf(qo[t]),i!==-1&&(u===-1||i<u)&&(u=i);u===-1&&(u=a.length),a[u-1]===":"&&u--;var p=a.slice(0,u);a=a.slice(u),this.parseHost(p),this.hostname=this.hostname||"";var k=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!k){var b=this.hostname.split(/\./);for(t=0,r=b.length;t<r;t++){var x=b[t];if(!!x&&!x.match(Bo)){for(var _="",y=0,w=x.length;y<w;y++)x.charCodeAt(y)>127?_+="x":_+=x[y];if(!_.match(Bo)){var R=b.slice(0,t),$=b.slice(t+1),E=x.match(a6);E&&(R.push(E[1]),$.unshift(E[2])),$.length&&(a=$.join(".")+a),this.hostname=R.join(".");break}}}}this.hostname.length>o6&&(this.hostname=""),k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var B=a.indexOf("#");B!==-1&&(this.hash=a.substr(B),a=a.slice(0,B));var H=a.indexOf("?");return H!==-1&&(this.search=a.substr(H),a=a.slice(0,H)),a&&(this.pathname=a),Ho[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Dr.prototype.parseHost=function(n){var e=t6.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};var l6=c6;vn.encode=Y4;vn.decode=J4;vn.format=Q4;vn.parse=l6;var yn={},mc=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,gc=/[\0-\x1F\x7F-\x9F]/,u6=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,bc=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;yn.Any=mc;yn.Cc=gc;yn.Cf=u6;yn.P=vi;yn.Z=bc;(function(n){function e(v){return Object.prototype.toString.call(v)}function t(v){return e(v)==="[object String]"}var r=Object.prototype.hasOwnProperty;function s(v,S){return r.call(v,S)}function i(v){var S=Array.prototype.slice.call(arguments,1);return S.forEach(function(f){if(!!f){if(typeof f!="object")throw new TypeError(f+"must be object");Object.keys(f).forEach(function(m){v[m]=f[m]})}}),v}function o(v,S,f){return[].concat(v.slice(0,S),f,v.slice(S+1))}function a(v){return!(v>=55296&&v<=57343||v>=64976&&v<=65007||(v&65535)===65535||(v&65535)===65534||v>=0&&v<=8||v===11||v>=14&&v<=31||v>=127&&v<=159||v>1114111)}function c(v){if(v>65535){v-=65536;var S=55296+(v>>10),f=56320+(v&1023);return String.fromCharCode(S,f)}return String.fromCharCode(v)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,h=new RegExp(l.source+"|"+u.source,"gi"),d=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,p=fc;function k(v,S){var f=0;return s(p,S)?p[S]:S.charCodeAt(0)===35&&d.test(S)&&(f=S[1].toLowerCase()==="x"?parseInt(S.slice(2),16):parseInt(S.slice(1),10),a(f))?c(f):v}function b(v){return v.indexOf("\\")<0?v:v.replace(l,"$1")}function x(v){return v.indexOf("\\")<0&&v.indexOf("&")<0?v:v.replace(h,function(S,f,m){return f||k(S,m)})}var _=/[&<>"]/,y=/[&<>"]/g,w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function R(v){return w[v]}function $(v){return _.test(v)?v.replace(y,R):v}var E=/[.?*+^$[\]\\(){}|-]/g;function B(v){return v.replace(E,"\\$&")}function H(v){switch(v){case 9:case 32:return!0}return!1}function V(v){if(v>=8192&&v<=8202)return!0;switch(v){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var L=vi;function X(v){return L.test(v)}function ue(v){switch(v){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function N(v){return v=v.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(v=v.replace(/ẞ/g,"\xDF")),v.toLowerCase().toUpperCase()}n.lib={},n.lib.mdurl=vn,n.lib.ucmicro=yn,n.assign=i,n.isString=t,n.has=s,n.unescapeMd=b,n.unescapeAll=x,n.isValidEntityCode=a,n.fromCodePoint=c,n.escapeHtml=$,n.arrayReplaceAt=o,n.isSpace=H,n.isWhiteSpace=V,n.isMdAsciiPunct=ue,n.isPunctChar=X,n.escapeRE=B,n.normalizeReference=N})(ne);var Zr={},h6=function(e,t,r){var s,i,o,a,c=-1,l=e.posMax,u=e.pos;for(e.pos=t+1,s=1;e.pos<l;){if(o=e.src.charCodeAt(e.pos),o===93&&(s--,s===0)){i=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)s++;else if(r)return e.pos=u,-1}}return i&&(c=e.pos),e.pos=u,c},Uo=ne.unescapeAll,d6=function(e,t,r){var s,i,o=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(t)===60){for(t++;t<r;){if(s=e.charCodeAt(t),s===10||s===60)return c;if(s===62)return c.pos=t+1,c.str=Uo(e.slice(a+1,t)),c.ok=!0,c;if(s===92&&t+1<r){t+=2;continue}t++}return c}for(i=0;t<r&&(s=e.charCodeAt(t),!(s===32||s<32||s===127));){if(s===92&&t+1<r){if(e.charCodeAt(t+1)===32)break;t+=2;continue}if(s===40&&(i++,i>32))return c;if(s===41){if(i===0)break;i--}t++}return a===t||i!==0||(c.str=Uo(e.slice(a,t)),c.lines=o,c.pos=t,c.ok=!0),c},p6=ne.unescapeAll,f6=function(e,t,r){var s,i,o=0,a=t,c={ok:!1,pos:0,lines:0,str:""};if(t>=r||(i=e.charCodeAt(t),i!==34&&i!==39&&i!==40))return c;for(t++,i===40&&(i=41);t<r;){if(s=e.charCodeAt(t),s===i)return c.pos=t+1,c.lines=o,c.str=p6(e.slice(a+1,t)),c.ok=!0,c;if(s===40&&i===41)return c;s===10?o++:s===92&&t+1<r&&(t++,e.charCodeAt(t)===10&&o++),t++}return c};Zr.parseLinkLabel=h6;Zr.parseLinkDestination=d6;Zr.parseLinkTitle=f6;var m6=ne.assign,g6=ne.unescapeAll,Vt=ne.escapeHtml,at={};at.code_inline=function(n,e,t,r,s){var i=n[e];return"<code"+s.renderAttrs(i)+">"+Vt(n[e].content)+"</code>"};at.code_block=function(n,e,t,r,s){var i=n[e];return"<pre"+s.renderAttrs(i)+"><code>"+Vt(n[e].content)+`</code></pre>
`};at.fence=function(n,e,t,r,s){var i=n[e],o=i.info?g6(i.info).trim():"",a="",c="",l,u,h,d,p;return o&&(h=o.split(/(\s+)/g),a=h[0],c=h.slice(2).join("")),t.highlight?l=t.highlight(i.content,a,c)||Vt(i.content):l=Vt(i.content),l.indexOf("<pre")===0?l+`
`:o?(u=i.attrIndex("class"),d=i.attrs?i.attrs.slice():[],u<0?d.push(["class",t.langPrefix+a]):(d[u]=d[u].slice(),d[u][1]+=" "+t.langPrefix+a),p={attrs:d},"<pre><code"+s.renderAttrs(p)+">"+l+`</code></pre>
`):"<pre><code"+s.renderAttrs(i)+">"+l+`</code></pre>
`};at.image=function(n,e,t,r,s){var i=n[e];return i.attrs[i.attrIndex("alt")][1]=s.renderInlineAsText(i.children,t,r),s.renderToken(n,e,t)};at.hardbreak=function(n,e,t){return t.xhtmlOut?`<br />
`:`<br>
`};at.softbreak=function(n,e,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};at.text=function(n,e){return Vt(n[e].content)};at.html_block=function(n,e){return n[e].content};at.html_inline=function(n,e){return n[e].content};function _n(){this.rules=m6({},at)}_n.prototype.renderAttrs=function(e){var t,r,s;if(!e.attrs)return"";for(s="",t=0,r=e.attrs.length;t<r;t++)s+=" "+Vt(e.attrs[t][0])+'="'+Vt(e.attrs[t][1])+'"';return s};_n.prototype.renderToken=function(e,t,r){var s,i="",o=!1,a=e[t];return a.hidden?"":(a.block&&a.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(a.nesting===-1?"</":"<")+a.tag,i+=this.renderAttrs(a),a.nesting===0&&r.xhtmlOut&&(i+=" /"),a.block&&(o=!0,a.nesting===1&&t+1<e.length&&(s=e[t+1],(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===a.tag)&&(o=!1))),i+=o?`>
`:">",i)};_n.prototype.renderInline=function(n,e,t){for(var r,s="",i=this.rules,o=0,a=n.length;o<a;o++)r=n[o].type,typeof i[r]!="undefined"?s+=i[r](n,o,e,t,this):s+=this.renderToken(n,o,e);return s};_n.prototype.renderInlineAsText=function(n,e,t){for(var r="",s=0,i=n.length;s<i;s++)n[s].type==="text"?r+=n[s].content:n[s].type==="image"?r+=this.renderInlineAsText(n[s].children,e,t):n[s].type==="softbreak"&&(r+=`
`);return r};_n.prototype.render=function(n,e,t){var r,s,i,o="",a=this.rules;for(r=0,s=n.length;r<s;r++)i=n[r].type,i==="inline"?o+=this.renderInline(n[r].children,e,t):typeof a[i]!="undefined"?o+=a[n[r].type](n,r,e,t,this):o+=this.renderToken(n,r,e,t);return o};var b6=_n;function tt(){this.__rules__=[],this.__cache__=null}tt.prototype.__find__=function(n){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};tt.prototype.__compile__=function(){var n=this,e=[""];n.__rules__.forEach(function(t){!t.enabled||t.alt.forEach(function(r){e.indexOf(r)<0&&e.push(r)})}),n.__cache__={},e.forEach(function(t){n.__cache__[t]=[],n.__rules__.forEach(function(r){!r.enabled||t&&r.alt.indexOf(t)<0||n.__cache__[t].push(r.fn)})})};tt.prototype.at=function(n,e,t){var r=this.__find__(n),s=t||{};if(r===-1)throw new Error("Parser rule not found: "+n);this.__rules__[r].fn=e,this.__rules__[r].alt=s.alt||[],this.__cache__=null};tt.prototype.before=function(n,e,t,r){var s=this.__find__(n),i=r||{};if(s===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(s,0,{name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};tt.prototype.after=function(n,e,t,r){var s=this.__find__(n),i=r||{};if(s===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(s+1,0,{name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};tt.prototype.push=function(n,e,t){var r=t||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:r.alt||[]}),this.__cache__=null};tt.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(r){var s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!0,t.push(r)},this),this.__cache__=null,t};tt.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(n,e)};tt.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);var t=[];return n.forEach(function(r){var s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!1,t.push(r)},this),this.__cache__=null,t};tt.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};var yi=tt,v6=/\r\n?|\n/g,y6=/\0/g,_6=function(e){var t;t=e.src.replace(v6,`
`),t=t.replace(y6,"\uFFFD"),e.src=t},k6=function(e){var t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},w6=function(e){var t=e.tokens,r,s,i;for(s=0,i=t.length;s<i;s++)r=t[s],r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)},x6=ne.arrayReplaceAt;function E6(n){return/^<a[>\s]/i.test(n)}function A6(n){return/^<\/a\s*>/i.test(n)}var S6=function(e){var t,r,s,i,o,a,c,l,u,h,d,p,k,b,x,_,y=e.tokens,w;if(!!e.md.options.linkify){for(r=0,s=y.length;r<s;r++)if(!(y[r].type!=="inline"||!e.md.linkify.pretest(y[r].content)))for(i=y[r].children,k=0,t=i.length-1;t>=0;t--){if(a=i[t],a.type==="link_close"){for(t--;i[t].level!==a.level&&i[t].type!=="link_open";)t--;continue}if(a.type==="html_inline"&&(E6(a.content)&&k>0&&k--,A6(a.content)&&k++),!(k>0)&&a.type==="text"&&e.md.linkify.test(a.content)){for(u=a.content,w=e.md.linkify.match(u),c=[],p=a.level,d=0,l=0;l<w.length;l++)b=w[l].url,x=e.md.normalizeLink(b),e.md.validateLink(x)&&(_=w[l].text,w[l].schema?w[l].schema==="mailto:"&&!/^mailto:/i.test(_)?_=e.md.normalizeLinkText("mailto:"+_).replace(/^mailto:/,""):_=e.md.normalizeLinkText(_):_=e.md.normalizeLinkText("http://"+_).replace(/^http:\/\//,""),h=w[l].index,h>d&&(o=new e.Token("text","",0),o.content=u.slice(d,h),o.level=p,c.push(o)),o=new e.Token("link_open","a",1),o.attrs=[["href",x]],o.level=p++,o.markup="linkify",o.info="auto",c.push(o),o=new e.Token("text","",0),o.content=_,o.level=p,c.push(o),o=new e.Token("link_close","a",-1),o.level=--p,o.markup="linkify",o.info="auto",c.push(o),d=w[l].lastIndex);d<u.length&&(o=new e.Token("text","",0),o.content=u.slice(d),o.level=p,c.push(o)),y[r].children=i=x6(i,t,c)}}}},vc=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,C6=/\((c|tm|r|p)\)/i,T6=/\((c|tm|r|p)\)/ig,$6={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};function R6(n,e){return $6[e.toLowerCase()]}function D6(n){var e,t,r=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!r&&(t.content=t.content.replace(T6,R6)),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}function L6(n){var e,t,r=0;for(e=n.length-1;e>=0;e--)t=n[e],t.type==="text"&&!r&&vc.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),t.type==="link_open"&&t.info==="auto"&&r--,t.type==="link_close"&&t.info==="auto"&&r++}var M6=function(e){var t;if(!!e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(C6.test(e.tokens[t].content)&&D6(e.tokens[t].children),vc.test(e.tokens[t].content)&&L6(e.tokens[t].children))},jo=ne.isWhiteSpace,Vo=ne.isPunctChar,Go=ne.isMdAsciiPunct,O6=/['"]/,Wo=/['"]/g,Zo="\u2019";function gr(n,e,t){return n.substr(0,e)+t+n.substr(e+1)}function N6(n,e){var t,r,s,i,o,a,c,l,u,h,d,p,k,b,x,_,y,w,R,$,E;for(R=[],t=0;t<n.length;t++){for(r=n[t],c=n[t].level,y=R.length-1;y>=0&&!(R[y].level<=c);y--);if(R.length=y+1,r.type!=="text")continue;s=r.content,o=0,a=s.length;e:for(;o<a&&(Wo.lastIndex=o,i=Wo.exec(s),!!i);){if(x=_=!0,o=i.index+1,w=i[0]==="'",u=32,i.index-1>=0)u=s.charCodeAt(i.index-1);else for(y=t-1;y>=0&&!(n[y].type==="softbreak"||n[y].type==="hardbreak");y--)if(!!n[y].content){u=n[y].content.charCodeAt(n[y].content.length-1);break}if(h=32,o<a)h=s.charCodeAt(o);else for(y=t+1;y<n.length&&!(n[y].type==="softbreak"||n[y].type==="hardbreak");y++)if(!!n[y].content){h=n[y].content.charCodeAt(0);break}if(d=Go(u)||Vo(String.fromCharCode(u)),p=Go(h)||Vo(String.fromCharCode(h)),k=jo(u),b=jo(h),b?x=!1:p&&(k||d||(x=!1)),k?_=!1:d&&(b||p||(_=!1)),h===34&&i[0]==='"'&&u>=48&&u<=57&&(_=x=!1),x&&_&&(x=d,_=p),!x&&!_){w&&(r.content=gr(r.content,i.index,Zo));continue}if(_){for(y=R.length-1;y>=0&&(l=R[y],!(R[y].level<c));y--)if(l.single===w&&R[y].level===c){l=R[y],w?($=e.md.options.quotes[2],E=e.md.options.quotes[3]):($=e.md.options.quotes[0],E=e.md.options.quotes[1]),r.content=gr(r.content,i.index,E),n[l.token].content=gr(n[l.token].content,l.pos,$),o+=E.length-1,l.token===t&&(o+=$.length-1),s=r.content,a=s.length,R.length=y;continue e}}x?R.push({token:t,pos:i.index,single:w,level:c}):_&&w&&(r.content=gr(r.content,i.index,Zo))}}}var I6=function(e){var t;if(!!e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!O6.test(e.tokens[t].content)||N6(e.tokens[t].children,e)};function kn(n,e,t){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}kn.prototype.attrIndex=function(e){var t,r,s;if(!this.attrs)return-1;for(t=this.attrs,r=0,s=t.length;r<s;r++)if(t[r][0]===e)return r;return-1};kn.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};kn.prototype.attrSet=function(e,t){var r=this.attrIndex(e),s=[e,t];r<0?this.attrPush(s):this.attrs[r]=s};kn.prototype.attrGet=function(e){var t=this.attrIndex(e),r=null;return t>=0&&(r=this.attrs[t][1]),r};kn.prototype.attrJoin=function(e,t){var r=this.attrIndex(e);r<0?this.attrPush([e,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};var _i=kn,P6=_i;function yc(n,e,t){this.src=n,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=e}yc.prototype.Token=P6;var q6=yc,F6=yi,ws=[["normalize",_6],["block",k6],["inline",w6],["linkify",S6],["replacements",M6],["smartquotes",I6]];function ki(){this.ruler=new F6;for(var n=0;n<ws.length;n++)this.ruler.push(ws[n][0],ws[n][1])}ki.prototype.process=function(n){var e,t,r;for(r=this.ruler.getRules(""),e=0,t=r.length;e<t;e++)r[e](n)};ki.prototype.State=q6;var B6=ki,xs=ne.isSpace;function Es(n,e){var t=n.bMarks[e]+n.tShift[e],r=n.eMarks[e];return n.src.substr(t,r-t)}function Ko(n){var e=[],t=0,r=n.length,s,i=!1,o=0,a="";for(s=n.charCodeAt(t);t<r;)s===124&&(i?(a+=n.substring(o,t-1),o=t):(e.push(a+n.substring(o,t)),a="",o=t+1)),i=s===92,t++,s=n.charCodeAt(t);return e.push(a+n.substring(o)),e}var z6=function(e,t,r,s){var i,o,a,c,l,u,h,d,p,k,b,x,_,y,w,R,$,E;if(t+2>r||(u=t+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(a=e.bMarks[u]+e.tShift[u],a>=e.eMarks[u])||($=e.src.charCodeAt(a++),$!==124&&$!==45&&$!==58)||a>=e.eMarks[u]||(E=e.src.charCodeAt(a++),E!==124&&E!==45&&E!==58&&!xs(E))||$===45&&xs(E))return!1;for(;a<e.eMarks[u];){if(i=e.src.charCodeAt(a),i!==124&&i!==45&&i!==58&&!xs(i))return!1;a++}for(o=Es(e,t+1),h=o.split("|"),k=[],c=0;c<h.length;c++){if(b=h[c].trim(),!b){if(c===0||c===h.length-1)continue;return!1}if(!/^:?-+:?$/.test(b))return!1;b.charCodeAt(b.length-1)===58?k.push(b.charCodeAt(0)===58?"center":"right"):b.charCodeAt(0)===58?k.push("left"):k.push("")}if(o=Es(e,t).trim(),o.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4||(h=Ko(o),h.length&&h[0]===""&&h.shift(),h.length&&h[h.length-1]===""&&h.pop(),d=h.length,d===0||d!==k.length))return!1;if(s)return!0;for(y=e.parentType,e.parentType="table",R=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),p.map=x=[t,0],p=e.push("thead_open","thead",1),p.map=[t,t+1],p=e.push("tr_open","tr",1),p.map=[t,t+1],c=0;c<h.length;c++)p=e.push("th_open","th",1),k[c]&&(p.attrs=[["style","text-align:"+k[c]]]),p=e.push("inline","",0),p.content=h[c].trim(),p.children=[],p=e.push("th_close","th",-1);for(p=e.push("tr_close","tr",-1),p=e.push("thead_close","thead",-1),u=t+2;u<r&&!(e.sCount[u]<e.blkIndent);u++){for(w=!1,c=0,l=R.length;c<l;c++)if(R[c](e,u,r,!0)){w=!0;break}if(w||(o=Es(e,u).trim(),!o)||e.sCount[u]-e.blkIndent>=4)break;for(h=Ko(o),h.length&&h[0]===""&&h.shift(),h.length&&h[h.length-1]===""&&h.pop(),u===t+2&&(p=e.push("tbody_open","tbody",1),p.map=_=[t+2,0]),p=e.push("tr_open","tr",1),p.map=[u,u+1],c=0;c<d;c++)p=e.push("td_open","td",1),k[c]&&(p.attrs=[["style","text-align:"+k[c]]]),p=e.push("inline","",0),p.content=h[c]?h[c].trim():"",p.children=[],p=e.push("td_close","td",-1);p=e.push("tr_close","tr",-1)}return _&&(p=e.push("tbody_close","tbody",-1),_[1]=u),p=e.push("table_close","table",-1),x[1]=u,e.parentType=y,e.line=u,!0},H6=function(e,t,r){var s,i,o;if(e.sCount[t]-e.blkIndent<4)return!1;for(i=s=t+1;s<r;){if(e.isEmpty(s)){s++;continue}if(e.sCount[s]-e.blkIndent>=4){s++,i=s;continue}break}return e.line=i,o=e.push("code_block","code",0),o.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,o.map=[t,e.line],!0},U6=function(e,t,r,s){var i,o,a,c,l,u,h,d=!1,p=e.bMarks[t]+e.tShift[t],k=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||p+3>k||(i=e.src.charCodeAt(p),i!==126&&i!==96)||(l=p,p=e.skipChars(p,i),o=p-l,o<3)||(h=e.src.slice(l,p),a=e.src.slice(p,k),i===96&&a.indexOf(String.fromCharCode(i))>=0))return!1;if(s)return!0;for(c=t;c++,!(c>=r||(p=l=e.bMarks[c]+e.tShift[c],k=e.eMarks[c],p<k&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(p)===i&&!(e.sCount[c]-e.blkIndent>=4)&&(p=e.skipChars(p,i),!(p-l<o)&&(p=e.skipSpaces(p),!(p<k)))){d=!0;break}return o=e.sCount[t],e.line=c+(d?1:0),u=e.push("fence","code",0),u.info=a,u.content=e.getLines(t+1,c,o,!0),u.markup=h,u.map=[t,e.line],!0},Yo=ne.isSpace,j6=function(e,t,r,s){var i,o,a,c,l,u,h,d,p,k,b,x,_,y,w,R,$,E,B,H,V=e.lineMax,L=e.bMarks[t]+e.tShift[t],X=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(L++)!==62)return!1;if(s)return!0;for(c=p=e.sCount[t]+1,e.src.charCodeAt(L)===32?(L++,c++,p++,i=!1,R=!0):e.src.charCodeAt(L)===9?(R=!0,(e.bsCount[t]+p)%4===3?(L++,c++,p++,i=!1):i=!0):R=!1,k=[e.bMarks[t]],e.bMarks[t]=L;L<X&&(o=e.src.charCodeAt(L),Yo(o));){o===9?p+=4-(p+e.bsCount[t]+(i?1:0))%4:p++;L++}for(b=[e.bsCount[t]],e.bsCount[t]=e.sCount[t]+1+(R?1:0),u=L>=X,y=[e.sCount[t]],e.sCount[t]=p-c,w=[e.tShift[t]],e.tShift[t]=L-e.bMarks[t],E=e.md.block.ruler.getRules("blockquote"),_=e.parentType,e.parentType="blockquote",d=t+1;d<r&&(H=e.sCount[d]<e.blkIndent,L=e.bMarks[d]+e.tShift[d],X=e.eMarks[d],!(L>=X));d++){if(e.src.charCodeAt(L++)===62&&!H){for(c=p=e.sCount[d]+1,e.src.charCodeAt(L)===32?(L++,c++,p++,i=!1,R=!0):e.src.charCodeAt(L)===9?(R=!0,(e.bsCount[d]+p)%4===3?(L++,c++,p++,i=!1):i=!0):R=!1,k.push(e.bMarks[d]),e.bMarks[d]=L;L<X&&(o=e.src.charCodeAt(L),Yo(o));){o===9?p+=4-(p+e.bsCount[d]+(i?1:0))%4:p++;L++}u=L>=X,b.push(e.bsCount[d]),e.bsCount[d]=e.sCount[d]+1+(R?1:0),y.push(e.sCount[d]),e.sCount[d]=p-c,w.push(e.tShift[d]),e.tShift[d]=L-e.bMarks[d];continue}if(u)break;for($=!1,a=0,l=E.length;a<l;a++)if(E[a](e,d,r,!0)){$=!0;break}if($){e.lineMax=d,e.blkIndent!==0&&(k.push(e.bMarks[d]),b.push(e.bsCount[d]),w.push(e.tShift[d]),y.push(e.sCount[d]),e.sCount[d]-=e.blkIndent);break}k.push(e.bMarks[d]),b.push(e.bsCount[d]),w.push(e.tShift[d]),y.push(e.sCount[d]),e.sCount[d]=-1}for(x=e.blkIndent,e.blkIndent=0,B=e.push("blockquote_open","blockquote",1),B.markup=">",B.map=h=[t,0],e.md.block.tokenize(e,t,d),B=e.push("blockquote_close","blockquote",-1),B.markup=">",e.lineMax=V,e.parentType=_,h[1]=e.line,a=0;a<w.length;a++)e.bMarks[a+t]=k[a],e.tShift[a+t]=w[a],e.sCount[a+t]=y[a],e.bsCount[a+t]=b[a];return e.blkIndent=x,!0},V6=ne.isSpace,G6=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(i=e.src.charCodeAt(l++),i!==42&&i!==45&&i!==95))return!1;for(o=1;l<u;){if(a=e.src.charCodeAt(l++),a!==i&&!V6(a))return!1;a===i&&o++}return o<3?!1:(s||(e.line=t+1,c=e.push("hr","hr",0),c.map=[t,e.line],c.markup=Array(o+1).join(String.fromCharCode(i))),!0)},_c=ne.isSpace;function Xo(n,e){var t,r,s,i;return r=n.bMarks[e]+n.tShift[e],s=n.eMarks[e],t=n.src.charCodeAt(r++),t!==42&&t!==45&&t!==43||r<s&&(i=n.src.charCodeAt(r),!_c(i))?-1:r}function Jo(n,e){var t,r=n.bMarks[e]+n.tShift[e],s=r,i=n.eMarks[e];if(s+1>=i||(t=n.src.charCodeAt(s++),t<48||t>57))return-1;for(;;){if(s>=i)return-1;if(t=n.src.charCodeAt(s++),t>=48&&t<=57){if(s-r>=10)return-1;continue}if(t===41||t===46)break;return-1}return s<i&&(t=n.src.charCodeAt(s),!_c(t))?-1:s}function W6(n,e){var t,r,s=n.level+2;for(t=e+2,r=n.tokens.length-2;t<r;t++)n.tokens[t].level===s&&n.tokens[t].type==="paragraph_open"&&(n.tokens[t+2].hidden=!0,n.tokens[t].hidden=!0,t+=2)}var Z6=function(e,t,r,s){var i,o,a,c,l,u,h,d,p,k,b,x,_,y,w,R,$,E,B,H,V,L,X,ue,N,v,S,f,m=!1,A=!0;if(e.sCount[t]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[t]-e.listIndent>=4&&e.sCount[t]<e.blkIndent)return!1;if(s&&e.parentType==="paragraph"&&e.sCount[t]>=e.blkIndent&&(m=!0),(X=Jo(e,t))>=0){if(h=!0,N=e.bMarks[t]+e.tShift[t],_=Number(e.src.slice(N,X-1)),m&&_!==1)return!1}else if((X=Xo(e,t))>=0)h=!1;else return!1;if(m&&e.skipSpaces(X)>=e.eMarks[t])return!1;if(x=e.src.charCodeAt(X-1),s)return!0;for(b=e.tokens.length,h?(f=e.push("ordered_list_open","ol",1),_!==1&&(f.attrs=[["start",_]])):f=e.push("bullet_list_open","ul",1),f.map=k=[t,0],f.markup=String.fromCharCode(x),w=t,ue=!1,S=e.md.block.ruler.getRules("list"),E=e.parentType,e.parentType="list";w<r;){for(L=X,y=e.eMarks[w],u=R=e.sCount[w]+X-(e.bMarks[t]+e.tShift[t]);L<y;){if(i=e.src.charCodeAt(L),i===9)R+=4-(R+e.bsCount[w])%4;else if(i===32)R++;else break;L++}if(o=L,o>=y?l=1:l=R-u,l>4&&(l=1),c=u+l,f=e.push("list_item_open","li",1),f.markup=String.fromCharCode(x),f.map=d=[t,0],h&&(f.info=e.src.slice(N,X-1)),V=e.tight,H=e.tShift[t],B=e.sCount[t],$=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=c,e.tight=!0,e.tShift[t]=o-e.bMarks[t],e.sCount[t]=R,o>=y&&e.isEmpty(t+1)?e.line=Math.min(e.line+2,r):e.md.block.tokenize(e,t,r,!0),(!e.tight||ue)&&(A=!1),ue=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=$,e.tShift[t]=H,e.sCount[t]=B,e.tight=V,f=e.push("list_item_close","li",-1),f.markup=String.fromCharCode(x),w=t=e.line,d[1]=w,o=e.bMarks[t],w>=r||e.sCount[w]<e.blkIndent||e.sCount[t]-e.blkIndent>=4)break;for(v=!1,a=0,p=S.length;a<p;a++)if(S[a](e,w,r,!0)){v=!0;break}if(v)break;if(h){if(X=Jo(e,w),X<0)break;N=e.bMarks[w]+e.tShift[w]}else if(X=Xo(e,w),X<0)break;if(x!==e.src.charCodeAt(X-1))break}return h?f=e.push("ordered_list_close","ol",-1):f=e.push("bullet_list_close","ul",-1),f.markup=String.fromCharCode(x),k[1]=w,e.line=w,e.parentType=E,A&&W6(e,b),!0},K6=ne.normalizeReference,br=ne.isSpace,Y6=function(e,t,r,s){var i,o,a,c,l,u,h,d,p,k,b,x,_,y,w,R,$=0,E=e.bMarks[t]+e.tShift[t],B=e.eMarks[t],H=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(E)!==91)return!1;for(;++E<B;)if(e.src.charCodeAt(E)===93&&e.src.charCodeAt(E-1)!==92){if(E+1===B||e.src.charCodeAt(E+1)!==58)return!1;break}for(c=e.lineMax,w=e.md.block.ruler.getRules("reference"),k=e.parentType,e.parentType="reference";H<c&&!e.isEmpty(H);H++)if(!(e.sCount[H]-e.blkIndent>3)&&!(e.sCount[H]<0)){for(y=!1,u=0,h=w.length;u<h;u++)if(w[u](e,H,c,!0)){y=!0;break}if(y)break}for(_=e.getLines(t,H,e.blkIndent,!1).trim(),B=_.length,E=1;E<B;E++){if(i=_.charCodeAt(E),i===91)return!1;if(i===93){p=E;break}else i===10?$++:i===92&&(E++,E<B&&_.charCodeAt(E)===10&&$++)}if(p<0||_.charCodeAt(p+1)!==58)return!1;for(E=p+2;E<B;E++)if(i=_.charCodeAt(E),i===10)$++;else if(!br(i))break;if(b=e.md.helpers.parseLinkDestination(_,E,B),!b.ok||(l=e.md.normalizeLink(b.str),!e.md.validateLink(l)))return!1;for(E=b.pos,$+=b.lines,o=E,a=$,x=E;E<B;E++)if(i=_.charCodeAt(E),i===10)$++;else if(!br(i))break;for(b=e.md.helpers.parseLinkTitle(_,E,B),E<B&&x!==E&&b.ok?(R=b.str,E=b.pos,$+=b.lines):(R="",E=o,$=a);E<B&&(i=_.charCodeAt(E),!!br(i));)E++;if(E<B&&_.charCodeAt(E)!==10&&R)for(R="",E=o,$=a;E<B&&(i=_.charCodeAt(E),!!br(i));)E++;return E<B&&_.charCodeAt(E)!==10||(d=K6(_.slice(1,p)),!d)?!1:(s||(typeof e.env.references=="undefined"&&(e.env.references={}),typeof e.env.references[d]=="undefined"&&(e.env.references[d]={title:R,href:l}),e.parentType=k,e.line=t+$+1),!0)},X6=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Kr={},J6="[a-zA-Z_:][a-zA-Z0-9:._-]*",Q6="[^\"'=<>`\\x00-\\x20]+",e7="'[^']*'",t7='"[^"]*"',n7="(?:"+Q6+"|"+e7+"|"+t7+")",r7="(?:\\s+"+J6+"(?:\\s*=\\s*"+n7+")?)",kc="<[A-Za-z][A-Za-z0-9\\-]*"+r7+"*\\s*\\/?>",wc="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",s7="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",i7="<[?][\\s\\S]*?[?]>",o7="<![A-Z]+\\s+[^>]*>",a7="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",c7=new RegExp("^(?:"+kc+"|"+wc+"|"+s7+"|"+i7+"|"+o7+"|"+a7+")"),l7=new RegExp("^(?:"+kc+"|"+wc+")");Kr.HTML_TAG_RE=c7;Kr.HTML_OPEN_CLOSE_TAG_RE=l7;var u7=X6,h7=Kr.HTML_OPEN_CLOSE_TAG_RE,en=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+u7.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(h7.source+"\\s*$"),/^$/,!1]],d7=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(l)!==60)return!1;for(c=e.src.slice(l,u),i=0;i<en.length&&!en[i][0].test(c);i++);if(i===en.length)return!1;if(s)return en[i][2];if(o=t+1,!en[i][1].test(c)){for(;o<r&&!(e.sCount[o]<e.blkIndent);o++)if(l=e.bMarks[o]+e.tShift[o],u=e.eMarks[o],c=e.src.slice(l,u),en[i][1].test(c)){c.length!==0&&o++;break}}return e.line=o,a=e.push("html_block","",0),a.map=[t,o],a.content=e.getLines(t,o,e.blkIndent,!0),!0},Qo=ne.isSpace,p7=function(e,t,r,s){var i,o,a,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(i=e.src.charCodeAt(l),i!==35||l>=u))return!1;for(o=1,i=e.src.charCodeAt(++l);i===35&&l<u&&o<=6;)o++,i=e.src.charCodeAt(++l);return o>6||l<u&&!Qo(i)?!1:(s||(u=e.skipSpacesBack(u,l),a=e.skipCharsBack(u,35,l),a>l&&Qo(e.src.charCodeAt(a-1))&&(u=a),e.line=t+1,c=e.push("heading_open","h"+String(o),1),c.markup="########".slice(0,o),c.map=[t,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[t,e.line],c.children=[],c=e.push("heading_close","h"+String(o),-1),c.markup="########".slice(0,o)),!0)},f7=function(e,t,r){var s,i,o,a,c,l,u,h,d,p=t+1,k,b=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(k=e.parentType,e.parentType="paragraph";p<r&&!e.isEmpty(p);p++)if(!(e.sCount[p]-e.blkIndent>3)){if(e.sCount[p]>=e.blkIndent&&(l=e.bMarks[p]+e.tShift[p],u=e.eMarks[p],l<u&&(d=e.src.charCodeAt(l),(d===45||d===61)&&(l=e.skipChars(l,d),l=e.skipSpaces(l),l>=u)))){h=d===61?1:2;break}if(!(e.sCount[p]<0)){for(i=!1,o=0,a=b.length;o<a;o++)if(b[o](e,p,r,!0)){i=!0;break}if(i)break}}return h?(s=e.getLines(t,p,e.blkIndent,!1).trim(),e.line=p+1,c=e.push("heading_open","h"+String(h),1),c.markup=String.fromCharCode(d),c.map=[t,e.line],c=e.push("inline","",0),c.content=s,c.map=[t,e.line-1],c.children=[],c=e.push("heading_close","h"+String(h),-1),c.markup=String.fromCharCode(d),e.parentType=k,!0):!1},m7=function(e,t){var r,s,i,o,a,c,l=t+1,u=e.md.block.ruler.getRules("paragraph"),h=e.lineMax;for(c=e.parentType,e.parentType="paragraph";l<h&&!e.isEmpty(l);l++)if(!(e.sCount[l]-e.blkIndent>3)&&!(e.sCount[l]<0)){for(s=!1,i=0,o=u.length;i<o;i++)if(u[i](e,l,h,!0)){s=!0;break}if(s)break}return r=e.getLines(t,l,e.blkIndent,!1).trim(),e.line=l,a=e.push("paragraph_open","p",1),a.map=[t,e.line],a=e.push("inline","",0),a.content=r,a.map=[t,e.line],a.children=[],a=e.push("paragraph_close","p",-1),e.parentType=c,!0},xc=_i,Yr=ne.isSpace;function ct(n,e,t,r){var s,i,o,a,c,l,u,h;for(this.src=n,this.md=e,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,h=!1,o=a=l=u=0,c=i.length;a<c;a++){if(s=i.charCodeAt(a),!h)if(Yr(s)){l++,s===9?u+=4-u%4:u++;continue}else h=!0;(s===10||a===c-1)&&(s!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),h=!1,l=0,u=0,o=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ct.prototype.push=function(n,e,t){var r=new xc(n,e,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};ct.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};ct.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};ct.prototype.skipSpaces=function(e){for(var t,r=this.src.length;e<r&&(t=this.src.charCodeAt(e),!!Yr(t));e++);return e};ct.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!Yr(this.src.charCodeAt(--e)))return e+1;return e};ct.prototype.skipChars=function(e,t){for(var r=this.src.length;e<r&&this.src.charCodeAt(e)===t;e++);return e};ct.prototype.skipCharsBack=function(e,t,r){if(e<=r)return e;for(;e>r;)if(t!==this.src.charCodeAt(--e))return e+1;return e};ct.prototype.getLines=function(e,t,r,s){var i,o,a,c,l,u,h,d=e;if(e>=t)return"";for(u=new Array(t-e),i=0;d<t;d++,i++){for(o=0,h=c=this.bMarks[d],d+1<t||s?l=this.eMarks[d]+1:l=this.eMarks[d];c<l&&o<r;){if(a=this.src.charCodeAt(c),Yr(a))a===9?o+=4-(o+this.bsCount[d])%4:o++;else if(c-h<this.tShift[d])o++;else break;c++}o>r?u[i]=new Array(o-r+1).join(" ")+this.src.slice(c,l):u[i]=this.src.slice(c,l)}return u.join("")};ct.prototype.Token=xc;var g7=ct,b7=yi,vr=[["table",z6,["paragraph","reference"]],["code",H6],["fence",U6,["paragraph","reference","blockquote","list"]],["blockquote",j6,["paragraph","reference","blockquote","list"]],["hr",G6,["paragraph","reference","blockquote","list"]],["list",Z6,["paragraph","reference","blockquote"]],["reference",Y6],["html_block",d7,["paragraph","reference","blockquote"]],["heading",p7,["paragraph","reference","blockquote"]],["lheading",f7],["paragraph",m7]];function Xr(){this.ruler=new b7;for(var n=0;n<vr.length;n++)this.ruler.push(vr[n][0],vr[n][1],{alt:(vr[n][2]||[]).slice()})}Xr.prototype.tokenize=function(n,e,t){for(var r,s,i=this.ruler.getRules(""),o=i.length,a=e,c=!1,l=n.md.options.maxNesting;a<t&&(n.line=a=n.skipEmptyLines(a),!(a>=t||n.sCount[a]<n.blkIndent));){if(n.level>=l){n.line=t;break}for(s=0;s<o&&(r=i[s](n,a,t,!1),!r);s++);n.tight=!c,n.isEmpty(n.line-1)&&(c=!0),a=n.line,a<t&&n.isEmpty(a)&&(c=!0,a++,n.line=a)}};Xr.prototype.parse=function(n,e,t,r){var s;!n||(s=new this.State(n,e,t,r),this.tokenize(s,s.line,s.lineMax))};Xr.prototype.State=g7;var v7=Xr;function y7(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var _7=function(e,t){for(var r=e.pos;r<e.posMax&&!y7(e.src.charCodeAt(r));)r++;return r===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,r)),e.pos=r,!0)},k7=ne.isSpace,w7=function(e,t){var r,s,i,o=e.pos;if(e.src.charCodeAt(o)!==10)return!1;if(r=e.pending.length-1,s=e.posMax,!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){for(i=r-1;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(o++;o<s&&k7(e.src.charCodeAt(o));)o++;return e.pos=o,!0},x7=ne.isSpace,wi=[];for(var ea=0;ea<256;ea++)wi.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){wi[n.charCodeAt(0)]=1});var E7=function(e,t){var r,s=e.pos,i=e.posMax;if(e.src.charCodeAt(s)!==92)return!1;if(s++,s<i){if(r=e.src.charCodeAt(s),r<256&&wi[r]!==0)return t||(e.pending+=e.src[s]),e.pos+=2,!0;if(r===10){for(t||e.push("hardbreak","br",0),s++;s<i&&(r=e.src.charCodeAt(s),!!x7(r));)s++;return e.pos=s,!0}}return t||(e.pending+="\\"),e.pos++,!0},A7=function(e,t){var r,s,i,o,a,c,l,u,h=e.pos,d=e.src.charCodeAt(h);if(d!==96)return!1;for(r=h,h++,s=e.posMax;h<s&&e.src.charCodeAt(h)===96;)h++;if(i=e.src.slice(r,h),l=i.length,e.backticksScanned&&(e.backticks[l]||0)<=r)return t||(e.pending+=i),e.pos+=l,!0;for(a=c=h;(a=e.src.indexOf("`",c))!==-1;){for(c=a+1;c<s&&e.src.charCodeAt(c)===96;)c++;if(u=c-a,u===l)return t||(o=e.push("code_inline","code",0),o.markup=i,o.content=e.src.slice(h,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=c,!0;e.backticks[u]=a}return e.backticksScanned=!0,t||(e.pending+=i),e.pos+=l,!0},Jr={};Jr.tokenize=function(e,t){var r,s,i,o,a,c=e.pos,l=e.src.charCodeAt(c);if(t||l!==126||(s=e.scanDelims(e.pos,!0),o=s.length,a=String.fromCharCode(l),o<2))return!1;for(o%2&&(i=e.push("text","",0),i.content=a,o--),r=0;r<o;r+=2)i=e.push("text","",0),i.content=a+a,e.delimiters.push({marker:l,length:0,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0};function ta(n,e){var t,r,s,i,o,a=[],c=e.length;for(t=0;t<c;t++)s=e[t],s.marker===126&&s.end!==-1&&(i=e[s.end],o=n.tokens[s.token],o.type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",o=n.tokens[i.token],o.type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="",n.tokens[i.token-1].type==="text"&&n.tokens[i.token-1].content==="~"&&a.push(i.token-1));for(;a.length;){for(t=a.pop(),r=t+1;r<n.tokens.length&&n.tokens[r].type==="s_close";)r++;r--,t!==r&&(o=n.tokens[r],n.tokens[r]=n.tokens[t],n.tokens[t]=o)}}Jr.postProcess=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(ta(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&ta(e,r[t].delimiters)};var Qr={};Qr.tokenize=function(e,t){var r,s,i,o=e.pos,a=e.src.charCodeAt(o);if(t||a!==95&&a!==42)return!1;for(s=e.scanDelims(e.pos,a===42),r=0;r<s.length;r++)i=e.push("text","",0),i.content=String.fromCharCode(a),e.delimiters.push({marker:a,length:s.length,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0};function na(n,e){var t,r,s,i,o,a,c=e.length;for(t=c-1;t>=0;t--)r=e[t],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(s=e[r.end],a=t>0&&e[t-1].end===r.end+1&&e[t-1].marker===r.marker&&e[t-1].token===r.token-1&&e[r.end+1].token===s.token+1,o=String.fromCharCode(r.marker),i=n.tokens[r.token],i.type=a?"strong_open":"em_open",i.tag=a?"strong":"em",i.nesting=1,i.markup=a?o+o:o,i.content="",i=n.tokens[s.token],i.type=a?"strong_close":"em_close",i.tag=a?"strong":"em",i.nesting=-1,i.markup=a?o+o:o,i.content="",a&&(n.tokens[e[t-1].token].content="",n.tokens[e[r.end+1].token].content="",t--))}Qr.postProcess=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(na(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&na(e,r[t].delimiters)};var S7=ne.normalizeReference,As=ne.isSpace,C7=function(e,t){var r,s,i,o,a,c,l,u,h,d="",p="",k=e.pos,b=e.posMax,x=e.pos,_=!0;if(e.src.charCodeAt(e.pos)!==91||(a=e.pos+1,o=e.md.helpers.parseLinkLabel(e,e.pos,!0),o<0))return!1;if(c=o+1,c<b&&e.src.charCodeAt(c)===40){for(_=!1,c++;c<b&&(s=e.src.charCodeAt(c),!(!As(s)&&s!==10));c++);if(c>=b)return!1;if(x=c,l=e.md.helpers.parseLinkDestination(e.src,c,e.posMax),l.ok){for(d=e.md.normalizeLink(l.str),e.md.validateLink(d)?c=l.pos:d="",x=c;c<b&&(s=e.src.charCodeAt(c),!(!As(s)&&s!==10));c++);if(l=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<b&&x!==c&&l.ok)for(p=l.str,c=l.pos;c<b&&(s=e.src.charCodeAt(c),!(!As(s)&&s!==10));c++);}(c>=b||e.src.charCodeAt(c)!==41)&&(_=!0),c++}if(_){if(typeof e.env.references=="undefined")return!1;if(c<b&&e.src.charCodeAt(c)===91?(x=c+1,c=e.md.helpers.parseLinkLabel(e,c),c>=0?i=e.src.slice(x,c++):c=o+1):c=o+1,i||(i=e.src.slice(a,o)),u=e.env.references[S7(i)],!u)return e.pos=k,!1;d=u.href,p=u.title}return t||(e.pos=a,e.posMax=o,h=e.push("link_open","a",1),h.attrs=r=[["href",d]],p&&r.push(["title",p]),e.md.inline.tokenize(e),h=e.push("link_close","a",-1)),e.pos=c,e.posMax=b,!0},T7=ne.normalizeReference,Ss=ne.isSpace,$7=function(e,t){var r,s,i,o,a,c,l,u,h,d,p,k,b,x="",_=e.pos,y=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(c=e.pos+2,a=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),a<0))return!1;if(l=a+1,l<y&&e.src.charCodeAt(l)===40){for(l++;l<y&&(s=e.src.charCodeAt(l),!(!Ss(s)&&s!==10));l++);if(l>=y)return!1;for(b=l,h=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),h.ok&&(x=e.md.normalizeLink(h.str),e.md.validateLink(x)?l=h.pos:x=""),b=l;l<y&&(s=e.src.charCodeAt(l),!(!Ss(s)&&s!==10));l++);if(h=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<y&&b!==l&&h.ok)for(d=h.str,l=h.pos;l<y&&(s=e.src.charCodeAt(l),!(!Ss(s)&&s!==10));l++);else d="";if(l>=y||e.src.charCodeAt(l)!==41)return e.pos=_,!1;l++}else{if(typeof e.env.references=="undefined")return!1;if(l<y&&e.src.charCodeAt(l)===91?(b=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?o=e.src.slice(b,l++):l=a+1):l=a+1,o||(o=e.src.slice(c,a)),u=e.env.references[T7(o)],!u)return e.pos=_,!1;x=u.href,d=u.title}return t||(i=e.src.slice(c,a),e.md.inline.parse(i,e.md,e.env,k=[]),p=e.push("image","img",0),p.attrs=r=[["src",x],["alt",""]],p.children=k,p.content=i,d&&r.push(["title",d])),e.pos=l,e.posMax=y,!0},R7=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,D7=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,L7=function(e,t){var r,s,i,o,a,c,l=e.pos;if(e.src.charCodeAt(l)!==60)return!1;for(a=e.pos,c=e.posMax;;){if(++l>=c||(o=e.src.charCodeAt(l),o===60))return!1;if(o===62)break}return r=e.src.slice(a+1,l),D7.test(r)?(s=e.md.normalizeLink(r),e.md.validateLink(s)?(t||(i=e.push("link_open","a",1),i.attrs=[["href",s]],i.markup="autolink",i.info="auto",i=e.push("text","",0),i.content=e.md.normalizeLinkText(r),i=e.push("link_close","a",-1),i.markup="autolink",i.info="auto"),e.pos+=r.length+2,!0):!1):R7.test(r)?(s=e.md.normalizeLink("mailto:"+r),e.md.validateLink(s)?(t||(i=e.push("link_open","a",1),i.attrs=[["href",s]],i.markup="autolink",i.info="auto",i=e.push("text","",0),i.content=e.md.normalizeLinkText(r),i=e.push("link_close","a",-1),i.markup="autolink",i.info="auto"),e.pos+=r.length+2,!0):!1):!1},M7=Kr.HTML_TAG_RE;function O7(n){var e=n|32;return e>=97&&e<=122}var N7=function(e,t){var r,s,i,o,a=e.pos;return!e.md.options.html||(i=e.posMax,e.src.charCodeAt(a)!==60||a+2>=i)||(r=e.src.charCodeAt(a+1),r!==33&&r!==63&&r!==47&&!O7(r))||(s=e.src.slice(a).match(M7),!s)?!1:(t||(o=e.push("html_inline","",0),o.content=e.src.slice(a,a+s[0].length)),e.pos+=s[0].length,!0)},ra=fc,I7=ne.has,P7=ne.isValidEntityCode,sa=ne.fromCodePoint,q7=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,F7=/^&([a-z][a-z0-9]{1,31});/i,B7=function(e,t){var r,s,i,o=e.pos,a=e.posMax;if(e.src.charCodeAt(o)!==38)return!1;if(o+1<a){if(r=e.src.charCodeAt(o+1),r===35){if(i=e.src.slice(o).match(q7),i)return t||(s=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),e.pending+=P7(s)?sa(s):sa(65533)),e.pos+=i[0].length,!0}else if(i=e.src.slice(o).match(F7),i&&I7(ra,i[1]))return t||(e.pending+=ra[i[1]]),e.pos+=i[0].length,!0}return t||(e.pending+="&"),e.pos++,!0};function ia(n,e){var t,r,s,i,o,a,c,l,u={},h=e.length;if(!!h){var d=0,p=-2,k=[];for(t=0;t<h;t++)if(s=e[t],k.push(0),(e[d].marker!==s.marker||p!==s.token-1)&&(d=t),p=s.token,s.length=s.length||0,!!s.close){for(u.hasOwnProperty(s.marker)||(u[s.marker]=[-1,-1,-1,-1,-1,-1]),o=u[s.marker][(s.open?3:0)+s.length%3],r=d-k[d]-1,a=r;r>o;r-=k[r]+1)if(i=e[r],i.marker===s.marker&&i.open&&i.end<0&&(c=!1,(i.close||s.open)&&(i.length+s.length)%3===0&&(i.length%3!==0||s.length%3!==0)&&(c=!0),!c)){l=r>0&&!e[r-1].open?k[r-1]+1:0,k[t]=t-r+l,k[r]=l,s.open=!1,i.end=t,i.close=!1,a=-1,p=-2;break}a!==-1&&(u[s.marker][(s.open?3:0)+(s.length||0)%3]=a)}}}var z7=function(e){var t,r=e.tokens_meta,s=e.tokens_meta.length;for(ia(e,e.delimiters),t=0;t<s;t++)r[t]&&r[t].delimiters&&ia(e,r[t].delimiters)},H7=function(e){var t,r,s=0,i=e.tokens,o=e.tokens.length;for(t=r=0;t<o;t++)i[t].nesting<0&&s--,i[t].level=s,i[t].nesting>0&&s++,i[t].type==="text"&&t+1<o&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==r&&(i[r]=i[t]),r++);t!==r&&(i.length=r)},xi=_i,oa=ne.isWhiteSpace,aa=ne.isPunctChar,ca=ne.isMdAsciiPunct;function er(n,e,t,r){this.src=n,this.env=t,this.md=e,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}er.prototype.pushPending=function(){var n=new xi("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};er.prototype.push=function(n,e,t){this.pending&&this.pushPending();var r=new xi(n,e,t),s=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(s),r};er.prototype.scanDelims=function(n,e){var t=n,r,s,i,o,a,c,l,u,h,d=!0,p=!0,k=this.posMax,b=this.src.charCodeAt(n);for(r=n>0?this.src.charCodeAt(n-1):32;t<k&&this.src.charCodeAt(t)===b;)t++;return i=t-n,s=t<k?this.src.charCodeAt(t):32,l=ca(r)||aa(String.fromCharCode(r)),h=ca(s)||aa(String.fromCharCode(s)),c=oa(r),u=oa(s),u?d=!1:h&&(c||l||(d=!1)),c?p=!1:l&&(u||h||(p=!1)),e?(o=d,a=p):(o=d&&(!p||l),a=p&&(!d||h)),{can_open:o,can_close:a,length:i}};er.prototype.Token=xi;var U7=er,la=yi,Cs=[["text",_7],["newline",w7],["escape",E7],["backticks",A7],["strikethrough",Jr.tokenize],["emphasis",Qr.tokenize],["link",C7],["image",$7],["autolink",L7],["html_inline",N7],["entity",B7]],Ts=[["balance_pairs",z7],["strikethrough",Jr.postProcess],["emphasis",Qr.postProcess],["text_collapse",H7]];function tr(){var n;for(this.ruler=new la,n=0;n<Cs.length;n++)this.ruler.push(Cs[n][0],Cs[n][1]);for(this.ruler2=new la,n=0;n<Ts.length;n++)this.ruler2.push(Ts[n][0],Ts[n][1])}tr.prototype.skipToken=function(n){var e,t,r=n.pos,s=this.ruler.getRules(""),i=s.length,o=n.md.options.maxNesting,a=n.cache;if(typeof a[r]!="undefined"){n.pos=a[r];return}if(n.level<o)for(t=0;t<i&&(n.level++,e=s[t](n,!0),n.level--,!e);t++);else n.pos=n.posMax;e||n.pos++,a[r]=n.pos};tr.prototype.tokenize=function(n){for(var e,t,r=this.ruler.getRules(""),s=r.length,i=n.posMax,o=n.md.options.maxNesting;n.pos<i;){if(n.level<o)for(t=0;t<s&&(e=r[t](n,!1),!e);t++);if(e){if(n.pos>=i)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};tr.prototype.parse=function(n,e,t,r){var s,i,o,a=new this.State(n,e,t,r);for(this.tokenize(a),i=this.ruler2.getRules(""),o=i.length,s=0;s<o;s++)i[s](a)};tr.prototype.State=U7;var j7=tr,V7=function(n){var e={};e.src_Any=mc.source,e.src_Cc=gc.source,e.src_Z=bc.source,e.src_P=vi.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var t="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+t+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+t+"|"+e.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]).|"+(n&&n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+").|;(?!"+e.src_ZCc+").|\\!+(?!"+e.src_ZCc+"|[!]).|\\?(?!"+e.src_ZCc+"|[?]).)+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e};function Us(n){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(t){!t||Object.keys(t).forEach(function(r){n[r]=t[r]})}),n}function es(n){return Object.prototype.toString.call(n)}function G7(n){return es(n)==="[object String]"}function W7(n){return es(n)==="[object Object]"}function Z7(n){return es(n)==="[object RegExp]"}function ua(n){return es(n)==="[object Function]"}function K7(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Ec={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Y7(n){return Object.keys(n||{}).reduce(function(e,t){return e||Ec.hasOwnProperty(t)},!1)}var X7={"http:":{validate:function(n,e,t){var r=n.slice(e);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,t){var r=n.slice(e);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,t){var r=n.slice(e);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},J7="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Q7="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function eV(n){n.__index__=-1,n.__text_cache__=""}function tV(n){return function(e,t){var r=e.slice(t);return n.test(r)?r.match(n)[0].length:0}}function ha(){return function(n,e){e.normalize(n)}}function Lr(n){var e=n.re=V7(n.__opts__),t=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||t.push(J7),t.push(e.src_xn),e.src_tlds=t.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];n.__compiled__={};function i(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(n.__schemas__).forEach(function(a){var c=n.__schemas__[a];if(c!==null){var l={validate:null,link:null};if(n.__compiled__[a]=l,W7(c)){Z7(c.validate)?l.validate=tV(c.validate):ua(c.validate)?l.validate=c.validate:i(a,c),ua(c.normalize)?l.normalize=c.normalize:c.normalize?i(a,c):l.normalize=ha();return}if(G7(c)){s.push(a);return}i(a,c)}}),s.forEach(function(a){!n.__compiled__[n.__schemas__[a]]||(n.__compiled__[a].validate=n.__compiled__[n.__schemas__[a]].validate,n.__compiled__[a].normalize=n.__compiled__[n.__schemas__[a]].normalize)}),n.__compiled__[""]={validate:null,normalize:ha()};var o=Object.keys(n.__compiled__).filter(function(a){return a.length>0&&n.__compiled__[a]}).map(K7).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","ig"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),eV(n)}function nV(n,e){var t=n.__index__,r=n.__last_index__,s=n.__text_cache__.slice(t,r);this.schema=n.__schema__.toLowerCase(),this.index=t+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function da(n,e){var t=new nV(n,e);return n.__compiled__[t.schema].normalize(t,n),t}function je(n,e){if(!(this instanceof je))return new je(n,e);e||Y7(n)&&(e=n,n={}),this.__opts__=Us({},Ec,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Us({},X7,n),this.__compiled__={},this.__tlds__=Q7,this.__tlds_replaced__=!1,this.re={},Lr(this)}je.prototype.add=function(e,t){return this.__schemas__[e]=t,Lr(this),this};je.prototype.set=function(e){return this.__opts__=Us(this.__opts__,e),this};je.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var t,r,s,i,o,a,c,l,u;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(e))!==null;)if(i=this.testSchemaAt(e,t[2],c.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,a=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};je.prototype.pretest=function(e){return this.re.pretest.test(e)};je.prototype.testSchemaAt=function(e,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,r,this):0};je.prototype.match=function(e){var t=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(da(this,t)),t=this.__last_index__);for(var s=t?e.slice(t):e;this.test(s);)r.push(da(this,t)),s=s.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null};je.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),Lr(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Lr(this),this)};je.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};je.prototype.onCompile=function(){};var rV=je;const an=2147483647,rt=36,Ei=1,Fn=26,sV=38,iV=700,Ac=72,Sc=128,Cc="-",oV=/^xn--/,aV=/[^\0-\x7E]/,cV=/[\x2E\u3002\uFF0E\uFF61]/g,lV={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},$s=rt-Ei,st=Math.floor,Rs=String.fromCharCode;function Ft(n){throw new RangeError(lV[n])}function uV(n,e){const t=[];let r=n.length;for(;r--;)t[r]=e(n[r]);return t}function Tc(n,e){const t=n.split("@");let r="";t.length>1&&(r=t[0]+"@",n=t[1]),n=n.replace(cV,".");const s=n.split("."),i=uV(s,e).join(".");return r+i}function Ai(n){const e=[];let t=0;const r=n.length;for(;t<r;){const s=n.charCodeAt(t++);if(s>=55296&&s<=56319&&t<r){const i=n.charCodeAt(t++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),t--)}else e.push(s)}return e}const $c=n=>String.fromCodePoint(...n),hV=function(n){return n-48<10?n-22:n-65<26?n-65:n-97<26?n-97:rt},pa=function(n,e){return n+22+75*(n<26)-((e!=0)<<5)},Rc=function(n,e,t){let r=0;for(n=t?st(n/iV):n>>1,n+=st(n/e);n>$s*Fn>>1;r+=rt)n=st(n/$s);return st(r+($s+1)*n/(n+sV))},Si=function(n){const e=[],t=n.length;let r=0,s=Sc,i=Ac,o=n.lastIndexOf(Cc);o<0&&(o=0);for(let a=0;a<o;++a)n.charCodeAt(a)>=128&&Ft("not-basic"),e.push(n.charCodeAt(a));for(let a=o>0?o+1:0;a<t;){let c=r;for(let u=1,h=rt;;h+=rt){a>=t&&Ft("invalid-input");const d=hV(n.charCodeAt(a++));(d>=rt||d>st((an-r)/u))&&Ft("overflow"),r+=d*u;const p=h<=i?Ei:h>=i+Fn?Fn:h-i;if(d<p)break;const k=rt-p;u>st(an/k)&&Ft("overflow"),u*=k}const l=e.length+1;i=Rc(r-c,l,c==0),st(r/l)>an-s&&Ft("overflow"),s+=st(r/l),r%=l,e.splice(r++,0,s)}return String.fromCodePoint(...e)},Ci=function(n){const e=[];n=Ai(n);let t=n.length,r=Sc,s=0,i=Ac;for(const c of n)c<128&&e.push(Rs(c));let o=e.length,a=o;for(o&&e.push(Cc);a<t;){let c=an;for(const u of n)u>=r&&u<c&&(c=u);const l=a+1;c-r>st((an-s)/l)&&Ft("overflow"),s+=(c-r)*l,r=c;for(const u of n)if(u<r&&++s>an&&Ft("overflow"),u==r){let h=s;for(let d=rt;;d+=rt){const p=d<=i?Ei:d>=i+Fn?Fn:d-i;if(h<p)break;const k=h-p,b=rt-p;e.push(Rs(pa(p+k%b,0))),h=st(k/b)}e.push(Rs(pa(h,0))),i=Rc(s,l,a==o),s=0,++a}++s,++r}return e.join("")},Dc=function(n){return Tc(n,function(e){return oV.test(e)?Si(e.slice(4).toLowerCase()):e})},Lc=function(n){return Tc(n,function(e){return aV.test(e)?"xn--"+Ci(e):e})},dV={version:"2.1.0",ucs2:{decode:Ai,encode:$c},decode:Si,encode:Ci,toASCII:Lc,toUnicode:Dc};var pV=Object.freeze(Object.defineProperty({__proto__:null,ucs2decode:Ai,ucs2encode:$c,decode:Si,encode:Ci,toASCII:Lc,toUnicode:Dc,default:dV},Symbol.toStringTag,{value:"Module"})),fV=$d(pV),mV={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},gV={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},bV={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}},On=ne,vV=Zr,yV=b6,_V=B6,kV=v7,wV=j7,xV=rV,Bt=vn,Mc=fV,EV={default:mV,zero:gV,commonmark:bV},AV=/^(vbscript|javascript|file|data):/,SV=/^data:image\/(gif|png|jpeg|webp);/;function CV(n){var e=n.trim().toLowerCase();return AV.test(e)?!!SV.test(e):!0}var Oc=["http:","https:","mailto:"];function TV(n){var e=Bt.parse(n,!0);if(e.hostname&&(!e.protocol||Oc.indexOf(e.protocol)>=0))try{e.hostname=Mc.toASCII(e.hostname)}catch{}return Bt.encode(Bt.format(e))}function $V(n){var e=Bt.parse(n,!0);if(e.hostname&&(!e.protocol||Oc.indexOf(e.protocol)>=0))try{e.hostname=Mc.toUnicode(e.hostname)}catch{}return Bt.decode(Bt.format(e),Bt.decode.defaultChars+"%")}function Ve(n,e){if(!(this instanceof Ve))return new Ve(n,e);e||On.isString(n)||(e=n||{},n="default"),this.inline=new wV,this.block=new kV,this.core=new _V,this.renderer=new yV,this.linkify=new xV,this.validateLink=CV,this.normalizeLink=TV,this.normalizeLinkText=$V,this.utils=On,this.helpers=On.assign({},vV),this.options={},this.configure(n),e&&this.set(e)}Ve.prototype.set=function(n){return On.assign(this.options,n),this};Ve.prototype.configure=function(n){var e=this,t;if(On.isString(n)&&(t=n,n=EV[t],!n))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(r){n.components[r].rules&&e[r].ruler.enableOnly(n.components[r].rules),n.components[r].rules2&&e[r].ruler2.enableOnly(n.components[r].rules2)}),this};Ve.prototype.enable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(s){t=t.concat(this[s].ruler.enable(n,!0))},this),t=t.concat(this.inline.ruler2.enable(n,!0));var r=n.filter(function(s){return t.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Ve.prototype.disable=function(n,e){var t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(s){t=t.concat(this[s].ruler.disable(n,!0))},this),t=t.concat(this.inline.ruler2.disable(n,!0));var r=n.filter(function(s){return t.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Ve.prototype.use=function(n){var e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};Ve.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");var t=new this.core.State(n,this,e);return this.core.process(t),t.tokens};Ve.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};Ve.prototype.parseInline=function(n,e){var t=new this.core.State(n,this,e);return t.inlineMode=!0,this.core.process(t),t.tokens};Ve.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};var RV=Ve,DV=RV,Ti={exports:{}};function $i(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(function(e){var t=n[e];typeof t=="object"&&!Object.isFrozen(t)&&$i(t)}),n}Ti.exports=$i;Ti.exports.default=$i;var LV=Ti.exports;class fa{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Nc(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function St(n,...e){const t=Object.create(null);for(const r in n)t[r]=n[r];return e.forEach(function(r){for(const s in r)t[s]=r[s]}),t}const MV="</span>",ma=n=>!!n.kind,OV=(n,{prefix:e})=>{if(n.includes(".")){const t=n.split(".");return[`${e}${t.shift()}`,...t.map((r,s)=>`${r}${"_".repeat(s+1)}`)].join(" ")}return`${e}${n}`};class NV{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=Nc(e)}openNode(e){if(!ma(e))return;let t=e.kind;e.sublanguage?t=`language-${t}`:t=OV(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){!ma(e)||(this.buffer+=MV)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class Ri{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return typeof t=="string"?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(r=>this._walk(e,r)),e.closeNode(t)),e}static _collapse(e){typeof e!="string"&&(!e.children||(e.children.every(t=>typeof t=="string")?e.children=[e.children.join("")]:e.children.forEach(t=>{Ri._collapse(t)})))}}class IV extends Ri{constructor(e){super();this.options=e}addKeyword(e,t){e!==""&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){e!==""&&this.add(e)}addSublanguage(e,t){const r=e.root;r.kind=t,r.sublanguage=!0,this.add(r)}toHTML(){return new NV(this,this.options).value()}finalize(){return!0}}function Bn(n){return n?typeof n=="string"?n:n.source:null}function Ic(n){return Wt("(?=",n,")")}function PV(n){return Wt("(?:",n,")*")}function qV(n){return Wt("(?:",n,")?")}function Wt(...n){return n.map(t=>Bn(t)).join("")}function FV(n){const e=n[n.length-1];return typeof e=="object"&&e.constructor===Object?(n.splice(n.length-1,1),e):{}}function Di(...n){const e=FV(n);return"("+(e.capture?"":"?:")+n.map(r=>Bn(r)).join("|")+")"}function Pc(n){return new RegExp(n.toString()+"|").exec("").length-1}function BV(n,e){const t=n&&n.exec(e);return t&&t.index===0}const zV=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Li(n,{joinWith:e}){let t=0;return n.map(r=>{t+=1;const s=t;let i=Bn(r),o="";for(;i.length>0;){const a=zV.exec(i);if(!a){o+=i;break}o+=i.substring(0,a.index),i=i.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+s):(o+=a[0],a[0]==="("&&t++)}return o}).map(r=>`(${r})`).join(e)}const HV=/\b\B/,qc="[a-zA-Z]\\w*",Mi="[a-zA-Z_]\\w*",Fc="\\b\\d+(\\.\\d+)?",Bc="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",zc="\\b(0b[01]+)",UV="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",jV=(n={})=>{const e=/^#![ ]*\//;return n.binary&&(n.begin=Wt(e,/.*\b/,n.binary,/\b.*/)),St({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(t,r)=>{t.index!==0&&r.ignoreMatch()}},n)},zn={begin:"\\\\[\\s\\S]",relevance:0},VV={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[zn]},GV={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[zn]},WV={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ts=function(n,e,t={}){const r=St({scope:"comment",begin:n,end:e,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=Di("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:Wt(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},ZV=ts("//","$"),KV=ts("/\\*","\\*/"),YV=ts("#","$"),XV={scope:"number",begin:Fc,relevance:0},JV={scope:"number",begin:Bc,relevance:0},QV={scope:"number",begin:zc,relevance:0},e8={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[zn,{begin:/\[/,end:/\]/,relevance:0,contains:[zn]}]}]},t8={scope:"title",begin:qc,relevance:0},n8={scope:"title",begin:Mi,relevance:0},r8={begin:"\\.\\s*"+Mi,relevance:0},s8=function(n){return Object.assign(n,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var yr=Object.freeze({__proto__:null,MATCH_NOTHING_RE:HV,IDENT_RE:qc,UNDERSCORE_IDENT_RE:Mi,NUMBER_RE:Fc,C_NUMBER_RE:Bc,BINARY_NUMBER_RE:zc,RE_STARTERS_RE:UV,SHEBANG:jV,BACKSLASH_ESCAPE:zn,APOS_STRING_MODE:VV,QUOTE_STRING_MODE:GV,PHRASAL_WORDS_MODE:WV,COMMENT:ts,C_LINE_COMMENT_MODE:ZV,C_BLOCK_COMMENT_MODE:KV,HASH_COMMENT_MODE:YV,NUMBER_MODE:XV,C_NUMBER_MODE:JV,BINARY_NUMBER_MODE:QV,REGEXP_MODE:e8,TITLE_MODE:t8,UNDERSCORE_TITLE_MODE:n8,METHOD_GUARD:r8,END_SAME_AS_BEGIN:s8});function i8(n,e){n.input[n.index-1]==="."&&e.ignoreMatch()}function o8(n,e){n.className!==void 0&&(n.scope=n.className,delete n.className)}function a8(n,e){!e||!n.beginKeywords||(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=i8,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function c8(n,e){!Array.isArray(n.illegal)||(n.illegal=Di(...n.illegal))}function l8(n,e){if(!!n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function u8(n,e){n.relevance===void 0&&(n.relevance=1)}const h8=(n,e)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},n);Object.keys(n).forEach(r=>{delete n[r]}),n.keywords=t.keywords,n.begin=Wt(t.beforeMatch,Ic(t.begin)),n.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},n.relevance=0,delete t.beforeMatch},d8=["of","and","for","in","not","or","if","then","parent","list","value"],p8="keyword";function Hc(n,e,t=p8){const r=Object.create(null);return typeof n=="string"?s(t,n.split(" ")):Array.isArray(n)?s(t,n):Object.keys(n).forEach(function(i){Object.assign(r,Hc(n[i],e,i))}),r;function s(i,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const c=a.split("|");r[c[0]]=[i,f8(c[0],c[1])]})}}function f8(n,e){return e?Number(e):m8(n)?0:1}function m8(n){return d8.includes(n.toLowerCase())}const ga={},Ht=n=>{console.error(n)},ba=(n,...e)=>{console.log(`WARN: ${n}`,...e)},tn=(n,e)=>{ga[`${n}/${e}`]||(console.log(`Deprecated as of ${n}. ${e}`),ga[`${n}/${e}`]=!0)},Mr=new Error;function Uc(n,e,{key:t}){let r=0;const s=n[t],i={},o={};for(let a=1;a<=e.length;a++)o[a+r]=s[a],i[a+r]=!0,r+=Pc(e[a-1]);n[t]=o,n[t]._emit=i,n[t]._multi=!0}function g8(n){if(!!Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw Ht("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Mr;if(typeof n.beginScope!="object"||n.beginScope===null)throw Ht("beginScope must be object"),Mr;Uc(n,n.begin,{key:"beginScope"}),n.begin=Li(n.begin,{joinWith:""})}}function b8(n){if(!!Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw Ht("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Mr;if(typeof n.endScope!="object"||n.endScope===null)throw Ht("endScope must be object"),Mr;Uc(n,n.end,{key:"endScope"}),n.end=Li(n.end,{joinWith:""})}}function v8(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function y8(n){v8(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),g8(n),b8(n)}function _8(n){function e(o,a){return new RegExp(Bn(o),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(a?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,a]),this.matchAt+=Pc(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(c=>c[1]);this.matcherRe=e(Li(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(a);if(!c)return null;const l=c.findIndex((h,d)=>d>0&&h!==void 0),u=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,u)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const c=new t;return this.rules.slice(a).forEach(([l,u])=>c.addRule(l,u)),c.compile(),this.multiRegexes[a]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,c){this.rules.push([a,c]),c.type==="begin"&&this.count++}exec(a){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(a);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,l=u.exec(a)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function s(o){const a=new r;return o.contains.forEach(c=>a.addRule(c.begin,{rule:c,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function i(o,a){const c=o;if(o.isCompiled)return c;[o8,l8,y8,h8].forEach(u=>u(o,a)),n.compilerExtensions.forEach(u=>u(o,a)),o.__beforeBegin=null,[a8,c8,u8].forEach(u=>u(o,a)),o.isCompiled=!0;let l=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),l=o.keywords.$pattern,delete o.keywords.$pattern),l=l||/\w+/,o.keywords&&(o.keywords=Hc(o.keywords,n.case_insensitive)),c.keywordPatternRe=e(l,!0),a&&(o.begin||(o.begin=/\B|\b/),c.beginRe=e(c.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(c.endRe=e(c.end)),c.terminatorEnd=Bn(c.end)||"",o.endsWithParent&&a.terminatorEnd&&(c.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(c.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(u){return k8(u==="self"?o:u)})),o.contains.forEach(function(u){i(u,c)}),o.starts&&i(o.starts,a),c.matcher=s(c),c}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=St(n.classNameAliases||{}),i(n)}function jc(n){return n?n.endsWithParent||jc(n.starts):!1}function k8(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(e){return St(n,{variants:null},e)})),n.cachedVariants?n.cachedVariants:jc(n)?St(n,{starts:n.starts?St(n.starts):null}):Object.isFrozen(n)?St(n):n}var w8="11.5.1";class x8 extends Error{constructor(e,t){super(e);this.name="HTMLInjectionError",this.html=t}}const Ds=Nc,va=St,ya=Symbol("nomatch"),E8=7,A8=function(n){const e=Object.create(null),t=Object.create(null),r=[];let s=!0;const i="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:IV};function c(f){return a.noHighlightRe.test(f)}function l(f){let m=f.className+" ";m+=f.parentNode?f.parentNode.className:"";const A=a.languageDetectRe.exec(m);if(A){const C=V(A[1]);return C||(ba(i.replace("{}",A[1])),ba("Falling back to no-highlight mode for this block.",f)),C?A[1]:"no-highlight"}return m.split(/\s+/).find(C=>c(C)||V(C))}function u(f,m,A){let C="",I="";typeof m=="object"?(C=f,A=m.ignoreIllegals,I=m.language):(tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),I=f,C=m),A===void 0&&(A=!0);const F={code:C,language:I};v("before:highlight",F);const Z=F.result?F.result:h(F.language,F.code,A);return Z.code=F.code,v("after:highlight",Z),Z}function h(f,m,A,C){const I=Object.create(null);function F(O,z){return O.keywords[z]}function Z(){if(!G.keywords){he.addText(te);return}let O=0;G.keywordPatternRe.lastIndex=0;let z=G.keywordPatternRe.exec(te),Y="";for(;z;){Y+=te.substring(O,z.index);const ee=Be.case_insensitive?z[0].toLowerCase():z[0],ge=F(G,ee);if(ge){const[ve,Xt]=ge;if(he.addText(Y),Y="",I[ee]=(I[ee]||0)+1,I[ee]<=E8&&(Ye+=Xt),ve.startsWith("_"))Y+=z[0];else{const Sn=Be.classNameAliases[ve]||ve;he.addKeyword(z[0],Sn)}}else Y+=z[0];O=G.keywordPatternRe.lastIndex,z=G.keywordPatternRe.exec(te)}Y+=te.substr(O),he.addText(Y)}function W(){if(te==="")return;let O=null;if(typeof G.subLanguage=="string"){if(!e[G.subLanguage]){he.addText(te);return}O=h(G.subLanguage,te,!0,An[G.subLanguage]),An[G.subLanguage]=O._top}else O=p(te,G.subLanguage.length?G.subLanguage:null);G.relevance>0&&(Ye+=O.relevance),he.addSublanguage(O._emitter,O.language)}function re(){G.subLanguage!=null?W():Z(),te=""}function J(O,z){let Y=1;const ee=z.length-1;for(;Y<=ee;){if(!O._emit[Y]){Y++;continue}const ge=Be.classNameAliases[O[Y]]||O[Y],ve=z[Y];ge?he.addKeyword(ve,ge):(te=ve,Z(),te=""),Y++}}function De(O,z){return O.scope&&typeof O.scope=="string"&&he.openNode(Be.classNameAliases[O.scope]||O.scope),O.beginScope&&(O.beginScope._wrap?(he.addKeyword(te,Be.classNameAliases[O.beginScope._wrap]||O.beginScope._wrap),te=""):O.beginScope._multi&&(J(O.beginScope,z),te="")),G=Object.create(O,{parent:{value:G}}),G}function qe(O,z,Y){let ee=BV(O.endRe,Y);if(ee){if(O["on:end"]){const ge=new fa(O);O["on:end"](z,ge),ge.isMatchIgnored&&(ee=!1)}if(ee){for(;O.endsParent&&O.parent;)O=O.parent;return O}}if(O.endsWithParent)return qe(O.parent,z,Y)}function Ke(O){return G.matcher.regexIndex===0?(te+=O[0],1):(Yt=!0,0)}function me(O){const z=O[0],Y=O.rule,ee=new fa(Y),ge=[Y.__beforeBegin,Y["on:begin"]];for(const ve of ge)if(!!ve&&(ve(O,ee),ee.isMatchIgnored))return Ke(z);return Y.skip?te+=z:(Y.excludeBegin&&(te+=z),re(),!Y.returnBegin&&!Y.excludeBegin&&(te=z)),De(Y,O),Y.returnBegin?0:z.length}function Ie(O){const z=O[0],Y=m.substr(O.index),ee=qe(G,O,Y);if(!ee)return ya;const ge=G;G.endScope&&G.endScope._wrap?(re(),he.addKeyword(z,G.endScope._wrap)):G.endScope&&G.endScope._multi?(re(),J(G.endScope,O)):ge.skip?te+=z:(ge.returnEnd||ge.excludeEnd||(te+=z),re(),ge.excludeEnd&&(te=z));do G.scope&&he.closeNode(),!G.skip&&!G.subLanguage&&(Ye+=G.relevance),G=G.parent;while(G!==ee.parent);return ee.starts&&De(ee.starts,O),ge.returnEnd?0:z.length}function Fe(){const O=[];for(let z=G;z!==Be;z=z.parent)z.scope&&O.unshift(z.scope);O.forEach(z=>he.openNode(z))}let _e={};function Zt(O,z){const Y=z&&z[0];if(te+=O,Y==null)return re(),0;if(_e.type==="begin"&&z.type==="end"&&_e.index===z.index&&Y===""){if(te+=m.slice(z.index,z.index+1),!s){const ee=new Error(`0 width match regex (${f})`);throw ee.languageName=f,ee.badRule=_e.rule,ee}return 1}if(_e=z,z.type==="begin")return me(z);if(z.type==="illegal"&&!A){const ee=new Error('Illegal lexeme "'+Y+'" for mode "'+(G.scope||"<unnamed>")+'"');throw ee.mode=G,ee}else if(z.type==="end"){const ee=Ie(z);if(ee!==ya)return ee}if(z.type==="illegal"&&Y==="")return 1;if(Kt>1e5&&Kt>z.index*3)throw new Error("potential infinite loop, way more iterations than matches");return te+=Y,Y.length}const Be=V(f);if(!Be)throw Ht(i.replace("{}",f)),new Error('Unknown language: "'+f+'"');const kt=_8(Be);let wt="",G=C||kt;const An={},he=new a.__emitter(a);Fe();let te="",Ye=0,Le=0,Kt=0,Yt=!1;try{for(G.matcher.considerAll();;){Kt++,Yt?Yt=!1:G.matcher.considerAll(),G.matcher.lastIndex=Le;const O=G.matcher.exec(m);if(!O)break;const z=m.substring(Le,O.index),Y=Zt(z,O);Le=O.index+Y}return Zt(m.substr(Le)),he.closeAllNodes(),he.finalize(),wt=he.toHTML(),{language:f,value:wt,relevance:Ye,illegal:!1,_emitter:he,_top:G}}catch(O){if(O.message&&O.message.includes("Illegal"))return{language:f,value:Ds(m),illegal:!0,relevance:0,_illegalBy:{message:O.message,index:Le,context:m.slice(Le-100,Le+100),mode:O.mode,resultSoFar:wt},_emitter:he};if(s)return{language:f,value:Ds(m),illegal:!1,relevance:0,errorRaised:O,_emitter:he,_top:G};throw O}}function d(f){const m={value:Ds(f),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return m._emitter.addText(f),m}function p(f,m){m=m||a.languages||Object.keys(e);const A=d(f),C=m.filter(V).filter(X).map(re=>h(re,f,!1));C.unshift(A);const I=C.sort((re,J)=>{if(re.relevance!==J.relevance)return J.relevance-re.relevance;if(re.language&&J.language){if(V(re.language).supersetOf===J.language)return 1;if(V(J.language).supersetOf===re.language)return-1}return 0}),[F,Z]=I,W=F;return W.secondBest=Z,W}function k(f,m,A){const C=m&&t[m]||A;f.classList.add("hljs"),f.classList.add(`language-${C}`)}function b(f){let m=null;const A=l(f);if(c(A))return;if(v("before:highlightElement",{el:f,language:A}),f.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(f)),a.throwUnescapedHTML))throw new x8("One of your code blocks includes unescaped HTML.",f.innerHTML);m=f;const C=m.textContent,I=A?u(C,{language:A,ignoreIllegals:!0}):p(C);f.innerHTML=I.value,k(f,A,I.language),f.result={language:I.language,re:I.relevance,relevance:I.relevance},I.secondBest&&(f.secondBest={language:I.secondBest.language,relevance:I.secondBest.relevance}),v("after:highlightElement",{el:f,result:I,text:C})}function x(f){a=va(a,f)}const _=()=>{R(),tn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function y(){R(),tn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let w=!1;function R(){if(document.readyState==="loading"){w=!0;return}document.querySelectorAll(a.cssSelector).forEach(b)}function $(){w&&R()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",$,!1);function E(f,m){let A=null;try{A=m(n)}catch(C){if(Ht("Language definition for '{}' could not be registered.".replace("{}",f)),s)Ht(C);else throw C;A=o}A.name||(A.name=f),e[f]=A,A.rawDefinition=m.bind(null,n),A.aliases&&L(A.aliases,{languageName:f})}function B(f){delete e[f];for(const m of Object.keys(t))t[m]===f&&delete t[m]}function H(){return Object.keys(e)}function V(f){return f=(f||"").toLowerCase(),e[f]||e[t[f]]}function L(f,{languageName:m}){typeof f=="string"&&(f=[f]),f.forEach(A=>{t[A.toLowerCase()]=m})}function X(f){const m=V(f);return m&&!m.disableAutodetect}function ue(f){f["before:highlightBlock"]&&!f["before:highlightElement"]&&(f["before:highlightElement"]=m=>{f["before:highlightBlock"](Object.assign({block:m.el},m))}),f["after:highlightBlock"]&&!f["after:highlightElement"]&&(f["after:highlightElement"]=m=>{f["after:highlightBlock"](Object.assign({block:m.el},m))})}function N(f){ue(f),r.push(f)}function v(f,m){const A=f;r.forEach(function(C){C[A]&&C[A](m)})}function S(f){return tn("10.7.0","highlightBlock will be removed entirely in v12.0"),tn("10.7.0","Please use highlightElement now."),b(f)}Object.assign(n,{highlight:u,highlightAuto:p,highlightAll:R,highlightElement:b,highlightBlock:S,configure:x,initHighlighting:_,initHighlightingOnLoad:y,registerLanguage:E,unregisterLanguage:B,listLanguages:H,getLanguage:V,registerAliases:L,autoDetection:X,inherit:va,addPlugin:N}),n.debugMode=function(){s=!1},n.safeMode=function(){s=!0},n.versionString=w8,n.regex={concat:Wt,lookahead:Ic,either:Di,optional:qV,anyNumberOfTimes:PV};for(const f in yr)typeof yr[f]=="object"&&LV(yr[f]);return Object.assign(n,yr),n};var Hn=A8({}),S8=Hn;Hn.HighlightJS=Hn;Hn.default=Hn;var C8=S8;function T8(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var r=Array.from(typeof n=="string"?[n]:n);r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");var s=r.reduce(function(a,c){var l=c.match(/\n([\t ]+|(?!\s).)/g);return l?a.concat(l.map(function(u){var h,d;return(d=(h=u.match(/[\t ]/g))===null||h===void 0?void 0:h.length)!==null&&d!==void 0?d:0})):a},[]);if(s.length){var i=new RegExp(`
[	 ]{`+Math.min.apply(Math,s)+"}","g");r=r.map(function(a){return a.replace(i,`
`)})}r[0]=r[0].replace(/^\r?\n/,"");var o=r[0];return e.forEach(function(a,c){var l=o.match(/(?:^|\n)( *)$/),u=l?l[1]:"",h=a;typeof a=="string"&&a.includes(`
`)&&(h=String(a).split(`
`).map(function(d,p){return p===0?d:""+u+d}).join(`
`)),o+=h+r[c+1]}),o}const $8=le`
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
`;var R8=Object.defineProperty,D8=Object.getOwnPropertyDescriptor,Vc=(n,e,t,r)=>{for(var s=r>1?void 0:r?D8(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&R8(e,t,s),s};let pe=class extends oe{static registerHighlightStyle(n){pe.hightlightStyle=n}static registerHighlightLanguage(n,e){pe.hljs.registerLanguage(n,e)}static use(n){this.plugins.push(n)}constructor(){super();this.content="",this.parser=new DV({highlight:this.setupHighlight.bind(this)}),pe.plugins.forEach(n=>this.parser.use(n))}isScriptMarkdown(n){return n instanceof HTMLScriptElement&&n.type==="text/markdown"}setupHighlight(n,e){if(e&&pe.hljs.getLanguage(e))try{return`<pre class="hljs"><code class="hljs__code">${this.renderHighlight(n,e)}</code></pre>`}catch{return""}return`<pre><code>${this.parser.utils.escapeHtml(n)}</code></pre>`}registerMarkdown(){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("slot");if(!n||this.observer)return;const t=n.assignedNodes({flatten:!0}).find(this.isScriptMarkdown.bind(this));!t||(this.observer=new MutationObserver(()=>this.updateMarkdown(t)),this.observer.observe(t,{childList:!0}),this.updateMarkdown(t))}updateMarkdown(n){const e=n.innerText.replace(/&lt;(\/?script)(.*?)&gt;/g,"<$1$2>");this.content=T8(e.trim())}renderHighlight(n,e){const{value:t}=pe.hljs.highlight(n,{language:e,ignoreIllegals:!0});return t}render(){return M`
      <style>
        ${Pa(pe.hightlightStyle)}
      </style>
      <slot style="display: none" @slotchange=${this.registerMarkdown}></slot>
      <article>
        ${qn(this.parser.render(this.content))}
      </article>
    `}};pe.styles=$8;pe.plugins=[];pe.hljs=C8;pe.hightlightStyle="";Vc([ot()],pe.prototype,"content",2);pe=Vc([fe("kami-markdown")],pe);var Un=(n=>(n.GITHUB="github",n.GITLAB="gitlab",n))(Un||{}),Gc={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(Td,function(){var t=1e3,r=6e4,s=36e5,i="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",d="quarter",p="year",k="date",b="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},w=function(N,v,S){var f=String(N);return!f||f.length>=v?N:""+Array(v+1-f.length).join(S)+N},R={s:w,z:function(N){var v=-N.utcOffset(),S=Math.abs(v),f=Math.floor(S/60),m=S%60;return(v<=0?"+":"-")+w(f,2,"0")+":"+w(m,2,"0")},m:function N(v,S){if(v.date()<S.date())return-N(S,v);var f=12*(S.year()-v.year())+(S.month()-v.month()),m=v.clone().add(f,h),A=S-m<0,C=v.clone().add(f+(A?-1:1),h);return+(-(f+(S-m)/(A?m-C:C-m))||0)},a:function(N){return N<0?Math.ceil(N)||0:Math.floor(N)},p:function(N){return{M:h,y:p,w:u,d:l,D:k,h:c,m:a,s:o,ms:i,Q:d}[N]||String(N||"").toLowerCase().replace(/s$/,"")},u:function(N){return N===void 0}},$="en",E={};E[$]=y;var B=function(N){return N instanceof X},H=function N(v,S,f){var m;if(!v)return $;if(typeof v=="string"){var A=v.toLowerCase();E[A]&&(m=A),S&&(E[A]=S,m=A);var C=v.split("-");if(!m&&C.length>1)return N(C[0])}else{var I=v.name;E[I]=v,m=I}return!f&&m&&($=m),m||!f&&$},V=function(N,v){if(B(N))return N.clone();var S=typeof v=="object"?v:{};return S.date=N,S.args=arguments,new X(S)},L=R;L.l=H,L.i=B,L.w=function(N,v){return V(N,{locale:v.$L,utc:v.$u,x:v.$x,$offset:v.$offset})};var X=function(){function N(S){this.$L=H(S.locale,null,!0),this.parse(S)}var v=N.prototype;return v.parse=function(S){this.$d=function(f){var m=f.date,A=f.utc;if(m===null)return new Date(NaN);if(L.u(m))return new Date;if(m instanceof Date)return new Date(m);if(typeof m=="string"&&!/Z$/i.test(m)){var C=m.match(x);if(C){var I=C[2]-1||0,F=(C[7]||"0").substring(0,3);return A?new Date(Date.UTC(C[1],I,C[3]||1,C[4]||0,C[5]||0,C[6]||0,F)):new Date(C[1],I,C[3]||1,C[4]||0,C[5]||0,C[6]||0,F)}}return new Date(m)}(S),this.$x=S.x||{},this.init()},v.init=function(){var S=this.$d;this.$y=S.getFullYear(),this.$M=S.getMonth(),this.$D=S.getDate(),this.$W=S.getDay(),this.$H=S.getHours(),this.$m=S.getMinutes(),this.$s=S.getSeconds(),this.$ms=S.getMilliseconds()},v.$utils=function(){return L},v.isValid=function(){return this.$d.toString()!==b},v.isSame=function(S,f){var m=V(S);return this.startOf(f)<=m&&m<=this.endOf(f)},v.isAfter=function(S,f){return V(S)<this.startOf(f)},v.isBefore=function(S,f){return this.endOf(f)<V(S)},v.$g=function(S,f,m){return L.u(S)?this[f]:this.set(m,S)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(S,f){var m=this,A=!!L.u(f)||f,C=L.p(S),I=function(Ke,me){var Ie=L.w(m.$u?Date.UTC(m.$y,me,Ke):new Date(m.$y,me,Ke),m);return A?Ie:Ie.endOf(l)},F=function(Ke,me){return L.w(m.toDate()[Ke].apply(m.toDate("s"),(A?[0,0,0,0]:[23,59,59,999]).slice(me)),m)},Z=this.$W,W=this.$M,re=this.$D,J="set"+(this.$u?"UTC":"");switch(C){case p:return A?I(1,0):I(31,11);case h:return A?I(1,W):I(0,W+1);case u:var De=this.$locale().weekStart||0,qe=(Z<De?Z+7:Z)-De;return I(A?re-qe:re+(6-qe),W);case l:case k:return F(J+"Hours",0);case c:return F(J+"Minutes",1);case a:return F(J+"Seconds",2);case o:return F(J+"Milliseconds",3);default:return this.clone()}},v.endOf=function(S){return this.startOf(S,!1)},v.$set=function(S,f){var m,A=L.p(S),C="set"+(this.$u?"UTC":""),I=(m={},m[l]=C+"Date",m[k]=C+"Date",m[h]=C+"Month",m[p]=C+"FullYear",m[c]=C+"Hours",m[a]=C+"Minutes",m[o]=C+"Seconds",m[i]=C+"Milliseconds",m)[A],F=A===l?this.$D+(f-this.$W):f;if(A===h||A===p){var Z=this.clone().set(k,1);Z.$d[I](F),Z.init(),this.$d=Z.set(k,Math.min(this.$D,Z.daysInMonth())).$d}else I&&this.$d[I](F);return this.init(),this},v.set=function(S,f){return this.clone().$set(S,f)},v.get=function(S){return this[L.p(S)]()},v.add=function(S,f){var m,A=this;S=Number(S);var C=L.p(f),I=function(W){var re=V(A);return L.w(re.date(re.date()+Math.round(W*S)),A)};if(C===h)return this.set(h,this.$M+S);if(C===p)return this.set(p,this.$y+S);if(C===l)return I(1);if(C===u)return I(7);var F=(m={},m[a]=r,m[c]=s,m[o]=t,m)[C]||1,Z=this.$d.getTime()+S*F;return L.w(Z,this)},v.subtract=function(S,f){return this.add(-1*S,f)},v.format=function(S){var f=this,m=this.$locale();if(!this.isValid())return m.invalidDate||b;var A=S||"YYYY-MM-DDTHH:mm:ssZ",C=L.z(this),I=this.$H,F=this.$m,Z=this.$M,W=m.weekdays,re=m.months,J=function(me,Ie,Fe,_e){return me&&(me[Ie]||me(f,A))||Fe[Ie].substr(0,_e)},De=function(me){return L.s(I%12||12,me,"0")},qe=m.meridiem||function(me,Ie,Fe){var _e=me<12?"AM":"PM";return Fe?_e.toLowerCase():_e},Ke={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Z+1,MM:L.s(Z+1,2,"0"),MMM:J(m.monthsShort,Z,re,3),MMMM:J(re,Z),D:this.$D,DD:L.s(this.$D,2,"0"),d:String(this.$W),dd:J(m.weekdaysMin,this.$W,W,2),ddd:J(m.weekdaysShort,this.$W,W,3),dddd:W[this.$W],H:String(I),HH:L.s(I,2,"0"),h:De(1),hh:De(2),a:qe(I,F,!0),A:qe(I,F,!1),m:String(F),mm:L.s(F,2,"0"),s:String(this.$s),ss:L.s(this.$s,2,"0"),SSS:L.s(this.$ms,3,"0"),Z:C};return A.replace(_,function(me,Ie){return Ie||Ke[me]||C.replace(":","")})},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(S,f,m){var A,C=L.p(f),I=V(S),F=(I.utcOffset()-this.utcOffset())*r,Z=this-I,W=L.m(this,I);return W=(A={},A[p]=W/12,A[h]=W,A[d]=W/3,A[u]=(Z-F)/6048e5,A[l]=(Z-F)/864e5,A[c]=Z/s,A[a]=Z/r,A[o]=Z/t,A)[C]||Z,m?W:L.a(W)},v.daysInMonth=function(){return this.endOf(h).$D},v.$locale=function(){return E[this.$L]},v.locale=function(S,f){if(!S)return this.$L;var m=this.clone(),A=H(S,f,!0);return A&&(m.$L=A),m},v.clone=function(){return L.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},N}(),ue=X.prototype;return V.prototype=ue,[["$ms",i],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",p],["$D",k]].forEach(function(N){ue[N[1]]=function(v){return this.$g(v,N[0],N[1])}}),V.extend=function(N,v){return N.$i||(N(v,X,V),N.$i=!0),V},V.locale=H,V.isDayjs=B,V.unix=function(N){return V(1e3*N)},V.en=E[$],V.Ls=E,V.p={},V})})(Gc);var Or=Gc.exports;class Wc{constructor(e){this.data=e}}class L8 extends Wc{get provider(){return Un.GITHUB}getContent(){return Array.isArray(this.data)?this.data.reduce((e,{body:t})=>e+t,""):this.data.body}getDate(){var e;return Array.isArray(this.data)?Or((e=this.data.pop())==null?void 0:e.published_at).toDate():Or(this.data.published_at).toDate()}}class M8 extends Wc{get provider(){return Un.GITLAB}getContent(){return Array.isArray(this.data)?this.data.reduce((e,{description:t})=>e+t,""):this.data.description}getDate(){var e;return Array.isArray(this.data)?Or((e=this.data.pop())==null?void 0:e.released_at).toDate():Or(this.data.released_at).toDate()}}function O8(n,e){switch(n){case Un.GITHUB:return new L8(e);case Un.GITLAB:return new M8(e);default:throw new TypeError("Provider doesn't exist or is not define !")}}var _a=Object.freeze,Zc=Object.defineProperty,N8=Object.getOwnPropertyDescriptor,wn=(n,e,t,r)=>{for(var s=r>1?void 0:r?N8(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Zc(e,t,s),s},I8=(n,e)=>_a(Zc(n,"raw",{value:_a(e||n.slice())})),ka;customElements.get("kami-markdown")||customElements.define("kami-markdown",pe);customElements.get("kami-transition")||customElements.define("kami-transition",we);let Rt=class extends oe{constructor(){super(...arguments);this.display=!1}get hasRelease(){return this.release&&this.release.getContent()!==void 0&&this.release.getContent()!==""}async connectedCallback(){if(super.connectedCallback(),!this.src)throw new Error("Missing src attribute !");if(!this.provider)throw new Error("Missing provider attribute !");const e=await(await fetch(this.src)).json();this.release=O8(this.provider,e)}toggleDisplay(){this.display=!this.display}releaseTemplate(n){return M(ka||(ka=I8([`
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
            <div slot="in">${this.btnTemplate(Vr)}</div>
            <div slot="out">${this.btnTemplate(yd)}</div>
          </kami-transition>
        </div>
      </kami-transition>
    `}};Rt.styles=le`
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
  `;wn([D()],Rt.prototype,"src",2);wn([D()],Rt.prototype,"provider",2);wn([D()],Rt.prototype,"header",2);wn([ot()],Rt.prototype,"release",2);wn([ot()],Rt.prototype,"display",2);Rt=wn([fe("kami-changelog")],Rt);var P8=Object.defineProperty,q8=Object.getOwnPropertyDescriptor,xn=(n,e,t,r)=>{for(var s=r>1?void 0:r?q8(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&P8(e,t,s),s};customElements.get("kami-transition")||customElements.define("kami-transition",we);let vt=class extends oe{constructor(){super(...arguments);this.value="",this.sort=1,this.placeholder="",this.disableSort=!1}get sortIcon(){return this.sort===-1?Sd:Ad}emitSortEvent(n){this.dispatchEvent(new CustomEvent("sort",{detail:{sort:n}}))}emitValueEvent(n){this.dispatchEvent(new CustomEvent(n,{detail:{search:this.value}}))}emitClearEvent(){this.dispatchEvent(new CustomEvent("clear"))}onSubmit(n){n.preventDefault(),this.emitValueEvent("search")}onInput(n){n.preventDefault(),this.value=this.searchEl.value,this.emitValueEvent("change"),this.value||this.emitClearEvent()}onClear(){this.value="",this.searchEl.value="",this.emitClearEvent()}onSortClicked(){this.sort=this.sort===1?-1:1,this.emitSortEvent(this.sort)}renderIcon(n){return M`
      <svg class="kami-search-bar__icon" viewBox="0 0 24 25">
        <path d=${n}></path>
      </svg>
    `}render(){return M`
      <form @submit="${this.onSubmit}" class="kami-search-bar" autocomplete="off">
        ${this.renderIcon(xd)}

        <input 
          id="search" 
          class="kami-search-bar__input" 
          autocomplete="off" 
          value="${this.value}"
          placeholder="${this.placeholder}"
          @input="${this.onInput}" 
        >

        <div class="kami-search-bar__action">
          <kami-transition transition="slide-x" duration="200" from="10" to="1" show="${this.value!==""}">
            <div @click="${this.onClear}" class="kami-search-bar__close">
              ${this.renderIcon(Vr)}
            </div>
          </kami-transition>

          ${this.disableSort?"":M`
            <div @click="${this.onSortClicked}" class="kami-search-bar__sort">
              ${this.renderIcon(this.sortIcon)}
            </div>
          `}  
        </div>
      </form>
    `}};vt.styles=le`
    :host {
      display: block;

      --kami-search-border-color: rgba(var(--kami-theme-text-rgb), 0.2);
      --kami-search-border-size: 1px;

      --kami-search-background-color: rgba(var(--kami-theme-text-rgb), 0.05);
      --kami-search-background-blur: 4px;

      --kami-search-text-color: var(--kami-theme-text);
      --kami-search-placeholder-color: rgba(var(--kami-theme-text-rgb), 0.3);

      --kami-search-icon-color: rgba(var(--kami-theme-text-rgb), 0.5);
      --kami-search-icon-size: 30px;
    }

    .kami-search-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
      border: solid var(--kami-search-border-size) var(--kami-search-border-color);
      border-radius: 10px;
      padding: 12px 15px;
      box-sizing: border-box;
      background-color: var(--kami-search-background-color);
      backdrop-filter: blur(var(--kami-search-background-blur));
    }

    .kami-search-bar:focus-within {
      outline: 5px auto Highlight;
      outline: 5px auto -webkit-focus-ring-color;
    }

    .kami-search-bar__input {
      flex-grow: 1;
      border: none;
      background: transparent;
      padding: 5px;
      font-size: 20px;
      margin: 0px 10px;
      min-width: 0;
      color: var(--kami-search-text-color);
      outline: none;
    }

    .kami-search-bar__input::placeholder {
      color: var(--kami-search-placeholder-color);
    }

    .kami-search-bar__action {
      display: flex;
    }

    .kami-search-bar__close {
      margin-right: 7px;
      cursor: pointer;
    }

    .kami-search-bar__sort {
      padding-left: 12px;
      border-left: solid 1px var(--kami-search-icon-color);
      cursor: pointer;
    }

    .kami-search-bar__icon {
      fill: var(--kami-search-icon-color);
      width: var(--kami-search-icon-size);
      height: var(--kami-search-icon-size);
    }
  `;xn([D({type:String,reflect:!0})],vt.prototype,"value",2);xn([D({type:Number,reflect:!0})],vt.prototype,"sort",2);xn([D({type:String})],vt.prototype,"placeholder",2);xn([D({type:Boolean,attribute:"disable-sort"})],vt.prototype,"disableSort",2);xn([_t("#search")],vt.prototype,"searchEl",2);vt=xn([fe("kami-search-bar")],vt);/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var F8=Object.prototype.toString,En=Array.isArray||function(e){return F8.call(e)==="[object Array]"};function Oi(n){return typeof n=="function"}function B8(n){return En(n)?"array":typeof n}function Ls(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function wa(n,e){return n!=null&&typeof n=="object"&&e in n}function z8(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var H8=RegExp.prototype.test;function U8(n,e){return H8.call(n,e)}var j8=/\S/;function V8(n){return!U8(j8,n)}var G8={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function W8(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return G8[t]})}var Z8=/\s*/,K8=/\s+/,xa=/\s*=/,Y8=/\s*\}/,X8=/#|\^|\/|>|\{|&|=|!/;function J8(n,e){if(!n)return[];var t=!1,r=[],s=[],i=[],o=!1,a=!1,c="",l=0;function u(){if(o&&!a)for(;i.length;)delete s[i.pop()];else i=[];o=!1,a=!1}var h,d,p;function k(H){if(typeof H=="string"&&(H=H.split(K8,2)),!En(H)||H.length!==2)throw new Error("Invalid tags: "+H);h=new RegExp(Ls(H[0])+"\\s*"),d=new RegExp("\\s*"+Ls(H[1])),p=new RegExp("\\s*"+Ls("}"+H[1]))}k(e||Ge.tags);for(var b=new nr(n),x,_,y,w,R,$;!b.eos();){if(x=b.pos,y=b.scanUntil(h),y)for(var E=0,B=y.length;E<B;++E)w=y.charAt(E),V8(w)?(i.push(s.length),c+=w):(a=!0,t=!0,c+=" "),s.push(["text",w,x,x+1]),x+=1,w===`
`&&(u(),c="",l=0,t=!1);if(!b.scan(h))break;if(o=!0,_=b.scan(X8)||"name",b.scan(Z8),_==="="?(y=b.scanUntil(xa),b.scan(xa),b.scanUntil(d)):_==="{"?(y=b.scanUntil(p),b.scan(Y8),b.scanUntil(d),_="&"):y=b.scanUntil(d),!b.scan(d))throw new Error("Unclosed tag at "+b.pos);if(_==">"?R=[_,y,x,b.pos,c,l,t]:R=[_,y,x,b.pos],l++,s.push(R),_==="#"||_==="^")r.push(R);else if(_==="/"){if($=r.pop(),!$)throw new Error('Unopened section "'+y+'" at '+x);if($[1]!==y)throw new Error('Unclosed section "'+$[1]+'" at '+x)}else _==="name"||_==="{"||_==="&"?a=!0:_==="="&&k(y)}if(u(),$=r.pop(),$)throw new Error('Unclosed section "'+$[1]+'" at '+b.pos);return eG(Q8(s))}function Q8(n){for(var e=[],t,r,s=0,i=n.length;s<i;++s)t=n[s],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function eG(n){for(var e=[],t=e,r=[],s,i,o=0,a=n.length;o<a;++o)switch(s=n[o],s[0]){case"#":case"^":t.push(s),r.push(s),t=s[4]=[];break;case"/":i=r.pop(),i[5]=s[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(s)}return e}function nr(n){this.string=n,this.tail=n,this.pos=0}nr.prototype.eos=function(){return this.tail===""};nr.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};nr.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function dn(n,e){this.view=n,this.cache={".":this.view},this.parent=e}dn.prototype.push=function(e){return new dn(e,this)};dn.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var s=this,i,o,a,c=!1;s;){if(e.indexOf(".")>0)for(i=s.view,o=e.split("."),a=0;i!=null&&a<o.length;)a===o.length-1&&(c=wa(i,o[a])||z8(i,o[a])),i=i[o[a++]];else i=s.view[e],c=wa(s.view,e);if(c){r=i;break}s=s.parent}t[e]=r}return Oi(r)&&(r=r.call(this.view)),r};function Re(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}Re.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};Re.prototype.parse=function(e,t){var r=this.templateCache,s=e+":"+(t||Ge.tags).join(":"),i=typeof r!="undefined",o=i?r.get(s):void 0;return o==null&&(o=J8(e,t),i&&r.set(s,o)),o};Re.prototype.render=function(e,t,r,s){var i=this.getConfigTags(s),o=this.parse(e,i),a=t instanceof dn?t:new dn(t,void 0);return this.renderTokens(o,a,r,e,s)};Re.prototype.renderTokens=function(e,t,r,s,i){for(var o="",a,c,l,u=0,h=e.length;u<h;++u)l=void 0,a=e[u],c=a[0],c==="#"?l=this.renderSection(a,t,r,s,i):c==="^"?l=this.renderInverted(a,t,r,s,i):c===">"?l=this.renderPartial(a,t,r,i):c==="&"?l=this.unescapedValue(a,t):c==="name"?l=this.escapedValue(a,t,i):c==="text"&&(l=this.rawValue(a)),l!==void 0&&(o+=l);return o};Re.prototype.renderSection=function(e,t,r,s,i){var o=this,a="",c=t.lookup(e[1]);function l(d){return o.render(d,t,r,i)}if(!!c){if(En(c))for(var u=0,h=c.length;u<h;++u)a+=this.renderTokens(e[4],t.push(c[u]),r,s,i);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")a+=this.renderTokens(e[4],t.push(c),r,s,i);else if(Oi(c)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(t.view,s.slice(e[3],e[5]),l),c!=null&&(a+=c)}else a+=this.renderTokens(e[4],t,r,s,i);return a}};Re.prototype.renderInverted=function(e,t,r,s,i){var o=t.lookup(e[1]);if(!o||En(o)&&o.length===0)return this.renderTokens(e[4],t,r,s,i)};Re.prototype.indentPartial=function(e,t,r){for(var s=t.replace(/[^ \t]/g,""),i=e.split(`
`),o=0;o<i.length;o++)i[o].length&&(o>0||!r)&&(i[o]=s+i[o]);return i.join(`
`)};Re.prototype.renderPartial=function(e,t,r,s){if(!!r){var i=this.getConfigTags(s),o=Oi(r)?r(e[1]):r[e[1]];if(o!=null){var a=e[6],c=e[5],l=e[4],u=o;c==0&&l&&(u=this.indentPartial(o,l,a));var h=this.parse(u,i);return this.renderTokens(h,t,r,u,s)}}};Re.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};Re.prototype.escapedValue=function(e,t,r){var s=this.getConfigEscape(r)||Ge.escape,i=t.lookup(e[1]);if(i!=null)return typeof i=="number"&&s===Ge.escape?String(i):s(i)};Re.prototype.rawValue=function(e){return e[1]};Re.prototype.getConfigTags=function(e){return En(e)?e:e&&typeof e=="object"?e.tags:void 0};Re.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!En(e))return e.escape};var Ge={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){jn.templateCache=n},get templateCache(){return jn.templateCache}},jn=new Re;Ge.clearCache=function(){return jn.clearCache()};Ge.parse=function(e,t){return jn.parse(e,t)};Ge.render=function(e,t,r,s){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+B8(e)+'" was given as the first argument for mustache#render(template, view, partials)');return jn.render(e,t,r,s)};Ge.escape=W8;Ge.Scanner=nr;Ge.Context=dn;Ge.Writer=Re;var tG=Object.defineProperty,nG=Object.getOwnPropertyDescriptor,be=(n,e,t,r)=>{for(var s=r>1?void 0:r?nG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&tG(e,t,s),s};customElements.get("kami-search-bar")||customElements.define("kami-search-bar",vt);let de=class extends oe{constructor(){super(...arguments);this.page=1,this.limit=10,this.order=0,this.queryLimit="_limit",this.queryPage="_page",this.querySearch="_search",this.querySort="_sort",this.openDelimiter="${",this.closeDelimiter="}",this.loadingAt=0,this.useSearchBar=!1,this.isLoading=!1,this.index=0,this.end=!1,this.data=[]}get delimiters(){return[this.openDelimiter,this.closeDelimiter]}get customSort(){return this.order===1&&this.queryAsc?this.queryAsc:this.order===-1&&this.queryDesc?this.queryDesc:this.order}async firstUpdated(){!(this.querySelector("template")instanceof HTMLTemplateElement)||!this.src||(this.template=this.querySelector("template"),await this.load())}async filter(n){this.search=n,this.clear(),await this.load()}async sort(n){this.order=n,this.clear(),await this.load()}clear(){this.page=1,this.data=[],this.end=!1,this.container.querySelectorAll(".kami-infinite-list__item").forEach(n=>n.remove())}async load(){if(!!this.src){this.isLoading=!0,this.loadingSlot.style.display="block",this.dispatchEvent(new CustomEvent("loading-data"));try{const n=await this.get({src:this.src,limit:this.limit,page:this.page,search:this.search,sort:this.customSort});this.data.push(...n),n.forEach(this.appendItem.bind(this)),n.length===0&&(this.end=!0),this.loadingSlot.style.display="none",this.dispatchEvent(new CustomEvent("loading-success"))}catch{this.dispatchEvent(new CustomEvent("loading-error"))}finally{this.isLoading=!1}}}async get({src:n,limit:e,page:t,sort:r,search:s}){const i=new URL(n);i.searchParams.append(this.queryLimit,(e||this.limit).toString()),i.searchParams.append(this.queryPage,(t||this.page).toString()),s&&i.searchParams.append(this.querySearch,s),r&&i.searchParams.append(this.querySort,r.toString());const a=await(await fetch(i.toString())).json();return this.nested&&a[this.nested]?a[this.nested]:a}appendItem(n){const e=this.createItem(n);!e||(e.setAttribute("data-infinite-list-index",this.index.toString()),e.addEventListener("click",t=>{const r=Number(e.dataset.infiniteListIndex);this.onClickItem(t,r)}),this.container.insertBefore(e,this.loadingSlot),this.index+=1)}createItem(n){if(!(this.template instanceof HTMLTemplateElement))return;const e=document.createElement("div"),t=this.template.cloneNode(!0);return e.classList.add("kami-infinite-list__item"),t.innerHTML=Ge.render(t.innerHTML,n,{},this.delimiters),e.append(document.importNode(t.content,!0)),e}async onScroll(){const{scrollHeight:n,clientHeight:e,scrollTop:t}=this.container;n-t-this.loadingAt>e||this.isLoading||this.end||(this.page+=1,await this.load())}onClickItem(n,e){this.dispatchEvent(new CustomEvent("click-item",{detail:{element:n.target,index:e}}))}async onSearch({detail:n}){const{search:e}=n;!e||await this.filter(e)}async onClearSearch(){this.search=void 0,this.clear(),await this.load()}async onSort({detail:n}){const{sort:e}=n;!e||await this.sort(e)}renderSearchBar(){return this.useSearchBar?M`
      <kami-search-bar 
        class="kami-infinite-list__search"
        @search="${this.onSearch}" 
        @sort="${this.onSort}" 
        @clear="${this.onClearSearch}" 
      ></kami-search-bar>
    `:M``}render(){return M`
      <div class="kami-infinite-list">
        ${this.renderSearchBar()}  
        <div 
          id="container" 
          class="kami-infinite-list__container" 
          @scroll="${this.onScroll}" 
        >

          <slot id="loading" name="loading"></slot>
        </div>
      </div>
    `}};de.styles=le`
    .kami-infinite-list {
      height: var(--kami-infinite-list-height, 100%);
      display: flex;
      flex-direction: column;
    }

    .kami-infinite-list__container {
      display: var(--kami-infinite-list-display, block);
      flex-wrap: var(--kami-infinite-list-wrap, wrap);
      justify-content: var(--kami-infinite-list-justify, flex-start);
      align-items: var(--kami-infinite-list-align, center);
      gap: var(--kami-infinite-list-gap, 10px);
      overflow: auto; 
      flex-grow: 1;
    }

    .kami-infinite-list__search {
      margin-bottom: 10px;
    }
  `;be([D({type:String})],de.prototype,"src",2);be([D({type:Number,reflect:!0})],de.prototype,"page",2);be([D({type:Number})],de.prototype,"limit",2);be([D({type:String})],de.prototype,"search",2);be([D({type:Number,reflect:!0})],de.prototype,"order",2);be([D({type:String,attribute:"query-limit"})],de.prototype,"queryLimit",2);be([D({type:String,attribute:"query-page"})],de.prototype,"queryPage",2);be([D({type:String,attribute:"query-search"})],de.prototype,"querySearch",2);be([D({type:String,attribute:"query-sort"})],de.prototype,"querySort",2);be([D({attribute:"query-asc"})],de.prototype,"queryAsc",2);be([D({attribute:"query-desc"})],de.prototype,"queryDesc",2);be([D({type:String,attribute:"open-delimiter"})],de.prototype,"openDelimiter",2);be([D({type:String,attribute:"close-delimiter"})],de.prototype,"closeDelimiter",2);be([D({type:Number,attribute:"loading-at"})],de.prototype,"loadingAt",2);be([D({type:Boolean,attribute:"use-search-bar"})],de.prototype,"useSearchBar",2);be([D({type:String})],de.prototype,"nested",2);be([ot()],de.prototype,"data",2);be([_t("#container")],de.prototype,"container",2);be([_t("#loading")],de.prototype,"loadingSlot",2);de=be([fe("kami-infinite-list")],de);var rG=Object.defineProperty,sG=Object.getOwnPropertyDescriptor,rr=(n,e,t,r)=>{for(var s=r>1?void 0:r?sG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&rG(e,t,s),s};let Dt=class extends oe{constructor(){super(...arguments);this.value=0,this.absolute=!1,this.bottom=!1,this.delta=0}updated(n){n.get("absolute")&&this.parentElement&&(this.parentElement.style.position="relative")}go(n=0){if(!this.interval){if(!this.time){this.value=n;return}this.delta=this.value/this.time*10,this.interval=window.setInterval(()=>this.progress(n),10)}}progress(n=0){if(this.value<=n){this.dispatchEvent(new CustomEvent("finish",{detail:{value:this.value}})),clearInterval(this.interval),this.interval=void 0;return}this.value-=this.delta}render(){return M`
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
    `}};Dt.styles=le`
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
  `;rr([D({type:Number})],Dt.prototype,"value",2);rr([D({type:Number})],Dt.prototype,"time",2);rr([D({type:Boolean})],Dt.prototype,"absolute",2);rr([D({type:Boolean})],Dt.prototype,"bottom",2);Dt=rr([fe("kami-progress-bar")],Dt);function Kc(n,e){return t=>!t||!Object.keys(n).includes(t)?n[e]:n[t]}var pt=(n=>(n.info="info",n.success="success",n.warning="warning",n.error="error",n))(pt||{}),Ue=(n=>(n["top-center"]="top-center",n["top-left"]="top-left",n["top-right"]="top-right",n["bottom-center"]="bottom-center",n["bottom-left"]="bottom-left",n["bottom-right"]="bottom-right",n))(Ue||{});const _r={get stored(){return Object.values(this.items).flat()},indexes:{"top-center":0,"top-left":0,"top-right":0,"bottom-center":0,"bottom-left":0,"bottom-right":0},items:{"top-center":[],"top-left":[],"top-right":[],"bottom-center":[],"bottom-left":[],"bottom-right":[]},reIndex(n){this.items[n].forEach((e,t)=>e.setIndex(t))},add(n){const{position:e}=n;n.setIndex(this.indexes[e]),this.items[e].push(n),this.indexes[e]=this.indexes[e]+1},remove(n){const{position:e}=n,t=({index:r})=>r!==n.index;this.items[e]=this.items[e].filter(t),this.indexes[e]=this.indexes[e]-1,this.reIndex(e)}};var iG=Object.defineProperty,oG=Object.getOwnPropertyDescriptor,Ze=(n,e,t,r)=>{for(var s=r>1?void 0:r?oG(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&iG(e,t,s),s};const Ea=10,Aa=60;customElements.get("kami-progress-bar")||customElements.define("kami-progress-bar",Dt);customElements.get("kami-transition")||customElements.define("kami-transition",we);let $e=class extends oe{constructor(){super(...arguments);this.type=pt.info,this.position=Ue["bottom-center"],this.message="",this.outlined=!1,this.blured=!1,this.gap=Ea,this.size=Aa,this.isClosing=!1}static create({message:n="",type:e=pt.info,position:t=Ue["bottom-center"],outlined:r=!1,blured:s=!1,gap:i=Ea,size:o=Aa,time:a,container:c}){const l=c||document.body,u=document.createElement("kami-flash");return u.setAttribute("message",n),u.setAttribute("type",e),u.setAttribute("position",t),u.setAttribute("gap",i.toString()),u.setAttribute("size",o.toString()),a&&u.setAttribute("time",a.toString()),r&&u.setAttribute("outlined",""),s&&u.setAttribute("blured",""),l.append(u),u}static clear(){const{stored:n}=_r,e=async t=>t.close();return Promise.all(n.map(e))}static refresh(n){_r.items[n].forEach(e=>e.updatePosition())}get isLeft(){return this.position===Ue["bottom-left"]||this.position===Ue["top-left"]}get isRight(){return this.position===Ue["bottom-right"]||this.position===Ue["top-right"]}get isTop(){return this.position===Ue["top-center"]||this.position===Ue["top-left"]||this.position===Ue["top-right"]}get from(){return this.isTop?-50:50}get icon(){switch(this.type){case pt.info:return wd;case pt.success:return kd;case pt.warning:return bd;case pt.error:return vd;default:return""}}connectedCallback(){super.connectedCallback(),_r.add(this)}firstUpdated(){this.updatePosition(),this.time&&this.progressEl&&this.progressEl.go(0)}updatePosition(){const n=this.index,e=this.isTop?"top":"bottom";if(!(Number.isNaN(n)||n===void 0)){if(this.isRight&&(this.transitionEl.style.right=`${this.gap}px`),this.isLeft&&(this.transitionEl.style.left=`${this.gap}px`),n===0){this.transitionEl.style[e]=`${this.gap}px`;return}this.transitionEl.style[e]=`${this.size*n+this.gap*(n+1)}px`}}setIndex(n){this.index=n}close(){this.isClosing||(this.isClosing=!0,this.transitionEl.to="1",this.transitionEl.from="0.8",this.transitionEl.duration=275,this.transitionEl.transition="scale",this.transitionEl.toggle(!1),this.dispatchEvent(new CustomEvent("close")))}async delete(){this.dispatchEvent(new CustomEvent("delete")),await this.getUpdateComplete(),this.remove(),_r.remove(this),$e.refresh(this.position)}onClickClose(){this.close()}onCloseFinish(){this.delete()}renderIcon(n){return M`
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
            ${this.renderIcon(Vr)}
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
    `}};$e.styles=le`
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
      z-index: var(--kami-flash-z-index, 10);
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
  `;Ze([D({converter:Kc(pt,pt.info)})],$e.prototype,"type",2);Ze([D({converter:Kc(Ue,Ue["bottom-center"])})],$e.prototype,"position",2);Ze([D({type:String})],$e.prototype,"message",2);Ze([D({type:Number})],$e.prototype,"time",2);Ze([D({type:Boolean})],$e.prototype,"outlined",2);Ze([D({type:Boolean})],$e.prototype,"blured",2);Ze([D({type:Number})],$e.prototype,"gap",2);Ze([D({type:Number})],$e.prototype,"size",2);Ze([_t("#transition")],$e.prototype,"transitionEl",2);Ze([_t("#progress")],$e.prototype,"progressEl",2);Ze([D({attribute:!1})],$e.prototype,"index",2);$e=Ze([fe("kami-flash")],$e);(function(){if(window.Reflect===void 0||window.customElements===void 0||window.customElements.polyfillWrapFlushCallback)return;const n=HTMLElement,e={HTMLElement:function(){return Reflect.construct(n,[],this.constructor)}};window.HTMLElement=e.HTMLElement,HTMLElement.prototype=n.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,n)})();(function(n){if(typeof n.requestSubmit=="function")return;n.requestSubmit=function(r){r?(e(r,this),r.click()):(r=document.createElement("input"),r.type="submit",r.hidden=!0,this.appendChild(r),r.click(),this.removeChild(r))};function e(r,s){r instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),r.type=="submit"||t(TypeError,"The specified element is not a submit button"),r.form==s||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}function t(r,s,i){throw new r("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+s+".",i)}})(HTMLFormElement.prototype);const Yc=new WeakMap;function aG(n){const e=n instanceof Element?n:n instanceof Node?n.parentElement:null,t=e?e.closest("input, button"):null;return(t==null?void 0:t.type)=="submit"?t:null}function cG(n){const e=aG(n.target);e&&e.form&&Yc.set(e.form,e)}(function(){if("submitter"in Event.prototype)return;let n;if("SubmitEvent"in window&&/Apple Computer/.test(navigator.vendor))n=window.SubmitEvent.prototype;else{if("SubmitEvent"in window)return;n=window.Event.prototype}addEventListener("click",cG,!0),Object.defineProperty(n,"submitter",{get(){if(this.type=="submit"&&this.target instanceof HTMLFormElement)return Yc.get(this.target)}})})();var Ct;(function(n){n.eager="eager",n.lazy="lazy"})(Ct||(Ct={}));class Lt extends HTMLElement{constructor(){super();this.loaded=Promise.resolve(),this.delegate=new Lt.delegateConstructor(this)}static get observedAttributes(){return["disabled","loading","src"]}connectedCallback(){this.delegate.connect()}disconnectedCallback(){this.delegate.disconnect()}reload(){const{src:e}=this;this.src=null,this.src=e}attributeChangedCallback(e){e=="loading"?this.delegate.loadingStyleChanged():e=="src"?this.delegate.sourceURLChanged():this.delegate.disabledChanged()}get src(){return this.getAttribute("src")}set src(e){e?this.setAttribute("src",e):this.removeAttribute("src")}get loading(){return lG(this.getAttribute("loading")||"")}set loading(e){e?this.setAttribute("loading",e):this.removeAttribute("loading")}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get autoscroll(){return this.hasAttribute("autoscroll")}set autoscroll(e){e?this.setAttribute("autoscroll",""):this.removeAttribute("autoscroll")}get complete(){return!this.delegate.isLoading}get isActive(){return this.ownerDocument===document&&!this.isPreview}get isPreview(){var e,t;return(t=(e=this.ownerDocument)===null||e===void 0?void 0:e.documentElement)===null||t===void 0?void 0:t.hasAttribute("data-turbo-preview")}}function lG(n){switch(n.toLowerCase()){case"lazy":return Ct.lazy;default:return Ct.eager}}function Ce(n){return new URL(n.toString(),document.baseURI)}function Ut(n){let e;if(n.hash)return n.hash.slice(1);if(e=n.href.match(/#(.*)$/))return e[1]}function Ni(n,e){const t=(e==null?void 0:e.getAttribute("formaction"))||n.getAttribute("action")||n.action;return Ce(t)}function uG(n){return(mG(n).match(/\.[^.]*$/)||[])[0]||""}function hG(n){return!!uG(n).match(/^(?:|\.(?:htm|html|xhtml))$/)}function dG(n,e){const t=gG(e);return n.href===Ce(t).href||n.href.startsWith(t)}function Vn(n,e){return dG(n,e)&&hG(n)}function js(n){const e=Ut(n);return e!=null?n.href.slice(0,-(e.length+1)):n.href}function kr(n){return js(n)}function pG(n,e){return Ce(n).href==Ce(e).href}function fG(n){return n.pathname.split("/").slice(1)}function mG(n){return fG(n).slice(-1)[0]}function gG(n){return bG(n.origin+n.pathname)}function bG(n){return n.endsWith("/")?n:n+"/"}class Xc{constructor(e){this.response=e}get succeeded(){return this.response.ok}get failed(){return!this.succeeded}get clientError(){return this.statusCode>=400&&this.statusCode<=499}get serverError(){return this.statusCode>=500&&this.statusCode<=599}get redirected(){return this.response.redirected}get location(){return Ce(this.response.url)}get isHTML(){return this.contentType&&this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/)}get statusCode(){return this.response.status}get contentType(){return this.header("Content-Type")}get responseText(){return this.response.clone().text()}get responseHTML(){return this.isHTML?this.response.clone().text():Promise.resolve(void 0)}header(e){return this.response.headers.get(e)}}function Ne(n,{target:e,cancelable:t,detail:r}={}){const s=new CustomEvent(n,{cancelable:t,bubbles:!0,detail:r});return e&&e.isConnected?e.dispatchEvent(s):document.documentElement.dispatchEvent(s),s}function Er(){return new Promise(n=>requestAnimationFrame(()=>n()))}function vG(){return new Promise(n=>setTimeout(()=>n(),0))}function yG(){return Promise.resolve()}function Jc(n=""){return new DOMParser().parseFromString(n,"text/html")}function Qc(n,...e){const t=_G(n,e).replace(/^\n/,"").split(`
`),r=t[0].match(/^\s+/),s=r?r[0].length:0;return t.map(i=>i.slice(s)).join(`
`)}function _G(n,e){return n.reduce((t,r,s)=>{const i=e[s]==null?"":e[s];return t+r+i},"")}function Gn(){return Array.apply(null,{length:36}).map((n,e)=>e==8||e==13||e==18||e==23?"-":e==14?"4":e==19?(Math.floor(Math.random()*4)+8).toString(16):Math.floor(Math.random()*15).toString(16)).join("")}function Ar(n,...e){for(const t of e.map(r=>r==null?void 0:r.getAttribute(n)))if(typeof t=="string")return t;return null}function Vs(...n){for(const e of n)e.localName=="turbo-frame"&&e.setAttribute("busy",""),e.setAttribute("aria-busy","true")}function Gs(...n){for(const e of n)e.localName=="turbo-frame"&&e.removeAttribute("busy"),e.removeAttribute("aria-busy")}var Ae;(function(n){n[n.get=0]="get",n[n.post=1]="post",n[n.put=2]="put",n[n.patch=3]="patch",n[n.delete=4]="delete"})(Ae||(Ae={}));function kG(n){switch(n.toLowerCase()){case"get":return Ae.get;case"post":return Ae.post;case"put":return Ae.put;case"patch":return Ae.patch;case"delete":return Ae.delete}}class Ii{constructor(e,t,r,s=new URLSearchParams,i=null){this.abortController=new AbortController,this.resolveRequestPromise=o=>{},this.delegate=e,this.method=t,this.headers=this.defaultHeaders,this.body=s,this.url=r,this.target=i}get location(){return this.url}get params(){return this.url.searchParams}get entries(){return this.body?Array.from(this.body.entries()):[]}cancel(){this.abortController.abort()}async perform(){var e,t;const{fetchOptions:r}=this;(t=(e=this.delegate).prepareHeadersForRequest)===null||t===void 0||t.call(e,this.headers,this),await this.allowRequestToBeIntercepted(r);try{this.delegate.requestStarted(this);const s=await fetch(this.url.href,r);return await this.receive(s)}catch(s){if(s.name!=="AbortError")throw this.delegate.requestErrored(this,s),s}finally{this.delegate.requestFinished(this)}}async receive(e){const t=new Xc(e);return Ne("turbo:before-fetch-response",{cancelable:!0,detail:{fetchResponse:t},target:this.target}).defaultPrevented?this.delegate.requestPreventedHandlingResponse(this,t):t.succeeded?this.delegate.requestSucceededWithResponse(this,t):this.delegate.requestFailedWithResponse(this,t),t}get fetchOptions(){var e;return{method:Ae[this.method].toUpperCase(),credentials:"same-origin",headers:this.headers,redirect:"follow",body:this.isIdempotent?null:this.body,signal:this.abortSignal,referrer:(e=this.delegate.referrer)===null||e===void 0?void 0:e.href}}get defaultHeaders(){return{Accept:"text/html, application/xhtml+xml"}}get isIdempotent(){return this.method==Ae.get}get abortSignal(){return this.abortController.signal}async allowRequestToBeIntercepted(e){const t=new Promise(s=>this.resolveRequestPromise=s);Ne("turbo:before-fetch-request",{cancelable:!0,detail:{fetchOptions:e,url:this.url,resume:this.resolveRequestPromise},target:this.target}).defaultPrevented&&await t}}class wG{constructor(e,t){this.started=!1,this.intersect=r=>{const s=r.slice(-1)[0];s!=null&&s.isIntersecting&&this.delegate.elementAppearedInViewport(this.element)},this.delegate=e,this.element=t,this.intersectionObserver=new IntersectionObserver(this.intersect)}start(){this.started||(this.started=!0,this.intersectionObserver.observe(this.element))}stop(){this.started&&(this.started=!1,this.intersectionObserver.unobserve(this.element))}}class sr{constructor(e){this.templateElement=document.createElement("template"),this.templateElement.innerHTML=e}static wrap(e){return typeof e=="string"?new this(e):e}get fragment(){const e=document.createDocumentFragment();for(const t of this.foreignElements)e.appendChild(document.importNode(t,!0));return e}get foreignElements(){return this.templateChildren.reduce((e,t)=>t.tagName.toLowerCase()=="turbo-stream"?[...e,t]:e,[])}get templateChildren(){return Array.from(this.templateElement.content.children)}}sr.contentType="text/vnd.turbo-stream.html";var Et;(function(n){n[n.initialized=0]="initialized",n[n.requesting=1]="requesting",n[n.waiting=2]="waiting",n[n.receiving=3]="receiving",n[n.stopping=4]="stopping",n[n.stopped=5]="stopped"})(Et||(Et={}));var At;(function(n){n.urlEncoded="application/x-www-form-urlencoded",n.multipart="multipart/form-data",n.plain="text/plain"})(At||(At={}));function xG(n){switch(n.toLowerCase()){case At.multipart:return At.multipart;case At.plain:return At.plain;default:return At.urlEncoded}}class ir{constructor(e,t,r,s=!1){this.state=Et.initialized,this.delegate=e,this.formElement=t,this.submitter=r,this.formData=EG(t,r),this.location=Ce(this.action),this.method==Ae.get&&CG(this.location,[...this.body.entries()]),this.fetchRequest=new Ii(this,this.method,this.location,this.body,this.formElement),this.mustRedirect=s}static confirmMethod(e,t){return confirm(e)}get method(){var e;const t=((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formmethod"))||this.formElement.getAttribute("method")||"";return kG(t.toLowerCase())||Ae.get}get action(){var e;const t=typeof this.formElement.action=="string"?this.formElement.action:null;return((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formaction"))||this.formElement.getAttribute("action")||t||""}get body(){return this.enctype==At.urlEncoded||this.method==Ae.get?new URLSearchParams(this.stringFormData):this.formData}get enctype(){var e;return xG(((e=this.submitter)===null||e===void 0?void 0:e.getAttribute("formenctype"))||this.formElement.enctype)}get isIdempotent(){return this.fetchRequest.isIdempotent}get stringFormData(){return[...this.formData].reduce((e,[t,r])=>e.concat(typeof r=="string"?[[t,r]]:[]),[])}get confirmationMessage(){return this.formElement.getAttribute("data-turbo-confirm")}get needsConfirmation(){return this.confirmationMessage!==null}async start(){const{initialized:e,requesting:t}=Et;if(!(this.needsConfirmation&&!ir.confirmMethod(this.confirmationMessage,this.formElement))&&this.state==e)return this.state=t,this.fetchRequest.perform()}stop(){const{stopping:e,stopped:t}=Et;if(this.state!=e&&this.state!=t)return this.state=e,this.fetchRequest.cancel(),!0}prepareHeadersForRequest(e,t){if(!t.isIdempotent){const r=AG(Sa("csrf-param"))||Sa("csrf-token");r&&(e["X-CSRF-Token"]=r),e.Accept=[sr.contentType,e.Accept].join(", ")}}requestStarted(e){var t;this.state=Et.waiting,(t=this.submitter)===null||t===void 0||t.setAttribute("disabled",""),Ne("turbo:submit-start",{target:this.formElement,detail:{formSubmission:this}}),this.delegate.formSubmissionStarted(this)}requestPreventedHandlingResponse(e,t){this.result={success:t.succeeded,fetchResponse:t}}requestSucceededWithResponse(e,t){if(t.clientError||t.serverError)this.delegate.formSubmissionFailedWithResponse(this,t);else if(this.requestMustRedirect(e)&&SG(t)){const r=new Error("Form responses must redirect to another location");this.delegate.formSubmissionErrored(this,r)}else this.state=Et.receiving,this.result={success:!0,fetchResponse:t},this.delegate.formSubmissionSucceededWithResponse(this,t)}requestFailedWithResponse(e,t){this.result={success:!1,fetchResponse:t},this.delegate.formSubmissionFailedWithResponse(this,t)}requestErrored(e,t){this.result={success:!1,error:t},this.delegate.formSubmissionErrored(this,t)}requestFinished(e){var t;this.state=Et.stopped,(t=this.submitter)===null||t===void 0||t.removeAttribute("disabled"),Ne("turbo:submit-end",{target:this.formElement,detail:Object.assign({formSubmission:this},this.result)}),this.delegate.formSubmissionFinished(this)}requestMustRedirect(e){return!e.isIdempotent&&this.mustRedirect}}function EG(n,e){const t=new FormData(n),r=e==null?void 0:e.getAttribute("name"),s=e==null?void 0:e.getAttribute("value");return r&&s!=null&&t.get(r)!=s&&t.append(r,s),t}function AG(n){if(n!=null){const t=(document.cookie?document.cookie.split("; "):[]).find(r=>r.startsWith(n));if(t){const r=t.split("=").slice(1).join("=");return r?decodeURIComponent(r):void 0}}}function Sa(n){const e=document.querySelector(`meta[name="${n}"]`);return e&&e.content}function SG(n){return n.statusCode==200&&!n.redirected}function CG(n,e){const t=new URLSearchParams;for(const[r,s]of e)s instanceof File||t.append(r,s);return n.search=t.toString(),n}class ns{constructor(e){this.element=e}get children(){return[...this.element.children]}hasAnchor(e){return this.getElementForAnchor(e)!=null}getElementForAnchor(e){return e?this.element.querySelector(`[id='${e}'], a[name='${e}']`):null}get isConnected(){return this.element.isConnected}get firstAutofocusableElement(){return this.element.querySelector("[autofocus]")}get permanentElements(){return[...this.element.querySelectorAll("[id][data-turbo-permanent]")]}getPermanentElementById(e){return this.element.querySelector(`#${e}[data-turbo-permanent]`)}getPermanentElementMapForSnapshot(e){const t={};for(const r of this.permanentElements){const{id:s}=r,i=e.getPermanentElementById(s);i&&(t[s]=[r,i])}return t}}class el{constructor(e,t){this.submitBubbled=r=>{const s=r.target;if(!r.defaultPrevented&&s instanceof HTMLFormElement&&s.closest("turbo-frame, html")==this.element){const i=r.submitter||void 0;((i==null?void 0:i.getAttribute("formmethod"))||s.method)!="dialog"&&this.delegate.shouldInterceptFormSubmission(s,i)&&(r.preventDefault(),r.stopImmediatePropagation(),this.delegate.formSubmissionIntercepted(s,i))}},this.delegate=e,this.element=t}start(){this.element.addEventListener("submit",this.submitBubbled)}stop(){this.element.removeEventListener("submit",this.submitBubbled)}}class tl{constructor(e,t){this.resolveRenderPromise=r=>{},this.resolveInterceptionPromise=r=>{},this.delegate=e,this.element=t}scrollToAnchor(e){const t=this.snapshot.getElementForAnchor(e);t?(this.scrollToElement(t),this.focusElement(t)):this.scrollToPosition({x:0,y:0})}scrollToAnchorFromLocation(e){this.scrollToAnchor(Ut(e))}scrollToElement(e){e.scrollIntoView()}focusElement(e){e instanceof HTMLElement&&(e.hasAttribute("tabindex")?e.focus():(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")))}scrollToPosition({x:e,y:t}){this.scrollRoot.scrollTo(e,t)}scrollToTop(){this.scrollToPosition({x:0,y:0})}get scrollRoot(){return window}async render(e){const{isPreview:t,shouldRender:r,newSnapshot:s}=e;if(r)try{this.renderPromise=new Promise(a=>this.resolveRenderPromise=a),this.renderer=e,this.prepareToRenderSnapshot(e);const i=new Promise(a=>this.resolveInterceptionPromise=a);this.delegate.allowsImmediateRender(s,this.resolveInterceptionPromise)||await i,await this.renderSnapshot(e),this.delegate.viewRenderedSnapshot(s,t),this.finishRenderingSnapshot(e)}finally{delete this.renderer,this.resolveRenderPromise(void 0),delete this.renderPromise}else this.invalidate()}invalidate(){this.delegate.viewInvalidated()}prepareToRenderSnapshot(e){this.markAsPreview(e.isPreview),e.prepareToRender()}markAsPreview(e){e?this.element.setAttribute("data-turbo-preview",""):this.element.removeAttribute("data-turbo-preview")}async renderSnapshot(e){await e.render()}finishRenderingSnapshot(e){e.finishRendering()}}class TG extends tl{invalidate(){this.element.innerHTML=""}get snapshot(){return new ns(this.element)}}class nl{constructor(e,t){this.clickBubbled=r=>{this.respondsToEventTarget(r.target)?this.clickEvent=r:delete this.clickEvent},this.linkClicked=r=>{this.clickEvent&&this.respondsToEventTarget(r.target)&&r.target instanceof Element&&this.delegate.shouldInterceptLinkClick(r.target,r.detail.url)&&(this.clickEvent.preventDefault(),r.preventDefault(),this.delegate.linkClickIntercepted(r.target,r.detail.url)),delete this.clickEvent},this.willVisit=()=>{delete this.clickEvent},this.delegate=e,this.element=t}start(){this.element.addEventListener("click",this.clickBubbled),document.addEventListener("turbo:click",this.linkClicked),document.addEventListener("turbo:before-visit",this.willVisit)}stop(){this.element.removeEventListener("click",this.clickBubbled),document.removeEventListener("turbo:click",this.linkClicked),document.removeEventListener("turbo:before-visit",this.willVisit)}respondsToEventTarget(e){const t=e instanceof Element?e:e instanceof Node?e.parentElement:null;return t&&t.closest("turbo-frame, html")==this.element}}class $G{constructor(e){this.permanentElementMap=e}static preservingPermanentElements(e,t){const r=new this(e);r.enter(),t(),r.leave()}enter(){for(const e in this.permanentElementMap){const[,t]=this.permanentElementMap[e];this.replaceNewPermanentElementWithPlaceholder(t)}}leave(){for(const e in this.permanentElementMap){const[t]=this.permanentElementMap[e];this.replaceCurrentPermanentElementWithClone(t),this.replacePlaceholderWithPermanentElement(t)}}replaceNewPermanentElementWithPlaceholder(e){const t=RG(e);e.replaceWith(t)}replaceCurrentPermanentElementWithClone(e){const t=e.cloneNode(!0);e.replaceWith(t)}replacePlaceholderWithPermanentElement(e){const t=this.getPlaceholderById(e.id);t==null||t.replaceWith(e)}getPlaceholderById(e){return this.placeholders.find(t=>t.content==e)}get placeholders(){return[...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")]}}function RG(n){const e=document.createElement("meta");return e.setAttribute("name","turbo-permanent-placeholder"),e.setAttribute("content",n.id),e}class Pi{constructor(e,t,r,s=!0){this.currentSnapshot=e,this.newSnapshot=t,this.isPreview=r,this.willRender=s,this.promise=new Promise((i,o)=>this.resolvingFunctions={resolve:i,reject:o})}get shouldRender(){return!0}prepareToRender(){}finishRendering(){this.resolvingFunctions&&(this.resolvingFunctions.resolve(),delete this.resolvingFunctions)}createScriptElement(e){if(e.getAttribute("data-turbo-eval")=="false")return e;{const t=document.createElement("script");return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=e.textContent,t.async=!1,DG(t,e),t}}preservingPermanentElements(e){$G.preservingPermanentElements(this.permanentElementMap,e)}focusFirstAutofocusableElement(){const e=this.connectedSnapshot.firstAutofocusableElement;LG(e)&&e.focus()}get connectedSnapshot(){return this.newSnapshot.isConnected?this.newSnapshot:this.currentSnapshot}get currentElement(){return this.currentSnapshot.element}get newElement(){return this.newSnapshot.element}get permanentElementMap(){return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot)}get cspNonce(){var e;return(e=document.head.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content")}}function DG(n,e){for(const{name:t,value:r}of[...e.attributes])n.setAttribute(t,r)}function LG(n){return n&&typeof n.focus=="function"}class MG extends Pi{get shouldRender(){return!0}async render(){await Er(),this.preservingPermanentElements(()=>{this.loadFrameElement()}),this.scrollFrameIntoView(),await Er(),this.focusFirstAutofocusableElement(),await Er(),this.activateScriptElements()}loadFrameElement(){var e;const t=document.createRange();t.selectNodeContents(this.currentElement),t.deleteContents();const r=this.newElement,s=(e=r.ownerDocument)===null||e===void 0?void 0:e.createRange();s&&(s.selectNodeContents(r),this.currentElement.appendChild(s.extractContents()))}scrollFrameIntoView(){if(this.currentElement.autoscroll||this.newElement.autoscroll){const e=this.currentElement.firstElementChild,t=OG(this.currentElement.getAttribute("data-autoscroll-block"),"end");if(e)return e.scrollIntoView({block:t}),!0}return!1}activateScriptElements(){for(const e of this.newScriptElements){const t=this.createScriptElement(e);e.replaceWith(t)}}get newScriptElements(){return this.currentElement.querySelectorAll("script")}}function OG(n,e){return n=="end"||n=="start"||n=="center"||n=="nearest"?n:e}class ft{constructor(){this.hiding=!1,this.value=0,this.visible=!1,this.trickle=()=>{this.setValue(this.value+Math.random()/100)},this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement(),this.installStylesheetElement(),this.setValue(0)}static get defaultCSS(){return Qc`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 9999;
        transition:
          width ${ft.animationDuration}ms ease-out,
          opacity ${ft.animationDuration/2}ms ${ft.animationDuration/2}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `}show(){this.visible||(this.visible=!0,this.installProgressElement(),this.startTrickling())}hide(){this.visible&&!this.hiding&&(this.hiding=!0,this.fadeProgressElement(()=>{this.uninstallProgressElement(),this.stopTrickling(),this.visible=!1,this.hiding=!1}))}setValue(e){this.value=e,this.refresh()}installStylesheetElement(){document.head.insertBefore(this.stylesheetElement,document.head.firstChild)}installProgressElement(){this.progressElement.style.width="0",this.progressElement.style.opacity="1",document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()}fadeProgressElement(e){this.progressElement.style.opacity="0",setTimeout(e,ft.animationDuration*1.5)}uninstallProgressElement(){this.progressElement.parentNode&&document.documentElement.removeChild(this.progressElement)}startTrickling(){this.trickleInterval||(this.trickleInterval=window.setInterval(this.trickle,ft.animationDuration))}stopTrickling(){window.clearInterval(this.trickleInterval),delete this.trickleInterval}refresh(){requestAnimationFrame(()=>{this.progressElement.style.width=`${10+this.value*90}%`})}createStylesheetElement(){const e=document.createElement("style");return e.type="text/css",e.textContent=ft.defaultCSS,e}createProgressElement(){const e=document.createElement("div");return e.className="turbo-progress-bar",e}}ft.animationDuration=300;class NG extends ns{constructor(){super(...arguments);this.detailsByOuterHTML=this.children.filter(e=>!FG(e)).map(e=>HG(e)).reduce((e,t)=>{const{outerHTML:r}=t,s=r in e?e[r]:{type:IG(t),tracked:PG(t),elements:[]};return Object.assign(Object.assign({},e),{[r]:Object.assign(Object.assign({},s),{elements:[...s.elements,t]})})},{})}get trackedElementSignature(){return Object.keys(this.detailsByOuterHTML).filter(e=>this.detailsByOuterHTML[e].tracked).join("")}getScriptElementsNotInSnapshot(e){return this.getElementsMatchingTypeNotInSnapshot("script",e)}getStylesheetElementsNotInSnapshot(e){return this.getElementsMatchingTypeNotInSnapshot("stylesheet",e)}getElementsMatchingTypeNotInSnapshot(e,t){return Object.keys(this.detailsByOuterHTML).filter(r=>!(r in t.detailsByOuterHTML)).map(r=>this.detailsByOuterHTML[r]).filter(({type:r})=>r==e).map(({elements:[r]})=>r)}get provisionalElements(){return Object.keys(this.detailsByOuterHTML).reduce((e,t)=>{const{type:r,tracked:s,elements:i}=this.detailsByOuterHTML[t];return r==null&&!s?[...e,...i]:i.length>1?[...e,...i.slice(1)]:e},[])}getMetaValue(e){const t=this.findMetaElementByName(e);return t?t.getAttribute("content"):null}findMetaElementByName(e){return Object.keys(this.detailsByOuterHTML).reduce((t,r)=>{const{elements:[s]}=this.detailsByOuterHTML[r];return zG(s,e)?s:t},void 0)}}function IG(n){if(qG(n))return"script";if(BG(n))return"stylesheet"}function PG(n){return n.getAttribute("data-turbo-track")=="reload"}function qG(n){return n.tagName.toLowerCase()=="script"}function FG(n){return n.tagName.toLowerCase()=="noscript"}function BG(n){const e=n.tagName.toLowerCase();return e=="style"||e=="link"&&n.getAttribute("rel")=="stylesheet"}function zG(n,e){return n.tagName.toLowerCase()=="meta"&&n.getAttribute("name")==e}function HG(n){return n.hasAttribute("nonce")&&n.setAttribute("nonce",""),n}class Tt extends ns{constructor(e,t){super(e);this.headSnapshot=t}static fromHTMLString(e=""){return this.fromDocument(Jc(e))}static fromElement(e){return this.fromDocument(e.ownerDocument)}static fromDocument({head:e,body:t}){return new this(t,new NG(e))}clone(){return new Tt(this.element.cloneNode(!0),this.headSnapshot)}get headElement(){return this.headSnapshot.element}get rootLocation(){var e;const t=(e=this.getSetting("root"))!==null&&e!==void 0?e:"/";return Ce(t)}get cacheControlValue(){return this.getSetting("cache-control")}get isPreviewable(){return this.cacheControlValue!="no-preview"}get isCacheable(){return this.cacheControlValue!="no-cache"}get isVisitable(){return this.getSetting("visit-control")!="reload"}getSetting(e){return this.headSnapshot.getMetaValue(`turbo-${e}`)}}var rn;(function(n){n.visitStart="visitStart",n.requestStart="requestStart",n.requestEnd="requestEnd",n.visitEnd="visitEnd"})(rn||(rn={}));var Xe;(function(n){n.initialized="initialized",n.started="started",n.canceled="canceled",n.failed="failed",n.completed="completed"})(Xe||(Xe={}));const UG={action:"advance",historyChanged:!1,visitCachedSnapshot:()=>{},willRender:!0};var $t;(function(n){n[n.networkFailure=0]="networkFailure",n[n.timeoutFailure=-1]="timeoutFailure",n[n.contentTypeMismatch=-2]="contentTypeMismatch"})($t||($t={}));class jG{constructor(e,t,r,s={}){this.identifier=Gn(),this.timingMetrics={},this.followedRedirect=!1,this.historyChanged=!1,this.scrolled=!1,this.snapshotCached=!1,this.state=Xe.initialized,this.delegate=e,this.location=t,this.restorationIdentifier=r||Gn();const{action:i,historyChanged:o,referrer:a,snapshotHTML:c,response:l,visitCachedSnapshot:u,willRender:h}=Object.assign(Object.assign({},UG),s);this.action=i,this.historyChanged=o,this.referrer=a,this.snapshotHTML=c,this.response=l,this.isSamePage=this.delegate.locationWithActionIsSamePage(this.location,this.action),this.visitCachedSnapshot=u,this.willRender=h,this.scrolled=!h}get adapter(){return this.delegate.adapter}get view(){return this.delegate.view}get history(){return this.delegate.history}get restorationData(){return this.history.getRestorationDataForIdentifier(this.restorationIdentifier)}get silent(){return this.isSamePage}start(){this.state==Xe.initialized&&(this.recordTimingMetric(rn.visitStart),this.state=Xe.started,this.adapter.visitStarted(this),this.delegate.visitStarted(this))}cancel(){this.state==Xe.started&&(this.request&&this.request.cancel(),this.cancelRender(),this.state=Xe.canceled)}complete(){this.state==Xe.started&&(this.recordTimingMetric(rn.visitEnd),this.state=Xe.completed,this.adapter.visitCompleted(this),this.delegate.visitCompleted(this),this.followRedirect())}fail(){this.state==Xe.started&&(this.state=Xe.failed,this.adapter.visitFailed(this))}changeHistory(){var e;if(!this.historyChanged){const t=this.location.href===((e=this.referrer)===null||e===void 0?void 0:e.href)?"replace":this.action,r=this.getHistoryMethodForAction(t);this.history.update(r,this.location,this.restorationIdentifier),this.historyChanged=!0}}issueRequest(){this.hasPreloadedResponse()?this.simulateRequest():this.shouldIssueRequest()&&!this.request&&(this.request=new Ii(this,Ae.get,this.location),this.request.perform())}simulateRequest(){this.response&&(this.startRequest(),this.recordResponse(),this.finishRequest())}startRequest(){this.recordTimingMetric(rn.requestStart),this.adapter.visitRequestStarted(this)}recordResponse(e=this.response){if(this.response=e,e){const{statusCode:t}=e;Ca(t)?this.adapter.visitRequestCompleted(this):this.adapter.visitRequestFailedWithStatusCode(this,t)}}finishRequest(){this.recordTimingMetric(rn.requestEnd),this.adapter.visitRequestFinished(this)}loadResponse(){if(this.response){const{statusCode:e,responseHTML:t}=this.response;this.render(async()=>{this.cacheSnapshot(),this.view.renderPromise&&await this.view.renderPromise,Ca(e)&&t!=null?(await this.view.renderPage(Tt.fromHTMLString(t),!1,this.willRender),this.adapter.visitRendered(this),this.complete()):(await this.view.renderError(Tt.fromHTMLString(t)),this.adapter.visitRendered(this),this.fail())})}}getCachedSnapshot(){const e=this.view.getCachedSnapshotForLocation(this.location)||this.getPreloadedSnapshot();if(e&&(!Ut(this.location)||e.hasAnchor(Ut(this.location)))&&(this.action=="restore"||e.isPreviewable))return e}getPreloadedSnapshot(){if(this.snapshotHTML)return Tt.fromHTMLString(this.snapshotHTML)}hasCachedSnapshot(){return this.getCachedSnapshot()!=null}loadCachedSnapshot(){const e=this.getCachedSnapshot();if(e){const t=this.shouldIssueRequest();this.render(async()=>{this.cacheSnapshot(),this.isSamePage?this.adapter.visitRendered(this):(this.view.renderPromise&&await this.view.renderPromise,await this.view.renderPage(e,t,this.willRender),this.adapter.visitRendered(this),t||this.complete())})}}followRedirect(){var e;this.redirectedToLocation&&!this.followedRedirect&&((e=this.response)===null||e===void 0?void 0:e.redirected)&&(this.adapter.visitProposedToLocation(this.redirectedToLocation,{action:"replace",response:this.response}),this.followedRedirect=!0)}goToSamePageAnchor(){this.isSamePage&&this.render(async()=>{this.cacheSnapshot(),this.adapter.visitRendered(this)})}requestStarted(){this.startRequest()}requestPreventedHandlingResponse(e,t){}async requestSucceededWithResponse(e,t){const r=await t.responseHTML,{redirected:s,statusCode:i}=t;r==null?this.recordResponse({statusCode:$t.contentTypeMismatch,redirected:s}):(this.redirectedToLocation=t.redirected?t.location:void 0,this.recordResponse({statusCode:i,responseHTML:r,redirected:s}))}async requestFailedWithResponse(e,t){const r=await t.responseHTML,{redirected:s,statusCode:i}=t;r==null?this.recordResponse({statusCode:$t.contentTypeMismatch,redirected:s}):this.recordResponse({statusCode:i,responseHTML:r,redirected:s})}requestErrored(e,t){this.recordResponse({statusCode:$t.networkFailure,redirected:!1})}requestFinished(){this.finishRequest()}performScroll(){this.scrolled||(this.action=="restore"?this.scrollToRestoredPosition()||this.scrollToAnchor()||this.view.scrollToTop():this.scrollToAnchor()||this.view.scrollToTop(),this.isSamePage&&this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation,this.location),this.scrolled=!0)}scrollToRestoredPosition(){const{scrollPosition:e}=this.restorationData;if(e)return this.view.scrollToPosition(e),!0}scrollToAnchor(){const e=Ut(this.location);if(e!=null)return this.view.scrollToAnchor(e),!0}recordTimingMetric(e){this.timingMetrics[e]=new Date().getTime()}getTimingMetrics(){return Object.assign({},this.timingMetrics)}getHistoryMethodForAction(e){switch(e){case"replace":return history.replaceState;case"advance":case"restore":return history.pushState}}hasPreloadedResponse(){return typeof this.response=="object"}shouldIssueRequest(){return this.isSamePage?!1:this.action=="restore"?!this.hasCachedSnapshot():this.willRender}cacheSnapshot(){this.snapshotCached||(this.view.cacheSnapshot().then(e=>e&&this.visitCachedSnapshot(e)),this.snapshotCached=!0)}async render(e){this.cancelRender(),await new Promise(t=>{this.frame=requestAnimationFrame(()=>t())}),await e(),delete this.frame,this.performScroll()}cancelRender(){this.frame&&(cancelAnimationFrame(this.frame),delete this.frame)}}function Ca(n){return n>=200&&n<300}class VG{constructor(e){this.progressBar=new ft,this.showProgressBar=()=>{this.progressBar.show()},this.session=e}visitProposedToLocation(e,t){this.navigator.startVisit(e,Gn(),t)}visitStarted(e){e.loadCachedSnapshot(),e.issueRequest(),e.changeHistory(),e.goToSamePageAnchor()}visitRequestStarted(e){this.progressBar.setValue(0),e.hasCachedSnapshot()||e.action!="restore"?this.showVisitProgressBarAfterDelay():this.showProgressBar()}visitRequestCompleted(e){e.loadResponse()}visitRequestFailedWithStatusCode(e,t){switch(t){case $t.networkFailure:case $t.timeoutFailure:case $t.contentTypeMismatch:return this.reload();default:return e.loadResponse()}}visitRequestFinished(e){this.progressBar.setValue(1),this.hideVisitProgressBar()}visitCompleted(e){}pageInvalidated(){this.reload()}visitFailed(e){}visitRendered(e){}formSubmissionStarted(e){this.progressBar.setValue(0),this.showFormProgressBarAfterDelay()}formSubmissionFinished(e){this.progressBar.setValue(1),this.hideFormProgressBar()}showVisitProgressBarAfterDelay(){this.visitProgressBarTimeout=window.setTimeout(this.showProgressBar,this.session.progressBarDelay)}hideVisitProgressBar(){this.progressBar.hide(),this.visitProgressBarTimeout!=null&&(window.clearTimeout(this.visitProgressBarTimeout),delete this.visitProgressBarTimeout)}showFormProgressBarAfterDelay(){this.formProgressBarTimeout==null&&(this.formProgressBarTimeout=window.setTimeout(this.showProgressBar,this.session.progressBarDelay))}hideFormProgressBar(){this.progressBar.hide(),this.formProgressBarTimeout!=null&&(window.clearTimeout(this.formProgressBarTimeout),delete this.formProgressBarTimeout)}reload(){window.location.reload()}get navigator(){return this.session.navigator}}class GG{constructor(){this.started=!1}start(){this.started||(this.started=!0,addEventListener("turbo:before-cache",this.removeStaleElements,!1))}stop(){this.started&&(this.started=!1,removeEventListener("turbo:before-cache",this.removeStaleElements,!1))}removeStaleElements(){const e=[...document.querySelectorAll('[data-turbo-cache="false"]')];for(const t of e)t.remove()}}class WG{constructor(e){this.started=!1,this.submitCaptured=()=>{removeEventListener("submit",this.submitBubbled,!1),addEventListener("submit",this.submitBubbled,!1)},this.submitBubbled=t=>{if(!t.defaultPrevented){const r=t.target instanceof HTMLFormElement?t.target:void 0,s=t.submitter||void 0;r&&((s==null?void 0:s.getAttribute("formmethod"))||r.getAttribute("method"))!="dialog"&&this.delegate.willSubmitForm(r,s)&&(t.preventDefault(),this.delegate.formSubmitted(r,s))}},this.delegate=e}start(){this.started||(addEventListener("submit",this.submitCaptured,!0),this.started=!0)}stop(){this.started&&(removeEventListener("submit",this.submitCaptured,!0),this.started=!1)}}class ZG{constructor(e){this.element=e,this.linkInterceptor=new nl(this,e),this.formInterceptor=new el(this,e)}start(){this.linkInterceptor.start(),this.formInterceptor.start()}stop(){this.linkInterceptor.stop(),this.formInterceptor.stop()}shouldInterceptLinkClick(e,t){return this.shouldRedirect(e)}linkClickIntercepted(e,t){const r=this.findFrameElement(e);r&&r.delegate.linkClickIntercepted(e,t)}shouldInterceptFormSubmission(e,t){return this.shouldSubmit(e,t)}formSubmissionIntercepted(e,t){const r=this.findFrameElement(e,t);r&&(r.removeAttribute("reloadable"),r.delegate.formSubmissionIntercepted(e,t))}shouldSubmit(e,t){var r;const s=Ni(e,t),i=this.element.ownerDocument.querySelector('meta[name="turbo-root"]'),o=Ce((r=i==null?void 0:i.content)!==null&&r!==void 0?r:"/");return this.shouldRedirect(e,t)&&Vn(s,o)}shouldRedirect(e,t){const r=this.findFrameElement(e,t);return r?r!=e.closest("turbo-frame"):!1}findFrameElement(e,t){const r=(t==null?void 0:t.getAttribute("data-turbo-frame"))||e.getAttribute("data-turbo-frame");if(r&&r!="_top"){const s=this.element.querySelector(`#${r}:not([disabled])`);if(s instanceof Lt)return s}}}class KG{constructor(e){this.restorationIdentifier=Gn(),this.restorationData={},this.started=!1,this.pageLoaded=!1,this.onPopState=t=>{if(this.shouldHandlePopState()){const{turbo:r}=t.state||{};if(r){this.location=new URL(window.location.href);const{restorationIdentifier:s}=r;this.restorationIdentifier=s,this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location,s)}}},this.onPageLoad=async t=>{await yG(),this.pageLoaded=!0},this.delegate=e}start(){this.started||(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0,this.replace(new URL(window.location.href)))}stop(){this.started&&(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1)}push(e,t){this.update(history.pushState,e,t)}replace(e,t){this.update(history.replaceState,e,t)}update(e,t,r=Gn()){const s={turbo:{restorationIdentifier:r}};e.call(history,s,"",t.href),this.location=t,this.restorationIdentifier=r}getRestorationDataForIdentifier(e){return this.restorationData[e]||{}}updateRestorationData(e){const{restorationIdentifier:t}=this,r=this.restorationData[t];this.restorationData[t]=Object.assign(Object.assign({},r),e)}assumeControlOfScrollRestoration(){var e;this.previousScrollRestoration||(this.previousScrollRestoration=(e=history.scrollRestoration)!==null&&e!==void 0?e:"auto",history.scrollRestoration="manual")}relinquishControlOfScrollRestoration(){this.previousScrollRestoration&&(history.scrollRestoration=this.previousScrollRestoration,delete this.previousScrollRestoration)}shouldHandlePopState(){return this.pageIsLoaded()}pageIsLoaded(){return this.pageLoaded||document.readyState=="complete"}}class YG{constructor(e){this.started=!1,this.clickCaptured=()=>{removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},this.clickBubbled=t=>{if(this.clickEventIsSignificant(t)){const r=t.composedPath&&t.composedPath()[0]||t.target,s=this.findLinkFromClickTarget(r);if(s){const i=this.getLocationForLink(s);this.delegate.willFollowLinkToLocation(s,i)&&(t.preventDefault(),this.delegate.followedLinkToLocation(s,i))}}},this.delegate=e}start(){this.started||(addEventListener("click",this.clickCaptured,!0),this.started=!0)}stop(){this.started&&(removeEventListener("click",this.clickCaptured,!0),this.started=!1)}clickEventIsSignificant(e){return!(e.target&&e.target.isContentEditable||e.defaultPrevented||e.which>1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}findLinkFromClickTarget(e){if(e instanceof Element)return e.closest("a[href]:not([target^=_]):not([download])")}getLocationForLink(e){return Ce(e.getAttribute("href")||"")}}function qi(n){return n=="advance"||n=="replace"||n=="restore"}class XG{constructor(e){this.delegate=e}proposeVisit(e,t={}){this.delegate.allowsVisitingLocationWithAction(e,t.action)&&(Vn(e,this.view.snapshot.rootLocation)?this.delegate.visitProposedToLocation(e,t):window.location.href=e.toString())}startVisit(e,t,r={}){this.stop(),this.currentVisit=new jG(this,Ce(e),t,Object.assign({referrer:this.location},r)),this.currentVisit.start()}submitForm(e,t){this.stop(),this.formSubmission=new ir(this,e,t,!0),this.formSubmission.start()}stop(){this.formSubmission&&(this.formSubmission.stop(),delete this.formSubmission),this.currentVisit&&(this.currentVisit.cancel(),delete this.currentVisit)}get adapter(){return this.delegate.adapter}get view(){return this.delegate.view}get history(){return this.delegate.history}formSubmissionStarted(e){typeof this.adapter.formSubmissionStarted=="function"&&this.adapter.formSubmissionStarted(e)}async formSubmissionSucceededWithResponse(e,t){if(e==this.formSubmission){const r=await t.responseHTML;if(r){e.method!=Ae.get&&this.view.clearSnapshotCache();const{statusCode:s,redirected:i}=t,a={action:this.getActionForFormSubmission(e),response:{statusCode:s,responseHTML:r,redirected:i}};this.proposeVisit(t.location,a)}}}async formSubmissionFailedWithResponse(e,t){const r=await t.responseHTML;if(r){const s=Tt.fromHTMLString(r);t.serverError?await this.view.renderError(s):await this.view.renderPage(s),this.view.scrollToTop(),this.view.clearSnapshotCache()}}formSubmissionErrored(e,t){console.error(t)}formSubmissionFinished(e){typeof this.adapter.formSubmissionFinished=="function"&&this.adapter.formSubmissionFinished(e)}visitStarted(e){this.delegate.visitStarted(e)}visitCompleted(e){this.delegate.visitCompleted(e)}locationWithActionIsSamePage(e,t){const r=Ut(e),s=Ut(this.view.lastRenderedLocation),i=t==="restore"&&typeof r=="undefined";return t!=="replace"&&js(e)===js(this.view.lastRenderedLocation)&&(i||r!=null&&r!==s)}visitScrolledToSamePageLocation(e,t){this.delegate.visitScrolledToSamePageLocation(e,t)}get location(){return this.history.location}get restorationIdentifier(){return this.history.restorationIdentifier}getActionForFormSubmission(e){const{formElement:t,submitter:r}=e,s=Ar("data-turbo-action",r,t);return qi(s)?s:"advance"}}var dt;(function(n){n[n.initial=0]="initial",n[n.loading=1]="loading",n[n.interactive=2]="interactive",n[n.complete=3]="complete"})(dt||(dt={}));class JG{constructor(e){this.stage=dt.initial,this.started=!1,this.interpretReadyState=()=>{const{readyState:t}=this;t=="interactive"?this.pageIsInteractive():t=="complete"&&this.pageIsComplete()},this.pageWillUnload=()=>{this.delegate.pageWillUnload()},this.delegate=e}start(){this.started||(this.stage==dt.initial&&(this.stage=dt.loading),document.addEventListener("readystatechange",this.interpretReadyState,!1),addEventListener("pagehide",this.pageWillUnload,!1),this.started=!0)}stop(){this.started&&(document.removeEventListener("readystatechange",this.interpretReadyState,!1),removeEventListener("pagehide",this.pageWillUnload,!1),this.started=!1)}pageIsInteractive(){this.stage==dt.loading&&(this.stage=dt.interactive,this.delegate.pageBecameInteractive())}pageIsComplete(){this.pageIsInteractive(),this.stage==dt.interactive&&(this.stage=dt.complete,this.delegate.pageLoaded())}get readyState(){return document.readyState}}class QG{constructor(e){this.started=!1,this.onScroll=()=>{this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},this.delegate=e}start(){this.started||(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)}stop(){this.started&&(removeEventListener("scroll",this.onScroll,!1),this.started=!1)}updatePosition(e){this.delegate.scrollPositionChanged(e)}}class eW{constructor(e){this.sources=new Set,this.started=!1,this.inspectFetchResponse=t=>{const r=tW(t);r&&nW(r)&&(t.preventDefault(),this.receiveMessageResponse(r))},this.receiveMessageEvent=t=>{this.started&&typeof t.data=="string"&&this.receiveMessageHTML(t.data)},this.delegate=e}start(){this.started||(this.started=!0,addEventListener("turbo:before-fetch-response",this.inspectFetchResponse,!1))}stop(){this.started&&(this.started=!1,removeEventListener("turbo:before-fetch-response",this.inspectFetchResponse,!1))}connectStreamSource(e){this.streamSourceIsConnected(e)||(this.sources.add(e),e.addEventListener("message",this.receiveMessageEvent,!1))}disconnectStreamSource(e){this.streamSourceIsConnected(e)&&(this.sources.delete(e),e.removeEventListener("message",this.receiveMessageEvent,!1))}streamSourceIsConnected(e){return this.sources.has(e)}async receiveMessageResponse(e){const t=await e.responseHTML;t&&this.receiveMessageHTML(t)}receiveMessageHTML(e){this.delegate.receivedMessageFromStream(new sr(e))}}function tW(n){var e;const t=(e=n.detail)===null||e===void 0?void 0:e.fetchResponse;if(t instanceof Xc)return t}function nW(n){var e;return((e=n.contentType)!==null&&e!==void 0?e:"").startsWith(sr.contentType)}class rW extends Pi{async render(){this.replaceHeadAndBody(),this.activateScriptElements()}replaceHeadAndBody(){const{documentElement:e,head:t,body:r}=document;e.replaceChild(this.newHead,t),e.replaceChild(this.newElement,r)}activateScriptElements(){for(const e of this.scriptElements){const t=e.parentNode;if(t){const r=this.createScriptElement(e);t.replaceChild(r,e)}}}get newHead(){return this.newSnapshot.headSnapshot.element}get scriptElements(){return[...document.documentElement.querySelectorAll("script")]}}class rl extends Pi{get shouldRender(){return this.newSnapshot.isVisitable&&this.trackedElementsAreIdentical}prepareToRender(){this.mergeHead()}async render(){this.willRender&&this.replaceBody()}finishRendering(){super.finishRendering(),this.isPreview||this.focusFirstAutofocusableElement()}get currentHeadSnapshot(){return this.currentSnapshot.headSnapshot}get newHeadSnapshot(){return this.newSnapshot.headSnapshot}get newElement(){return this.newSnapshot.element}mergeHead(){this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()}replaceBody(){this.preservingPermanentElements(()=>{this.activateNewBody(),this.assignNewBody()})}get trackedElementsAreIdentical(){return this.currentHeadSnapshot.trackedElementSignature==this.newHeadSnapshot.trackedElementSignature}copyNewHeadStylesheetElements(){for(const e of this.newHeadStylesheetElements)document.head.appendChild(e)}copyNewHeadScriptElements(){for(const e of this.newHeadScriptElements)document.head.appendChild(this.createScriptElement(e))}removeCurrentHeadProvisionalElements(){for(const e of this.currentHeadProvisionalElements)document.head.removeChild(e)}copyNewHeadProvisionalElements(){for(const e of this.newHeadProvisionalElements)document.head.appendChild(e)}activateNewBody(){document.adoptNode(this.newElement),this.activateNewBodyScriptElements()}activateNewBodyScriptElements(){for(const e of this.newBodyScriptElements){const t=this.createScriptElement(e);e.replaceWith(t)}}assignNewBody(){document.body&&this.newElement instanceof HTMLBodyElement?document.body.replaceWith(this.newElement):document.documentElement.appendChild(this.newElement)}get newHeadStylesheetElements(){return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot)}get newHeadScriptElements(){return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot)}get currentHeadProvisionalElements(){return this.currentHeadSnapshot.provisionalElements}get newHeadProvisionalElements(){return this.newHeadSnapshot.provisionalElements}get newBodyScriptElements(){return this.newElement.querySelectorAll("script")}}class sW{constructor(e){this.keys=[],this.snapshots={},this.size=e}has(e){return kr(e)in this.snapshots}get(e){if(this.has(e)){const t=this.read(e);return this.touch(e),t}}put(e,t){return this.write(e,t),this.touch(e),t}clear(){this.snapshots={}}read(e){return this.snapshots[kr(e)]}write(e,t){this.snapshots[kr(e)]=t}touch(e){const t=kr(e),r=this.keys.indexOf(t);r>-1&&this.keys.splice(r,1),this.keys.unshift(t),this.trim()}trim(){for(const e of this.keys.splice(this.size))delete this.snapshots[e]}}class iW extends tl{constructor(){super(...arguments);this.snapshotCache=new sW(10),this.lastRenderedLocation=new URL(location.href)}renderPage(e,t=!1,r=!0){const s=new rl(this.snapshot,e,t,r);return this.render(s)}renderError(e){const t=new rW(this.snapshot,e,!1);return this.render(t)}clearSnapshotCache(){this.snapshotCache.clear()}async cacheSnapshot(){if(this.shouldCacheSnapshot){this.delegate.viewWillCacheSnapshot();const{snapshot:e,lastRenderedLocation:t}=this;await vG();const r=e.clone();return this.snapshotCache.put(t,r),r}}getCachedSnapshotForLocation(e){return this.snapshotCache.get(e)}get snapshot(){return Tt.fromElement(this.element)}get shouldCacheSnapshot(){return this.snapshot.isCacheable}}class oW{constructor(){this.navigator=new XG(this),this.history=new KG(this),this.view=new iW(this,document.documentElement),this.adapter=new VG(this),this.pageObserver=new JG(this),this.cacheObserver=new GG,this.linkClickObserver=new YG(this),this.formSubmitObserver=new WG(this),this.scrollObserver=new QG(this),this.streamObserver=new eW(this),this.frameRedirector=new ZG(document.documentElement),this.drive=!0,this.enabled=!0,this.progressBarDelay=500,this.started=!1}start(){this.started||(this.pageObserver.start(),this.cacheObserver.start(),this.linkClickObserver.start(),this.formSubmitObserver.start(),this.scrollObserver.start(),this.streamObserver.start(),this.frameRedirector.start(),this.history.start(),this.started=!0,this.enabled=!0)}disable(){this.enabled=!1}stop(){this.started&&(this.pageObserver.stop(),this.cacheObserver.stop(),this.linkClickObserver.stop(),this.formSubmitObserver.stop(),this.scrollObserver.stop(),this.streamObserver.stop(),this.frameRedirector.stop(),this.history.stop(),this.started=!1)}registerAdapter(e){this.adapter=e}visit(e,t={}){this.navigator.proposeVisit(Ce(e),t)}connectStreamSource(e){this.streamObserver.connectStreamSource(e)}disconnectStreamSource(e){this.streamObserver.disconnectStreamSource(e)}renderStreamMessage(e){document.documentElement.appendChild(sr.wrap(e).fragment)}clearCache(){this.view.clearSnapshotCache()}setProgressBarDelay(e){this.progressBarDelay=e}get location(){return this.history.location}get restorationIdentifier(){return this.history.restorationIdentifier}historyPoppedToLocationWithRestorationIdentifier(e,t){this.enabled?this.navigator.startVisit(e,t,{action:"restore",historyChanged:!0}):this.adapter.pageInvalidated()}scrollPositionChanged(e){this.history.updateRestorationData({scrollPosition:e})}willFollowLinkToLocation(e,t){return this.elementDriveEnabled(e)&&Vn(t,this.snapshot.rootLocation)&&this.applicationAllowsFollowingLinkToLocation(e,t)}followedLinkToLocation(e,t){const r=this.getActionForLink(e);this.convertLinkWithMethodClickToFormSubmission(e)||this.visit(t.href,{action:r})}convertLinkWithMethodClickToFormSubmission(e){const t=e.getAttribute("data-turbo-method");if(t){const r=document.createElement("form");r.method=t,r.action=e.getAttribute("href")||"undefined",r.hidden=!0,e.hasAttribute("data-turbo-confirm")&&r.setAttribute("data-turbo-confirm",e.getAttribute("data-turbo-confirm"));const s=this.getTargetFrameForLink(e);return s?(r.setAttribute("data-turbo-frame",s),r.addEventListener("turbo:submit-start",()=>r.remove())):r.addEventListener("submit",()=>r.remove()),document.body.appendChild(r),Ne("submit",{cancelable:!0,target:r})}else return!1}allowsVisitingLocationWithAction(e,t){return this.locationWithActionIsSamePage(e,t)||this.applicationAllowsVisitingLocation(e)}visitProposedToLocation(e,t){Ta(e),this.adapter.visitProposedToLocation(e,t)}visitStarted(e){Ta(e.location),e.silent||this.notifyApplicationAfterVisitingLocation(e.location,e.action)}visitCompleted(e){this.notifyApplicationAfterPageLoad(e.getTimingMetrics())}locationWithActionIsSamePage(e,t){return this.navigator.locationWithActionIsSamePage(e,t)}visitScrolledToSamePageLocation(e,t){this.notifyApplicationAfterVisitingSamePageLocation(e,t)}willSubmitForm(e,t){const r=Ni(e,t);return this.elementDriveEnabled(e)&&(!t||this.elementDriveEnabled(t))&&Vn(Ce(r),this.snapshot.rootLocation)}formSubmitted(e,t){this.navigator.submitForm(e,t)}pageBecameInteractive(){this.view.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()}pageLoaded(){this.history.assumeControlOfScrollRestoration()}pageWillUnload(){this.history.relinquishControlOfScrollRestoration()}receivedMessageFromStream(e){this.renderStreamMessage(e)}viewWillCacheSnapshot(){var e;!((e=this.navigator.currentVisit)===null||e===void 0)&&e.silent||this.notifyApplicationBeforeCachingSnapshot()}allowsImmediateRender({element:e},t){return!this.notifyApplicationBeforeRender(e,t).defaultPrevented}viewRenderedSnapshot(e,t){this.view.lastRenderedLocation=this.history.location,this.notifyApplicationAfterRender()}viewInvalidated(){this.adapter.pageInvalidated()}frameLoaded(e){this.notifyApplicationAfterFrameLoad(e)}frameRendered(e,t){this.notifyApplicationAfterFrameRender(e,t)}applicationAllowsFollowingLinkToLocation(e,t){return!this.notifyApplicationAfterClickingLinkToLocation(e,t).defaultPrevented}applicationAllowsVisitingLocation(e){return!this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented}notifyApplicationAfterClickingLinkToLocation(e,t){return Ne("turbo:click",{target:e,detail:{url:t.href},cancelable:!0})}notifyApplicationBeforeVisitingLocation(e){return Ne("turbo:before-visit",{detail:{url:e.href},cancelable:!0})}notifyApplicationAfterVisitingLocation(e,t){return Vs(document.documentElement),Ne("turbo:visit",{detail:{url:e.href,action:t}})}notifyApplicationBeforeCachingSnapshot(){return Ne("turbo:before-cache")}notifyApplicationBeforeRender(e,t){return Ne("turbo:before-render",{detail:{newBody:e,resume:t},cancelable:!0})}notifyApplicationAfterRender(){return Ne("turbo:render")}notifyApplicationAfterPageLoad(e={}){return Gs(document.documentElement),Ne("turbo:load",{detail:{url:this.location.href,timing:e}})}notifyApplicationAfterVisitingSamePageLocation(e,t){dispatchEvent(new HashChangeEvent("hashchange",{oldURL:e.toString(),newURL:t.toString()}))}notifyApplicationAfterFrameLoad(e){return Ne("turbo:frame-load",{target:e})}notifyApplicationAfterFrameRender(e,t){return Ne("turbo:frame-render",{detail:{fetchResponse:e},target:t,cancelable:!0})}elementDriveEnabled(e){const t=e==null?void 0:e.closest("[data-turbo]");return this.drive?t?t.getAttribute("data-turbo")!="false":!0:t?t.getAttribute("data-turbo")=="true":!1}getActionForLink(e){const t=e.getAttribute("data-turbo-action");return qi(t)?t:"advance"}getTargetFrameForLink(e){const t=e.getAttribute("data-turbo-frame");if(t)return t;{const r=e.closest("turbo-frame");if(r)return r.id}}get snapshot(){return this.view.snapshot}}function Ta(n){Object.defineProperties(n,aW)}const aW={absoluteURL:{get(){return this.toString()}}},Se=new oW,{navigator:cW}=Se;function sl(){Se.start()}function lW(n){Se.registerAdapter(n)}function uW(n,e){Se.visit(n,e)}function hW(n){Se.connectStreamSource(n)}function dW(n){Se.disconnectStreamSource(n)}function pW(n){Se.renderStreamMessage(n)}function fW(){Se.clearCache()}function il(n){Se.setProgressBarDelay(n)}function mW(n){ir.confirmMethod=n}var gW=Object.freeze({__proto__:null,navigator:cW,session:Se,PageRenderer:rl,PageSnapshot:Tt,start:sl,registerAdapter:lW,visit:uW,connectStreamSource:hW,disconnectStreamSource:dW,renderStreamMessage:pW,clearCache:fW,setProgressBarDelay:il,setConfirmMethod:mW});class bW{constructor(e){this.fetchResponseLoaded=t=>{},this.currentFetchRequest=null,this.resolveVisitPromise=()=>{},this.connected=!1,this.hasBeenLoaded=!1,this.settingSourceURL=!1,this.element=e,this.view=new TG(this,this.element),this.appearanceObserver=new wG(this,this.element),this.linkInterceptor=new nl(this,this.element),this.formInterceptor=new el(this,this.element)}connect(){this.connected||(this.connected=!0,this.reloadable=!1,this.loadingStyle==Ct.lazy&&this.appearanceObserver.start(),this.linkInterceptor.start(),this.formInterceptor.start(),this.sourceURLChanged())}disconnect(){this.connected&&(this.connected=!1,this.appearanceObserver.stop(),this.linkInterceptor.stop(),this.formInterceptor.stop())}disabledChanged(){this.loadingStyle==Ct.eager&&this.loadSourceURL()}sourceURLChanged(){(this.loadingStyle==Ct.eager||this.hasBeenLoaded)&&this.loadSourceURL()}loadingStyleChanged(){this.loadingStyle==Ct.lazy?this.appearanceObserver.start():(this.appearanceObserver.stop(),this.loadSourceURL())}async loadSourceURL(){if(!this.settingSourceURL&&this.enabled&&this.isActive&&(this.reloadable||this.sourceURL!=this.currentURL)){const e=this.currentURL;if(this.currentURL=this.sourceURL,this.sourceURL)try{this.element.loaded=this.visit(Ce(this.sourceURL)),this.appearanceObserver.stop(),await this.element.loaded,this.hasBeenLoaded=!0}catch(t){throw this.currentURL=e,t}}}async loadResponse(e){(e.redirected||e.succeeded&&e.isHTML)&&(this.sourceURL=e.response.url);try{const t=await e.responseHTML;if(t){const{body:r}=Jc(t),s=new ns(await this.extractForeignFrameElement(r)),i=new MG(this.view.snapshot,s,!1,!1);this.view.renderPromise&&await this.view.renderPromise,await this.view.render(i),Se.frameRendered(e,this.element),Se.frameLoaded(this.element),this.fetchResponseLoaded(e)}}catch(t){console.error(t),this.view.invalidate()}finally{this.fetchResponseLoaded=()=>{}}}elementAppearedInViewport(e){this.loadSourceURL()}shouldInterceptLinkClick(e,t){return e.hasAttribute("data-turbo-method")?!1:this.shouldInterceptNavigation(e)}linkClickIntercepted(e,t){this.reloadable=!0,this.navigateFrame(e,t)}shouldInterceptFormSubmission(e,t){return this.shouldInterceptNavigation(e,t)}formSubmissionIntercepted(e,t){this.formSubmission&&this.formSubmission.stop(),this.reloadable=!1,this.formSubmission=new ir(this,e,t);const{fetchRequest:r}=this.formSubmission;this.prepareHeadersForRequest(r.headers,r),this.formSubmission.start()}prepareHeadersForRequest(e,t){e["Turbo-Frame"]=this.id}requestStarted(e){Vs(this.element)}requestPreventedHandlingResponse(e,t){this.resolveVisitPromise()}async requestSucceededWithResponse(e,t){await this.loadResponse(t),this.resolveVisitPromise()}requestFailedWithResponse(e,t){console.error(t),this.resolveVisitPromise()}requestErrored(e,t){console.error(t),this.resolveVisitPromise()}requestFinished(e){Gs(this.element)}formSubmissionStarted({formElement:e}){Vs(e,this.findFrameElement(e))}formSubmissionSucceededWithResponse(e,t){const r=this.findFrameElement(e.formElement,e.submitter);this.proposeVisitIfNavigatedWithAction(r,e.formElement,e.submitter),r.delegate.loadResponse(t)}formSubmissionFailedWithResponse(e,t){this.element.delegate.loadResponse(t)}formSubmissionErrored(e,t){console.error(t)}formSubmissionFinished({formElement:e}){Gs(e,this.findFrameElement(e))}allowsImmediateRender(e,t){return!0}viewRenderedSnapshot(e,t){}viewInvalidated(){}async visit(e){var t;const r=new Ii(this,Ae.get,e,new URLSearchParams,this.element);return(t=this.currentFetchRequest)===null||t===void 0||t.cancel(),this.currentFetchRequest=r,new Promise(s=>{this.resolveVisitPromise=()=>{this.resolveVisitPromise=()=>{},this.currentFetchRequest=null,s()},r.perform()})}navigateFrame(e,t,r){const s=this.findFrameElement(e,r);this.proposeVisitIfNavigatedWithAction(s,e,r),s.setAttribute("reloadable",""),s.src=t}proposeVisitIfNavigatedWithAction(e,t,r){const s=Ar("data-turbo-action",r,t,e);if(qi(s)){const{visitCachedSnapshot:i}=new vW(e);e.delegate.fetchResponseLoaded=o=>{if(e.src){const{statusCode:a,redirected:c}=o,l=e.ownerDocument.documentElement.outerHTML,u={statusCode:a,redirected:c,responseHTML:l};Se.visit(e.src,{action:s,response:u,visitCachedSnapshot:i,willRender:!1})}}}}findFrameElement(e,t){var r;const s=Ar("data-turbo-frame",t,e)||this.element.getAttribute("target");return(r=$a(s))!==null&&r!==void 0?r:this.element}async extractForeignFrameElement(e){let t;const r=CSS.escape(this.id);try{if(t=Ra(e.querySelector(`turbo-frame#${r}`),this.currentURL))return t;if(t=Ra(e.querySelector(`turbo-frame[src][recurse~=${r}]`),this.currentURL))return await t.loaded,await this.extractForeignFrameElement(t);console.error(`Response has no matching <turbo-frame id="${r}"> element`)}catch(s){console.error(s)}return new Lt}formActionIsVisitable(e,t){const r=Ni(e,t);return Vn(Ce(r),this.rootLocation)}shouldInterceptNavigation(e,t){const r=Ar("data-turbo-frame",t,e)||this.element.getAttribute("target");if(e instanceof HTMLFormElement&&!this.formActionIsVisitable(e,t)||!this.enabled||r=="_top")return!1;if(r){const s=$a(r);if(s)return!s.disabled}return!(!Se.elementDriveEnabled(e)||t&&!Se.elementDriveEnabled(t))}get id(){return this.element.id}get enabled(){return!this.element.disabled}get sourceURL(){if(this.element.src)return this.element.src}get reloadable(){return this.findFrameElement(this.element).hasAttribute("reloadable")}set reloadable(e){const t=this.findFrameElement(this.element);e?t.setAttribute("reloadable",""):t.removeAttribute("reloadable")}set sourceURL(e){this.settingSourceURL=!0,this.element.src=e!=null?e:null,this.currentURL=this.element.src,this.settingSourceURL=!1}get loadingStyle(){return this.element.loading}get isLoading(){return this.formSubmission!==void 0||this.resolveVisitPromise()!==void 0}get isActive(){return this.element.isActive&&this.connected}get rootLocation(){var e;const t=this.element.ownerDocument.querySelector('meta[name="turbo-root"]'),r=(e=t==null?void 0:t.content)!==null&&e!==void 0?e:"/";return Ce(r)}}class vW{constructor(e){this.visitCachedSnapshot=({element:t})=>{var r;const{id:s,clone:i}=this;(r=t.querySelector("#"+s))===null||r===void 0||r.replaceWith(i)},this.clone=e.cloneNode(!0),this.id=e.id}}function $a(n){if(n!=null){const e=document.getElementById(n);if(e instanceof Lt)return e}}function Ra(n,e){if(n){const t=n.getAttribute("src");if(t!=null&&e!=null&&pG(t,e))throw new Error(`Matching <turbo-frame id="${n.id}"> element has a source URL which references itself`);if(n.ownerDocument!==document&&(n=document.importNode(n,!0)),n instanceof Lt)return n.connectedCallback(),n.disconnectedCallback(),n}}const yW={after(){this.targetElements.forEach(n=>{var e;return(e=n.parentElement)===null||e===void 0?void 0:e.insertBefore(this.templateContent,n.nextSibling)})},append(){this.removeDuplicateTargetChildren(),this.targetElements.forEach(n=>n.append(this.templateContent))},before(){this.targetElements.forEach(n=>{var e;return(e=n.parentElement)===null||e===void 0?void 0:e.insertBefore(this.templateContent,n)})},prepend(){this.removeDuplicateTargetChildren(),this.targetElements.forEach(n=>n.prepend(this.templateContent))},remove(){this.targetElements.forEach(n=>n.remove())},replace(){this.targetElements.forEach(n=>n.replaceWith(this.templateContent))},update(){this.targetElements.forEach(n=>{n.innerHTML="",n.append(this.templateContent)})}};class _W extends HTMLElement{async connectedCallback(){try{await this.render()}catch(e){console.error(e)}finally{this.disconnect()}}async render(){var e;return(e=this.renderPromise)!==null&&e!==void 0?e:this.renderPromise=(async()=>{this.dispatchEvent(this.beforeRenderEvent)&&(await Er(),this.performAction())})()}disconnect(){try{this.remove()}catch{}}removeDuplicateTargetChildren(){this.duplicateChildren.forEach(e=>e.remove())}get duplicateChildren(){var e;const t=this.targetElements.flatMap(s=>[...s.children]).filter(s=>!!s.id),r=[...(e=this.templateContent)===null||e===void 0?void 0:e.children].filter(s=>!!s.id).map(s=>s.id);return t.filter(s=>r.includes(s.id))}get performAction(){if(this.action){const e=yW[this.action];if(e)return e;this.raise("unknown action")}this.raise("action attribute is missing")}get targetElements(){if(this.target)return this.targetElementsById;if(this.targets)return this.targetElementsByQuery;this.raise("target or targets attribute is missing")}get templateContent(){return this.templateElement.content.cloneNode(!0)}get templateElement(){if(this.firstElementChild instanceof HTMLTemplateElement)return this.firstElementChild;this.raise("first child element must be a <template> element")}get action(){return this.getAttribute("action")}get target(){return this.getAttribute("target")}get targets(){return this.getAttribute("targets")}raise(e){throw new Error(`${this.description}: ${e}`)}get description(){var e,t;return(t=((e=this.outerHTML.match(/<[^>]+>/))!==null&&e!==void 0?e:[])[0])!==null&&t!==void 0?t:"<turbo-stream>"}get beforeRenderEvent(){return new CustomEvent("turbo:before-stream-render",{bubbles:!0,cancelable:!0})}get targetElementsById(){var e;const t=(e=this.ownerDocument)===null||e===void 0?void 0:e.getElementById(this.target);return t!==null?[t]:[]}get targetElementsByQuery(){var e;const t=(e=this.ownerDocument)===null||e===void 0?void 0:e.querySelectorAll(this.targets);return t.length!==0?Array.prototype.slice.call(t):[]}}Lt.delegateConstructor=bW;customElements.define("turbo-frame",Lt);customElements.define("turbo-stream",_W);(()=>{let n=document.currentScript;if(!!n&&!n.hasAttribute("data-turbo-suppress-warning")){for(;n=n.parentElement;)if(n==document.body)return console.warn(Qc`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `,n.outerHTML)}})();window.Turbo=gW;sl();const Da="[A-Za-z$_][0-9A-Za-z$_]*",kW=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],wW=["true","false","null","undefined","NaN","Infinity"],ol=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],al=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],cl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],xW=["arguments","this","super","console","window","document","localStorage","module","global"],EW=[].concat(cl,ol,al);function AW(n){const e=n.regex,t=(m,{after:A})=>{const C="</"+m[0].slice(1);return m.input.indexOf(C,A)!==-1},r=Da,s={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,A)=>{const C=m[0].length+m.index,I=m.input[C];if(I==="<"||I===","){A.ignoreMatch();return}I===">"&&(t(m,{after:C})||A.ignoreMatch());let F;if((F=m.input.substr(C).match(/^\s+extends\s+/))&&F.index===0){A.ignoreMatch();return}}},a={$pattern:Da,keyword:kW,literal:wW,built_in:EW,"variable.language":xW},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},k={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},b={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},x=n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),_={className:"comment",variants:[x,n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},y=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,p,k,b,h];d.contains=y.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(y)});const w=[].concat(_,d.contains),R=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),$={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R},E={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,e.concat(r,"(",e.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},B={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ol,...al]}},H={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},V={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[$],illegal:/%/},L={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function X(m){return e.concat("(?!",m.join("|"),")")}const ue={match:e.concat(/\b/,X([...cl,"super"]),r,e.lookahead(/\(/)),className:"title.function",relevance:0},N={begin:e.concat(/\./,e.lookahead(e.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},v={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},$]},S="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(S)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[$]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:B},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),H,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,p,k,b,_,h,B,{className:"attr",begin:r+e.lookahead(":"),relevance:0},f,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_,n.REGEXP_MODE,{className:"function",begin:S,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:i},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},V,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[$,n.inherit(n.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},N,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[$]},ue,L,E,v,{match:/\$[(.]/}]}}const Nr="[A-Za-z$_][0-9A-Za-z$_]*",ll=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ul=["true","false","null","undefined","NaN","Infinity"],hl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],dl=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],pl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],fl=["arguments","this","super","console","window","document","localStorage","module","global"],ml=[].concat(pl,hl,dl);function SW(n){const e=n.regex,t=(m,{after:A})=>{const C="</"+m[0].slice(1);return m.input.indexOf(C,A)!==-1},r=Nr,s={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(m,A)=>{const C=m[0].length+m.index,I=m.input[C];if(I==="<"||I===","){A.ignoreMatch();return}I===">"&&(t(m,{after:C})||A.ignoreMatch());let F;if((F=m.input.substr(C).match(/^\s+extends\s+/))&&F.index===0){A.ignoreMatch();return}}},a={$pattern:Nr,keyword:ll,literal:ul,built_in:ml,"variable.language":fl},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",h={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},k={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},b={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},x=n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),_={className:"comment",variants:[x,n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},y=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,p,k,b,h];d.contains=y.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(y)});const w=[].concat(_,d.contains),R=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),$={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R},E={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,e.concat(r,"(",e.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},B={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...hl,...dl]}},H={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},V={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[$],illegal:/%/},L={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function X(m){return e.concat("(?!",m.join("|"),")")}const ue={match:e.concat(/\b/,X([...pl,"super"]),r,e.lookahead(/\(/)),className:"title.function",relevance:0},N={begin:e.concat(/\./,e.lookahead(e.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},v={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},$]},S="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",f={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(S)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[$]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:B},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),H,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,p,k,b,_,h,B,{className:"attr",begin:r+e.lookahead(":"),relevance:0},f,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_,n.REGEXP_MODE,{className:"function",begin:S,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:i},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},V,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[$,n.inherit(n.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},N,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[$]},ue,L,E,v,{match:/\$[(.]/}]}}function CW(n){const e=SW(n),t=Nr,r=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[e.exports.CLASS_REFERENCE]},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},contains:[e.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},a=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],c={$pattern:Nr,keyword:ll.concat(a),literal:ul,built_in:ml.concat(r),"variable.language":fl},l={className:"meta",begin:"@"+t},u=(d,p,k)=>{const b=d.contains.findIndex(x=>x.label===p);if(b===-1)throw new Error("can not find mode to replace");d.contains.splice(b,1,k)};Object.assign(e.keywords,c),e.exports.PARAMS_CONTAINS.push(l),e.contains=e.contains.concat([l,s,i]),u(e,"shebang",n.SHEBANG()),u(e,"use_strict",o);const h=e.contains.find(d=>d.label==="func.def");return h.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx"]}),e}function TW(n){const e=n.regex,t=e.concat(/[A-Z_]/,e.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),r=/[A-Za-z0-9._:-]+/,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=n.inherit(i,{begin:/\(/,end:/\)/}),a=n.inherit(n.APOS_STRING_MODE,{className:"string"}),c=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,c,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,o,c,a]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(t,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function $W(n){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}var RW=`pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}`,La=!1,pn={false:"push",true:"unshift",after:"push",before:"unshift"},Ir={isPermalinkSymbol:!0};function Ws(n,e,t,r){var s;if(!La){var i="Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#todo-anchor-or-file";typeof process=="object"&&process&&process.emitWarning?process.emitWarning(i):console.warn(i),La=!0}var o=[Object.assign(new t.Token("link_open","a",1),{attrs:[].concat(e.permalinkClass?[["class",e.permalinkClass]]:[],[["href",e.permalinkHref(n,t)]],Object.entries(e.permalinkAttrs(n,t)))}),Object.assign(new t.Token("html_block","",0),{content:e.permalinkSymbol,meta:Ir}),new t.Token("link_close","a",-1)];e.permalinkSpace&&t.tokens[r+1].children[pn[e.permalinkBefore]](Object.assign(new t.Token("text","",0),{content:" "})),(s=t.tokens[r+1].children)[pn[e.permalinkBefore]].apply(s,o)}function gl(n){return"#"+n}function bl(n){return{}}var DW={class:"header-anchor",symbol:"#",renderHref:gl,renderAttrs:bl};function or(n){function e(t){return t=Object.assign({},e.defaults,t),function(r,s,i,o){return n(r,t,s,i,o)}}return e.defaults=Object.assign({},DW),e.renderPermalinkImpl=n,e}var rs=or(function(n,e,t,r,s){var i,o=[Object.assign(new r.Token("link_open","a",1),{attrs:[].concat(e.class?[["class",e.class]]:[],[["href",e.renderHref(n,r)]],e.ariaHidden?[["aria-hidden","true"]]:[],Object.entries(e.renderAttrs(n,r)))}),Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:Ir}),new r.Token("link_close","a",-1)];if(e.space){var a=typeof e.space=="string"?e.space:" ";r.tokens[s+1].children[pn[e.placement]](Object.assign(new r.Token(typeof e.space=="string"?"html_inline":"text","",0),{content:a}))}(i=r.tokens[s+1].children)[pn[e.placement]].apply(i,o)});Object.assign(rs.defaults,{space:!0,placement:"after",ariaHidden:!1});var qt=or(rs.renderPermalinkImpl);qt.defaults=Object.assign({},rs.defaults,{ariaHidden:!0});var vl=or(function(n,e,t,r,s){var i=[Object.assign(new r.Token("link_open","a",1),{attrs:[].concat(e.class?[["class",e.class]]:[],[["href",e.renderHref(n,r)]],Object.entries(e.renderAttrs(n,r)))})].concat(e.safariReaderFix?[new r.Token("span_open","span",1)]:[],r.tokens[s+1].children,e.safariReaderFix?[new r.Token("span_close","span",-1)]:[],[new r.Token("link_close","a",-1)]);r.tokens[s+1]=Object.assign(new r.Token("inline","",0),{children:i})});Object.assign(vl.defaults,{safariReaderFix:!1});var Ma=or(function(n,e,t,r,s){var i;if(!["visually-hidden","aria-label","aria-describedby","aria-labelledby"].includes(e.style))throw new Error("`permalink.linkAfterHeader` called with unknown style option `"+e.style+"`");if(!["aria-describedby","aria-labelledby"].includes(e.style)&&!e.assistiveText)throw new Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `"+e.style+"` style");if(e.style==="visually-hidden"&&!e.visuallyHiddenClass)throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");var o=r.tokens[s+1].children.filter(function(h){return h.type==="text"||h.type==="code_inline"}).reduce(function(h,d){return h+d.content},""),a=[],c=[];if(e.class&&c.push(["class",e.class]),c.push(["href",e.renderHref(n,r)]),c.push.apply(c,Object.entries(e.renderAttrs(n,r))),e.style==="visually-hidden"){if(a.push(Object.assign(new r.Token("span_open","span",1),{attrs:[["class",e.visuallyHiddenClass]]}),Object.assign(new r.Token("text","",0),{content:e.assistiveText(o)}),new r.Token("span_close","span",-1)),e.space){var l=typeof e.space=="string"?e.space:" ";a[pn[e.placement]](Object.assign(new r.Token(typeof e.space=="string"?"html_inline":"text","",0),{content:l}))}a[pn[e.placement]](Object.assign(new r.Token("span_open","span",1),{attrs:[["aria-hidden","true"]]}),Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:Ir}),new r.Token("span_close","span",-1))}else a.push(Object.assign(new r.Token("html_inline","",0),{content:e.symbol,meta:Ir}));e.style==="aria-label"?c.push(["aria-label",e.assistiveText(o)]):["aria-describedby","aria-labelledby"].includes(e.style)&&c.push([e.style,n]);var u=[Object.assign(new r.Token("link_open","a",1),{attrs:c})].concat(a,[new r.Token("link_close","a",-1)]);(i=r.tokens).splice.apply(i,[s+3,0].concat(u)),e.wrapper&&(r.tokens.splice(s,0,Object.assign(new r.Token("html_block","",0),{content:e.wrapper[0]+`
`})),r.tokens.splice(s+3+u.length+1,0,Object.assign(new r.Token("html_block","",0),{content:e.wrapper[1]+`
`})))});function Oa(n,e,t,r){var s=n,i=r;if(t&&Object.prototype.hasOwnProperty.call(e,s))throw new Error("User defined `id` attribute `"+n+"` is not unique. Please fix it in your Markdown to continue.");for(;Object.prototype.hasOwnProperty.call(e,s);)s=n+"-"+i,i+=1;return e[s]=!0,s}function sn(n,e){e=Object.assign({},sn.defaults,e),n.core.ruler.push("anchor",function(t){for(var r,s={},i=t.tokens,o=Array.isArray(e.level)?(r=e.level,function(h){return r.includes(h)}):function(h){return function(d){return d>=h}}(e.level),a=0;a<i.length;a++){var c=i[a];if(c.type==="heading_open"&&o(Number(c.tag.substr(1)))){var l=e.getTokensText(i[a+1].children),u=c.attrGet("id");u=u==null?Oa(e.slugify(l),s,!1,e.uniqueSlugStartIndex):Oa(u,s,!0,e.uniqueSlugStartIndex),c.attrSet("id",u),e.tabIndex!==!1&&c.attrSet("tabindex",""+e.tabIndex),typeof e.permalink=="function"?e.permalink(u,e,t,a):(e.permalink||e.renderPermalink&&e.renderPermalink!==Ws)&&e.renderPermalink(u,e,t,a),a=i.indexOf(c),e.callback&&e.callback(c,{slug:u,title:l})}}})}Object.assign(Ma.defaults,{style:"visually-hidden",space:!0,placement:"after",wrapper:null}),sn.permalink={__proto__:null,legacy:Ws,renderHref:gl,renderAttrs:bl,makePermalink:or,linkInsideHeader:rs,ariaHidden:qt,headerLink:vl,linkAfterHeader:Ma},sn.defaults={level:1,slugify:function(n){return encodeURIComponent(String(n).trim().toLowerCase().replace(/\s+/g,"-"))},uniqueSlugStartIndex:1,tabIndex:"-1",getTokensText:function(n){return n.filter(function(e){return["text","code_inline"].includes(e.type)}).map(function(e){return e.content}).join("")},permalink:!1,renderPermalink:Ws,permalinkClass:qt.defaults.class,permalinkSpace:qt.defaults.space,permalinkSymbol:"\xB6",permalinkBefore:qt.defaults.placement==="before",permalinkHref:qt.defaults.renderHref,permalinkAttrs:qt.defaults.renderAttrs},sn.default=sn;const LW=function(n){return encodeURIComponent(String(n).trim().toLowerCase().replace(/\s+/g,"-"))},MW={includeLevel:[1,2],containerClass:"table-of-contents",slugify:LW,markerPattern:/^\[\[toc\]\]/im,listType:"ul",format:function(n,e){return e.renderInline(n)},forceFullToc:!1,containerHeaderHtml:void 0,containerFooterHtml:void 0,transformLink:void 0};function OW(n,e,t){const r=[];let s=null;return e.forEach(i=>{if(i.type==="heading_open"){const o=NW(i),a=parseInt(i.tag.toLowerCase().replace("h",""),10);n.indexOf(a)>=0&&(s={level:a,text:null,anchor:o||null})}else if(s&&i.type==="inline"){const o=i.children.filter(a=>a.type==="text"||a.type==="code_inline").reduce((a,c)=>a+c.content,"");s.text=o,s.anchor||(s.anchor=t.slugify(o,i.content))}else i.type==="heading_close"&&(s&&r.push(s),s=null)}),r}function NW(n){if(n&&n.attrs&&n.attrs.length>0){const e=n.attrs.find(t=>Array.isArray(t)&&t.length>=2?t[0]==="id":!1);if(e&&Array.isArray(e)&&e.length>=2){const[t,r]=e;return r}}return null}function IW(n){return Math.min(...n.map(e=>e.level))}function Ms(n,e,t,r){const s={level:n,text:e,anchor:t,children:[],parent:r};return r.children.push(s),s}function PW(n){const e={level:IW(n)-1,anchor:null,text:null,children:[],parent:null};let t=e,r=t;return n.forEach(s=>{if(s.level>r.level)Array.from({length:s.level-r.level}).forEach(i=>{t=r,r=Ms(s.level,null,null,t)}),r.text=s.text,r.anchor=s.anchor;else if(s.level===r.level)r=Ms(s.level,s.text,s.anchor,t);else if(s.level<r.level){for(let i=0;i<r.level-s.level;i++)t=t.parent;r=Ms(s.level,s.text,s.anchor,t)}}),e}function yl(n,e,t){return"<"+e.listType+">"+n.children.map(r=>{let s="<li>",i=r.anchor;e&&e.transformLink&&(i=e.transformLink(i));let o=r.text?e.format(r.text,t,i):null;return s+=i?`<a href="#${i}">${o}</a>`:o||"",s+(r.children.length>0?yl(r,e,t):"")+"</li>"}).join("")+"</"+e.listType+">"}var qW=function(n,e){const t=Object.assign({},MW,e),r=t.markerPattern;let s;function i(o,a){let c,l;if(o.src.charCodeAt(o.pos)!==91||a||(l=r.exec(o.src.substr(o.pos)),l=l?l.filter(function(h){return h}):[],l.length<1))return!1;c=o.push("toc_open","toc",1),c.markup="[[toc]]",c=o.push("toc_body","",0),c=o.push("toc_close","toc",-1);var u=o.src.indexOf(`
`,o.pos);return u!==-1?o.pos=u:o.pos=o.pos+o.posMax+1,!0}n.renderer.rules.toc_open=function(o,a){var c='<div class="'+t.containerClass+'">';return t.containerHeaderHtml&&(c+=t.containerHeaderHtml),c},n.renderer.rules.toc_close=function(o,a){var c="";return t.containerFooterHtml&&(c=t.containerFooterHtml),c+"</div>"},n.renderer.rules.toc_body=function(o,a){if(t.forceFullToc)throw"forceFullToc was removed in version 0.5.0. For more information, see https://github.com/Oktavilla/markdown-it-table-of-contents/pull/41";{const c=OW(t.includeLevel,s.tokens,t),l=PW(c);return yl(l,t,n)}},n.core.ruler.push("grab_state",function(o){s=o}),n.inline.ruler.after("emphasis","toc",i)},FW=Object.defineProperty,BW=Object.getOwnPropertyDescriptor,_l=(n,e,t,r)=>{for(var s=r>1?void 0:r?BW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&FW(e,t,s),s};let Pr=class extends oe{get icone(){return this.theme!=="light"?Cd:_d}connectedCallback(){super.connectedCallback(),this.theme=localStorage.getItem("kami-theme-mode")||"light",document.addEventListener("theme",({detail:n})=>{this.theme=n.theme})}updateTheme(){const n=document.querySelector("kami-theme");!n||n.updateTheme(this.theme==="light"?"dark":"light")}render(){return M`
      <svg @click=${this.updateTheme} class="mode" viewBox="0 0 24 25">
        <path d=${this.icone}></path>
      </svg>  
    `}};Pr.styles=le`
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
  `;_l([ot()],Pr.prototype,"theme",2);Pr=_l([fe("mode-element")],Pr);var zW=Object.defineProperty,HW=Object.getOwnPropertyDescriptor,ar=(n,e,t,r)=>{for(var s=r>1?void 0:r?HW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&zW(e,t,s),s};let Gt=class extends oe{constructor(){super(...arguments);this.stroke=!1,this.background=!1,this.small=!1,this.href=""}render(){return M`
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
    `}};Gt.styles=le`
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
  `;ar([D()],Gt.prototype,"stroke",2);ar([D()],Gt.prototype,"background",2);ar([D()],Gt.prototype,"small",2);ar([D()],Gt.prototype,"href",2);Gt=ar([fe("button-element")],Gt);var UW=Object.defineProperty,jW=Object.getOwnPropertyDescriptor,ss=(n,e,t,r)=>{for(var s=r>1?void 0:r?jW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&UW(e,t,s),s};let fn=class extends oe{render(){return M`
      <h1 class="title" style="
        text-align: ${this.align||"left"};
        font-size: ${this.size||"72"}px;
        margin: ${this.margin||"0px auto 20px"}
      ">
        <span>
          <slot></slot>
        </span>  
      </h1>
    `}};fn.styles=le`
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
  `;ss([D()],fn.prototype,"align",2);ss([D()],fn.prototype,"size",2);ss([D()],fn.prototype,"margin",2);fn=ss([fe("title-element")],fn);var VW=Object.defineProperty,GW=Object.getOwnPropertyDescriptor,is=(n,e,t,r)=>{for(var s=r>1?void 0:r?GW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&VW(e,t,s),s};let mn=class extends oe{constructor(){super(...arguments);this.width=0,this.navIsOpen=!1}connectedCallback(){super.connectedCallback();const n=localStorage.getItem("kami-theme-mode");n&&["light","dark"].includes(n)&&(this.theme=n),document.addEventListener("theme",({detail:e})=>{this.theme=e.theme}),window.addEventListener("resize",this.updateWindowSize.bind(this)),this.updateWindowSize()}updateWindowSize(){this.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}openNav(){this.navIsOpen=!0}closeNav(){this.navIsOpen=!1}renderNav(){return M`
      <nav class="menu__nav">
        <a class="menu__link" href="/guide.html">guide</a>
        <a class="menu__link" href="/components.html">components</a>
        <a class="menu__link" href="https://github.com/Kamiapp-fr/kami-collection">github</a>
        <mode-element class="menu__link"></mode-element>
      </nav>
    `}renderResponsizeNav(){return M`
      <svg @click=${this.openNav} class="menu__icon" viewBox="0 0 24 25">
        <path d=${Ed}></path>
      </svg>  
    `}renderCloseNav(){return M`
      <svg @click=${this.closeNav} class="menu__icon menu__icon--close" viewBox="0 0 24 25">
        <path d=${Vr}></path>
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
    `}};mn.styles=le`
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
  `;is([ot()],mn.prototype,"theme",2);is([ot()],mn.prototype,"width",2);is([ot()],mn.prototype,"navIsOpen",2);mn=is([fe("menu-element")],mn);var WW=Object.defineProperty,ZW=Object.getOwnPropertyDescriptor,Fi=(n,e,t,r)=>{for(var s=r>1?void 0:r?ZW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&WW(e,t,s),s};let Wn=class extends oe{constructor(){super(...arguments);this.name="",this.summary=""}get nameNoPrefix(){const n=this.name.split("-");return n.shift(),n.join("-")}render(){return M`
      <div class="component">
        <h2 class="component__name">${this.name}</h2>
        <h3 class="component__description">${this.summary}</h3>
        <div class="component__cta">
          <button-element href="/docs/${this.nameNoPrefix}.html" background="true" small="true">Docs</button-element>
          <button-element href="/playgrounds/${this.nameNoPrefix}.html" stroke="true" small="true">Playground</button-element>
        </div>
      </div>
    `}};Wn.styles=le`
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
  `;Fi([D()],Wn.prototype,"name",2);Fi([D()],Wn.prototype,"summary",2);Wn=Fi([fe("component-element")],Wn);async function KW(n,e,t,r){var l,u,h,d,p;const s=await n;if(!Qn(s))return si;const i=Hr(s,t),o=ni(s,r),a=ri(o.members),c=su(o.members);return M`
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
            ${i.map(k=>M`<option value=${k.name}>${k.name}</option>`)}
          </select>
        </label>
      </nav>
    </header>
    <div ?hidden=${o.description===""} part="docs-description">
      ${fi(o.description)}
    </div>
    <api-docs-layout
      .name=${o.name}
      .props=${a}
      .attrs=${(l=o.attributes)!=null?l:[]}
      .methods=${c}
      .events=${(u=o.events)!=null?u:[]}
      .slots=${(h=o.slots)!=null?h:[]}
      .cssParts=${(d=o.cssParts)!=null?d:[]}
      .cssProps=${(p=o.cssProperties)!=null?p:[]}
      part="docs-container"
    ></api-docs-layout>
  `}class YW extends ii(oe){render(){return M`${ti(KW(this.jsonFetched,this._onSelect,this.only,this.selected))}`}_onSelect(e){this.selected=e.target.value}}const kl=le`
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
`;var XW=Object.defineProperty,JW=Object.getOwnPropertyDescriptor,QW=(n,e,t,r)=>{for(var s=r>1?void 0:r?JW(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&XW(e,t,s),s};let Na=class extends YW{static get styles(){return[jr,dc,kl,le`
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
    `}};Na=QW([fe("docs-element")],Na);var eZ=Object.defineProperty,tZ=Object.getOwnPropertyDescriptor,Bi=(n,e,t,r)=>{for(var s=r>1?void 0:r?tZ(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&eZ(e,t,s),s};let qr=class extends bi{static get styles(){return[jr,gi,kl,le`
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
      `]}constructor(){super();this.src="/custom-elements.json"}async connectedCallback(){if(super.connectedCallback(),!this.element)throw new Error("Missing element");this.only=[this.element],this.selected=this.element}firstUpdated(){this.setTemplates()}setTemplates(n){Br(Number(this._id),n||Array.from(this.querySelectorAll("template")))}render(){return M`
      <div class="playground">
        ${super.render()}
      </div>
    `}};Bi([D()],qr.prototype,"element",2);Bi([_t('[part="demo-output"]')],qr.prototype,"demo",2);qr=Bi([fe("playground-element")],qr);var nZ=Object.defineProperty,rZ=Object.getOwnPropertyDescriptor,sZ=(n,e,t,r)=>{for(var s=r>1?void 0:r?rZ(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&nZ(e,t,s),s};let Zs=class extends oe{render(){return M`
      <footer class="footer">
        <p>Made with ☕ by the <a href="https://www.kamiapp.fr/en">Kami</a> team</p>
        <p>Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a></p>
        <p>Copyright © 2019-${new Date().getFullYear()} Kami</p>
      </footer>
    `}};Zs.styles=le`
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
  `;Zs=sZ([fe("footer-element")],Zs);var iZ=Object.defineProperty,oZ=Object.getOwnPropertyDescriptor,aZ=(n,e,t,r)=>{for(var s=r>1?void 0:r?oZ(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&iZ(e,t,s),s};let Ks=class extends oe{render(){return M`
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
    `}};Ks.styles=le`
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
  `;Ks=aZ([fe("home-element")],Ks);var cZ=Object.defineProperty,lZ=Object.getOwnPropertyDescriptor,zi=(n,e,t,r)=>{for(var s=r>1?void 0:r?lZ(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&cZ(e,t,s),s};let Zn=class extends oe{constructor(){super(...arguments);this.name="Guide",this.element=""}render(){return M`
      <main class="guide">
        <title-element>${this.name}</title-element>
        <kami-markdown>
          <slot></slot>
        </kami-markdown>
        ${this.element?M`
          <docs-element selected="${this.element}" src="/custom-elements.json"></docs-element> 
        `:""}
      </main>
    `}};Zn.styles=le`
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
  `;zi([D()],Zn.prototype,"name",2);zi([D()],Zn.prototype,"element",2);Zn=zi([fe("guide-element")],Zn);var uZ=Object.defineProperty,hZ=Object.getOwnPropertyDescriptor,Hi=(n,e,t,r)=>{for(var s=r>1?void 0:r?hZ(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&uZ(e,t,s),s};let Kn=class extends oe{constructor(){super(...arguments);this.search="",this.manifest={schemaVersion:"1.0.0",modules:[]}}get components(){return this.manifest.modules.map(({declarations:e})=>{if(!e||e.length===0)return;const[{name:t,summary:r}]=e;return{name:this.toKebabCase(t),summary:r||""}}).filter(e=>e!==void 0)}async connectedCallback(){super.connectedCallback();const e=await(await fetch("/custom-elements.json")).json();this.manifest=e}toKebabCase(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}match(n){return n?new RegExp(this.search,"g").test(n):!0}onSearch({detail:n}){this.search=n.search}onClear(){this.search=""}render(){return M`
      <main class="components">
        <title-element align="center">Components</title-element>
        <kami-search-bar 
          class="components__search" 
          placeholder="Search"
          disable-sort
          @change="${this.onSearch}" 
          @clear="${this.onClear}" 
        ></kami-search-bar>

        <div class="components__content">
          ${this.components.map(({name:n,summary:e})=>M`
              ${this.match(n)?M`
                <component-element name="${n}" summary="${e}"></component-element>
              `:ie}
          `)}
        </div>
      </main>
    `}};Kn.styles=le`
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

    .components__search {
      width: 100%;
      max-width: 750px;
      margin-bottom: 35px;
      margin-top: 10px;
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
  `;Hi([ot()],Kn.prototype,"search",2);Hi([ot()],Kn.prototype,"manifest",2);Kn=Hi([fe("components-element")],Kn);var dZ=Object.defineProperty,pZ=Object.getOwnPropertyDescriptor,fZ=(n,e,t,r)=>{for(var s=r>1?void 0:r?pZ(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&dZ(e,t,s),s};let Ys=class extends oe{render(){return M`
      <div class="app">
        <menu-element></menu-element>
        <slot></slot>
        <footer-element></footer-element>
      </div>
    `}};Ys.styles=le`
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
  `;Ys=fZ([fe("app-element")],Ys);pe.registerHighlightLanguage("js",AW);pe.registerHighlightLanguage("ts",CW);pe.registerHighlightLanguage("html",TW);pe.registerHighlightLanguage("sh",$W);pe.registerHighlightStyle(RW);pe.use(sn);pe.use(qW);il(200);
