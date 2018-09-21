var path = require('path');

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  entry: './src/index.ts',
  output: {
    library: 'react-i18next-phraseapp',
    libraryTarget: 'umd',
    filename: 'react-i18next-phraseapp.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: ["react", "prop-types", "react-i18next"]
};
