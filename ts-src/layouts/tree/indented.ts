/**
 * @fileOverview Indented Tree Layout
 * @author huangtonger@aliyun.com
 */

import Hierarchy = require('@antv/hierarchy');
import TreeBase = require('./base');

class IndentedTreeLayout extends TreeBase {
  constructor(options) {
    super(options);
    this.layout = Hierarchy.indented;
  }
}

export = IndentedTreeLayout;
