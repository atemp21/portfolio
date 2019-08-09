
module.exports = {
  mode: 'development',
  entry: ['./app.scss', './index.js', './work.js'],
  output: {
    filename: 'style-bundle.js',
    path: __dirname,
    publicPath: "/"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader",
          options: {
            includePaths: ["./node_modules"]
          }
        }
      ]
    }]
  }
};
