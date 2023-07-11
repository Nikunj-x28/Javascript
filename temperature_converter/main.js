

document.getElementById("submit_button").onclick = function (){
    let temp;
    if(document.getElementById("celsius").checked){
            temp = document.getElementById("Temperature").value;
            temp = toCelsius(temp);
            document.getElementById("final_temp").innerHTML = `Temperature in Celsius is ${temp} degree Celsius`;
    }
    else if(document.getElementById("fahrenheit").checked){
            temp = document.getElementById("Temperature").value;
            temp = toFahrenheit(temp);
            document.getElementById("final_temp").innerHTML =`Temperature in Fahrenheit is ${temp} degree Fahrenheit`;
    }
    else{
        document.getElementById("final_temp").innerHTML = "Select a unit";
    }
}




 
function toCelsius(temperature){
      return (temperature - 32) * (5 / 9);
}

function toFahrenheit(temperature){
    return ((temperature * 9) /5) + 32;
}

