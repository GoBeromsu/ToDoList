const COORDS = "coords";
const API_KEY = "60b305147a7e043321d283d3c83b4fa2";
const weather = document.querySelector(".js-weather"); //js-weather class를 불러옴

function getWeather(latitude, longitude) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  )
    .then(function (json) {
      return json.json(); // json을 text로 읽어옴??
    })
    .then(function (json) {
      console.log(json);
      const temperture = json.main.temp; // json에서 온도 점수를 가져온다
      const place = json.name; // json에서 위치 정보를 가져온다
      weather.innerText = `${temperture}'C @${place}`;
    });

    // fetch로 url로 api를 받아온다
    // 




}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj)); // local storage에 COORDS란 변수에 coordsObj를 json으로 바꾸어 저장
}

function handleGeoSuccess(position) {
  console.log("success");
  const latitude = position.coords.latitude;//api에서 위치 정보를 가져옴
  const longitude = position.coords.longitude;

  const coordsObj = // latitude longitude 객체 선언
    {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError() {
  console.log("error");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess); // handleGeoSuccess를 콜백함수로 현재 위치를 받아옴
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS); // location 정보를 받아옴
  if (loadedCoords === null) {
    askForCoords(); // 정보가 없다면 askForCoords로 이동 
  } else {
    const parseCoords = JSON.parse(loadedCoords); //json parse
    getWeather(parseCoords.latitude, parseCoords.longitude); // location  정보 바탕으로 날씨를 받아옴
  }
}

function init() {
  loadCoords();
}

init();
