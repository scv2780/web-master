// ajax.js
// 비동기방식 vs 동기방식
// Asynchronous javasript And XTMl (Json);



setTimeout(function () {
  console.log('첫번째 함수.');

  setTimeout(function () {
    console.log('두번째 함수.');

    setTimeout(function () {
      console.log('세번째 함수.');
    }, 500)
  }, 2000)
}, 1000)



function backup() {}
let members = [];
// 1.
const xhtp = new XMLHttpRequest();
xhtp.open('get', '../5/data.json');
xhtp.send();
xhtp.onload = function () {
  members = JSON.parse(xhtp.responseText);
};
//2
//3
console.log(members);