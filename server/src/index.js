import 'babel-polyfill'
import express from 'express' 
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import morgan from 'morgan'

import createStore from './helpers/createStore'
import renderer from './helpers/renderer'
import Routes from './client/Routes'

const app = express()

app.use(morgan('dev'))
app.use('/api', proxy('http://react-ssr-api.herokuapp.com/', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(req)

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData && route.loadData(store)
  })

  Promise.all(promises)
    .then(() => res.send(renderer(req, store)))

})

app.listen(3000, () => console.log('listening on 3000'))
