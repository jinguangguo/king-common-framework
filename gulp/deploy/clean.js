/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/25
 */

import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean', function () {
    return gulp
        .src('./output/')
        .pipe(clean({
            read: false
        }));
});