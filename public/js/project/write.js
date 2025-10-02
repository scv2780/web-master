// write.js
console.log(localStorage)
const saveBtn = document.getElementById("saveBtn");

// 로그인 여부 체크
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
if (!isLoggedIn) {
  alert("로그인 후 이용 가능합니다.");
  location.href = "login.html";
}

saveBtn.addEventListener("click", async () => {
  const title = document.getElementById("title").value.trim();
  const write = document.getElementById("content").value.trim();

  if (!title || !write) {
    return alert("제목과 내용을 모두 입력해주세요!");
  }

  try {
    const res = await fetch("http://localhost:3000/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        write,
        nickname: localStorage.getItem("nickname"),
        m_num: localStorage.getItem("m_num")
      })
    });

    if (res.ok) {
      alert("게시물이 작성되었습니다!");
      location.href = "bulletin.html";
    } else {
      const err = await res.json();
      alert("작성 실패: " + err.message);
    }
  } catch (error) {
    console.error("게시글 작성 오류:", error);
    alert("서버 오류가 발생했습니다.");
  }
});