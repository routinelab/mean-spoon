var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('js', function() {
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('asserts'));
});

gulp.task('watch:js', ['js'], function() {
    gulp.watch('ng/**/*.js', ['js']);
});