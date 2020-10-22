//Create variables here
var dog1,dog2;
var food,foodStock;
var database;
var dog;
var x;
function preload()
{
  //load images here
  dog1=loadImage("dogImg.png");
  dog2=loadImage("dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.addImage(dog1);
  dog.scale=0.25;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(food);
dog.addImage(dog2);
//text("Good job!",250,250);
}  

drawSprites();
fill("black");
textSize(20);
text("food="+food,200,400);
text("Press the up arrow key to feed this dog",100,100);
  //add styles here

}
function readStock(data){
  food=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
     Food:x 
  })
  
}




