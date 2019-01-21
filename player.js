'use strict';
function Player(canvas){
    this.size = 50;
    this.x = 50;
    this.y = (canvas.height)-150;
    this.ySpeed = 0;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.image = new Image();
    this.pathImg = './assets/img/';
    this.image.src = `${this.pathImg}caida.png`;
    this.counter = 0;
}
Player.prototype.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
}
Player.prototype.update = function() {
    if(this.y > (this.canvas.height - 350) && this.y <= this.canvas.height -150){
        if(this.y === canvas.height-150){
            this.changeImg();    
        }
    } else if(this.y < this.canvas.height -250){
        this.ySpeed = 9;
    }else {
        this.ySpeed = 0;
        this.y = this.canvas.height -150;
        this.changeImg();
    }
    this.y += this.ySpeed;
    if(this.image.src.substring(this.image.src.lastIndexOf("/")+1) !== `jump.png`){
        this.changeImg();
    }
}
Player.prototype.changeImg = function() {
    if(this.y < this.canvas.height-150){
        this.image.src = `${this.pathImg}jump.png`;
    }else if((this.image.src.substring(this.image.src.lastIndexOf("/")+1) === 'correr.png' || this.image.src.substring(this.image.src.lastIndexOf("/")+1) === 'jump.png') && this.counter < 30){
        this.image.src = `${this.pathImg}caida.png`;
    }else {
        this.image.src = `${this.pathImg}correr.png`;
        if(this.counter === 60){
            this.counter = 0;
        }
    }
    this.counter++;
}
Player.prototype.checkCollideWithEnemy = function(enemy) {
    var collidesRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
    var collidesLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
    var collidesTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
    var collideBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;
    return collidesRight && collidesLeft && collidesTop && collideBottom;
}
Player.prototype.jump = function(){
    if(this.y === this.canvas.height -150){
        this.ySpeed = -9;
        this.image.src = `${this.pathImg}jump.png`;
    }
}