import { html, LitElement, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import {
  mdiInformation,
  mdiAlertCircle,
  mdiCheckCircle,
  mdiAlert,
  mdiClose,
} from '@mdi/js';
import KamiProgressBar from '@kamiapp/progress-bar';
import KamiTransition from '@kamiapp/transition';
import { KamiFlashPosition, KamiFlashType, enumConverter } from './enum';
import { KamiFlashStore } from './store';

const DEFAULT_GAP = 10;
const DEFAULT_SIZE = 60;

interface KamiFlashOptions {
  message?: string,
  type?: KamiFlashType,
  position?: KamiFlashPosition,
  time?: number;
  outlined?: boolean,
  blured?: boolean,
  container?: HTMLElement,
  gap?: number,
  size?: number,
}

/**
 * @summary A simple alert component for your notifications.
 * @tag kami-flash
 */
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
      overflow: hidden;
      position: relative;
    }

    .kami-flash--outlined {
      border: 0.15rem solid;
      padding: 12.6px;
    }

    .kami-flash--outlined .kami-flash__progress {
      --kami-progress-bar-height: 3px;
    }

    .kami-flash--blured {
      backdrop-filter: blur(6px);
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

  static create({
    message = '',
    type = KamiFlashType.info,
    position = KamiFlashPosition['bottom-center'],
    outlined = false,
    blured = false,
    gap = DEFAULT_GAP,
    size = DEFAULT_SIZE,
    time,
    container,
  }: KamiFlashOptions) {
    const root = container || document.body;
    const flash = document.createElement('kami-flash');

    flash.setAttribute('message', message);
    flash.setAttribute('type', type);
    flash.setAttribute('position', position);
    flash.setAttribute('gap', gap.toString());
    flash.setAttribute('size', size.toString());

    if (time) {
      flash.setAttribute('time', time.toString());
    }

    if (outlined) {
      flash.setAttribute('outlined', '');
    }

    if (blured) {
      flash.setAttribute('blured', '');
    }

    root.append(flash);

    return flash;
  }

  static clear() {
    const { stored } = KamiFlashStore;
    const closes = async (flash: KamiFlash) => flash.close();

    return Promise.all(stored.map(closes));
  }

  private static refresh(position: KamiFlashPosition) {
    KamiFlashStore.items[position].forEach((f) => f.updatePosition());
  }

  get isLeft() {
    return this.position === KamiFlashPosition['bottom-left']
      || this.position === KamiFlashPosition['top-left'];
  }

  get isRight() {
    return this.position === KamiFlashPosition['bottom-right']
      || this.position === KamiFlashPosition['top-right'];
  }

  get isTop() {
    return this.position === KamiFlashPosition['top-center']
      || this.position === KamiFlashPosition['top-left']
      || this.position === KamiFlashPosition['top-right'];
  }

  get isBottom() {
    return this.position === KamiFlashPosition['bottom-center']
      || this.position === KamiFlashPosition['bottom-left']
      || this.position === KamiFlashPosition['bottom-right'];
  }

  get from() {
    return this.isTop ? -50 : 50;
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

  @property({ type: Number })
  public time?: number;

  @property({ type: Boolean })
  public progress = false;

  @property({ type: Boolean })
  public outlined = false;

  @property({ type: Boolean })
  public blured = false;

  @property({ type: Number })
  public gap = DEFAULT_GAP;

  @property({ type: Number })
  public size = DEFAULT_SIZE;

  @query('#transition')
  public transitionEl!: KamiTransition;

  @query('#flash')
  public flashEl!: HTMLDivElement;

  @query('#progress')
  public progressEl?: KamiProgressBar;

  @property({ attribute: false })
  public index?: number;

  private isClosing = false;

  public connectedCallback(): void {
    super.connectedCallback();
    KamiFlashStore.add(this);
  }

  protected firstUpdated(): void {
    this.updatePosition();

    if (this.time && this.progressEl) {
      this.progressEl.go(0);
    }
  }

  private updatePosition() {
    const length = this.index;
    const direction = this.isTop ? 'top' : 'bottom';

    if (Number.isNaN(length) || length === undefined) {
      return;
    }

    if (this.isRight) {
      this.transitionEl.style.right = `${this.gap}px`;
    }

    if (this.isLeft) {
      this.transitionEl.style.left = `${this.gap}px`;
    }

    if (length === 0) {
      this.transitionEl.style[direction] = `${this.gap}px`;
      return;
    }

    this.transitionEl.style[direction] = `${(this.size * length) + this.gap * (length + 1)}px`;
  }

  public setIndex(index: number) {
    this.index = index;
  }

  public close() {
    if (this.isClosing) {
      return;
    }

    this.isClosing = true;
    this.transitionEl.to = '1';
    this.transitionEl.from = '0.8';
    this.transitionEl.duration = 275;
    this.transitionEl.transition = 'scale';
    this.transitionEl.toggle(false);
    this.dispatchEvent(new CustomEvent('close'));
  }

  public async delete() {
    this.dispatchEvent(new CustomEvent('delete'));

    // This is needed to wait the full update
    // Else when you remove the component you
    // get an error due to lit render
    await this.getUpdateComplete();

    this.remove();
    KamiFlashStore.remove(this);
    KamiFlash.refresh(this.position);
  }

  private onClickClose() {
    this.close();
  }

  private onCloseFinish() {
    this.delete();
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
        <div
          id="flash" 
          class="
            kami-flash 
            kami-flash--${this.type}
            ${this.outlined ? 'kami-flash--outlined' : ''}
            ${this.blured ? 'kami-flash--blured' : ''}
          "
        >
          <div class="kami-flash__icon">
            ${this.renderIcon(this.icon)}
          </div>
          <div class="kami-flash__msg">
            ${this.message}
          </div>
          <div @click="${this.onClickClose}" class="kami-flash__close">
            ${this.renderIcon(mdiClose)}
          </div>
          ${this.time ? html`
            <kami-progress-bar 
              id="progress" 
              class="kami-flash__progress"
              value="100" 
              time="${this.time}"
              absolute
              @finish="${this.onClickClose}"
            ></kami-progress-bar>
          ` : ''}
        </div>
      </kami-transition>
    `;
  }
}
