const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: "css-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}