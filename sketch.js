
var wall;
var bullet;
var speed;
var weight;
var thickness;

function setup() {
 
 createCanvas(1370,650);
  
 bullet=createSprite(30,300,50,10);
 bullet.shapeColor='white';
  
 wall=createSprite(1250,300,thickness,height/2);
 wall.shapeColor=color(80,80,80);
 wall.shapeColor=color(80,80,80);

 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);

 bullet.velocityX=speed;

}

function draw() {
  
 background('black');  

 if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  bullet.x=wall.x-75;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
   wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
   wall.shapeColor=color(0,255,0);
  }
 }
 
 drawSprites();

}
