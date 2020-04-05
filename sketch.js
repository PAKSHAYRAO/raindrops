function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 10, 50);
  createSprite(100, 100, 10, 50);
  createSprite(300, 300, 10, 50);
  createSprite(400, 300, 10, 50);
  createSprite(200, 200, 10, 50);
  createSprite(50, 200, 10, 50);
  createSprite(10, 200, 10, 50);
  createSprite(150, 300, 10, 50);
  createSprite(100, 20, 10, 50);
  createSprite(150, 100, 10, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}