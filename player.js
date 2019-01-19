'use strict';

function Player(canvas){
    this.size = 50;
    this.x = 50;
    this.y = (canvas.height)-150;
    this.ySpeed = 0;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
}

Player.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}