// @antv/util/lib
declare module '@antv/util/lib/is-empty' {
  const isEmpty: (value: any) => boolean;
  export = isEmpty;
}
declare module '@antv/util/lib/unique-id' {
  const uniqueId: (prefix?: string) => string;
  export = uniqueId;
}
declare module '@antv/util/lib/clone' {
  const clone: <T>(obj: T) => T;
  export = clone;
}
declare module '@antv/util/lib/deep-mix' {
  const deepMix: <T, U1, U2, U3>(
    dist: T,
    src1: U1,
    src2?: U2,
    src3?: U3
  ) => Overwrite<T, U1, U2, U3>;
  export = deepMix;
}
declare module '@antv/util/lib/mix' {
  const mix: (dist: any, src1?: any, src2?: any, src3?: any) => any;
  export = mix;
}

declare module '@antv/util/lib/each' {
  const each: {
    <T>(elements: T[], func: (value: T, index: number) => boolean | void): void;
    <T extends object>(
      elements: T,
      func: <K extends keyof T>(value: T[K], key: K) => boolean | void
    ): void;
  };
  export = each;
}
declare module '@antv/util/lib/is-equal' {
  const isEqual: (value: any, other: any) => boolean;
  export = isEqual;
}
declare module '@antv/util/lib/to-array' {
  const toArray: (value: any) => any[];
  export = toArray;
}
declare module '@antv/util/lib/extend' {
  const extend: <T extends TwoFunctionTypes, U extends NewFunctionType, V, W>(
    subclass: T,
    superclass: U,
    overrides?: V,
    staticOverrides?: W
  ) => ExcludeFunctionType<ToClassType<T>> & {
    new (...args: ArgsType<ToClassType<T>>): Overwrite<
      NewReturnType<U>,
      NewReturnType<ToClassType<T>>,
      V
    >;
    superclass: ProtoType<U>;
  } & ExcludeFunctionType<W extends null | undefined ? {} : W>;
  export = extend;
}
declare module '@antv/util/lib/augment' {
  const augment: <T extends TwoFunctionTypes, U1, U2, U3, U4, U5, U6>(
    dist: T,
    src1: U1,
    src2?: U2,
    src3?: U3,
    src4?: U4,
    src5?: U5,
    src6?: U6
  ) => (new (...args: ArgsType<ToClassType<T>>) => Overwrite<
    ProtoType<ToClassType<T>>,
    ProtoType<U1>,
    ProtoType<U2>,
    ProtoType<U3>,
    ProtoType<U4>,
    ProtoType<U5>,
    ProtoType<U6>
  >) &
    ExcludeFunctionType<ToClassType<T>>;
  export = augment;
}
declare module '@antv/util/lib/debounce' {
  const debounce: (func: any, wait: any, immediate: any) => ((...args: any[]) => void);
  export = debounce;
}
declare module '@antv/util/lib/filter' {
  const filter: (arr: any, func: (...args: any[]) => any) => any[];
  export = filter;
}
declare module '@antv/util/lib/group' {
  const group: (data: any, condition: any) => any[];
  export = group;
}
declare module '@antv/util/lib/group-by' {
  const groupBy: (data: any, condition: any) => any;
  export = groupBy;
}
declare module '@antv/util/lib/group-to-map' {
  const groupToMap: (data: any, condition: any) => any;
  export = groupToMap;
}
declare module '@antv/util/lib/index-of' {
  const indexOf: (arr: any, obj: any) => any;
  export = indexOf;
}
declare module '@antv/util/lib/is-equal-with' {
  /**
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {Function} [fn] The function to customize comparisons.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * function isGreeting(value) {
   *   return /^h(?:i|ello)$/.test(value);
   * }
   *
   * function customizer(objValue, othValue) {
   *   if (isGreeting(objValue) && isGreeting(othValue)) {
   *     return true;
   *   }
   * }
   *
   * var array = ['hello', 'goodbye'];
   * var other = ['hi', 'goodbye'];
   *
   * isEqualWith(array, other, customizer);  // => true
   */
  const isEqualWith: (value: any, other: any, fn?: (...args: any[]) => any) => boolean;
  export = isEqualWith;
}
declare module '@antv/util/lib/map' {
  const map: (arr: any, func: (...agrs: any[]) => any) => any;
  export = map;
}
declare module '@antv/util/lib/pick' {
  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   * pick(object, ['a', 'c']);  // => { 'a': 1, 'c': 3 }
   */
  // type Pick<T, K extends keyof T> = {
  //   [P in K]: T[P];
  // };

  const pick: <T extends object, K extends keyof T>(object: T, keys: K[]) => Pick<T, K>;
  export = pick;
}
declare module '@antv/util/lib/throttle' {
  const throttle: (
    func: any,
    wait: any,
    options: any
  ) => {
    (...args: any[]): any;
    cancel(): void;
  };
  export = throttle;
}
declare module '@antv/util/lib/to-string' {
  const toString: (value: any) => string;
  export = toString;
}

declare module '@antv/util/lib' {
  const util: {
    // collections
    DOMUtil: typeof import('@antv/util/lib/dom');
    DomUtil: typeof import('@antv/util/lib/dom');
    domUtil: typeof import('@antv/util/lib/dom');

    MatrixUtil: typeof import('@antv/util/lib/matrix');
    matrixUtil: typeof import('@antv/util/lib/matrix');

    PathUtil: typeof import('@antv/util/lib/path');
    pathUtil: typeof import('@antv/util/lib/path');

    arrayUtil: typeof import('@antv/util/lib/array');
    eventUtil: typeof import('@antv/util/lib/event');
    formatUtil: typeof import('@antv/util/lib/format');
    mathUtil: typeof import('@antv/util/lib/math');
    objectUtil: typeof import('@antv/util/lib/object');
    stringUtil: typeof import('@antv/util/lib/string');
    typeUtil: typeof import('@antv/util/lib/type');

    // others
    augment: typeof import('@antv/util/lib/augment');
    clone: typeof import('@antv/util/lib/clone');
    debounce: typeof import('@antv/util/lib/debounce');
    deepMix: typeof import('@antv/util/lib/deep-mix');
    each: typeof import('@antv/util/lib/each');
    extend: typeof import('@antv/util/lib/extend');
    filter: typeof import('@antv/util/lib/filter');
    group: typeof import('@antv/util/lib/group');
    groupBy: typeof import('@antv/util/lib/group-by');
    groupToMap: typeof import('@antv/util/lib/group-to-map');
    indexOf: typeof import('@antv/util/lib/index-of');
    isEmpty: typeof import('@antv/util/lib/is-empty');
    isEqual: typeof import('@antv/util/lib/is-equal');
    isEqualWith: typeof import('@antv/util/lib/is-equal-with');
    map: typeof import('@antv/util/lib/map');
    mix: typeof import('@antv/util/lib/mix');
    pick: typeof import('@antv/util/lib/pick');
    throttle: typeof import('@antv/util/lib/throttle');
    toArray: typeof import('@antv/util/lib/to-array');
    toString: typeof import('@antv/util/lib/to-string');
    uniqueId: typeof import('@antv/util/lib/unique-id');
  } & typeof import('@antv/util/lib/dom') &
    typeof import('@antv/util/lib/array') &
    typeof import('@antv/util/lib/event') &
    typeof import('@antv/util/lib/format') &
    typeof import('@antv/util/lib/math') &
    typeof import('@antv/util/lib/matrix') &
    typeof import('@antv/util/lib/object') &
    typeof import('@antv/util/lib/path') &
    typeof import('@antv/util/lib/string') &
    typeof import('@antv/util/lib/type');
  export = util;
}
