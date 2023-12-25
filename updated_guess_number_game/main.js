let ourNumber = Math.floor(Math.random()*(100-1)+1)
const userInput = document.querySelector('#number');
const remainingGuess =document.getElementById('total');
const clue = document.getElementById('loworhigh');
const prevGuess = document.getElementById('guess');
const displayBox = document.getElementById('display')
let guesses = []
// console.log(ourNumber)
let guessTaken = 10
document.getElementById('submit-button').
addEventListener('click',()=>{
    const userNumber = parseInt(userInput.value)
    userInput.value ='';
    if(!isNaN(userNumber) && userNumber<=100 && userNumber>=1){
        if(userNumber === ourNumber){
            clue.innerText = `You Won !!`;
            endGame();
        }
        else{
            if(guessTaken === 0){
                clue.innerText = `You Lost :( . Random Number was ${ourNumber}`;
                endGame();
            }
            else{
                guessTaken--
                if(userNumber < ourNumber){
                    clue.innerText = `Choose higher`;
                }
                else {
                    clue.innerText = `Choose Lower`;
                }
                guesses.push(userNumber);
                const span = document.createElement('span');
                span.innerHTML=`${guesses[guesses.length-1]} `
                prevGuess.appendChild(span)
                remainingGuess.innerHTML=`${guessTaken}`;
            }
        }
    }
    else{
        clue.innerText = `Choose a correct value`;
    }
})
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    clue.innerHTML+= `<br>Start a new game`;
    newGame();
}
function newGame(){
    const newbutton = document.createElement('button');
    newbutton.innerText='New Game';
    newbutton.classList.add('newGame')
    console.log(newbutton)
    displayBox.appendChild(newbutton);
    newbutton.addEventListener('click',()=>{
        clue.innerHTML=''
        ourNumber = Math.floor(Math.random()*(100-1)+1)
        guesses = []
        guessTaken = 10
        remainingGuess.innerHTML=`${guessTaken}`;
        prevGuess.innerHTML=''
        userInput.removeAttribute('disabled')
        displayBox.removeChild('button')
    })
}