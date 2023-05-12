function displayweather() {
  city = cityname.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab1364da738a58520340762f81069661`).then(data => data.json())
    .then(data => displaydata(data))
}

function displaydata(weatherdetail) {
  id = weatherdetail.weather[0].id;
  country = weatherdetail.sys.country;
  des = weatherdetail.weather[0].description;
  pressure = Math.round(weatherdetail.main.pressure - 273.15);
  temp = Math.round(weatherdetail.main.temp - 273.15);
  humidity = weatherdetail.main.humidity;
  pressure = weatherdetail.main.pressure
  feels = Math.round(weatherdetail.main.feels_like - 273.15);

  weatherdata.innerHTML = `<div class="row" style="margin-left:8%;margin-top:5%">
  <div class="card">
    <div class="card-body p-5">
    <h4 style="color:#07f2f2">Weather App</h4>
    <hr>
    <h5 class="card-title">${temp}°C</h5>
    <h5 class="card-title">${des}°C</h5>
      <h5 class="card-title">${city},${country}</h5>
      <h5 class="card-title"></h5>
      <div class="row">
      <div class="col-6 mt-5" style="border:1px black solid">
      <h5>${feels}°C</h5>
      <h6>Feels Like</h6>
      </div>
      <div class="col-6 mt-5" style="border:1px black solid">
      <h5>${humidity}°C</h5>
      <h6>Humidity</h6>
      </div></div>
      </div>
    </div>
  </div>
  </div>`
}
