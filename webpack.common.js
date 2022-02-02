const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "node",
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
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "resolve-url-loader",
            options: { rsourceMap: true },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
          // { loader: "style-loader", options: { sourceMap: true } },
        ],
        include: [path.resolve(__dirname, "../"), /node_modules/],
      },
      {
        test: /\.(png|jpeg|jpg|gif|jp2|webp|ico|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img",
          esModule: false,
        },
      },
      {
        test: /\.config$/,
        loader: "file-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new Dotenv({ path: path.resolve(__dirname, ".env") }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Liza Morrison Art",
      template: "./src/index.html",
      favicon: "./src/favicon.ico",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
};
