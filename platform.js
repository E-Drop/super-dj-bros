'use strict';
function Platform(canvas){
    this.y = canvas.height - 100;
    this.x = 0;
    this.sizeH = 100;
    this.sizeW = canvas.width;
    this.ctx = canvas.getContext('2d');
}
Platform.prototype.draw = function() {
    var img = new Image();
    img.src = './assets/img/floor.png';
    this.ctx.drawImage(img, this.x, this.y, this.sizeW, this.sizeH);
}