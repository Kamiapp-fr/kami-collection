import './fonts/index.css';
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import Theme from './base-theme';

/**
 * @summary Light and Dark kami theme.
 * @tag kami-theme
 *
 * @cssprop [--kami-theme-font-primary="Gosha Sans"]
 * @cssprop [--kami-theme-font-secondary="UnB Office"]
 * @cssprop [--kami-theme-shadow=0 0 8px -5px black]
 * @cssprop [--kami-theme-text-shadow=0 0 4px #0000008a]
 * @cssprop [--kami-theme-radius-white=20px]
 * @cssprop [--kami-theme-white=white]
 *
 * @cssprop [--kami-theme-primary=#30E2C9]
 * @cssprop [--kami-theme-secondary=#5472ea]
 * @cssprop [--kami-theme-accent=#8B8B8F]
 * @cssprop [--kami-theme-text=#565656]
 * @cssprop [--kami-theme-background=white]
 * @cssprop [--kami-theme-border-color=rgba(0, 0, 0, 0.09)]
 * @cssprop [--kami-theme-gradient-primary=116.95deg, #41B5FF -37.42%, #30E3CA 66.57%]
 * @cssprop [--kami-theme-gradient-secondary=116.95deg, #30E3CA 32.17%, #41B5FF 116.16%]
 */
@customElement('kami-theme')
export default class KamiTheme extends Theme {
  static styles = css`
    ::slotted(*) {
      --kami-theme-font-primary: "Gosha Sans";
      --kami-theme-font-secondary: "UnB Office";

      --kami-theme-shadow: 0 0 8px -5px black;
      --kami-theme-text-shadow: 0 0 4px #0000008a;
      --kami-theme-radius: 20px;

      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #5472ea;
      --kami-theme-white: white;
      --kami-theme-info: #38CFFF;
      --kami-theme-success: #47D6C2;
      --kami-theme-warning: #FF9F89;
      --kami-theme-error: #FC77A4;

      --kami-theme-primary-rgb: 48, 226, 201;
      --kami-theme-secondary-rgb: 84, 114, 234;
      --kami-theme-white-rgb: 255, 255, 255;
      --kami-theme-info-rgb: 56, 207, 255;
      --kami-theme-success-rgb: 71, 214, 194;
      --kami-theme-warning-rgb: 255, 159, 137;
      --kami-theme-error-rgb: 252, 119, 164;
    }

    .kami-light-mode::slotted(*) {
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: #565656;
      --kami-theme-background: white;
      --kami-theme-border-color: rgba(0, 0, 0, 0.09);
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  
    .kami-dark-mode::slotted(*) {
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: white;
      --kami-theme-background: #303032;
      --kami-theme-border-color: rgba(255, 255, 255, 0.09);
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  `;
}
