var wall, thickness;
var bullet, speed, weight;
 
function setup(){

  createCanvas(1500,400);

speed = random(223, 321)
weight = random(30, 52)
thickness= random(22, 80)

  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(50,200,50,50);
  wall.shapeColor = color(80,80,80);
  bullet.ShapeColor = color(255);
  bullet.velocityX = speed;
  
}


function draw() {
  background(0);  

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(damage>10)
    {
      wall.shapeColor = color(245, 0, 0);
    }
    if(damage<=10)
    {
      wall.shapeColor = color(0, 255, 0);
    }

  drawSprites();
}


function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;

 
}
}
