import {
  css, html, LitElement, PropertyValueMap,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import { Transitions, transitions } from './transitions';

export default class KamiTransition extends LitElement {
  static get tag() {
    return 'kami-transition';
  }

  static style = css`
    :host {
      position: relative;
      display: inline-block;
    }
  `;

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
    if (!this.child) {
      return;
    }

    if (this.show && this.single) {
      this.child!.style.display = 'inherit';
    }

    if (!this.show && this.in && this.out) {
      this.childIn!.style.display = 'none';
      this.childOut!.style.display = 'inherit';
    }

    if (this.show && this.in && this.out) {
      this.childIn!.style.display = 'inherit';
      this.childOut!.style.display = 'none';
    }

    if (this.single && (this.in || this.out)) {
      throw new Error('In-out does not work with default slot');
    }

    if (this.in && !this.out) {
      throw new Error('Missing out slot');
    }

    if (this.out && !this.in) {
      throw new Error('Missing in slot');
    }
  }

  public display() {
    if (!this.child || !this.single) {
      return;
    }

    this.child.style.display = 'inherit';

    this.animation = this.single.animate(transitions[this.transition], this.options);
    this.animation.onfinish = () => { this.child!.style.display = 'inherit'; };
  }

  public displayInOut() {
    if (!this.childIn || !this.childOut || !this.in || !this.out) {
      return;
    }

    this.childIn.style.display = 'inherit';
    this.childOut.style.display = 'inherit';

    this.animationIn = this.in.animate(transitions[this.transition], this.options);
    this.animationOut = this.out.animate(transitions[this.transition], { ...this.options, direction: 'reverse' });

    this.animationIn.onfinish = () => { this.childIn!.style.display = 'inherit'; };
    this.animationOut.onfinish = () => { this.childOut!.style.display = 'none'; };

    this.animationIn.oncancel = () => { this.childIn!.style.display = 'inherit'; };
    this.animationOut.oncancel = () => { this.childOut!.style.display = 'none'; };
  }

  public hide() {
    if (!this.child || !this.single) {
      return;
    }

    this.animation = this.single.animate(transitions[this.transition], { ...this.options, direction: 'reverse' });
    this.animation.onfinish = () => { this.child!.style.display = 'none'; };
  }

  public hideInOut() {
    if (!this.childIn || !this.childOut || !this.in || !this.out) {
      return;
    }

    this.childIn.style.display = 'inherit';
    this.childOut.style.display = 'inherit';

    this.animationIn = this.in.animate(transitions[this.transition], { ...this.options, direction: 'reverse' });
    this.animationOut = this.out.animate(transitions[this.transition], this.options);

    this.animationIn.onfinish = () => { this.childIn!.style.display = 'none'; };
    this.animationOut.onfinish = () => { this.childOut!.style.display = 'inherit'; };
    this.animationIn.oncancel = () => { this.childIn!.style.display = 'none'; };
    this.animationOut.oncancel = () => { this.childOut!.style.display = 'inherit'; };
  }

  public cancelAnimation(animation?: Animation) {
    if (animation && animation.playState !== 'finished') {
      animation.cancel();
    }
  }

  protected render() {
    return html`
      <slot id="single" style="display: none;"></slot>
      <slot id="in" name="in" style="display: none;"></slot>
      <slot id="out" name="out" style="display: none;"></slot>
    `;
  }
}
