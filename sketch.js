const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ball,ground;









function setup() {
  createCanvas(800,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var g1={
isStatic:true
  }

  ground=Bodies.rectangle(400,400,800,20,g1);

  World.add(myWorld,ground);

  var b1={
    restitution:1.0
  }

  ball=Bodies.circle(200,200,30,b1);

  World.add(myWorld,ball);
}

function draw() {
  background(255,255,255);  

  Engine.update(myEngine);
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y,800,20);
  
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,30,30);
}