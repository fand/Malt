'use strict';

import { EventEmitter } from 'events';

class Dispatcher extends EventEmitter {

  /**
   * @param {Object} action
   */
  dispatch (actionName, actionData) {
    this.emit(actionName, actionData);
  }

}

export default Dispatcher;
