let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: './source/main.js',
  output: {
    path: './',
    filename: 'build/bundle.min.js'
  },

  devServer: {
    inline: true,
    port: 9000
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      compress: {
        warnings: true
      }
    })
  ]
};