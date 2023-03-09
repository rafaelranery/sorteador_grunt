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
            }
        }
    })
    


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');


    /* Função default */
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production']);

}
