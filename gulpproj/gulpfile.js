const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

const clean = require('gulp-dest-clean');


// compile SASS
gulp.task('sass', function(done){
  gulp.src('./styles/*.scss')

   .pipe(sass({errLogToConsole: true}))
   .pipe(gulp.dest('./styles/'))
   .pipe(browserSync.reload({stream: true}));
  
  done()
});


// Static Server + watching scss/html files
gulp.task('browser-sync', function(done) { 
  browserSync.init({
    server: {
      baseDir: './'
    },
    notify: false
  });
  
  browserSync.watch('./').on('change', browserSync.reload);
  
  done();
});


gulp.task('run', gulp.series('sass', 'browser-sync', function(done) {
  gulp.watch('./styles/*.scss', gulp.series('sass'));
  gulp.watch("./**/*.html").on('change', browserSync.reload); 
    gulp.watch('./js/**/*.js', browserSync.reload);
  done();
}));


// jsmin
// npm install --save-dev gulp-minify

gulp.task('compress', function(cb) {
  gulp.src(['js/**/*.js', 'js/**/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist/js'));
    cb();
});
 


// htmlmin
// npm install --save gulp-htmlmin

gulp.task('minify', (cb) => {
  return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
    cb();
});



// images webp + compression



// * critical CSS 
//  move files css html etc
// dist - clean dir
// npm i -D gulp-dest-clean

gulp.task('clean-dist', function (cb) {
return gulp.src('./', {read: false})
  .pipe(clean('dist/'));
  cb()
});

module.exports.build = gulp.series( 'clean-dist', 'compress', 'sass','minify');

