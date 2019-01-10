/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */
import Shape = require('./shape/');
import Handler = require('./handler');
import Global = require('./global');
import version = require('./version');
import G = require('@antv/g/lib');

const G6 = {
  Graph: require('./graph') as typeof import('./graph'),
  Tree: require('./tree') as typeof import('./tree'),
  Util: require('./util/') as typeof import('./util/'),
  Layouts: require('./layouts/') as typeof import('./layouts/'),
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
