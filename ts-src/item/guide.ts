/**
 * @fileOverview guide item
 * @author huangtonger@aliyun.com
 */

import Util = require('../util/');
import Item = require('./item');

class Guide extends Item {
  type: 'guide';

  constructor(cfg) {
    const defaultCfg = {
      type: 'guide',
      isGuide: true,
      zIndex: 4
    };
    Util.mix(defaultCfg, cfg);
    super(defaultCfg);
  }
}

export = Guide;
