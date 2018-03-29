var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');

gulp.task('inlinesource', function () {
	var options = {
		compress: false
	};
	return gulp.src('./src/coin-fx.html')
		.pipe(inlinesource(options))
		.pipe(gulp.dest('./dist'));
});