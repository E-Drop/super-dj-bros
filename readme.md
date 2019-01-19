# SUPER DJ BROS

## Description
Game based on super mario bros


## MVP (DOM - CANVAS)

CANVAS
One ball running in a platform trying to find the end, while enemies trying to kill it.


## Backlog
### More Platforms
- Detect others platforms and jump to it.

### Kill Enemies
- If collision is on top, enemy die.

### Add movement to player
- Stop the background and focus movement in player

### Add direction to player
- Make that player can choose direction, left right

### Add vertical obstacles
- Add pipes and things that are in vertical

### Add horizontally collision with obstacles
- Add the functionalities, Player can pass

### Add blocks
- Add block of coints and gifts

### Take gift
- Detect collision and delete gift

### Change state
- Add functionalities for when pick a gift player change

### Add music
- Add music to game

## Data structure
### Game
```javascript
function Game(canvas, endHandler){
ctx;
player;
enemies;
loop;
endHandler;
score;
}
clearCanvas()
drawCanvas()
updateGame()
createEnemy()
start()
keyDown()
```

### Player

```javascript

function Player (canvas){
size;
x;
y;
speedY;
canvas;
ctx;
}
draw()
update()
jump()
checkCollide()
die()


```

### Enemy

```javascript
function Enemy (canvas, speed){
  x;
  y;
  size;
  speed;
  ctx;
}
draw();
update();
die();
```


## States y States Transitions
Definition of the different states and their transition (transition functions)

### Splash
- splashScreen
splash( 2
- removeGameOver (if there is one)
- build splash DOM ()
- addEventListenners()
)

### Game
- gameScreen
startGame(
- remove splash
- remove GameOver (if there is one)
- build game DOM ()
- create new Game()
- gameStart()  
)

### Game Over
- gameoverScreen
GameOver(
- game destroy
- build GameOver DOM ()
- addEventListenner()
)


## Task

### 1.States and transitions

#### 1.1 Write states
- Create main.js
- Write build DOM function
- Write main function
- Call main function when load page
- Build splash DOM
- Write buttons for the splash
- write build gameOver
- Build gameOver DOM
- Create game.js 
- Build Game DOM
- Create canvas with width and height of the parent

#### 1.2 Write transitions
- Write startGame in main
- Write destroy splash
- Write destroy game
- Write destroy gameOver
- Write destroy main

### Game
- Write the loop
- Start loop 
- Add event listeners
- Create new Player
- Create one enemy
- Create more enemies inside the loop
- Inside the loop update and draw
- Clear canvas

### Player
- Write Player constructor with attributes.
- Write update and draw methods.

### Enemy
- Write Enemy constructor with attributes.
- Write update and draw methods.  

### Collision 
- Write collision Enemy and Player. GAME OVER.

### Score
- Update Score. 

## Links

### Trello
[Link url](https://trello.com/b/bl97mv9P/proyecto1-ironhack)

### Git
URls for the project repo and deploy
.

### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)

## Development

## Development

This project uses SCSS. Use the following line to compile to CSS while you are coding:

```
node-sass --output-style compressed --source-map true --watch style.scss style.css
```
