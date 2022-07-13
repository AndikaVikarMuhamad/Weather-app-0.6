const weather = {
  fetchWeather: function (kota) {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=a5a6bc21da734aa495f15121220207&q=" +
        kota +
        "&lang=id"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data.location;
    const { temp_c, wind_mph, humidity, feelslike_c } = data.current;
    const { text, icon } = data.current.condition;
    console.log(name, temp_c, wind_mph, text, icon, humidity, feelslike_c);
    document.querySelector(".kota").innerText = "Cuaca di " + name;
    document.querySelector(".icon").src = "https:" + icon + "";
    document.querySelector(".suhu").innerText = temp_c + "°C";
    document.querySelector(".deskripsi").innerText = text;
    document.querySelector(".angin").innerText =
      "Kecepatan angin: " + wind_mph + "m/s";
    document.querySelector(".kelembapan").innerText =
      "Kelembapan: " + humidity + "%";
    document.querySelector(".card").classList.remove("dark");
    document.querySelector(".cuaca").classList.remove("hide");
    document.querySelector(".card").style.backgroundImage =
      "url('../img/" + text + ".jpg')";
    // document.body.style.backgroundImage =
    //   "url('https://source.unsplash.com/1600x900/?" + name + "')";
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
