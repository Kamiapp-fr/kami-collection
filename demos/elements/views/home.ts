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

    .home__logo {
      width: 35%;
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
      justify-content: center;
      align-items: center;
    }

    .home__button {
      margin: 20px 10px;
    }

    @media screen and (max-width: 700px) {
      .home {
        padding: 0 20px;
        box-sizing: border-box;
      }

      .home__logo {
        width: 80%;
        margin-bottom: 25px;
      }

      .home__buttons {
        flex-direction: column;
      }

      .home__button {
        margin: 0;
        margin-top: 10px;
      }
    }
  `;

  protected render() {
    return html`
      <main class="home">
        <img class="home__logo" src="../img/logo.png">
        <title-element size="64" margin="20px 0 0 0" >KAMI COLLECTION</title-element>
        <h2 class="home__description">
          A collection of web component develloped by the <a href="https://www.kamiapp.fr">Kami</a> team. 
          It contain a list of usefull component for all your project.
        </h2>
        <div class="home__buttons">
          <button-element href="/guide.html" class="home__button" background="true">
            Getting Started
          </button-element>
          <button-element href="/components.html" class="home__button" stroke="true">
            Components
          </button-element>
        </div>
      </main>
    `;
  }
}
