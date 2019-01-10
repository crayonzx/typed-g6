/**
 * @fileOverview Compact Box Tree Layout
 * @author huangtonger@aliyun.com
 */

import Hierarchy = require('@antv/hierarchy');
import TreeBase = require('./base');

class CompactBoxTreeLayout extends TreeBase {
  constructor(options) {
    super(options);
    this.layout = Hierarchy.compactBox;
  }
}

export = CompactBoxTreeLayout;
