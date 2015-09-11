'use strict';

import { EventEmitter } from 'events';

class Store extends EventEmitter {

  /**
   * @param {Dispatcher} dispatcher
   */
  constructor (dispatcher) {
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
    this.on('change', listener);
  }

  /**
   * Equivalent to `removeListener('change', listener);`
   * @param {Function} listener
   */
  unlisten (listener) {
    this.removeListener('change', listener);
  }

  /** @abstract */
  getState () {
    throw new Error('Please override Store#getState');
  }

}

export default Store;
