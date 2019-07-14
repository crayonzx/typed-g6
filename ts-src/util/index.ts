/**
 * @fileOverview util
 * @author huangtonger@aliyun.com
 */

const Util: Util = {};
import MathUtil = require('./math');
import PathUtil = require('./path');
import BaseUtil = require('./base');
import DomUtil = require('./dom');
import GraphUtil = require('./graph');
import GraphicUtil = require('./graphic');
BaseUtil.mix(Util, BaseUtil, GraphUtil, GraphicUtil, DomUtil, PathUtil, MathUtil);
export = Util;

type Util = GUtil.Overwrite<BaseUtil, GraphUtil, GraphicUtil, DomUtil, PathUtil, MathUtil>
