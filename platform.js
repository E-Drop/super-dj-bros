'use strict';
function Platform(canvas, x, y, isBig, sizeW){
    if(isBig){
        this.y = canvas.height - 100;
        this.sizeH = 200;
    }else{
        this.y = y;
        this.sizeH = 50;
    }
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
    
    if(this.x + this.sizeW === player.x && this.y <= player.y && this.y + this.sizeH >= player.y){
    //collides on players Left -- Left 
        console.log("l");
        return "l";
    }else if(this.y + this.sizeH >= player.y && this.y < player.y  && this.x <= player.x + player.size / 2 && this.x + this.sizeW >= player.x){
    //collides on players Top -- Top
        console.log("t");
        return "t";
    }else if((this.y === player.y + player.size) && (this.x < player.x && this.x + this.sizeW > player.x)){
    //collides on players Bottom -- Bottom
        console.log("b");
        return "b";
    }else if(this.x <= player.x + player.size / 2 && this.y >= player.y && this.y + this.sizeH <= player.y){
    //collides on players Right -- Rights
        console.log("r");
        return "r";
    }
}