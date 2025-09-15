// 2개의 값을 입력받도록...화면구성.
// 계산하는 기능 구현.
// 연산(더하기, 빼기, 곱하기, 나누기)
// plus, minus, multiply, divide 함수이름.

function change() {
  let n1 = parseInt(document.querySelector('#n1').value);
  let n2 = parseInt(document.querySelector('#n2').value);
  let result = 0;

  switch (document.querySelector('#opr').value) {

    case '+':
      result = plus(n1, n2);
      break;

    case '-':
      result = minus(n1, n2);
      break;

    case '*':
      result = multiply(n1, n2);
      break;

    case '/':
      result = divide(n1, n2);
      break;
  }
  document.querySelector('#n3').value = result;
}

function plus(n1, n2) {
  return n1 + n2;
}

function minus(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}