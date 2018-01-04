import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'
import Routes from './Routes'

const store = createStore( reducers, {}, composeWithDevTools(
    applyMiddleware(thunk)
))

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router> 
  </Provider>,
  document.querySelector('#root'))
