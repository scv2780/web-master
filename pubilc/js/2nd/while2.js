// while2.js
//학생점수를 입력>>
let sum = 0;
let count = 0;
while (true) {
  let userValue = prompt("점수를 입력하세요. 종료하려면 exit");
  if (userValue == 'exit') {
    break;
  }
  sum += parseInt(userValue);
  count++;
}
console.log(`학생의 총 점수는 = ${sum}`);
console.log(`평균 = ${sum / count}`)
// let userValue = 'exit';
// console.log(userValue == 'exit');