function setup() {
  createCanvas(800,400);
 fixrect= createSprite(400, 200, 50, 50);
 moverect=createSprite(100,100,100,100)
 rect1=createSprite(200,200,50,50)
 rect2=createSprite(400,400,50,50)
 rect3=createSprite(50,50,40,80)
 rect4=createSprite(750,50,40,80)
 rect3.shapeColor='red'
 rect4.shapeColor='yellow'
 rect3.velocityX=5
 rect4.velocityX=-7
}

function draw() {
  background(0);  
  moverect.x=mouseX
  moverect.y=mouseY
  if(isTouching(rect1,moverect)){
    moverect.shapeColor='pink'
    rect1.shapeColor='pink'
  }
  else{
    moverect.shapeColor='green'
    rect1.shapeColor='green'
  }
  bounceOff(rect3,rect4)
  drawSprites();
}
