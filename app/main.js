const temp = document.querySelector("#temperature");

const getCurrentWeather = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=dcaa0fda1a8ccd9fbbea884e9e3e3245`);
  const data = await response.json();

  const res = await fetch("https://www.latlong.net/c/?lat=-26.144689&long=28.042164");

  


  return {...data?.main, name: data.name };
}


window.addEventListener("load",async () => {
  // Get location
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (location) => {
      const { longitude, latitude } = location.coords;
      const data = await getCurrentWeather(latitude, longitude);
      temp.textContent += data.temp + "°C in " + data.name;
    });
  } else {
    alert("Your browser does not support GEOLOCATION")
  }
});