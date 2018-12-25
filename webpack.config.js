const webpackNodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin"); // installed via npm
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ],
  },
  entry: "./src/index.ts",
  externals: [webpackNodeExternals({
    whitelist: [/\.json$/],
  })],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
  ],
  target: "node",
  watch: process.env.NODE_ENV === "development",
  resolve: {
    extensions: [".ts", ".js", ".graphql"],
  },
};
