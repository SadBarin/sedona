const gulp     = require('gulp'),
  htmlmin      = require('gulp-htmlmin'),
  cleanCSS     = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin     = require('gulp-imagemin'),
  uglify       = require('gulp-uglify'),
  browserSync  = require('browser-sync').create();

gulp.task('minifyHTML', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
});

gulp.task('minifyCSS', () => {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({level: 2}))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('build/css'))
});

gulp.task('minifyImage', () => {
  return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
});

gulp.task('minifyScript', () => {
  return gulp.src('script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/script'))
});

gulp.task('startServer', () => {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
  browserSync.watch("./src", browserSync.reload);
});

gulp.task('default', gulp.parallel('minifyHTML', 'minifyCSS', 'minifyImage', 'minifyScript'));