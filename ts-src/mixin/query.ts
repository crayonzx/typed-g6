/**
 * @fileOverview graph query
 * @author huangtonger@aliyun.com
 */

import Shape from '@antv/g/lib/core/shape';
import { Common } from '../common';
import Item from '../item';

import Util = require('../util/');
const Mixin = function() {};

Mixin.AUGMENT = {
  find(id: Common.ID): Item.Base | undefined {
    const itemMap = this.get('_itemMap');
    return itemMap[id];
  },
  /**
   * get nodes
   * @return {array} rst
   */
  getNodes(): Item.Node[] {
    const itemMap = this.get('_itemMap');
    return itemMap._nodes;
  },
  /**
   * get edges
   * @return {array} rst
   */
  getEdges(): Item.Edge[] {
    const itemMap = this.get('_itemMap');
    return itemMap._edges;
  },
  /**
   * get groups
   * @return {array} rst
   */
  getGroups(): Item.Group[] {
    const itemMap = this.get('_itemMap');
    return itemMap._groups;
  },
  /**
   * get guides
   * @return {array} rst
   */
  getGuides(): Item.Guide[] {
    const itemMap = this.get('_itemMap');
    return itemMap._guides;
  },
  /**
   * get items
   * @return {array} rst
   */
  getItems(): Item.Base[] {
    const itemMap = this.get('_itemMap');
    const rst = [];
    Util.each(itemMap, item => {
      if (item.type) {
        rst.push(item);
      }
    });
    return rst;
  },
  /**
   * get item by shape
   * @param  {G.Shape} shape - the shape from g
   * @return {string}  item.id - id of the item
   */
  getItemByShape(shape: Shape): Item.Base {
    if (!shape) return null;
    return this.getItem(shape.id);
  },
  /**
   * get item item || itemId
   * @param  {object|string} item - the shape from g
   * @return {object}  item
   */
  getItem(item: Common.ID | Item.Base): Item.Base {
    const itemMap = this.get('_itemMap');
    if (Util.isObject(item)) {
      if (item.destroyed) {
        item = itemMap[item.id];
      }
    } else {
      item = itemMap[item];
    }
    return item;
  }
};
export = Mixin as ExcludeFunctionType<typeof Mixin>;
