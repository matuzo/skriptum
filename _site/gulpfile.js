var gulp = require('gulp'),
	usemin = require('gulp-usemin'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	rename = require("gulp-rename");

gulp.task('usemin', function() {
	return gulp.src('_site/index.html')
	.pipe(usemin())
	.pipe(gulp.dest('_site'));
});