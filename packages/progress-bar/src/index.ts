import {
  css,
  html,
  LitElement,
  PropertyValueMap,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('kami-progress-bar')
export default class KamiProgressBar extends LitElement {
  static styles = css`
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
      background-color: rgba(var(--kami-theme-primary-rgb), var(--kami-progress-bar-container-opacity, 0.5));
      height: 100%;
      position: relative;
    }

    .kami-progress-bar__loading {
      background-color: var(--kami-theme-primary);
      height: 100%;
      position: absolute;
    }
  `;

  @property({ type: Number })
  public value = 0;

  @property({ type: Number })
  public time?: number;

  @property({ type: Boolean })
  public absolute = false;

  @property({ type: Boolean })
  public bottom = false;

  private interval?: number;

  private delta = 0;

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.get('absolute') && this.parentElement) {
      this.parentElement.style.position = 'relative';
    }
  }

  public go(to = 0) {
    if (this.interval) {
      return;
    }

    if (!this.time) {
      this.value = to;
      return;
    }

    this.delta = (this.value / this.time) * 10;
    this.interval = window.setInterval(() => this.progress(to), 10);
  }

  private progress(to = 0) {
    if (this.value <= to) {
      this.dispatchEvent(new CustomEvent('finish', {
        detail: {
          value: this.value,
        },
      }));

      clearInterval(this.interval);
      this.interval = undefined;
      return;
    }

    this.value -= this.delta;
  }

  protected render() {
    return html`
      <div class="
          kami-progress-bar 
          ${this.absolute ? 'kami-progress-bar--absolute' : ''}
          ${this.bottom ? 'kami-progress-bar--bottom' : ''}
        "
      >
        <div class="kami-progress-bar__container">
          <div class="kami-progress-bar__loading" style="width: ${this.value}%">
          </div>
        </div>  
      </div>
    `;
  }
}
