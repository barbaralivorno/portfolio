const TerserPlugin = require("terser-webpack-plugin");
const merge = require("webpack-merge").default;
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});