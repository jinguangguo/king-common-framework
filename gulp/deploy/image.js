/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/22
 */

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

gulp.task('image', ['clean'], function () {
    return gulp
        .src('./app/image/*')
        .pipe(imagemin(

        ))
        .pipe(gulp.dest('./output/image'));
});

gulp.task('image.jpeg.lianxu', ['clean'], function () {
    return gulp
        .src('**/app/image/jpeg/lianxu/*.jpg')
        .pipe(imagemin({
            // progressive: true
        }))
        .pipe(gulp.dest('./output'));
});

gulp.task('image.png.lianxu', ['clean'], function () {
    return gulp
        .src('**/app/image/png/lianxu/*.png')
        .pipe(imagemin({

        }))
        .pipe(gulp.dest('./output'));
});

gulp.task('image.png.bit8', ['clean'], function () {
    return gulp
        .src('**/app/image/png/bit8/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./output'));
});

gulp.task('image.gif', ['clean'], function () {
    return gulp
        .src('**/app/image/gif/*')
        .pipe(imagemin({}))
        .pipe(gulp.dest('./output/'));
});

gulp.task('image.png.pngquant', ['clean'], function () {
    return gulp
        .src('**/app/image/png/lianxu/*.png')
        .pipe(imagemin({
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('./output/pngquant'));
});
