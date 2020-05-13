const body = document.querySelector("body"); // body 태그에 접근한다

const IMG_NUMBER = 4; // 이미지 최대 갯수

function paintImage(imgNumber) {
  // 배경 이미지를 칠하는 함수
  const image = new Image(); // 이미지 객체를 생성
  image.src = `images/${imgNumber + 1}.jpg`; // 이미지 소스로 images 하위 폴더 이미지들을 추가
  image.classList.add("bgImage"); //   이미지를 bgImage라는 클래스로 추가한다
  body.prepend(image); // bgImage 클래스를 바디에 추가
}

function getRandom() {
  // 랜덤으로 숫자를 반환하는 함수
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
