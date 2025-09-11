/*
 * test3.js
 */
// prompt 함수를 활용. 2개의 숫자값을 입력.
// 2수의 합이 3의 배수인지 / 3의 배수가 아닌지 판별.
// 3의 배수입니다 or 3의 배수가 아닙니다
// "3" -> 3
let num1 = prompt("첫번째 숫자");
let num2 = prompt("두번째 숫자");
let result = parseInt(num1) + parseInt(num2);
// parseInt = 정수로 바꾸기, parseFloat = 실수로 바꾸기
if (result % 3 == 0) {
  console.log(result + "는 3의 배수입니다");
} else {
  console.log(result + "는 3의 배수가 아닙니다");
}