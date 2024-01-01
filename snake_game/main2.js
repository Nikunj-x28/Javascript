let isplaying = false;
let snakeBody =[];
let directions;
let all_directions = [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];
let score =0; 
let food_position;
let lastupdateTime = 0;
let speed = 2;
let requestId;
const foodSound = new Audio('./music/food.mp3');
const gameOverSound = new Audio('./music/gameover.mp3');
const moveSound = new Audio('./music/move.mp3');
const musicSound = new Audio('./music/music.mp3');
const start = document.getElementById('start-button');
const user_score =document.getElementById('score-js');
const joypad=document.getElementById('joypad-js');
const board=document.getElementById('board');
start.addEventListener('click',(event)=>{
    if(start.innerHTML=== 'Restart'){
        start.innerHTML='Start';
        user_score.innerHTML=`Score : ${score}`;
    }
    if(isplaying==false){
        // start game
        isplaying=true;
        musicSound.currentTime = 0
        musicSound.play();
        musicSound.loop = true;
        directions = all_directions[Math.floor(Math.random(4))];
        food_position = [Math.floor(Math.random() * 20) +1,
            Math.floor(Math.random() * 20) +1];
        score=0;
        let head;
        // this loop is to make sure the head of snake generated is not at food position
        while(true){
            head =[Math.floor(Math.random() * 20) +1,Math.floor(Math.random() * 20) +1];
            if(head[0] !== food_position[0] || head[1] !== food_position[1]){
                break;
            }
        }
        snakeBody.push(head);
        // Now start the game
        requestId = window.requestAnimationFrame(gamesStart);
    }
})
function gamesStart(currtime) {
    requestId = window.requestAnimationFrame(gamesStart);
    if((currtime - lastupdateTime)/1000 < 1/speed){
        return;
    }
    lastupdateTime = currtime;
    playGame();
}
function playGame(){
    if(gameOver()){
        gameOverSound.play();
        endGame();
    }
    else{
        let newHead = [snakeBody[0][0]+directions.x,snakeBody[0][1]+directions.y];
        snakeBody.unshift(newHead);
        if(newHead[0] === food_position[0]
            && newHead[1]=== food_position[1]){
            foodSound.play();
            score+=10;
            // generate food not inside snakes body
            let flag=true;
            while(flag){
                food_position = [Math.floor(Math.random() * 20) +1,
                    Math.floor(Math.random() * 20) +1];
                flag=false;
                for(let i=0;i<snakeBody.length;i++){
                    if(snakeBody[i][0]==food_position[0] && snakeBody[i][1]==food_position[1]){
                        flag=true;
                    }
                }
            }
        }
        else{
            snakeBody.pop();
        }
        displayGame();
    }
}
function displayGame(){
    board.innerHTML=""
    snakeBody.forEach((e, index)=>{
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e[0];
        snakeElement.style.gridColumnStart = e[1];
        if(index === 0){
            snakeElement.classList.add('snake_head');
        }
        else{
            snakeElement.classList.add('snake_body');
        }
        board.appendChild(snakeElement);
        console.log(board)
    });
    // Display the food
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food_position[0];
    foodElement.style.gridColumnStart = food_position[1];
    foodElement.classList.add('food')
    board.appendChild(foodElement);
    user_score.innerHTML=`Score : ${score}`;
}
function gameOver(){
    if(snakeBody[0][0]>20 || snakeBody[0][0]<1 || 
        snakeBody[0][1]>20 || snakeBody[0][1]<1) return true;
    for(let i=1;i<snakeBody.length;i++){
        if(snakeBody[0][0] === snakeBody[i][0] &&  snakeBody[0][1] === snakeBody[i][1]) return true;
    }
    return false;
}
function endGame(){
    // do cleanup
    musicSound.pause();
    isplaying=false;
    snakeBody=[];
    lastupdateTime = 0;
    score=0;
    start.innerHTML="Restart";
    window.cancelAnimationFrame(requestId);
}
window.addEventListener('keydown',(e)=>{
    if(isplaying){
    switch (e.key) {
        case "ArrowUp":
            moveSound.play();
            directions.x = -1;
            directions.y = 0;
            break;

        case "ArrowDown":
            moveSound.play();
            directions.x = 1;
            directions.y = 0;
            break;

        case "ArrowLeft":
            moveSound.play();
            directions.x = 0;
            directions.y = -1;
            break;

        case "ArrowRight":
            moveSound.play();
            directions.x = 0;
            directions.y = 1;
            break;
        default:
            break;
    }
}
})
joypad.addEventListener('click', (event)=>{
  if (event.target.tagName === 'BUTTON' && isplaying) {
    const direction = event.target.id;
    console.log(direction)
    // Perform action based on the direction button clicked
    switch (direction) {
      case 'up':
        moveSound.play();
        directions.x = -1;
        directions.y = 0;
        break;
      case 'down':
        moveSound.play();
        directions.x = 1;
        directions.y = 0;
        break;
      case 'left':
        moveSound.play();
        directions.x = 0;
        directions.y = -1;
        break;
      case 'right':
        moveSound.play();
        directions.x = 0;
        directions.y = 1;
        break;
      default:
        break;
    }
  }
});

