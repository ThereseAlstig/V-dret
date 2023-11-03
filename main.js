
const cityInput = document.getElementById('city');
const citysearch = document.getElementById('sök');
let city = '';
let days = '1';
const daysDiv = document.getElementById('days').children;
const basicInfo = document.getElementById('content');
const mainweather = document.getElementById('vädret');


function visaData(event) {
    event.preventDefault();
    days = parseInt(event.target.getAttribute('datadays'));
 
  
}

async function getWeather(){
city = cityInput.value || 'stockholm';
days = days || '1';

     try{
let weather = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&days=${days}&lang=sv&key=ebadc09f5ed7454ab97564ea0cf2b264&city=${city}`);
        
       if (weather.ok === false){
          throw new Error(`HTTP error code: ${weather.status}, HTTP error message: ${weather.statusText}`);
        }

    let weatherData = await weather.json();
    console.log(weatherData);

    let cityName = weatherData.city_name;
    console.log(weatherData.data);
    console.log(cityName);
    
    basicInfo.innerHTML=`<h2 id ="searchedCity">${cityName}</h2>`;
    let weatherInfo ='';
   
    
for(let i=0; i< weatherData.data.length; i++){
let day = weatherData.data[i];
   let maxtemp = day.app_max_temp;
   let mintemp = day.app_min_temp;
  let datum = day.valid_date;
  let icon = day.weather.icon;
  let description = day.weather.description;

weatherInfo += 
              `<div class="dagensVäder">
              <h2>Datum: ${datum}
              <p>${description}</p>
              <img src="icons/${icon}.png" alt="Vädret">
              <h2>Som varmast: ${maxtemp} &#8451;</h2>
              <h2>Som kallast: ${mintemp} &#8451;</h2>
              
              </div>`
              

console.log(day);
}
//let temperature = day.min_temp;
mainweather.innerHTML = weatherInfo;
                    
}
    catch(error){
        console.log('Hämtningen misslyckades');      
    }

}
  citysearch.addEventListener('click', function(event){
    event.preventDefault();
    getWeather();
  });
  
 
 

  

//});


 // getWeather();

//  for(let i = 0; i<daysDiv.length; i++){
  //  daysDiv[i].addEventListener('click', visaData);
        //event.preventDefault();
        //numDays = parseInt(this.getAttribute('datadays'));
 //       if(daysDiv <= 1 && daysDiv >= 10){
            //days = numDays;
   //     console.log(days);
            
   //     }else{
    //    console.log('Ogiltig datatyp');    
  //      }
        //
   // }
 


