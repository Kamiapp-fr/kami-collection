import { html, LitElement, PropertyValueMap } from 'lit';
import { property, query } from 'lit/decorators.js';
import { Transitions, transitions } from './transitions';

interface RunAnimation {
  child: HTMLSlotElement,
  el: Element,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
  show?: boolean,
}

interface RunAnimationInOut {
  childIn: HTMLSlotElement,
  childOut: HTMLSlotElement,
  inEl: Element,
  outEl: Element,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
}

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

  @property({
    type: String,
  })
  private transition: keyof Transitions = 'fade';

  private animation?: Animation;

  private animationIn?: Animation;

  private animationOut?: Animation;

  public state?: boolean;

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
      this.state = true;
    }

    if (!this.show && this.in && this.out) {
      this.hideEl(this.childIn);
      this.displayEl(this.childOut);
    }

    if (this.show && this.in && this.out) {
      this.displayEl(this.childIn);
      this.hideEl(this.childOut);
      this.state = true;
    }

    this.updateHostSize(this.in);
    this.updateHostSize(this.out);
    this.style.display = 'block';
    this.style.opacity = '1';
  }

  public runAnimation({
    child,
    el,
    keyframes,
    options,
    show = true,
  }: RunAnimation) {
    if (show) {
      this.displayEl(child);
    }

    const animation = el.animate(keyframes, options);

    animation.onfinish = () => {
      if (show) {
        this.displayEl(child);
      } else {
        this.hideEl(child);
      }
    };

    return animation;
  }

  public runAnimationInOut({
    childIn,
    childOut,
    inEl,
    outEl,
    keyframes,
    options,
  }: RunAnimationInOut) {
    this.displayEl(childIn);

    const animationIn = inEl.animate(keyframes, options);
    const animationOut = outEl.animate(keyframes, { ...options, direction: 'reverse' });

    animationIn.onfinish = () => this.displayEl(childIn);
    animationIn.oncancel = () => this.displayEl(childIn);

    animationOut.onfinish = () => this.hideEl(childOut);
    animationOut.oncancel = () => this.hideEl(childOut);

    return { animationIn, animationOut };
  }

  public display() {
    if (!this.child || !this.single) {
      return;
    }

    this.animation = this.runAnimation({
      child: this.child,
      el: this.single,
      keyframes: transitions[this.transition],
      options: this.options,
    });

    this.state = true;
  }

  public displayInOut() {
    if (!this.childIn || !this.childOut || !this.in || !this.out) {
      return;
    }

    const { animationIn, animationOut } = this.runAnimationInOut({
      childIn: this.childIn,
      childOut: this.childOut,
      inEl: this.in,
      outEl: this.out,
      keyframes: transitions[this.transition],
      options: this.options,
    });

    this.animationIn = animationIn;
    this.animationOut = animationOut;

    this.state = true;
  }

  public hide() {
    if (!this.child || !this.single) {
      return;
    }

    this.animation = this.runAnimation({
      child: this.child,
      el: this.single,
      keyframes: transitions[this.transition],
      show: false,
      options: {
        ...this.options,
        direction: 'reverse',
      },
    });

    this.state = false;
  }

  public hideInOut() {
    if (!this.childIn || !this.childOut || !this.in || !this.out) {
      return;
    }

    const { animationIn, animationOut } = this.runAnimationInOut({
      childIn: this.childOut,
      childOut: this.childIn,
      inEl: this.out,
      outEl: this.in,
      keyframes: transitions[this.transition],
      options: this.options,
    });

    this.animationIn = animationOut;
    this.animationOut = animationIn;

    this.state = false;
  }

  public updateHostSize(el?: Element) {
    if (!el || (!el.clientWidth && !el.clientHeight)) {
      return;
    }

    this.style.width = `${el.clientWidth}px`;
    this.style.height = `${el.clientHeight}px`;
  }

  public cancelAnimation(animation?: Animation) {
    if (!animation || animation.playState === 'finished') {
      return;
    }

    animation.cancel();
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
