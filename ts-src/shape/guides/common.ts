/**
 * @fileOverview guide shapes
 * @author huangtonger@aliyun.com
 */

import Shape = require('../shape');

export = Shape.registerGuide('common', {
  draw() {
    console.warn('do not have this guide, please register one');
  }
});
