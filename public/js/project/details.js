// details.js
const nav = document.getElementById("navMenu");
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // 로그인 상태 기억

function renderNav() {
  if (isLoggedIn) {
    nav.innerHTML = `
      <a href="bulletin.html">메인으로</a> |
      <a href="#" id="logoutBtn">로그아웃</a>
    `;
  } else {
    nav.innerHTML = `
      <a href="bulletin.html">메인으로</a> |
      <a href="login.html">로그인</a> |
      <a href="register.html">회원가입</a>
    `;
  }
}

renderNav();

// 로그아웃 이벤트
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "logoutBtn") {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "false");
    isLoggedIn = false;
    renderNav();
    alert("로그아웃 되었습니다.");
  }
});


const topBtn = document.getElementById("topBtn");
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const commentToggle = document.getElementById("commentToggle");
const commentSection = document.getElementById("commentSection");
const commentCount = document.getElementById("commentCount");
const commentsList = document.getElementById("commentsList");
const submitComment = document.getElementById("submitComment");
const commentInput = document.getElementById("commentInput");
const editBtn = document.getElementById("editBtn");

// 로그인 상태 & 내 글 여부 (임시)
let myPost = true; // 실제로는 서버에서 확인
let liked = false;

// 댓글 무한 로딩 변수
let commentPage = 1;
const commentLimit = 5; // 한 번에 가져올 댓글 개수
let isLoadingComments = false;
let noMoreComments = false;

// 수정 버튼 표시 여부
if (!isLoggedIn || !myPost) {
  editBtn.style.display = "none";
}

// 좋아요 토글
likeBtn.addEventListener("click", async () => {
  if (!isLoggedIn) {
    alert("로그인 후 이용 가능합니다.");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/toggleLike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        b_num,
        m_num: localStorage.getItem("m_num") // 로그인한 사용자 번호
      })
    });

    const data = await res.json();

    if (data.status === "liked") {
      likeBtn.style.color = "#ff3b3b";
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else if (data.status === "unliked") {
      likeBtn.style.color = "#aaa";
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
  } catch (err) {
    console.log("좋아요 처리 오류", err);
  }
});

// 댓글 섹션 토글
commentToggle.addEventListener("click", () => {
  commentSection.classList.toggle("hidden");
  commentToggle.classList.toggle("active"); // 아이콘 색상 유지

  if (!commentSection.classList.contains("hidden") && commentsList.childElementCount === 0) {
    loadComments(); // 처음 열 때 댓글 로딩
  }
});

// 댓글 불러오기 (무한 스크롤)
async function loadComments() {
  if (isLoadingComments || noMoreComments) return;
  isLoadingComments = true;

  try {
    const res = await fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postId: b_num, // 현재 게시글 번호 (예시)
        page: commentPage,
        limit: commentLimit
      })
    });

    const newComments = await res.json();

    if (newComments.length === 0) {
      noMoreComments = true;
      return;
    }

    newComments.forEach(c => {
      const div = document.createElement("div");
      div.className = "comment";
      div.innerHTML = `<span class="author">${c.NICKNAME}</span> ${c.C_WRITE}`;
      commentsList.appendChild(div);
    });

    commentPage++;
    commentCount.textContent = commentsList.childElementCount;
  } catch (err) {
    console.error("댓글 불러오기 오류:", err);
  } finally {
    isLoadingComments = false;
  }
}

// 댓글 영역 스크롤 이벤트 → 끝에 닿으면 추가 로딩
commentsList.addEventListener("scroll", () => {
  if (commentsList.scrollTop + commentsList.clientHeight >= commentsList.scrollHeight - 10) {
    loadComments();
  }
});

// 댓글 작성
submitComment.addEventListener("click", async () => {
  if (!isLoggedIn) {
    alert("로그인 후 이용 가능합니다.");
    return;
  }

  const text = commentInput.value.trim();
  if (text === "") return;
  console.log("aa")

  try {
    const res = await fetch("http://localhost:3000/addComment", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postId: b_num, // 현재 게시글 번호
        content: text,
        m_num: localStorage.getItem("m_num")
      })
    });

    if (res.ok) {
      console.log("aa")
      const newComment = await res.json();
      const div = document.createElement("div");
      div.className = "comment";
      div.innerHTML = `<span class="author">${newComment.NICKNAME}</span> ${newComment.C_WRITE}`;
      commentsList.insertBefore(div, commentsList.firstChild);
      commentInput.value = "";
      commentCount.textContent = commentsList.childElementCount;
    }
  } catch (err) {
    console.error("댓글 등록 오류:", err);
  }
});

// 맨 위로 이동 버튼
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// bulletin에서 게시물 클릭으로 받아온 b_num 가져오기
const urlParams = new URLSearchParams(window.location.search);
const b_num = urlParams.get("b_num");

// 게시글 상세 불러오기
async function loadPostDetail() {
  try {
    const res = await fetch("http://localhost:3000/postDetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        b_num
      })
    });

    if (!res.ok) {
      throw new Error("게시글을 불러오는 중 오류 발생");
    }

    const post = await res.json();

    // 받아온 데이터 화면에 넣기
    document.getElementById("postTitle").textContent = post.B_TITLE;
    document.getElementById("postContent").textContent = post.B_WRITE;
    document.getElementById("postAuthor").textContent = post.NICKNAME;
    document.getElementById("likeCount").textContent = post.LIKE_COUNT || 0;
    document.getElementById("commentCount").textContent = post.COMMENT_COUNT || 0;

    // 로그인한 사용자가 글 작성자인지 확인 -> 맞다면 수정 버튼 표시
    if (isLoggedIn && post.M_NUM === localStorage.getItem("m_num")) {
      editBtn.style.display = "inline-block";
    } else {
      editBtn.style.display = "none";
    }
  } catch (err) {
    console.error("게시글 불러오기 실패:", err);
  }
}
// 페이지 로드 시 실행
loadPostDetail();