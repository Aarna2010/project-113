function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 100, 50, 100, 100);
    circle(10, 200, 20);
    circle(10, 9, 20);
    circle(300, 9, 20);
    circle(300, 200, 20);

    rect(20, 190, 270, 10)
    rect(20, 5, 270, 10)
    rect(10, 20, 10, 170)
    rect(290, 20, 10, 170)
}

function take_snapshot(){
    save('Aarna.png');
}