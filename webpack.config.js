var path = require('path');

module.exports = {
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  entry: './src/index.js',
  output: {
    library: 'react-i18next-phraseapp',
    libraryTarget: 'umd',
    filename: 'react-i18next-phraseapp.js',
    path: path.resolve(__dirname, 'dist')
  }
};
