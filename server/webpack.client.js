const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')

const client= {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
}

module.exports = merge(base, client)
