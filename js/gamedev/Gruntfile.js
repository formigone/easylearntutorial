module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        closureDepsWriter: {
            options: {
                closureLibraryPath: 'app/lib/closure-library',
                depswriter: 'app/lib/closure-library/closure/bin/build/depswriter.py',
                root_with_prefix: '"app ../../../../"'
            },
            def: {
                dest: 'app/js/app/deps.js'
            }
        },
        closureCompiler: {
            options: {
                compilerFile: 'lib/google-closure/compiler.jar'
            },
            src: 'app/js/app/main.js',
            dest: 'dist/js/app.js',
            adv: {
                src: 'app/js/app/main.js',
                dest: 'dist/js/app.js',
                options: {
                    compilerOpts: {
                        compilation_level: 'ADVANCED_OPTIMIZATIONS'
                    }
                }
            },
            white: {
                src: 'app/js/app/main.js',
                dest: 'dist/js/app.js',
                options: {
                    compilerOpts: {
                        compilation_level: 'WHITESPACE_ONLY'
                    }
                }
            }
        },
        qunit: {
            all: ['app/js/app/**/*_test.html']
        },
        connect: {
            server: {
                options: { base: './app', port: 0, hostname: 'localhost', keepalive: true }
            },
            dist: {
                options: {
                    base: './dist', port: 0, hostname: 'localhost', keepalive: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('default', ['closureCompiler:white']);
    grunt.registerTask('comp', ['closureCompiler:adv']);
    grunt.registerTask('deps', ['closureDepsWriter']);
    grunt.registerTask('travis', ['qunit']);
    grunt.registerTask('server', ['connect']);
    grunt.registerTask('prod', ['connect:dist']);
};

