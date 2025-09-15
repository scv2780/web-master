//
//

let students = [{
  stdNo: 100,
  stdName: '홍길동',
  score: 80
}, {
  stdNo: 200,
  stdName: '김길동',
  score: 85
}];

function createStdList() {
  for (i = 0; i < students.length; i++) {
    let tr = makeTr(students[i]);
    document.querySelector('#list tbody').appendChild(tr);
  }
}

//////////////////////////////////////////////

function makeTr(newElement) {
  let tr = document.createElement('tr');

  for (let prop in newElement) {
    let td = document.createElement('td');
    td.innerHTML = newElement[prop];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.addEventListener('click', function (e) {
    console.log(e.target.parentElement.parentElement.remove());
  })
  td.appendChild(btn);
  tr.appendChild(td);
  btn.innerHTML = '삭제';

  return tr;
}

//////////////////////////////////////////////

document.querySelector('#addBtn').addEventListener('click', function () {
  let newElement = {
    stdNo: document.querySelector('#student_no').value,
    stdName: document.querySelector('#student_name').value,
    score: document.querySelector('#score').value
  }
  let tr = makeTr(newElement);
  document.querySelector('#list tbody').appendChild(tr)
})

createStdList()