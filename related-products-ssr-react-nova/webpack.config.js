const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const server = {
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader'] 
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new NodemonPlugin(),
  ],
};

const client = {
  target: 'web',
  node: {
    fs: 'empty',
    module: 'empty',
  },
  entry: path.join(__dirname, 'src/client.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        include: [/node_modules/, /src/],
        use: [
          {
            loader: require.resolve("style-loader", { paths: [__dirname] }),
          },
          {
            loader: require.resolve("css-loader", { paths: [__dirname] }),
            options: {
              modules: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = [server, client];
