import './fonts/index.css';
import { css } from 'lit';
import Theme from './base-theme';

export default class KamiTheme extends Theme {
  static get tag() {
    return 'kami-theme';
  }

  static styles = css`
    ::slotted(*) {
      --kami-theme-font-primary: "Gosha Sans";
      --kami-theme-font-secondary: "UnB Office";
      --kami-theme-shadow: 0 0 8px -5px black;
      --kami-theme-text-shadow: 0 0 4px #0000008a;
      --kami-theme-radius: 20px;
      --kami-theme-white: white;
    }

    .kami-light-mode::slotted(*) {
      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #5472ea;
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: #565656;
      --kami-theme-background: white;
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  
    .kami-dark-mode::slotted(*) {
      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #5472ea;
      --kami-theme-accent: #8B8B8F;
      --kami-theme-text: white;
      --kami-theme-background: #303032;
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  `;
}
