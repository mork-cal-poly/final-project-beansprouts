
let sky, xmark, shell, octo, palm, coconut, starfish, textbox, sun, sharkfin, donut, sand, octoclicked=false, 
shellclick=false, 
finclick=false, 
donutclick=false, 
coconutclick=false,
starclick= false,
arrowclick =false,
dogheadClick =false,
dogbodyClick =false

// timer and scene switch
let ready;
let scene=0;
//scene 3 clicks and movement
let dogX=0;
let pixelY=0;
let dogRotate=0;


function preload() {
  textbox = loadImage('src/text.png');
  sky = loadImage('src/sky.png');
  xmark = loadImage('src/no.png');
  octo = loadImage('src/octo.png');
  palm = loadImage('src/palm.png');
  sharkfin = loadImage('src/sharkfin.png');
  donut = loadImage('src/donut.png');
  sand = loadImage('src/sand.png');
  sun = loadImage('src/sun.png');
  coconut = loadImage('src/coconut.png');
  shell = loadImage('src/shell.png');
  starfish = loadImage('src/starfish.png');
  pawprint = loadImage('src/pawprint.png')
  arrow = loadImage('src/arrow.png');
  // SCENE 2 IMAGES BELOW
  beachScene2=loadImage ('src/backgroundScene3.png');
  palmtreeScene2=loadImage ('src/PalmTreeScene3.png');
  towelScene2=loadImage ('src/TowelScene3.png');
  textboxScene2=loadImage ('src/TextBoxScene3.png');
  pawprintsScene2=loadImage ('src/PawPrintsScene3.png');
  drinkScene2=loadImage ('src/DrinkScene3.png'); 
  pixelSunglasses=loadImage ('src/PixelSunglasses.png');
  // SCENE 0 IMAGE
  ready = loadImage('src/ready.png');
}
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  //scene 0 --> 1 --> 2
  if (scene == 0){
      drawScene0();
  }else if (scene == 1) {
      drawScene1();
  } else {
      drawScene2();
  }

  }

function drawScene0() {
    background(255);
    image(ready, 0, 0, 400, 400);
  
    describe('game ready screen titled "Find Spot, ready?, click here to start"');
  }

function drawScene1(){
  image(sky,0,0,400,200);
  image (sun, 0, 0, 400, 400);
  image(sand, 0, 0, 400, 400);
  image(xmark,0,0,400,400);
  image(octo, 0, 0, 400, 400);
  image(palm, 0, 0, 400, 400);
  image(sharkfin, 0, 0, 400, 400);
  image(donut, 0, 0, 400, 400);
  image (textbox, 0, 0, 400, 400);
  image(coconut, 0, 0, 400, 400);
  image(shell, 0, 0, 400, 400);
  image (starfish, 0, 0, 400, 400);
  if (shellclick == true){
    image(xmark, 80, 80,400,400)}
  
   if (octoclicked == true){
    image(xmark, -140, -150, 600, 600)
   } 
 
  if (finclick == true){
  image(xmark, -120, -75, 400, 400)
  }
  if (donutclick == true) {
  image(xmark, -360, -170, 600, 600)
  }
  if(coconutclick == true) {
  image(xmark, 45,-158,400,400)
  }
  if (starclick == true) {
  image(pawprint, 80,0,400,400)
  image(arrow, -100, 0, 400, 400)
  }
  if (starclick == true && arrowclick == true){
    scene++;
  }
}

// SCENE 2 BELOW 

