let path = require('path');
let webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');


module.exports = {
  entry: './assets/js/main.js',
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
        loaders: ['style', 'css', 'sass'],
        include: path.join(__dirname, 'assets/styles')
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      output: {
        comments: false
      }
    })
  ]
};