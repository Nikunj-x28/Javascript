let result = localStorage.getItem('calculation') || '';
let style = localStorage.getItem('style') || 'light';
setTheme(style);
displayResult();
let switches = document.getElementsByClassName('switch');
setInterval(()=>{
    switches.forEach((themeSwitch)=>{
        themeSwitch.addEventListener('click', function () {
            let theme = this.dataset.theme;
            setTheme(theme);
        });
})
},100)

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
    result=eval(result);
    localStorage.setItem('calculation',result);
    displayResult();
}
function setTheme(theme){
      if (theme == 'light') {
        document.getElementById('switcher-id').href = 'styles/light.css';
      } else if (theme == 'cool') {
        document.getElementById('switcher-id').href = 'styles/cool.css';
      } else if (theme == 'neon') {
        document.getElementById('switcher-id').href = 'styles/neon.css';
      }
      localStorage.setItem('style', theme);
}
