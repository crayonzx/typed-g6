import EventEmitter from 'wolfy87-eventemitter';
import G from '@antv/g/lib';
import Item from './items';

// @ts-ignore
// class Event extends EventEmitter { }

// @ts-ignore
interface Event {
  addListener: <T extends { _events: Event.Events<any, any[]> }, K extends keyof T['_events']>(
    this: T,
    event: K,
    listener: Event.EventHandler<Event.EventArgs<T['_events'][K]>>
  ) => T;

  addListeners: <T extends { _events: Event.Events<any, any[]> }, K extends keyof T['_events']>(
    this: T,
    event: K,
    listeners: Array<Event.EventHandler<Event.EventArgs<T['_events'][K]>>>
  ) => T;

  emit: <T extends { _events: Event.Events<any, any[]> }, K extends keyof T['_events']>(
    this: T,
    event: K,
    ...arg: Event.EventArgs<T['_events'][K]>
  ) => T;

  removeListener: Event['addListener'];
  on: Event['addListener'];
  off: Event['addListener'];
  addOnceListener: Event['addListener'];
  once: Event['addListener'];

  removeListeners: Event['addListeners'];

  trigger: Event['emit'];

  // getListeners: EventEmitter['getListeners'];
  // flattenListeners: EventEmitter['flattenListeners'];
  // getListenersAsObject: EventEmitter['getListenersAsObject'];
  // defineEvent: EventEmitter['defineEvent'];
  // defineEvents: EventEmitter['defineEvents'];
  // manipulateListeners: EventEmitter['manipulateListeners'];
  // removeEvent: EventEmitter['removeEvent'];
  // removeAllListeners: EventEmitter['removeAllListeners'];
  // emitEvent: EventEmitter['emitEvent'];
  // setOnceReturnValue: EventEmitter['setOnceReturnValue'];
}

namespace Event {
  /** HACK: '__eventArgsType' is only to help to get type of event args. */
  type EventValue<T extends any[]> = Array<EventHandler<T>> & { __eventArgsType: T };

  export type Events<E extends string, T extends any[]> = { [event in E]: EventValue<T> };

  export type EventHandler<T extends any[]> = (...args: T) => any;

  export type EventArgs<T extends EventValue<any[]>> = T['__eventArgsType'];

  export type MouseEvent =
    | 'click'
    | 'dblclick'
    | 'mouseenter'
    | 'mouseleave'
    | 'mousedown'
    | 'mouseup'
    | 'mousemove'
    | 'dragstart'
    | 'drag'
    | 'dragend'
    | 'dragenter'
    | 'dragleave'
    | 'drop'
    | 'contextmenu'
    | 'wheel'
    | 'mousewheel';

  export type KeyboardEvent = 'keydown' | 'keyup' | 'keypress';

  export type DomEventMap = HTMLElementEventMap;
  type BaseEvent = DomEventMap['close'];

  export type EventObject<E extends BaseEvent = BaseEvent> = {
    /** drag 拖动子项 */
    currentItem: Item;
    /** drag 拖动图形 */
    currentShape: G.Shapes.Base;
    /** 图形对象 */
    shape: G.Shapes.Base;
    /** 子项 */
    item: Item;
    /** 原生的 dom 事件 */
    domEvent: E;
    /** 图横坐标 */
    x: number;
    /** 图纵坐标 */
    y: number;
    /** dom横坐标 */
    domX: number;
    /** dom纵坐标 */
    domY: number;
    /** 数据变更动作 add、update、remove、changeData */
    action?: 'add' | 'update' | 'remove' | 'changeData';
    /** mouseleave、dragleave 到达的图形 */
    toShape?: G.Shapes.Base;
    /** mouseleave、dragleave 到达的子项 */
    toItem?: Item;
    /** mouseleave、dragleave 来自的图形 */
    fromShape?: G.Shapes.Base;
    /** 鼠标左中右键 */
    button: 0 | 1 | 2;
  };

  export type MouseEventObject = EventObject<DomEventMap['click']>;
  export type KeyboardEventObject = EventObject<DomEventMap['keypress']>;
}

export default Event;
