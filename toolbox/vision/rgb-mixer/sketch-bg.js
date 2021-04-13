var canvasWidth, canvasHeight;
var redSlider, greenSlider, blueSlider;
var sliderR, sliderG, sliderB, textX, boxY, sliderX;
var monitorX, monitorY, monitorSize;
var circleDiameter;
var bg;


function preload() {
    bg = loadImage("./bg.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    canvasWidth = windowWidth;
    canvasHeight = windowHeight;
    sliderR = canvasHeight * 0.3;
    sliderG = canvasHeight * 0.4;
    sliderB = canvasHeight * 0.5;
    monitorX = canvasWidth * 0.8;
    monitorY = canvasHeight * 0.45;
    monitorSize = Math.max(160, canvasWidth * 0.25, canvasHeight * 0.25);
    circleDiameter = monitorSize / 2;
    boxY = canvasHeight * 0.6;
    sliderX = canvasWidth * 0.1;
    var sliderSize = canvasWidth * 0.4;
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
    fill("#5281FF")
    rect(0, 0, canvasWidth, canvasHeight / 2);

    fill("#F2AE6F")
    rect(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);
    imageMode(CENTER);
    image(bg, canvasWidth / 2, canvasHeight * 0.44, canvasWidth, canvasWidth * 0.5625);
    push();

    // Get values from sliders
    var r = redSlider.value();
    var g = greenSlider.value();
    var b = blueSlider.value();

    push();

    fill("#6e70eb");
    text("B", textX, sliderB);
    fill("#91d9a3");
    text("G", textX, sliderG);
    fill("#d97575");
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
    fill(255);
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
    blendMode(ADD);
    translate(80, 105);
    var nColors = 3;
    var rgb = [color(r, 0, 0), color(0, g, 0), color(0, 0, b)];
    for (var i = 0; i < nColors; i++) {
        var position = p5.Vector.fromAngle(i / nColors * TWO_PI - PI / 2);
        position.mult(45);
        fill(rgb[i]);
        ellipse(monitorX + position.x - 90, monitorY + position.y - 90, circleDiameter, circleDiameter);
    }
    pop();
    pop();
}