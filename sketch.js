const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world, engine;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject1, rope1, rope2;
var bobDiameter = 40;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
  bobObject1 = new Bob(300, 400, 40);
  bobObject2 = new Bob(340, 400, 40);
  bobObject3 = new Bob(380, 400, 40);
  bobObject4 = new Bob(420, 400, 40);
  bobObject5 = new Bob(460, 400, 40);
  roofObject1 = new Roof(380, 200, 250, 20);
  rope1 = new Rope(bobObject1.body, roofObject1.body, -bobDiameter * 2, 0);
  rope2 = new Rope(bobObject2.body, roofObject1.body, -bobDiameter, 0);
  rope3 = new Rope(bobObject3.body, roofObject1.body, -bobDiameter + 20 * 2, 0);
  rope4 = new Rope(bobObject4.body, roofObject1.body, -bobDiameter + 40 * 2, 0);
  rope5 = new Rope(bobObject5.body, roofObject1.body, -bobDiameter + 60 * 2, 0);
  Engine.run(engine);
}

function draw() {
  background(255);
  rectMode(CENTER);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject1.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {
      x: -10,
      y: -10,
    });
  }
}
