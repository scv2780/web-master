// object.js

let obj = {};
let obj2 = obj;
console.log(obj == obj2);

let obj3 = {};

obj.name = 'Hong';
obj.age = 20;

obj3.name = 'Hong';
obj3.age = 20;

console.log(obj, obj3);
console.log(obj['name'] == obj3['name']);

// 원시 데이터 타입.
let str1 = 'Hong';
let str2 = 'Hong';

let ary = [];
console.log(typeof ary);

str1 = 10;
str2 = '10';

console.log(str1 === str2);

// 함수 정의식
// function sum(n1, n2) {
//   return n1 + n2;
// }
// 함수 표현식
// const sum = function (n1, n2) {
//   return n1 + n2;
// }

// 줄인 표현식 => 화살표 함수
const sum = (n1 = 0, n2 = 0) => n1 + n2; // 하나의 실행문만 있을때만 {} 생략가능

console.log(sum(sum(1, 2), sum(2)));

// [23, 10, 17, 45].forEach((item) => console.log(item));