module.exports = function(grunt){
  'use strict';
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['lib/**/*.js']
    },

    concat: {
      dist: {
        src: [
          'lib/ember-parse-many-array.js',
          'lib/ember-parse-adapter.js',
          'lib/ember-parse-serializer.js',
          'lib/ember-parse-model.js',
          'lib/ember-parse-user.js'
        ],
        dest: 'dist/ember-parse-adapter.js'
      }
    },

    uglify: {
      dist: {
        src: 'dist/ember-parse-adapter.js',
        dest: 'dist/ember-parse-adapter.min.js'
      }
    },

    qunit: {
      options: {
        timeout: 1000
      },
      all: {
        options: {
          urls: ['http://localhost:8000/test/index.html']
        }
      }
    },

    connect: {
      server: {
        port: 8000,
        base: '.'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', ['connect', 'qunit']);
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
