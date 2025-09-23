//

let usList = [];
let ul = document.createElement('ul');
document.querySelector('#add')
  .addEventListener('click', function (e) {
    let uItem = document.querySelector('#item').value;
    if (usList.includes(uItem)) {
      alert('중복.');
      document.querySelector('#item').focus();
    } else {
      usList.push(uItem);
    }
    // console.log(usList);
    if (uItem == '') {
      alert('값을 입력해주세요.');
      document.querySelector('#item').focus();
    } else {
      let li = document.createElement('li');
      li.innerHTML = uItem;
      let span = document.createElement('span');
      span.innerHTML = 'X';
      span.classList.add('close');
      li.appendChild(span);
      ul.appendChild(li);
      document.querySelector('#itemList').appendChild(ul);
      document.querySelector('#item').value = '';
      document.querySelector('#item').focus();
    }
    console.log(usList);
  });

// li 삭제, 배열 삭제
document.querySelector('#itemList')
  .addEventListener('click', function (e) {
    console.dir(e.target.parentElement);
    // e.target이 span이면
    if (e.target.localName == "span") {
      let n = usList.indexOf(e.target.parentElement.firstChild.textContent);
      usList.splice(n, 1);
      e.target.parentElement.remove();
    }
  });