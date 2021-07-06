const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          "sass-loader",
        ],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.(png|jpeg|jpg|gif|jp2|webp)$/,
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Liza Morrison Art",
      template: "./src/index.html",
      favicon: "./src/favicon.ico",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
