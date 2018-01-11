const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    // Here will be the loaders
    rules: [
      {
        test: /\.css$/, // File Type
        // use: ['style-loader', 'css-loader'] // Loader(s)
        use: ExtractTextPlugin.extract({ // Loader + Extractor Plugin
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    // Here will be the imported plugins
    new ExtractTextPlugin('bundle.css')
  ]
}
