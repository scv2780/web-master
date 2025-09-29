//
// http://localhost:3000/emp => json데이터.
fetch('http://localhost:3000/emp/ALL/ALL/-1')
  .then((Response) => Response.json())
  .then((result) => {
    console.log(result);
    result.forEach(item => {
      let tr = makeRow(item)
      document.querySelector('#list').appendChild(tr);
    });
  })
  .catch((err) => console.log(err));

// 이벤트.
console.log(document.forms);
document.forms[0].addEventListener('submit', function (e) {
  // 기본기능 차단.
  e.preventDefault();
  let eno = document.querySelector('#empNo').value;
  let ename = document.querySelector('#empName').value;
  let job = document.querySelector('#job').value;
  let hd = document.querySelector('#hireDate').value;
  let deptno = document.querySelector('#deptNo').value;

  // json 포맷으로 서버 전달.
  fetch('http://localhost:3000/emp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        eno,
        ename,
        job,
        hd,
        deptno
      }),
    })
    .then(Response => Response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err))
});

// 조건 검색.
document.querySelector('#searchForm button[type="button"]')
  .addEventListener('click', function (e) {
    const ename = document.querySelector('#searchName').value || "ALL";
    const job = document.querySelector('#searchJob').value || "ALL";
    const deptno = document.querySelector('#searchDeptNo').value || "-1";
    let url = `http://localhost:3000/emp/${ename}/${job}/${deptno}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        document.querySelector('#list').innerHTML = ""; // 기존목록 비우기
        result.forEach(item => {
          let tr = makeRow(item)
          document.querySelector('#list').appendChild(tr);
        });
      })
      .catch((err) => console.log(err))
  })

// 사원정보 => row 생성.
function makeRow(employee) {
  let fields = ['EMPNO', 'ENAME', 'JOB', 'DNAME', 'SAL']
  let tr = document.createElement('tr');
  tr.setAttribute('data-eno', employee.EMPNO)
  fields.forEach(field => {
    let td = document.createElement('td');
    td.innerHTML = employee[field];
    tr.appendChild(td);
  });
  // 삭제버튼.
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', deleteFunc)
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
} // end of makeRow.

// 삭제버튼 클릭시 실행할 이벤트핸들러.
function deleteFunc() {
  let thisTr = this.parentElement.parentElement;
  let eno = this.parentElement.parentElement.dataset.eno;
  fetch('http://localhost:3000/emp/' + eno)
    .then(Response => Response.json())
    .then(result => {
      if (result.rowsAffected) {
        alert('성공');
        thisTr.remove();
      } else {
        alert('실패');
      }
    });
}

// 간단한 폼 제출 예시: 실제로 서버에 전송하지 않고 값 확인용으로 콘솔에 출력합니다.
document.getElementById('empForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const data = {
    empNo: e.target.empNo.value.trim(),
    empName: e.target.empName.value.trim(),
    job: e.target.job.value.trim(),
    hireDate: e.target.hireDate.value,
    deptNo: e.target.deptNo.value
  };
  // 브라우저 콘솔로 확인해 보세요.
  console.log('사원 등록 데이터:', data);
  alert('등록 완료! (콘솔에서 값 확인 가능)');
  // 필요하면 여기에 fetch로 서버에 전송하세요.
});