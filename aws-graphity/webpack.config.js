const path = require("path")
const slsw = require("serverless-webpack")

module.exports = {
  mode: slsw.lib.options.stage === "dev" ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: "source-map",
  resolve: {
    mainFields: ["main", "module"],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
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
