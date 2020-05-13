const form = document.querySelector(".js-form"); // js-form 클래스를 받아옴
const input = form.querySelector("input"); // input tag 들을 받아옴
const greeting = document.querySelector(".js-greetings"); //  js-greetings 클래스를 받아옴

const USER_LS = "currentUser"; // User 확인을 위한 변수
const SHOWING_CN = "showing"; // css 변환을 위한 변수

function saveName(text) {
  // local storage에 currentUser로 saveName 함수에 입력받은 텍스트를 유저 이름으로 수정
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); // placeholder 이벤트 막기
  const currentValue = input.value; // 현재 입력된 값 저장
  paintGreeting(currentValue); // input 값 인수로 보내기
  saveName(currentValue); // 현재 값을 local storage에 저장
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); // 기존의 form의 input이 안보이게함
  greeting.classList.add(SHOWING_CN); // js-greeting h4 태그가 보임
  greeting.innerText = `Hello ${text}`; // js-greeting h4 태그에 text입력
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); // 저장된 유저 이름을 불러온다

  if (currentUser === null) {
    askForName(); // currentUser가 비어있다면 askForName 호출
  } else {
    paintGreeting(currentUser); // currentuser가 있다면 paintGreeting 호출
  }
}

function init() {
  loadName();
}

init();
