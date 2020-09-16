const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine, world;

var paperObject;
var groundObject;

var dustbinObject;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;


	paperObject = new paperClass(100, 100, 40);
	groundObject = new groundClass(370, width / 2, width, 20);
	dustbinObject = new dustbin(700, 380);

	Engine.run(engine);

}


function draw() {
	background(100, 200, 300);

	Engine.update(engine);

	paperObject.display();
	groundObject.display();
	dustbinObject.display();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 50, y: - 80 });
	}
}