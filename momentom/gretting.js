const form = document.querySelector(".js-form"),
  input = form.querySelector("input");
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

// function saveName(text){
//   localStorage.setItem(USER_LS, text);
// }
const saveName = text => {
  localStorage.setItem(USER_LS, text)
}; 

// function handleSubmit(event) {
//   event.preventDefault(); 
//   const currentValue = input.value;
//   paintGreeting(currentValue); 
//   saveName(currentValue);
// }
const handleSubmit = event => {
  event.preventDefault(); 
  const currentValue = input.value;
  paintGreeting(currentValue); 
  saveName(currentValue);
}

// function askForName(){
//   form.classList.add(SHOWING_CN);
//   form.addEventListener("submit", handleSubmit);
// }

// const askForName -> 선언
// const askForName = 1; -> 선언과 초기화 
const askForName = () => {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

// function paintGreeting(text){
//   form.classList.remove(SHOWING_CN);
//   greeting.classList.add(SHOWING_CN);
//   greeting.innerText=`Hello ${text}`;
// }
const paintGreeting = text => {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText=`Hello ${text}`;
}  

// function loadName() {
//   const currentUser = localStorage.getItem(USER_LS);
//   if(currentUser === null){//유저가 없는 경우 
//     askForName();  
//   }else{ //유저가 있는 경우
//     paintGreeting(currentUser);
//   }
// }
const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){//유저가 없는 경우 
    askForName();  
  }else{ //유저가 있는 경우
    paintGreeting(currentUser);
  }
}

// function init() {
//   loadName();
// }
const init = () => {
  loadName();
}

