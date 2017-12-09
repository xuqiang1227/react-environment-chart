'use strict';

let path = require('path');

console.log(path.join(__dirname, './src'));

module.exports = {
  entry: {
    EnvironmentChart: './src/EnvironmentChart.jsx'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, './src')]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=120000'
      }
    ]
  },
  externals: {
    'react': 'react'
  }
};
