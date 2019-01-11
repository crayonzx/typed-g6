declare module '@antv/util/lib/type/is-function' {
  const isFunction: (value: any) => value is (...args: any[]) => any;
  export = isFunction;
}
declare module '@antv/util/lib/type/is-object' {
  const isObject: <T extends object>(value: any) => value is T;
  export = isObject;
}
declare module '@antv/util/lib/type/is-boolean' {
  const isBoolean: (value: any) => value is boolean;
  export = isBoolean;
}
declare module '@antv/util/lib/type/is-nil' {
  const isNil: (value: any) => value is null;
  export = isNil;
}
declare module '@antv/util/lib/type/is-string' {
  const isString: (value: any) => value is string;
  export = isString;
}
declare module '@antv/util/lib/type/is-array' {
  const isArray: <T = any>(value: any) => value is T[];
  export = isArray;
}
declare module '@antv/util/lib/type/is-number' {
  const isNumber: (value: any) => value is number;
  export = isNumber;
}
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
declare module '@antv/util/lib/string/upper-first' {
  const upperFirst: (value: string) => string;
  export = upperFirst;
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
declare module '@antv/util/lib/array/pull' {
  const pull: (arr: any, ...args: any[]) => any;
  export = pull;
}
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
declare module '@antv/util/lib/dom/create-dom' {
  const createDom: (domStr: any) => any;
  export = createDom;
}
declare module '@antv/util/lib/dom/modify-css' {
  const modifyCSS: (dom: any, css: any) => any;
  export = modifyCSS;
}
declare module '@antv/util/lib/dom/request-animation-frame' {
  const requestAnimationFrame: (fn: any) => any;
  export = requestAnimationFrame;
}
declare module '@antv/util/lib/matrix/mat3' {
  const mat3: any;
  export = mat3;
}
declare module '@antv/util/lib/matrix/vec2' {
  const vec2: any;
  export = vec2;
}
declare module '@antv/util/lib/matrix/vec3' {
  const vec3: any;
  export = vec3;
}
declare module '@antv/util/lib/matrix/transform' {
  const transform: (m: any, ts: any) => any;
  export = transform;
}
