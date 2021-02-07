class Player {
    constructor() {
        this.sprite = createSprite(windowWidth * 2 / 10, windowHeight * 9 / 10);
        this.sprite.shapeColor = "blue";
        this.health = 100;
        this.status = "normal";
        this.name = null;
    }

    display() {

        this.sprite.velocityY += 0.8;
        // this.sprite.collide(ground);

        if (this.sprite.collide(ground) && keyDown(UP_ARROW)) {
            this.sprite.velocityY = -10;
        }

        if (keyDown(RIGHT_ARROW)) {
            this.sprite.x += 5;
        }

        if (keyDown(LEFT_ARROW)) {
            this.sprite.x += -5;
        }

        // if (keyDown(DOWN_ARROW)) {
        //     this.sprite.y += 5;
        // }
    }
}