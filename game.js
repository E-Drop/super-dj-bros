'use strict';
function Game(canvas, gameEndHandler) {
    this.ctx = canvas.getContext('2d');
    this.player = new Player(canvas);
    this.enemy = [];
    this.platform = [];
    this.gameEndHandler = gameEndHandler;
    this.loopId;
    this.keyLeft = false;
    this.keyRight = false;
}
Game.prototype.updateGame = function() {
    // this.player.update();
    this.createEnemy();
    this.player.update();
    this.enemy = this.enemy.filter(function(enemy) {
        return enemy.isAlive();
    });
    this.enemy.forEach(function(item) {
        item.update();
        if(this.player.checkCollideWithEnemy(item) === "d"){
            item.die();
        }else if (this.player.checkCollideWithEnemy(item)) {
            this.gameEndHandler();
        }
    }.bind(this));
}
Game.prototype.createEnemy = function() {
    if (Math.random() > 0.9 && this.enemy.length < 1) {
        this.enemy.push(new Enemy(canvas));
    }
}
Game.prototype.createLevel = function(){
    this.platform.push(new Platform(canvas, 0, 0, true, 12000));
    this.platform.push(new Platform(canvas, canvas.width, canvas.height-250, false, 350));
}
Game.prototype.onKeyPress = function(){
    this.player.jump();
}
Game.prototype.moveLeft = function(){
    this.platform.forEach(function(item) {
        item.moveLeft();
    });
    this.player.moveLeft();
    this.enemy.forEach(function(item) {
        item.leftLow();
    })
}
Game.prototype.moveRight = function(){
    this.platform.forEach(function(item) {
        item.moveRight();
    });
    this.player.moveRight();
    this.enemy.forEach(function(item) {
        item.rightLow();
    })
}
Game.prototype.clearCanvas = function(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}
Game.prototype.drawCanvas = function(){
    this.enemy.forEach(function(item) {
        item.draw();
    });
    this.platform.forEach(function(item) {
        item.draw();
    });
    this.player.draw();
}
Game.prototype.start = function() {
    this.createLevel();
    function loop() {
        this.updateGame();
        this.clearCanvas();
        this.drawCanvas();
        this.loopID = window.requestAnimationFrame(loop.bind(this));
    }
    this.loopID = window.requestAnimationFrame(loop.bind(this));
}
Game.prototype.gameEnd = function(){
    window.cancelAnimationFrame(this.loopId);
}