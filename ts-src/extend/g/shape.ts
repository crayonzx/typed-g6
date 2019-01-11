/**
 * @fileOverview extend G.Shape
 * @author huangtonger@aliyun.com
 * @ignore
 */


import Util = require('../../util/');
import G = require('@antv/g/lib');
const Mixin = function() {};

const Mixin1 = Util.augment(Mixin, {
  /**
   * Check contains the specified class
   * @param   {string}      className class name
   * @return  {Boolean}     boolean
   */
  hasClass(className:string) {
    const clasees = this.get('class');
    if (clasees && clasees.indexOf(className) !== -1) {
      return true;
    }
    return false;
  }
});

const Mixin2 = Util.mixin(G.Shape, [ Mixin1 ]);

export = Mixin2;
