// json.js
//

const xhtp = new XMLHttpRequest();
xhtp.open('get', 'data.json'); // .open는 서버의 요청할 페이지 지정.
xhtp.send(); // 실제 요청.
xhtp.onload = function () { // .onload 받아올때 발생하는 이벤트
  let data = JSON.parse(xhtp.responseText);
  let fields = ['id', 'first_name', 'last_name', 'gender', 'salary'];
  data.forEach(function (item, idx, ary) {
    let tr = document.createElement('tr');
    for (let i = 0; i < fields.length; i++) {
      let td = document.createElement('td');
      td.innerHTML = item[fields[i]];
      // console.log(item[fields[i]]);
      tr.appendChild(td);
    }
    document.querySelector('#list').appendChild(tr);
  });
}