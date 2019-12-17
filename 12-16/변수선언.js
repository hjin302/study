
/*
  '호이스팅'이라는 개념이 적용..
  당장 알고 넘어가야 하는 것은, VAR 사용 자제
  LET, CONST 사용 권장
*/

console.log('A : ', A) // A 참조
var A = '나는 A입니다'; // 선언과 초기화


let B = '나는 B입니다'; // 선언과 초기화
console.log('B :: ', B) // B 참조

const C = '나는 C'
console.log('C :: ', C)
C += '입니다';
console.log('C :: ', C)

