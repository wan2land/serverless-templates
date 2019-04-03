const path = require("path")
const slsw = require("serverless-webpack")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  externals: [
    nodeExternals(),
  ],
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  target: "node",
  module: {
    rules: [
      { enforce: "pre", test: /\.tsx?$/, loader: "eslint-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
}
