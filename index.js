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


/**
 * @param {*}    val    - The value to be returned or the function to be called.
 * @param {...*} [args] - Arguments to be passed to `val` if `val` is a function.
 *
 * @returns {*} `val` if `val` is NOT a `Function`; otherwise, returns the result of
 *              calling `val(...args)` using the context of `valyou` as the context
 *              of `val`.
 */
export default function valyou(val, ...args) {
  return ((typeof val === 'function') ? val.call(this, ...args) : val);
}


/**
 * @param {*}    val    - The value to be returned or the function to be called.
 * @param {...*} [args] - Arguments to be passed to `val` if `val` is a function.
 *
 * @returns {*} `val` if `val` is NOT a `Function`; otherwise, returns the result of
 *              calling `val(...args)` using the context of `valyouNull` as the
 *              context of `val`. If `val` is `undefined`, then `null` will be
 *              returned.
 */
export function valyouNull(val, ...args) {
  const ret = valyou.call(this, val, ...args);

  return ((ret == null) ? null : ret);
}
