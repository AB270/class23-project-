const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var block1,ground,block2,block3,block4,block5,block6,tri1;
var design,design2,design3,design4,window1,window2,window3,window4;

function setup() {


  createCanvas(800,800);
  design=createSprite(380,410,300,20);
  design.shapeColor="yellow";
  design2=createSprite(380,239,200,20);
  design2.shapeColor="yellow";
  design3=createSprite(189,339,100,20);
  design3.shapeColor="yellow";
  design4=createSprite(571,339,100,20);
  design4.shapeColor="yellow";
  window1=createSprite(380,350,30,30);
  window1.shapeColor="turquoise";
  window2=createSprite(380,300,30,30);
  window2.shapeColor="turquoise";
  window3=createSprite(190,400,30,30);
  window3.shapeColor="turquoise";
  window4=createSprite(570,400,30,30);
  window4.shapeColor="turquoise";
    
    engine = Engine.create();
    world = engine.world;

    block1=new Block(380,500,300,200);
    block2=new Block(380,325,130,150);
    //tri1=new Triangle();
    block3=new Block(189,475,80,250);
    block4=new Block(571,475,80,250);

   

}

function draw() {
 
  background("skyblue");  
  Engine.update(engine);
  block1.display();
  block2.display();
  //tri1.display();
  block3.display();
  block4.display();
  arc(380,590,189,175,182,5);
 
  drawSprites();
}