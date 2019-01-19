'use strict';

function Game(canvas, gameEndHandler) {
    this.ctx = canvas.getContext('2d');
    this.player = new Player(canvas);
    this.enemy = [];
    this.platform = new Platform(canvas);
    this.gameEndHandler = gameEndHandler;
    this.loopId;
}

    Game.prototype.updateGame = function() {
        // this.player.update();
        this.createEnemy();
        this.enemy.forEach(function(item) {
            item.update();
        });
    }

    Game.prototype.createEnemy = function() {
        if (Math.random() > 0.99) {
            this.enemy.push(new Enemy(canvas));
        }
    }

    Game.prototype.clearCanvas = function(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    Game.prototype.drawCanvas = function(){
        this.enemy.forEach(function(item) {
            item.draw();
        });
        this.player.draw();
        this.platform.draw();
    }

    Game.prototype.gameEnd = function(){
        window.cancelAnimationFrame(this.loopId);
    }

    Game.prototype.start = function() {
        function loop() {
            this.updateGame();
            this.clearCanvas();
            this.drawCanvas();
            this.animation = window.requestAnimationFrame(loop.bind(this));
        }
        this.animation = window.requestAnimationFrame(loop.bind(this));
    }