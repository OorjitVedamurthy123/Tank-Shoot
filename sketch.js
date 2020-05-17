const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var something;
var bullet;
var slingShot;

function setup(){
    var canvas = createCanvas(400,415);
   

    engine = Engine.create();
    world = engine.world;
    circle = new Ball(70,343,90); 
    bullet = new Ball2(115,325,1);
    
    box1 = new Box(70,400,120,40);
    box2 = new Box(70,381,120,40);
    something = new Box(115,325,80,20);
    console.log(bullet);
    
    ground = new Ground(200,height,400,20)
    slingShot = new SlingShot(bullet.body,{x:115,y:325});
   

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    circle.display();
   
    something.display();
    slingShot.display();
    

    keyPressed1();
    fill("orange");
    stroke("red");
    textSize(18.5);
    text("Press space to change the direction of the head",0,200);
    text("Press 1 to shoot",120,240);

}

function keyPressed1(){
    if(keyCode===49){
        
       
bullet.display();
bullet.radius = 20;

               
      }
      
}


function keyPressed(){
    if(keyCode===32){
    something.body.angle = something.body.angle - 0.13;
    }
}

function keyReleased(){
    if(keyCode===49){
   slingShot.fly();
    }

}
