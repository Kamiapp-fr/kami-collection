
# `<kami-flash>`

A simple flash component.

<p align="center">
  <img  src="https://emilienleroy.fr/assets/flash.gif">
</p>

## Installation


```sh
npm install --save @kamiapp/flash
```


## Usage


```ts
// ES6 Modules or TypeScript
import KamiFlash from '@kamiapp/flash'

// register the component with the name you want
window.customElements.define(KamiFlash.tag, KamiFlash);
```


## Examples


Just add into your html the flash component like this.
See the *props section* to customize your flash component.

<p align="center">
  <img  src="https://emilienleroy.fr/assets/error.gif">
</p>

```html

<!-- Generate an error message with the text 'An error message !'-->
<flash-exemple
    type="ERROR"
    message="An error message !"
>
</flash-exemple>

```
## Props

| name          |  type    | description                 | required | default value                  |
|-------------- |:--------:|-----------------------------|----------|--------------------------------|
| type          | Type     | The flash type              | false    | OK                             |
| message       | String   | The flash message           | false    | 'Write your message flash here'|
| position      | Position | The flash position          | false    | BOTTOM                         |
| stack         | Boolean  | Stack or not all flash      | false    | true                           |
| time          | Number   | Time to wait before remove the flash | false | null                     |
| progressbar   | Boolean  | Display a progress bar if time is set| false | false                    |
