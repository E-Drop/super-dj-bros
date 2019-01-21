'use strict';
function Enemy(canvas) {
    this.size = 50;
    this.y = (canvas.height)-150;
    this.x = canvas.width-50;
    this.xSpeed = Math.floor((Math.random()*20)+10);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.image = new Image();
    this.pathImg = './assets/img/';
    this.image.src = `${this.pathImg}enemy1.png`;
}
Enemy.prototype.draw = function() {
    this.ctx.drawImage(this.image,this.x, this.y, this.size, this.size);
}
Enemy.prototype.isAlive = function() {
    return this.x + this.size >= 0;
}
Enemy.prototype.update = function() {
    this.x -= this.xSpeed;
}