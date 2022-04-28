const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass')(require('sass')),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	rename = require("gulp-rename"),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	jsmin = require('gulp-minify');


gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: "dist"
		}
	});
});

gulp.task('styles', function () {
	return gulp.src('src/sass/*.+(sass|scss)')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(rename({
			prefix: "",
			suffix: ".min",
		}))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('html', () => {
	return gulp.src('src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

gulp.task('img', () => {
	gulp.src('src/sass/blocks/**/*.+(jpg|png|svg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('js', () => {
	gulp.src('src/js/*.js')
		.pipe(jsmin({
			noSource: true
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function () {
	gulp.watch('src/sass/**/*.+(sass|scss)', gulp.parallel('styles'));
	gulp.watch('src/*.html', gulp.parallel('html'));
	gulp.watch('src/sass/**/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'img', 'js'));