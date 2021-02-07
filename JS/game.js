class Game {
    constructor() {
        this.arrow = createSprite(0,0);
    }

    start() {
        player = new Player();
        form = new Form();
        form.display();
    }

    searchFood() {

        background(bg_img1);
        textSize(30);
        text("Health: " + health, width/2+50, 70);
        for (var item in food) {

            if (food[item].sprite.isTouching(player.sprite) && keyDown("space") && food[item].collide == false) {
                food[item].sprite.visible = true;
                currentFood = item;
                food[item].collide = true;
                
                setTimeout(() => {
                        console.log(currentFood);
                        food[currentFood].sprite.remove();
                        food.splice(currentFood , 1);
                        console.log(food);

                } , 2000);

            }else{
                if(timerValue == 0){
                    health -= 5;
                    timerValue = 10;
                }
            }
            
        }

        

        drawSprites();        

    }

    fightEnemy() {

    }

    end() {

    }

}