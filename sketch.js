var score = 0;
const A =["Blue", "Tesla","Encube","Donal Trump","Maharashtra","Ganga"];
const B = ["Pink","Ford","Serrum Institute of India","Barak Obama","Madhya Pradesh","Bramhaputra"];
const C = ["Yellow","Ferrari","Sun Pharma","John F. Kennedy","Uttar Pradesh","Godavari"];
const D = ["Red","BMW","Cipla","Joe Biden","TamilNadu","Indus" ];
const Question = ["What is Kavish's favourite color?", "What is Kavish's favourite car?", " Name the World's Largest Producing Vaccines Company ?","Who Is The Current President of USA","Which State is the most populated state India?","Which is longest river in India "];
const Solution = ["A","C","B","D","C","D"];
var level1,level2,level3,level4,level5; 
var backImg;
var questiback;
var visibility = 255;
var count = 0;
var form;
var gameState = 0;
var backImg2;
var obj;
var result;
var correctImg;
var wrongImg;



function preload()
{
	backImg1 = loadImage("Quizimage.png");
	img = loadImage("apple.png");
	questiback = loadImage("questionimage.png")
	backImg2 = loadImage("backImage2.png")
	correctImg = loadImage("that'sright.png");
	wrongImg = loadImage("try-again.png");
}

function setup() {
	createCanvas(800, 700);

	result = createSprite(350,550)
    result.visible = false;
	 form = new Form();
	 
}

function draw() {
textSize(20);
fill("black");
strokeWeight(4)

switch(gameState){
case 0 : background(backImg1);
break;
case 1 : background(backImg2);
text(Question[count], 100,100);
}


mystery();
form.display();


drawSprites();
stroke("red")
strokeWeight(2)
text("Score " + score,700,50);
}

function mystery(){
	if(visibility<0)
	visibility = 255;
	visibility = visibility - 5;
	tint(255,visibility);
	image(img,Math.random(100,500),Math.random(100,500));	
}

async function timer(){



}


