import KamiComponent from '@kamiapp/component';

class Counter extends KamiComponent {
  constructor() {
    super({
      syncProps: true,
    });
  }

  static get tag() {
    return 'counter-exemple';
  }

  static get observedAttributes() { return ['counter']; }

  get counter() {
    return this.wrapper.querySelector('.counter');
  }

  setProperties() {
    this.props = this.observe({
      counter: parseInt(this.getUrlParam('counter') as string, 10) || 1,
    });
  }

  initEventListener() {
    this.counter?.append(this.createElement('<div class="counter__text">kami-counter</div>') as Element);
  }

  updateCounter(to: string) {
    this.setProp('counter', Number(this.props.counter) + Number(to));
    this.setUrlParam('counter', this.props.counter);
    return this;
  }

  displayAlert(warning: string) {
    if (Number(this.props.counter) > Number(warning)) {
      // eslint-disable-next-line no-alert
      alert(this.props.counter);
    }
  }

  propChangedCallback(name: string, value: any) {
    if (name === 'counter') {
      this.setUrlParam('counter', value);
    }
  }

  renderHtml() {
    return `
            <div class="counter">
                <button bind:click="updateCounter(1); displayAlert(10);" class="counter__btn" id="add">+</button>
                <button bind:click="updateCounter(-1)" class="counter__btn" id="remove">-</button>
                <div class="counter__text" id="counter">${this.getProp('counter')}</div>
            </div>
        `;
  }

  renderStyle() {
    return `
            .counter{
                display: flex;
                width: 100%;
                height: 100vh;
                justify-content: center;
                align-items: center;
            }
            .counter__btn{
                margin: 5px;
                padding: 10px;
            }
            
            .counter__text{
                font-size: 30px;
                font-family: sans-serif;
                margin: 10px;
            }
        `;
  }
}

customElements.define(Counter.tag, Counter);
