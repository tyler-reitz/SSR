const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const base = require('./webpack.base')

const server = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
  target: 'node',
  externals: [nodeExternals()],
}

module.exports = merge(base, server)

