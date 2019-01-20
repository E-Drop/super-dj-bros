'use strict';

function main() {

    
    var homeScreen =
        `<div id="homeScreen">
             <h1>HOMEEEEE</h1>
             <div class="input">
               <input type="text" placeholder="Player's Name"></input>
             </div>
             <div class="buttons">
               <button id="empezar" class="button button-start">INSERT COIN</button>
               <button class="button button-rules">RULES</button>
             </div>
             <div class="image">
               <img src='./Images/Map.jpg'>
             </div>
          </div>`;
    
    var gameScreen =
        `<div id="gameScreen">
            <canvas id="canvas" width="1200" height="550"></canvas>
        </div>`;
            
    var gameOverScreen =
        `<div id="gameScreen">
            <h1>gameover</h1>
            <div class="buttons">
                <button id="empezar" class="button button-start">INSERT COIN</button>
                <button class="button button-rules">RULES</button>
            </div>
        </div>`;
            
    var gameOver = function() {
        buildNoGameScreen(gameOverScreen);
    };
    // Funcion que añade al elemento con id container el html que se le pasa en la variable del atributo
    function buildScreen(html) {
        var container = document.getElementById('container');
        container.innerHTML = html;
    } 
    function buildNoGameScreen(screen) {
        buildScreen(screen);
        document.getElementById("empezar").addEventListener("click", jugar);
    }
    function jugar(){
        buildScreen(gameScreen);
        // var game = new Game();
        var canvas = document.getElementById('canvas');
        var game = new Game(canvas, gameEndHandler);
        game.start();
        var gameEndHandler = function(){
            game.gameEnd;
        }
        function onKeyDown (event) {
            switch (event.keyCode) {
                case 38:
                    game.onKeyPress();
                break;
            }
        }
        document.addEventListener('keyup', onKeyDown);
    }
    
    buildNoGameScreen(homeScreen);
}


window.addEventListener('load', main)