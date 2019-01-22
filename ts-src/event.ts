import EventEmitter from 'wolfy87-eventemitter';

// @ts-ignore
class Event extends EventEmitter {}

// @ts-ignore
interface Event {
  addListener: <T extends { _events: Event.Events<any, any[]> }, K extends keyof T['_events']>(
    this: T,
    event: K,
    listener: T['_events'][K][number]
  ) => this;

  addListeners: <T extends { _events: Event.Events<any, any[]> }, K extends keyof T['_events']>(
    this: T,
    event: K,
    listeners: Array<T['_events'][K][number]>
  ) => this;

  emit: <T extends { _events: Event.Events<any, any[]> }, K extends keyof T['_events']>(
    this: T,
    event: K,
    ...args: Event.EventArgs<T['_events'][K][number]>
  ) => this;

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
  export type Events<E extends string, T extends any[]> = { [event in E]: Array<EventHandler<T>> };

  export type EventHandler<T extends any[]> = (...args: T) => void;

  export type EventArgs<
    T extends EventHandler<any[]> | Array<EventHandler<any[]>>
  > = T extends EventHandler<infer U> ? U : T extends Array<EventHandler<infer V>> ? V : never;
}

export default Event;
