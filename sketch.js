var bullet, speed, weight;
var wall, thickness;
var damage;
function setup() {
  createCanvas(1650,400);
  
  speed = Math.round(random(223,321));
  weight =Math.round(random(30, 52));
  thickness = Math.round(random(22,83))

  bullet = createSprite(50,200,50,20);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");
    
  wall = createSprite(1500, 200, thickness, height/2);


 
}

function draw() {
  background("black"); 

  text("speed: " + speed, 100, 100);
  text("weight: " + weight, 100, 80);
  
  wall.depth = bullet.depth
  bullet.depth = bullet.depth + 1
  console.log(hasCollided);

  bullet.debug = true;
  wall.debug = true;

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness)
   
    if(damage <= 10){
    bullet.shapeColor = "green";
    }
    
    if(damage > 10){
    bullet.shapeColor = "red";
      }
    }

  drawSprites();
}