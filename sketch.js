var game, gameState, player, enemy;
var form;
var bg_img1,bossBattleImage,ground;
var food, currentFood;
var timerValue = 10;
var health = 100;

function preload() {

    bg_img1 = loadImage("images/bg1.jpg");
    bossBattleImage = loadImage("images/BossBattleImage.jpg");

}

function setup() {

    setInterval(timeController, 1000);
    
    text("This is a text" ,window.innerWidth/2, window.innerHeight/2);

    createCanvas(window.innerWidth, window.innerHeight);

    food = [];
    
    ground = createSprite(innerWidth/2 ,innerHeight * 9.5/10, innerWidth, 10);
    ground.visible = false;

    gameState = "wait";
    game = new Game();
    game.start();

}

function draw() {


    if (gameState != "wait") {
        player.display();
    }

    if (gameState === "search") {

        game.searchFood();
        textSize(30);

    
    if (timerValue >= 10) {
        text("0:" + timerValue, width/2, 50);
        console.log(timerValue);
    }

    if (timerValue <= 10) {
        text("0:" + timerValue, width/2, 50);
    }

    if (timerValue == 0) {
        text("GameOver", width/2, 70);
    }
        console.log(timerValue);

  }

    
}

function spawnFood() {
    for (var index = 1; index <= 5; index++) {
        food.push(new Food(index * innerWidth/6 ,player.sprite.y));
    }

    // if (frameCount %100 === 0){
    //     food.push(new Food(random(200, window.innerWidth - 200), player.sprite.y));
    //     console.log("Working");
    // }
}

function timeController(){
    if (timerValue > 0) {
        timerValue--;
    }
}