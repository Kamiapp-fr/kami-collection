# `<kami-markdown>`

Convert markdown in html using [markdown-it](https://github.com/markdown-it/markdown-it).

## Install 

```console
$ npm install --save @kamiapp/markdown
```

## Usage

Import the component, declare it using `customElements.define()` and use it directly into your html file :

```html
<body>
  <kami-markdown>
# H1
## H2
### H3
#### H4
##### H5
  </kami-markdown>
  <script type="module">
    import KamiMarkdown from '@kamiapp/markdown';

    customElements.define(KamiMarkdown.tag, KamiMarkdown);
  </script>
</body>
```

## API
### Props

*None*

### Methods
*None*

### Events
*None*

### CSS Custom Properties

#### Global Custom Properties

This component exposes the following global [theming](../theme/) custom properties.

| Name | 
| ------------------------------------- |
| ``--kami-theme-primary``    |
| ``--kami-theme-secondary``    |
| ``--kami-theme-text``    |
| ``--kami-theme-background``    |
| ``--kami-theme-gradient-primary``    |
| ``--kami-theme-font-secondary``    |
| ``--kami-theme-font-primary``    |
| ``--kami-theme-white``    |
| ``--kami-theme-shadow``    |
| ``--kami-theme-text-shadow``    |
| ``--kami-theme-radius``    |

