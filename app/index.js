import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter, push } from 'react-router-redux'
import { Route, Redirect, IndexRoute } from 'react-router'

import Thread from './components/Thread'
import Login from './containers/Login'
import {store, history} from './store'


const App = ({ children }) => (
  <div>
    { children }
  </div>
)

const getRoutes = store => {
  const isLoggedIn = () => {
    const state = store.getState();
    return !!state.user;
  }

  return (
    <Route path="/">
      <App>
        <Route exact path="/" component={Login} />
        <Route path="/chat" render={() => (
          isLoggedIn() ? (
            <Thread />
          ) : (
            <Redirect to="/"/>
          )
        )}/>
      </App>
    </Route>
  );
}


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      { getRoutes(store) }
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
