// @antv/util/lib/array
declare module '@antv/util/lib/array/pull' {
  const pull: (arr: any, ...args: any[]) => any;
  export = pull;
}
declare module '@antv/util/lib/array/contains' {
  const contains: (arr: any, value: any) => boolean;
  export = contains;
}
declare module '@antv/util/lib/array/difference' {
  /**
   * Flattens `array` a single level deep.
   *
   * @param {Array} arr The array to inspect.
   * @param {Array} values The values to exclude.
   * @return {Array} Returns the new array of filtered values.
   * @example
   * difference([2, 1], [2, 3]);  // => [1]
   */
  const difference: (arr: any[], ...args: any[]) => any[];
  export = difference;
}
declare module '@antv/util/lib/array/find' {
  const find: (arr: any, predicate: any) => any;
  export = find;
}
declare module '@antv/util/lib/array/first-value' {
  const firstValue: (data: any, name: any) => any;
  export = firstValue;
}
declare module '@antv/util/lib/array/flatten' {
  /**
   * Flattens `array` a single level deep.
   *
   * @param {Array} arr The array to flatten.
   * @return {Array} Returns the new flattened array.
   * @example
   *
   * flatten([1, [2, [3, [4]], 5]]);  // => [1, 2, [3, [4]], 5]
   */
  const flatten: (arr: any[]) => any[];
  export = flatten;
}
declare module '@antv/util/lib/array/flatten-deep' {
  /**
   * Flattens `array` a single level deep.
   *
   * @param {Array} arr The array to flatten.
   * @param {Array} result The array to return.
   * @return {Array} Returns the new flattened array.
   * @example
   *
   * flattenDeep([1, [2, [3, [4]], 5]]);  // => [1, 2, 3, 4, 5]
   */
  const flattenDeep: (arr: any[], ...args: any[]) => any[];
  export = flattenDeep;
}
declare module '@antv/util/lib/array/get-range' {
  const getRange: (values: any) => { min: any; max: any };
  export = getRange;
}
declare module '@antv/util/lib/array/merge' {
  const merge: (dataArray: any) => any[];
  export = merge;
}
declare module '@antv/util/lib/array/pull-at' {
  const pullAt: (arr: any, indexes: any) => any;
  export = pullAt;
}
declare module '@antv/util/lib/array/reduce' {
  const reduce: (arr: any, fn: any, init: any) => any;
  export = reduce;
}
declare module '@antv/util/lib/array/remove' {
  const remove: (arr: any, predicate: any) => any[];
  export = remove;
}
declare module '@antv/util/lib/array/sort-by' {
  const sortBy: (arr: any, key: any) => any;
  export = sortBy;
}
declare module '@antv/util/lib/array/union' {
  const union: (...args: any[]) => any[];
  export = union;
}
declare module '@antv/util/lib/array/uniq' {
  const uniq: (arr: any) => any[];
  export = uniq;
}
declare module '@antv/util/lib/array/values-of-key' {
  const valuesOfKey: (data: any, name: any) => any[];
  export = valuesOfKey;
}

declare module '@antv/util/lib/array' {
  const array: {
    contains: typeof import('@antv/util/lib/array/contains');
    difference: typeof import('@antv/util/lib/array/difference');
    find: typeof import('@antv/util/lib/array/find');
    firstValue: typeof import('@antv/util/lib/array/first-value');
    flatten: typeof import('@antv/util/lib/array/flatten');
    flattenDeep: typeof import('@antv/util/lib/array/flatten-deep');
    getRange: typeof import('@antv/util/lib/array/get-range');
    merge: typeof import('@antv/util/lib/array/merge');
    pull: typeof import('@antv/util/lib/array/pull');
    pullAt: typeof import('@antv/util/lib/array/pull-at');
    reduce: typeof import('@antv/util/lib/array/reduce');
    remove: typeof import('@antv/util/lib/array/remove');
    sortBy: typeof import('@antv/util/lib/array/sort-by');
    union: typeof import('@antv/util/lib/array/union');
    uniq: typeof import('@antv/util/lib/array/uniq');
    valuesOfKey: typeof import('@antv/util/lib/array/values-of-key');
  };
  export = array;
}
