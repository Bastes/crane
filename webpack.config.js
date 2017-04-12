const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8081',
    'webpack/hot/only-dev-server',
    './app/entry.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.elm'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(elm-stuff|node_modules|bower_components)/,
        loaders: ["jsx-loader", "babel-loader"]
      },
      {
        test: /\.jsx$/,
        exclude: /(elm-stuff|node_modules|bower_components)/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.elm$/,
        exclude: /(elm-stuff|node_modules|bower_components)/,
        loader: 'elm-webpack-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
