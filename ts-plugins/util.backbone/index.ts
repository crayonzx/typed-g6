/**
 * @fileOverview pull graph backbone
 * @author huangtonger@aliyun.com
 */

import G6 = require('@antv/g6');
import maxSpanningForest = require('./maxSpanningForest');
const Util = G6.Util;

const backbone = {
  maxSpanningForest
};
Util.mix(Util, backbone);
