const path = require('path');
const webpack = require('webpack');
//const StylelintPlugin = require('stylelint-webpack-plugin');
//const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

console.log('NODE_ENV:', process.env.NODE_ENV);

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.AutomaticPrefetchPlugin(),
  ],
};
