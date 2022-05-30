# `<kami-changelog>`

This component allow you to display your releases directly into your app. 
Currently this component only provide support for [github](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) 
and [gitlab](https://docs.gitlab.com/ee/user/project/releases/) releases. 
If you want use an another provider you can make a PR to add it.

## Usage

Install the component using ``npm`` or ``yarn`` or ``pnpm`` :

```console
$ npm install --save @kamiapp/changelog
```

Import the component into your **main** js/ts file :

```js
import '@kamiapp/changelog';
```
And use the component directly into your html :

```html
<kami-changelog
  src="https://api.github.com/repos/Kamiapp-fr/kami-collection/releases"
  header="🚀 Releases"
  provider="github"
></kami-changelog>
```
## Documentation

To get more informations about this component you can go to the [kami-changelog](https://www.collection.kamiapp.fr/docs/changelog.html) section into the kami collection site web. See the documentation at [collection.kamiapp.fr](https://www.collection.kamiapp.fr/) to get more information about how to use each components. You will also find a playground section to test all components.