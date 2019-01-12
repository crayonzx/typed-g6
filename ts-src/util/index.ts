/**
 * @fileOverview util
 * @author huangtonger@aliyun.com
 */

const Util = {};
import MathUtil = require('./math');
import PathUtil = require('./path');
import BaseUtil = require('./base');
import DomUtil = require('./dom');
import GraphUtil = require('./graph');
import GraphicUtil = require('./graphic');
const Util1 = BaseUtil.mix(Util, BaseUtil, GraphUtil, GraphicUtil, DomUtil, PathUtil, MathUtil);
export = Util1;
