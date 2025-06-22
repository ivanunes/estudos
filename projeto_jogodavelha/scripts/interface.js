document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

let vitorias1 = 1;
let vitorias2 = 1;

function handleClick(event) {

    let square = event.target;
    let position = square.id;
    
    if(handleMove(position)){
        setTimeout(() => {
            campeao = "";
            
            if (ganhador == 0){
                campeao = "🔴";

                let pontos = document.getElementById("pontos1");
                pontos.innerHTML = vitorias1;
                vitorias1++;
            }else{
                campeao = "❌";

                let pontos = document.getElementById("pontos2");
                pontos.innerHTML = vitorias2;
                vitorias2++;
            }
            alert("O jogo acabou, vencedor: " + campeao);
        }, 100);

    };
    updateSquare(position);

}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


function reset(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        
        square.innerHTML = ''
        gameOver = false;
        playerTime = 0;
        board = ['', '', '', '', '', '', '', '', ''];
    })
}

//

let jogador = {nome1: "", nome2: ""}

function enterName(botao){
    jogador.nome1 = document.getElementById("jogador1input").value;
    jogador.nome2 = document.getElementById("jogador2input").value;

    if(jogador.nome1 != ""){
        document.getElementById("jogador1").innerHTML = jogador.nome1 + " 🔴";
    }
    if(jogador.nome2 != ""){
        document.getElementById("jogador2").innerHTML = jogador.nome2 + " ❌";
    }




    if(jogador.nome1 != "" && jogador.nome2 != ""){
        botao.style.display = "none";
        document.getElementById("jogador1input").style.display = "none";
        document.getElementById("jogador2input").style.display = "none";
        document.getElementById("h3").style.display = "Inline-block"
        podeComecar = true;
    }
}