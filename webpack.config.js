const path = require('path');
const mode = process.env.ELECTRON_START_URL ? 'development' : 'production';

module.exports = [{
  mode: mode,
  entry: './src/App.scss',
  output: {
    filename: 'bundle.css',
    path: path.resolve(__dirname, 'src'),
  },
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
}, {
  mode: mode,
  target: './public/electron.js',
  entry: './src/index.js',
  resolve: {
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /\.(js|jsx|ts)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    }]
  }
}];