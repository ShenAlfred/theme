var gulp = require('gulp');
var server = require('gulp-server-livereload');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            host: '10.52.30.105',
            port: '9000',
            livereload: true,
            open: true,
            fallback: 'index.html'
        }));
});
// gulp.task('webserver', function() {
// 	gulp.src('')
// 		.pipe(server({
//             host: '10.52.30.105',
// 			port: '9000',
// 			livereload: true,
//             open: true,
//             defaultFile: 'index.html'
// 		}));
// });

gulp.task("buildHtml", function() { 
	gulp.src(['index.html'])
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
    console.log(e);
});