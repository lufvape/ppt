let puntajeHumano = 0;
let puntajeMaquina = 0;

const piedra = document.querySelector("#piedra");
piedra.addEventListener("click", function(){
    maquina = getComputerChoice();
    ronda = playRound(maquina, 'piedra');
    document.querySelector(".ronda").textContent = ronda;
    document.querySelector(".footer").textContent = "el resultado del juego es: Máquina: " + puntajeMaquina + " Humano: " + puntajeHumano;
})

const papel = document.querySelector("#papel");
papel.addEventListener("click", function(){
    maquina = getComputerChoice();
    ronda = playRound(maquina, 'papel');
    document.querySelector(".ronda").textContent = ronda;
    document.querySelector(".footer").textContent = "el resultado del juego es: Máquina: " + puntajeMaquina + " Humano: " + puntajeHumano;
})

const tijera = document.querySelector("#tijera");
tijera.addEventListener("click", function(){
    maquina = getComputerChoice();
    ronda =  playRound(maquina, 'tijera');
    document.querySelector(".ronda").textContent = ronda;
    document.querySelector(".footer").textContent = "el resultado del juego es: Máquina: " + puntajeMaquina + " Humano: " + puntajeHumano;
})

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

function playRound(maquina, humano){
    let resultado = '';
    if(puntajeHumano == 5){
        alert("El juego ha terminado. Ganaste")
    }
    else if(puntajeMaquina == 5){
        alert("El juego ha terminado. Perdiste")
    }
    else{
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
        if(resultado == 'ganaste!'){
            puntajeHumano ++;
        }
        else if(resultado == 'perdiste'){
            puntajeMaquina ++;
        }
    }
    return resultado;  
}