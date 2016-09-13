module.exports = {
  entry: './assets/js/main.js',
  output: {
    path: './',
    filename: 'build/bundle.js'
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
      }
    ]
  }
};