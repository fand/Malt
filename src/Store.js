'use strict';

import { EventEmitter } from 'events';

class Store extends EventEmitter {

  /**
   * @param {Dispatcher} dispatcher
   */
  constructor (dispatcher) {
    super();
    this.dispatcher = dispatcher;
  }

  /**
   * Bind actions to the store's handlers
   * @param {string}   actionName
   * @param {function} storeHandler
   */
  bindAction (actionName, storeHandler) {
    this.dispatcher.on(actionName, storeHandler);
  }

  /**
   * Equivalent to `on('change', listener);`
   * @param {Function} listener
   */
  listen (listener) {
    this.on('alter', listener);
  }

  /**
   * Equivalent to `removeListener('change', listener);`
   * @param {Function} listener
   */
  unlisten (listener) {
    this.removeListener('alter', listener);
  }

  /** @abstract */
  getState () {
    throw new Error('Please override Store#getState');
  }

  /**
   * Emit changes to listeners
   * DO NOT OVERRIDE THIS!
   * @final
   */
  alter () {
    this.emit('alter');
  }

}

export default Store;
