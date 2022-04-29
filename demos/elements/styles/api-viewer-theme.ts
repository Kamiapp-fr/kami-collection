import { css } from 'lit';

export const theme = css`
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
    background-image: var(--kami-theme-gradient-primary);
    padding: 0.75rem 1rem;
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
  }

  [part="demo-tabs"] {
    border: none;

  }

  api-viewer-panel {
    border-radius: 10px;
    overflow: hidden;
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
`;
