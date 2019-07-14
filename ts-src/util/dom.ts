/**
 * @fileOverview dom util
 * @author huangtonger@aliyun.com
 */

import BaseUtil = require('./base');
// const DomUtil = {};
const DomUtil = BaseUtil.mix({}, {
  /**
   * add event listener
   * @param  {object} target - event source
   * @param  {object} eventType - event type
   * @param  {funtion} callback - event callback
   * @return {object} - event object that has remove function
   */
  addEventListener(target, eventType, callback) {
    if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }  if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    }
  },
  /**
   * create dom by string
   * @param  {string}  str dom string
   * @param  {object}  css css
   * @return  {domobject}  dom
   */
  createDOM(str: HTMLElement | string, css?: Partial<CSSStyleDeclaration>) {
    let dom: DomObject;
    if (BaseUtil.isString(str)) {
      dom = BaseUtil.createDom(str);
    } else {
      dom = str;
    }
    dom.bbox = dom.getBoundingClientRect();
    dom.hide = function() {
      dom.style.visibility = 'hidden';
      return dom;
    };
    dom.show = function() {
      dom.style.visibility = 'visible';
      return dom;
    };
    dom.css = function(obj) {
      BaseUtil.modifyCSS(dom, obj);
      return dom;
    };
    dom.width = function() {
      return BaseUtil.getWidth(dom);
    };
    dom.height = function() {
      return BaseUtil.getHeight(dom);
    };
    dom.destroy = function() {
      dom.parentNode && dom.parentNode.removeChild(dom);
    };
    dom.on = function(eventType, callback) {
      dom.addEventListener(eventType, callback);
    };
    dom.off = function(eventType, callback) {
      dom.removeEventListener(eventType, callback);
    };
    dom.css(css);
    return dom;
  },
  initDOMContainer(container: HTMLElement | string, className: string): HTMLElement {
    if (container) {
      if (BaseUtil.isString(container)) {
        container = document.getElementById(container);
      }
    } else {
      throw new Error('please set the container for the ' + className + ' !');
    }
    return container;
  }
});
export = DomUtil;

type DomUtil = typeof DomUtil;

type DomObject = HTMLElement & {
  bbox: ReturnType<HTMLElement['getBoundingClientRect']>;
  hide: () => DomObject;
  show: () => DomObject;
  css: (modifyCSS: Partial<CSSStyleDeclaration>) => DomObject;
  width: () => number;
  height: () => number;
  destroy: () => void;
  on: HTMLElement['addEventListener'];
  off: HTMLElement['removeEventListener'];
};
