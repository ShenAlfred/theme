var gulp = require('gulp');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var inject = require('gulp-inject');
var series = require('stream-series');
var concat = require('gulp-concat');


gulp.task('webserver', ['injectJs'], function() {
    gulp.src('')
        .pipe(webserver({
            host: '10.52.30.105',
            port: '9000',
            livereload: true,
            open: true,
            fallback: 'index.html'
        }));
});

var jquery_source = gulp.src(['./js/jquery.min.js'], {read: false});

var other_soucre = gulp.src(['./js/other_*.js'], {read: false});

var depend_jqeury = gulp.src(['./js/swiper.min.js'], {read: false});

var h5_soucre = gulp.src(['./js/h5.js'], {read: false});

gulp.task('injectJs', function() {
    gulp.src('./index.html')
        .pipe(inject(series(other_soucre, jquery_source, depend_jqeury, h5_soucre)))
        .pipe(gulp.dest('./js'));
});

gulp.task("buildHtml", function() { 
    gulp.src(['index.html'])
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task("buildCss", function() {
    gulp.src('css/**')
        .pipe(uglifyCss())
        .pipe(gulp.dest('dist/css'));
});
gulp.task("buildJs", function() {
    gulp.src('js/**')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task("buildImages", function() {
    gulp.src('images/**')
        .pipe(gulp.dest('dist/images'));
});
gulp.task("buildAudio", function() {
    gulp.src('audio/**')
        .pipe(gulp.dest('dist/audio'));
});
gulp.task("buildFont", function() {
    gulp.src('font/**')
        .pipe(gulp.dest('dist/font'));
});

gulp.task('build', ['buildHtml', 'buildCss', 'buildJs', 'buildImages', 'buildAudio', 'buildFont'], function(e) {
    console.log("build complate!");
});