module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
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

    /* Função default */
    grunt.registerTask('default', ['olaGrunt']);
}
