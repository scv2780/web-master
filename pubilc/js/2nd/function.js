// function.js
// 함수: 코드의 묶음.
// 반복되는 기능.
//전역(global) 영역.
let n1 = 10;
let n2 = 20; // 값 변경 가능.
//var n3 = 300; var 변수 선언은 자유롭지만 되도록 쓰지않는다.
const n3 = 3.14; // 값 변경 불가. 원주율 같은거 쓸때 변경하면 안 되는 것
n2 = 22;
// n3 = 33; // 불가

{
  let n2 = 2;
  console.log(`${n2}`);
}
console.log(`${n2}`);

function varFunc() {
  let n1 = 100;
  console.log(`local=> ${n1}`);
}
console.log(`global=> ${n1}`);
varFunc(); // 함수 호출.
// 10 + 5, 콘솔출력 : 기능을 정의.
function sum(n1, n2) { // sum함수의 지역(local) 영역.
  let result = n1 + n2;
  console.log(`결과는 ${result}`);
}

sum(n1, n2);