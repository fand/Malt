'use strict';

class ActionCreator {

  /**
   * Register a Dispatcher instance
   * @param {Dispatcher} dispatcher
   */
  constructor (dispatcher) {
    this.dispatcher = dispatcher;
  }

  /**
   * @param {string} action
   * @param {Object} data
   */
  dispatch (action, data) {
    if (!this.dispatcher) {
      throw new Error('dispatcher not registered in ActionCreator');
    }
    this.dispatcher.dispatch(action, data);
  }

}

export default ActionCreator;
