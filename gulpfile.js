var gulp = require('gulp');
var server = require('gulp-server-livereload');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');


gulp.task('webserver', function() {
	gulp.src('')
		.pipe(server({
            host: '10.52.30.105',
			port: '9000',
			livereload: true,
            open: true,
            defaultFile: 'index.html'
		}));
});

gulp.task("buildHtml", function() { 
	gulp.src(['index.html', 'invite.html'])
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

gulp.task('build', ['buildHtml', 'buildCss', 'buildJs', 'buildImages', 'buildAudio'], function(e) {
    console.log(e);
});