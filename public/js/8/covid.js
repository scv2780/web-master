// covid.js

const url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=961d2d832719a55961fcfdc2e4f9abbda26295f3b97a799f4d03e328b529c6ee';


let total = [] // 전체 센터 배역.
// 전체건수
fetch(url)
  .then((resp) => resp.json()) // json 포맷 -> 자바 스크립트 객체.
  .then((result) => {
    total = result.data;
    showPageList(1);
  })
  .catch((err) => console.log(err));

// 건수에 따라 페이징 목록 => 1,2,3,4,5,...29
function makePagingList() {
  const paging = {
    currPage: 1,
    startPage: 1,
    endPage: 10,
    prev: false,
    next: false,
    initPage(page = 1, totalCnt = 100) {
      let realEnd = Math.ceil(totalCnt / 10);
      this.currPage = page; // 13
      this.endPage = Math.ceil(page / 10) * 10;
      this.startPage = this.endPage - 9;
      this.prev = this.startPage == 1 ? false : true; // 이전 10개의 페이징 존재여부.
      // this.next = this.end > realEnd ? realEnd : this.end; // 이후 10개 페이징 존재여부.
      this.next = this.endPage < realEnd ? true : false; // 이후 10개 페이징 존재여부
    },
  };
  paging.initPage(7);
  console.log(paging);
  // ul tag
  let target = document.querySelector('ul.pagination');
  target.innerHTML = '';
  // 이전 페이징 생성.
  if (paging.prev) {
    let li = document.createElement('li');
    li.className = 'page-item';
    let a = document.createElement('a');
    a.innerText = 'previous';
    a.className = 'page-link';
    a.setAttribute('href', '#')
    li.appendChild(a);
    target.appendChild(li);
  } else {
    let li = document.createElement('li');
    li.className = 'page-item disabled';
    let a = document.createElement('a');
    a.innerText = 'previous';
    a.className = 'page-link';
    li.appendChild(a);
    target.appendChild(li);
  }

  // 페이징 생성.
  for (let s = paging.startPage; s <= paging.endPage; s++) {
    let li = document.createElement('li');
    li.className = 'page-item';
    let a = document.createElement('a');
    a.innerText = s;
    a.className = 'page-link';
    a.setAttribute('href', '#')
    li.appendChild(a);
    target.appendChild(li);
  }
  // 이후 페이징 생성
  if (paging.next) {
    let li = document.createElement('li');
    li.className = 'page-item';
    let a = document.createElement('a');
    a.innerText = 'Next';
    a.className = 'page-link';
    a.setAttribute('href', '#')
    li.appendChild(a);
    target.appendChild(li);
  } else {
    let li = document.createElement('li');
    li.className = 'page-item disabled';
    let a = document.createElement('a');
    a.innerText = 'Next';
    a.className = 'page-link';
    li.appendChild(a);
    target.appendChild(li);
  }
  //링크 이벤트 생성.
  pageLinkEvent();
}

makePagingList()

// 화면의 a태그에 링크생성.
function pageLinkEvent() {
  document.querySelectorAll('a.page-link').forEach((item) => {
    // 이벤트 등록
    item.addEventListener('click', function (e) {
      e.preventDefault(); // 기본기능 차단
      let page = item.innerHTML;
      showPageList(page);
    })
  })
}
pageLinkEvent();

// 페이지 목록 출력.
function showPageList(page = 1) {
  //초기화.
  document.querySelector('#centerList').innerHTML = '';
  let start = (page - 1) * 10;
  let end = page * 10;
  total.filter(item => item.id > start && item.id <= end)
    .forEach((center) => {
      // console.log(center);
      let tr = makeRow(center);
      document.querySelector('#centerList').appendChild(tr);
    });
}

// 센터 -> 한건 출력.
function makeRow(center) {
  const fields = ["id", "centerName", "address", "sido"];
  let tr = document.createElement('tr');
  for (let field of fields) {
    let td = document.createElement('td');
    td.innerHTML = center[field];
    tr.appendChild(td);
  }
  return tr;
}