var bgimg,z1,z2,z3,z4,p1,z1img,z2img,z3img,z4img,p1img
function preload(){
z1img=loadAnimation("backzombie/z1.png","backzombie/z2.png","backzombie/z3.png","backzombie/z4.png")
z2img=loadAnimation("bigzombie/z1.png","bigzombie/z2.png","bigzombie/z3.png","bigzombie/z4.png","bigzombie/z6.png")
z3img=loadAnimation("kidzombie2/z1.png","kidzombie2/z2.png","kidzombie2/z3.png","kidzombie2/z4.png")
p1img=loadAnimation("player/p1.png","player/p2.png","player/p3.png","player/p4.png")
bgimg=loadImage("maxresdefault.jpg")
bimg=loadImage("ghar.png")
}
function setup(){
createCanvas(displayWidth,displayHeight)
b=createSprite(40,displayHeight-170,40,120)
b.scale=2.5
b.addImage("building",bimg)
p=createSprite(200,displayHeight-200,40,100)

p.addAnimation("player",p1img)
}
function draw(){
background(bgimg)
drawSprites();
}