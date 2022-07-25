import {
  css,
  html,
  LitElement,
  PropertyValueMap,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @summary A simple horizontal progress bar.
 * @element kami-progress-bar
 *
 * @property {number} value - Percentage of the progress bar completed
 * @property {number?} time - Define the time used when you call the ``go()`` method.
 * @property {boolean} absolute - Set the position of progress-bar on the top of the parent element.
 * @property {boolean} bottom - Working only with the absolute attr. Set the position to the bottom.
 *
 * @cssprop [--kami-progress-bar-height=5px] - Height of the progress-bar.
 * @cssprop [--kami-progress-bar-container-opacity=0.5] - Opacity of the progress-bar container.
 * @cssprop [--kami-theme-primary-rgb=0, 0, 0] - RGB color of the progress-bar container.
 * @cssprop [--kami-theme-primary=black] - Color of the progress-bar value.
 *
 * @fires finish - Called when the ``go()`` method is done.
 */
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
      background-color: rgba(var(--kami-theme-primary-rgb, 0, 0, 0), var(--kami-progress-bar-container-opacity, 0.5));
      height: 100%;
      position: relative;
    }

    .kami-progress-bar__loading {
      background-color: var(--kami-theme-primary, black);
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

  /**
   * This method allow you to set the value of the progress bar using an animation.
   * The duration of this animation is defined by the attr ``time``.
   * If the time is not set the value of the progress-bar will be updated without any animation.
   * @param {number} to - set the progress-bar to this value
   */
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
