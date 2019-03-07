//Allows for use of index.html as a template
const HtmlWebPackPlugin = require("html-webpack-plugin");
//Allows for extraction of (s)css files for use in the final page
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");
//Allows for consistent hashing files on output
const WebpackMd5Hash = require("webpack-md5-hash");
//Allows for path references
const path = require("path");

//Setup of html plugin
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./views/index.html"
});

//Setup of css plugin
const miniCssPlugin = new MiniCssWebpackPlugin({
  filename: "./css/style.[contenthash].css"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./js/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        //JS & JSX
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        //Sass & css
        test: /\.(css|scss)$/,
        //Applied from last to first
        use: [
          "style-loader",
          MiniCssWebpackPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [htmlPlugin, miniCssPlugin, new WebpackMd5Hash()]
};
