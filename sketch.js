const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var ball1,ball2,ball3,ball4,ball5;

var holder,holder2,holder3,holder4,holder5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

 
	engine = Engine.create();
  world = engine.world;
    
  Engine.run(engine);
  
  ball1 = new Cradle(600,400,20);
  ball2 = new Cradle(557,400,20);
  ball3 = new Cradle(515,400,20);
  ball4 = new Cradle(473,400,20);
  ball5 = new Cradle(432,400,20);
    
  roof = new Roof(600,100,500,25);

  holder2 = new Holder(ball1.body,roof.body,40,0);
  holder = new Holder(ball2.body,roof.body,0,0);
  holder3 = new Holder(ball3.body,roof.body,-40,0);	
  holder4 = new Holder(ball4.body,roof.body,-80,0);
  holder5 = new Holder(ball5.body,roof.body,-120,0);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  holder.display();
  holder2.display();
  holder3.display();
  holder4.display();
  holder5.display();

  roof.display();
  
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball5.body,ball5.body.position,{x : 45, y : 20});
  }
}



