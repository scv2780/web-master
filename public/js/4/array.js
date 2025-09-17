// array.js

// let fruits = ['사과', '복숭아', '수박', '참외'];
// console.log(fruits[0]);
// fruits[1] = '멜론';
// console.log(fruits[1]);

// console.clear(); // 로그 지우기.
// for (let i = 0; i < 4; i++) {
//   console.log(fruits[i]);
// }

// let students = [{
//     stdNo: 100,
//     stdName: "김민기",
//     score: 80
//   },
//   {
//     stdNo: 200,
//     stdName: "김민준",
//     score: 85
//   },
//   {
//     stdNo: 300,
//     stdName: "박충식",
//     score: 88
//   }
// ];
// let str = `<ul>`;
// for (let i = 0; i < 3; i++) {
//   console.log(students[i].stdName);
//   str += `<li>학생번호: ${students[i].stdNo}, 이름: ${students[i].stdName}</li>`;
// }
// str += `</ul>`;
// document.writeln(str);

// 배열 메소드 (593p)
const obj = {
  name: '홍길동',
  age: 20,
  showInfo: function () {
    return `이름은 ${obj.name}, 나이는 ${20}`
  }
}

const fruits = ['사과', '복숭아']; // 배열크기. fruits.length
fruits[fruits.length] = '배';
fruits[fruits.length] = '참외';
fruits[0] = '포도'; // 첫번째 위치의 값 '사과' -> '포도'
delete fruits[0]; // 포도 -> undefined.

// 메소드. 추가, 삭제(push, pop) 배열일 경우에만 사용가능, 자주 사용됨
fruits.push('메론');
fruits.pop(); // 맨 마지막 삭제
// unshift, shift
fruits.unshift('메론'); // 맨 앞에 추가
fruits.shift(); // 맨 앞에 값 제거
//자료형 -> string, number, boolean, {}, [], undefined, null

// splice 특정 위치 추가, 변경, 삭제
// 인덱스위치, 삭제할 갯수
fruits.splice(1, 1); // 1번째의 위치부터 1개 삭제
fruits.splice(0, 1, '사과'); // 0번째의 위치부터 1개 삭제하고 '사과'로 변경
fruits.splice(1, 0, '수박'); // 1번째의 위치에서 삭제없이 '수박' 추가
fruits.splice(1, 3, '수박'); // 1번째릐 위치부터 3개 삭제하고 '수박'넣기

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}