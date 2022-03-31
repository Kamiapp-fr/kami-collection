<div align="center">
  <br/><br/>
  <img src="./.github/logo.png" width="200" />
  <br/><br/>
  
  # Kami Collection
  
  A collection of Web Component developed by [Kami](https://www.kamiapp.fr/en).
  <br/><br/>
 [![CI/CD](https://github.com/Kamiapp-fr/kami-collection/actions/workflows/main.yml/badge.svg)](https://github.com/Kamiapp-fr/kami-collection/actions/workflows/main.yml)
 ![GitHub](https://img.shields.io/github/license/kamiapp-fr/kami-collection)
</div>

## Getting Started
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


## Components

You can get more informations about each components into the ``packages/<component-name>`` directory.  

| Repository                                           |  description                             | version  |
|----------------------------------------------------- |------------------------------------------|----------|
| [``<kami-flash>``](./packages/flash/)                |   Simple flash web component.            | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/flash)    |                           
| [``<kami-infinite-list>``](./packages/infinite-list/)|   Infinite list based on web component.          | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/infinite-list)    |     
| [``<kami-component>``](./packages/component/)|   Abstract class to create simple web component.         | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/component) |    

## Contribute

We would love you for the contribution to ``kami-collection`` project, check the ``CONTRIBUTING`` file for more info.