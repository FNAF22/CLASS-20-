var f,m

function setup() {
  createCanvas(800,400);
 f =  createSprite(400, 50, 50, 50);
 f.shapeColor = "purple"
 m = createSprite (400,50,50,50);
 m.shapeColor = "white"

}

function draw() {
  background(0); 
  m.x = mouseX
  m.y = mouseY
  if(m.x - f.x <f.width/2+ m.width/2
    &&  f.x - m.x <f.width/2+ m.width/2
    &&  m.y - f.y <f.width/2+ m.width/2
    &&  f.y - m.y <f.width/2+ m.width/2){

    f.shapeColor = "purple"
    m.shapeColor = "purple"
  }
  else{
 f.shapeColor = "yellow"   
 m.shapeColor = "yellow"
  }
  drawSprites();
}
