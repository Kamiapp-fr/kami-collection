import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  mdiInformation, mdiAlertCircle, mdiCheckCircle, mdiAlert, mdiClose,
} from '@mdi/js';
import { KamiFlashPosition, KamiFlashType, enumConverter } from './enum';

@customElement('kami-flash')
export default class KamiFlash extends LitElement {
  static styles = css`
    .kami-flash {
      display: flex;
      align-items: center;
      min-width: 300px;
      width: fit-content;
      padding: 15px;
      border-radius: 10px;
      box-sizing: border-box;
      line-height: 0;
    }

    .kami-flash--outlined {
      border: solid;
    }

    .kami-flash--info {
      background-color: rgb(var(--kami-theme-info-rgb), 0.75);
      color: var(--kami-theme-white);
      fill: var(--kami-theme-white);
    }

    .kami-flash--success {
      background-color: rgb(var(--kami-theme-success-rgb), 0.75);
      color: var(--kami-theme-white);
      fill: var(--kami-theme-white);
    }

    .kami-flash--warning {
      background-color: rgb(var(--kami-theme-warning-rgb), 0.75);
      color: var(--kami-theme-white);
      fill: var(--kami-theme-white);
    }

    .kami-flash--error {
      background-color: rgb(var(--kami-theme-error-rgb), 0.75);
      color: var(--kami-theme-white);
      fill: var(--kami-theme-white);
    }

    .kami-flash__icon {
      width: 30px;
      height: 30px;
    }

    .kami-flash__msg {
      font-family: "UnB Office";
      font-size: 20px;
      flex-grow: 1;
      padding: 0 10px;
      box-sizing: border-box;
    }

    .kami-flash__close {
      cursor: pointer;
    }
  `;

  get icon() {
    switch (this.type) {
      case KamiFlashType.info:
        return mdiInformation;

      case KamiFlashType.success:
        return mdiCheckCircle;

      case KamiFlashType.warning:
        return mdiAlert;

      case KamiFlashType.error:
        return mdiAlertCircle;

      default:
        return '';
    }
  }

  @property({
    converter: enumConverter(KamiFlashType, KamiFlashType.info),
  })
  public type: KamiFlashType = KamiFlashType.info;

  @property({
    converter: enumConverter(KamiFlashPosition, KamiFlashPosition['bottom-center']),
  })
  public position: KamiFlashPosition = KamiFlashPosition['bottom-center'];

  @property({ type: String })
  public message = '';

  @property({ type: Boolean })
  public stack = true;

  @property({ type: Number })
  public time?: number;

  @property({ type: Boolean })
  public progress = false;

  public connectedCallback(): void {
    super.connectedCallback();
  }

  renderIcon(path: string) {
    return html`
      <svg class="kami-flash__icon" viewBox="0 0 24 25">
        <path d=${path}></path>
      </svg>
    `;
  }

  protected render() {
    return html`
      <kami-transition transition="slide-y" appear>
        <div class="kami-flash kami-flash--${this.type} kami-flash--${this.position}">
          <div class="kami-flash__icon">
            ${this.renderIcon(this.icon)}
          </div>
          <div class="kami-flash__msg">
            ${this.message}
          </div>
          <div class="kami-flash__close">
            ${this.renderIcon(mdiClose)}
          </div>
        </div>
      </kami-transition>
    `;
  }
}
