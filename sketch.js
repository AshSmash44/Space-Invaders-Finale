var player,playerImg;
var enemyGroup;
var bulletGroup;
var bullet;
var line;
var enemy0,enemy1,enemy2,enemy3,enemy4,enemy5v6,enemy7,enemy8,enemy9;
var GAMEOVER = 2;
var BEFORE = 0;
var PLAY = 1
var gameState = BEFORE;


function preload(){
  playerImg = loadImage("images/player.png");
}

function setup() {
  createCanvas(300,400);
  player = createSprite(150,370,20,10);
  player.addImage(playerImg);
  player.scale = 0.05;
  line = createSprite(150,350,400,5);
  line.shapeColor = "lime"
  enemyGroup = new Group();
  enemy0 = createSprite(50,50,25,25);
  enemyGroup.add(enemy0);
  enemy0.shapeColor = "red";
  enemy1 = createSprite(80,50,25,25);
  enemyGroup.add(enemy1);
  enemy1.shapeColor = "red";
  enemy2 = createSprite(110,50,25,25);
  enemyGroup.add(enemy2);
  enemy2.shapeColor = "red";
  enemy3 = createSprite(140,50,25,25);
  enemyGroup.add(enemy3);
  enemy3.shapeColor = "red";
  enemy4 = createSprite(170,50,25,25);
  enemyGroup.add(enemy4);
  enemy4.shapeColor = "red";
  enemy5 = createSprite(200,50,25,25);
  enemyGroup.add(enemy5);
  enemy5.shapeColor = "red";
  enemy6 = createSprite(80,80,25,25);
  enemyGroup.add(enemy6);
  enemy6.shapeColor = "red";
  enemy7 = createSprite(110,80,25,25);
  enemyGroup.add(enemy7);
  enemy7.shapeColor = "red";
  enemy8 = createSprite(140,80,25,25);
  enemyGroup.add(enemy8);
  enemy8.shapeColor = "red";
  enemy9 = createSprite(170,80,25,25);
  enemyGroup.add(enemy9);
  enemy9.shapeColor = "red";
  bulletGroup = new Group();
  enemy0.velocityX = 2;
  enemy1.velocityX = 2;
  enemy2.velocityX = 2;
  enemy3.velocityX = 2;
  enemy4.velocityX = 2;
  enemy5.velocityX = 2;
  enemy6.velocityX = 2;
  enemy7.velocityX = 2;
  enemy8.velocityX = 2;
  enemy9.velocityX = 2;
}

function draw() {
  background(0,0,0); 
  if(frameCount === 40){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = -2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = -2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = -2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = -2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = -2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = -2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = -2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = -2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = -2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = -2
  }
  if(frameCount === 90){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = 2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = 2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = 2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = 2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = 2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = 2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = 2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = 2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = 2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = 2
  }
  if(frameCount === 140){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = -2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = -2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = -2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = -2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = -2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = -2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = -2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = -2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = -2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = -2
  }
  if(frameCount === 190){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = 2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = 2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = 2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = 2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = 2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = 2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = 2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = 2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = 2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = 2
  }
  if(frameCount === 240){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = -2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = -2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = -2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = -2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = -2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = -2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = -2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = -2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = -2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = -2
  }
  if(frameCount === 290){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = 2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = 2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = 2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = 2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = 2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = 2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = 2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = 2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = 2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = 2
  }
  if(frameCount === 340){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = -2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = -2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = -2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = -2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = -2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = -2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = -2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = -2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = -2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = -2
  }
  if(frameCount === 390){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = 2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = 2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = 2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = 2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = 2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = 2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = 2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = 2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = 2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = 2
  }
  if(frameCount === 440){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = -2
    enemy1.y = enemy1.y+30
    enemy1.velocityX = -2
    enemy2.y = enemy2.y+30
    enemy2.velocityX = -2
    enemy3.y = enemy3.y+30
    enemy3.velocityX = -2
    enemy4.y = enemy4.y+30
    enemy4.velocityX = -2
    enemy5.y = enemy5.y+30
    enemy5.velocityX = -2
    enemy6.y = enemy6.y+30
    enemy6.velocityX = -2
    enemy7.y = enemy7.y+30
    enemy7.velocityX = -2
    enemy8.y = enemy8.y+30
    enemy8.velocityX = -2
    enemy9.y = enemy9.y+30
    enemy9.velocityX = -2
  }
  if(frameCount === 490){
    enemy0.y = enemy0.y+30
    enemy0.velocityX = 0
    enemy1.y = enemy1.y+30
    enemy1.velocityX = 0
    enemy2.y = enemy2.y+30
    enemy2.velocityX = 0
    enemy3.y = enemy3.y+30
    enemy3.velocityX = 0
    enemy4.y = enemy4.y+30
    enemy4.velocityX = 0
    enemy5.y = enemy5.y+30
    enemy5.velocityX = 0
    enemy6.y = enemy6.y+30
    enemy6.velocityX = 0
    enemy7.y = enemy7.y+30
    enemy7.velocityX = 0
    enemy8.y = enemy8.y+30
    enemy8.velocityX = 0
    enemy9.y = enemy9.y+30
    enemy9.velocityX = 0
    gameState = GAMEOVER
  }
  if(keyWentDown(LEFT_ARROW) && player.x >= 50){
    player.x = player.x - 25;
  }
  if(keyWentDown(RIGHT_ARROW) && player.x <= 250){
    player.x = player.x + 25;
  }
  if(keyWentDown(32)){
    spawnBullet();
  }
  if(bulletGroup.isTouching(enemy0)){
    enemy0.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy1)){
    enemy1.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy2)){
    enemy2.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy3)){
    enemy3.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy4)){
    enemy4.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy5)){
    enemy5.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy6)){
    enemy6.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy7)){
    enemy7.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy8)){
    enemy8.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  if(bulletGroup.isTouching(enemy9)){
    enemy9.lifetime=0;
    bulletGroup.setLifetimeEach(0);
  }
  drawSprites();
}
function spawnBullet(){
  bullet = createSprite(player.x,player.y,2,4);
  bullet.velocityY = -5;
  bulletGroup.add(bullet);
  bullet.shapeColor = "lime"
  bullet.lifetime = 300;

}
