/**
 * @fileOverview The BaseUtil method based on the lodash.
 * @author huangtonger@aliyun.com
 * @see https://github.com/lodash/lodash
 */
const MAX_LEVEL = 5;
import Util = require('@antv/util/lib');
Math.sign = function(x) {
  x = +x;
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};
const BaseUtil0 = {
  ...Util,
  throttle: require('lodash/throttle') as typeof import('lodash/throttle'),
  debounce: require('lodash/debounce') as typeof import('lodash/debounce'),
  /**
   * The opposite of pick; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   * omit(object, ['a', 'c']); // => { 'b': '2' }
   * @param  {object}      object - input object
   * @param  {function}    array - condition array
   * @return  {object}     result object
   */
  omit<T extends object, K extends keyof T>(object: T, array: K[]): BaseUtil.Omit<T, K> {
    const rst = {};
    Util.each(object, (value, key) => {
      if (array.indexOf(key) === -1) {
        rst[key] = value;
      }
    });
    return rst;
  },
  /**
   * traverse tree
   * @param  {object}      parent      parent
   * @param  {function}    callback    callback
   * @param  {function}    getChild    get child function
   * @param  {boolean}     runSelf     callback run self or not
   */
  traverseTree: function (parent, callback, getChild, runSelf = false) {
    const children = getChild(parent);
    runSelf && callback(parent, null, null);
    children && BaseUtil.each(children, (child, index) => {
      callback(child, parent, index);
      BaseUtil.traverseTree(child, callback, getChild);
    });
  } as <T>(parent: T, callback: (child: T, parent?: T, index?: number) => void, getChild: (p: T) => T[], runSelf?: boolean) => void,

  /**
   * turn padding into [top, right, bottom, right]
   * @param  {Number|Array} padding input padding
   * @return {array} output
   */
  toAllPadding(padding: number | number[]) {
    let top = 0;
    let left = 0;
    let right = 0;
    let bottom = 0;

    if (BaseUtil.isNumber(padding) || BaseUtil.isString(padding)) {
      top = left = right = bottom = padding;
    } else if (BaseUtil.isArray(padding)) {
      top = padding[0];
      right = !BaseUtil.isNil(padding[1]) ? padding[1] : padding[0];
      bottom = !BaseUtil.isNil(padding[2]) ? padding[2] : padding[0];
      left = !BaseUtil.isNil(padding[3]) ? padding[3] : right;
    }
    return [ top, right, bottom, left ];
  },

  /**
   * create random id
   * @return {string} random id
   */
  guid() {
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },

  /**
   * merge data
   * @return {object} merged data
   */
  mix() {
    const args = BaseUtil.toArray(arguments);
    let obj = args[0];
    let source;
    let i;
    if (obj === true) {
      obj = args[1];
      for (i = 2; i < args.length; i++) {
        source = args[i];
        deepMix(obj, source);
      }
    } else {
      for (i = 1; i < args.length; i++) {
        source = args[i];
        for (const k in source) {
          if (source.hasOwnProperty(k) && k !== 'constructor') {
            obj[k] = source[k];
          }
        }
      }
    }
    return obj;
  },

  /**
   * mix in
   * @param {function} c Function
   * @param {array} mixins mixin array
   */
  mixin(c, mixins) {
    if (c && mixins) {
      c._mixins = mixins;
      c.ATTRS = c.ATTRS || {};
      const temp = {};
      BaseUtil.each(mixins, function(mixin) {
        BaseUtil.augment(c, mixin);
      });
      c.ATTRS = BaseUtil.mix(temp, c.ATTRS);
    }
  },

  Array: {
    remove<T>(arr: T[], obj: T): void {},
  }
};

function deepMix(dst, src, level?: number) {
  level = level || 0;
  for (const k in src) {
    if (src.hasOwnProperty(k)) {
      const value = src[k];
      if (value !== null && BaseUtil.isPlainObject(value)) {
        if (!BaseUtil.isPlainObject(dst[k])) {
          dst[k] = {};
        }
        if (level < MAX_LEVEL) {
          deepMix(dst[k], src[k], level + 1);
        } else {
          dst[k] = src[k];
        }
      } else if (BaseUtil.isArray(value)) {
        dst[k] = [];
        dst[k] = dst[k].concat(value);
      } else if (value !== undefined) {
        dst[k] = src[k];
      }
    }
  }
}

BaseUtil0.Array = {
  remove(arr, obj) {
    const index = BaseUtil.indexOf(arr, obj);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
};

const BaseUtil: BaseUtil = BaseUtil0;
export = BaseUtil;

interface BaseUtil extends BaseUtil.Omit<typeof BaseUtil0, 'mix'> {
  mix: BaseUtil.Mix;
}

namespace BaseUtil {
  export interface Mix {
    <T, U1, U2, U3, U4, U5, U6>(
      deep: boolean,
      dst: T,
      src1: U1,
      src2?: U2,
      src3?: U3,
      src4?: U4,
      src5?: U5,
      src6?: U6
    ): GUtil.Overwrite<T, U1, U2, U3, U4, U5, U6>;
    <T, U1, U2, U3, U4, U5, U6>(
      dst: T,
      src1: U1,
      src2?: U2,
      src3?: U3,
      src4?: U4,
      src5?: U5,
      src6?: U6
    ): GUtil.Overwrite<T, U1, U2, U3, U4, U5, U6>;
  }

  export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
}
