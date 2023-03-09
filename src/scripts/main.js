document.addEventListener('DOMContentLoaded', function(){
    
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let numMax = document.getElementById('num-max').value;
        numMax = parseInt(numMax);

        let numAleatorio = Math.random() * numMax;
        numAleatorio = Math.floor(numAleatorio + 1);
        document.getElementById('resultado-valor').innerText = `${numAleatorio}`
        document.querySelector('.resultado').style.display = 'block';
    })

})