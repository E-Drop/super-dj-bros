'use strict';
function Enemy(canvas) {
    this.size = 50;
    this.y = (canvas.height)-125;
    this.x = canvas.width-50;
    this.xSpeed = 3;
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
Enemy.prototype.die = function(){
    this.x = -999;
}
Enemy.prototype.rightLow = function(){
    this.x -= 8;
}
Enemy.prototype.leftLow = function(){
    this.x += 12;
}