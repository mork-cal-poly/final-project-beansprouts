//let timer = 0;
let sky, xmark, shell, octo, palm, coconut, starfish, textbox, sun, sharkfin, donut, sand, octoclicked=false, 
shellclick=false, 
finclick=false, 
donutclick=false, 
coconutclick=false,
starclick= false,
arrowclick =false
let ready
let scene=0;

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
  wingGlasses=loadImage ('src/WingGlasses.png');
  lipGlasses=loadImage ('src/LipGlasses.png');
  divaGlasses=loadImage ('src/DivaGlasses.png');
  ready = loadImage('assets/finalproject_scene1.png');
}
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  //scene 0 --> 1
  if (scene == 0){
    drawScene0();
  } else if (scene == 1) {
    drawScene1();
  }
  //scene 1
scene1();

backgroundScene2();
  sunglasses();
  
  }
  function drawScene0() {
    background(255);
    image(ready, 0, 0, 400, 400);
  
    describe('game ready screen titled "Find Spot, ready?, click here to start"');
  }

  // if (timer > 60 && timer < 100) {
  //   text("Hi!", 200, 200);
  // }
  // timer++;


function scene1(){
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
  image(arrow, 0, 0, 400, 400)
  }
  if (arrowclick == true){
    scene++;
  }
}

// SCENE 2 BELOW 

function backgroundScene2(){
  image(beachScene2, 0, 0);
  image(palmtreeScene2, 0, 0);
  image(towelScene2, 0, 0);
  image(textboxScene2, 0, 0);
  image(pawprintsScene2, 0, 0);
  image(drinkScene2, 0, 0);
}

function sunglasses(){
  image(pixelSunglasses, 130, 210);

}



function mouseClicked(){
  //scene 0 --> scene 1
  if (scene == 0 &&
     mouseX > 105 &&
     mouseX < 380 &&
     mouseY > 285 &&
      mouseY < 348) {
    scene = 1;
  }

  //octo bounding box
  if (mouseX < 300 && 
      mouseX > 230 && 
      mouseY < 330 && 
      mouseY > 250 )
    octoclicked = true
  //cocunut bounding box
  if (mouseX < 350 && 
      mouseX >300 && 
      mouseY < 140 && 
      mouseY > 110)
 coconutclick = true
  //shell
  if (mouseX < 375 && 
      mouseX > 340 && 
      mouseY < 380 && 
      mouseY > 350)
  shellclick = true
  //donut 
  if (mouseX < 105 && 
      mouseX > 10 && 
      mouseY < 280 && 
      mouseY > 235 )
  donutclick = true
  //starfish
  if (mouseX < 130 && 
      mouseX > 90 && 
      mouseY < 380 && 
      mouseY > 340)
  starclick = true
  //shark fin
  if (mouseX < 173 && 
      mouseX > 143 && 
      mouseY < 220 && 
      mouseY > 190 )
  finclick = true
  // arrow
  if (mouseX < 300 &&
    mouseX > 203 &&
    mouseY < 380 &&
    mouseY > 348)
    arrowclick = true
  
}   
