const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SassPlugin = require('sass-webpack-plugin');

module.exports = {
  entry: [
    './src/components/Index.jsx',
    './src/Store.js',
    './src/Actions.js'
  ],
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin([
      'dist'
    ]),
    new SassPlugin('src/styles/global.scss'),
    new HtmlWebpackPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};