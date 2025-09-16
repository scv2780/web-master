// setInteval.js
//
document.querySelector('table').remove();


let str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit provident odio ullam delectus nisi nostrum illum, labore sequi porro esse fugit, sunt eius nihil minus commodi doloremque possimus ex debitis.
` // sample data
console.log(str.length);
let strAry = str.split(' '); // 구분자(' ')를 기준으로 문자열 배열로 생성.
const outer = document.querySelector('div.outer');
// 화면 출력
strAry.forEach(function (item, idx, ary) {
  let div = document.createElement('div');
  div.innerText = item;
  div.setAttribute('class', 'inner'); // <div class = 'inner'>Lorem</div>
  outer.appendChild(div);
});

let timing = 60;
let job = null;

// 이벤트(찾기 버튼 클릭하면 alert('클릭'))
document.querySelector('#search_word')
  .addEventListener('click', function () {
    let search = document.querySelector("#user_value").value;
    let is_exist = false;
    document.querySelectorAll('div.inner').forEach(function (item, idx, ary) {
      // console.dir(item);
      if (search == item.innerHTML) {
        item.remove();
        is_exist = true;
      }
    });
    if (is_exist) {
      // alert('같은 값이 있습니다')
    } else {
      // alert('찾는 값이 없습니다')
    }
    document.querySelector("#user_value").value = '';
    // console.log(document.querySelectorAll('div.inner').length);

    if (timing > 0 && document.querySelectorAll('div.inner').length == 0) {
      alert('성공');
    }

    // alert('성공')/ alert('실패')
    if (job === null) {
      job = setInterval(function () {
        console.log(timing--);
        document.querySelector('#remaing').innerText = timing + '초';
        if (timing <= 0) {
          alert('실패');
          clearInterval(job);
          job = null;
        }
      }, 1000);
    }
  });