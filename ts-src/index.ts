/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */
import Shape = require('./shape/');
import Handler = require('./handler');
import Global = require('./global');
import version = require('./version');
import G = require('@antv/g/lib');

const G6: {
  Graph: typeof import('./graph');
  Tree: typeof import('./tree');
  Util: typeof import('./util/');
  Layouts: typeof import('./layouts/');
  G: typeof G;
  Plugins: typeof import('./plugins');
  Components: {};
  Global: typeof Global;
  Shape: typeof Shape;
  registerNode: typeof Shape.registerNode,
  registerEdge: typeof Shape.registerEdge,
  registerGroup: typeof Shape.registerGroup,
  registerGuide: typeof Shape.registerGuide,
  registerBehaviour: typeof Handler.registerBehaviour,
  version: typeof version;
  track: (track: any) => void;
} = {
  Graph: require('./graph'),
  Tree: require('./tree'),
  Util: require('./util/'),
  Layouts: require('./layouts/'),
  G,
  Plugins: {},
  Components: {},
  Global,
  Shape,
  registerNode: Shape.registerNode,
  registerEdge: Shape.registerEdge,
  registerGroup: Shape.registerGroup,
  registerGuide: Shape.registerGuide,
  registerBehaviour: Handler.registerBehaviour,
  version,
  track(track) {
    Global.track = track;
  }
};
require('./track');

export = G6;