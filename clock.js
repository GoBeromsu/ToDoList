const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = ` ${hours < 10 ? `0${hours}` : hours} : ${minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  setInterval(getTime, 1);
}

init();
