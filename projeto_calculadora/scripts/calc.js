let hud = document.getElementById("tela");
let resultado = ['', '', '', '', '', '', '', '', '', ''];
let vez = 0;
let operadores = ["+", "-"]
let ligado = false;

hud.innerHTML = "88888888";

function desligar() {
    ligado = false;
    resultado = ['', '', '', '', '', '', '', '', '', ''];
    vez = 0;
    hud.innerHTML = "88888888";
}

function ligar() {
    if (ligado == false && vez == 0) {
        ligado = true;
        hud.innerHTML = [];
    }
}

function arredondar(){
    if (resultValor != 0){
        Math.round(resultValor);
        hud.innerHTML = Math.round(resultValor);
    }
}

function limparTudo() {
    resultado = ['', '', '', '', '', '', '', '', '', ''];
    vez = 0;
    console.log(resultado);
    hud.innerHTML = [];
}

function mostrar(num) {
    if (resultado.length <= 10 && ligado == true) {
        hud.innerHTML += num.value;
        memoria(num.value);
    }
}

function memoria(otNum) {
    resultado[vez] = otNum;

    console.log(resultado);

    vez++;
}

let podeSeguir = true;
let meteBala = true;
let resultValor = 0;

function solucao() {
    let num1 = resultado[0];
    let num2 = resultado[1];
    let num3 = resultado[2];
    let num4 = resultado[3];
    let num5 = resultado[4];
    let num6 = resultado[5];
    let num7 = resultado[6];
    let num8 = resultado[7];
    let num9 = resultado[8];
    let num10 = resultado[9];

    num1 == "%" ? hud.innerHTML = "error" : resultado[0];
    num2 == "%" ? num2 = "/ 100 *" : resultado[1], podeSeguir = true;;
    num3 == "%" ? num3 = "/ 100 *" : resultado[2], podeSeguir = true;;
    num4 == "%" ? num4 = "/ 100 *" : resultado[3], podeSeguir = true;;
    num5 == "%" ? num5 = "/ 100 *" : resultado[4], podeSeguir = true;;
    num6 == "%" ? num6 = "/ 100 *" : resultado[5], podeSeguir = true;;
    num7 == "%" ? num7 = "/ 100 *" : resultado[6], podeSeguir = true;;
    num8 == "%" ? num8 = "/ 100 *" : resultado[7], podeSeguir = true;;
    num9 == "%" ? num9 = "/ 100 *" : resultado[8], podeSeguir = true;;
    num10 =="%" ? num10 = "/ 100 *" : resultado[9], podeSeguir = true;;

    if (num1 == "√") {
        resultValor = Math.sqrt(parseFloat(eval(num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10))) 
        hud.innerHTML = resultValor;
        ligado=false;
        meteBala=false;
     }else{ 
         resultado[0];
    }
    num2 == "√" ? hud.innerHTML = "error" : resultado[1], podeSeguir = true;;
    num3 == "√" ? hud.innerHTML = "error" : resultado[2], podeSeguir = true;;
    num4 == "√" ? hud.innerHTML = "error" : resultado[3], podeSeguir = true;;
    num5 == "√" ? hud.innerHTML = "error" : resultado[4], podeSeguir = true;;
    num6 == "√" ? hud.innerHTML = "error" : resultado[5], podeSeguir = true;;
    num7 == "√" ? hud.innerHTML = "error" : resultado[6], podeSeguir = true;;
    num8 == "√" ? hud.innerHTML = "error" : resultado[7], podeSeguir = true;;
    num9 == "√" ? hud.innerHTML = "error" : resultado[8], podeSeguir = true;;
    num10 =="√" ? hud.innerHTML = "error" : resultado[9], podeSeguir = true;;

    if (podeSeguir == true && meteBala == true){
         resultValor = parseFloat(eval(num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10));
         hud.innerHTML = resultValor;
    }
    

    ligado = false;
}

function raiz(number){

    console.log(Math.sqrt(number));
}