import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index.jsx';
import { Provider } from 'react-redux';
import store from '../Store.js';

export default class Default extends React.Component {

  render() {
    console.log('bluerg2')
    function checkDocument() {
      console.log('test');
      if (typeof document === 'undefined') {
        return(
          <Provider store={store}>
            <Index></Index>
          </Provider>
        )
      } else {
        console.log('test2');
        var dom = ReactDOM.render(
            <Provider store={store}>
              <Index></Index>
            </Provider>,
            document.getElementById('app')
          )

        console.log(dom)
        return (
          dom
        )
      }
    }

    return(
      <html>
      <head>

        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <title>Todo App</title>
        <link href="css/global.css" rel="stylesheet"></link>

      </head>
      <body>
        <div id="app">
          
          { checkDocument() }

        </div>
      </body>
      </html>
    );
  }
}