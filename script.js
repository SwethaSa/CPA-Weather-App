let searchBtn = document.getElementById("search");

let names = document.getElementById("name");
let main = document.getElementById("main");
let temp = document.getElementById("temp");
let mintemp = document.getElementById("min-temp");
let maxtemp = document.getElementById("max-temp");
let city = document.getElementById("city");

let getweather = async () => {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city.value}&days=3`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a0ad50f288mshd815d945b15df12p1500f8jsned26d1ca0df2",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    showWeather(result);
    return result;
  } catch (error) {
    error = alert("Please enter a valid city name");
    location.reload();
  }
};

searchBtn.onclick = () => {
  getweather();
};

let showWeather = (data) => {
  names.innerHTML = data.location.name;
  main.innerHTML = data.current.condition.text;
  temp.innerHTML = data.current.temp_c;
  let forecast = data.forecast.forecastday;
  let mapping = forecast.map((val) => {
    let newmaxtemp = val.day.maxtemp_c;
    let newmintemp = val.day.mintemp_c;
    maxtemp.innerHTML = newmaxtemp;
    mintemp.innerHTML = newmintemp;
  });
};
