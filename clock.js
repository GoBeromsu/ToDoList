const clockContainer = document.querySelector(".js-clock"); // .js-clock을 index.html에서 불러온다
const clockTitle = clockContainer.querySelector("h1"); // .js-clock의 child인 h1 tag를 불러온다

function getTime() {
  // 현재 시간을 가져오는 함수
  const date = new Date(); // js 자체 날짜 객체를 생성한다. 정적임
  const minutes = date.getMinutes(); // 객체 date 아래 minutes를 변수로 선언
  const hours = date.getHours(); // 위와 동일하게 hours를 변수로 선언
  const seconds = date.getSeconds();
  clockTitle.innerText = ` ${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;

  // ` `을 통해 shell 처럼 변수를 받아오고 쓸 수 있음
  // 삼항 연산자로 시 분 초가 10이하 일경우 0추가
}

function init() {
  setInterval(getTime, 1);
}

init();
