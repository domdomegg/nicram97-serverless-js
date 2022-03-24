/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const slsw = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: slsw.lib.webpack.isLocal ? "source-map" : false,
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.build.json' })],
    extensions: ['.js', '.json', '.ts'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [{ test: /\.ts?$/, loader: 'ts-loader' }],
  },
};