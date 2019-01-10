/**
 * @fileOverview extend G.Shape
 * @author huangtonger@aliyun.com
 * @ignore
 */


import Util = require('../../util/');
import G = require('@antv/g/lib');
const Mixin = function() {};

Util.augment(Mixin, {
  /**
   * Check contains the specified class
   * @param   {string}      className class name
   * @return  {Boolean}     boolean
   */
  hasClass(className) {
    const clasees = this.get('class');
    if (clasees && clasees.indexOf(className) !== -1) {
      return true;
    }
    return false;
  }
});

Util.mixin(G.Shape, [ Mixin ]);

export = Mixin;
