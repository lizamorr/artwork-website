const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  entry: {
    app: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          { loader: "style-loader", options: { sourceMap: true } },
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "resolve-url-loader",
            options: { rsourceMap: true },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
        include: [path.resolve(__dirname, "../"), /node_modules/],
      },
      {
        test: /\.(png|jpeg|jpg|gif|jp2|webp|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img",
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Liza Morrison Art",
      template: "./src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
