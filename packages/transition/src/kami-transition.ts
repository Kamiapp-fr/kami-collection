import { html, LitElement, PropertyValueMap } from 'lit';
import { property, query } from 'lit/decorators.js';
import { Transitions, transitions } from './transitions';

export default class KamiTransition extends LitElement {
  static get tag() {
    return 'kami-transition';
  }

  @query('slot')
  private child?: HTMLSlotElement;

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

  protected updated(_changedProperties: PropertyValueMap<any>): void {
    const show = _changedProperties.get('show');

    if (show === undefined) {
      return;
    }

    if (this.animation && this.animation.playState !== 'finished') {
      this.animation.cancel();
    }

    this.toggle(this.show);
  }

  public toggle(show?: boolean) {
    if (show) {
      this.display();
      return;
    }

    this.hide();
  }

  public hide() {
    if (!this.child || !this.firstElementChild) {
      return;
    }

    this.animation = this.firstElementChild.animate(transitions[this.transition], { ...this.options, direction: 'reverse' });
    this.animation.onfinish = () => { this.child!.style.display = 'none'; };
  }

  public firstUpdated(): void {
    if (!this.child) {
      return;
    }

    if (this.show) {
      this.child!.style.display = 'inherit';
    }
  }

  public display() {
    if (!this.child || !this.firstElementChild) {
      return;
    }

    this.child.style.display = 'inherit';

    this.animation = this.firstElementChild.animate(transitions[this.transition], this.options);
    this.animation.onfinish = () => { this.child!.style.display = 'inherit'; };
  }

  protected render() {
    return html`
      <slot style="display: none;"></slot>
    `;
  }
}
