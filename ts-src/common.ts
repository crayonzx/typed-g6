import G from '@antv/g/lib';

export namespace Common {
  export type ID = string;

  export type Color = string;

  export type Style = G.Style;
  export interface BBox {
    centerX?: number;
    centerY?: number;
    height: number;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
    width: number;
  }

  export interface Point {
    x: number;
    y: number;
    index?: number;
  }

  export type Points = Array<[number, number]>;

  export type Label = string | { text: string; fill: Color };

  export type FitView =
    | 'tl'
    | 'lc'
    | 'bl'
    | 'cc'
    | 'tc'
    | 'tr'
    | 'rc'
    | 'br'
    | 'bc'
    | 'autoZoom';
}
