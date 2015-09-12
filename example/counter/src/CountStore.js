'use strcit';

import Malt from './Malt';
import CountActions from './CountActions';

class CountStore extends Malt.Store {

  constructor () {
    super();

    this.count = 0;

    this.bindAction(CountActions.INCREMENT, ::this.increment);
    this.bindAction(CountActions.DECREMENT, ::this.decrement);
  }

  increment () {
    this.count++;
    this.alter();
  }

  decrement () {
    this.count--;
    this.alter();
  }

  getState () {
    return { count : this.count };
  }

}

export default new CountStore();
