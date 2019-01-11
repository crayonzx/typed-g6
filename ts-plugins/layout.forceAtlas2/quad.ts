/**
 * @fileOverview quad
 * @author shiwu.wyy@antfin.com
 */

export = class Quad {
  constructor(params) {
    /**
     * the center position of this quad
     * @type  {number}
     */
    this.xmid = params.xmid as number;
    /**
     * the center position of this quad
     * @type  {number}
     */
    this.ymid = params.ymid as number;
    /**
     * the length of this quad
     * @type  {number}
     */
    this.length = params.length as number;
    /**
     * the mass center of this quad
     * @type  {number}
     */
    this.massCenter = params.massCenter as number;
    /**
     * the mass of this quad
     * @type  {number}
     */
    this.mass = params.mass as number;
  }
  getLength() {
    return this.length;
  }
  contains(x, y) {
    const halfLen = this.length / 2;
    return (x <= this.xmid + halfLen &&
      x >= this.xmid - halfLen &&
      y <= this.ymid + halfLen &&
      y >= this.ymid - halfLen);
  }
  // northwest quadrant
  NW() {
    const x = this.xmid - this.length / 4;
    const y = this.ymid + this.length / 4;
    const len = this.length / 2;
    const params = {
      xmid: x,
      ymid: y,
      length: len
    };
    const NW = new Quad(params);
    return NW;
  }
  // northeast
  NE() {
    const x = this.xmid + this.length / 4;
    const y = this.ymid + this.length / 4;
    const len = this.length / 2;
    const params = {
      xmid: x,
      ymid: y,
      length: len
    };
    const NE = new Quad(params);
    return NE;
  }
  // southwest
  SW() {
    const x = this.xmid - this.length / 4;
    const y = this.ymid - this.length / 4;
    const len = this.length / 2;
    const params = {
      xmid: x,
      ymid: y,
      length: len
    };
    const SW = new Quad(params);
    return SW;
  }
  // southeast
  SE() {
    const x = this.xmid + this.length / 4;
    const y = this.ymid - this.length / 4;
    const len = this.length / 2;
    const params = {
      xmid: x,
      ymid: y,
      length: len
    };
    const SE = new Quad(params);
    return SE;
  }
};
// export = Quad;
