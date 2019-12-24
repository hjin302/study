const products = [{
	name: '잠옷',
	price: 10000,
	quantity : 20,
}, {
	name: '치약',
	price: 5000,
	quantity : 100,
}, {
	name: '컴퓨터',
	price: 100000,
	quantity : 10,
}, {
	name: '안경',
	price: 70000,
	quantity : 50,
}, {
	name: '수건',
	price: 5000,
	quantity : 70,
}]
const log = console.log
const acc_초기값 = [];

log(products.reduce((acc, cur, idx, src) => {
  // console.log(`acc : ${acc}`)
  // console.log(`cur : `,cur)
  // console.log(`idx : ${idx}`)
  // console.log(`src : ${src}`)
  acc.push(cur);
  return acc;
}, acc_초기값))
