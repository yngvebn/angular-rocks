var gulp			= require('gulp'),
	concat			= require('gulp-concat'),
	minifyCss 		= require('gulp-minify-css'),
	sass			= require('gulp-sass'),
	templateCache 	= require('gulp-angular-templatecache'),
	minifyHtml 		= require('gulp-minify-html'),
	gulpif 			= require('gulp-if'),
	es				= require('event-stream'),
	ts 				= require('gulp-typescript');

var paths = {
	appJavascript: ['**/*.ts', '!node_modules/**/*.*'],
	appScss: ['**/*.scss', '!node_modules/**/*.*']
}

var tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', function () {
   var tsResult = tsProject.src(paths.appJavascript) 
        .pipe(ts(tsProject));
    
    return tsResult.js.pipe(gulp.dest(''));        
});

gulp.task('sass', function () {
  gulp.src(paths.appScss)
    .pipe(sass().on('error', sass.logError))
 	.pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(function(file) {
    		return file.base;
		}));
});


gulp.task('default', ['ts', 'sass']);

gulp.task('watch', ['ts', 'sass'],function(){
	gulp.watch(paths.appJavascript, ['ts']);
	gulp.watch(paths.appScss, ['sass']);
});