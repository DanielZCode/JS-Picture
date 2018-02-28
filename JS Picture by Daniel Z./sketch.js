//birds
var img; 
var img2;
function preload(){
    img = loadImage('resources/birdpic.png');
    img2 = loadImage('resources/cartoon-bird-3.png')
    
}

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
}

function draw() {

    background(75,175,230);
     //grass
    for (j = 0; j< 25; j++) {
        noStroke();
        if(j%2){
            fill(25 ,230, 50); 
            rect(j*25, 370, 27, 75);
        }
        else {
            fill(50, 200, 20);
            rect(j*25, 370, 27, 75);
        }
        
    }
    //base house
    strokeWeight(1);
    stroke(50);
    fill(240, 200, 150);
    rect(200, 275, 200, 175);
    fill(100);
    for(var x = 110; x < 300; x+=20) {
        for(var y = 200; y <380; y+= 27) {
        rect (x, y, 20, 20);
        }
    }   
    fill(200, 100, 100);
    triangle(75, 200, 325,200, 200, 100);
    rect(200, 335, 25, 50)
    fill(175, 175, 175);
    rect(260, 150, 30, 60);
    
    //windows
    strokeWeight(1.5);
    for(var k = 0; k < 7; k++){
        if (k%2) {
            fill(255, 200, 30);
            rect(125+ k* 25, 275, 25, 25);
        }
        else {
            fill(230, 255, 100);
            rect(125 + k*25, 235, 35, 25);
        }
    }
    //birds
    image(img, 280, 60);
    image(img2, 75, 75, 75, 75);
    
    //clouds
    strokeWeight(0.75);
    for(i = 0; i< 6; i++) {
        if (i%2){
            fill(255,255,255);
            ellipse(i*75, 50, 75, 40);
        }
        else {
            fill(200, 200, 200);
            ellipse(i*75, 20, 75, 23);
        }
        
    };
    

}


