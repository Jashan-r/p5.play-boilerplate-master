function setup() {
  createCanvas(800,400);
  a = createSprite(200, 200, 50, 50);
  b = createSprite(100, 200, 50, 50);
  a.shapeColor = "green";
  b.shapeColor = "green"; 

}

function draw() {
  background(255,255,255);  
 // console.log(mouseY) ;
  a.x = mouseX ; 
  a.y = mouseY ;

  if(mouseX = 125){
    a.shapeColor = "red";
    b.shapeColor = "red"; 
  }

  if(mouseY = 75){
    a.shapeColor = "red";
    b.shapeColor = "red"; 
  }

  else{
    a.shapeColor = "green";
    b.shapeColor = "green"; 
  }
  drawSprites();
}