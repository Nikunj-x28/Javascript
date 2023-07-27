let result = localStorage.getItem('calculation') || '';
//  if local storage is undefined make result empty
displayResult();
function updateResult(value){
    result+=value;
    localStorage.setItem('calculation',result);
    displayResult();
}
function displayResult(){
    document.querySelector('.result').innerHTML=result;
}
let clearButton = document.querySelector('.clear');
clearButton.onclick = function (){
    result='';
    localStorage.setItem('calculation',result);
    displayResult();
}
function expressionEval(){
    result=eval(result);
    localStorage.setItem('calculation',result);
    displayResult();
}