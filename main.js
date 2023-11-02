//https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=ebadc09f5ed7454ab97564ea0cf2b264&city=stockholm
let cityInput = document.getElementById('city');
let citysearch = document.getElementById('sök');
let city = '';
let days = '1';
let daysDiv = document.getElementById('days').children;
//let antalDagar = daysDiv.children;

function handleDayClick(event){
    let selectedDays = event.target.dataset.days;
    getWeather(selectedDays);
}


async function getWeather(){
city = cityInput.value || 'stockholm';


     try{
let weather = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&days=${days}&lang=sv&key=ebadc09f5ed7454ab97564ea0cf2b264&city=${city}`);
        
       if (!weather.ok){
          throw new Error(`HTTP error code: ${weather.status}, HTTP error message: ${weather.statusText}`);
        }

    let weatherData = await weather.json();
    console.log(weatherData);
    } catch(error){
        console.error(error);      
    }
}
   
for(let i =0; i<daysDiv.length; i++){
    daysDiv[i].addEventListener('click', handleDayClick);
}
  getWeather();

  
   
    
  citysearch.addEventListener('click', getWeather);
    
  


  

//});




