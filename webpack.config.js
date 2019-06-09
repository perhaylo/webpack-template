const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [
          'style-loader', // 3) creates style nodes from JS strings
          'css-loader', // 2) translates CSS into CommonJS
          'sass-loader' // 1) compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};
