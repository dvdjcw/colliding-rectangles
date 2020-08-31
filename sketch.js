var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 50);
  fixedrect.shapeColor="green";
  fixedrect.debug = true;
  movingrect=createSprite(400,200,80,40);
  movingrect.shapeColor="green";
  movingrect.debug=true;
  
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;  
  drawSprites();
}