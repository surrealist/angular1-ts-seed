var paths = {};

paths.destFolder = 'dist';

paths.html = [
  "src/index.html"
];

paths.sass = [
  "src/css/main.sass"
];

paths.css = [
  "src/js/bootstrap/dist/css/bootstrap.css",
  "src/js/angular-bootstrap/ui-bootstrap-csp.css",
  "src/js/font-awesome/css/font-awesome.css"
];

paths.js = [
  "src/js/jquery/dist/jquery.min.js",
  "src/js/bootstrap/dist/js/bootstrap.min.js",
  "src/js/angular/angular.js",
  "src/js/angular-bootstrap/ui-bootstrap.min.js",
  "src/js/angular-bootstrap/ui-bootstrap-tpls.min.js",
  "src/js/underscore/underscore-min.js"
];

paths.fonts = [
  "src/js/bootstrap/dist/fonts/*.*",
  "src/js/font-awesome/fonts/*.*"
];

module.exports = paths;