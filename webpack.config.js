module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components'
    ],
    alias: {
      'Main': 'app/components/Main.js'
    },
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.css$/,
        loaders: ["style", "css"]
      }, {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};
