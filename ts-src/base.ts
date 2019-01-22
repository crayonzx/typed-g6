/**
 * @fileOverview
 * The base class for complex class
 * @author huangtonger@aliyun.com
 */

import Util = require('./util/');
import EventEmitter = require('wolfy87-eventemitter');

class Base extends EventEmitter {

  getDefaultCfg() {
    return {};
  }

  constructor(cfg) {
    super();
    const defaultCfg = this.getDefaultCfg();
    this._cfg = Util.mix({}, defaultCfg, cfg);
  }

  get<T extends { _cfg: any }, K extends keyof T['_cfg']>(this: T, name: K): T['_cfg'][K] {
    return this._cfg[name];
  }

  set<T extends { _cfg: any }, K extends keyof T['_cfg']>(this: T, name: K, value: T['_cfg'][K]) {
    this._cfg[name] = value;
  }

  destroy() {
    this._cfg = {};
    this.removeAllListeners();
    this.destroyed = true;
  }
}

export = Base;
