function mimic(){
    let userInput = document.querySelector('.js-mimic-input').value;
    document.querySelector('.js-mimic').innerHTML
        =userInput;
}
function handleCostKeydown(){
    if(event.key === 'Enter') calculateTotal();
}
function calculateTotal(){
    let cost = document.querySelector('.js-cost-input').value;
    if(cost<40){
        cost = Math.round((Number(cost)+10)*100)/100;
    }
    document.querySelector('.js-total-cost').innerHTML
        = `$${cost}`;
}
function subscribe(){
        const buttonElement = document.querySelector('.js-subscribe-button');
        if(buttonElement.innerText === 'Subscribe'){
            buttonElement.innerHTML = 'Subscribed';
            buttonElement.classList.add
            ('is-sub');
        }
        else{
            buttonElement.innerHTML = 'Subscribe';
            buttonElement.classList.remove
            ('is-sub');
        }
}