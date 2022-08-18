var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}

	//Create the Bodies Here.
	ball=Bodies.circle(200,10,30,ballOptions)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
if(keycode === UP_ARROW) {

function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	
	
	
	
	
	
	
	
	}
	

	
	function vforce(){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
	  
	  
	  
	  
	  
	  
	  
	  
	  }
	}
}