var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress')

gulp.task('minify-css', function(done) {
    gulp.src('./13-layout_adaptive/Main-quest13/src/css/*.css')
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('13-layout_adaptive/Main-quest13/dist/css'))
    done();
});

gulp.task('move-js', function(done) {
    gulp.src('./13-layout_adaptive/Main-quest13/src/js/*.js')
    .pipe(gulp.dest('13-layout_adaptive/Main-quest13/dist/js'))
    done();
});

gulp.task('htmlmin', function(done) {
    gulp.src('./13-layout_adaptive/Main-quest13/src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('13-layout_adaptive/Main-quest13/dist'))
    done();
});

gulp.task('move-fonts', function(done) {
    gulp.src('./13-layout_adaptive/Main-quest13/src/fonts/**/*')
    .pipe(gulp.dest('13-layout_adaptive/Main-quest13/dist/fonts'))
    done();
});

gulp.task('tinypng', function(done) {
    gulp.src('./13-layout_adaptive/Main-quest13/src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: 'R9HSrigTMystr9rPGtGf6jq4HwQRxT0T',
        }))
    .pipe(gulp.dest('13-layout_adaptive/Main-quest13/dist/img'))
    done();
});


gulp.task('default', gulp.parallel('minify-css', 'move-js', 'htmlmin', 'move-fonts', 'tinypng', function(done) {
    done();
}));