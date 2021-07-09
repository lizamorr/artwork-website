const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: false,
  devServer: {
    contentBase: "./build",
    port: 8080,
  },
});
