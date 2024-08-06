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
    filename: 'index.js',
    path: path.resolve(__dirname, '.webpack/x64/main'),
  },
};
