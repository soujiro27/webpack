const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'js', 'index.js'),
    test: path.join(__dirname, 'src', 'js', 'test.js')
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: path.join('js', '[name].bundle.js')
  },
  devServer: {
    // contentBase: path.join('dist'),
    port: 8080
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
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    // Here will be the imported plugins
    new ExtractTextPlugin(path.join('css', '[name].bundle.css'))
  ]
}
