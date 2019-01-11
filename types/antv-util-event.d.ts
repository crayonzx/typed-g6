// '@antv/util/lib/event'
declare module '@antv/util/lib/event/get-wrap-behavior' {
  /**
   * 获取封装的事件
   * @protected
   * @param  {Object} obj   对象
   * @param  {String} action 事件名称
   * @return {Function}        返回事件处理函数
   */
  const getWrapBehavior: (obj: any, action: string) => Function;
  export = getWrapBehavior;
}
declare module '@antv/util/lib/event/wrap-behavior' {
  /**
   * 封装事件，便于使用上下文this,和便于解除事件时使用
   * @protected
   * @param  {Object} obj   对象
   * @param  {String} action 事件名称
   * @return {Function}        返回事件处理函数
   */
  const wrapBehavior: (obj: any, action: string) => Function;
  export = wrapBehavior;
}

declare module '@antv/util/lib/event' {
  const event: {
    getWrapBehavior: typeof import('@antv/util/lib/event/get-wrap-behavior');
    wrapBehavior: typeof import('@antv/util/lib/event/wrap-behavior');
  };
  export = event;
}
