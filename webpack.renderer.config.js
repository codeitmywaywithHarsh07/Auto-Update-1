const path = require('path');
const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
  },
  entry: './src/renderer.js',
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, '.webpack/renderer'),
  },
};