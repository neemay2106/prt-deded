//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogIMAG,dogIMG;

function preload()
{
	dogIMG = loadImage("images/dogImg.png");
  dogIMAG = loadImage("images/dogImg1.png");                                

}

function setup() {
  database =  firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogIMG);
  dog.scale = 0.15;
  foodStock = database.ref('Food');
  foodstock.on("value",redStock);
  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW )){
    writeStock(foodS);
    dog.addImage(dogIMAG)
  }
  drawSprites();
  //add styles here
  fill(123,123,131);
  textSize(20);
  stroke("yellow");
  text("food remaining"+foodS,170,200);
  text("PressUparrow to feed drago milk",130,10,300,20);

}
function readStock(data){
  foods = data.val();

}
 function writeStock(x){
   if(x<=0){
    x = 0;
   }else{
     x = x-1
   }
   
  database.ref('/').update({
    food:x
  })
 }


