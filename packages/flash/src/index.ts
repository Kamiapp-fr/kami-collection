import { html, LitElement, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import {
  mdiInformation, mdiAlertCircle, mdiCheckCircle, mdiAlert, mdiClose,
} from '@mdi/js';
import KamiTransition from '@kamiapp/transition';
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
      backdrop-filter: blur(6px);
    }

    .kami-flash--outlined {
      border: 0.15rem solid;
      padding: 12.6px;
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

    .position {
      position: fixed;
      width: fit-content;
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
  `;

  get from() {
    switch (this.position) {
      case KamiFlashPosition['top-center']:
      case KamiFlashPosition['top-left']:
      case KamiFlashPosition['top-right']:
        return -50;

      case KamiFlashPosition['bottom-center']:
      case KamiFlashPosition['bottom-left']:
      case KamiFlashPosition['bottom-right']:
      default:
        return 50;
    }
  }

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

  @property({ type: Boolean })
  public outlined = false;

  @query('#transition')
  public transitionEl!: KamiTransition;

  public connectedCallback(): void {
    super.connectedCallback();
  }

  private onClickClose() {
    this.transitionEl.toggle(false);
  }

  private async onCloseFinish() {
    this.dispatchEvent(new CustomEvent('close'));

    // This is needed to wait the full update
    // Else when you remove the component you
    // get an error due to lit render
    await this.getUpdateComplete();
    this.remove();
  }

  private renderIcon(path: string) {
    return html`
      <svg class="kami-flash__icon" viewBox="0 0 24 25">
        <path d=${path}></path>
      </svg>
    `;
  }

  protected render() {
    return html`
      <kami-transition 
        id="transition" 
        class="position position--${this.position}" 
        transition="slide-y" 
        appear
        from="${this.from}"
        to="0"
        @hide="${this.onCloseFinish}"
      >
        <div class="
          kami-flash 
          kami-flash--${this.type}
          ${this.outlined ? 'kami-flash--outlined' : ''}
        ">
          <div class="kami-flash__icon">
            ${this.renderIcon(this.icon)}
          </div>
          <div class="kami-flash__msg">
            ${this.message}
          </div>
          <div @click="${this.onClickClose}" class="kami-flash__close">
            ${this.renderIcon(mdiClose)}
          </div>
        </div>
      </kami-transition>
    `;
  }
}
