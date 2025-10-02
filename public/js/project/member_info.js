    // member_info.js

    const form = document.getElementById("signupForm");
    const passwordInput = document.getElementById("password");
    const pwError = document.getElementById("pwError");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let mId = document.querySelector('#userid').value;
      let mPw = document.querySelector('#password').value;
      let mNick = document.querySelector('#nickname').value;
      let mName = document.querySelector('#name').value;
      let mTel = document.querySelector('#tel').value;
      let mMail = document.querySelector('#email').value;

      // json 포맷으로 서버 전달.
      fetch('http://localhost:3000/member_info', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            mId,
            mPw,
            mNick,
            mName,
            mTel,
            mMail
          })
        })
        .then(response => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((err) => console.log(err))

      alert("회원가입이 완료되었습니다! 🎶");
      location.href = "login.html";
      form.reset();
    });