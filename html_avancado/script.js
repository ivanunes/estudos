let jureg = document.getElementById("jureg");

jureg.addEventListener("click", function () {

    jureg.src = "../Assets/jureg-ladrao.jpg"
    //juret.setAttribute("src", "../Assets/jureg-ladrao.jpg");

});




let lista = document.getElementById("lista");
let num = parseInt(lista.getAttribute("data-num"));

let conteudo = "";

for (let i = 1; i <= num; i++) {

    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;




let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 15;
}

function avancar() {
    video.currentTime += 15;
}

function diminuir_vel() {
    video.playbackRate -= 0.1;
}

function aumentar_vel() {
    video.playbackRate += 0.1;
}

function play() {
    video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

let controle = document.getElementsByClassName("controle")[0];

function esconde() {
    controle.style.display = "none";
}

function mostra() {
    controle.style.display = "block";
}




let quadrado = document.getElementsByClassName("quadrado")[0];

let xInicial = 0;

function moverQuadrado(x) {

    let posX = x + "%";
    quadrado.style.left = posX;

}

setInterval(function () {

    moverQuadrado(xInicial++);

    if (quadrado.style.left == "100%") {

        moverQuadrado(xInicial = 0);

    }
}, 30)


