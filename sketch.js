let rotation = 0;
let speed = 30;
let numberlines = 500;
let length = 300;

//star adjustments
//let thickness = 200;
let npoints = 10;

let lineStroke = 1;
let sineSpeed = 2;
let starScale=.9;
let starAlpha=40;
let v;
var r1 = 200;   //Radio1 
var r2 = 0;  //Radio2
let c1, c2, c3;

//////// sound
var song;
var amp;
var diam;

function preload() {
  song=loadSound('assets/madrush.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,244,199);
frameRate(20);

  c1 = color(255, 70, 50);
  c2 = color(27, 111, 201);
  c3 = color(255, 122, 1);
  c4 = color(17, 51, 96);
  c5 = color(255,244,199);


  c11 = color(255, 70, 50,starAlpha);
  c22 = color(27, 111, 201,starAlpha);
  c55 = color(255,244,199,starAlpha);

  amp = new p5.Amplitude();
  song.play();

}

function draw() {

  
  let num = 100;
  let gradScale = 450;
  //let sineSpeed=map(mouseY,0,height,.3,2); //mousespeed


  let smap = sin(radians(frameCount * sineSpeed));
  let smap2 = sin(radians(frameCount * sineSpeed));


//////sine
  let sine1 = map(smap, -1, 1, .0005, 15);
  let sine2 = map(smap, -1, 1, .0005, 2);
 // let thickness = map(noise(frameCount), 0, 1, 10, 2000);//noise thickness
  //let thickness = map(smap2, -1, 1, 10, 200);
  let thickness = 100;
  translate(width / 2, height / 2);

//// sound
var vol=amp.getLevel();
var sound1= map(vol,0,.1,-10,10);
var sound2= map(vol,0,.1,-1,1);
print(sinScale);

////////// add sound to sinescale

var sinScale=sine1+sound1;
var sinScale2= sine2+sound2;



/////////////

fill(random([c11,c22,c55]));
stroke(random([c1,c3,c5]));
//noStroke();
 //star 1
 
  push();
  rotate(radians(rotation));
  scale(sinScale/4);
  star(0, 0, thickness, length, npoints);
  pop();

 // star 2
  push();
  scale(sinScale/4);

  rotate(-radians(rotation));
  star(0, 0, thickness, length, npoints);
  pop();


  //line circle
  push();
  rotate(-radians(rotation * 2));


  stroke(random([c1,c2,c3]));
  push();
  rotate(-radians(rotation * 2));
  scale(sinScale / 2);




  for (var i = 0; i < numberlines; i += 1) {
    var x1 = (r1) * cos(i * 2 * PI / numberlines);

    var y1 = (r1) * sin(i * 2 * PI / numberlines);
    var x2 = (r2) * cos(i * 2 * PI / numberlines);
    var y2 = (r2) * sin(i * 2 * PI / numberlines);
    strokeWeight(sinScale*.09);

   // strokeWeight(lineStroke);
    // stroke(c1);
    line(x1, y1, x2, y2);


  }
  pop();


  rotation = rotation + speed;
  push();
  rotate(-radians(rotation * 2));
  pop();
pop();

}

////////////////////////////////////////



function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


