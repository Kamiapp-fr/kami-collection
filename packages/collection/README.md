# `<kami-collection>`

This packages containe and declare all [Kami](https://www.kamiapp.fr/en) components.

## Install 

```
$ npm install --save @kamiapp/collection
```

## Usage

You can just import the package into your main js file :

```ts
import '@kamiapp/collection';
```

> This declare all kami components using theirs default ``tag``. 

Or you can import each component and redefine it with your ``tag``.

```ts
// ES6 Modules or TypeScript
import { KamiFlash, KamiInfiniteList } from '@kamiapp/collection'

// register the component with the name you want
window.customElements.define('flash-element', KamiFlash);

// Or register the component with the default tag
window.customElements.define(KamiInfiniteList.tag, KamiInfiniteList);
```

You can get more informations about each components into the ``packages/<component-name>`` directory. 