module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            /* development // podemos criar diferentes ambientes (development, production) */
            development: {
                files: {
                    /* arquivo destino */
                    'main.css':'main.less'
                }
            },
            production: {
                options: {
                    compress: true,

                },
                files: {
                    'main.min.css':'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css':'main.scss'
                }
            } 
        }
    })
    
    /* Função para adição de tarefas */
    grunt.registerTask('olaGrunt', function(){
        const done =this.async();
        /* Simulação de função assíncrona */
        setTimeout(() => {
            console.log('olá grunt')
            done();
        }, 3000);
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');


    /* Função default */
    grunt.registerTask('default', ['less', 'sass']);
}
