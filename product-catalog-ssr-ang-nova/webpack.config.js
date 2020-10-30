const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const ngw = require('@ngtools/webpack');

const browser = (env, argv) => ({
  devtool: 'inline-source-map',
  target: 'web',
  entry: argv.mode === 'production' ? './src/browser.aot.main.ts' : './src/browser.main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'browser.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader'] 
      }
    ]
  },
  plugins: [
    new ngw.AngularCompilerPlugin({
      tsConfigPath: path.join(__dirname, argv.mode === 'production' ? 'tsconfig.aot.json': 'tsconfig.json'),
      entryModule: path.join(__dirname, 'src', 'app.module#AppModule'),
      skipCodeGeneration: argv.mode !== 'production',
    }),
  ]
});

const server = {
  devtool: 'inline-source-map',
  target: 'node',
  entry: './src/server.main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  optimization: {
    // keep minimization off
    // workaround for https://github.com/angular/angular-cli/issues/10635
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: [
          'ts-loader',
          'angular2-template-loader'
        ]
      },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader'] 
      }
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
};

module.exports = [browser, server];
