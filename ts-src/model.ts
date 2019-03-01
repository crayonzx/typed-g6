import G from '@antv/g/lib';

namespace Model {
  export interface Data {
      nodes?: Node[];
      edges?: Edge[];
      groups?: Group[];
      guides?: Guide[];
  }

  export interface Base {
      /** id 必须唯一 */
      id: G.Common.ID;
      /** 所属组 */
      parent?: G.Common.ID;
      /** 颜色 */
      color?: G.Common.Color;
      /** 尺寸 || [宽, 高] */
      size?: [number, number];
      /** 所用图形 */
      shape?: string;
  }

  export interface Node extends Base {
      x: number;
      y: number;
      /** 尺寸 || [宽, 高] */
      size?: [number, number];
      /** 关键形样式（优先级高于color） */
      style?: G.Common.Style;
      /** 文本标签 || 文本图形配置 */
      label?: string;
      /** 渲染层级 */
      index?: number;
  }

  export interface Edge extends Base {
      /** 源节点 id */
      source: G.Common.ID | G.Common.Point;
      /** 目标节点 id */
      target: G.Common.ID | G.Common.Point;
      /** 控制点 */
      controlPoints?: G.Common.Point[];
      /** 源节点锚点 */
      sourceAnchor?: number;
      /** 目标节点锚点 */
      targetAnchor?: number;
      /** 尺寸(对线来说没啥用) */
      // size?: number;
      /** 关键形样式（优先级高于color） */
      style?: G.Common.Style;
      /** 文本标签 || 文本图形配置 */
      label?: string;
      /** 渲染层级 */
      index?: number;

      /** 开始箭头 */
      startArrow?: boolean;
      /** 结束箭头 */
      endArrow?: boolean;
  }

  /** Group 继承于 Node ，享有 Node 的所有接口 */
  export interface Group extends Node {}

  export interface Guide extends Base {}
}
export default Model;
