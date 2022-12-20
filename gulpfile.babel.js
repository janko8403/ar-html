const gulp         = require('gulp');
const lodash       = require('lodash');
const babel        = require('gulp-babel');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const consolidate  = require('gulp-consolidate');
const rename       = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');
const browserify   = require('browserify');
const babelify     = require('babelify');
const cssnano      = require('gulp-cssnano');
const concat       = require('gulp-concat');
const fileinclude  = require('gulp-file-include');
const source       = require('vinyl-source-stream');
const buff         = require('vinyl-buffer');
const plumber      = require('gulp-plumber');
const iconfont     = require('gulp-iconfont');
const replace      = require('gulp-replace');
const clean        = require('gulp-clean');
const debug        = require('gulp-debug');
const uglify       = require('gulp-uglify');

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'public',
            index: './start.html'
        },
        open: false,
        notify: false,
        logLevel: 'debug'
    });

    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.*', ['js']);
    gulp.watch('src/img/**/*.*', ['img']);
    gulp.watch(['./src/html_pl/**/*.html'], ['html'])
    .on('change', browserSync.reload);
    gulp.watch(['./src/html_en/**/*.html'], ['html'])
    .on('change', browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src('./src/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', () => {
    const dst = 'public/js/';

    return browserify({
        entries: 'src/js/app.js',
        debug: true
    }).transform(babelify)
        .bundle()
        .pipe(plumber())
        .pipe(source('app.js'))
        .pipe(buff())
        .pipe(gulp.dest(dst))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('boots', () => {
    const dst = 'public/js/';

    return browserify({
        entries: 'src/js/bootstrap.min.js',
        debug: true
    }).transform(babelify)
        .bundle()
        .pipe(plumber())
        .pipe(source('bootstrap.min.js'))
        .pipe(buff())
        .pipe(gulp.dest(dst))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('slick', () => {
    const dst = 'public/js/';

    return browserify({
        entries: 'src/js/slick.min.js',
        debug: true
    }).transform(babelify)
        .bundle()
        .pipe(plumber())
        .pipe(source('slick.min.js'))
        .pipe(buff())
        .pipe(gulp.dest(dst))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('vendorsJS', () => {
    return gulp.src('src/js/vendors/**/*.js')
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('public/js/vendors/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sendForm', () => {
    return gulp.src('src/send/**/*')
        .pipe(gulp.dest('public/send/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', () => {
    gulp.src('./start.html', {
    }).pipe(gulp.dest('./public/'));

    gulp.src(['src/html_pl/*.html'], {
        base: 'src/html_pl/'
    })
    .pipe(fileinclude({
        prefix: '@@',
        basepath: './src/html_pl/partials/'
    }))
    .pipe(plumber())
    .pipe(gulp.dest('./public/'));
});

gulp.task('html_en', () => {
    gulp.src(['src/html_en/*.html'], {
        base: 'src/html_en/'
    })
    .pipe(fileinclude({
        prefix: '@@',
        basepath: './src/html_en/partials/'
    }))
    .pipe(plumber())
    .pipe(gulp.dest('./public/en'));
});

gulp.task('fonts', () => {
    return gulp.src(['src/fonts/**/*.+(woff|woff2|eot|ttf|svg|otf)'], {
        base: './src/'
    })
    .pipe(gulp.dest('./public'));
});

gulp.task('img', () => {
    return gulp.src(['src/img/**/*.+(png|jpg|gif|svg)'], {
        base: './src/'
    })
    .pipe(gulp.dest('./public'));
});

gulp.task('animations', () => {
    return gulp.src('src/animations/*')
        .pipe(gulp.dest('public/animations/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('clean:prod', () => {
    return gulp.src('public', { read: false })
        .pipe(clean());
});


gulp.task('build:base', ['sass', 'js', 'boots', 'img', 'vendorsJS', 'sendForm', 'html', 'html_en', 'fonts', 'animations']);
gulp.task('build', ['build:base', 'browser-sync']);

gulp.task('default', ['build']);