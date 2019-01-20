'use strict';
function Player(canvas){
    this.size = 50;
    this.x = 50;
    this.y = (canvas.height)-150;
    this.ySpeed = 0;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
}
Player.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}
Player.prototype.update = function() {
    if(this.y > (this.canvas.height - 350) && this.y <= this.canvas.height -150){
    } else if(this.y < this.canvas.height -250){
        this.ySpeed = 7;
    }else {
        this.ySpeed = 0;
        this.y = this.canvas.height -150;
    }
    this.y += this.ySpeed;
}
Player.prototype.checkCollideWithEnemy = function(enemy) {
    var rightCrash = this.x + this.size > enemy.x;
    var leftCrash = this.x - this.size < enemy.x + enemy.size;
    var bottomCrash = this.y + this.size > enemy.y;
    return rightCrash && bottomCrash;
}
Player.prototype.jump = function(){
    if(this.y === this.canvas.height -150){
        this.ySpeed = -7;
    }
}