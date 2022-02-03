let hud = document.getElementById("tela");
let resultado = [];
let vez = 0;
let operadores = ["+", "-"]
let ligado = false;

function desligar(){
    ligado = false;
    resultado;
}

function ligar(){
    ligado = true;
}

function mostrar(num) {
    if (resultado.length != 7 && ligado != false) {
        hud.innerHTML += num.value;
        memoria(num.value);
    }
}

function memoria(otNum) {
    resultado[vez] = otNum;

    console.log(resultado);

    solucao();
    vez++;
}

function solucao() {
    for (rest of resultado){
        console.log(rest);
    }
}

