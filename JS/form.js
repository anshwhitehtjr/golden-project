class Form{
    constructor(){
        this.heading = createElement('h2');

        this.textBox = createInput(" name ");
    
        this.button = createButton("play");
        
    }

    hideAll() {
        this.heading.hide();
        this.textBox.hide();
        this.button.hide();
    }

    display() {

        this.heading.html("golden project");
        this.heading.position(window.innerWidth * 4.5/10, window.innerHeight / 5);

        this.textBox.position(window.innerWidth * 4.5/10, window.innerHeight / 2);

        this.button.position(window.innerWidth  * 4.8/10, window.innerHeight / 1.5);

        this.button.mousePressed(() => {
            this.hideAll();

            player.name = this.textBox.value();

            gameState = "search";
            spawnFood();
        }
      )
    }
}