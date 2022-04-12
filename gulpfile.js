const gulp = require('gulp');
const { src, dest, series, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

//Copy all HTML files
function copyHtml(){
    return src('src/*.html')
        .pipe(dest('produc'));
}

//Minify JS
function minifyJS(){
    return src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(dest('produc/js'));
}


//Compile SASS
function css(){
    return src('src/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('stylesheet.css'))
        .pipe(dest('produc/css'));
}

exports.copyHtml;
exports.minifyJS;
exports.css;

exports.default = series(
    parallel(copyHtml, minifyJS, css)
);