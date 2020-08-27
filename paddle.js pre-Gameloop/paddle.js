export default class Paddle{

    constructor(gamewidth, gameHeight) {

        this.width = 150;
        this.height = 30;

        this.position = {
            //x = gamewidth/2 takes the leftmost part of the paddle and places
            //it at the centre of the canvas, which has (0, 0) at the TOP LEFT

            //The expression -width/2 moves the paddle to the left
            //by half it's width from the centre  i.e. It places the centre
            //of the paddle at the centre of the canvas
            x:  gamewidth / 2 - width/2,
            y: gameHeight - this.height - 10,
        };

        
    }

     draw(ctx) {
        ctx.fillStyle = '#0ff';

        ctx.fillRect(this.position.x, this.position.y.this.width, this.height);
    }

}

