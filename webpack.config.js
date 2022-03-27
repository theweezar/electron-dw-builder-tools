// const path = require('path');
const mode = process.env.ELECTRON_START_URL ? 'development' : 'production';

module.exports = [{
  mode: mode,
  entry: './src/App.scss',
  // output: {
  //   filename: 'bundle.css',
  //   path: path.resolve(__dirname, 'src'),
  // },
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [{
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
}];