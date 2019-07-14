/**
 * @fileOverview dom event handler
 * @author wuyue.lwy <wyueliu@gmail.com>
 */

import Controller = require('../controller/event');
const Mixin = {
INIT: '_initEvents';
CFG: {
  /**
   * keyboard Enable
   * @type {boolean|function}
   */
  keyboardEnable: true
};
AUGMENT: {
  _initEvents() {
    const controllers = this.get('_controllers');
    controllers.events = new Controller({
      graph: this
    });
  }
}; };
export = Mixin;

type Mixin = typeof Mixin;
