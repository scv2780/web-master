// todo.js
//

// e.stopPropagation(); //이벤트의 전파 차단. 
// // true를 넣으면 상위부터 내려온다 기본은 하위부터 상위



///////////////////////////////////////////////////////////////////
document.querySelectorAll('#myUL').forEach((item) => {
  item.addEventListener('click', function (e) {
    // e.stopPropagation();
    // console.dir(e.target);
    if (e.target.className != "checked") {
      e.target.classList.add('checked');
      let span = document.createElement('span');
      span.innerHTML = 'X';
      span.classList.add('close');
      e.target.appendChild(span);
    } else {
      e.target.classList.remove('checked');
      e.target.lastChild.remove();
    }
    // console.dir(e.target);
    if (e.target.localName == "span") {
      e.target.parentElement.remove();
    }
  })
})
///////////////////////////////////////////////////////////////////
function newElement() {

  let li = document.createElement('li');
  li.innerHTML = document.querySelector('#myInput').value;
  document.querySelector('#myUL').appendChild(li);
}
///////////////////////////////////////////////////////////////////

// cloned.

// let txt = document.getElementById("myInput").value;
// 생성할 html

// let cloned = document.querySelector("#myUL>li").cloneNode(true); // 복제
// let spand = cloned.querySelector("span");

// cloned.className = ''; // 클래스 관리
// OR
// cloned.classList.remove('checked'); // checked된 것만cloned.classList.add('checked');

// cloned.innerHTML = txt;
// cloned.appendChild(spand);
// console.log(cloned);
// document.querySelector("#myUL").appendChild(cloned);