const path = require("path");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.base");

module.exports = {
  target: "node",
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader', 
          }
        ]
      }
    ],
    
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }

}


