/* eslint-disable */
var path = require('path');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var Dotenv = require('dotenv-webpack');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;
require("@babel/polyfill");

// Create new page function
var page = function ({title, chunks, template, filename}) {
  return new HtmlWebpackPlugin({
    title: title,
    chunks: chunks,
    template: template,
    filename: filename,
    minify: {
      collapseWhitespace: true
    }
  });
};

var commonConfig = {
  entry: {
    articles: ["@babel/polyfill", path.join(__dirname, 'src', 'pages', 'articles', 'index')]
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
  ],
  module:{
    rules: [
      {
        test: /\.(html|ejs)$/,
        use: ['html-loader', 'ejs-html-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      styles: path.resolve(__dirname, 'src', 'styles')
    }
  }
};

const devConfig = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  }
};

const prodConfig = {
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(
          {
            cssProcessorOptions: {map: {inline: false}}
          }
      ),
      new UglifyJsPlugin(
          {
            cache: true,
            parallel: true,
            sourceMap: true, // set to true if you want JS source maps
            extractComments: true
          }
      )
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new CleanWebpackPlugin(path.join(__dirname, 'dist')),
    new CriticalPlugin({
      src: path.join(__dirname, 'src', 'pages', 'articles', 'index.html'),
      inline: true,
      minify: true,
      dest: path.join(__dirname, 'dist', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  }
};

module.exports = (env, argv) =>
    argv.mode === 'development' ?
        merge(commonConfig, devConfig) :
        merge(commonConfig, prodConfig);
