/**
 * @fileOverview graph fit canvas
 * @author huangtonger@aliyun.com
 */


import Util = require('../util/');

const Mixin = {
CFG: {
  /**
   * Adaptive viewport
   * @type {string|undefined}
   * could be 'tl', 'lc', 'bl', 'cc', 'tc', 'tr', 'rc', 'br', 'bc', 'autoZoom'
   */
  fitView: undefined as 'tl' | 'lc' | 'bl' | 'cc' | 'tc' | 'tr' | 'rc' | 'br' | 'bc' | 'autoZoom',
  /**
   * Fit view padding (client scale)
   * @type {number|array}
   */
  fitViewPadding: 10 as number | number[],
  /**
   * Minimum scale size
   * @type {number}
   */
  minZoom: 0.2,
  /**
   * Maxmum scale size
   * @type {number}
   */
  maxZoom: 10
};
AUGMENT: {
  getBBox(this: Graph): Common.BBox {
    const itemGroup = this.get('_itemGroup');
    const itemMap = this.get('_itemMap');
    let children = itemGroup.get('children');
    if (children.length > 0) {
      children = children.filter(child => {
        const item = itemMap[child.id];
        if (item) {
          const shapeObj = item.getShapeObj();
          return shapeObj.bboxCalculation !== false;
        }
        return false;
      });
      return Util.getChildrenBBox(children);
    }
    const width = this.get('width');
    const height = this.get('height');
    return {
      minX: 0,
      minY: 0,
      maxX: width,
      maxY: height
    };
  },
  getFitViewPadding() {
    return Util.toAllPadding(this.get('fitViewPadding'));
  },
  setFitView(type: string) {
    if (!type) {
      return this;
    }
    if (type === 'autoZoom') {
      this.autoZoom();
      return this;
    }
    const padding = this.getFitViewPadding();
    const width = this.get('width');
    const height = this.get('height');
    const box = this.getBBox();
    const bWidth = box.maxX - box.minX;
    const bHeight = box.maxY - box.minY;
    const containerBox = {
      x: 0,
      y: 0,
      width,
      height
    };
    const position = Util.getNineBoxPosition(type, containerBox, bWidth, bHeight, padding);
    const matrix = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
    Util.mat3.translate(matrix, matrix, [ -box.minX + position.x, -box.minY + position.y ]);
    this.updateMatrix(matrix);
  },
  _getZoomRatio(ratio) {
    const maxZoom = this.get('maxZoom');
    const minZoom = this.get('minZoom');
    if (ratio < minZoom) {
      ratio = minZoom;
    }
    if (ratio > maxZoom) {
      ratio = maxZoom;
    }
    return ratio;
  },
  /**
   * @param {number|array} padding padding
   */
  autoZoom(padding?: number | number[]) {
    if (!padding) {
      padding = this.getFitViewPadding();
    }
    const width = this.get('width');
    const height = this.get('height');
    const box = this.getBBox();
    const matrix = Util.getAutoZoomMatrix({
      minX: 0,
      minY: 0,
      maxX: width,
      maxY: height
    }, box, padding, ratio => {
      return this._getZoomRatio(ratio);
    });
    this.updateMatrix(matrix);
  },
  /**
   * @return {number} zoom
   */
  getZoom(): number {
    const matrix = this.getMatrix();
    return matrix[0];
  },
  /**
   * @param {object} matrix update matrix
   * @return {Graph} this
   */
  updateMatrix(matrix) {
    const originMatrix = this.getMatrix();
    const ev = {
      updateMatrix: matrix,
      originMatrix
    };
    const zoomBool = originMatrix[0] !== matrix[0];
    this.emit('beforeviewportchange', ev);
    zoomBool && this.emit('beforezoom', ev);
    this.setMatrix(matrix);
    zoomBool && this.emit('afterzoom', ev);
    this.emit('afterviewportchange', ev);
    this.draw();
    return this;
  },
  /**
   * @param {Object|Number} point scale center point
   * @param {Number|undefined} ratio scale ratio
   * @return {Graph} this
   */
  zoom(point: Common.Point | number, ratio?: number) {
    if (Util.isNumber(point)) {
      const width = this.get('width');
      const height = this.get('height');
      this.zoomByDom({
        x: width / 2,
        y: height / 2
      }, point);
      return;
    }
    ratio = this._getZoomRatio(ratio);
    const rootGroup = this.get('_rootGroup');
    const matrix = Util.clone(rootGroup.getMatrix());
    const dx = matrix[6] + matrix[0] * point.x - ratio * point.x;
    const dy = matrix[7] + matrix[0] * point.y - ratio * point.y;
    matrix[6] = 0;
    matrix[7] = 0;
    matrix[0] = ratio;
    matrix[4] = ratio;
    Util.mat3.translate(matrix, matrix, [ dx, dy ]);
    this.updateMatrix(matrix);
    return this;
  },
  /**
   * @param {object} domPoint scale center dom point
   * @param {number} ratio scale ratio
   * @return {Graph} this
   */
  zoomByDom(domPoint: Common.Point, ratio: number): Graph {
    const point = this.getPoint(domPoint);
    this.zoom(point, ratio);
    return this;
  },
  /**
   * @param {number} dx x offset
   * @param {number} dy y offset
   * @return {Graph} this
   */
  translate(dx: number, dy: number) {
    const rootGroup = this.get('_rootGroup');
    const matrix = rootGroup.getMatrix();
    Util.mat3.translate(matrix, matrix, [ dx, dy ]);
    this.updateMatrix(matrix);
    return this;
  },
  /**
   * @param {number} dx dom x offset
   * @param {number} dy dom y offset
   * @return {Graph} this
   */
  translateByDom(dx, dy) {
    const rootGroup = this.get('_rootGroup');
    const matrix = rootGroup.getMatrix();
    const scale = matrix[0];
    this.translate(dx / scale, dy / scale);
    return this;
  },
  /**
   * @return {Graph} this
   */
  getMatrix() {
    const rootGroup = this.get('_rootGroup');
    return rootGroup.getMatrix();
  },
  /**
   * @param {object} matrix - matrix
   */
  setMatrix(matrix) {
    const rootGroup = this.get('_rootGroup');
    rootGroup.setMatrix(matrix);
  },
  /**
   * @param {object} domPoint domPoint
   * @return {object} graph point
   */
  getPoint(domPoint: Common.Point): Common.Point {
    return this.getPointByDom(domPoint);
  },
  /**
   * @param {object} domPoint domPoint
   * @return {object} graph point
   */
  getPointByDom(domPoint: Common.Point): Common.Point {
    const rootGroup = this.get('_rootGroup');
    const matrix = rootGroup.getMatrix();
    return Util.invertMatrix(domPoint, matrix);
  },
  /**
   * @param {object} canvasPoint - canvas point
   * @return {object} graph point
   */
  getPointByCanvas(canvasPoint: Common.Point): Common.Point {
    const canvas = this.get('_canvas');
    const pixelRatio = canvas.get('pixelRatio');
    return this.getPoint({
      x: canvasPoint.x / pixelRatio,
      y: canvasPoint.y / pixelRatio
    });
  },
  /**
   * @param {object} clientPoint - client point
   * @return {object} graph point
   */
  getPointByClient(clientPoint: Common.Point): Common.Point {
    const canvas = this.get('_canvas');
    const canvasPoint = canvas.getPointByClient(clientPoint.x, clientPoint.y);
    return this.getPointByCanvas(canvasPoint);
  },
  /**
   * @param {object} point graph point
   * @return {object} dom point
   */
  getDomPoint(point: Common.Point): Common.Point {
    const rootGroup = this.get('_rootGroup');
    const matrix = rootGroup.getMatrix();
    return Util.applyMatrix(point, matrix);
  },
  /**
   * @param {object} point graph point
   * @return {object} canvas point
   */
  getCanvasPoint(point: Common.Point): Common.Point {
    const canvas = this.get('_canvas');
    const pixelRatio = canvas.get('pixelRatio');
    const domPoint = this.getDomPoint(point);
    return {
      x: domPoint.x * pixelRatio,
      y: domPoint.y * pixelRatio
    };
  },
  /**
   * @param {object} point graph point
   * @return {object} client point
   */
  getClientPoint(point: Common.Point): Common.Point {
    const canvasPoint = this.getCanvasPoint(point);
    const canvas = this.get('_canvas');
    const clientPoint = canvas.getClientByPoint(canvasPoint.x, canvasPoint.y);
    return {
      x: clientPoint.clientX,
      y: clientPoint.clientY
    };
  },
  /**
   * @param {object} item item or itemId
   * @return {Graph} this
   */
  focus(item: Common.ID | Item.Base): Graph {
    if (Util.isString(item)) {
      item = this.find(item);
    }
    if (item) {
      const point = item.getCenter();
      this.focusPoint(point);
    }
    return this;
  },
  /**
   * @param {object} point graph point
   * @return {Graph} this
   */
  focusPoint(point: Common.Point): Graph {
    const rootGroup = this.get('_rootGroup');
    const matrix = rootGroup.getMatrix();
    const width = this.get('width');
    const height = this.get('height');
    const dx = -matrix[6] + width / 2 - matrix[0] * point.x;
    const dy = -matrix[7] + height / 2 - matrix[0] * point.y;
    this.translate(dx, dy);
    return this;
  },
  /**
   * @param {object} domPoint dom point
   * @return {Graph} this
   */
  focusPointByDom(domPoint: Common.Point): Graph {
    const point = this.getPoint(domPoint);
    this.focusPoint(point);
    return this;
  }
}; };
export = Mixin;

type Mixin = typeof Mixin;

import Common from '@antv/g/lib/common';
import Item from '../items';
import Graph from '../graph';
