/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */
import Shape = require('./shape/');
import Handler = require('./handler');
import Global = require('./global');
import version = require('./version');
import G = require('@antv/g/lib');

namespace G6 {
  export const Graph: typeof import('./graph') = require('./graph');
  export const Tree: typeof import('./tree') = require('./tree');
  export const Util: typeof import('./util/') = require('./util/');
  export const Layouts: typeof import('./layouts/') = require('./layouts/');
  export const G: typeof import('./global') = require('./global');
  export const Plugins: typeof import('./plugins') = require('./plugins');
  export const Components = {};
  export const Global: typeof import('./global') = require('./global');
  export const Shape: typeof import('./shape/') = require('./shape/');
  export const registerNode: typeof Shape.registerNode = Shape.registerNode;
  export const registerEdge: typeof Shape.registerEdge = Shape.registerEdge;
  export const registerGroup: typeof Shape.registerGroup = Shape.registerGroup;
  export const registerGuide: typeof Shape.registerGuide = Shape.registerGuide;
  export const registerBehaviour: typeof Handler.registerBehaviour = Handler.registerBehaviour;
  export const version: typeof import('./version') = require('./version');
  export function track(track) {
    Global.track = track;
  }
}
require('./track');

export = G6;

import Model_ from './model';
import Item_ from './items';
namespace G6 {
  export type Graph = import('./graph');
  export import Item = Item_;
  export import Model = Model_;
  export import GShape = G.Shapes;
  export import Common = G.Common;
}

/**
 * This should work but doesn't
 */
// declare module '@antv/g/lib/core/shape-ex' {
//   interface ShapeEx {
//     eventPreFix?: string;
//     id?: G.Common.ID;
//   }
// }
