// array2.js

const numAry = new Array(); //[];
numAry.push(10); // 상수(const)이지만 이건 값을 변경하는 거라 가능
// numAry = []; // 불가능 새로운 배열을 재할당하는 것이라
numAry.push(25); // [10, 25]
numAry.push(34);
numAry.unshift(47);
numAry.splice(2, 0, 33);
numAry.splice(2, 0, 22, 19);

let sum = 0;
numAry.forEach(function (item, idx, ary) { //반복문. numAry의 들어있는 갯수만큼 실행
  console.log(item, idx, ary); // 배열안 요소의 값, 인덱스(위치), 전체 배열
  // if (item % 2 == 1) {
  //   sum += item;
  // }
  // if (idx % 2 == 0) {
  //   sum += item;
  // }
  if (idx == 0 || idx == ary.length - 1) {
    console.log(item);
    sum += item;
  }
});

console.log(`sum의 값은 ${sum}`);