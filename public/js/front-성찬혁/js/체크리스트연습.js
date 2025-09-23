//
//
// ul을 만들기
let ul = document.createElement('ul');
let itemL = [];
// ul을 itemList에 넣기
document.querySelector('#itemList').appendChild(ul);

// '추가' 버튼 기능 추가
document.querySelector('#add')
  .addEventListener('click', function (e) {
    let itemV = document.querySelector('#item').value; // itemV에 입력값을 저장
    if (itemL.includes(itemV)) {
      alert('중복');
      document.querySelector('#item').value = '';
      document.querySelector('#item').focus();
    }
    if (itemV == '') {
      alert('값을 입력하세요.')
      document.querySelector('#item').focus();
    } else {
      itemL.push(itemV);
      let li = document.createElement('li'); // li 만들기
      li.innerHTML = itemV; // li의 html에 itemV값 넣기
      let span = document.createElement('span'); // span 만들기
      span.innerHTML = 'X'; // span의 html에 'X' 넣기
      span.setAttribute('class', 'close'); // span에 'close'이름의 class추가
      li.appendChild(span); // li 안에 span 넣기
      document.querySelector('#itemList ul').appendChild(li); // #itemList안의 ul에 li 넣기
      document.querySelector('#item').value = '';
    }
  });

// 삭제기능 만들기
document.querySelector('#itemList')
  .addEventListener('click', function (e) {
    console.dir(e.target.parentElement);
    console.log(e.target.parentElement.firstChild.textContent);
    if (e.target.localName == "span") {
      console.log(itemL);
      let n = itemL.indexOf(e.target.parentElement.firstChild.textContent);
      itemL.splice(n, 1);
      e.target.parentElement.remove()
    }
  })