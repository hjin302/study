function saveName(text){
  localStorage.setItem(USER_LS, text);
}
const fname = (...매개변수) => {
  // 함수 내용
} // 기본 형태

const f1 = text => localStorage.setItem(USER_LS, text); 


const f2 = (text) => {
  localStorage.setItem(USER_LS, text); 
}

const saveName = text => {
  localStorage.setItem(USER_LS, text)
}; 

/*
  f1 과 f2의 차이점
  1. 매개변수가 1개일 경우, () 생략 가능
  2. {} 생략시, return 문
*/
