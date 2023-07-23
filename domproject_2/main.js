let win = 0, loss = 0, tie = 0;
const moves = new Map(
    [
    ['RockScissor',1],
    ['PaperRock',1],
    ['ScissorPaper',1],
    ['ScissorRock',0],
    ['PaperScissor',0],
    ['RockPaper',0]
    ]
);
function playRPS(playerMove){
    let compMove = computerMove();
    if(compMove == playerMove){
            tie +=1;
            displayRes('tie',playerMove,compMove);
    }
    else{
        if(moves.get(playerMove+compMove) === 1){
            win +=1;
            displayRes('win',playerMove,compMove);
        }
        else{
            loss +=1;
            displayRes('loss',playerMove,compMove);
        }
    }
    update(win,loss,tie);
}
function computerMove(){
    let number = Math.round(Math.random()*8+1);
    if(number<=3){
        return 'Rock';
    }
    else if(number<=6){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}
function displayRes(result,playerMove,compMove){
    document.querySelector('#result-of-move').classList.add('show-result')
    if(result === 'tie'){
        document.getElementById('result').innerHTML='Game was Tied 🙂🙂';
    }
    else if(result === 'win'){
        document.getElementById('result').innerHTML='You Won 😎😎';
    }
    else {
        document.getElementById('result').innerHTML='You Lost 😣😣';
    }
    document.getElementById('moveset').innerHTML=`You chose :
    <img src="images/${playerMove}.jpeg" alt ="${playerMove}" class="move-icon">
    computer chose :    
    <img src="images/${compMove}.jpeg" alt ="${compMove}" class="move-icon">`;
}
function update(win,loss,tie){
    const tally = document.getElementById('score-tally');
    tally.innerHTML = `<span>Wins : ${win}</span>  <span>Losses : ${loss}</span> <span>Ties : ${tie}</span>`;
}