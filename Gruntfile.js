#!/usr/bin/env node

module.exports = function (grunt) {
  "use strict";

  // Load all our grunt tasks from our package.json `devDependencies`.
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    "pkg": grunt.file.readJSON("package.json"),
    "jshint": {
      "files": [
        "**/*.js",
        "**/*.json",
        "!**/node_modules/**"
      ],
      "options": {
        "boss": true,
        "maxlen": 120,
        "newcap": false,
        "node": true,
        "onecase": true,
        "smarttabs": true,
        "strict": false,
        "undef": true,
        "unused": true,
        "white": false
      }
    }
  });

  grunt.registerTask("default", ["jshint"]);
};
