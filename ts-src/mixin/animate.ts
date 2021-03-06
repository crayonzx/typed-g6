/**
 * @fileOverview animate mixin
 * @author huangtonger@aliyun.com
 */

import Util = require('../util/');
import Animate = require('../controller/animate');
const Mixin = {
INIT: '_initAnimate';
CFG: {
  /**
   * animate switch
   * @type {boolean}
   */
  animate: false as boolean | Partial<ReturnType<Animate['getDefaultCfg']>>
};
AUGMENT: {
  _initAnimate() {
    const animate = this.get('animate');
    if (animate) {
      const controllers = this.get('_controllers');
      let cfg = {
        graph: this
      };
      if (Util.isPlainObject(animate)) {
        cfg = {
          ...cfg,
          ...animate
        };
      }
      controllers.animate = new Animate(cfg);
    }
  }
}; };

export = Mixin;

type Mixin = typeof Mixin;
