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
        }
    })
    


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');


    /* Função default */
    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production']);

}
