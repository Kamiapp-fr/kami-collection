import{K as n}from"./kami-component.8dc500b2.js";import"./vendor.2a8d4232.js";class e extends n{constructor(){super({syncProps:!0})}static get tag(){return"counter-exemple"}static get observedAttributes(){return["counter"]}get counter(){return this.wrapper.querySelector(".counter")}setProperties(){this.props=this.observe({counter:parseInt(this.getUrlParam("counter"),10)||1})}initEventListener(){var t;(t=this.counter)==null||t.append(this.createElement('<div class="counter__text">kami-counter</div>'))}updateCounter(t){return this.setProp("counter",Number(this.props.counter)+Number(t)),this.setUrlParam("counter",this.props.counter),this}displayAlert(t){Number(this.props.counter)>Number(t)&&alert(this.props.counter)}propChangedCallback(t,r){t==="counter"&&this.setUrlParam("counter",r)}renderHtml(){return`
            <div class="counter">
                <button bind:click="updateCounter(1); displayAlert(10);" class="counter__btn" id="add">+</button>
                <button bind:click="updateCounter(-1)" class="counter__btn" id="remove">-</button>
                <div class="counter__text" id="counter">${this.getProp("counter")}</div>
            </div>
        `}renderStyle(){return`
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
        `}}customElements.define(e.tag,e);
