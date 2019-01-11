// @antv/util/lib/type
declare module '@antv/util/lib/type/get-type' {
  const getType: (value: any) => any;
  export = getType;
}
declare module '@antv/util/lib/type/is-array' {
  const isArray: <T = any>(value: any) => value is T[];
  export = isArray;
}
declare module '@antv/util/lib/type/is-array-like' {
  /**
   * isArrayLike([1, 2, 3]) => true
   * isArrayLike(document.body.children) => true
   * isArrayLike('abc') => true
   * isArrayLike(Function) => false
   */
  const isArrayLike: (value: any) => value is { length: number };
  export = isArrayLike;
}
declare module '@antv/util/lib/type/is-boolean' {
  const isBoolean: (value: any) => value is boolean;
  export = isBoolean;
}
declare module '@antv/util/lib/type/is-function' {
  /**
   * isArrayLike([1, 2, 3]) => true
   * isArrayLike(document.body.children) => true
   * isArrayLike('abc') => true
   * isArrayLike(Function) => false
   */
  const isFunction: (value: any) => value is (...args: any[]) => any;
  export = isFunction;
}
declare module '@antv/util/lib/type/is-nil' {
  const isNil: (value: any) => value is null | undefined;
  export = isNil;
}
declare module '@antv/util/lib/type/is-null' {
  const isNull: (value: any) => value is null;
  export = isNull;
}
declare module '@antv/util/lib/type/is-number' {
  const isNumber: (value: any) => value is number;
  export = isNumber;
}
declare module '@antv/util/lib/type/is-object' {
  /**
   * isObject({}) => true
   * isObject([1, 2, 3]) => true
   * isObject(Function) => true
   * isObject(null) => false
   */
  const isObject: <T extends object>(value: any) => value is T;
  export = isObject;
}
declare module '@antv/util/lib/type/is-object-like' {
  /**
   * isObjectLike({}) => true
   * isObjectLike([1, 2, 3]) => true
   * isObjectLike(Function) => false
   * isObjectLike(null) => false
   */
  // todo
  const isObjectLike: (value: any) => boolean;
  export = isObjectLike;
}
declare module '@antv/util/lib/type/is-plain-object' {
  /**
   * isObjectLike(new Foo) => false
   * isObjectLike([1, 2, 3]) => false
   * isObjectLike({ x: 0, y: 0 }) => true
   * isObjectLike(Object.create(null)) => true
   */
  // todo
  const isPlainObject: (value: any) => boolean;
  export = isPlainObject;
}
declare module '@antv/util/lib/type/is-prototype' {
  // todo
  const isPrototype: (value: any) => boolean;
  export = isPrototype;
}
declare module '@antv/util/lib/type/is-type' {
  // todo
  const isType: (value: any, type: any) => boolean;
  export = isType;
}
declare module '@antv/util/lib/type/is-undefined' {
  const isUndefined: (value: any) => value is undefined;
  export = isUndefined;
}
declare module '@antv/util/lib/type/is-string' {
  const isString: (value: any) => value is string;
  export = isString;
}
declare module '@antv/util/lib/type/is-reg-exp' {
  const isRegExp: (str: any) => str is RegExp;
  export = isRegExp;
}
declare module '@antv/util/lib/type/is-date' {
  const isDate: (value: any) => value is Date;
  export = isDate;
}
declare module '@antv/util/lib/type/is-arguments' {
  /**
   * 是否是参数类型
   *
   * @param {Object} value 测试的值
   * @return {Boolean}
   */
  // todo
  const isArguments: (value: any) => boolean;
  export = isArguments;
}
declare module '@antv/util/lib/type/is-error' {
  const isError: (value: any) => value is Error;
  export = isError;
}

declare module '@antv/util/lib/type' {
  const checkType: {
    getType: typeof import('@antv/util/lib/type/get-type');
    isArray: typeof import('@antv/util/lib/type/is-array');
    isArrayLike: typeof import('@antv/util/lib/type/is-array-like');
    isBoolean: typeof import('@antv/util/lib/type/is-boolean');
    isFunction: typeof import('@antv/util/lib/type/is-function');
    isNil: typeof import('@antv/util/lib/type/is-nil');
    isNull: typeof import('@antv/util/lib/type/is-null');
    isNumber: typeof import('@antv/util/lib/type/is-number');
    isObject: typeof import('@antv/util/lib/type/is-object');
    isObjectLike: typeof import('@antv/util/lib/type/is-object-like');
    isPlainObject: typeof import('@antv/util/lib/type/is-plain-object');
    isPrototype: typeof import('@antv/util/lib/type/is-prototype');
    isType: typeof import('@antv/util/lib/type/is-type');
    isUndefined: typeof import('@antv/util/lib/type/is-undefined');
    isString: typeof import('@antv/util/lib/type/is-string');
    isRegExp: typeof import('@antv/util/lib/type/is-reg-exp');
    isDate: typeof import('@antv/util/lib/type/is-date');
    isArguments: typeof import('@antv/util/lib/type/is-arguments');
    isError: typeof import('@antv/util/lib/type/is-error');
  };
  export = checkType;
}
