const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        //Order is from last to first
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    watchFiles: ["src/*.html"],
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restraunt",
      template: "./src/template.html",
    }),
  ],
};
