// @antv/util/lib/matrix
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

declare module '@antv/util/lib/matrix' {
  const matrix: {
    mat3: typeof import('@antv/util/lib/matrix/mat3');
    vec2: typeof import('@antv/util/lib/matrix/vec2');
    vec3: typeof import('@antv/util/lib/matrix/vec3');
    transform: typeof import('@antv/util/lib/matrix/transform');
  };
  export = matrix;
}
