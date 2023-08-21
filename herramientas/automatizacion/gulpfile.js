const gulp = require('gulp');
const server = require('gulp-server-livereload');

// crear una tarea
gulp.task('build', function (callback) {
  console.log('Constructing the project');
  setTimeout(callback, 1200);
});

gulp.task('serve', (callback) => {
  gulp.src('www').pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

// tareas en serie
gulp.task('default', gulp.series('build', 'serve'));