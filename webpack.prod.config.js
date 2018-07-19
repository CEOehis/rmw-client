/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');
let apiHost = "'https://ridemywaycore.herokuapp.com'";

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: true,
    }),
    new webpack.DefinePlugin({
      __API__: apiHost
    }),
    new CopyWebpackPlugin(
      [
        {
          from: './public/styles/',
          to: 'styles',
        }
      ]
    ),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
