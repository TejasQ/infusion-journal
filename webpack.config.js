const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.EnvironmentPlugin(["SCHEMA_URL"])],
};
