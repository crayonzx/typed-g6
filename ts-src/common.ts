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

  /** https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths */
  namespace SVGPath {
    /** moveto */
    export type M = ['M' | 'm', number, number];
    /** lineto */
    export type L = ['L' | 'l', number, number];
    /** horizontal lineto */
    export type H = ['H' | 'h'];
    /** vertical lineto */
    export type V = ['V' | 'v'];
    /** curveto */
    export type C = ['C' | 'c'];
    /** smooth curveto */
    export type S = ['S' | 's'];
    /** quadratic Belzier curve */
    export type Q = ['Q' | 'q', number, number, number, number];
    /** smooth quadratic Belzier curveto */
    export type T = ['T' | 't', number, number, number, number];
    /** elliptical Arc */
    export type A = [
      'A' | 'a',
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ];
    /** closepath */
    export type Z = ['Z' | 'z'];
  }

  export type SVGPath = Array<
    | SVGPath.M
    | SVGPath.L
    | SVGPath.H
    | SVGPath.V
    | SVGPath.C
    | SVGPath.S
    | SVGPath.Q
    | SVGPath.T
    | SVGPath.A
    | SVGPath.Z
  >;

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