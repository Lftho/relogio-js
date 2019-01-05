function Relogio() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    minutos = AdicionarZero(minutos);
    segundos = AdicionarZero(segundos);
    var relogio = document.getElementById('relogio');
    relogio.textContent = hora + ':' + minutos + ':' + segundos;
    var tickTack = setInterval(Relogio, 1000);
    
}

// A funcao colocara mais um zero nos segundos.
function AdicionarZero(minutoOuSegundo) {
    if(minutoOuSegundo < 10) {
        minutoOuSegundo = "0" + minutoOuSegundo;
    }
    return minutoOuSegundo;
}


Relogio();