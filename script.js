//hopefully this saves 



// my try 
//https://www.weatherapi.com/
// api key 
// d01e96a14a9449a7a6f152442231805




// DOM VARIABLES

const weatherDiv = document.getElementById("weather");
const cityForm = document.getElementById("cityForm");


// Step-1: hard code a fetch() request to make sure that I am hitting the correct API endpoint (url that returns specific data), log it to the console

//base url http://api.weatherapi.com/v1 
//	/current.json 
// 	/forecast.json
//   /marine.json
//	/astronomy.json



const getCurrentData = async function (city) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d01e96a14a9449a7a6f152442231805&q=${city}&aqi=no`);
  const currentData = await response.json();
  return currentData;
}
//get astro data
const getAstroData = async function (city) {
  const response = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=d01e96a14a9449a7a6f152442231805&q=${city}&aqi=no`);
  const astroData = await response.json();
  return astroData;
}

//To write the degree symbol in HTML use the HTML entity    &deg;  


// Step-2: Display current weather from city requested on the screen
const displayCurrentData = async function (city) {
  const currentData = await getCurrentData(city);
  console.log(currentData)
  // weatherDiv.innerHTML = 
  // `<img class="icons" src="${currentData.current.condition.icon}" alt="${currentData.current.condition.text}">`
  weatherDiv.innerHTML = 
    `<h3>${currentData.location.name} weather:<br>${currentData.current.temp_f} + ${currentData.current.condition.text}</h3>`

}

// ${currentData.location.region}


//grab astro div
const astroDiv = document.getElementById("astroDiv");
//get astro data
const displayAstroData = async function (city) {
  const astroData = await getAstroData(city);
  // console.log(astroData)
  astroDiv.innerHTML += `<p class="astro">sunrise<span class="emoji">🐈</span> ${astroData.astronomy.astro.sunrise}</p>`
  astroDiv.innerHTML +=  `<p class="astro">sunset<span class="emoji">🐈‍⬛</span>  ${astroData.astronomy.astro.sunset}</p>`

}






  // Step-3: take user input from the html and search for the city requested
  cityForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userCity = document.getElementById("city").value;
    displayCurrentData(userCity);
    displayAstroData(userCity);
    cityForm.reset();
  })


  /*currentData.current.feelslike_f
forecast.forecastday.day.mintemp_f
 forecast.forecastday.day.maxtemp_f */
// Step-4: Store searched cities in localStorage




// https://fonts.google.com/icons?preview.text=what%27s%20the%20weather%20gonna%20be%20like%3F&preview.size=37&preview.layout=row&preview.text_type=custom&category=Sans+Serif,Display&sort=popularity&subset=latin&noto.script=Latn&icon.style=Sharp&icon.query=weather


