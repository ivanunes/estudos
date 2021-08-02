let np = prompt("Olá, sorteio para quantas pessoas?");   // let pessoas =["Ivan", "Maria", "José", "Carlos", "Baianinho"];

onload = function () {
    if (np != null && np != ""){  // pessoas != null){
        document.getElementById("pessoas").innerHTML += np;  // pessoas.length;
    }
    else{
        document.getElementById("pessoas").innerHTML += 0;
    }
}

function sortear() {
    let ns = Math.round(Math.random() * np);  // (pessoas.length - 1));
    document.getElementById("tit").innerHTML = ns;  // pessoas[ns];
}

function onOver(elemento) {
    elemento.style.backgroundColor = "red";
    elemento.style.color = "black";
}

function onOut(elemento) {
    elemento.style.backgroundColor = "cornflowerblue";
    elemento.style.color = "aliceblue";
}
