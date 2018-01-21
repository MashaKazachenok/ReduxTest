var path = require('path')
var webpack = require('webpack')
module.exports = {
devtool: 'cheap-module-eval-source-map',
entry: [
'webpack-hot-middleware/client',
'./src/index'
],
output: {
path: path.join(__dirname, 'dist'),
filename: 'bundle.js',
publicPath: '/static/'
},
plugins: [

new webpack.HotModuleReplacementPlugin(),

],
module: {
loaders: [
{
loaders: ['babel-loader'],
include: [
path.resolve(__dirname, "src"),
],
test: /\.js$/,
//plugins: ['transform-runtime'],
}
]
}
}