const apiKey = "592c191cce19101d2ae052db25aa88c3";

document.getElementById("getWeatherBtn").addEventListener("click", function() {
    const cityName = document.getElementById("cityInput").value.trim();
    if(cityName === "") {
        alert("Please enter a city name");
        return;
    }

    const city = `${cityName},IN`; // assume India
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if(!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            const weatherHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherHTML;
        })
        .catch(err => {
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${err.message}</p>`;
        });
});


