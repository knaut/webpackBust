// React components
import React from 'react';
import * as actions from '../Actions.js';
import store from '../Store.js';
console.log('blerg');

import styles from '../styles/Default.scss';

console.log(styles)

class Increment extends React.Component {
  handleIncrement() {
    console.log(store)
    store.dispatch( actions.increment() );
  }


  render() {
    console.log(this.handleIncrement)
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

    var test = {
      a: 1,
      b: 2,
      c: 3
    };

    var newTest = {
      ...test
    };

    console.log(newTest)

    return(
      <div>
        <span className='red'>This is a good test {test.a}</span>
        <Increment/>
        <Decrement/>
      </div>
    )
  }
}

export default Test;