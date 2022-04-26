import { css } from 'lit';

/**
 * Base markdown style.
 * This from the modest theme :
 * https://github.com/markdowncss/modest
 */
export const style = css`
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

  pre:not(.hljs), code:not(.hljs__code) {
    background-color: var(--kami-theme-secondary);
    color: var(--kami-theme-white);
  }

  code:not(.hljs__code) {
    padding: 4px 10px;
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
`;
