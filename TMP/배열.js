/*
  html에서 속성들은 ""을 이용해서 값을 표현함

  <a href="http://naver.com">링크</a>

  js에서는 '' 을 이용해서 문자를 쓴다.

*/

let a = 1;
console.log(typeof a);
// java : integer
// js : number
a = 1.1;
console.log(typeof a);
// java : float
// js : number
a = '1';
console.log(typeof a);
// java : char
// js : string

a = '123';
console.log(typeof a);
// java : string
// js : string


let arr = [
  {
    'name': 'apple',
    'count': 2
  },
  {
    'name': 'orange',
    'count': 5
  },
  {
    'name': 'pear',
    'count': 3
  },
  {
    'name': 'orange',
    'count': 16
  }
];
console.log(typeof arr);
// java : 배열
// js : object
console.log(typeof arr[0]);
// js : object
console.log(typeof arr[0].name);
// js : string


let newArr = arr.filter(function (item) {
  return item.name === 'orange';
});
console.log('Filter results:', newArr);
