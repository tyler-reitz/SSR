import 'babel-polyfill'
import express from 'express' 
import { matchRoutes } from 'react-router-config'

import createStore from './helpers/createStore'
import renderer from './helpers/renderer'
import Routes from './client/Routes'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  console.log(matchRoutes(Routes, req.path))
  matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData && route.loadData()
  })

  res.send(renderer(req, store))
})

app.listen(3000, () => console.log('listening on 3000'))
