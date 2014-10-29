module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'app',
                    livereload: 35729
                }
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'app/css/main.css': 'app/sass/main.scss', // 'destination': 'source'
                }
            }
        },
        watch: {
            css: {
                files: 'app/sass/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: 35729,
                },
            },
        }
    });

    grunt.registerTask('default', ['connect:server', 'watch']);
};