const path = require('path')
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}