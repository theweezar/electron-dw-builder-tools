const path = require('path');

module.exports = {
  mode: process.env.ELECTRON_START_URL ? 'development' : 'production',
  entry: './src/App.scss',
  output: {
    filename: 'bundle.css',
    path: path.resolve(__dirname, 'src'),
  },
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [
        {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        }
      ]
    }],
  },
};
