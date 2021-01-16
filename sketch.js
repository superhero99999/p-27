
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball1,ball2,ball3,ball4,ball5,stand;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
stand=new Ground(600,150,350,20)
ball1=new Ball(600,450,50)
chain1=new Chain(ball1.body,stand.body,0,0)
ball2=new Ball(650,450,50)
chain2=new Chain(ball2.body,stand.body,50,0)
ball3=new Ball(700,450,50)
chain3=new Chain(ball3.body,stand.body,100,0)
ball4=new Ball(500,450,50)
chain4=new Chain(ball4.body,stand.body,-100,0)
ball5=new Ball(550,450,50)
chain5=new Chain(ball5.body,stand.body,-50,0)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
 stand.display()
 ball1.display()
 chain1.display()
 ball2.display()
 chain2.display()
 ball3.display()
 chain3.display()
 ball4.display()
 chain4.display()
 ball5.display()
 chain5.display()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball4.body,ball4.body.position,{x:-50,y:-50})
	}
}


