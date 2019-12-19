const students = ['케로로', '뽀로로', '짱구', '도라에몽'];

/*
  맨 앞에 둘리를 추가해주세요
  맨 뒤에 도라에몽을 제거해주세요
  맨 앞에 둘리를 제거해주세요
  맨 뒤에 도라에몽을 추가해주세요
*/

students.unshift('둘리');
students.pop();
students.shift();
students.push('도라에몽');

/*
  이름의 글자수가 3글자 이상인걸 출력해주세요
  모든 요소들의 이름을 `나는 케로로` 바꿔서 출력해주세요

  이름의 글자수가 3글자 이상인것들을 '나는 케로로'로 바꿔서 출력해주세요
*/

console.log(students.filter(student => student.length >=3).map(student => '나는 ' + student));
