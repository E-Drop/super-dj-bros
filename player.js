'use strict';
function Player(canvas){
    this.size = 50;
    this.x = canvas.width/2;
    this.y = 0;
    this.ySpeed = 10;
    this.direction = 1;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.image = new Image();
    this.pathImg = './assets/img/';
    this.image.src = `${this.pathImg}caida.png`;
    this.counter = 0;
    this.isJumping = false;
    this.jumpStart = 0;
}
Player.prototype.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
}
Player.prototype.update = function() {
    if(this.isJumping && this.y > this.jumpStart - 100){
        this.y -= this.ySpeed;
        console.log(this.y , this.jumpStart, this.isJumping);
    }else if (this.y >= this.jumpStart - 110){
        this.isJumping = false;
        this.y += this.ySpeed;
    }else{
        this.y += this.direction * this.ySpeed; 
    }
    
}
Player.prototype.changeImg = function() {
    
}
Player.prototype.checkCollideWithEnemy = function(enemy) {
    var collidesRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
    var collidesLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
    var collidesTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
    var collideBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;
    if(this.y + this.size >= enemy.y && this.x + this.size / 2 > enemy.x && this.x < enemy.x + enemy.size ){
        return "d";
    }else{
        if(collidesRight && collidesLeft ){
        }
        return collidesRight && collidesLeft && collideBottom;
    }
}
Player.prototype.jump = function(){
    this.jumpStart = this.y;
    this.isJumping = true;
    this.image.src = `${this.pathImg}jump.png`;
    console.log(this.isJumping);
}
Player.prototype.moveRight= function(){
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
Player.prototype.moveLeft = function(){
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