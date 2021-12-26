
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball,ground,rock,wall;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ball_options={
    restitution:1,
    frictionAir:0.01
  }
  ball=Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(0,390,400,20,ground_options);
  World.add(world,ground);

  var rock_options={
    restitution:0.8
  }
  rock=Bodies.circle(250,20,20,rock_options);
  World.add(world,rock);

  
  wall=Bodies.rectangle(200,200,200,20,ground_options);
  World.add(world,wall);

}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,200,20);
}

