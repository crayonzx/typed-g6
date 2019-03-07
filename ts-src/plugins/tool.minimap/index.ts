/**
 * @fileOverview 缩略图
 * @author huangtonger@aliyun.com
 */
import G6 = require('@antv/g6');
import Minimap = require('./minimap');

class Plugin {
  constructor(options: Plugin.Options) {
    this.options = options;
  }
  init() {
    const graph = this.graph;
    const minimap = new Minimap({
      getGraph() {
        return graph;
      },
      ...this.options
    });
    minimap.bindGraph(graph);
    this.minimap = minimap;
  }
  destroy() {
    this.minimap.destroy();
  }
}
G6.Plugins['tool.minimap'] = Plugin;

G6.Components.Minimap = Minimap;

export = Plugin;

namespace Plugin {
  export interface Options {
    container: string;
    width?: number;
    height?: number;
  }
}
