//
//

let students = [{
  stNum: 1,
  stName: '홍길동',
  score: 80
}, {
  stNum: 2,
  stName: '김수호',
  score: 90
}]

// 초기 목록
for (i = 0; i < students.length; i++) {
  let tr = document.createElement('tr');

  for (let prop in students[i]) {
    let td = document.createElement('td');
    td.innerHTML = students[i][prop];
    tr.appendChild(td);
    document.querySelector('#list tbody').appendChild(tr);
  }

  // tr 삭제
  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.addEventListener('click', function (e) {
    console.dir(e.target);
    console.log(e.target.parentElement.parentElement.remove());
  });
  btn.setAttribute('class', 'btn btn-danger');
  btn.innerHTML = '삭제';
  td.appendChild(btn);
  tr.appendChild(td);
}

// 등록
document.querySelector('#addBtn').addEventListener('click', function () {
  const newElement = {
    stdNo: document.querySelector('#student_no').value,
    stdName: document.querySelector('#student_name').value,
    score: document.querySelector('#score').value
  }
  let tr = document.createElement('tr');

  for (let prop in newElement) {
    let td = document.createElement('td');
    td.innerHTML = newElement[prop];
    tr.appendChild(td);
    document.querySelector('#list tbody').appendChild(tr);
  }
  // 삭제
  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.addEventListener('click', function (e) {
    console.dir(e.target);
    console.log(e.target.parentElement.parentElement.remove());
  });
  btn.setAttribute('class', 'btn btn-danger');
  btn.innerHTML = '삭제';
  td.appendChild(btn);
  tr.appendChild(td);
})