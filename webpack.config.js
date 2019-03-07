//Allows for use of index.html as a template
const HtmlWebPackPlugin = require("html-webpack-plugin");
//Allows for extraction of (s)css files for use in the final page
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");

//Setup of html plugin
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./views/index.html"
});

//Setup of css plugin
const miniCssPlugin = new MiniCssWebpackPlugin({
  filename: "style.css",
  chunkFilename: "[id].css"
});

module.exports = {
  entry: "./src/index.js",
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
  plugins: [htmlPlugin, miniCssPlugin]
};
