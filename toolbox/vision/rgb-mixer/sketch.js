var redSlider, greenSlider, blueSlider;
var sliderR, sliderG, sliderB, textX, boxY, sliderX;
var monitorX, monitorY, monitorSize;
var monitorSVG;

/*
function preload() {
    monitorSVG = loadSVG("./monitor.svg");
}
*/

function setup() {
    createCanvas(windowWidth, windowHeight);

    var canvasWidth = windowWidth;
    var canvasHeight = windowHeight;
    sliderR = canvasHeight * 0.3;
    sliderG = canvasHeight * 0.4;
    sliderB = canvasHeight * 0.5;
    monitorX = canvasWidth * 0.75;
    monitorY = canvasHeight * 0.4;
    monitorSize = Math.max(160, canvasWidth * 0.3, canvasHeight * 0.3);
    boxY = canvasHeight * 0.6;
    sliderX = 25;
    var sliderSize = canvasWidth * 0.45;
    textX = sliderX + sliderSize + 10;

    textSize(20);

    redSlider = createSlider(0, 255, 255);
    redSlider.style('background', '#d97575');
    redSlider.position(sliderX, sliderR);
    redSlider.size(sliderSize);

    greenSlider = createSlider(0, 255, 255);
    greenSlider.style('background', '#91d9a3');
    greenSlider.position(sliderX, sliderG);
    greenSlider.size(sliderSize);

    blueSlider = createSlider(0, 255, 255);
    blueSlider.style('background', '#6e70eb');
    blueSlider.position(sliderX, sliderB);
    blueSlider.size(sliderSize);
}

function draw() {
    background(225);
    imageMode(CENTER);
    //image(monitorSVG, monitorX, monitorY, monitorSize, monitorSize);
    push();

    // Get values from sliders
    var r = redSlider.value();
    var g = greenSlider.value();
    var b = blueSlider.value();

    push();

    fill("#0003a1");
    text("B", textX, sliderB);
    fill("#00a12b");
    text("G", textX, sliderG);
    fill("#a12600");
    text("R", textX, sliderR);

    // Create color boxes
    push();
    translate(sliderX, boxY);
    var size = 30;
    textSize(20);
    fill(r, 0, 0);
    rect(0, 0, size, size);
    fill(0, g, 0);
    rect(60, 0, size, size);
    fill(0, 0, b);
    rect(120, 0, size, size);
    fill(r, g, b);
    rect(180, 0, size, size);
    fill(0);
    text("+", 40, 22)
    text("+", 100, 22)
    text("=", 160, 22)
    textSize(15);
    textAlign(CENTER);
    text(r, 15, 50)
    text(g, 75, 50)
    text(b, 135, 50)
    textAlign(LEFT);
    var colorText = "(" + r + ", " + g + ", " + b + ")";
    text(colorText, 180, 50)
    pop();

    // Display additive color Venn diagram
    push();
    fill(0);
    noStroke();
    rectMode(CENTER);
    ellipseMode(CENTER);
    rect(monitorX, monitorY, monitorSize, monitorSize);
    blendMode(ADD);
    translate(80, 105);
    var nColors = 3;
    var rgb = [color(r, 0, 0), color(0, g, 0), color(0, 0, b)];
    for (var i = 0; i < nColors; i++) {
        var position = p5.Vector.fromAngle(i / nColors * TWO_PI - PI / 2);
        position.mult(26);
        fill(rgb[i]);
        ellipse(monitorX + position.x - 90, monitorY + position.y - 90, 90, 90);
    }
    pop();
    pop();
}