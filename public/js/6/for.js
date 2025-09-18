// for.js
// for .. of .. 배열에 대한 반복.
let numAry = [10, 20, 30, 40, 50];
let sum = 0;

for (let num of numAry) {
  sum += num;
}
console.log(numAry);

// for .. in .. 객체에 대한 반복.
let student = {
  sno: 100,
  sname: '김민수',
  scoer: 80,
};
for (let prop in student) {
  console.log(prop, student[prop]);
}