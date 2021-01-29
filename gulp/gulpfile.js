const dist = "*";
const dir = {
    dist: 
    {
        main_css: `${dist}/css/`
    },
    src: 
    {
        main_sass: "src/sass/main/main.sass"
    }
};


const gulp = require('gulp'),
      sass = require('gulp-sass'),
      { series, parallel, watch } = require('gulp');


function sass_compile() {
    return gulp.src(dir.src.main_sass)
        .pipe(sass())
        .pipe(gulp.dest(dir.dist.main_css))
};


exports.default = function() {
    watch([dir.src.main_sass, "src/sass/components/AuthPage/LoginForm.sass"], sass_compile)
}
exports.build = series(sass_compile);