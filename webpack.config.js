const webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: ['./index'],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      // Enable caching for improved performance during development
      // It uses default OS directory by default. If you need
      // something more custom, pass a path to it.
      // I.e., babel?cacheDirectory=<path>
      loader: 'babel',
      // Parse only app files! Without this it will go through
      // the entire project. In addition to being slow,
      // that will most likely result in an error.
      exclude: /node_modules/,
      query: {
        presets: ['stage-0', 'es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
  }
};