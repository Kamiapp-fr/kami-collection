import{r as m,t as c,s as h,b as p,$ as s,o as g,e as f}from"./vendor.981edf70.js";const u=m`
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
    overflow-x: scroll;
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
    margin-bottom: 1.3rem;
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
  }

  pre,
  code {
    background-color: var(--kami-theme-secondary);
    color: var(--kami-theme-white);
    border-radius: var(--kami-theme-radius);
    padding: 2px 7px;
  }
`;var k=Object.defineProperty,v=Object.getOwnPropertyDescriptor,w=(n,e,r,i)=>{for(var t=i>1?void 0:i?v(e,r):e,a=n.length-1,o;a>=0;a--)(o=n[a])&&(t=(i?o(e,r,t):o(t))||t);return i&&t&&k(e,r,t),t};class d extends h{static get tag(){return"kami-markdown"}constructor(){super();this.content="",this.parser=new p}reduceHtml(e,r){return`${e}${r.trim()} 
`}handleSlotchange(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");if(!e)return;const i=e.assignedNodes({flatten:!0}).map(a=>a instanceof Text&&a.nodeValue).filter(a=>!!a);this.content=i.reduce((a,o)=>a+o,"").split(`
`).reduce(this.reduceHtml,"")}render(){return s`
      <slot 
        style="display: none" 
        @slotchange=${this.handleSlotchange}
      ></slot>
      <article>
        ${g(this.parser.render(this.content))}
      </article>
    `}}d.styles=u;w([c()],d.prototype,"content",2);var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,b=(n,e,r,i)=>{for(var t=i>1?void 0:i?y(e,r):e,a=n.length-1,o;a>=0;a--)(o=n[a])&&(t=(i?o(e,r,t):o(t))||t);return i&&t&&x(e,r,t),t};class l extends h{constructor(){super(...arguments);this.theme="light"}static get tag(){throw new Error("Missing element tag")}updated(e){!e.get("theme")||this.updateTheme(this.theme)}connectedCallback(){super.connectedCallback();const e=localStorage.getItem("kami-theme-mode");!e||this.updateTheme(e)}updateTheme(e){e!=="light"&&e!=="dark"||(this.theme=e,localStorage.setItem("kami-theme-mode",e))}render(){return s`
      <slot class="kami-${this.theme||"light"}-mode"></slot>
    `}}b([f({reflect:!0})],l.prototype,"theme",2);class z extends l{static get tag(){return"kami-theme"}}z.styles=m`
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
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  
    .kami-dark-mode::slotted(*) {
      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #5472ea;
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: white;
      --kami-theme-background: #303032;
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  `;export{d as K,z as a};
