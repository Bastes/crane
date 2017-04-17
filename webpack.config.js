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
    extensions: ['.js', '.jsx', '.elm', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        exclude: /(elm-stuff|node_modules|bower_components)/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.css$/,
        exclude: /(elm-stuff|node_modules|bower_components)/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(elm-stuff|node_modules|bower_components)/,
        use: ["jsx-loader", "babel-loader"]
      },
      {
        test: /\.jsx$/,
        exclude: /(elm-stuff|node_modules|bower_components)/,
        use: ["babel-loader"]
      },
      {
        test: /\.elm$/,
        exclude: /(elm-stuff|node_modules|bower_components)/,
        use: ['elm-webpack-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
