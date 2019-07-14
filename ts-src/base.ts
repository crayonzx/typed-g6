/**
 * @fileOverview
 * The base class for complex class
 * @author huangtonger@aliyun.com
 */

import Util = require('./util/');
import EventEmitter = require('wolfy87-eventemitter');

const EE = EventEmitter as unknown as new () => Event;

class Base extends EE {
  _cfg: {};
  _events: {};
  destroyed: boolean;

  getDefaultCfg() {
    return {};
  }

  constructor(cfg) {
    super();
    const defaultCfg = this.getDefaultCfg();
    this._cfg = Util.mix({}, defaultCfg, cfg);
  }

  get = function (name) {
    return this._cfg[name];
  } as Base.IGet;

  set = function (name, value) {
    this._cfg[name] = value;
  } as Base.ISet;

  destroy() {
    this._cfg = {};
    this.removeAllListeners();
    this.destroyed = true;
  }
}

export = Base;

import Event from './event';
import G from '@antv/g';

namespace Base {
  export type IGet = G.Group['get'];
  export type ISet = G.Group['set'];
  export type Events<E extends string, T extends any[]> = Event.Events<E, T>;
  export type EventHandler<T extends any[]> = Event.EventHandler<T>;
}
