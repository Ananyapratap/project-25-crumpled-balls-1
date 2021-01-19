const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)
	
engine = Engine.create();
	world = engine.world;
 
  paperObject = new Paper(200,450,40);
groundObject = new ground(width/2,670, width,20 );
dustbinobj = new dustbin(1200,650);
Engine.run(engine);

}
function draw() {
   rectMode(CENTER)
 background("black"); 
    paperObject.display();
 groundObject.display();
 dustbinobj.display();

 
 

}

function keyPressed() {
  if (keyCode === UP_ARROW){

	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:299,y:-299}); 
  }

}











