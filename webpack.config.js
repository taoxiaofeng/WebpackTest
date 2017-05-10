let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        index: './public/javascript/entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: './build/'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader?limit=8192&name=../[path][name].[ext]' },
            { test: /\.js[x]?$/, loader: 'babel' }
        ]
    },
    plugins: [
        //查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].css', { allChunks: true })
    ]
}
