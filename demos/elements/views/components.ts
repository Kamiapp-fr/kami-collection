import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Package } from 'custom-elements-manifest/schema';

@customElement('components-element')
export default class ComponentsElement extends LitElement {
  static styles = css`
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
  `;

  private get components() {
    const components = this.manifest.modules.map(({ declarations }) => {
      if (!declarations || declarations.length === 0) {
        return undefined;
      }

      const [{ name, summary }] = declarations;

      return {
        name: this.toKebabCase(name),
        summary: summary || '',
      };
    });

    return components.filter((x): x is {
      name: string;
      summary: string;
    } => x !== undefined);
  }

  @state()
  private manifest: Package = {
      schemaVersion: '1.0.0',
      modules: [],
    };

  async connectedCallback() {
    super.connectedCallback();

    const res = await fetch('/custom-elements.json');
    const data = await res.json() as Package;

    this.manifest = data;
  }

  toKebabCase(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  protected render() {
    return html`
      <main class="components">
        <title-element align="center">Components</title-element>
        <div class="components__content">
          ${this.components.map(({ name, summary }) => html`
            <component-element name="${name}" summary="${summary}"></component-element>
          `)}
        </div>
      </main>
    `;
  }
}
