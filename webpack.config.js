const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SassPlugin = require('sass-webpack-plugin');

module.exports = {
  entry: './src/Entry.js',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin([
      'dist'
    ]),
    new SassPlugin('src/styles/global.scss'),
    new HtmlWebpackPlugin({
      // config api: https://github.com/jaketrent/html-webpack-template
      template: 'node_modules/html-webpack-template/index.ejs',
      inject: false,
      title: 'webpackBust',
      appMountId: 'root',
      links: [
        {
          href: 'css/global.css',
          rel: 'stylesheet',
          type: 'text/css'
        }
      ]
    })
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
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