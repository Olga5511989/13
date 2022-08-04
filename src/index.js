function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#change-temp");
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
}

function searchCity(city) {
  let apiKey = "aaa10cb8b440ff19f19247dc9f45503a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}
