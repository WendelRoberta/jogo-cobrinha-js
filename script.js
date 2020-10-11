let canvas = document.getElementById("cobrinha");
let context = canvas.getContext("2d");
let box = 32;
let cobrinha = [];
cobrinha[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < cobrinha.length; i++) {
        context.fillStyle = "purple";
        context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);

    }

}

criarBG();
criarCobrinha();