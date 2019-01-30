import G from '@antv/g/lib';
import Item from '../items';
import _Shape from './shape';

interface Node {
  /** 绘制, 返回的图形既是该图项的 keyShape -- 关键形 */
  draw?(item: Item.Node): G.Shapes.Base;
  /** 获取锚点 */
  anchor?: G.Common.Points;
  /** 默认样式 */
  getStyle?(item: Item.Node): G.Common.Style;
  /** 选中样式 */
  getSelectedStyle?(item: Item.Node): G.Common.Style;
}

interface Edge {
  /** 绘制, 返回的图形既是该图项的 keyShape -- 关键形 */
  draw?(item: Item.Edge): G.Shapes.Shape<'path'>;
  /* 获取路径 */
  getPath?(item: Item.Edge): G.Common.SVGPath;
  /* 起始箭头 */
  startArrow?: {
    /* 路径 */
    path?(item: Item.Edge): G.Common.SVGPath;
    /* 线缩短偏移 */
    shorten?(item: Item.Edge): number;
    /* 样式 */
    style?(item: Item.Edge): G.Common.Style;
  };
  /* 结束箭头 */
  endArrow?: {
    /* 路径 */
    path?(item: Item.Edge): G.Common.SVGPath;
    /* 线缩短偏移 */
    shorten?(item: Item.Edge): number;
    /* 样式 */
    style?(item: Item.Edge): G.Common.Style;
  };

  /** 默认样式 */
  getStyle?(item: Item.Edge): G.Shapes.Attrs<'path'>;
  /** 选中样式 */
  getSelectedStyle?(item: Item.Edge): G.Shapes.Attrs<'path'>;

  afterDraw?(item: Item.Edge): void;
}

interface Group {
  /** 绘制, 返回的图形既是该图项的 keyShape -- 关键形 */
  draw?(item: Item.Group): G.Shapes.Base;
  /** 获取锚点 */
  anchor?: G.Common.Points;
}

interface Guide {}

export type RegisterShape<T extends Node | Edge | Group | Guide> = (
  name: string,
  cfg: T,
  extendShape?: string
) => void;

export type Shape = {
  registerShapeManager<T>(type: string, cfg: T): ShapeManager<T>;

  registerNode: RegisterShape<Node>;
  registerEdge: RegisterShape<Edge>;
  registerGroup: RegisterShape<Group>;
  registerGuide: RegisterShape<Guide>;

  Node: ShapeManager<{ defaultShapeType: 'common' }> & {
    common: typeof import('./nodes/common');
    html: typeof import('./nodes/html');
  };
  Edge: ShapeManager<{ defaultShapeType: 'common' }> & {
    common: typeof import('./edges/common');
  };
  Group: ShapeManager<{ defaultShapeType: 'common' }> & {
    common: typeof import('./groups/common');
  };
  Guide: ShapeManager<{ defaultShapeType: 'common' }> & {
    common: typeof import('./guides/common');
  };
};

export type ShapeManager<T = {}> = GUtil.Overwrite<
  {
    defaultShapeType?: string | undefined | null;
    getShape(type: string, inputDefaultShape?: string): any;
    getExtendShape(extendShapeName: string, defaultShapeType?: string): any;
  },
  T
> & {
  [x: string]: ShapeObject;
};

export type ShapeObject<T = {}> = T;
