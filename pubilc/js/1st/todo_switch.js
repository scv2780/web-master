/*
* todo_switch.js
*/
function calculate() {
  let first = parseInt(document.querySelector("#user1").value);
  let last = parseInt(document.querySelector("#user2").value);
  let opr = document.querySelector("#oper").value;
  // let result;
  console.log(first, last, opr);
  switch (opr) {
    case '+':
      result = parseInt(first) + parseInt(last); break;
    case '-':
      result = first - last; break;
    case '*':
      result = first * last; break;
    case '/':
      result = first / last; break;
  }
  document.querySelector("#result").value = result;
}