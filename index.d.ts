/**
 * @license
 *
 * ISC License (ISC)
 *
 * Copyright (c) 2026, Brandon D. Sara (https://bsara.dev/)
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
 * @param val    - The value to be returned or the function to be called.
 * @param [args] - Arguments to be passed to `val` if `val` is a function.
 *
 * @returns `val` if `val` is NOT a `Function`; otherwise, returns the result of
 *          calling `val(...args)` using the context of `valyou` as the context
 *          of `val`.
 */
export default function valyou<T>(
  val: T,
  ...args: T extends TFn ? Parameters<T> : []
): T extends TFn ? ReturnType<T> : T;


/**
 * @param val    - The value to be returned or the function to be called.
 * @param [args] - Arguments to be passed to `val` if `val` is a function.
 *
 * @returns `val` if `val` is NOT a `Function`; otherwise, returns the result of
 *          calling `val(...args)` using the context of `valyouNull` as the
 *          context of `val`. If `val` is `undefined`, then `null` will be
 *          returned.
 */
export function valyouNull<T>(
  val: T,
  ...args: T extends TFn ? Parameters<T> : []
): (T extends TFn ? Exclude<ReturnType<T>, null | undefined> : Exclude<T, null | undefined>) | null;


type TFn = (...args: any[]) => any;
