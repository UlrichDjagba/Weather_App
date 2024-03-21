const apiKey = "4f3c40aded19d6eb8c2708c4b0c34913";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";

async function checkWeather(city) {
    const response = await fetch(
        `${apiUrl}&q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
}

checkWeather()