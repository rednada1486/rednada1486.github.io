function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=kr&appid=9e58246ce6abd4c01b4e171853605caf`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather");
            weather.innerText = `${data.name} / ${data.main.temp}ºC / ${data.weather[0].main}`;
        });
}

function onGeoError() {
    alert("Can't find Your Location");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
