//https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=ebadc09f5ed7454ab97564ea0cf2b264&city=stockholm
let cityInput = document.getElementById('city');
let citysearch = document.getElementById('sök');

async function getWeather(){
let city = cityInput.value || 'stockholm';
     try{
        let weather = await fetch('https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=ebadc09f5ed7454ab97564ea0cf2b264&lang=sv&city=' + city);
        
       if (!weather.ok){
          throw new Error(`HTTP error code: ${weather.status}', HTTP error message: ${weather.statusText}`);
        }

    let weatherData = await weather.json();
    console.log(weatherData);
    } catch(error){
        console.error(error);
       
    }
}
   
  getWeather();
 


citysearch.addEventListener('click', getWeather);


