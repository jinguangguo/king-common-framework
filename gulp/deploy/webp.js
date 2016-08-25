/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/25
 */

import gulp from 'gulp';
import webp from 'gulp-webp';

gulp.task('webp.jpg', ['clean'], function () {
    return gulp.src('**/app/image/jpeg/lianxu/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest('output/webp'));
});

gulp.task('webp.png', ['clean'], function () {
    return gulp.src('**/app/image/png/lianxu/*.png')
        .pipe(webp())
        .pipe(gulp.dest('output/webp/png'));
});
