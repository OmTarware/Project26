
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

	//Create the Bodies Here.
	
	Paper1 = new Paper(40,645,40)
	Ground1 = new Ground(0,650,1600,10)
	Dustbin1 = new Dustbin(550,580,10,100)
	Dustbin2 = new Dustbin(620,630,150,10)
	Dustbin3 = new Dustbin(690,575,10,100)


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  


  Paper1.display();
  Ground1.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();


  

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:250,y:-250});
	}

}

