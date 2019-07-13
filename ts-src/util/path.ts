/**
 * @fileOverview path util
 * @author huangtonger@aliyun.com
 */

import G = require('@antv/g/lib');
import BaseUtil = require('./base');
const PathUtil = {};

const PathUtil1 = BaseUtil.mix(PathUtil, G.PathUtil, {
  getRectPath: G.PathUtil.rectPath,
  /**
   * points to polygon
   * TODO improve performance
   * @param {array}  points input points
   * @param {Boolen} z if close path
   * @return {string} Path
   */
  pointsToPolygon(points: G.Common.Point[]): G.Common.SVGPath {
    const path = [
      [ 'M', points[0].x, points[0].y ]
    ];
    for (let index = 1; index < points.length; index++) {
      const point = points[index];
      path.push([ 'L', point.x, point.y ]);
    }
    return path;
  },
  /**
   * get ellipse path
   * @param {number} x  horizontal coordinates
   * @param {number} y  vertical coordinates
   * @param {number} rx horizontal radius
   * @param {number} ry vertical radius
   * @return {array} path
   */
  getEllipsePath(x: number, y: number, rx: number, ry: number): G.Common.SVGPath {
    const rst = [
      [ 'M', x, y - ry ],
      [ 'a', rx, ry, 0, 1, 1, 0, 2 * ry ],
      [ 'a', rx, ry, 0, 1, 1, 0, -2 * ry ],
      [ 'z' ]
    ];
    return rst;
  }
});

export = PathUtil1;
