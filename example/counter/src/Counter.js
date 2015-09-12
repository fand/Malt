'use strict';

import React from 'react';
import CountStore from './CountStore';
import CountActions from './CountActions';

class Counter extends React.Component {

  constructor () {
    super();
    this.state = CountStore.getState();
  }

  onChange () {
    this.setState(CountStore.getState());
  }

  componentDidMount () {
    CountStore.listen(::this.onChange);
  }

  componentWillUnmount () {
    CountStore.unlisten(::this.onChange);
  }

  render () {
    return (
      <ul>
        <li>count : {this.state.count}</li>
        <li><button onClick={::this.increment}>++</button></li>
        <li><button onClick={::this.decrement}>--</button></li>
      </ul>
    );
  }

  increment () {
    CountActions.increment();
  }

  decrement () {
    CountActions.decrement();
  }

}

export default Counter;
