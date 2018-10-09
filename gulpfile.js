var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//task
gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch("*.html").on("change", reload);
	gulp.watch("./css/*").on("change", reload);
});


gulp.task('sass', function (){
	gulp.src('./scss/*style.scss')
		.pipe(sass({
			outputStyle: 'compact'
		})) 
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
})


gulp.task('default', ['sass', 'browser-sync'], function(){
    gulp.watch("scss/*.scss", ['sass']);
});