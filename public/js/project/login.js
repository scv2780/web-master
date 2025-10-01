    // login.js

    // 로그인 이벤트
    document.getElementById("loginForm").addEventListener("submit", async function (e) {
      e.preventDefault();
      const id = document.getElementById("loginId").value;
      const pw = document.getElementById("loginPw").value;

      if (!id || !pw) {
        alert("아이디와 비밀번호를 모두 입력하세요.");
        return;
      }

      try {
        // 백엔드 /login APT로 POST 요청 보내기
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // 입력한 아이디와 비밀번호를 JSON 형태로 body에 담아 전송
          body: JSON.stringify({
            loginId: id,
            loginPw: pw,
          }),
        });

        // 백엔드로부터 받은 응답(json)을 파싱
        const result = await response.json();

        if (response.ok) { // HTTP 상태 코드가 200-299일 경우
          // 로그인 성공
          alert(`${result.nickname}님, 환영합니다!`);
          // 로그인 상태 저장
          localStorage.setItem("isLoggedIn", "true");
          // 필요한 경우 닉네임도 저장 가능
          localStorage.setItem("nickname", result.nickname);
          // 로그인 성공 후 메인 페이지 등으로 이동
          location.href = "bulletin.html";
        } else {
          // 로그인 실패 (401 등)
          alert(result.message); // 서버가 보낸 에러 메시지 출력
        }
      } catch (error) {
        // 네트워크 오류 등 fetch 자체가 실패한 경우
        console.error("로그인 요청 실패:", error);
        alert("로그인 중 문제가 발생했습니다. 서버 상태를 확인해주세요.");
      }
    });

    // 회원가입 페이지로 이동
    function goSignup() {
      location.href = "register.html";
    }