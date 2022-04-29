import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-element')
export default class HomeElement extends LitElement {
  static styles = css`
    .home {
      width: 100%;
      height: calc(100% - 65px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .home__title {
      font-style: normal;
      font-weight: 900;
      font-size: 64px;
      line-height: 77px;
      text-align: center;
      margin: 20px 0 0 0;

      background: linear-gradient(90.45deg, #34D3CE 9.1%, #4F7BE7 95.02%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .home__description {
      max-width: 475px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: var(--kami-theme-text);
    }

    .home__description a {
      text-decoration: none;
      color: var(--kami-theme-primary);
      font-weight: bold;
    }

    .home__description a:hover {
      color: var(--kami-theme-secondary);
    }

    .home__buttons {
      display: flex;
      flex-wrap: wrap;
    }

    .home__button {
      margin: 20px 10px;
    }
  `;

  protected render() {
    return html`
      <main class="home">
        <img src="../img/logo.png">
        <h1 class="home__title">KAMI COLLECTION</h1>
        <h2 class="home__description">
          A collection of web component develloped by the <a href="https://www.kamiapp.fr">Kami</a> team. 
          It contain a list of usefull component for all your project.
        </h2>
        <div class="home__buttons">
          <button-element class="home__button" background="true">Getting Started</button-element>
          <button-element class="home__button" stroke="true">Github</button-element>
        </div>
      </main>
    `;
  }
}
