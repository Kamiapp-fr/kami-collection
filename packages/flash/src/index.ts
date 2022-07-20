import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { KamiFlashPosition, KamiFlashType, enumConverter } from './enum';

@customElement('kami-flash')
export default class KamiFlash extends LitElement {
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

  protected render() {
    return html`
      <kami-transition transition="slide-y" appear>
        <div class="kami-flash">
          <div class="kami-flash__icon"></div>
          <div class="kami-flash__msg">
            ${this.message}
          </div>
          <div class="kami-flash__close"></div>
        </div>
      </kami-transition>
    `;
  }
}
