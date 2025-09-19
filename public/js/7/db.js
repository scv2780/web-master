// db.js

//추가버튼
console.log(document.forms['postForm']);
document.forms['postForm'].addEventListener('submit', function (e) {
  e.preventDefault();
  let title = document.querySelector('[name="title"]').value;
  let author = document.querySelector('[name="author"]').value;
  if (!title || !author) {
    alert("내용, 작성자 입력해주세요.")
    return;
  }
  // ajax. 요청방식:post
  fetch('http://localhost:3000/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;sharset=utf-8'
      },
      body: JSON.stringify({
        title,
        author
      })
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      let div = document.createElement('div');
      for (let prop in result) {
        let span = document.createElement('sapn');
        span.innerHTML = result[prop];
        span.setAttribute('class', 'data-' + prop);
        div.appendChild(span);
      }
      document.querySelector('#data-container').appendChild(div);
    })
    .catch((err) => console.log(err));
})

// 게시글목록.
fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(result => {
    console.log(result);
    result.forEach((item) => {
      let div = document.createElement('div');
      for (let prop in item) {
        let span = document.createElement('sapn');
        span.innerHTML = item[prop];
        span.setAttribute('class', 'data-' + prop);
        div.appendChild(span);
      }
      let btn = document.createElement('button');
      btn.innerHTML = '삭제';
      div.appendChild(btn);
      document.querySelector('#data-container').appendChild(div);
    })
  })
  .catch((err) => console.log(err));

btn.addEventListener('click', function (e) {

})