const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var engine,world;
var backImg
var ground,character,snow=[];

function preload(){
  
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;



  ground = new Ground(400,400,10,10);
  character = new Character(300,300,10,10);

  setInterval(clearingSnow, 20000);


}

function draw() {
  background(255,255,255);
  background(backgroundImg); 

  fill("orange");
  character.display();
  
  drawSprites();
  
  Engine.update(engine);
  
  character.display();  
  if(frameCount%60==0){
    snow.push(new Snow(random(50, 350), 0, 50, 50));
  }

  for (var i = 0; i<snow.length; i++){
    snow[i].display();
  }
}

function keyPressed(){
  if (keyCode == 32){
    // to jump the character
    Matter.Body.applyForce(character.body, character.body.position, {x:0, y:-1});
    console.log(character.body.speed);
  }
}

function clearingSnow(){
  snow = [];
  console.log("clearSnow function is executed");

}