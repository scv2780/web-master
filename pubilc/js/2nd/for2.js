// for2.js
// 조건문 추가.
let sum = 0;
let sum2 = 0;
let sum3 = 0;

console.log(parseInt(Math.random() * 10) + 1); // 0 <= x < 10
// 1 ~ 10 까지만 범위.
for (let i = 1; i <= 100; i++) {
  sum = parseInt(Math.random() * 10) + 1;
  if (sum % 2 == 0) {
    sum2 += sum;
  }
  if (sum % 3 == 0) {
    sum3 += sum;
  }
}
console.log(`2의 배수의 합 = ${sum2}, 3의 배수의 합 = ${sum3}`)

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum2 += i;
//   }
//   if (i % 3 == 0) {
//     sum3 += i;
//   }
// }
// console.log(`2의 배수의 합은 ${sum2}, 3의 배수의 합은 ${sum3}`);

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     sum += i;
//     console.log(`i = ${i}, sum = ${sum}`);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   if (sum > 30) {
//     console.log(`${sum} + ${i} = ${sum + i}`);
//     console.log(`sum의 값은 ${sum}, i의 값은 ${i}`)
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   // 짝수일 경우에만 출력.
//   if (i % 2 == 0){
//   console.log(`현재 i의 값은 => ${i}`);
//   } else {
//     console.log(`홀수 => ${i}`)
//   }
// }