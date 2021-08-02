onload = function () {
    let texto = localStorage.getItem("texto");

    if (texto != null) {
        let h1 = document.getElementById("nome");
        h1.innerHTML = texto;
    }
}

function atualizar() {
    let valor = document.getElementById("texto").value;
    localStorage.setItem("texto", valor);
}

function reset() {
    localStorage.clear();

    let h1 = document.getElementById("nome");
    h1.innerHTML = "Ivanzera";
}

function changeH1() {
    let texto = document.getElementById("texto")
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerText = texto.value;
}

function onOver(elemento) {
    elemento.style.backgroundColor = "red";
    elemento.style.color = "black";
}

function onOut(elemento) {
    elemento.style.backgroundColor = "cornflowerblue";
    elemento.style.color = "aliceblue";
}

var intervalo;
var intervalo2;

function secret(){
    intervalo = setInterval(mudarCor, 500)
    intervalo2 = setInterval(mudarCor2, 1000)
}

function mudarCor(){
    document.getElementsByTagName("h1")[0].style.color = "blue";
}

function mudarCor2(){
    document.getElementsByTagName("h1")[0].style.color = "red";
}

function limparIntervalo(){
    clearInterval(intervalo);
    clearInterval(intervalo2);
    document.getElementById("nome").style.color = "black";
}

function secret2(){
    let botao = document.getElementById("segredinho");
    botao.style.color = "black";
    botao.style.backgroundColor = "red";
}

function secret3(){
    let botao = document.getElementById("segredinho");
    botao.style.color = "transparent";
    botao.style.backgroundColor = "transparent";
}

var n = 0;
var interval;

function atualizarTexto(){
    let span = document.getElementsByTagName("span")[0];
    span.innerHTML = n;
    n++;
}

function iniciar(){
    interval = setInterval(atualizarTexto, 1000);
}

function parar(){
    clearInterval(interval);
}

function magica(){
    let pa = document.getElementById("truque");
    var top = Math.round(Math.random() * 100);
    var left = Math.round(Math.random() * 100);
    pa.style.top = top + "%";
    pa.style.left = left + "%";
}

console.log(Math.round(Math.random() * 100));

// localStorage.setItem("nome", "Ivan");

// let n = localStorage.getItem("nome");
// console.log(n);

// localStorage.removeItem("nome");
