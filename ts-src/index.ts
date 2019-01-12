/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */
import Shape = require('./shape/');
import Handler = require('./handler');
import Global = require('./global');
import version = require('./version');
import G = require('@antv/g/lib');

import Graph from './graph';
import Tree from './tree';
import Util from './util';
import Layouts from './layouts';

const G6 = {
  Graph,
  Tree,
  Util,
  Layouts: Layouts as any, // TODO: fix Layouts
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
