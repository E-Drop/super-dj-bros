'use strict';
function Vinilo(canvas) {
    this.size = 50;
    this.y = (canvas.height)-125;
    this.x = canvas.width-50;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.image = new Image();
    this.pathImg = './assets/img/';
    this.image.src = `${this.pathImg}enemy1.png`;
}
Vinilo.prototype.draw = function() {
    this.ctx.drawImage(this.image,this.x, this.y, this.size, this.size);
}
Enemy.prototype.update = function() {
if(this.notStomped){
    this.x += this.direction * this.xSpeed;
    this.y += this.yDirection * this.ySpeed;
    if(this.counter === 30){
        this.counter = 0;
    }else if(this.counter > 15) {
        this.image.src = `${this.pathImg}enemy1.png`;
    }else {
        this.image.src = `${this.pathImg}enemy2.png`;
    }
    this.counter++;
}
}
Enemy.prototype.die = function(){
    this.notStomped = false;
    this.image.src = `${this.pathImg}stomped-enemy.png`;
    setTimeout(function(){
        this.x = -999;
    }.bind(this), 1000);
}
Enemy.prototype.rightLow = function(){
    this.x -= 8;
}
Enemy.prototype.leftLow = function(){
    this.x += 12;
}
