var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['server']);

gulp.task('server', function (cb) {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
})
