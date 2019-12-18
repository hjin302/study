/*
  함수를 값으로 다룰 수 있는 것
   
  - 변수안에 함수를 담을 수 있다.
  - 함수를 호출 할때, 인자로 함수를 전달할 수 있다.
  - 함수의 반환값으로 함수를 반환할 수 있다.
*/

const foo = function() {
  return "foobar";
}
console.log(foo()) // foobar
// 변수를 사용해서 호출


// 호출시, 인자로 함수 전달 확인...

// const t = (v) => {
//   return typeof v;
// }
const t = v => typeof v; 
// const t2 = f => {return f()};
const t2 = f => f();

console.log(t(foo)); // function
console.log(t(foo())); // string
console.log(t2(foo)); // foobar
// console.log(t2(foo())); // ERROR

// function add(a) { // 유명 함수
//   return function(b) { // 익명 함수
//     return a + b;
//   }
// }
const add = a => b => a + b;
console.log(add(1)(2)); // 3
const add3 = add(3); // 
/*
  const add3 = function(b) { // 익명 함수
    return 3 + b;
  }
*/
console.log(add3(5)) // 8

