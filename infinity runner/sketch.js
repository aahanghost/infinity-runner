var sea,bird,shark,pirahna,ufo,score,treasure,coin,water,air,airs;
var seaImg,birdImg,sharkImg,crabImg,ufoImg,treasureImg,coinImg,pirahnaImg;


function preload(){
seaImg = loadImage("image.png");
sharkImg = loadImage("shark.png");
crabImg = loadImage("crab.png");
ufoImg = loadImage("ufo.png");
treasureImg = loadImage("treasure.png")
coinImg = loadImage("coin.png");
birdImg = loadImage("bird.png");
pirahnaImg = loadImage("piranha.png")
}

function setup() {
  createCanvas(1200,600);

  score = 0;

  sea = createSprite(600,300,1200,600);
  sea.addImage(seaImg)
  sea.scale = 4
  sea.velocityX = -7

treasure = createSprite(random(1000,500),random(20,500),50,30)
treasure.addImage(treasureImg)
treasure.scale = 0.4
treasure.velocityX = -7
   
crab = createSprite(random(windowWidth/2,windowWidth/1.5),450,50,20);
crab.addImage(crabImg)
crab.scale = 0.3

shark = createSprite(windowWidth/15,450,60,30)
shark.addImage(sharkImg)
shark.scale = 0.7

ufo = createSprite(windowWidth/3.25,400,50,30)
ufo.addImage(ufoImg)
ufo.scale = 0.8

water = createSprite(600,490,windowWidth,10);
airs = createSprite(600,0,windowWidth,10);
air = createSprite(600,300,windowWidth,10);

coin = createSprite(random(1000,500),random(20,500),20,20);
coin.addImage(coinImg)
coin.scale = 0.2
coin.velocityX = -7;



pirahna = createSprite(random(windowWidth/2,windowWidth/1.5),random(400,300),50,20);
pirahna.addImage(pirahnaImg)
pirahna.scale = 0.3
pirahna.velocityY = -7
pirahna.velocityX = -1

rand = Math.round(random(1,20))

}

function draw() {
background(0)

textSize(20);
text("Score: "+ score, 1200,15);

if (sea.x < 0){
  sea.x = sea.width/2 
}

if(keyDown(UP_ARROW)){
  ufo.y = ufo.y-7
}
if(keyDown(DOWN_ARROW)){
  ufo.y = ufo.y+7
}

pirahna.bounceOff(air)
pirahna.bounceOff(water)
//pirahna.bounceOff(bird)


crab.collide(water)
//crab.bounceOff(bird)
crab.bounceOff(pirahna)

shark.depth = crab.depth
shark.depth +=1

shark.depth = pirahna.depth
shark.depth +=1



shark.depth = treasure.depth
shark.depth +=1


  drawSprites();
}

function spawnCoins(){
  if(frameCount % 40 === 0){
  coin = createSprite(random(480,1000),random(20,500),20,20);
  coin.y = Math.round(random(10,40));
  coin.addImage(coinImg)
  coin.scale = 0.2
  coin.velocityX = -7

  shark.depth = coin.depth
  shark.depth +=1

  coin.depth = ufo.depth
  ufo.depth +=1

  coinsGroup.add(coin)
  }
  }



  function spawnBirds(){
    if (frameCount % 20 === 0){
      bird = createSprite(random(250,250),400,50,300)
      bird.velocityX = -4
      bird.addImage(pillarImg)
  
      rand = Math.round(random(1,20))
  
      bird.depth = pillarb.depth
      bird.depth = bird.depth+1
  
      bird.lifetime =  100

      bird.bounceOff(airs)
bird.bounceOff(air)

    }
  }
  
  bird = createSprite(random(windowWidth/2,windowWidth/1.5),random(50,100),50,20);
  bird.addImage(birdImg)
  bird.scale = 0.5
  bird.velocityY = 7
  bird.velocityX = -2
  shark.depth = bird.depth
shark.depth +=1

  //spawnCrabs();
//spawnPirahnas();
//spawnCoins();
//spawnTreasures();
//spawnBirds();

//var crabsGroup,pirahnasGroup,coinsGroup,treasuresGroup,birdsGroup;

//crabsGroup = createGroup();
//pirahnasGroup = createGroup();
//coinsGroup = createGroup();
//treasuresGroup = createGroup();
//birdsGroup = createGroup();
