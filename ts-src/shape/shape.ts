/**
 * @fileOverview shape base class
 * @author huangtonger@aliyun.com
 */

import * as Interfaces from './interfaces';

import Util = require('../util/');
const Shape = {} as Interfaces.Shape;

const ShapeBase = {
  draw() {}
};

const ShapeManagerBase = {
  defaultShapeType: null,
  getShape(type, inputDefaultShape) {
    const shape = this[type] || this[inputDefaultShape] || this[this.defaultShapeType] || ShapeBase;
    return shape;
  },
  getExtendShape(extendShapeName, defaultShapeType) {
    if (Util.isArray(extendShapeName)) {
      let rst = {};
      extendShapeName.forEach(subExtendShapeName => {
        if (this[subExtendShapeName]) {
          rst = Util.mix({}, rst, this.getShape(subExtendShapeName, defaultShapeType));
        }
      });
      return rst;
    }
    return this.getShape(extendShapeName, defaultShapeType);
  }
};

Shape.registerShapeManager = function(type, cfg) {
  const shapeManager = Util.mix({}, ShapeManagerBase, cfg);
  const Type = Util.upperFirst(type);
  Shape[Type] = shapeManager;
  Shape['register' + Type] = function(shapeType, cfg, extendShapeName, defaultShapeType) {
    // if (shapeManager[shapeType]) {
    //   throw new Error(shapeType + ' was already exist, please choose another name.');
    // }
    if (Util.isNil(extendShapeName) && Util.isNil(defaultShapeType)) {
      extendShapeName = shapeType;
    }
    const extendShape = shapeManager.getExtendShape(extendShapeName, defaultShapeType);
    const shapeObj = Util.mix(true, {}, extendShape, cfg);
    shapeObj.type = shapeType;
    shapeManager[shapeType] = shapeObj;
    return shapeObj;
  };
  return shapeManager;
};

export = Shape;

type Shape = typeof Shape;

namespace Shape {
  export type Anchors = Interfaces.Anchors;
  export type Node = Interfaces.Node;
  export type Edge = Interfaces.Edge;
  export type Group = Interfaces.Group;
  export type Guide = Interfaces.Guide;
  export type registerNode = typeof Shape.registerNode;
  export type registerEdge = typeof Shape.registerEdge;
  export type registerGroup = typeof Shape.registerGroup;
  export type registerGuide = typeof Shape.registerGuide;
  export type NodeShapeManager = typeof Shape.Node;
  export type EdgeShapeManager = typeof Shape.Edge;
  export type GroupShapeManager = typeof Shape.Group;
  export type GuideShapeManager = typeof Shape.Guide;
}
