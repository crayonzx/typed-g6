/**
 * @fileOverview graph util
 * @author huangtonger@aliyun.com
 */

import BaseUtil = require('./base');

export = {
  /**
   * determine whether a node
   * @param  {object}  item item
   * @return {boolean} bool
   */
  isNode(item: object): item is Item.Node {
    return item && BaseUtil.isObject(item) && item.type === 'node';
  },
  /**
   * determine whether a edge
   * @param  {object}  item item
   * @return {boolean} bool
   */
  isEdge(item: object): item is Item.Edge {
    return item && BaseUtil.isObject(item) && item.type === 'edge';
  },
  /**
   * determine whether a group
   * @param  {object}  item item
   * @return {boolean} bool
   */
  isGroup(item: object): item is Item.Group {
    return item && BaseUtil.isObject(item) && item.type === 'group';
  }
};

import Item from '../items';
