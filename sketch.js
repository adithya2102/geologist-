
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var base;
var hammer;
var rubber;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
      

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     base = new Base (600,height,1200,20);
	hammer = new Hammer(800,330,50,100);
	rubber = new Rubber (450,350,50,50);

	Engine.run(engine);
  
}


function draw() {
 
  background("lightBlue");
 Engine.update(engine);

 hammer.display();
  base.display();
  rubber.display();
  
  drawSprites();
}



