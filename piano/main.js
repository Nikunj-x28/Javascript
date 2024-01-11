const show_button = document.querySelector('.switch input');
const volume_button = document.getElementById('volume');
const keys = document.querySelectorAll('.key');
let allKeys = {};
let audio = new Audio(`tunes/a.wav`); // need an audio object, just giving it a default value

keys.forEach((key)=>{
    key.addEventListener("click",()=>{
         playTune(key.id);
    })
    allKeys[key.id]=1;
 })
 show_button.addEventListener("click",()=>{
     toggleKeys();
 })
 volume_button.addEventListener("input",(event)=>{
        console.log(event.target.value);
        audio.volume = event.target.value; // setting volume of audio object
 })

function playTune(tuneId){
    audio.src = `./tunes/${tuneId}.wav`; 
    audio.play(); 
    const clickedKey = document.getElementById(tuneId);
    clickedKey.classList.add("active"); 
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 150);
}
function toggleKeys(){
    keys.forEach(key=>{
        key.classList.toggle('hide');
    })
}

document.addEventListener("keydown",(event)=>{
        const pressedKey = event.key;
        if(undefined !== allKeys[pressedKey]){
            playTune(pressedKey);
        }
})

for (var key in allKeys) {
    if (allKeys.hasOwnProperty(key)) {
      console.log(key + ': ' + allKeys.key);
    }
  }
// Object.keys(allKeys).forEach((key) => {
//     console.log(allKeys[key]);
// });
