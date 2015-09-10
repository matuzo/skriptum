var gulp = require('gulp'),
	usemin = require('gulp-usemin'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css');

gulp.task('usemin', function() {
	return gulp.src('dev/index.html')
	.pipe(usemin())
	.pipe(gulp.dest(''));
});