var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale=0.5;
  climbersGroup=new Group()

}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
if (keyDown("left_arrow")){
   ghost.x = ghost.x -3; 
}

if (keyDown('right_arrow')){
  ghost.x = ghost.x +3;
}

if (keyDown("space")){
  ghost.y = ghost.y -4;
}

spawndoors()

if (climbersGroup.isTouching(ghost)){
  tower.velocityY=0;
}

    drawSprites()
}




function spawndoors(){

  if(frameCount%240==0){
    Number=Math.round(random(120,400));
    var door=createSprite(Number,100,50,50);
  door.addImage(doorImg);
  door.velocityY= +2
  var climber=createSprite(door.x,150,30,20);
  climber.addImage(climberImg);
  climber.velocityY = +2
  climbersGroup.add(climber);

  }

}
