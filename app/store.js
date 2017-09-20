import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import messageApp from './reducers'

export default createStore(
  messageApp,
  applyMiddleware(thunkMiddleware)
);
