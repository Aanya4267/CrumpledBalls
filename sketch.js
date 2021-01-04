
var ground1,dus1,dus2,dus3,paperball; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	dus1= new dustbin (20,100,900,600,);
	dus2= new dustbin (20,100,700,600);
	dus3= new dustbin (200,20,800,630);
	paperball= new paper (200,300,10,10);
	ground1 = new ground(width/2,650,width,20);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 dus1.display();
 dus2.display();
 dus3.display();
 paperball.display();
 ground1.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:12,y:-20});
	}
}

