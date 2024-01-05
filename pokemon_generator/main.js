const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};
const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById('card');
const button = document.getElementById('generate-button');
const hp =document.getElementById('hp');
const picture = document.getElementById('picture');
const pokename = document.getElementById('name');
const type = document.getElementById('type');
const attack = document.getElementById('attack-value');
const defense = document.getElementById('defense-value');
const speed = document.getElementById('speed-value');


button.addEventListener('click',()=>{
    let value = generatePokemon();
    getResponse(url + `${value}`);
})
function generatePokemon(){
    return (Math.floor(Math.random()*150)+1);
}
function display(data){
    console.log(data);
    hp.innerHTML = `HP  ${data.stats[0].base_stat}`;
    const imgsrc = data.sprites.other.dream_world.front_default;
    picture.innerHTML = `<img src=${imgsrc} class='photo' alt='pokemon'>`
    pokename.innerHTML = data.name.toUpperCase();
    attack.innerHTML = data.stats[1].base_stat;
    defense.innerHTML = data.stats[2].base_stat;
    speed.innerHTML = data.stats[5].base_stat;
    let themecolor = typeColor[data.types[0].type.name];
    let poketypes = data.types;
    attachType(poketypes,themecolor);
    console.log(themecolor);
    stylecard(themecolor);
}
function attachType(poketype,color){
    type.innerHTML=''
    poketype.forEach( value =>{
        let span = document.createElement('span');
        span.innerHTML = value.type.name;
        span.className='displayType';
        span.style.backgroundColor = color;
        console.log(span);
        type.appendChild(span);
    })
}
function stylecard(color){
    card.style.background = `radial-gradient(
        circle at 50% 0%,${color} 40%,
        white 36%
    )`;
}
function getResponse(url){
    fetch(url).
    then(response => {
        if(response.ok){
            return response.json();
        }else{
            console.log(`Network response was not ok `);
        }
    }).
    then(data => display(data)).
    catch(error => {
        // console.log(`An error happened ${error}`);
    });
}