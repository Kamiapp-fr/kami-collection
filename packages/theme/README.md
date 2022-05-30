# `<kami-theme>`

This component contains the default theme of the collection called `kami-theme`. 
It also contains a base class to create your own theme. This base class provide a support
for **light** and **dark** mode.

## Usage

Install the component using ``npm`` or ``yarn`` or ``pnpm`` :

```console
$ npm install --save @kamiapp/theme
```


Import the component into your **main** js/ts file :

```js
import '@kamiapp/markdown';
import '@kamiapp/theme';
```
And use the component directly into your html :

```html
<kami-theme mode="dark">
  <kami-markdown>
    <script type="text/markdown">
      # H1
    </script>
  </kami-markdown>
</kami-theme>
```

## Documentation

To get more informations about this component you can go to the [kami-theme](https://www.collection.kamiapp.fr/docs/theme.html) section into the kami collection site web. See the documentation at [collection.kamiapp.fr](https://www.collection.kamiapp.fr/) to get more information about how to use each components. You will also find a playground section to test all components.