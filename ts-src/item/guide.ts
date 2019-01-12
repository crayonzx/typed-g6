/**
 * @fileOverview guide item
 * @author huangtonger@aliyun.com
 */

import Util = require('../util/');
import Item = require('./item');

class Guide extends Item {
  constructor(cfg) {
    const defaultCfg = {
      type: 'guide',
      isGuide: true,
      zIndex: 4
    };
    const defaultCfg1 = Util.mix(defaultCfg, cfg);
    super(defaultCfg1);
  }
}

export = Guide;
