// node_modules klasörü içerisinden gulp kütüphanesini çağırıyoruz
const { src, dest, watch, series } = require('gulp');


// gulp-sass kütüphanesini çağırıyoruz
const sass = require('gulp-sass')(require('sass'));


// hangi dosyanın, hangi dosya ile değiştirileceğini belirtiyoruz
function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'));
}

// index.scss dosyasında değişiklik olduğunda buildStyles fonksiyonunu çalıştır

function watchTask() {
    watch(['sass/**/*.scss'], buildStyles);
}

// default olarak çalıştırılacak fonksiyonu belirtiyoruz
exports.default = series(buildStyles, watchTask);