'use strict';

function Enemy(canvas) {
    this.size = 50;
    this.y = (canvas.height)-150;
    this.x = canvas.width-100;
    this.xSpeed = 5;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
}

Enemy.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}