const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('src/**/*.scss', { base: 'src' })
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(dest('dist'))
}

function watchTask() {
  watch(['src/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)