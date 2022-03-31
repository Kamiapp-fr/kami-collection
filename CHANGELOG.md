# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.4...HEAD
[0.1.4]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Kamiapp-fr/kami-collection/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/Kamiapp-fr/kami-collection/releases/tag/v0.1.0
