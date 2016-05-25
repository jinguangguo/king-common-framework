/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

var publicPath = '/output/src/';


module.exports = {
    entry: {
        index: './app/js/index.js'
    },
    debug: true,
    devtool: "source-map",
    output: {
        path: __dirname + publicPath,
        publicPath: publicPath,
        filename: '[name].js'
    },
    plugins: [],
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
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
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