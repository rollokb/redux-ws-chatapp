import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Thread from './components/Thread'
import store from './store'

render(
  <Provider store={store}>
    <Thread/>
  </Provider>,
  document.getElementById('root')
)

export default store;
