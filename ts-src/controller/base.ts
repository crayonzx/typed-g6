/**
 * @fileOverview controller base
 * @author huangtonger@aliyun.com
 */

import Util = require('../util/');

class Base {
  getDefaultCfg() {
    return {};
  }
  constructor(cfg) {
    const defaultCfg = this.getDefaultCfg();
    Util.mix(this, defaultCfg, cfg);
    this._init();
  }
  _init() {}
  destroy() {}
}

export = Base;
