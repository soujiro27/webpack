const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'js', 'index.js'),
    test: path.join(__dirname, 'src', 'js', 'test.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
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
    new ExtractTextPlugin('[name].bundle.css')
  ]
}
