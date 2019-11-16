var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', uploadImage, false);

var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d', "webgl");

var original_canvas = document.getElementById('editCanvas');
var original_ctx = original_canvas.getContext('2d', "webgl");

var originalImage;

var width = canvas.width = original_canvas.width;
var height = canvas.height = original_canvas.height;

function gray_scale() {
    document.getElementById('imageCanvas').style.filter="invert(1)";
    var img = originalImage;
    
    if(!img) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0);
    var imgPixels = ctx.getImageData(0, 0, width, height);

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var i = (y * 4) * width + x * 4;

            var red     = 0.2989 * imgPixels.data[i];
            var green   = 0.5870 * imgPixels.data[i+1];
            var blue    = 0.1140 * imgPixels.data[i+2];

            imgPixels.data[i] = red;
            imgPixels.data[i + 1] = green;
            imgPixels.data[i + 2] = blue;
        }
    }

    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
}

function drawCanvas(kernel) {

    var img = originalImage;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!img) {
        return;
    }

    var imageRatio = img.width / img.height;
    var canvasRatio = width / height;

    var destWidth = width;
    var destHeight = height;

    // Take the ratio that fit within the canvas
    // ImageData requires even dimensions
    if (imageRatio > canvasRatio) {
        destHeight = Math.ceil(destWidth / imageRatio);
        destHeight = destHeight + destHeight % 2;
    } else {
        destWidth = Math.ceil(destHeight * imageRatio);
        destWidth = destWidth + destWidth % 2;
    }

    var r = {
        x: (width - destWidth) / 2,
        y: (height - destHeight) / 2,
        width: destWidth,
        height: destHeight
    };

    ctx.drawImage(img, r.x, r.y, r.width, r.height);

    var imageData = ctx.getImageData(r.x, r.y, r.width, r.height);

    // Edge detection
    imageData = this.applyConvolutionFilter(imageData, kernel);

    ctx.putImageData(imageData, r.x, r.y);
}

function applyConvolutionFilter(src, kernel) {
    var w = src.width;
    var h = src.height;

    var dst = new ImageData(w, h);

    var dstBuf = dst.data;
    var srcBuf = src.data;

    var rowOffset = Math.floor(kernel.length / 2);
    var colOffset = Math.floor(kernel[0].length / 2);

    for (var row = 0; row < h; row++) {
        for (var col = 0; col < w; col++) {
            var result = [0, 0, 0, 0];

            for (var kRow = 0; kRow < kernel.length; kRow++) {
                for (var kCol = 0; kCol < kernel[kRow].length; kCol++) {
                    var kVal = kernel[kRow][kCol]

                    var pixelRow = row + kRow - rowOffset;
                    var pixelCol = col + kCol - colOffset;

                    if (pixelRow < 0 || pixelRow >= h ||
                        pixelCol < 0 || pixelCol >= w) {
                        continue;
                    }

                    var srcIndex = (pixelRow * w + pixelCol) * 4;

                    for (var channel = 0; channel < 4; channel++) {
                        if (channel === 3) {
                            continue;
                        } else {
                            var pixel = srcBuf[srcIndex + channel];
                            result[channel] += pixel * kVal;
                        }
                    }
                }
            }

            var dstIndex = (row * w + col) * 4;

            for (var channel = 0; channel < 4; channel++) {
                var val = (channel === 3) ? 255 : result[channel];
                dstBuf[dstIndex + channel] = val;
            }
        }
    }
    return dst;
}


function horizontal_sobel() {
    gray_scale();

    var horizontal_kernel = [[-1, 0, 1],
                             [-2, 0, 2],
                             [-1, 0, 1]];
    drawCanvas(horizontal_kernel);
}

function vertical_sobel() {
    gray_scale();

    var vertical_kernel = [[-1, -2, -1],
                           [0, 0, 0],
                           [1, 2, 1]];
    drawCanvas(vertical_kernel);
}

