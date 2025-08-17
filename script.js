async function getWeather() { 
const city = document.getElementById('cityInput').value.trim(); 
const resultDiv = document.getElementById('weatherResult'); 
const apiKey = '30a752858f26d6f8cf352a147f1f08f3'; 
if (city === "") { 
resultDiv.innerHTML = `<p>Please enter a city name.</p>`; 
return; 
} 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
try { 
resultDiv.innerHTML = `<p>Loading...</p>`; 
const response = await fetch(url); 
const data = await response.json(); 
if (data.cod === "404") { 
resultDiv.innerHTML = `<p>City not found. Please try again.</p>`; 
} else { 
const weatherInfo = ` 
<h2>${data.name}, ${data.sys.country}</h2> 
<p>Temperature: ${data.main.temp} °C</p> 
<p>Condition: ${data.weather[0].description}</p> 
<p>Humidity: ${data.main.humidity}%</p> 
<p>Wind Speed: ${data.wind.speed} m/s</p> 
`; 
resultDiv.innerHTML = weatherInfo; 
} 
} catch (error) { 
resultDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`; 
console.error(error); 
} 
}
