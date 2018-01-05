import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

import reducers from './reducers'
import Routes from './Routes'

const axiosInstance = axios.create({
  baseURL: '/api',
})

const store = createStore( 
  reducers, 
  window.INITIAL_STATE, 
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
)

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(Routes)}</div>
    </Router> 
  </Provider>,
  document.querySelector('#root'))
