/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
let apiHost;

function setupAPI() {
  switch (process.env.NODE_ENV) {
    case 'production':
      apiHost = "'https://ridemywaycore.herokuapp.com'";
      break;
    default:
      apiHost = "'http://localhost:3000'";
      break;
  }
}

setupAPI();

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
    }),
    new webpack.DefinePlugin({
      __API__: apiHost
    }),
  ],
};
