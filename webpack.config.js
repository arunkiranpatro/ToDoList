const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js" },
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: "json-loader"
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000
  },
  devtool:'source-map'
};
