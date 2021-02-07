
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy,s;
var elastic;

function preload(){
	boy=loadImage("images/boy.png");
	s=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1080,180,30);
	mango2=new mango(1000,75,30);
	mango3=new mango(1190,175,30);
	mango4=new mango(900,200,30);
	mango5=new mango(1150,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stoneObj = new Stone(240,415,30,30);
  elastic = new Elastic(stoneObj.body,{x:240,y:415});
	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  elastic.display();
  
  
  groundObject.display();
}


function  mouseDragged(){ 
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function  mouseReleased(){
  elastic.w();
}