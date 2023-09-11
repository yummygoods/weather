
//TODO: figure out why degree symbol:  &deg   isn't working 

const weatherDiv = document.getElementById("weather");
const cityForm = document.getElementById("cityForm");


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


//Displays current weather from city requested on the screen
const displayCurrentData = async function (city) {
  const currentData = await getCurrentData(city);
  console.log(currentData)
  // weatherDiv.innerHTML = 
  // `<img class="icons" src="${currentData.current.condition.icon}" alt="${currentData.current.condition.text}">`
  weatherDiv.innerHTML = 
    `<h3>${currentData.location.name} weather:<br>${currentData.current.temp_f} + ${currentData.current.condition.text}</h3>`

}



//grab astro div
const astroDiv = document.getElementById("astroDiv");

//get astro data
const displayAstroData = async function (city) {
  const astroData = await getAstroData(city);

 
  astroDiv.innerHTML += `<p class="astro">sunrise<span class="emoji">🐈</span> ${astroData.astronomy.astro.sunrise}</p>`
  astroDiv.innerHTML +=  `<p class="astro">sunset<span class="emoji">🐈‍⬛</span>  ${astroData.astronomy.astro.sunset}</p>`

}







  cityForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userCity = document.getElementById("city").value;
    displayCurrentData(userCity);
    displayAstroData(userCity);
    cityForm.reset();
  })



