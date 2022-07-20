import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export function enumConverter<T>(enumValue: T, defaultValue: keyof typeof enumValue) {
  return (value: string | null) => {
    if (!value || !Object.keys(enumValue).includes(value)) {
      return enumValue[defaultValue];
    }

    return enumValue[value as keyof typeof enumValue];
  };
}

export enum KamiFlashType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export enum KamiFlashPosition {
  'top-center' = 'top-center',
  'top-left' = 'top-left',
  'top-right' = 'top-right',
  'bottom-center' = 'bottom-center',
  'bottom-left' = 'bottom-left',
  'bottom-right' = 'bottom-right',
}

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

  protected render() {
    return html`
      <h1>${this.type} ${this.position}</h1>
    `;
  }
}
