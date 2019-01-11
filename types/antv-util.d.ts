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
    augment: any;
    clone: any;
    debounce: any;
    deepMix: any;
    each: any;
    extend: any;
    filter: any;
    group: any;
    groupBy: any;
    groupToMap: any;
    indexOf: any;
    isEmpty: any;
    isEqual: any;
    isEqualWith: any;
    map: any;
    mix: any;
    pick: any;
    throttle: any;
    toArray: any;
    toString: any;
    uniqueId: any;
  };
  export = util;
}
