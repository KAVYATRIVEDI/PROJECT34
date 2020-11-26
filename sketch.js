var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
dog=loadImage ("images/dogImg.png");
dogHappy=loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog1=createSprite(250,250,20,20);
  dog1.addImage(dog);
  dog1.scale=0.15;
}


function draw() {  
background(49,137,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog1.addImage(dogHappy);
}
text("Food remaining:" + foodS,100,100)

  drawSprites();
  

}
function writeStock(x){
if(x<0){
x=0;
}
else{
  x=x-1;
}
database.ref('/').update({
  Food:x
})
}
function readStock(data){
  foodS=data.val()
}


