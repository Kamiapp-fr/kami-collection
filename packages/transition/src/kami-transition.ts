import { html, LitElement, PropertyValueMap } from 'lit';
import { property, query } from 'lit/decorators.js';
import { Transitions, transitions } from './transitions';

export default class KamiTransition extends LitElement {
  static get tag() {
    return 'kami-transition';
  }

  @query('#single')
  private child?: HTMLSlotElement;

  @query('#in')
  private childIn?: HTMLSlotElement;

  @query('#out')
  private childOut?: HTMLSlotElement;

  @property({
    converter: (value) => value === 'true',
  })
  private show?: boolean;

  @property({
    type: Number,
  })
  private duration: number = 500;

  @property({
    type: Number,
  })
  private delay: number = 0;

  @property({
    type: String,
  })
  private easing: string = 'ease';

  private animation?: Animation;

  private animationIn?: Animation;

  private animationOut?: Animation;

  @property({
    type: String,
  })
  private transition: keyof Transitions = 'fade';

  public get options() {
    return {
      duration: this.duration,
      delay: this.delay,
      easing: this.easing,
    };
  }

  public get single() {
    return this.getElementSlot(this.child);
  }

  public get in() {
    return this.getElementSlot(this.childIn);
  }

  public get out() {
    return this.getElementSlot(this.childOut);
  }

  private getElementSlot(slot?: HTMLSlotElement) {
    const el = slot?.assignedElements({ flatten: true })[0];

    if (!el) {
      return undefined;
    }

    return el;
  }

  protected updated(_changedProperties: PropertyValueMap<any>): void {
    const show = _changedProperties.get('show');

    if (show === undefined) {
      return;
    }

    this.cancelAnimation(this.animation);
    this.cancelAnimation(this.animationIn);
    this.cancelAnimation(this.animationOut);

    this.updateHostSize(this.in);
    this.updateHostSize(this.out);

    this.toggle(this.show);
  }

  public toggle(show?: boolean) {
    if (show && this.single) {
      this.display();
    }

    if (show && this.in && this.out) {
      this.displayInOut();
    }

    if (!show && this.single) {
      this.hide();
    }

    if (!show && this.in && this.out) {
      this.hideInOut();
    }
  }

  public firstUpdated(): void {
    if (this.single && (this.in || this.out)) {
      throw new Error('In-out does not work with default slot');
    }

    if (this.in && !this.out) {
      throw new Error('Missing out slot');
    }

    if (this.out && !this.in) {
      throw new Error('Missing in slot');
    }

    if (this.show && this.single) {
      this.displayEl(this.child);
    }

    if (!this.show && this.in && this.out) {
      this.hideEl(this.childIn);
      this.displayEl(this.childOut);
    }

    if (this.show && this.in && this.out) {
      this.displayEl(this.childIn);
      this.hideEl(this.childOut);
    }

    this.updateHostSize(this.in);
    this.updateHostSize(this.out);
    this.style.display = 'block';
  }

  public display() {
    if (!this.child || !this.single) {
      return;
    }

    this.displayEl(this.child);

    this.animation = this.single.animate(transitions[this.transition], this.options);
    this.animation.onfinish = () => this.displayEl(this.child);
  }

  public displayInOut() {
    if (!this.childIn || !this.childOut || !this.in || !this.out) {
      return;
    }

    this.displayEl(this.childIn);

    this.animationIn = this.in.animate(transitions[this.transition], this.options);
    this.animationOut = this.out.animate(transitions[this.transition], { ...this.options, direction: 'reverse' });

    this.animationIn.onfinish = () => this.displayEl(this.childIn);
    this.animationIn.oncancel = () => this.displayEl(this.childIn);

    this.animationOut.onfinish = () => this.hideEl(this.childOut);
    this.animationOut.oncancel = () => this.hideEl(this.childOut);
  }

  public hide() {
    if (!this.child || !this.single) {
      return;
    }

    this.animation = this.single.animate(transitions[this.transition], { ...this.options, direction: 'reverse' });
    this.animation.onfinish = () => this.hideEl(this.child);
  }

  public hideInOut() {
    if (!this.childIn || !this.childOut || !this.in || !this.out) {
      return;
    }

    this.displayEl(this.childOut);

    this.animationIn = this.in.animate(transitions[this.transition], { ...this.options, direction: 'reverse' });
    this.animationOut = this.out.animate(transitions[this.transition], this.options);

    this.animationIn.onfinish = () => this.hideEl(this.childIn);
    this.animationIn.oncancel = () => this.hideEl(this.childIn);

    this.animationOut.onfinish = () => this.displayEl(this.childOut);
    this.animationOut.oncancel = () => this.displayEl(this.childOut);
  }

  public updateHostSize(el?: Element) {
    if (el && el.clientWidth && el.clientHeight) {
      this.style.width = `${el.clientWidth}px`;
      this.style.height = `${el.clientHeight}px`;
    }
  }

  public cancelAnimation(animation?: Animation) {
    if (animation && animation.playState !== 'finished') {
      animation.cancel();
    }
  }

  public displayEl(el?: HTMLElement) {
    if (!el) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    el.style.display = 'inherit';
  }

  public hideEl(el?: HTMLElement) {
    if (!el) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    el.style.display = 'none';
  }

  protected render() {
    return html`
      <slot id="single" style="display: none;"></slot>
      <slot id="in" name="in" style="display: none; position: absolute;"></slot>
      <slot id="out" name="out" style="display: none; position: absolute;"></slot>
    `;
  }
}
