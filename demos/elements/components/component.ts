import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('component-element')
export default class ComponentElement extends LitElement {
  static styles = css`
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
  `;

  @property()
  public name: string = '';

  @property()
  public summary: string = '';

  public get nameNoPrefix() {
    const name = this.name.split('-');
    name.shift();
    return name.join('-');
  }

  protected render() {
    return html`
      <div class="component">
        <h2 class="component__name">${this.name}</h2>
        <h3 class="component__description">${this.summary}</h3>
        <div class="component__cta">
          <button-element href="/docs/${this.nameNoPrefix}.html" background="true" small="true">Docs</button-element>
          <button-element href="/playgrounds/${this.nameNoPrefix}.html" stroke="true" small="true">Playground</button-element>
        </div>
      </div>
    `;
  }
}
