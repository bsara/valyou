# valyou [![NPM Package](https://img.shields.io/npm/v/valyou.svg?style=flat-square)][npm]

[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)][license]

> Simply returns any value given, unless that value is a function, then that function is called
> with provided arguments and context. *(this library is similar to [`lodash.result`](https://lodash.com/docs/#result)
> but you're getting a static or variable value rather than an object property value)*.

> **NOTE:** Compatible with ES4+ browsers, AMD, CommonJS, ES6 Imports, and HTML
> script references.

[Changelog](https://github.com/bsara/valyou/blob/master/CHANGELOG.md)



## Install

```bash
$ npm i --save valyou
```


## Usage

```js
import valyou, { valyouNull } from 'valyou';


let val            = 42;
let func           = function()    { return "Fish fingers and custard"; };
let paramFunc      = function(num) { return (val + num); };
let contextualFunc = function()    { return this.contextVal; };

let undefVal = undefined;


console.log(valyou(val));          // 42
console.log(valyou(func));         // Fish fingers and custard
console.log(valyou(paramFunc, 8)); // 50

(function() {
  this.contextVal = 92188;
  console.log(valyou.call(this, contextualFunc)); // 92188
})();


console.log(valyou(undefVal))     // undefined
console.log(valyouNull(undefVal)) // null

```


## API

### valyou(val, *[...args]*)

Returns `val` if `val` is NOT a `Function`; otherwise, returns the result of
calling `val(...args)` using the context of `valyou` as the context of `val`.

- **val** `*`

  The value to be returned or the function to be called.

- **...args** `*`

  Arguments to be passed to `val` if `val` is a function.


<br/>


### valyouNull(val, *[...args]*)

Returns `val` if `val` is NOT a `Function`; otherwise, returns the result of
calling `val(...args)` using the context of `valyouNull` as the context of `val`.
**If `val` is `undefined`, then `null` will be returned.**

- **val** `*`

  The value to be returned or the function to be called.

- **...args** `*`

  Arguments to be passed to `val` if `val` is a function.


<br/>
<br/>


# License

ISC License (ISC)

Copyright (c) 2017, Brandon D. Sara (http://bsara.pro/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.



[license]: https://github.com/bsara/valyou/blob/master/LICENSE "License"
[npm]:     https://www.npmjs.com/package/valyou                "NPM Package: valyou"
