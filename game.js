'use strict';

function Game(canvas, gameEndHandler) {
    this.ctx = canvas.getContext('2d');
    this.player = new Player(canvas);
    this.enemy = new Enemy(canvas);
    this.platform = new Platform(canvas);
    this.gameEndHandler = gameEndHandler;
    this.loopId;
}

    Game.prototype.updateGame = function(){

    }

    Game.prototype.clearCanvas = function(){

    }

    Game.prototype.drawCanvas = function(){
        this.player.draw();
        this.enemy.draw();
        this.platform.draw();

    }

    Game.prototype.gameEnd = function(){
        window.cancelAnimationFrame(this.loopId);
    }

    Game.prototype.start = function() {
        function loop() {
            this.drawCanvas();
            this.animation = window.requestAnimationFrame(loop.bind(this));
        }
    
        this.animation = window.requestAnimationFrame(loop.bind(this));
    }