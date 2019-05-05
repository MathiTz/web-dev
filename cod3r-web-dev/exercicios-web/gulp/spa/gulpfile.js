const gulp = require("gulp");
const util = require("gulp-util");
const sequence = require("run-sequence");

require("./gulpTasks/app");
require("./gulpTasks/deps");
require("./gulpTasks/servidor");

gulp.task("default", () => {
  if (util.env.production) {
    sequence("deps", "app"); // execução serialada
    // gulp.start("deps", "app"); execução em paralelo
  } else {
    sequence("deps", "app", "servidor");
    // gulp.start("deps", "app", "servidor");
  }
});
