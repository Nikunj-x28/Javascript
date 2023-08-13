let result = localStorage.getItem('calculation') || '';
displayResult();
let style = localStorage.getItem('style') || 'light';
setTheme(style);
let switches = document.getElementsByClassName('switch');
// let switchArray = Array.from(switches);
for(let i=0;i<switches.length;i++){
    switches[i].addEventListener('click',() => {
            let theme =switches[i].dataset.theme;
            setTheme(theme);
    });
}
document.querySelectorAll('.calc-button').forEach((calcButton, index) =>{
    calcButton.addEventListener('click',() =>{
        if(calcButton.innerHTML.length === 1 && calcButton.innerHTML != '=')
          updateResult(calcButton.innerHTML);
    })
})
function updateResult(value){
    if(result.length === 21){
        let temp=result;
        result = 'Out of Bounds';
        displayResult();
        result=temp;
        setTimeout(()=>{
            displayResult();},1000);
    }
    else{
        if(value === 'x') value = '*';
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
    try{
        if(result.length === 0){
            return;
        }
        result=eval(result);
        localStorage.setItem('calculation',result);
        displayResult();
    }
    catch{
        result='Error !!';
        displayResult();
        result='';
        setTimeout(()=>{
        displayResult();},1000);
    }
}
function setTheme(theme){
      document.getElementById('switcher-id').href = `styles/${theme}.css`;
      localStorage.setItem('style',theme);
}
