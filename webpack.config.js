const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.js',
    publicPath: 'js/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3) creates style nodes from JS strings
          "css-loader", // 2) translates CSS into CommonJS
          "sass-loader" // 1) compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};
