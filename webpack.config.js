const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      main: path.resolve(__dirname, './src/main.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './src'),
    disableHostCheck: true,
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
