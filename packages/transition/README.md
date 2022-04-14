# `<kami-transition>`

This component allow to use pre-defini transitions directly into your html without any css declaration.

## Install 

```console
$ npm install --save @kamiapp/transition
```

## Usage

Import the component, declare it using `customElements.define()` and use it directly into your html file. 

> See the [demo](../../demos/transition/index.html) to get more information about how to define and use it.

### Single

You can animate a single element like this :

```html
<kami-transition show="false">
  <button>transition</button>
</kami-transition>
```

### Mode In-Out

Or you can animate two elements using the `in-out` mode like this :

```html
<kami-transition transition="slide-x" from="-50" duration="200" show="true">
  <button slot="in">slide-left</button>
  <button slot="out">slide-left</button>
</kami-transition>
```

## API
### Props

| name        |  type                 | description                  | required | default value                  |
|------------ |:---------------------:|------------------------------|----------|--------------------------------|
| show         | boolean                | Show or hide the element.   | true     |                                |
| transition    | string                | Name of the transition used.                | false     |   fade                             |
| from      | string                | From value depending on [Transition](#transition) | false    | Depending on [Transition](#transition)                |
| to      | string                | To value depending on [Transition](#transition)| false    | Depending on [Transition](#transition)                 |
| duration      | number                | Duration of the transition. | false    | 500                 |
| easing      | string                | Easing of the transition.| false    | ease                 |

### Transition

This the list of the current transitions implemented and theirs default values.

| name    | property    |  from                 | to                  | 
|---------|------------- |:---------------------:|------------------------------
| ``fade``    | opacity   | 0                | 1   |
| ``scale``    | scale   | 0                | 1   | 
| ``slide-x``    | translateX   | 50                | 1   | 
| ``slide-y``    | translateY   | 50                | 0   | 

### Methods
*None*

### Events
*None*

### CSS Custom Properties
*None*