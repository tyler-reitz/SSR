import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../client/reducers'
import logger from '../client/middleware/logger'

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    cookie: { cookie: req.get('cookie') || '' },
  })

  const store = createStore( reducers, {}, 
    applyMiddleware(...[
      logger,
      thunk.withExtraArgument(axiosInstance)
    ])
  )

  return store
}
