/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

import gulp from 'gulp';
import Hapi from 'hapi';
import Inert from 'inert';
import WebpackPlugin from 'hapi-webpack-plugin';
import ip from 'ip';

/**
 * 获取请求文件信息
 * @param requestPath
 * @returns {{directoryPath: string, filePath: string, fileType: string, fileName: string}}
 */
function getFileInfo(requestPath) {
    var filePath = '.' + requestPath;
    var lastIndex = filePath.lastIndexOf('.');
    var directoryPath = filePath.substring(0, lastIndex);
    var fileType = filePath.substring(lastIndex + 1);
    var fileName = filePath.substring(filePath.lastIndexOf('/') + 1, lastIndex);
    return {
        directoryPath: directoryPath,
        filePath: filePath,
        fileType: fileType,
        fileName: fileName
    };
}

gulp.task('server:start', function() {

    const server = new Hapi.Server();

    server.connection({
        host: '0.0.0.0',
        port: 9990
    });

    server.register(Inert, function () {});

    /**
     * Register plugin and start server
     */
    server.register({
        register: WebpackPlugin,
        options: './webpack.config.js'
    }, function (error) {

        if (error) {
            return console.error(error);
        }

        server.start(function () {
            console.log(`Server started at ${server.info.protocol}:\/\/${ip.address()}:${server.info.port}`);
        });

    });

    // 静态资源
    server.route({
        method: 'GET',
        path: '/{params*}',
        handler: function(request, reply) {

            console.log('path=======' + request.path);

            var fileInfo = getFileInfo(request.path);

            switch (fileInfo.fileType) {

                case 'html':
                    reply.file(fileInfo.filePath);
                    break;

                default:
                    reply.file(fileInfo.filePath);

            }

        }
    });

});