const Engine = Matter.Engine; 
const World = Matter.World;
 const Bodies = Matter.Bodies;
  var engine,world,body;
  var box1, box2,box3,box4,pig1,pig2; 
  var ground1
  var log1,log2
  function setup(){ 
      createCanvas(400,400);
 engine = Engine.create(); 
 world = engine.world;
box1 = new box(200,350,50,50)
box2 =  new box(300, 350,50,50)
pig1 = new pig(250,350,30,30)
ground1 = new ground(200, 380, 400, 10)
log1 = new log(250,300,180,PI/2)
box3 = new box(200,250,50,50)
box4 = new box(300,250,50,50)
pig2 = new pig(250,250,30,30)
log2 = new log(250,200,180,PI/2)
 } 

 function draw(){
      background("orange");
      Engine.update(engine)
 box1.display()
 box2.display()
 pig1.display()
 ground1.display()
 log1.display()
 box3.display()
 box4.display()
 pig2.display()
 log2.display()
}