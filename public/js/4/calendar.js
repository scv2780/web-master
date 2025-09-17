// calendar.js
// 매개값으로 년, 월 활용.
let yyyy = 2024,
  mm = 8;

let holidays = [15, 23];

// 2025-8-1 7-31
let today = new Date();
today.setFullYear(yyyy);
today.setMonth(mm - 1);
today.setDate(1);
// 1일의 위치.
let spaces = today.getDay(); // 공란의 갯수
// 2025-08-01 => getDay() 요일정보.
// 이번달 말일 구하기
today.setMonth(mm);
let lastDate =
  new Date(today.getTime() - (1000 * 60 * 60 * 24))
lastDate = lastDate.getDate();

// 공란계산
let tr = document.createElement('tr');

for (let s = 0; s < spaces; s++) {
  let td = document.createElement('td');
  tr.appendChild(td);
}
// 날짜계산
for (let d = 1; d <= lastDate; d++) {
  let td = document.createElement('td');
  td.innerHTML = d
  tr.appendChild(td);
  if ((d + spaces) % 7 == 0) { // 새로운 줄 생성.
    td.setAttribute('class', 'saturday'); //attribute 지정.
    document.querySelector('#wd tbody').appendChild(tr);
    tr = document.createElement('tr');
  }
  if ((d + spaces) % 7 == 1) {
    td.setAttribute('class', 'sunday'); //attribute 지정.
  }
  // if (d == holidays[0]) {
  //   td.setAttribute('class', 'sunday'); //attribute 지정.
  // }
  // if (d == holidays[1]) {
  //   td.setAttribute('class', 'sunday'); //attribute 지정.
  // }
  ///////////////////////////////////
  // if (d == holidays[0] || d == holidays[1]) {
  //   td.setAttribute('class', 'sunday');
  // }
  ///////////////////////////////////
  for () {

  }
}
document.querySelector('#wd tbody').appendChild(tr);