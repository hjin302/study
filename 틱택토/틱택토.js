var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];

var 비동기콜백 = function (이벤트){

};

for(i=1; i<=3; i++){
  var 줄 = document.createElement('tr');
  칸들.push([]);
  for(var j = 1; j<=3; j+=1){
    var 칸 = document.createElement('td');
    줄.appendChild(칸);
  }
  테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log(칸들);
