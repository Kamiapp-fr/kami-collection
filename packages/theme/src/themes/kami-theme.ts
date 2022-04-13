import './fonts/index.css';
import { css } from 'lit';
import Theme from './base-theme';

export default class KamiTheme extends Theme {
  static get tag() {
    return 'kami-theme';
  }

  static styles = css`
    ::slotted(*) {
      --kami-theme-font: "Gosha Sans";
      --kami-theme-shadow: 0 0 8px -5px black;
      --kami-theme-raduis: 20px;
    }

    .kami-light-mode::slotted(*) {
      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #8B8B8F;
      --kami-theme-background: #F5F5FB;
    }
  
    .kami-dark-mode::slotted(*) {
      --kami-theme-primary: #30E2C9;
      --kami-theme-secondary: #8B8B8F;
      --kami-theme-background: #303032;
    }
  `;
}
