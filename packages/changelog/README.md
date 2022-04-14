# `<kami-changelog>`

This component allow you to display your releases directly into your app.

## Install 

```console
$ npm install --save @kamiapp/changelog
```

## Usage

Import the component, declare it using `customElements.define()` and use it directly into your html file :

```html
<body>
  <kami-changelog
    src="https://api.github.com/repos/Kamiapp-fr/kami-collection/releases"
    header="🚀 Releases"
    provider="github"
  ></kami-changelog>

  <script type="module">
    import KamiChangelog from '@kamiapp/changelog';

    customElements.define(KamiChangelog.tag, KamiChangelog);
  </script>
</body>
```

## API
### Props

| name        |  type                 | description                  | required | default value                  |
|------------ |:---------------------:|------------------------------|----------|--------------------------------|
| src         | string                | Url used to get release data.| true     |                                |
| provider    | [Provider](#provider) | Type of release.             | true     |                                |
| header      | string                | Text display into the header.| false    | Kami-changelog                 |

### Provider

This is the current list of provider compatible with this component :

* github
* gitlab

### Methods
*None*

### Events
*None*

### CSS Custom Properties

| Name | Default |
| ------------------------------------- | --------------------------------------------------
| ``--kami-changelog-position``    | fixed    | 
| ``--kami-changelog-bottom``    |  0  | 
| ``--kami-changelog-right``    |  0  | 
| ``--kami-changelog-left``    |  auto  | 
| ``--kami-changelog-top``    |  auto  | 
| ``--kami-changelog-margin``    | 30px 40px   | 
| ``--kami-changelog-release-width``  | 70px | 
| ``--kami-changelog-release-height``  | 70px | 
| ``--kami-changelog-release-bottom``  | 90px  | 
| ``--kami-changelog-release-right``  | 0px | 
| ``--kami-changelog-release-width``  | 400px | 
| ``--kami-changelog-release-height``  | 50vh | 
| ``--kami-changelog-btn-radius``  | 100%  | 
| ``--kami-changelog-btn-padding``  | 10px | 

#### Global Custom Properties

This component exposes the following global [theming](../theme/) custom properties.

| Name | 
| ------------------------------------- |
| ``--kami-theme-primary``    |
| ``--kami-theme-gradient-primary``    |
| ``--kami-theme-white``    |
| ``--kami-theme-background``    |
| ``--kami-theme-shadow``    |
| ``--kami-theme-text-shadow``    |
| ``--kami-theme-radius``    |