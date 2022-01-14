var acorns
var acornImg
var squirrel
var squirrelImg
var back
var bgImg

function preload(){
  acornImg = loadImage("acorn.png")
  squirrelImg = loadImage("squirrel.png")
  bgImg = loadImage("forest_background.jpg")
}

function setup() {
  createCanvas(1850,850);
  back = createSprite(925,425)
  back.addImage(bgImg)
  back.scale = 4

  squirrel = createSprite(925,750)
  squirrel.addImage(squirrelImg)

  
}

function draw() 
{
  background(30);
  if(keyDown("space")){
squirrel.velocityY = -10
  }
squirrel .velocityY = squirrel.velocityY+1

  spawnAcorns();
  drawSprites()
}
function spawnAcorns(){
  if(frameCount%100 == 0){
    var acorns = createSprite(200,10,50,50)
    acorns.addImage(acornImg)
    acorns.scale = .1
    acorns.x = Math.round(random(200,1600))
    acorns.velocityY = 4
  }
}

 

