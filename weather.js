function displayweather() {
  city = cityname.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab1364da738a58520340762f81069661`).then(data => data.json())
    .then(data => displaydata(data))
}

function displaydata(weatherdetail) {
  icon=weatherdetail.weather[0].icon
  ciname = weatherdetail.name;
  country=weatherdetail.sys.country;
  des = weatherdetail.weather[0].description;
  pressure = Math.round(weatherdetail.main.pressure - 273.15);
  temp = Math.round(weatherdetail.main.temp - 273.15);
  humidity = weatherdetail.main.humidity;
  pressure = weatherdetail.main.pressure
  feels = Math.round(weatherdetail.main.feels_like - 273.15);

  weatherdata.innerHTML = `<div class="row  mt-2 ms-1 me-1" >
  <div class="card">
    <div class="card-body">
    <h5 style="color:#07f2f2">Weather App</h5>
    <img src="./icons/${icon}.png">;
    <h5 class="card-title"><i class="fa-solid fa-temperature-three-quarters"></i> ${temp}°C</h5>
    <h5 class="card-title"><i class="fa-solid fa-cloud"></i> ${des}°C</h5>
      <h5 class="card-title"><i class="fa-solid fa-location-dot"></i> ${ciname},${country}</h5>
      <h5 class="card-title"></h5>
      <div class="row">
      <div class="col-6 mt-5" style="border:1px black solid">
      <h5><i class="fa-solid fa-drum-steelpan"></i> ${feels}°C</h5>
      <h6>Feels Like</h6>
      </div>
      <div class="col-6 mt-5" style="border:1px black solid">
      <h5><i class="fa-solid fa-droplet"></i> ${humidity}°C</h5>
      <h6>Humidity</h6>
      </div></div>
      </div>
    </div>
  </div>
  </div>`
}
