const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass')(require('sass')),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	rename = require("gulp-rename"),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	jsmin = require('gulp-minify'),
	fileinclude = require('gulp-file-include'),
	svgSprite = require('gulp-svg-sprite');


gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: "dist"
		}
	});
});

gulp.task('styles', function () {
	return gulp.src('src/sass/**/*.+(sass|scss)')
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
	return gulp.src(['src/*.html', 'src/pages/*.html'])
		.pipe(fileinclude())
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

gulp.task('img', () => {
	return gulp.src('src/sass/blocks/**/*.+(jpg|png|svg|gif)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('js', () => {
	return gulp.src('src/js/*.js')
		.pipe(jsmin({
			noSource: true
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());
});
gulp.task('fonts', () => {
	gulp.src('src/fonts/*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('svgsprite', () => {
	return gulp.src("src/sass/blocks/**/*.svg")
		.pipe(svgSprite({
			shape: {
				spacing: {
					padding: 0
				},
				transform: [{
					"svgo": {
						"plugins": [
							{ removeViewBox: false },
							{ removeUnusedNS: false },
							{ removeUselessStrokeAndFill: true },
							{ cleanupIDs: false },
							{ removeComments: true },
							{ removeEmptyAttrs: true },
							{ removeEmptyText: true },
							{ collapseGroups: true },
							{ removeAttrs: { attrs: '(fill|stroke|style)' } }
						]
					}
				}]
			},
			mode: {
				symbol: {
					sprite: 'sprite.svg',
					dest: 'svg'
				}
			}
		})).on('error', function (error) { console.log(error); })
		.pipe(gulp.dest("dist/images/"));
})

gulp.task('watch', function () {
	gulp.watch('src/sass/**/*.+(sass|scss)', gulp.parallel('styles'));
	gulp.watch('src/**/*.html', gulp.parallel('html'));
	gulp.watch('src/js/*.js', gulp.parallel('js'));
});

gulp.task('phpmailer', () => {
	return gulp.src('src/phpmailer/**/*')
		.pipe(gulp.dest('dist/phpmailer'));
});
gulp.task('sendmail', () => {
	return gulp.src('src/sendmail.php')
		.pipe(gulp.dest('dist'));
});

gulp.task('favicon', () => {
	return gulp.src('src/favicon/*')
		.pipe(gulp.dest('dist/favicon'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'img', 'js', 'fonts', 'svgsprite', 'phpmailer', 'sendmail', 'favicon'));