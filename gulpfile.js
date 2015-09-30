var gulp = require('gulp');
var uglifyJS = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

var jsWatcher = gulp.watch('src/js/*.js', ['compressJS']);
var scssWatcher = gulp.watch('src/scss/*.scss', ['compileSass']);

gulp.task('default', function(){
	console.log("default executed");
});

gulp.task('compressJS', function(){
	return gulp.src('src/js/*.js')
		.pipe(uglifyJS())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('compileSass', function(){
	return gulp.src('src/scss/*.scss')
	.pipe(sass.on('error', sass.logError))
	.pipe(concat('all.min.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist/css'));
});

