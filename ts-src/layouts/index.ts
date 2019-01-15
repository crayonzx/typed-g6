/**
 * @fileOverview graph
 * @author huangtonger@aliyun.com
 */

const Layouts: {
  CompactBoxTree: typeof import('./tree/compact-box');
  Dendrogram: typeof import('./tree/dendrogram');
  IndentedTree: typeof import('./tree/indented');
  Mindmap: typeof import('./tree/mindmap');
  Base: typeof import('./base');
} = {
  CompactBoxTree: require('./tree/compact-box'),
  Dendrogram: require('./tree/dendrogram'),
  IndentedTree: require('./tree/indented'),
  Mindmap: require('./tree/mindmap'),
  Base: require('./base')
};
export = Layouts;
