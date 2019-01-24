'use strict';
function Vinilo(canvas, x , y) {
    this.size = 50;
    this.y = y;
    this.x = x;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.image = new Image();
    this.pathImg = './assets/img/';
    this.image.src = `${this.pathImg}box.png`;
}
Vinilo.prototype.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
}
Vinilo.prototype.desapear = function(){
    this.x = -999;
}
Vinilo.prototype.moveRight = function(){
    this.x -=10;
}
Vinilo.prototype.moveLeft = function(){
    this.x +=10;
}
Vinilo.prototype.isInScreen = function() {
    return this.x + this.size >= 0;
}