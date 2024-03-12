//let timer = 0;
let sky,xmark, shell, octo, palm, coconut, starfish, textbox, sun, sharkfin, donut, sand, octoclicked=false, 
shellclick=false, 
finclick=false, 
donutclick=false, 
coconutclick=false,
starclick= false
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
}
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
scene2();
  
  }

  // if (timer > 60 && timer < 100) {
  //   text("Hi!", 200, 200);
  // }
  // timer++;


function scene2(){
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
}
function mouseClicked(){
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
  
}   

