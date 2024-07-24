function getComputerChoice(){
    let choice = Math.random();
    if(choice <= 0.33){
        choice = 'piedra';
    }
    else if(choice <= 0.33 || choice >=0.66){
        choice = 'papel';
    }
    else{
        choice = 'tijera';
    }
    return choice;
}

function getHumanChoice(){
    let eleccion = prompt("elije entre piedra, papel o tijera");
    eleccion = eleccion.toLowerCase();
    return eleccion;
}

function playRound(maquina, humano){
    let resultado = null;
    switch(humano == 'piedra'){
        case maquina == 'papel':
            resultado = 'perdiste';
            break;
        case maquina == 'tijera':
            resultado = 'ganaste!';
            break;
        default :
            resultado = 'empate';
    }

        switch(humano == 'papel'){
        case maquina == 'piedra':
            resultado = 'ganaste!';
            break;
        case maquina == 'tijera':
            resultado = 'perdiste!';
            break;
        default :
            resultado = 'empate';
    }

        switch(humano == 'tijera'){
        case maquina == 'piedra':
            resultado = 'perdiste';
            break;
        case maquina == 'papel':
            resultado = 'ganaste!';
            break;
        default :
        resultado = 'empate';
    }
    console.log(resultado);
    return resultado;  
}

function playGame(){
    let puntajeHumano = 0;
    let puntajeMaquina = 0;
    let i = 0;
    while(i<5){
        let ronda = playRound(getComputerChoice(), getHumanChoice());
        if(ronda == 'ganaste!'){
            puntajeHumano ++;
            i++;
        }
        else if(ronda == 'perdiste'){
            puntajeMaquina ++;
            i++;
        }
        else i++;
    }
    return 'el resultado del juego es: Máquina:' + puntajeMaquina + 'Humano:' + puntajeHumano;
}
console.log(playGame());