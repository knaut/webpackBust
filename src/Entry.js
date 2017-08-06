import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index.jsx';
import { Provider } from 'react-redux';
import store from './Store.js';

ReactDOM.render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById('root')
);