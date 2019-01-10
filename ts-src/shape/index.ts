/**
 * @fileOverview shape entry file
 * @author huangtonger@aliyun.com
 */


import Shape = require('./shape');

Shape.registerShapeManager('node', {
  defaultShapeType: 'common'
});

Shape.registerShapeManager('edge', {
  defaultShapeType: 'common'
});

Shape.registerShapeManager('group', {
  defaultShapeType: 'common'
});

Shape.registerShapeManager('guide', {
  defaultShapeType: 'common'
});

require('./nodes/');
require('./edges/');
require('./groups/');
require('./guides/');
export = Shape;
