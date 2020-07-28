const gulp = require('gulp'); // Подключаем gulp
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');

gulp.task('scss', function(callback) {
    return gulp.src('./src/sass/main.sass')
        .pipe(sass())
        .pipe( gulp.dest('./app/css/') )
    callback();
});

// Слежение за изменением в файлах
gulp.task('watch', function() {
    watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel( browserSync.reload ))
});

// Задача для старта сервера
gulp.task('server', function() {
   browserSync.init({
       server: {
           baseDir: "./app/"
       }
   })
});

gulp.task('default', gulp.parallel('server', 'watch'));