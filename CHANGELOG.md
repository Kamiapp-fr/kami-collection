# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.2] - 2022-07-26
### Fixed
- **flash**: Fixed the CI build of this package updating the order of all build.

## [0.4.1] - 2022-07-26
### Fixed
- **flash**: Defines `kami-transition` and `kami-progress-bar` if isn't already made.
- **flash**: Adding missing css variable `--kami-flash-z-index` to update the z-index of a flash.

## [0.4.0] - 2022-07-26
### Added
- @kamiapp/progress-bar
  - Add a `value` attribute to set the percentage of the progress bar.
  - Add an `absolute` and `bottom` attributes to fixed the bar on the top or bottom of any element.
  - Add a `go()` method and an `time` attribute to animate the progress bar.
- : Add two new events.
  - `close`: Called when is closing.
  - `delete`: Called when is deleted.
- : Add two new events.
  - `display`: Called when the component is display.
  - `hide`: Called when the component is hide.
- : Add more css variables
  - `--kami-theme-info`
  - `--kami-theme-success`
  - `--kami-theme-warning`
  - `--kami-theme-error`
  - `--kami-theme-primary-rgb`
  - `--kami-theme-secondary-rgb`
  - `--kami-theme-white-rgb`
  - `--kami-theme-info-rgb`
  - `--kami-theme-success-rgb`
  - `--kami-theme-warning-rgb`
  - `--kami-theme-error-rgb`
- **flash**: Add css variables to customize flash. See the documentation to get more information about it.
- **flash**: Add an outlined mode.
- **flash**: Add a blured mode.
- **flash**: add a `gap` attribute to define space between each flash.
- **flash**: add a `size` attribute to define the size of a stacked flash.
- **transition**: Add `appear` attribute. This allow you to run a transition when the component is connected.

### Changed
- : Update
  - `info`
  - `success`
  - `warning`
  - `error`
- : Update
  - `bottom-center`
  - `bottom-left`
  - `bottom-right`
  - `top-center`
  - `top-right`
  - `top-left`
- **flash**: Rewrite using [lit](https://lit.dev).
- **BREAKING flash**: Rename `createFlash()` into `create()`
- **BREAKING flash**: Rename `closeAll()` into `clear()`

### Removed
- **flash**: Removed the `stack` attribute. Now by default it will stack flashs.
- **flash**: Removed `progressbar` attribute. Now it automaticaly set the progress bar when the time `attribute` is set. If you want to remove it use css variables instead.

## [0.3.0] - 2022-05-31
### Added
- **theme**: Added `--kami-theme-border-color` variable.
- **markdown**: Added support for [highlight.js](https://highlightjs.org/).
- **markdown**: Added support for [markdown-it](https://github.com/markdown-it/markdown-it) plugins.
- Create the [documentation](https://www.collection.kamiapp.fr/) site. [#1](https://github.com/Kamiapp-fr/kami-collection/issues/1)
- Adding a create script to generate a new package pre-configured.

### Changed
- Now these packages use the
  - `changelog`
  - `markdown`
  - `theme`
  - `transition`
- **markdown**: Uses **\<script type="text/markdown">** instead of slot to get content to display.

## [0.2.1] - 2022-04-19
### Fixed
- Fixed types path for these packages :
  - `markdown`
  - `theme`
  - `transition`
- **markdown**: Fix nested list removing the trim() on each node. [#39](https://github.com/Kamiapp-fr/kami-collection/issues/39)

## [0.2.0] - 2022-04-19
### Added
- @kamiapp/theme
  - Adding the light and dark kami theme.
  - Adding a base class theme to create custom theme.
- @kamiapp/markdown
  - Convert markdown into html using [markdown-it](https://github.com/markdown-it/markdown-it) without any configuration.
- @kamiapp/changelog
  - Display your own changelog into a web component.
  - Adds support for github release.
  - Adds support for gitlab release.
- @kamiapp/transition
  - Add single and in-out transition
  - Adds fade transition
  - Adds scale transition
  - Adds slide transition

## [0.1.6] - 2022-03-31
### Fixed
- Pin workspaces order to fix build job. This prevent the `@kamiapp/collection` to be build in first because this package need all other packages.

## [0.1.5] - 2022-03-31
### Fixed
- Pin dependencies to get always the lastest versions of kamiapp packages.
- Update version script to only update package number.

## [0.1.4] - 2022-03-31
### Fixed
- Fix types using local packages as dependencies. Instead of using alias to get types, now types is get directly from the node module package.

## [0.1.3] - 2022-03-30
### Fixed
- Fix `npm publish` command authentification.

## [0.1.2] - 2022-03-30
### Fixed
- Fix `npm publish` command with removing the private field from each `@kamiapp` packages.
- Fix the github release job with adding the `GITHUB_TOKEN` as env variable.

## [0.1.1] - 2022-03-30
### Fixed
- Fixed CI/CD trouble. Now build and release should totaly automated.

## [0.1.0] - 2022-03-30
### Changed
- Migrates old kami components:
  - `kami-component` → `@kamiapp/component`
  - `kami-flash` → `@kamiapp/flash`
  - `kami-infinitelist` → `@kamiapp/infinite-list`
- Migrates to a monorepos using npm workspaces.
- Migrates to Vitejs.
- Improves typing for packages and demo.
- Improves CI/CD using github action.

[Unreleased]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.4.2...HEAD
[0.4.2]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.6...v0.2.0
[0.1.6]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/Kamiapp-fr/kami-collection/releases/tag/v0.1.0
