import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

let initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
    case 'INCREMENT':

      state = {
        ...state,
        count: state.count + 1
      }

    break;
    case 'DECREMENT':

      state = {
        ...state,
        count: state.count - 1
      }

    break;
  }

  return state;
}

const middleware = applyMiddleware(
  promise(),
  thunk,
  createLogger()
);

const store = createStore(reducer, middleware);

export default store;