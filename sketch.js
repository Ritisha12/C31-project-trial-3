const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//arrays start
var particles=[]
var plinkos=[]
var divisions=[]
 

var engine,world
var ground
var divisionHeight=300




function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(240,740,480,20)
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,75,10))
}
for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinkos(j,175,10))
}
if(frameCount%90===0){
    particles.push(new Particles(random(width/2-10,width,2+10),10,10))
}
for(k=0;k<width;k=k+80){
divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}
  //divisions=new Divisions(40,580,10,300)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  for(var j=0;j<particles.length;j++){
  particles[j].display()
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display()
  }
  for(var p=0;p<plinkos.length;p++){
    plinkos[p].display()
  }
  
  ground.display() 
  //divisions.display()
  drawSprites();
}