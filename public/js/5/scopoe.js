// scope.js
// 전역(global) vs 지역(local)

// var & let, const의 차이
// var: 전역 변수, 함수 안이냐 밖이냐로 영역이 나뉨
// let, const: 블록 안이 영역

var myAge = 20;

function showAge() {
  var myAge = 22;
  console.log(myAge + 1);
}
showAge();

{
  var myAge = 10;
  myAge += 1;
}

console.log(myAge + 1);