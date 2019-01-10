/**
 * @fileOverview graph
 * @author huangtonger@aliyun.com
 */

export = {
  CompactBoxTree: require('./tree/compact-box') as typeof import('./tree/compact-box'),
  Dendrogram: require('./tree/dendrogram') as typeof import('./tree/dendrogram'),
  IndentedTree: require('./tree/indented') as typeof import('./tree/indented'),
  Mindmap: require('./tree/mindmap') as typeof import('./tree/mindmap'),
  Base: require('./base') as typeof import('./base')
};
