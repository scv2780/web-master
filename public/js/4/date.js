// date.js

const now = new Date();
console.log(now.toLocaleDateString() + now.toLocaleTimeString());

let today = new Date('2025-09-14 10:30:30');
today.setFullYear(2024);
today.setMonth(9);
console.log(today.toLocaleDateString() + today.toLocaleTimeString());

console.log('월:' + (today.getMonth() + 1)); // 1월달이 0부터
console.log('일:' + today.getDate());
console.log('요일:' + today.getDay()); // '일요일(0'), 월(1) ...토(6)

// 날짜 입력 하면 '2025-11-12' => 요일정보를 반환해주는 함수.
function translateDay(day) {
  // 날짜 -> 요일 반환.
  // let tday = new Date(day);
  // switch (tday.getDay()) {
  //   case 0:
  //     return '일요일';
  //   case 1:
  //     return '월요일';
  //   case 2:
  //     return '화요일';
  //   case 3:
  //     return '수요일';
  //   case 4:
  //     return '목요일';
  //   case 5:
  //     return '금요일';
  //   case 6:
  //     return '토요일';
  // }
  /////////////////////////
  let dayAry = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  let toDay = new Date(day);
  let tDay = toDay.getDay();
  return `${day}는 ${dayAry[tDay]}입니다`;
  /////////////////////////
}
console.log(translateDay('2025-9-16'));