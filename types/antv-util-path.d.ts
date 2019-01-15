// @antv/util/lib/path
declare module '@antv/util/lib/path/catmull-rom2bezier' {
  const catmullRom2bezier: (crp: any, z: any) => (string | number)[][];
  export = catmullRom2bezier;
}
declare module '@antv/util/lib/path/fill-path' {
  const fillPath: (source: any, target: any) => any;
  export = fillPath;
}
declare module '@antv/util/lib/path/fill-path-by-diff' {
  const fillPathByDiff: (source: any, target: any) => any;
  export = fillPathByDiff;
}
declare module '@antv/util/lib/path/format-path' {
  const formatPath: (fromPath: any, toPath: any) => any;
  export = formatPath;
}
declare module '@antv/util/lib/path/path-intersection' {
  const pathIntersection: (path1: any, path2: any) => number | any[];
  export = pathIntersection;
}
declare module '@antv/util/lib/path/parse-path-array' {
  const parsePathArray: (path: any) => any;
  export = parsePathArray;
}
declare module '@antv/util/lib/path/parse-path-string' {
  const parsePathString: (pathString: any) => any;
  export = parsePathString;
}
declare module '@antv/util/lib/path/path2absolute' {
  const pathToAbsolute: (pathArray: any) => (string | number)[][];
  export = pathToAbsolute;
}
declare module '@antv/util/lib/path/path2curve' {
  const pathTocurve: (path: any, path2: any) => (string | number)[][] | (string | number)[][][];
  export = pathTocurve;
}
declare module '@antv/util/lib/path/rect-path' {
  const rectPath: (
    x: string | number,
    y: string | number,
    w: string | number,
    h: string | number,
    r: string | number
  ) => (string | number)[][];
  export = rectPath;
}

declare module '@antv/util/lib/path' {
  const path: {
    catmullRom2Bezier: typeof import('@antv/util/lib/path/catmull-rom2bezier');
    catmullRomToBezier: typeof import('@antv/util/lib/path/catmull-rom2bezier');
    fillPath: typeof import('@antv/util/lib/path/fill-path');
    fillPathByDiff: typeof import('@antv/util/lib/path/fill-path-by-diff');
    formatPath: typeof import('@antv/util/lib/path/format-path');
    intersection: typeof import('@antv/util/lib/path/path-intersection');
    pathIntersection: typeof import('@antv/util/lib/path/path-intersection');
    parsePathArray: typeof import('@antv/util/lib/path/parse-path-array');
    parsePathString: typeof import('@antv/util/lib/path/parse-path-string');
    pathToAbsolute: typeof import('@antv/util/lib/path/path2absolute');
    path2absolute: typeof import('@antv/util/lib/path/path2absolute');
    pathTocurve: typeof import('@antv/util/lib/path/path2curve');
    path2curve: typeof import('@antv/util/lib/path/path2curve');
    rectPath: typeof import('@antv/util/lib/path/rect-path');
  };
  export = path;
}
