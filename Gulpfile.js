var gulp = require('gulp');
var sass = require('gulp-sass');


var input = './*.scss';
var output = './';
// var input = './stylesheets/**/*.scss';
// var output = './public/css';



gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});


gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// default task
gulp.task('default', ['sass', 'watch' /*, possible other tasks... */]);