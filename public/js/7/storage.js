// storage.js

// students: 이름
// 학번: 100, 이름: 홍길동, 점수: 80
// 학번: 200, 이름: 박철수, 점수: 85
// 학번: 300, 이름: 김민우, 점수: 76

// localStorage.setItem('students', JSON.stringify([{
//   sno: 100,
//   sname: '홍길동',
//   score: 80
// }, {
//   sno: 200,
//   sname: '박철수',
//   score: 85
// }, {
//   sno: 300,
//   sname: '박홍수',
//   score: 76
// }]));

function loadData() {
  document.querySelector('.data-container').innerHTML = '';
  let data = JSON.parse(localStorage.getItem('students'));
  data.forEach((item) => {
    let div = document.createElement('div');
    for (let prop in item) {
      let span = document.createElement('span');
      span.innerHTML = item[prop];
      span.setAttribute('class', 'data-' + prop);
      div.appendChild(span);
    }
    //수정화면으로 이동하는 버튼.
    let btn = document.createElement('button');
    btn.innerHTML = '수정';
    btn.addEventListener('click', function (e) {
      // search: sno 저장.
      localStorage.setItem('search', item.sno);
      location.href = 'update.html'
    })
    div.appendChild(btn);
    document.querySelector('.data-container').appendChild(div);
  });
}
loadData(); //함수 호출 목록출력


// 현재값을 불러오기
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let score = document.getElementById('score').value;
  // 입력값 확인
  if (!sno || !sname || !score) {
    alert('값을 입력하세요')
    return;
  }
  if (!confirm('저장하겠습니까?')) {
    alert('저장을 취소했습니다');
    return;
  }
  let data = JSON.parse(localStorage.getItem('students'));
  data.push({
    sno,
    sname,
    score
  });
  // storage에 저장
  localStorage.setItem('students', JSON.stringify(data));

  loadData();
});
console.log(window);