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
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      inject: false,
      title: 'General Operations Dashboard',
      appMountId: 'root',
      googleAnalytics: {
        trackingId: 'UAXXXXXX',
        pageViewOnLoad: true
      },
      links: [
        'https://fonts.googleapis.com/css?family=Roboto',
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        }
      ],
      scripts: [
        'js/bundle.js',
      ],
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