const path = require('path')
const webpack = require('webpack')
const pkg = require('./package')

// const IS_PROD = process.env.NODE_ENV === 'production'
// const IS_DEV = !IS_PROD

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    library: pkg.name,
    libraryTarget: 'umd',
  },

  externals: Object.keys(pkg.dependencies),

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },

  node: {
    Buffer: false,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      VERSION: JSON.stringify(pkg.version),
    }),
  ],

  resolve: {
    alias: {
      '#utils': path.resolve(__dirname, 'src', '_internal', 'utils'),
      '#styles': path.resolve(__dirname, 'src', '_internal', 'styles'),
      '#components': path.resolve(__dirname, 'src', '_internal', 'components'),
    },
  },

  performance: {
    hints: 'warning',
  },
}
