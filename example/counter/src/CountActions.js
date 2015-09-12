'use strict';

import Malt from './Malt';

class CounterActions extends Malt.ActionCreator {

  constructor () {
    super();
    this.INCREMENT = 'INCREMENT';
    this.DECREMENT = 'DECREMENT';
  }

  increment () {
    this.dispatch(this.INCREMENT);
  }

  decrement () {
    this.dispatch(this.DECREMENT);
  }

}

export default new CounterActions();
