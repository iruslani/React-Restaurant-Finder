const webpack = require('webpack')

module.exports = {
  // Added source map functionality for easier debugging with Chrome Dev Tools.
  devtool: "#eval-source-map",
  entry: "./src/index.js",
  output: {
      path: __dirname + "/public/js",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.css'],
      modulesDirectories: [
        'node_modules'
      ]
    }
  }
};
