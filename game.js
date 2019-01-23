'use strict';
function Game(canvas, gameEndHandler) {
    this.ctx = canvas.getContext('2d');
    this.player = new Player(canvas);
    this.canvas = canvas;
    this.enemy = [];
    this.platform = [];
    this.gameEndHandler = gameEndHandler;
    this.loopId;
    this.keyLeft = false;
    this.keyRight = false;
    this.movements = [];
}
Game.prototype.updateGame = function() {
    // this.player.update();
    this.checkArray();
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
    this.platform.forEach(function(item) {
        if(item.checkPlayerCollision(this.player)){
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
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
    document.addEventListener('keyup', this.removeKey.bind(this));
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    
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


 Game.prototype.onKeyDown = function (event) {
    if(event) {
        if (!this.movements.includes(event.keyCode)) {
            this.movements.push(event.keyCode);
        }
    }
}
 Game.prototype.removeKey = function(event) {
    var index = this.movements.indexOf(event.keyCode);
    this.movements.splice(index, 1);
    
}
Game.prototype.checkArray = function() {
    if(this.movements.includes(38)){
        this.onKeyPress();
    }
    if(this.movements.includes(32)){
        this.onKeyPress();
    }
    if(this.movements.includes(37)){
        this.moveLeft();
    }
    if(this.movements.includes(39)){
        this.moveRight();
    }
}