function drawDog(dogX, dogY, dogRotate){
      push();
    
    //translate by whatever args passed in
    translate(dogX, dogY);
    scale(0.3);
    rotate(dogRotate);
  
    fill(0, 0, 0);
    noStroke()
    //translate (x, y)
  
    //body
    fill(230, 230, 255);
    noStroke()
    rect(-20, -30, 50, 250)
    rect(80, -30, 50, 250)
    rect(30, -10, 50, 150)
    fill('black')
    ellipse(60, 10, 80, 150)
  
  
    //ears
    fill(255, 255, 248);
    noStroke()
    triangle(-60, -100, -40, -260, -10, -150);
    triangle(80, -160, 110, -290, 130, -140);
  
    //head
    quad(-60, -100, -10, -150, 80, -160, 130, -140, 140, -20)
    quad(-60, -100, -50, -50, 144, -50, 130, -140)
  //chin
    quad(160, -80, 170, 5, 20, 20, -50, -50, -140, -110);
    triangle(160, -80, 130, -90, 130, -70)
  
    //nose
    fill(0, 0, 50, 256)
    ellipse(100, -60, 90, 40);
  
    //eyes
    fill(0, 0, 0)
    ellipse(20, -90, 20)
    ellipse(100, -100, 20)  
    
    //eyebrows
    fill('black')
    ellipse(10, -120, 30, 20);
    ellipse(100, -125, 30, 20);
  
  
    //mouth
    stroke(0, 0, 90, 255)
    noFill()
    strokeWeight(8)
    arc(70, -35, 60, 40, 1/9, 3*PI/4);
    arc(125, -40, 60, 40, PI/3, 5*PI/6);
 
  
    //arms
    push();
      fill(230, 230, 250);
      noStroke()
      rotate(-PI/4);
      ellipse(-75, 0, 150, 30)
      rotate(PI/4)
      ellipse(180, 30, 150, 28)
    pop();
  pop();
}

function drawScene2(){
  image(beachScene2, 0, 0, 400, 400);
  image(palmtreeScene2, 0, 0, 400, 400);
  image(towelScene2, 0, 0, 400, 400);
  image(textboxScene2, 0, 0, 400, 400);
  image(pawprintsScene2, 0, 0, 400, 400);
  image(drinkScene2, 144, 18, 400, 400);

  
  // dog movement & rotation
  if (dogbodyClick == true){
      drawDog(150, 250, dogRotate);
      dogRotate = dogRotate - 0.1
    } else if (dogbodyClick == false) {
      drawDog(dogX, 250, -PI/30);
    dogX = dogX + 2;
      if (dogX > 150){
      dogX=150;
    } else if (pixelY == 187 && dogbodyClick ==true){
      drawDog(150, 250, dogRotate);
       // push();
       //  rotate(dogRotate);
       //  image(pixelSunglasses, -200, -100, 400, 400);
       // pop();
      dogRotate = dogRotate + 0.1;
    }
      
      
  // sunglasses movement 
  if (dogheadClick == true){
    image(pixelSunglasses, 35, pixelY, 400, 400);
        pixelY = pixelY +2;
    if (pixelY > 187){
      pixelY=187;
    }
  }
    
}
}

function mouseClicked(){
  if (scene == 1) {
  
  // arrow
    if (starclick == true && 
      mouseX < 300 &&
      mouseX > 203 &&
      mouseY < 380 &&
      mouseY > 348) {
       arrowclick = true
    }
    
    //octo bounding box
    if (mouseX < 300 && 
        mouseX > 230 && 
        mouseY < 330 && 
        mouseY > 250 ) {
          octoclicked = true
    }

  //cocunut bounding box
  if (mouseX < 350 && 
      mouseX >300 && 
      mouseY < 140 && 
      mouseY > 110) {
     coconutclick = true
  }

  //shell
  if (mouseX < 375 && 
      mouseX > 340 && 
      mouseY < 380 && 
      mouseY > 350) {
      shellclick = true
  }

  //donut 
  if (mouseX < 105 && 
      mouseX > 10 && 
      mouseY < 280 && 
      mouseY > 235 ) {
      donutclick = true
  }

  //starfish
  if (mouseX < 130 && 
      mouseX > 90 && 
      mouseY < 380 && 
      mouseY > 340) {
      starclick = true
  }

    //shark fin
    if (mouseX < 173 && 
        mouseX > 143 && 
        mouseY < 220 && 
        mouseY > 190 ) {
        finclick = true
    }

  }
  
  if (scene ==2 ){
    
    if (mouseX > 130 &&
        mouseX < 200 &&
        mouseY < 250 &&
        mouseY > 200){
        dogheadClick = true;
      }
 
    if (mouseX > 130 && 
        mouseX < 200 && 
        mouseY < 300 && 
        mouseY > 250 ) {
        dogbodyClick = !dogbodyClick;
    } 
  }
  
  
  //scene 0 --> scene 1
  if (scene == 0 &&
     mouseX > 105 &&
     mouseX < 380 &&
     mouseY > 285 &&
      mouseY < 348) {
    scene = 1;
  }
   

}
