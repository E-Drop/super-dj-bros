'use strict';
function Game(canvas, gameEndHandler) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(canvas);
    this.enemy = [];
    this.platforms = [];
    this.vinilos = [];
    this.gameEndHandler = gameEndHandler;
    this.loopId;
    this.keyLeft = false;
    this.keyRight = false;
    this.movements = [];
    this.song = new Audio('./assets/img/music.mp3');
    this.musicBox = ['./assets/img/james.mp3','./assets/img/jackson.mp3','./assets/img/give-to-me.mp3'];
}
Game.prototype.updateGame = function() {
    // this.player.update();
    this.checkArray();
    this.createEnemy();
    this.player.update();
    this.enemy = this.enemy.filter(function(enemy) {
        return enemy.isAlive();
    });
    this.enemy.forEach(function(item) {
        item.update();
        if(this.player.checkCollideWithEnemy(item) === "d"){
            this.player.isBouncing = true;
            this.player.bounceStart = this.player.y;
            item.die();
        }else if (this.player.checkCollideWithEnemy(item) || this.player.y > canvas.height) {
            this.clearCanvas();
            this.song.pause();
            this.gameEndHandler();
        }
    }.bind(this));
    this.vinilos = this.vinilos.filter(function(vinilo) {
        return vinilo.isInScreen();
    });
    this.vinilos.forEach(function(item) {
        if (this.player.checkCollideWithVinilo(item)) {
            this.song.pause();
            this.song.src = this.musicBox[Math.floor(Math.random() * 3)];
            this.song.play();
            item.desapear();     
        }
    }.bind(this));

    this.platforms.forEach(function(platform) {
        this.enemy.forEach(function(enemy) {
            if(platform.checkEnemyCollision(enemy)){
                switch(platform.checkEnemyCollision(enemy)) {
                    case 'enemy b':
                    enemy.yDirection = 0;
                    enemy.y = platform.y - enemy.size;
                    break;
                    case 'enemy a':
                    enemy.yDirection = 1;
                    break;
                    default:
                    break;
                }
            }
        }.bind(this));
    }.bind(this));
    this.platforms.forEach(function(item) {
        if(item.checkPlayerCollision(this.player)){
            switch(item.checkPlayerCollision(this.player)) {
                case 'player t':
                if(this.player.isJumping){
                    this.player.isCT = true;
                    this.player.isCB = false;
                    this.player.direction = 1;
                    this.player.y = item.y + item.sizeH;
                }
                break;
                case 'player b':
                if(!this.player.isJumping){
                this.player.isCT = false;
                this.player.isCB = true;
                this.player.direction = 0;
                this.player.y = item.y - this.player.size;
                }
                break;
                case 'player a':
                
                break;
                default:
                break;
            }
        }
    }.bind(this));
}
Game.prototype.createEnemy = function() {
    if (Math.random() > 0.9 && this.enemy.length < 1) {
        this.enemy.push(new Enemy(canvas));
    }
}
Game.prototype.createLevel = function(){
    this.platforms.push(new Platform(canvas, 0, canvas.height - 75, true, canvas.width + 550, 200));
    this.platforms.push(new Platform(canvas, canvas.width + 850, canvas.height - 75, true, canvas.width , 200));
    this.platforms.push(new Platform(canvas, canvas.width + 1050, canvas.height - 75, true, canvas.width , 200));
    this.platforms.push(new Platform(canvas, canvas.width * 2 + 1300, canvas.height - 75, true, canvas.width , 200));
    this.platforms.push(new Platform(canvas, canvas.width, canvas.height-275, false, 350, 50));
    this.vinilos.push(new Vinilo(canvas, canvas.width + 300 , canvas.height -325));
    this.vinilos.push(new Vinilo(canvas, canvas.width * 2 + 1800 , canvas.height -125));
}
Game.prototype.onKeyPress = function(){
    this.player.jump();
    this.player.isCB = false;
}
Game.prototype.moveLeft = function(){
    this.platforms.forEach(function(item) {
        item.moveLeft();
    });
    this.vinilos.forEach(function(item) {
        item.moveLeft();
    });
    this.player.moveLeft();
    this.enemy.forEach(function(item) {
        item.leftLow();
    })
}
Game.prototype.moveRight = function(){
    this.platforms.forEach(function(item) {
        item.moveRight();
    });
    this.vinilos.forEach(function(item) {
        item.moveRight();
    });
    this.player.moveRight();
    this.enemy.forEach(function(item) {
        item.rightLow();
    })
}
Game.prototype.clearCanvas = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
Game.prototype.drawCanvas = function(){
    var img = new Image();
    img.src = "./assets/img/clouds.png";
    this.ctx.drawImage(img, 0, 0);
    this.vinilos.forEach(function(item) {
        item.draw();
    });
    this.enemy.forEach(function(item) {
        item.draw();
    });
    this.platforms.forEach(function(item) {
        item.draw();
    });
    this.player.draw();
}
Game.prototype.start = function() {
    this.song.play();
    document.addEventListener('keyup', this.removeKey.bind(this));
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    
    this.createLevel();
    function loop() {
        this.updateGame();
        this.clearCanvas();
        this.drawCanvas();
        this.loopID = window.requestAnimationFrame(loop.bind(this));
    }
    this.loopID = window.requestAnimationFrame(loop.bind(this));
}
Game.prototype.gameEnd = function(){
    window.cancelAnimationFrame(this.loopId);
}


 Game.prototype.onKeyDown = function (event) {
    if(event) {
        if (!this.movements.includes(event.keyCode)) {
            this.movements.push(event.keyCode);
        }
    }
}
 Game.prototype.removeKey = function(event) {
    var index = this.movements.indexOf(event.keyCode);
    this.movements.splice(index, 1);
    
}
Game.prototype.checkArray = function() {
    if(this.movements.includes(38)){
        this.onKeyPress();
    }
    if(this.movements.includes(32)){
        this.onKeyPress();
    }
    if(this.movements.includes(37)){
        this.moveLeft();
    }
    if(this.movements.includes(39)){
        this.moveRight();
    }
}

