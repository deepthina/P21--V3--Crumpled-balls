
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var ball;

var ground, leftWall, rightWall;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.03,
		friction: 0,
		density: 0.2
	}

	ball = Bodies.circle(100, 20, 20, ball_options);
	World.add(world, ball);


	ground = new Ground(600, 390, 1200, 20);
	leftWall = new Ground(600, 340, 20, 80);
	rightWall = new Ground(800, 340, 20, 80);



}


function draw() {

	background(0);

	Engine.update(engine);


	fill("pink");
	ellipse(ball.position.x, ball.position.y, 40, 40);

	ground.show();
	leftWall.show();
	rightWall.show();


}

function keyPressed() {

	if (keyCode === UP_ARROW)
		Body.applyForce(ball, { x: 0, y: 0 }, { x: 10, y: 10 });
}



