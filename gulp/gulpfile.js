const dist = "/home/fedor/Projects/timetracker-web/app/public/";
const dir = {
    main_css:
    {
        src: "src/sass/main/main.sass",
        dest: `${dist}/css/`,
        dependencies: [
            "src/sass/variables.sass",
            "src/sass/components/Header/Header.sass"
        ]
    },
    loginPage_css:
    {
        src: "src/sass/pages/LoginPage/LoginPage.sass",
        dest: `${dist}/css/pages/`,
        dependencies: [
            "src/sass/variables.sass",
        ]
    }
};


const gulp = require('gulp'),
      sass = require('gulp-sass'),
      { series, parallel, watch } = require('gulp');


function sass_compile(src, dest) {
    return gulp.src(src)
    .pipe(sass())
    .pipe(gulp.dest(dest));
};


exports.default = function() {
    watch([dir.main_css.src, ...dir.main_css.dependencies], main_css = (cb) => { 
        sass_compile(dir.main_css.src, dir.main_css.dest);
        cb();
    });
    watch([dir.loginPage_css.src, ...dir.loginPage_css.dependencies], loginPage_css = (cb) => {
        sass_compile(dir.loginPage_css.src, dir.loginPage_css.dest);
        cb();
    });
};


exports.build = series(sass_compile);