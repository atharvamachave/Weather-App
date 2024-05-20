const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '81eebc5300mshe8a4c0663eb83e9p12264djsn13b6bee37285',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};

const getWeather = (city) => {
  const url =
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
  console.log(city);
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById('temp').innerHTML = response.temp;
      document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
      document.getElementById('humidity').innerHTML = response.humidity;
      document.getElementById('min_temp').innerHTML = response.min_temp;
      document.getElementById('max_temp').innerHTML = response.max_temp;
      document.getElementById('wind_speed').innerHTML = response.wind_speed;
      document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
      document.getElementById('sunrise').innerHTML = response.sunrise;
      document.getElementById('sunset').innerHTML = response.sunset;
    })
    .catch((error) => console.error(error));
};

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('input').value;
  document.getElementById('city').innerHTML = city;
  getWeather(city);
});

getWeather('Pune');
