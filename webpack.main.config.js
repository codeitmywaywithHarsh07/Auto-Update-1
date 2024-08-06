const path = require('path');
const rules = require('./webpack.rules');

module.exports = {
  entry: './src/main.js',
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '.webpack/main'),
  },
};
