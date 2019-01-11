// @antv/util/lib/type
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
