var ball,img,paddle;
var ball_img, paddle_img;
var edges;

function preload() {
 ball_img = loadImage("ball.png");
 paddle_img = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  paddle = createSprite(350,200,10,70);
  paddle.addAnimation("pads",paddle_img);
  
  ball = createSprite(200,200,10,10);
  ball.addAnimation("bals", ball_img);
  
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);

  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  if(ball.bounceOff(paddle)) {
    randomVelocity();
  }

  paddle.collide(edges) ;
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y = paddle.y + 20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY = random(-8,8);
}

 