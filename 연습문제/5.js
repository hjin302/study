const products = [{
  name: '잠옷',
  price: 10000,
  quantity: 20,
}, {
  name: '치약',
  price: 5000,
  quantity: 100,
}, {
  name: '컴퓨터',
  price: 100000,
  quantity: 10,
}, {
  name: '안경',
  price: 70000,
  quantity: 50,
}, {
  name: '수건',
  price: 5000,
  quantity: 70,
}]

const log = console.log;
log(products.filter(e => e.price >= 10000));
log(products.map(e => e.name));
log(products.filter(e => e.quantity >= 50).map(e => e.name));

log(products.reduce((acc, cur, idx, src) => acc + cur.quantity, 0))
log(products.reduce((acc, cur, idx, src) => acc + cur.price, 0))

log(products.filter((e => e.price >= 10000)).reduce((acc, cur, idx, src) => acc + cur.price, 0))
