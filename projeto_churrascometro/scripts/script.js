// Carne - 400gr por pessoa + de 6 horas = 650gr
// Cerveja - 1200ml por adulto + 6 horas = 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas = 1500ml
// Crianças valem por 0,5

let adultos = document.getElementsByTagName("input")[0];
let criancas = document.getElementsByTagName("input")[1];
let duracao = document.getElementsByTagName("input")[2];

let resultado = document.getElementById("resultado");

function calc() {
    let adultosReal = parseInt(adultos.value);
    let criancasReal = parseInt(criancas.value) / 2;
    let duracaoReal = parseInt(duracao.value);

    if (duracaoReal < 6) {
        var carne = 400 * (adultosReal + criancasReal);
        var cerveja = 1200 * adultosReal;
        var bebida = 1000 * (adultosReal + criancasReal);
    }
    else if (duracaoReal >= 6 && duracaoReal <= 12) {
        var carne = 650 * (adultosReal + criancasReal);
        var cerveja = 2000 * adultosReal;
        var bebida = 1500 * (adultosReal + criancasReal);
    }

    let carneKg = carne / 1000;
    let cervejaLata = cerveja / 333;
    cervejaLata = parseInt(cervejaLata);
    let bebidaLitro = bebida / 2000;

    if (carneKg >= 0){
        resultado.innerHTML = 
        "<p>" + carneKg + "kg de Carne" +
        "<p>" + cervejaLata + " Latas de Cerveja" +
        "<p>" + bebidaLitro + " Garrafas de 2L de Bebida";
    }
    else{
        resultado.innerHTML = "<p> Não ramela ai jão!"
    }
}
