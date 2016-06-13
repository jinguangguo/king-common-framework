/**
 * @file
 * @author jinguangguo
 * @date 2016/5/27
 */

var path = require('path');

var publicPath = '/app/build/';

export default {
    output: {
        path: path.resolve(__dirname, publicPath),
        publicPath: publicPath,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /(\.css|\.less)$/,
                loader: 'style?sourceMap!css?sourceMap!less?sourceMap!autoprefixer?{browsers:["last 2 versions", "Firefox >= 20", "last 3 Safari versions", "last 2 Explorer versions"]}'
            }
        ]
    },
    plugins: [

    ]
}