function sobel() {
    var data_type = jsfeat.U8_t | jsfeat.C1_t;
    var img = originalImage;
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(!img) {
        return;
    }

    var imageRatio = img.width / img.height;
    var canvasRatio = width / height;

    var destWidth = width;
    var destHeight = height;

    // Take the ratio that fit within the canvas
    // ImageData requires even dimensions
    if (imageRatio > canvasRatio) {
        destHeight = Math.ceil(destWidth / imageRatio);
        destHeight = destHeight + destHeight % 2;
    } else {
        destWidth = Math.ceil(destHeight * imageRatio);
        destWidth = destWidth + destWidth % 2;
    }

    var r = {
        x: (width - destWidth) / 2,
        y: (height - destHeight) / 2,
        width: destWidth,
        height: destHeight
    };

    ctx.drawImage(img, r.x, r.y, r.width, r.height);

    var imageData = ctx.getImageData(r.x, r.y, r.width, r.height);


    img_u8 = new jsfeat.matrix_t(width, height, jsfeat.U8C1_t);
    img_gxgy = new jsfeat.matrix_t(height, height, jsfeat.S32C2_t);

    //process the image
    jsfeat.imgproc.grayscale(imageData.data, width, height, img_u8);
    jsfeat.imgproc.sobel_derivatives(img_u8, img_gxgy);

    // render result back to canvas
    var data_u32 = new Uint32Array(imageData.data.buffer);
    var alpha = (0xff << 24);
    var i = img_u8.cols * img_u8.rows,
        pix = 0,
        gx = 0,
        gy = 0;
    while (--i >= 0) {
        gx = Math.abs(img_gxgy.data[i << 1] >> 2) & 0xff;
        gy = Math.abs(img_gxgy.data[(i << 1) + 1] >> 2) & 0xff;
        pix = ((gx + gy) >> 1) & 0xff;
        data_u32[i] = (pix << 24) | (gx << 16) | (0 << 8) | gy;
    }

    document.getElementById('imageCanvas').style.filter="invert(0)";
    ctx.putImageData(imageData, r.x, r.y);
}

function laplacian() {
    gray_scale();

    var kernel = [[-1, -1, -1],
                  [-1, 8, -1],
                  [-1, -1, -1]];
    drawCanvas(kernel);
}

function canny(blurLevel, lowThreshold, highThreshold) {
    var data_type = jsfeat.U8_t | jsfeat.C1_t;
    var img = originalImage;
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(!img) {
        return;
    }

    //gray_scale();

    document.getElementById('imageCanvas').style.filter="invert(1)";

    var imageRatio = img.width / img.height;
    var canvasRatio = width / height;

    var destWidth = width;
    var destHeight = height;

    // Take the ratio that fit within the canvas
    // ImageData requires even dimensions
    if (imageRatio > canvasRatio) {
        destHeight = Math.ceil(destWidth / imageRatio);
        destHeight = destHeight + destHeight % 2;
    } else {
        destWidth = Math.ceil(destHeight * imageRatio);
        destWidth = destWidth + destWidth % 2;
    }

    var r = {
        x: (width - destWidth) / 2,
        y: (height - destHeight) / 2,
        width: destWidth,
        height: destHeight
    };

    ctx.drawImage(img, r.x, r.y, r.width, r.height);

    var data_buffer = new jsfeat.data_t(width * height);
    var img_u8 = new jsfeat.matrix_t(width, height, data_type, data_buffer);
    var imageData = ctx.getImageData(r.x, r.y, r.width, r.height);

    //Convert to grayscale(needed for other methods)
    jsfeat.imgproc.grayscale(imageData.data, width, height, img_u8);

    //Gaussian Blur to reduce noise
    var reduce = blurLevel | 0;
    var kernel_size = (reduce + 1) << 1;
    jsfeat.imgproc.gaussian_blur(img_u8, img_u8, kernel_size, 0);

    //Reduce image to edges
    jsfeat.imgproc.canny(img_u8, img_u8, lowThreshold | 0, highThreshold | 0);

    //Render the image data back to canvas
    var data_u32 = new Uint32Array(imageData.data.buffer);
    var alpha = (0xff << 24);
    var i = img_u8.cols * img_u8.rows,
        pix = 0;
    while (--i >= 0) {
        pix = img_u8.data[i];
        data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;

    }
    //Put the edited image on the canvas
    ctx.putImageData(imageData, r.x, r.y);
}


function uploadImage(e) {
    
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img,0,0,img.width,img.height,0,0,400,300);
            original_ctx.drawImage(img,0,0,img.width,img.height,0,0,400,300);
            document.getElementById('imageCanvas').style.filter="invert(0)";
            original_canvas.style.visibility = "hidden";
        }
        img.src = event.target.result;
        originalImage = img;
    }
    reader.readAsDataURL(e.target.files[0]);
    
}