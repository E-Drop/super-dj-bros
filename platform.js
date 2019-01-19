'use strict';

function Platform(canvas){
    this.y = canvas.height - 100;
    this.x = 0;
    this.sizeH = 100;
    this.sizeW = canvas.width;
    this.ctx = canvas.getContext('2d');
}

Platform.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.sizeW, this.sizeH);
}