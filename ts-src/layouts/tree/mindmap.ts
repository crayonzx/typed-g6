/**
 * @fileOverview Mind Map Layout
 * @author huangtonger@aliyun.com
 */

import Hierarchy = require('@antv/hierarchy');
import TreeBase = require('./base');

class MindmapLayout extends TreeBase {
  constructor(options) {
    super(options);
    this.layout = Hierarchy.mindmap;
  }
}

export = MindmapLayout;
