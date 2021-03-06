/**
 * @fileOverview html node shape
 * @author huangtonger@aliyun.com
 */
import Node from '../../item/node';
import Rect from '@antv/g/lib/shapes/rect';

import Shape = require('../shape');
import Util = require('../../util/');

// html node
export = Shape.registerNode('html', {
  getHtml(item: Node) {
    return item.getModel().html;
  },
  cssSize: true,
  draw(item: Node) {
    const nodeContainer = Util.createDOM('<div class="g6-html-node-container"></div>');
    const group = item.getGraphicGroup();
    const graph = item.getGraph();
    if (graph.get('renderer') !== 'svg') {
      throw new Error('please use svg renderer draw html element !');
    }
    const graphContainer = graph.getGraphContainer();
    const size = this.getSize(item);
    const style = this.getStyle(item);
    const cssSize = this.cssSize;
    let html = this.getHtml(item);
    html = Util.createDOM(html);
    nodeContainer.css({
      position: 'absolute',
      padding: '0px',
      margin: '0px'
    });
    nodeContainer.appendChild(html);
    graphContainer.appendChild(nodeContainer);
    if (cssSize) {
      size[0] = nodeContainer.width();
      size[1] = nodeContainer.height();
    }
    const x = -size[0] / 2;
    const y = -size[1] / 2;
    const width = size[0];
    const height = size[1];
    const keyShape = group.addShape('rect', {
      attrs: Util.mix({}, style, {
        x,
        y,
        width,
        height
      })
    });
    group.addShape('dom', {
      attrs: Util.mix({
        x,
        y,
        width,
        height,
        html: nodeContainer
      })
    });
    return keyShape;
  }
});
