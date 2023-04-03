const API_KEY = `3b00e18f9597f528c5e1de909b9e355d`;

const loadTemperature = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  displayTemperature(data);
};

const displayTemperature = (data) => {
  setInnerTextById("temp", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
};

const setInnerTextById = (id, text) => {
  const textId = document.getElementById(id);
  textId.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  document.getElementById("city").innerText = city;
  loadTemperature(city);
});

loadTemperature("dhaka");
