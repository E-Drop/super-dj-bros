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
    this.counterRight = 0;
    this.counterLeft = 0;
    this.isJumping = false;
    this.isBouncing = false;
    this.bounceStart = 0;
    this.jumpStart = canvas.height;
    this.isCT = false;
    this.isCB = false;
    this.isRight = true;
    this.isLeft = false;
    this.jumpSound = new Audio(`${this.pathImg}jump.mp3`);
    this.dieSong = new Audio(`${this.pathImg}mario-die.mp3`);
    this.stompSound = new Audio(`${this.pathImg}stomp.mp3`);
}
Player.prototype.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
}
Player.prototype.update = function() {
    console.log(this.isBouncing);
    if(this.isJumping && this.y > this.jumpStart - 200 && !this.isCT && !this.isBouncing){
        console.log("problema uno");
        this.direction = -1;
    }else if (this.isBouncing && this.y > this.bounceStart - 80 && !this.isCT){
        console.log("problema inexplicable");
        this.direction = -1;
    }else if (this.y >= this.jumpStart - 210 || this.isCT || this.y > this.bounceStart - 90){
        console.log("problema dos");
        this.isJumping = false;
        this.isBouncing = false;
        this.direction = 1;
    }
    this.y += this.direction * this.ySpeed; 
    
}
Player.prototype.changeImg = function() {
    
}
Player.prototype.checkCollideWithEnemy = function(enemy) {
    var collidesRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
    var collidesLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
    var collidesTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
    var collideBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;
    if(this.y + this.size >= enemy.y && this.y + this.size <= enemy.y + enemy.size / 2 && this.x + this.size / 2 > enemy.x && this.x < enemy.x + enemy.size ){
        this.stompSound.play();
        return "d";
    }else{
        if(collidesRight && collidesLeft && collideBottom){
            this.dieSong.play();
        }
        return collidesRight && collidesLeft && collideBottom ;
    }
}
Player.prototype.jump = function(){
    if(this.isCB){
    this.jumpSound.play();
    this.jumpStart = this.y;
    this.isJumping = true;
    this.image.src = `${this.pathImg}jump.png`;
    }
}
Player.prototype.moveRight= function(){
    this.isRight = true;
    this.isLeft = false;
    if(this.isJumping && this.isRight){
        this.image.src = `${this.pathImg}jump.png`;
        this.counterRight = 0;
    }else if((this.image.src.substring(this.image.src.lastIndexOf("/")+1) === 'correr.png' || this.image.src.substring(this.image.src.lastIndexOf("/")+1) === 'jump.png') && this.counterRight === 30){
        this.counterRight = 0;
    }else if(this.counterRight > 15) {
        this.image.src = `${this.pathImg}correr.png`;
    }else {
        this.image.src = `${this.pathImg}caida.png`;
    }
    this.counterRight++;
}
Player.prototype.moveLeft = function(){
    this.isRight = false;
    this.isLeft = true;
    if(this.isJumping && this.isLeft){
        this.image.src = `${this.pathImg}jump_left.png`;
        this.counterLeft = 0;
    }else if((this.image.src.substring(this.image.src.lastIndexOf("/")+1) === 'correr_left.png' || this.image.src.substring(this.image.src.lastIndexOf("/")+1) === 'jump_left.png') && this.counterLeft === 30){
        this.counterLeft = 0;
    }else if(this.counterLeft > 15) {
        this.image.src = `${this.pathImg}correr_left.png`;
    }else {
        this.image.src = `${this.pathImg}caida_left.png`;
    }
    this.counterLeft++;
}