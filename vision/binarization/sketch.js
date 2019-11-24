var originalImage;
var slider;
var threshold = 0;

function preload() {
    originalImage = loadImage("../../media/pixel_pikachu.png");
}

function setup() {
    var canvas = createCanvas(640, 480);
    canvas.parent('container');
    image(originalImage, 0, 0, 640, 480);
    filter(GRAY);
    slider = createSlider(0, 255, 0);
    slider.parent('slider');
}

function draw() {
    if (slider.value() != threshold) {
        clear();
        threshold = slider.value();
        document.getElementById("slider-value").innerHTML = threshold;
        image(originalImage, 0, 0, 640, 480);
        loadPixels();
        binarize(pixels);
        updatePixels();
    }
}

function binarize(pixels){
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
        
            var index = (x + (y * width)) * 4;

            var r = pixels[index];
            var g = pixels[index + 1];
            var b = pixels[index + 2];

            var v = 0.33 * r + 0.33 * g + 0.34 * b;

            if (v <= threshold) {
                pixels[index] = pixels[index + 1] = pixels[index + 2] = 0;
            } else {
                pixels[index] = pixels[index + 1] = pixels[index + 2] = 255;
            }
        }
    }
}