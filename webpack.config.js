var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');
var mainPath = path.resolve(__dirname, 'src', 'index');
var srcPath = path.resolve(__dirname, 'src');
var fontPath = path.resolve(__dirname, 'src', 'assets', 'fonts');

module.exports = {
  devtool: 'eval-cheap-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    mainPath
  ],
  output: {
    path: buildPath,
    publicPath: '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        exclude: [nodeModulesPath], 
        test: /\.js?$/, 
        loader: 'babel' 
      },{ 
        test: /\.jsx?$/, 
        loaders: ['react-hot', 'babel'], 
        include: srcPath
      },{
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },{
        test: /\.woff$/,
        loader: 'url',
        include: fontPath
      },{
        test: /\.ttf$|\.eot$/,
        loader: 'file',
        include: fontPath
      }
    ],
    query: { presets: ['es2015', 'react', 'stage-2'] }
  },
  postcss: function() {
    return [ autoprefixer({ browsers: ['last 2 versions'] }) ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(dashboard.setData)
  ]
};
