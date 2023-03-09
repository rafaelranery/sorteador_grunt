module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            /* development // podemos criar diferentes ambientes (development, production) */
            development: {
                files: {
                    /* arquivo destino */
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            /* Configurando para ser executado apenas para cliente/ ambiente remoto */
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css':'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev'],
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_CSS',
                            replacement: './styles/main.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_CSS',
                            replacement: './styles/main.min.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['preBuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'preBuild/index.html':'src/index.html'
                }
            }
        },
        clean: ['preBuild'],
    })
    


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');


    /* Função default */
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean']);

}
