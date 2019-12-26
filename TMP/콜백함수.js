
const plus1 = (n, callback) => {
  callback(n + 1);
}

// plus1(1, result => {console.log(result)});
// plus1(1, result => {
//   console.log('안녕하세요...');
//   console.log('감사해요');
//   console.log(result);
// });

// const getDBResult = () => {
//   let results
//   setTimeout(() => {
//     results = 'DB 결과값';
//     return results;
//   }, 2000)
// }
// console.log(getDBResult())


const getDBResult = callback => {
  let results
  setTimeout(() => {
    results = 'DB 결과값';
    callback(results)
  }, 2000)
}
getDBResult(results => {
  console.log(results);
})
