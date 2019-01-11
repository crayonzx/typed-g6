// @antv/util/lib/format
declare module '@antv/util/lib/format/number2color' {
  const number2color: (num: any) => any;
  export = number2color;
}
declare module '@antv/util/lib/format/parse-path' {
  const parsePath: (path: any) => any;
  export = parsePath;
}
declare module '@antv/util/lib/format/parse-radius' {
  const parseRadius: (
    radius: any
  ) => {
    r1: number;
    r2: number;
    r3: number;
    r4: number;
  };
  export = parseRadius;
}

declare module '@antv/util/lib/format' {
  const format: {
    number2color: typeof import('@antv/util/lib/format/number2color');
    numberToColor: typeof import('@antv/util/lib/format/number2color');
    parsePath: typeof import('@antv/util/lib/format/parse-path');
    parseRadius: typeof import('@antv/util/lib/format/parse-radius');
  };
  export = format;
}
