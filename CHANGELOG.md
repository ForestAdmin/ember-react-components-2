# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.1](https://github.com/rewardops/ember-react-components/compare/v4.0.0...v4.0.1) (2021-06-11)


### Bug Fixes

* improve decorator detection in HOF ([bf28b5c](https://github.com/rewardops/ember-react-components/commit/bf28b5c72aa14caf71fa1aaad30c87e848b1ae33))

## [4.0.0](https://github.com/rewardops/ember-react-components/compare/v3.0.2...v4.0.0) (2021-06-10)


### ⚠ BREAKING CHANGES

* Drop Node v10 support
* Drop support for Ember less than v3.13

### Features

* add optional Ember mixin props to decorator ([cba7802](https://github.com/rewardops/ember-react-components/commit/cba780250b19c2f1bcf395289d4bae121d6d8a96))


* bump Ember to v3.16 ([f1f8591](https://github.com/rewardops/ember-react-components/commit/f1f85914f4a9de50b345928103dcfcfb2b5bbcb5))

<a name="3.0.2"></a>
## [3.0.2](https://github.com/alexlafroscia/ember-react-components/compare/v3.0.1...v3.0.2) (2019-11-12)


### Bug Fixes

* add jsx extension support ([3c25a94](https://github.com/alexlafroscia/ember-react-components/commit/3c25a94))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/alexlafroscia/ember-react-components/compare/v3.0.0...v3.0.1) (2019-03-06)


### Bug Fixes

* better detection of existing JSX plugin ([cc55646](https://github.com/alexlafroscia/ember-react-components/commit/cc55646))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/alexlafroscia/ember-react-components/compare/v2.0.4...v3.0.0) (2019-02-02)


### Code Refactoring

* remove Babel 6 support ([b076935](https://github.com/alexlafroscia/ember-react-components/commit/b076935))


### Features

* support Stage 2 decorators ([529e6f4](https://github.com/alexlafroscia/ember-react-components/commit/529e6f4)), closes [#29](https://github.com/alexlafroscia/ember-react-components/issues/29)


### BREAKING CHANGES

* Remove automatic Babel 6 support. For continued support, the React JSX Babel transform can be supplied manually by the application configuration.



<a name="2.0.4"></a>
## [2.0.4](https://github.com/alexlafroscia/ember-react-components/compare/v2.0.3...v2.0.4) (2019-02-01)


### Bug Fixes

* remove TypeScript compilation hooks ([0eccca6](https://github.com/alexlafroscia/ember-react-components/commit/0eccca6))
* support arrow functions for components ([b9a809b](https://github.com/alexlafroscia/ember-react-components/commit/b9a809b)), closes [#27](https://github.com/alexlafroscia/ember-react-components/issues/27)



<a name="2.0.3"></a>
## [2.0.3](https://github.com/alexlafroscia/ember-react-components/compare/v2.0.2...v2.0.3) (2019-02-01)


### Bug Fixes

* install React, React DOM through `ember-auto-import` ([4f99ad8](https://github.com/alexlafroscia/ember-react-components/commit/4f99ad8)), closes [#23](https://github.com/alexlafroscia/ember-react-components/issues/23)
* remove `ember-cli-typescript` ([6853e63](https://github.com/alexlafroscia/ember-react-components/commit/6853e63))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/alexlafroscia/ember-react-components/compare/v2.0.1...v2.0.2) (2018-07-06)


### Bug Fixes

* add ember-cli option to not import react ([d1bdd31](https://github.com/alexlafroscia/ember-react-components/commit/d1bdd31))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/alexlafroscia/ember-react-components/compare/v2.0.0...v2.0.1) (2018-06-15)


### Bug Fixes

* update name of default blueprint ([3da2176](https://github.com/alexlafroscia/ember-react-components/commit/3da2176))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/alexlafroscia/ember-react-components/compare/v1.1.0...v2.0.0) (2018-06-15)


### Code Refactoring

* rename the package to `ember-react-components` ([0bec444](https://github.com/alexlafroscia/ember-react-components/commit/0bec444))


### BREAKING CHANGES

* New package name and installation instructions



<a name="1.1.0"></a>
# [1.1.0](https://github.com/alexlafroscia/ember-cli-react/compare/v1.0.2...v1.1.0) (2018-06-14)


### Bug Fixes

* add ember-cli >=2.15 as a peer dependency ([51f3249](https://github.com/alexlafroscia/ember-cli-react/commit/51f3249))
* be explicit about exported types so declaration emission works ([cf2ba4b](https://github.com/alexlafroscia/ember-cli-react/commit/cf2ba4b))
* make `render` return type explicit ([1711900](https://github.com/alexlafroscia/ember-cli-react/commit/1711900))


### Features

* support stateless, functional components ([2f113e1](https://github.com/alexlafroscia/ember-cli-react/commit/2f113e1)), closes [#5](https://github.com/alexlafroscia/ember-cli-react/issues/5)
