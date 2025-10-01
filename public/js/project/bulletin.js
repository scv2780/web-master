// bulletin.js

const postContainer = document.getElementById("postContainer");
const topBtn = document.getElementById("topBtn");
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // 로그인 상태 기억

// 네비게이션 로그인/로그아웃 토글
const nav = document.querySelector("nav");

function renderNav() {
  if (isLoggedIn) {
    nav.innerHTML = `<a href="#" id="logoutBtn">로그아웃</a>`;
  } else {
    nav.innerHTML = `
      <a href="login.html">로그인</a> |
      <a href="register.html">회원가입</a>
    `;
  }
}

renderNav();
// 로그아웃 기능
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "logoutBtn") {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "false");
    isLoggedIn = false;
    renderNav();
    alert("로그아웃 되었습니다.");
  }
});

// 게시물 작성 버튼 동작
const writeBtn = document.getElementById("writePostBtn");
writeBtn.addEventListener("click", () => {
  if (isLoggedIn) {
    alert("게시글 작성 페이지로 이동합니다!");
    // 게시글 작성 페이지로 이동
    location.href = "write.html";
  } else {
    alert("로그인 후 이용 가능합니다.");
    location.href = "login.html";
  }
});

// 예시 게시글 데이터 (author, likes, comments 추가)
let posts = [];
for (let i = 1; i <= 100; i++) {
  posts.push({
    title: `게시글 제목 ${i}`,
    content: `여기는 ${i}번째 게시글 내용입니다.`,
    author: `닉네임${Math.floor(Math.random() * 10) + 1}`, // 예시 닉네임
    likes: Math.floor(Math.random() * 100), // 0~99 사이의 랜덤 좋아요 수
    comments: Math.floor(Math.random() * 50) // 0~49 사이의 랜덤 댓글 수
  });
}

let loadedCount = 0; // 현재까지 불러온 게시글 수
const loadBatch = 6; // 한 번에 불러올 개수

function loadPosts() {
  const nextPosts = posts.slice(loadedCount, loadedCount + loadBatch);
  nextPosts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";

    // **게시글 카드 내부 HTML 구조 변경**
    div.innerHTML = `
      <div>
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
      <div class="post-footer">
        <span class="post-author">${post.author}</span>
        <span class="post-stats">좋아요 ${post.likes} · 댓글 ${post.comments}</span>
      </div>
    `;
    postContainer.appendChild(div);
  });
  loadedCount += loadBatch;
}

// 처음 로드 시 일부 게시글 불러오기
loadPosts();

// 스크롤 시 더 불러오기
window.addEventListener("scroll", () => {
  // 스크롤이 페이지 끝에 가까워졌을 때 다음 게시글 로드
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (loadedCount < posts.length) { // 로드할 게시글이 남아있을 때만 실행
      loadPosts();
    }
  }

  // 맨 위 버튼 보이기/숨기기
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// 맨 위로 이동
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});