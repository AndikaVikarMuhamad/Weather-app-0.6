let weather = {
  fetchWeather: function (kota) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        kota +
        "&units=metric&appid=81dc5ad28f653d202f13928ad50138fb&lang=id"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;
    const { sunrise, sunset } = data.sys;
    console.log(
      name,
      icon,
      description,
      temp,
      humidity,
      speed,
      sunrise,
      feels_like,
      sunset
    );
    document.querySelector(".kota").innerText = "Cuaca di " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".suhu").innerText = temp + "°C";
    document.querySelector(".deskripsi").innerText = description;
    document.querySelector(".angin").innerText =
      "Kecepatan angin: " + speed + "km/h";
    document.querySelector(".kelembapan").innerText =
      "Kelembapan: " + humidity + "%";
    document.querySelector(".cuaca").classList.remove("hide");

    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    document.body.style.backgroundImage =
      "url('https://onlyforweb.andikavikar135.repl.co/image/" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    weather.search();
  }
});
