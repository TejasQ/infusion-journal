const webpack = require("webpack");
const { join } = require("path");

module.exports = {
  output: {
    path: join(__dirname, "public"),
  },
  plugins: [new webpack.EnvironmentPlugin(["SCHEMA_URL"])],
};
