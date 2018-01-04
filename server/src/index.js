import 'babel-polyfill'
import renderer from './helpers/renderer'
import express from 'express' 
import createStore from './helpers/createStore'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  // Some logic to init
  // and load data into store

  res.send(renderer(req, store))
})

app.listen(3000, () => console.log('listening on 3000'))
