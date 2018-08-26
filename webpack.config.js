const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  devServer: {
    contentBase: './dist'
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: '梦幻西游-慈心渡鬼-善恶棋',
      template: './src/index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};