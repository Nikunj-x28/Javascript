// https://api.openweathermap.org/data/2.5/weather?q={New%20York}&appid={cf751bdd991e44c0d8694100d4f9cd9b}&units=metric
const apikey = "cf751bdd991e44c0d8694100d4f9cd9b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=NewYork";

const city = document.getElementById('user-city')
const button = document.getElementById('search-button')
button.addEventListener('click',(event)=>{
    if(city.value !== ""){
        fetch(url +`&q=${city.value}&appid=${apikey}`).
        then((response)=>{
            if(response.ok){
                // when api key activates
            }
        }).
        catch((error)=>{
            alert(`an error happened`)
        });
    }
})
