/**
 * @fileOverview extend G.Group
 * @author huangtonger@aliyun.com
 * @ignore
 */

import G = require('@antv/g/lib');
import Util = require('../../util/');
const Mixin = function() {};

const Mixin1 = Util.augment(Mixin, {
  /**
   * find element by className
   * @param   {string}      className class name
   * @return  {Array}       rst
   */
  findByClass(className:string) {
    const rst = [];
    this.deepEach(child => {
      if (child.hasClass(className)) {
        rst.push(child);
      }
    });
    return rst;
  },
  /**
   * Check contains the specified class
   * @param   {string}      className class name
   * @return  {Boolean}     boolean
   */
  hasClass(className:string) {
    const clasees = this.get('class');
    if (clasees && clasees.indexOf(className) !== -1) {
      return true;
    }
    return false;
  },
  /**
   * traverse child node
   * @param  {function} callback callback
   * @param  {boolean} runSelf excute self or not
   */
  deepEach(callback:() => void, runSelf:boolean) {
    Util.traverseTree(this, callback, parent => {
      return parent.get('children');
    }, runSelf);
  },
  /**
   * radix sort (a stable sort)
   */
  sort() {
    const children = this.get('children');
    this.set('children', Util.radixSort(children, child => {
      return child.get('zIndex');
    }));
  },
  /**
   * sort by callback
   * @param  {function} callback callback
   */
  sortBy(callback:() => void) {
    const children = this.get('children');
    this.set('children', Util.radixSort(children, callback));
  },
  /**
   * clear inner elements
   * @param  {boolean} bool if destroy child
   * @return {object}  this
   */
  clear(bool:boolean) {
    const children = this._cfg.children;
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].remove(bool);
    }
    this._cfg.children = [];
    return this;
  }
});

const Mixin2 = Util.mixin(G.Group, [ Mixin1 ]);
export = Mixin2;
