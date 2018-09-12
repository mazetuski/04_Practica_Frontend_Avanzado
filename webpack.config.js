var path = require('path');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// Create new page function
var page = function ({ title, chunks, template, filename }) {
  return new HtmlWebpackPlugin({
    title: title,
    chunks: chunks,
    template: template,
    filename: filename
  })
};

var commonConfig = {
  entry: {
    articles: path.join(__dirname, 'src', 'pages', 'articles', 'index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][hash].js'
  },
  plugins: [
    new Dotenv(),
    page({
      title: 'Articles',
      chunks: ['articles'],
      template: path.join(__dirname, 'src', 'pages', 'articles', 'index.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html')
    })
  ]
};

const devConfig = {

};

const prodConfig = {
  plugins: [
    new CleanWebpackPlugin(path.join(__dirname, 'dist'))
  ]
};

module.exports = (env, argv) =>
  argv.mode === 'development' ?
      commonConfig :
      merge(commonConfig, prodConfig);
