const path = require('path');
const isDev = require('electron-is-dev');

module.exports = {
  mode: isDev ? 'development' : 'production',
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
