const API_KEY = `3b00e18f9597f528c5e1de909b9e355d`;

const loadTemperature = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  displayTemperature(data);
};

const displayTemperature = (data) => {
  const temperature = document.getElementById("temp");
  temperature.innerText = data.main.temp;
};

loadTemperature("dhaka");
