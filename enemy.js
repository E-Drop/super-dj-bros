'use strict';
function Enemy(canvas) {
    this.size = 20;
    this.y = (canvas.height)-130;
    this.x = canvas.width-100;
    this.xSpeed = Math.floor((Math.random()*2)+4);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
}
Enemy.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}
Enemy.prototype.isAlive = function() {
    return this.x + this.size >= 0;
}
Enemy.prototype.update = function() {
    this.x -= this.xSpeed;
}