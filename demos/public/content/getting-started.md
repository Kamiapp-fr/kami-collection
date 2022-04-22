
### Install

You can install the whole collection using the `@kamiapp/collection` package.

```console
$ npm install --save @kamiapp/collection
```

Or install each components individualy.

```console
$ npm install --save @kamiapp/flash 
```
>  See the [components section](#components) to see all components  available.


### Usage

First you need to declare components into your ``index.js``. With the whole collection a simple import is needed.

```js
// index.js
import '@kamiapp/collection';
```

For individual install, you need to use the `customElements.define` method.

```js
// index.js
import KamiFlash from '@kamiapp/flash';

// Define the flash component. You can also customise the tag.
customElements.define(KamiFlash.tag, KamiFlash);
```

Now you can use kami components directly from an html page.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Example App</title>
  </head>
  <body>
    <!-- Generate an error message with the text 'An error message !'-->
    <kami-flash type="ERROR" message="An error message !"></kami-flash>
    
     <!-- Kami uses standard JavaScript modules. -->
    <script type="module" src="./index.js"></script>
  </body>
</html>
```