img = "";
status = "";

function preload() {
    img = loadImage("bottle.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    
}

function draw() {
    image(img, 50, 0, 500, 420);

    fill("#FF0000");
    text("Handle", 100, 20);
    noFill();
    stroke("#FF0000");
    rect(100, 5, 300, 50);

    fill("#FF0000");
    text("Cap", 115, 60, 20);
    noFill();
    stroke("#FF0000");
    rect(115, 50, 255, 50);
}

function gotResult(error, result) {
    if(error) {
        console.log(error);
    }
    console.log(result);
}

function changeColor() {
    document.getElementById("back_button").style.color = "red";
}

function resetColor() {
    document.getElementById("back_button").style.color = "white";
}

function back() {
    window.location = "index.html";
}