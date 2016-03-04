/// <binding AfterBuild='default' />
var gulp = require('gulp'),
    rimraf = require('rimraf'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minHtml = require('gulp-minify-html'),
    minCss = require('gulp-clean-css'),
    minJs = require('gulp-uglify'),
    typescript = require('gulp-typescript');


var paths = require('./paths');


//#region Clean
gulp.task('clean:app', function (cb) {
  rimraf(paths.destFolder + '/app', cb)
})
gulp.task('clean:css', function (cb) {
  rimraf(paths.destFolder + '/css', cb)
})
gulp.task('clean:js', function (cb) {
  rimraf(paths.destFolder + '/js', cb)
})
gulp.task('clean', ['clean:app', 'clean:css', 'clean:js'], function (cb) {
  //
});
//#endregion


gulp.task('watch', ['default'], function () {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('src/app/*.ts', ['ts']);
});

gulp.task('default', ['html', 'css', 'sass', 'js', 'ts', 'fonts'], function () {
  //
});

gulp.task('ts', function () {
  var tsProject = typescript.createProject('tsconfig.json');
  var tsResult = tsProject.src()
                 .pipe(typescript(tsProject));

  return tsResult
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.destFolder + '/app'));
});

gulp.task('html', function () {
  return gulp.src(paths.html)
         .pipe(minHtml())
         .pipe(gulp.dest(paths.destFolder));
});

gulp.task('css', function () {
  return gulp.src(paths.css)
         .pipe(concat('lib.css'))
         .pipe(minCss())
         .pipe(gulp.dest(paths.destFolder + "/css"));
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
         .pipe(sass.sync({ outputStyle: 'compressed' })
                   .on('error', sass.logError))
         .pipe(gulp.dest(paths.destFolder + "/css"));
});

gulp.task('js', function () {
  return gulp.src(paths.js)
         .pipe(gulp.dest(paths.destFolder + "/js"));
});

gulp.task('fonts', function () {
  return gulp.src(paths.fonts)
         .pipe(gulp.dest(paths.destFolder + "/fonts"));
});
