// db.js

// 이벤트.
document.querySelector('div.container>form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단.
    addpost()
  });

const xhtp1 = new XMLHttpRequest();
xhtp1.open('get', 'http://localhost:3000/comments'); // cmd에 json-server --watch db.json
xhtp1.send();
xhtp1.onload = function () {
  comments = JSON.parse(xhtp1.responseText);
}


// 글등록.
function addpost() {
  const xhtp = new XMLHttpRequest();
  xhtp.open('post', 'http://localhost:3000/posts');
  // 요청헤더: 컨텐트 형식 지정.
  xhtp.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
  xhtp.send(JSON.stringify({
    title: document.querySelector('#title').value, // id를 가져왔음
    author: document.querySelector('input[name="author"]').value // 속성으로도 가져올 수 있음. 속성선택자.
    // 변수를 선언해서 넣고 가져올 수도 있음
  }));
  xhtp.onload = function () {
    let result = JSON.parse(xhtp.responseText);
    let div = maleRow(result)

    document.querySelector('#data-container').appendChild(div);

    document.querySelector('#title').value = '';
    document.querySelector('input[name="author"]').value = '';
  }
}

// 게시글 한건에 대한 row 생성하는 함수.
function maleRow(post) {
  let fields = ['id', 'title', 'author'];
  let div = document.createElement('div');

  div.addEventListener('click', function () {
    const target = this;
    const post_id = this.children[0].innerHTML;
    const cList = document.querySelector('.comments');
    cList.innerHTML = "";
    const filterList = comments.filter((item) => item.postId == post_id);
    filterList.forEach((item) => {
      let div = document.createElement('div');
      let span = document.createElement('span');
      span.innerHTML = item.id;
      div.appendChild(span);
      span = document.createElement('span');
      span.innerHTML = item.content;
      div.appendChild(span);
      cList.appendChild(div);
    })
    target.appendChild(cList);
  })

  for (let i = 0; i < fields.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = post[fields[i]];
    div.appendChild(span);
    span.setAttribute('class', 'data-' + fields[i]);
  };
  return div; // <div><span data-id>93ea</span>*3</div>
}

// 글목록
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'http://localhost:3000/posts'); // cmd에 json-server --watch db.json
xhtp.send();
xhtp.onload = function () {
  let data = JSON.parse(xhtp.responseText);
  // 글목록 건수 => data
  data.forEach(function (item, idx, ary) {
    let div = maleRow(item)

    document.querySelector('#data-container').appendChild(div);
  });
}