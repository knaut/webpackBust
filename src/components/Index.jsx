// React components
import React from 'react';
import * as actions from '../Actions.js';
import store from '../Store.js';

class Increment extends React.Component {
  handleIncrement() {
    store.dispatch( actions.increment() );
  }

  render() {
    return (
      <button onClick={this.handleIncrement.bind(this)} className='increment'>
        <span>Increment</span>
      </button>
    )
  }
}

class Decrement extends React.Component {
  handleDecrement() {
    store.dispatch( actions.decrement() );
  }
  render() {
    return (
      <button onClick={this.handleDecrement} className='decrement'>
        <span>Decrement</span>
      </button>
    )
  }
}

class Test extends React.Component {
  render() {
    return(
      <div>
        <span className='red'>This is a good test</span>
        <Increment/>
        <Decrement/>
      </div>
    )
  }
}

export default Test;