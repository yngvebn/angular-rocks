var  gulp			  = require('gulp'),
	   minifyCss 	= require('gulp-minify-css'),
	   sass			  = require('gulp-sass'),
	   server 		= require('gulp-server-livereload')
     es         = require('event-stream'),
     tap        = require('gulp-tap'),
     modify     = require('gulp-modify'),
     fs         = require('fs'),
     path       = require('path'),
	   ts 				= require('gulp-typescript');

var paths = {
	web: '/',
	appJavascript: ['**/*.ts', '!node_modules/**/*.*'],
	appScss: ['**/*.scss', '!node_modules/**/*.*']
}

var tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', function () {
   var tsResult = tsProject.src(paths.appJavascript) 
        .pipe(ts(tsProject));
    
    return tsResult.js
      .pipe(modify({
        fileModifier: unrelativify
      }))
      .pipe(gulp.dest(''));        
});

function unrelativify(file, contents){

    var templateUrlRegex = /(?:.*?Url(?:s*)):\s*(?:\[{0,1})((?:['"].*?['"](?:,?\s?))*)(?:[\],]{0,1})/g;
    match = new RegExp(templateUrlRegex);
    var js = contents.toString();
    js = js.replace(templateUrlRegex, function(a, b){
      if(!b){
        return a;
      }
      return a.replace(b, fixPaths(b, path.dirname(file.relative)))      
    });

  return js;
  
}

function fixPaths(paths, root){
    
    var split = paths.split(',');
      var arr = [];
      for (var i = split.length - 1; i >= 0; i--) {
        var segment = split[i].trim();
        var clean = segment.replace(/[\'\"]/g, '');
        if(clean[0] === '/' || clean[0] === '\\'){
          arr.push('\''+clean+'\'');
        } else if(segment.indexOf('\'') > -1){
          var p = path.join(root, segment.replace(/[\'\"]/g, '').trim()).replace(/\\/g, '\/');
          if(fs.existsSync(p)){
            arr.push('\''+p+'\'');
          }
          else{
            arr.push('\''+clean+'\'');
          }
          
          
        }
      };
      var preceding = '';   
      if(paths.trim()[paths.trim().length-1] === ','){
        preceding = ',';
      }
      return arr.join(',')+preceding;
    
  }

gulp.task('sass', function () {
  gulp.src(paths.appScss)
    .pipe(sass().on('error', sass.logError))
 	  .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(function(file) {
    		return file.base;
		}));
});

gulp.task('default', ['ts', 'sass']);

gulp.task('watch', ['ts', 'sass', 'webserver'],function(){
	gulp.watch(paths.appJavascript, ['ts']);
	gulp.watch(paths.appScss, ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: {
      	enable: true,
      	filter: function(filePath, cb) {
          cb( !(/node_modules/.test(filePath)) &&  
          	  !(/.*ts$/.test(filePath)) && 
          	  !(/gulpfile.js$/.test(filePath)) );
        }
      },
      defaultFile: 'index.html',
      open: true      
    }));
});