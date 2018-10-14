// gulpプラグイン読み込み
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

// browserify
gulp.task('build', function() {
  browserify({
    entries: ['main.js']
  })
  .bundle()
  .pipe(source('build.js'))
  .pipe(gulp.dest('.'));
})