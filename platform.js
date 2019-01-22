'use strict';
function Platform(canvas, x, y, isBig, sizeW){
    if(isBig){
        this.y = canvas.height - 100;
        this.sizeH = 100;
    }else{
        this.y = y;
        this.sizeH = 50;
    }
    this.x = x;
    this.ctx = canvas.getContext('2d');
    this.sizeW = sizeW;

}
Platform.prototype.draw = function() {
    var img = new Image();
    img.src = './assets/img/floor.png';
    var ptrn = this.ctx.createPattern(img, 'repeat'); // Create a pattern with this image, and set it to "repeat".
    this.ctx.fillStyle = ptrn;
    this.ctx.fillRect( this.x, this.y, this.sizeW, 50);
}
Platform.prototype.moveLeft = function(){
    this.x +=10;
}
Platform.prototype.moveRight = function(){
    this.x -=10;
}
Platform.prototype.checkPlayerUp = function(player) {
    var collidesTop = this.y - this.size / 2 < player.y + player.size / 2;
    var collideBottom = this.y + this.size / 2 > player.y - player.size / 2;
    return collidesTop && collideBottom;
}