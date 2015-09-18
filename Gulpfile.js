var gulp        = require('gulp'),
	uglify      = require('gulp-uglify'), 
	browserify  = require('browserify'),
	streamify   = require('gulp-streamify'),
	sass 		= require('gulp-sass'),
	source      = require('vinyl-source-stream');

gulp.task('js', function () {
	browserify('./app.js')
		//.transform(hbsfy)
		//.ignore('')
		.bundle()
		.pipe(source('app.min.js'))
		//.pipe(streamify(uglify()))
		.pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
	gulp.src('./sass/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('.'));
});

gulp.task('default', [ 'js','sass']);
