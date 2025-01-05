async function getWeather() {  
    const city = document.getElementById('cityInput').value;  
    const apiKey = 'e7990743c07701e9dd3a57920959e5da'; // Replace with your actual API key  
    const url = 'https://api.openweathermap.org/data/2.5/weather';  

    try {  
        const response = await fetch(url);  
        const data = await response.json();  
        if (data.cod === 200) {  
            const weather = `Temperature: ${data.main.temp} °C, Weather: ${data.weather[0].description}`;  
            document.getElementById('weatherOutput').innerText = weather;  
        } else {  
            document.getElementById('weatherOutput').innerText = 'City not found';  
        }  
    } catch (error) {  
        console.error("Error fetching weather data:", error);  
    }  
}