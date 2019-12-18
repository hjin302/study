// https://poiemaweb.com/js-immutability 참고

const str = '안녕하세요'; // 정상
// str += '반갑습니다'; // 오류
// str = '바이'; // 오류 


const arr = [1, 2, 3]; // 정상
arr.push(4); // 오류 => 정상
arr[0] = 0; // 오류 => 정상 
console.log(arr)
// arr = [0, 2, 3]; // 오류 

