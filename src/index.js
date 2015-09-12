'use strict';

import MaltStore from './Store';
import MaltDispatcher from './Dispatcher';
import MaltActionCreator from './ActionCreator';

class Malt extends MaltDispatcher {
  constructor () {
    super();

    const self = this;

    class Store extends MaltStore {
      constructor () {
        super(self);
      }
    }

    class ActionCreator extends MaltActionCreator {
      constructor () {
        super(self);
      }
    }

    this.Store         = Store;
    this.ActionCreator = ActionCreator;
  }
}

export default Malt;
