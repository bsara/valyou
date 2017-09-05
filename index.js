/**
 * @license
 *
 * ISC License (ISC)
 *
 * Copyright (c) 2017, Brandon D. Sara (https://bsara.pro/)
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
    return;
  }
  if (typeof exports === 'object') {
    module.exports = factory();
    return;
  }
  root.valyou = factory();
})(this, function() {
  /**
   * @param {*}    val  - The value to be returned or the function to be called.
   * @param {...*} args - Arguments to be passed to `val` if `val` is a function.
   *
   * @returns {*} `val` if `val` is NOT a `Function`; otherwise, returns the result of
   *              calling `val()` (without arguments).
   */
  return function valyou(val, ...args) {
    var args;

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments, 1);
    }

    return ((typeof val === 'function') ? val.apply(this, args) : val);
  }
});

