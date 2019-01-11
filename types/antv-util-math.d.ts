// @antv/util/lib/math
declare module '@antv/util/lib/math/is-number-equal' {
  const isNumberEqual: (a: number, b: number) => boolean;
  export = isNumberEqual;
}
declare module '@antv/util/lib/math/to-radian' {
  const toRadian: (degree: number) => number;
  export = toRadian;
}
declare module '@antv/util/lib/math/to-degree' {
  const toDegree: (radian: number) => number;
  export = toDegree;
}
declare module '@antv/util/lib/math/mod' {
  const mod: (n: number, m: number) => number;
  export = mod;
}
declare module '@antv/util/lib/math/clamp' {
  const clamp: (a: number, min: number, max: number) => number;
  export = clamp;
}
declare module '@antv/util/lib/math/fixed-base' {
  const fixedBase: (v: any, base: any) => number;
  export = fixedBase;
}
declare module '@antv/util/lib/math/is-decimal' {
  const isDecimal: (num: any) => boolean;
  export = isDecimal;
}
declare module '@antv/util/lib/math/is-even' {
  const isEven: (num: any) => boolean;
  export = isEven;
}
declare module '@antv/util/lib/math/is-integer' {
  const isInteger: (number: number) => boolean;
  export = isInteger;
}
declare module '@antv/util/lib/math/is-negative' {
  const isNagative: (num: any) => boolean;
  export = isNagative;
}
declare module '@antv/util/lib/math/is-odd' {
  const isOdd: (num: any) => boolean;
  export = isOdd;
}
declare module '@antv/util/lib/math/is-positive' {
  const isPositive: (num: any) => boolean;
  export = isPositive;
}
declare module '@antv/util/lib/math/max-by' {
  /**
   * @param {Array} arr The array to iterate over.
   * @param {Function} [fn] The iteratee invoked per element.
   * @return {*} Returns the maximum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * maxBy(objects, function(o) { return o.n; });
   * // => { 'n': 2 }
   *
   * maxBy(objects, 'n');
   * // => { 'n': 2 }
   */
  const maxBy: (arr: any[], fn?: Function | string | number) => any;
  export = maxBy;
}
declare module '@antv/util/lib/math/min-by' {
  /**
   * @param {Array} arr The array to iterate over.
   * @param {Function} [fn] The iteratee invoked per element.
   * @return {*} Returns the minimum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * minBy(objects, function(o) { return o.n; });
   * // => { 'n': 1 }
   *
   * minBy(objects, 'n');
   * // => { 'n': 1 }
   */
  const minBy: (arr: any[], fn?: Function | string | number) => any;
  export = minBy;
}
declare module '@antv/util/lib/math/to-integer' {
  export = parseInt;
}

declare module '@antv/util/lib/math' {
  const math: {
    clamp: typeof import('@antv/util/lib/math/clamp');
    fixedBase: typeof import('@antv/util/lib/math/fixed-base');
    isDecimal: typeof import('@antv/util/lib/math/is-decimal');
    isEven: typeof import('@antv/util/lib/math/is-even');
    isInteger: typeof import('@antv/util/lib/math/is-integer');
    isNegative: typeof import('@antv/util/lib/math/is-negative');
    isNumberEqual: typeof import('@antv/util/lib/math/is-number-equal');
    isOdd: typeof import('@antv/util/lib/math/is-odd');
    isPositive: typeof import('@antv/util/lib/math/is-positive');
    maxBy: typeof import('@antv/util/lib/math/max-by');
    minBy: typeof import('@antv/util/lib/math/min-by');
    mod: typeof import('@antv/util/lib/math/mod');
    snapEqual: typeof import('@antv/util/lib/math/is-number-equal');
    toDegree: typeof import('@antv/util/lib/math/to-degree');
    toInt: typeof import('@antv/util/lib/math/to-integer');
    toInteger: typeof import('@antv/util/lib/math/to-integer');
    toRadian: typeof import('@antv/util/lib/math/to-radian');
  };
  export = math;
}
