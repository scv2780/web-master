// bulletin.js
console.log(localStorage)
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

// 게시물 목록
let page = 1; // 현재 페이지
const limit = 10; // 한 번에 불러올 개수
let isLoading = false; // 중복 요청 방지
let noMorePosts = false; // 더 이상 데이터 없을 때

async function loadPosts() {
  if (isLoading || noMorePosts)
    return;
  isLoading = true;

  try {
    const res = await fetch("http://localhost:3000/bulletin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page,
        limit
      })
    });
    const posts = await res.json();
    // console.log("불러온 게시글", posts);

    if (posts.length === 0) {
      noMorePosts = true;
      return;
    }

    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = "post";
      div.setAttribute("data-id", post.B_NUM); // 게시글 번호 저장

      // **게시글 카드 내부 HTML 구조 변경**
      div.innerHTML = `
      <div>
        <h3>${post.B_TITLE}</h3>
        <p class="post-content">${post.B_WRITE}</p>
        <p class="read-more">자세히 보기</p>
      </div>
      <div class="post-footer">
        <span class="post-author">${post.NICKNAME}</span>
        <span class="post-date">${new Date(post.B_DATE).toLocaleDateString()}</span>
        <span class="post-stats">좋아요 · 댓글 </span>
      </div>
    `;
      postContainer.appendChild(div);
    });

    page++; // 다음 페이지 준비
  } catch (err) {
    console.error("게시글 불러오기 오류:", err);
  } finally {
    isLoading = false;
  }
}
// 처음 로드 시 일부 게시글 불러오기
loadPosts();

// 스크롤 시 더 불러오기
window.addEventListener("scroll", () => {
  // 스크롤이 페이지 끝에 가까워졌을 때 다음 게시글 로드
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadPosts();
  }

  // 맨 위 버튼 보이기/숨기기
  if (document.documentElement.scrollTop > 100) {
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

// 게시글 누르면
document.addEventListener('click', (e) => {
  // console.dir(e.target);
  const postEl = e.target.closest(".post");
  if (postEl) {
    const postId = postEl.dataset.id; // 게시글 번호 가져오기
    location.href = `details.html?b_num=${postId}`;
  }
})