
const webpack = require('webpack')
const { dependencies, name } = require('./package')

const externals = Object.keys(dependencies)

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]

module.exports = {

  output: {
    library: name,
    libraryTarget: 'umd'
  },

  externals,

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ]
  },

  node: {
    Buffer: false
  },

  plugins

}
