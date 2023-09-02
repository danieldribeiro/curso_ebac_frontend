const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const sourceMaps = require('gulp-sourcemaps')
const imageMin = require('gulp-imagemin')

function sassCompiler(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp-dest('./build/styles'))
}

function jsCompiler(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp-dest('./build/scripts'))
}

function imageCompressor(){
    return gulp('./src/images/*')
        .pipe(imageMin())
        .pipe(gulp-dest('./build/images'))
}

exports.default = function(){
    gulp.watch('./src/styles/*.scss', {igonoreInitial: false}, gulp.series(sassCompiler));
    gulp.watch('./src/scripts/*.js', {igonoreInitial: false}, gulp.series(jsCompiler));
    gulp.watch('./src/images/*', {igonoreInitial: false}, gulp.series(imageCompressor));
}