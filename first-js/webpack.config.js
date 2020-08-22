const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.join(__dirname, "./dist/"),
  },
  watch: true,
  resolve: { extensions: [".js", ".ts"] },
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./index.html",
      path: path.join(__dirname, "./dist/"),
      filename: "index.html",
    }),
  ],
};
