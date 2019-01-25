'use strict';
function main() {
    var homeScreen =
        `<div id="homeScreen">
             <h1>SUPER DJ BROS</h1>
             <div class="buttons">
                <p>Press &nbsp;&nbsp;&nbsp; the &nbsp;&nbsp;&nbsp; button &nbsp;&nbsp;&nbsp; to &nbsp;&nbsp;&nbsp; start</p>
               <button id="empezar" class="button button-start">START</button>
             </div>
             <div class="image">
             </div>
          </div>`;
    var gameScreen =
        `<div id="gameScreen">
        <p id="score"></p>
            <canvas id="canvas" width="1200" height="610"></canvas>
        </div>`;
    var gameOverScreen =
        `<div id="gameOverScreen">
             <h1>GAME OVER</h1>
             <p id="scor"></p>
             <div class="buttons">
                <p>Push &nbsp;&nbsp;&nbsp; the &nbsp;&nbsp;&nbsp; button &nbsp;&nbsp;&nbsp; to &nbsp;&nbsp;&nbsp; play &nbsp;&nbsp;&nbsp; again</p>
               <button id="empezar" class="button button-start">TRY AGAIN</button>
             </div>
             <div class="image">
             </div>
          </div>`;
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
            var gameEndHandler = function(){
            game.gameEnd;
            gameOver();
            clearInterval(interval);
        }
        var game = new Game(canvas, gameEndHandler);
        var score = 1;
        function counter(){
            score +=1;
            document.getElementById("score").innerHTML = `SCORE: ${score}`;
        };
        var interval = setInterval(counter, 100);
        game.start();
            var gameOver = function() {
                buildNoGameScreen(gameOverScreen);
                document.getElementById("scor").innerHTML = `SCORE : ${score}`;
        };
    }
    buildNoGameScreen(homeScreen);
}
window.addEventListener('load', main);