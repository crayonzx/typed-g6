// @antv/util/lib/string
declare module '@antv/util/lib/string/lc' {
  const lc: typeof import('@antv/util/lib/string/lower-case');
  export = lc;
}
declare module '@antv/util/lib/string/lower-case' {
  const lowerCase: (str: any) => string;
  export = lowerCase;
}
declare module '@antv/util/lib/string/lower-first' {
  const lowerFirst: (value: any) => string;
  export = lowerFirst;
}
declare module '@antv/util/lib/string/substitute' {
  const substitute: (str: any, o: any) => string;
  export = substitute;
}
declare module '@antv/util/lib/string/uc' {
  const uc: typeof import('@antv/util/lib/string/upper-case');
  export = uc;
}
declare module '@antv/util/lib/string/upper-case' {
  const upperCase: (str: any) => string;
  export = upperCase;
}
declare module '@antv/util/lib/string/upper-first' {
  const upperFirst: (value: string) => string;
  export = upperFirst;
}

declare module '@antv/util/lib/string' {
  const string: {
    lc: typeof import('@antv/util/lib/string/lc');
    lowerCase: typeof import('@antv/util/lib/string/lower-case');
    lowerFirst: typeof import('@antv/util/lib/string/lower-first');
    substitute: typeof import('@antv/util/lib/string/substitute');
    uc: typeof import('@antv/util/lib/string/uc');
    upperCase: typeof import('@antv/util/lib/string/upper-case');
    upperFirst: typeof import('@antv/util/lib/string/upper-first');
  };
  export = string;
}
