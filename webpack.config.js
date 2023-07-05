const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  resolve: {
    extensions: [".js", ".ts"],
  },
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
    environment: {
      arrowFunction: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/23.8-MSI-G2412.jpg", to: "./assets/23.8-MSI-G2412.jpg" },
        { from: "./src/assets/27-MSI-G27CQ4-E2.jpg", to: "./assets/27-MSI-G27CQ4-E2.jpg" },
        { from: "./src/assets/mouse.svg", to: "./assets/mouse.svg" },
        { from: "./src/assets/video-card.svg", to: "./assets/video-card.svg" },
        { from: "./src/assets/close.svg", to: "./assets/close.svg" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
  },
};
