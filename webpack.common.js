const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "/src/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/images/[name][ext]",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles/[name].[contenthash].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
