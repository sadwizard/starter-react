var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname , 'src'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015']
          }
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: false } },
            { loader: 'sass-loader' }
          ]
        })
      },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            limit: 0,
          }
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['env', 'react', 'es2015']
            }
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  watch: true,
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    historyApiFallback: true,
    port: 9000,
    hot: false
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};
