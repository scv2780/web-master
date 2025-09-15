/*
* condition.js
*/
function calculate() {
  let first = document.querySelector("#user1").value; // 문자열 숫자.
  let last = document.querySelector("#user2").value; // 문자열 숫자.
  let opr = document.querySelector("#oper").value; // 연산자 구하기.
  let result = 0; // 결과값을 저장.
  console.log(first, last, opr);
  //조건문.
  switch (opr) {
    case '+':
      result = parseInt(first) + parseInt(last); break; // 아래부분으로 진행 break;
    case '-':
      result = first - last; break;
    case '*':
      result = first * last; break;
    case '/':
      result = first / last; break;
  }
  document.querySelector("#result").value = result;
}