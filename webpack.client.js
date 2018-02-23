const path = require("path");

module.exports = {
  entry: "./src/client/client.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
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

