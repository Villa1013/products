
/*------------------------------------*\
    $DEPENDECIAS
\*------------------------------------*/

var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    watch        = require('gulp-watch'),
    notify       = require("gulp-notify"),
    sass         = require('gulp-sass'),
    path         = require('path'),
    autoprefixer = require('autoprefixer'),
    postcss      = require('gulp-postcss');









 
/*------------------------------------*\ 
    $RUTAS 
\*------------------------------------*/ 

var app = {
    sass   : ['src/app/components/**/*.sass','src/app/components/**/**/*.sass'],
    base   : 'style.sass',
    error  : 'images/error5.jpg'
}

var dist = {
    css  : 'src/assets/css/'
}








/*------------------------------------*\
    $LINEA ERROR
\*------------------------------------*/
var displayError = function(error) {

  var errorString = '[' + error.plugin + ']';
  if(error.fileName)
      errorString += ' in ' + error.fileName;
  if(error.lineNumber)
     errorString += ' on line ' + error.lineNumber;
  console.error(errorString);
};














/*----------------------------------------------------------------------------------------*\
    $TAREAS
\*----------------------------------------------------------------------------------------*/


/*------------------------------------*\
    $SASS
\*------------------------------------*/

gulp.task('sass', function () {
  gulp.src(app.base)
    .pipe(sass({
      indentedSyntax: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .on('error', function(err){displayError(err); }) 
    .on('error', notify.onError({
      icon: path.join(__dirname, app.error),
      title: 'Oops error in CSS!',
      message: 'Error css: <%= error.message %>'
    }))
    .pipe(postcss([ autoprefixer({ browsers: ["> 0%"] }) ]))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest(dist.css))
    .pipe(notify("Compilo archivo: <%= file.relative %>"));
});










/*---------------------------------------------------------------------------*\
    $AUTO COMPILAR
\*---------------------------------------------------------------------------*/


/*------------------------------------*\
    $wATCH & SERVER
\*------------------------------------*/
gulp.task('watch', function() {
    gulp.watch(app.sass, ['sass']);
});


/*------------------------------------*\
    $POR DEFECTO
\*------------------------------------*/

gulp.task('default',['sass', 'watch']);


