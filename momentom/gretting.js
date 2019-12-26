const form = document.querySelector(".js-form"),
  input = form.querySelector("input");
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); 
  const currentValue = input.value;
  paintGreeting(currentValue); 
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
} 

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText=`Hello ${text} `;
  const btn = document.createElement('button');
  const cd = document.getElementsByClassName('greeting')
  btn.textContent = '이름변경';
  cd[0].append(btn);
  btn.addEventListener("click", onClickCdBtn);
}

function onClickCdBtn(event){
  event.preventDefault(); 
  const newName = document.createElement('input');
  const btn = document.createElement('button');
  const cd = document.getElementsByClassName('greeting')
  btn.textContent = '변경하기';
  cd[0].append(newName);
  cd[0].append(btn);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){//유저가 없는 경우 
    askForName();  
  }else{ //유저가 있는 경우
    paintGreeting(currentUser);
  }
}


function init() {
  loadName();
}
init();
