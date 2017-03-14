# frint-utils

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Utility belt to extend, simplify and improve the development experience on frint

## Installation

Install it via [npm](https://npmjs.com):

```
$ npm install --save frint-utils
```

Usage:


Creating reducer

```js
import { createReducer } from 'frint-utils';
import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

export const todos = createReducer(initialState, {
  [ActionTypes.ADD_TODO](state, action) {
    return [...state, action.text];
  }
});
```

Creating core application

```js
import App from './app';
import config from './config';

const coreApp = new App(config);
injectCoreApp(coreApp);
```

## License

MIT © [Travix International](http://travix.com)

[npm-image]: https://img.shields.io/npm/v/frint-utils.svg
[npm-url]: https://www.npmjs.com/package/frint-utils
[travis-image]: https://img.shields.io/travis/Travix-International/frint-utils/master.svg
[travis-url]: http://travis-ci.org/Travix-International/frint-utils
[coveralls-image]: https://img.shields.io/coveralls/Travix-International/frint-utils.svg
[coveralls-url]: https://coveralls.io/github/Travix-International/frint-utils
