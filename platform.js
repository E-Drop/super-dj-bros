'use strict';
function Platform(canvas, x, y, isBig, sizeW, sizeH){
    this.y = y;
    this.sizeH = sizeH;
    this.isBig = isBig;
    this.x = x;
    this.ctx = canvas.getContext('2d');
    this.sizeW = sizeW;

}
Platform.prototype.draw = function() {
    if(this.isBig){
    var img = new Image();
    img.src = './assets/img/floor.png';
    }else {
        var img = new Image();
        img.src = './assets/img/block.png';
    }
    var ptrn = this.ctx.createPattern(img, 'repeat'); // Create a pattern with this image, and set it to "repeat".
    this.ctx.fillStyle = ptrn;
    this.ctx.fillRect( this.x, this.y, this.sizeW, this.sizeH);
}
Platform.prototype.moveLeft = function(){
    this.x +=10;
}
Platform.prototype.moveRight = function(){
    this.x -=10;
}
Platform.prototype.checkPlayerCollision = function(player) {
    if(this.x <= player.x + player.size / 2 && this.x + this.sizeW >= player.x){
        if(player.y <= this.sizeH + this.y && player.y >= this.y + this.sizeH -15 ){
            //collides on players Top -- Top
            return "t";
        }else if((player.y + player.size>= this.y && player.y + player.size <= this.y+15)){
            //collides on players Bottom -- Bottom
            return "b";
        }else {
            return "a";
        }
    }
}