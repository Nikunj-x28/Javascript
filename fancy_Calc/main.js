let result = localStorage.getItem('calculation') || '';
//  if local storage is undefined make result empty
displayResult();
document.querySelectorAll('.calc-button').forEach((calcButton, index) =>{
    calcButton.addEventListener('click',() =>{
        if(calcButton.innerHTML.length === 1 && calcButton.innerHTML != '=')
          updateResult(calcButton.innerHTML);
    })
})
function updateResult(value){
    if(result.length == 21){
        alert('Sorry the calculator is fancy but it cant handle such large numbers')
    }
    else{
        result+=value;
        localStorage.setItem('calculation',result);
        displayResult();
    }
}
function displayResult(){
    document.querySelector('.result').innerHTML=result;
}
let resetButton = document.querySelector('.reset-button');
let delButton = document.querySelector('.del-button');
let resultButton = document.querySelector('.result-button');
resultButton.addEventListener('click',()=>{
    expressionEval();
})
delButton.addEventListener('click',()=>{
    result=result.slice(0,-1);
    displayResult();
})
resetButton.addEventListener('click',()=>{
    result='';
    displayResult();
})
function expressionEval(){
    result=eval(result);
    localStorage.setItem('calculation',result);
    displayResult();
}