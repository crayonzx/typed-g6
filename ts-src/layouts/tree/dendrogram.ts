/**
 * @fileOverview Dendrogram Tree Layout
 * @author huangtonger@aliyun.com
 */

import Hierarchy = require('@antv/hierarchy');
import TreeBase = require('./base');

class DendrogramTreeLayout extends TreeBase {
  constructor(options) {
    super(options);
    this.layout = Hierarchy.dendrogram;
  }
}

export = DendrogramTreeLayout;
