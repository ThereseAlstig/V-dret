
const cityInput = document.getElementById('city');
const citysearch = document.getElementById('sök');
let city = '';
let days = '1';
const daysDiv = document.getElementById('days').children;
const basicInfo = document.getElementById('content');
const mainweather = document.getElementById('vädret');

getWeather();


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
    let sunrise = day.sunrise_ts;
    let sunriseTime = new Date(sunrise * 1000);
    let formatsunrise = sunriseTime.toLocaleTimeString();
    let sunset = day.sunset_ts;
    let sunsetTime = new Date(sunset * 1000);
    let formatsunset = sunsetTime.toLocaleTimeString();
    let tempNow = day.temp;
    let vind = day.wind_spd;
    let år = parseInt(datum.split("-")[0]);
    let mån = parseInt(datum.split("-")[1])-1;
    let dag =parseInt(datum.split("-")[2]);
    let datumObjekt = new Date(år, mån, dag);
    let veckodagar= ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    let veckodagsSiffra = datumObjekt.getDay();
    let veckodagarText =veckodagar[veckodagsSiffra];
 

    

weatherInfo += 
              `<div class="vädret">
              <div class="dagensVäder">
              
              <div class="höger">
              <h2>${tempNow} &#8451;</h2>
              <img src="icons/${icon}.png" alt="Vädret">
              <h3>${description}</h3>
              </div>
              <div class="vänster">
              <i>Datum: ${datum}</i>
              <i class="veckodag">${veckodagarText}</i>
              
              <h3><i class="fa-solid fa-temperature-high"></i>   ${mintemp}/${maxtemp} &#8451;</h3>
              <p>${formatsunrise} <img src="bilder2/sun-312708_640.png" alt="sunrise"  height="100px"> ${formatsunset}</p>
              <p><i class="fa-solid fa-wind"></i>
              Vind: ${vind} m/s</p>
              
              </div>
              </div>
              </div>`
              
              

console.log(day);
}
//let temperature = day.min_temp;
mainweather.innerHTML = weatherInfo;
                    
}
    catch(error){
      
        console.log(error);    
        alert('Fel på sidhämtningen, försök igen senare!');  
    }

}
  citysearch.addEventListener('click', function(event){
    event.preventDefault();
    getWeather();
  });
  
 
  function visaData(event) {
    event.preventDefault();
    days = parseInt(event.target.getAttribute('datadays'));
    
  getWeather();
}

  

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
 


