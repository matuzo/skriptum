var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('mincss', function() {
  return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css', 'bower_components/bootstrap/dist/css/bootstrap-theme.css','assets/style.css'])
    .pipe(concat('style.min.css'))
    .pipe(minifyCss({'keepSpecialComments': 0}))
    .pipe(gulp.dest('assets'));
});

gulp.task('minjs', function() {
  //return gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'assets/script.js'])
  return gulp.src(['bower_components/bootstrap/js/affix.js','assets/script.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets'));
});

gulp.task('ship', ['mincss', 'minjs']);

gulp.task('watch', function() {
    // if a less file changes, run the less task
    gulp.watch('assets/style.css', ['mincss']);
    gulp.watch('assets/script.js', ['minjs']);
});