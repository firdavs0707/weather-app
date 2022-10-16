const api = {
  key: '8d33aeba394f972ae7434ca5bf7c3ec2',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
}

let nowl = new Date();
let data = document.querySelector('.date');
data.innerHTML = dateB(nowl);

const input = document.querySelector('.search-input');

input.addEventListener('keypress', check);

function check(e) {
  if (e.keyCode === 13) {
    getall(input.value);
  }
}

function getall (value) {
  fetch(`${api.baseurl}weather?q=${value}&units=metric&APPID=${api.key}`)
  .then((responsef) => {
    return responsef.json(); 
  })
  .then(display);
}

function display(responsef) {
  let city = document.querySelector('.city');
  city.innerHTML = `${responsef.name}, ${responsef.sys.country}`;
  
  let temperature = document.querySelector('.temp');
  temperature.innerHTML = `${Math.round(responsef.main.temp)}<span>℃</span>`;

  let weatherType = document.querySelector('.weather-type');
  weatherType.innerHTML = responsef.weather[0].main;

  let highLow = document.querySelector('.high-low');
  highLow.innerHTML = `${Math.round(responsef.main.temp_min)} ℃ / ${Math.round(responsef.main.temp_max)} ℃`
}

function dateB(now) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear(); 

  return `${day} ${date} ${month} ${year}`
}