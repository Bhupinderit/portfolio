document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city name.');
    }
});

function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY';  // Replace 'YOUR_API_KEY' with your actual OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Unable to fetch weather data');
        });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <div class="weather-info">Temperature: ${data.main.temp}°C</div>
        <div class="weather-info">Weather: ${data.weather[0].description}</div>
        <div class="weather-info">Humidity: ${data.main.humidity}%</div>
        <div class="weather-info">Wind Speed: ${data.wind.speed} m/s</div>
    `;
    weatherResult.innerHTML = weatherHTML;
}
