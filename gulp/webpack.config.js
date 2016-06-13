/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var publicPath = '/app/js/';

module.exports = {
    entry: {
        index: ['./app/js/index.js']
    },
    debug: true,
    devtool: "source-map",
    output: {
        path: __dirname + publicPath,
        publicPath: publicPath,
        filename: '[name].js'
    },
    //plugins: [
    //    // extract inline css into separate 'styles.css'
    //    new ExtractTextPlugin('[name].css')
    //],
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
                //loader: ExtractTextPlugin.extract(
                //    // activate source maps via loader query
                //    'css?sourceMap!less?sourceMap'
                //)
            }
        ]
    },
    assets: {

        // display no info to console (only warnings and errors)
        noInfo: true,

        // display nothing to the console
        quiet: false,

        // switch into lazy mode
        // that means no watching, but recompilation on every request
        lazy: true,

        // watch options (only lazy: false)
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },

        // public path to bind the middleware to
        // use the same as in webpack
        publicPath: publicPath,

        // custom headers
        headers: { "X-Custom-Header": "yes" },

        stats: {
            colors: true
        }
    }
};