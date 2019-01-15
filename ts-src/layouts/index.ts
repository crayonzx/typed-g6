/**
 * @fileOverview graph
 * @author huangtonger@aliyun.com
 */

import CompactBoxTree from './tree/compact-box';
import Dendrogram from './tree/dendrogram';
import IndentedTree from './tree/indented';
import Mindmap from './tree/mindmap';
import Base from './base';

export = {
  CompactBoxTree: require('./tree/compact-box') as typeof CompactBoxTree,
  Dendrogram: require('./tree/dendrogram') as typeof Dendrogram,
  IndentedTree: require('./tree/indented') as typeof IndentedTree,
  Mindmap: require('./tree/mindmap') as typeof Mindmap,
  Base: require('./base') as typeof Base
};