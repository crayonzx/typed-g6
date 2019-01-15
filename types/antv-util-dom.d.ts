// @antv/util/lib/dom
declare module '@antv/util/lib/dom/create-dom' {
  const createDom: (domStr: any) => any;
  export = createDom;
}
declare module '@antv/util/lib/dom/modify-css' {
  const modifyCSS: (dom: any, css: any) => any;
  export = modifyCSS;
}
declare module '@antv/util/lib/dom/request-animation-frame' {
  const requestAnimationFrame: (fn: any) => any;
  export = requestAnimationFrame;
}
declare module '@antv/util/lib/dom/add-event-listener' {
  /**
   * 添加事件监听器
   * @param  {Object} target DOM对象
   * @param  {String} eventType 事件名
   * @param  {Funtion} callback 回调函数
   * @return {Object} 返回对象
   */
  const addEventListener: (target: object, eventType: string, callback: object) => object;
  export = addEventListener;
}
declare module '@antv/util/lib/dom/get-bounding-client-rect' {
  const getBoundingClientRect: (node: any, defaultValue: any) => any;
  export = getBoundingClientRect;
}
declare module '@antv/util/lib/dom/get-height' {
  /**
   * 获取高度
   * @param  {HTMLElement} el dom节点
   * @param  {Number} defaultValue 默认值
   * @return {Number} 高度
   */
  const getHeight: (el: HTMLElement, defaultValue: number) => number;
  export = getHeight;
}
declare module '@antv/util/lib/dom/get-outer-height' {
  /**
   * 获取外层高度
   * @param  {HTMLElement} el dom节点
   * @param  {Number} defaultValue 默认值
   * @return {Number} 高度
   */
  const getOuterHeight: (el: HTMLElement, defaultValue: number) => number;
  export = getOuterHeight;
}
declare module '@antv/util/lib/dom/get-outer-width' {
  /**
   * 获取外层宽度
   * @param  {HTMLElement} el dom节点
   * @param  {Number} defaultValue 默认值
   * @return {Number} 宽度
   */
  const getOuterWidth: (el: HTMLElement, defaultValue: number) => number;
  export = getOuterWidth;
}
declare module '@antv/util/lib/dom/get-ratio' {
  const getRatio: () => number;
  export = getRatio;
}
declare module '@antv/util/lib/dom/get-style' {
  /**
   * 获取样式
   * @param  {Object} dom DOM节点
   * @param  {String} name 样式名
   * @param  {Any} defaultValue 默认值
   * @return {String} 属性值
   */
  const getStyle: (dom: any, name: string, defaultValue: any) => string;
  export = getStyle;
}
declare module '@antv/util/lib/dom/get-width' {
  /**
   * 获取宽度
   * @param  {HTMLElement} el  dom节点
   * @param  {Number} defaultValue 默认值
   * @return {Number} 宽度
   */
  const getWidth: (el: HTMLElement, defaultValue: number) => number;
  export = getWidth;
}

declare module '@antv/util/lib/dom' {
  const dom: {
    addEventListener: typeof import('@antv/util/lib/dom/add-event-listener');
    createDom: typeof import('@antv/util/lib/dom/create-dom');
    getBoundingClientRect: typeof import('@antv/util/lib/dom/get-bounding-client-rect');
    getHeight: typeof import('@antv/util/lib/dom/get-height');
    getOuterHeight: typeof import('@antv/util/lib/dom/get-outer-height');
    getOuterWidth: typeof import('@antv/util/lib/dom/get-outer-width');
    getRatio: typeof import('@antv/util/lib/dom/get-ratio');
    getStyle: typeof import('@antv/util/lib/dom/get-style');
    getWidth: typeof import('@antv/util/lib/dom/get-width');
    modifyCSS: typeof import('@antv/util/lib/dom/modify-css');
    requestAnimationFrame: typeof import('@antv/util/lib/dom/request-animation-frame');
  };
  export = dom;
}
