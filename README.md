<div align="center">
  <br/><br/>
  <img src="./.github/kami.png" width="300" />
  <br/><br/>
  
  # Kami Collection
  
  A collection of Web Component developed by [Kami](https://www.kamiapp.fr/en).
  <br/><br/>
 [![CI/CD](https://github.com/Kamiapp-fr/kami-collection/actions/workflows/main.yml/badge.svg)](https://github.com/Kamiapp-fr/kami-collection/actions/workflows/main.yml)
 ![GitHub](https://img.shields.io/github/license/kamiapp-fr/kami-collection)
</div>


> ⚠️ **WARNING:** This project is under development and it risk to have some majors changes since the ``v1.0.0`` will be release. One of the biggest change will be the usage of `lit` instead of ``<kami-component>`` as base class of each element of the collection. It's because the ``<kami-component>`` package will be probably deprecate in the futur due to the complexity to maintain it.

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

First you need to declare components into your ``index.js``. You can import the whole collection of components.

```js
import '@kamiapp/collection';
```

Or you can also declare a component individualy.

```js
import '@kamiapp/markdown';
```

## Documentation

See the documentation at [collection.kamiapp.fr](https://www.collection.kamiapp.fr/) to get more information about how to use each components. You will also find a playground section to test all components.


## Components

You can get more informations about each components into the ``packages/<component-name>`` directory.  

| Repository                                           |  description                             | version  |
|----------------------------------------------------- |------------------------------------------|----------|
| [``<kami-changelog>``](./packages/changelog/)|   Display your releases directly into your app.          | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/changelog)    |     
| [``<kami-flash>``](./packages/flash/)                |   A simple alert component for your notifications.           | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/flash)    |                           
| [``<kami-infinite-list>``](./packages/infinite-list/)|   Infinite list based on web component.          | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/infinite-list)    |     
| [``<kami-markdown>``](./packages/markdown/)|  Convert markdown in html.       | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/markdown) |   
| [``<kami-theme>``](./packages/theme/)|   Light and Dark kami theme.        | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/theme) |
| [``<kami-transition>``](./packages/transition/)|   Predefined transitions for your components.       | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/transition) |   
| [``<kami-component>``](./packages/component/)|   Abstract class to create simple web component.         | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/component) |    
| [``<kami-progress-bar>``](./packages/progress-bar/)| A simple horizontal progress bar. | ![npm (scoped)](https://img.shields.io/npm/v/@kamiapp/progress-bar) |    

## Contribute

We would love you for the contribution to ``kami-collection`` project, check the [CONTRIBUTING](./CONTRIBUTING.md) file for more info.