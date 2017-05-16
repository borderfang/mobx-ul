
module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: './public/bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: /src/
    }]
  }
};
