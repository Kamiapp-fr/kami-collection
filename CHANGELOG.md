# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.6...v0.2.0
[0.1.6]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/Kamiapp-fr/kami-collection/releases/tag/v0.1.0
