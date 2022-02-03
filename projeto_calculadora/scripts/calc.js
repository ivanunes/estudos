let hud = document.getElementById("tela");
let resultado = [];
let vez = 0;
let operadores = ["+", "-"]
let ligado = false;

function desligar() {
    ligado = false;
    resultado = [];
    vez = 0;
    hud.innerHTML = resultado;
}

function ligar() {
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

    vez++;
}

function solucao() {
    let vez1 = 0;

    resultado.forEach(element => {
        let h = eval(resultado[vez1].toString);

        console.log(resultado);

        vez++;
    });






}

