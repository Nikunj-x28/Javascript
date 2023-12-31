// https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=cf751bdd991e44c0d8694100d4f9cd9b&units=metric
const apikey = "cf751bdd991e44c0d8694100d4f9cd9b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?";

const city = document.getElementById('user-city')
const button = document.getElementById('search-button')
const show_wind=document.getElementById('wind')
const show_humidity=document.getElementById('humidity')
const show_temp=document.getElementById('temperature')
const show_user_city=document.getElementById('display-user-city')
const show_weather=document.getElementById('weather')
const show_icon=document.getElementById('weather-icon')
button.addEventListener('click',(event)=>{
    if(city.value !== ""){
        const url= apiurl +`q=${city.value}&APPID=${apikey}&units=metric`;
        //console.log(url)
        fetch(url).
        then((response)=>{
            if(response.ok){
                return response.json()
            }else {
                alert(`City Not in database`)
            }
        }).
        then(response =>{
            show_weather.innerHTML=response.weather[0].description;
            show_user_city.innerHTML=response.name;
            show_wind.innerHTML=`${response.wind.speed} km/hr`;
            show_temp.innerHTML=`${response.main.temp} °C`;
            show_humidity.innerHTML=`${response.main.humidity} %`;
            show_icon.innerHTML=`<img src="./images/${response.weather[0].icon}.png" alt="weather-icon">`
        }).
        catch((error)=>{
            console.error(error);
        });
    }
})

