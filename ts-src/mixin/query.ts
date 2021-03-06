/**
 * @fileOverview graph query
 * @author huangtonger@aliyun.com
 */


import Util = require('../util/');
const Mixin = {

AUGMENT: {
  find<T extends Item.Type | 'base' = 'base'>(id: G.Common.ID): Item.Map<T> | undefined {
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
  getItemByShape(shape: { id: G.Common.ID }): Item.Base | undefined | null {
    if (!shape) return null;
    return this.getItem(shape.id);
  },
  /**
   * get item item || itemId
   * @param  {object|string} item - the shape from g
   * @return {object}  item
   */
  getItem<T extends Item.Type | 'base' = 'base'>(item: G.Common.ID | Item.Map<T>): Item.Map<T> | undefined {
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
}; };
export = Mixin;

type Mixin = typeof Mixin;

import G from '@antv/g';
import Item from '../items';
