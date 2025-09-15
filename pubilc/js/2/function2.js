// function2.js

//매개값을 2개 => 1, 10 : 1+2+3+...10 작은 수 부터 1씩 더해서 큰수까지 더하기
let haha;
console.log(haha)
function sumBy2Number(n1, n2) {
  let sum = 0;
  if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
      sum += i;
      console.log(`두 숫자 사이의 합계는=> ${sum}`);
    }
  }
  if (n1 > n2) {
    for (let i = n2; i <= n1; i++) {
      sum += i;
      console.log(`두 숫자 사이의 합계는=> ${sum}`);
    }
  }
  else console.log(`두 수가 같다 ${n1}`);
  return sum; //함수를 호출한 영역으로 값을 반환.
}
let result = sumBy2Number(30, 10);
console.log(`합계는 ${result}`);

// 매개변수(2개)
function showMax(num1, num2) {
  if (num1 > num2) {
    console.log(`두 수중에서 큰값은 ${num1}`);
  }
  else {
    console.log(`en 수중에서 큰값은 ${num2}`);
  }
}
showMax(8, 9);

// 구구단 3단을 콘솔에 출력하는 함수 => multiplication
function multiplication(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
multiplication(5);