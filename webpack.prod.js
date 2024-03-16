const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
});
