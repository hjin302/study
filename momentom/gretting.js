const
  form = document.querySelector(".js-form"),
  input = form.querySelector("input");
greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function grHandleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", grHandleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text} `;
  const cdBtn = document.createElement('button');
  const cd = document.getElementsByClassName('greeting')[0]
  cdBtn.textContent = '변경';
  cd.append(cdBtn);
  cdBtn.addEventListener("click", onClickCdBtn);
}

function onClickCdBtn(event) {
  event.preventDefault();
  //greeting.setAttribute('style', 'display:none');
  greeting.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", grHandleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) { //유저가 없는 경우 
    askForName();
  } else { //유저가 있는 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
