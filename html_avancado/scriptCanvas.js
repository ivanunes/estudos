


// ================================


let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(300, 200);
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
ctx.fillStyle = "purple";
ctx.closePath();
ctx.fill()
ctx.stroke();


// ===============================


ctx.beginPath();

ctx.rect(300, 0, 100, 200)

ctx.fillStyle = "red";
// ctx.fillRect(300, 200, 100, 200);

ctx.strokeStyle = "green";
// ctx.strokeRect(300, 100, 100, 100);

ctx.closePath();
ctx.fill();
ctx.stroke()

ctx.clearRect(310, 10, 80, 100)


// ===============================


ctx.beginPath();
ctx.strokeStyle = "blue";

ctx.arc(343, 305, 100, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();


// ===============================


let circle = {
    x: 120,
    y: 305,
    raio: 100,
    inicio: 0,
    fim: 0,
    antiHor: false,
}

let img = new Image();
    img.src = "../Assets/jureg.jpg";
    img.onload = desenharImg;

    function desenharImg() {
        ctx.drawImage(this, 20, 20, this.naturalWidth/2, this.naturalHeight/2);
    }

function drawCircle(c) {
    

    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);


    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor);

    ctx.fill();
    ctx.stroke();
}

setInterval(function () {

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.01;
        circle.x += 0.36;
    }

    drawCircle(circle);

}, 5);

