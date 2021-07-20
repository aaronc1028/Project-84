var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var roverX = 10;
var roverY = 10;
var roverHeight = 90;
var roverWidth = 100;
var bgImg = "mars.jpg"
var roverImg = "rover.png"
var keyPressed;



function add() {
    bgImgTag = new Image();
    bgImgTag.onload = uploadBackground;
    bgImgTag.src = bgImg;
    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImg;
}

function uploadBackground() {
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);


}
function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", keyDownFN);

function keyDownFN(e) {
    keyPressed = e.keyCode
    if (keyPressed == "37") {
        console.log("left")
    }

    if (keyPressed == "38") {
        console.log("up")
    }
    if (keyPressed == "39") {
        console.log("right")
    }
    if (keyPressed == "40") {
        console.log("down")
    }
}