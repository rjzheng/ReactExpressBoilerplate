/* Node Modules */
import * as redux from 'redux';
import reduxPromise from 'redux-promise';

/* Reducers */
import { globalReducer } from 'reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';


export function configure() {
  // Combine all custom reducers
  var reducer = redux.combineReducers({
  });

  // Create store with reducers, middleware and chrome dev tool extension
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(logger(),thunk, reduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
