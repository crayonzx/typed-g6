import G from '@antv/g/lib';

export namespace Common {
  export type ID = string;

  export type Color = string;

  export interface Style extends Partial<G.Style> {
    // /** 填充颜色 */
    // fill?: Common.Color;
    // /** 描边颜色 */
    // stroke?: Common.Color;
    // /** 线条(描边)样式 */
    // lineDash?: number | number[];
  }

  export interface BBox extends G.BBox {}

  // export type NodeShape =
  //   | 'circle'
  //   | 'rect'
  //   | 'path'
  //   | 'line'
  //   | 'polyline'
  //   | 'image'
  //   | 'text'
  //   | 'marker'
  //   | 'fan'
  //   | 'arc'
  //   | 'ellipse'
  //   | 'cubic'
  //   | 'quadratic';
  // export type EdgeShape = 'line';
  // export type Shape = NodeShape | EdgeShape | 'image' | 'text';
  // export type Shape = G.ShapeType;

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
