> **Deprecated:** kami-component is now deprecate and will not receive any updates.
> Please use an another library to build your web components.
> We now use [lit](https://lit.dev) but [stencil](https://stenciljs.com/) is also a good choice.
> *This package will be delete when the v1.0.0 of kami-collection will be released.*

# `<kami-component>`

A simple abstract class to create web compenent.
This lib is a simple helper to create web component.

* [Getting Started](#getting-started)
* [Life Hook](#life-hook)
  * [Set Properties](#set-properties)
  * [Render Html](#render-html)
  * [Render Style](#render-style)
  * [Template Binding](#template-binding)
  * [Event Listener](#event-listener)
* [Contribute](#contribute)

## Getting Started

>Into the getting started, you will see the code of a counter component.

<p align="center">
  <img  src="https://emilienleroy.fr/assets/counter.gif">
</p>

Install the lib from *npm*.

```
npm install --save @kamiapp/component
```

After just import it and extend your class with this.

> See **[counter example](../../demos/component/counter/)**.


To declare you component, just import your component into your *index.js* file and use the *customElements.define()* methode. See the example bellow.

>index.js
```js
import Counter from "./Counter";

//declare your web component
window.customElements.define('counter-example', Counter);
```

## Life Hook

> This is a diagram for the kami-component life cycle.

<p align="center">
  <img  src=".github/hooks.png?raw=true">
</p>

### Set Properties

The `setProperties()` is the first method called. It's here you will get props from your component. You need to override this method to init your props.

This is an example :
```js
//drawing.js
setProperties() {
  this.color = this.getAttribute('color') || 'black';
}
```
and the *html* part : 
```html
<drawing-exemple color="green"></drawing-exemple>
```

You can also use reactive props. To use this you need to use `this.props` property and the `observe()` method. With this when a data from `this.props` is update, the component will re-render the template part.

This is a reactive example :
```js
// you need to observe your attribute to use reactive
static get observedAttributes() {return ['counter']; }

// init reactive props
setProperties() {
  this.props = this.observe({
    counter: parseInt(this.getAtribute('counter')) | 1
  })
}

// after just display your data like this.
renderHtml() {
  return `
    <div class="counter">
      ${this.props.counter}
    </div>
  `;        
}

```
and the *html* part : 
```html
<drawing-exemple counter="0"></drawing-exemple>
```
> See [drawing example](../../demos/component/drawing/) for simple props and [counter example](../../demos/component/counter/) for reactive props. 

### Render Html

The `renderHtml()` method will generate your template component. For this just override the `renderHtml()`. This method should return a **string**.

### Render Style

Same as `renderHtml()`, the `renderStyle()` method will generate your component style. For this just override the `renderStyle()`. This method should return a **string**.

### Template binding

With KamiComponent you can directly bind your event listener into your template.
To work you juste need to add into a dom the `bind:<type>` attribute. You can replace the type part by every listener type you want like *click* or *mouseover*. 

This is an example :

```js
/**
 * ... more code
 */

// update the current counter number
updateCounter(to) {
  this.props.counter = this.props.counter + parseInt(to);
  this.setUrlParam('counter',this.props.counter);
  return this;
}

// Listener add directly from the template. 
renderHtml() {
  return `
    <div class="counter">
      <button 
        id="add"
        class="counter__btn" 
        bind:click="updateCounter(1);" 
      >+</button>
      <button 
        id="remove"
        class="counter__btn"
        bind:click="updateCounter(-1)"  
      >-</button>
      <div class="counter__text" id="counter">${this.props.counter}</div>
    </div>
  `;        
}
```

In this example when you *click* on a button the `updateCounter()` will be call. This is due at this attribute `bind:click="updateCounter(-1)"` which will add the click event listener.

If you want get the event emit you just need to update your method like this :
```js

updateCounter(to, event) {
  event.preventDefault() // this is just an example
}

```

Event emit is always add in last params when the listener is fire.

> To see more example, go into the **example folder** of this repository.

### Event Listener

If you don't use the [template binding](#template-binding) you can init your event listener into the `initEventListener()` method. 

> ⚠️ If you use reactive props without [template binding](#template-binding) you should add your listener into the `initEventListener()` method. Because when the template is re-render, listener are also remove. That's why the `initEventListener()` method is call when a reactive props is update.
