// array.js
const names = ['김기홍', '박수홍', '황민우', '최민우', '김길동'];

// filter() => true값에 해당하는 요소들을 새로운 배열 저장.
const result = names.filter(item =>
  item.indexOf('김') == 0 //? true : false;
);
console.log(result);

const numbers = [23, 44, 22, 57, 80, 19];
const evenNumbers = numbers.filter((item) => item % 2 == 0);
console.log(evenNumbers);

// map() => A -> A' 매핑. 배열의 모양변경
const students = [{
  sno: 100,
  sname: '권수민',
  score: 80
}, {
  sno: 200,
  sname: '송승일',
  score: 75
}, {
  sno: 300,
  sname: '배진욱',
  score: 85
}, {
  sno: 400,
  sname: '박세민',
  score: 50
}];

students
  .map((item) => {
    let {
      sno,
      sname
    } = item;
    let ispass = item.score > 60 ? 'pass' : 'fail';
    return {
      sno,
      sname,
      ispass
    };
  })
  .filter((item) => item.ispass == 'pass')
  .forEach(item => {
    if (item.ispass == 'pass') {
      console.log(item);
    }
  });