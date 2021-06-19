function setup() {
    canvas=createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,230,150,200,200)
    fill(100,60,190);
    stroke(100,60,190);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,430,80);
    circle(590,50,80);
    fill(90,200,150);
    stroke(90,200,150);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);
}

function take() {
    save("img.png");
}