/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from "webpack-dev-server";
import webpackConfigDev from './webpack/webpack.config.dev';

webpackConfigDev.plugins.push(new webpack.HotModuleReplacementPlugin());

gulp.task('server:hot', function() {

    const PORT = '9091';

    //let server = new WebpackDevServer();
    const clientString1 = 'webpack-dev-server/client?http://0.0.0.0:' + PORT;
    const clientString2 = 'webpack/hot/dev-server';

    //webpackConfigDev.entry['index'].unshift(clientString1, clientString2);

    for (let key in webpackConfigDev.entry) {
        console.log('key: key', 'The value is:' + webpackConfigDev.entry[key]);
        webpackConfigDev.entry[key].unshift(clientString1, clientString2);
        console.log(webpackConfigDev.entry[key]);
    }

    //config.entry.main.unshift('webpack-dev-server/client?http://0.0.0.0:' + PORT, 'webpack/hot/dev-server');
    //config.entry.setup.unshift('webpack-dev-server/client?http://0.0.0.0:' + PORT, 'webpack/hot/dev-server');

    console.log('webpackConfigDev: ' + JSON.stringify(webpackConfigDev));

    let compiler = webpack(webpackConfigDev);

    //启动服务
    var app = new WebpackDevServer(compiler, {
        publicPath: webpackConfigDev.output.publicPath,
        hot: true,
        quiet: true,
        historyApiFallback: true
        //"*": "http://localhost:" + PORT,
        //stats: { colors: true }
    });
    //
    app.listen(PORT, '0.0.0.0');

});
