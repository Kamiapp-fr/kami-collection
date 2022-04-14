# `<kami-theme>`

This component contains the kami theme. It also contains a base class to create your own theme.

## Install 

```console
$ npm install --save @kamiapp/theme
```

## Usage

Import the component, declare it using `customElements.define()` and use it directly into your html file :

```html
<body>
  <kami-theme mode="dark">
      <kami-markdown>
        # H1
      </kami-markdown>
  </kami-theme>

  <script type="module">
    import KamiMarkdown from '@kamiapp/markdown';
    import KamiTheme from '@kamiapp/theme';

    window.customElements.define(KamiTheme.tag, KamiTheme);
    window.customElements.define(KamiMarkdown.tag, KamiMarkdown);
  </script>
</body>
```

### Create a custom theme

To do this you must use the `Theme` component and extends it. Now you just need to override the static `style` property. For the dark or light variable, these must be into the `kami-{light|dark}-mode` class.

```ts
import { css } from 'lit';
import { Theme } from '@kamiapp/theme';

export default class CustomTheme extends Theme {
  static get tag() {
    return 'my-custom-theme';
  }

  static styles = css`
    ::slotted(*) {
      --kami-theme-font-primary: "Roboto";
      --kami-theme-font-secondary: sans-serif;
      --kami-theme-shadow: 0 0 8px -5px black;
      --kami-theme-text-shadow: 0 0 4px #0000008a;
      --kami-theme-radius: 20px;
      --kami-theme-white: white;
    }

    .kami-light-mode::slotted(*) {
      --kami-theme-primary: red;
      --kami-theme-secondary: blue;
      --kami-theme-accent: grey;
      --kami-theme-text: black;
      --kami-theme-background: white;
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  
    .kami-dark-mode::slotted(*) {
      --kami-theme-primary: blue;
      --kami-theme-secondary: red;
      --kami-theme-accent: grey;
      --kami-theme-text: white;
      --kami-theme-background: black;
      --kami-theme-gradient-primary: linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%);
      --kami-theme-gradient-secondary:  linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%);
    }
  `;
}

```

Now to use it just define it and that all !

```html
<body>
  <my-custom-theme mode="light">
      <kami-markdown>
        # H1
      </kami-markdown>
  </my-custom-theme>

  <script type="module">
    import KamiMarkdown from '@kamiapp/markdown';
    import CustomTheme from './CustomTheme';

    window.customElements.define(CustomTheme.tag, CustomTheme);
    window.customElements.define(KamiMarkdown.tag, KamiMarkdown);
  </script>
</body>
```

## API
### Props

| name        |  type                 | description                  | required | default value                  |
|------------ |:---------------------:|------------------------------|----------|--------------------------------|
| mode        | `light` or `dark`        | Define which mode should be used | false     | light                               |


### Methods
*None*

### Events
*None*

### CSS Custom Properties

This is all variables used be the kami theme and theirs defaults value.

| Name | Default |
| ------------------------------------- | --------------------------------------------------
| ``--kami-theme-font-primary``    | Gosha Sans    | 
| ``--kami-theme-font-secondary``    |  UnB Office  | 
| ``--kami-theme-shadow``    |  0 0 8px -5px black  | 
| ``--kami-theme-text-shadow``    |  0 0 4px #0000008a  | 
| ``--kami-theme-radius``    |  20px  | 
| ``--kami-theme-white``    | white  | 

### Light

| Name | Default |
| ------------------------------------- | --------------------------------------------------
| ``--kami-theme-primary``    | #30E2C9    | 
| ``--kami-theme-secondary``    |  #5472ea  | 
| ``--kami-theme-accent``    |  #8B8B8F  | 
| ``--kami-theme-text``    |  #565656  | 
| ``--kami-theme-background``    |  white  | 
| ``--kami-theme-gradient-primary``    | linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%)  | 
| ``--kami-theme-gradient-secondary``    | linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%) | 

### Dark

| Name | Default |
| ------------------------------------- | --------------------------------------------------
| ``--kami-theme-primary``    | #30E2C9    | 
| ``--kami-theme-secondary``    |  #5472ea  | 
| ``--kami-theme-accent``    |  #8B8B8F  | 
| ``--kami-theme-text``    |  white  | 
| ``--kami-theme-background``    |  #303032  | 
| ``--kami-theme-gradient-primary``    | linear-gradient(116.95deg, #41B5FF -37.42%, #30E3CA 66.57%)   | 
| ``--kami-theme-gradient-secondary``    | linear-gradient(116.95deg, #30E3CA 32.17%, #41B5FF 116.16%)   | 