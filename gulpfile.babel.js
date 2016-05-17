import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import jade from 'gulp-jade';
import rename from 'gulp-rename';
import zip from 'gulp-zip';
import webpack from 'webpack';
import prodConfig from './conf/prod';

/*
 * build tasks
 */

gulp.task('webpack:build:extension', callback => {

    function webpackProcess(config, next) {

        webpack(config, (err, stats) => {

            if (err) throw new gutil.PluginError('webpack:build', err);

            gutil.log('[webpack:build]', stats.toString({ colors: true }));

            next();
        });
    }

    webpackProcess(prodConfig, callback);
});

gulp.task('views:build:extension', () => {
    gulp.src([
        './src/extension/views/*.jade'
    ])
    .pipe(jade({
        locals: { env: 'prod' }
    }))
    .pipe(gulp.dest('./build/extension'));
});

gulp.task('copy:build:extension', () => {

    gulp.src('./src/extension/chrome/manifest.json')
        .pipe(rename('manifest.json'))
        .pipe(gulp.dest('./build/extension'));

    gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./build/extension'));
});

/*
 * compress task
 */

gulp.task('compress:extension', () => {
    gulp.src('build/extension/**')
    .pipe(zip('extension.zip'))
    .pipe(gulp.dest('./build'));
});


gulp.task('build:extension', ['webpack:build:extension', 'views:build:extension', 'copy:build:extension']);