// @antv/util/lib/object
declare module '@antv/util/lib/object/for-in' {
  const forin: typeof import('@antv/util/lib/each');
  export = forin;
}
declare module '@antv/util/lib/object/has' {
  const has: (obj: any, key: any) => any;
  export = has;
}
declare module '@antv/util/lib/object/has-key' {
  const haskey: typeof import('@antv/util/lib/object/has');
  export = haskey;
}
declare module '@antv/util/lib/object/has-value' {
  const hasvalue: (obj: any, value: any) => boolean;
  export = hasvalue;
}
declare module '@antv/util/lib/object/keys' {
  const keys: (obj: any) => any[];
  export = keys;
}
declare module '@antv/util/lib/object/is-match' {
  const isMatch: (obj: any, attrs: any) => boolean;
  export = isMatch;
}
declare module '@antv/util/lib/object/values' {
  const values: (obj: any) => any;
  export = values;
}

declare module '@antv/util/lib/object' {
  const object: {
    forIn: typeof import('@antv/util/lib/object/for-in');
    has: typeof import('@antv/util/lib/object/has');
    hasKey: typeof import('@antv/util/lib/object/has-key');
    hasValue: typeof import('@antv/util/lib/object/has-value');
    keys: typeof import('@antv/util/lib/object/keys');
    isMatch: typeof import('@antv/util/lib/object/is-match');
    values: typeof import('@antv/util/lib/object/values');
  };
  export = object;
}
