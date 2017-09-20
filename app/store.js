import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import messageApp from './reducers'

export const history = createHistory()

const middleware = routerMiddleware(history)


export const store = createStore(
  messageApp,
  applyMiddleware(thunkMiddleware, middleware)
);
