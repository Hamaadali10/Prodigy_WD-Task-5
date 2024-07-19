document.getElementById('searchBtn').addEventListener('click', fetchWeather);
document.getElementById('locationInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    fetchWeather();
  }
});

function fetchWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = 'your_api_key';  // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => alert('Location not found'));
}

function displayWeather(data) {
  const weatherDetails = document.getElementById('weatherDetails');
  weatherDetails.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>${data.weather[0].description}</p>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Humidity: ${data.main.humidity} %</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
