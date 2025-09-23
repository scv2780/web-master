//

document.querySelector('#suBtn').addEventListener('click', function (e) {
  let uId = document.querySelector('#user-id').value;
  let uPw = document.querySelector('#user-pw1').value;
  let uPw2 = document.querySelector('#user-pw2').value;

  console.log(e.target);
  console.log(uId.length);
  if (uId.length < 4 || uId.length > 15) {
    alert('4글자 이상 15글자 이하로 작성해주세요.')
    document.querySelector('#user-id').value = '';
    document.querySelector('#user-id').value.focus();
  }
  if (uPw.length < 8) {
    alert('8자리 이상 입력하세요.')
    document.querySelector('#user-pw1').value = '';
    document.querySelector('#user-id').value.focus();
  }
  if (uPw != uPw2) {
    alert('비밀번호가 일치하지 않습니다.')
    document.querySelector('#user-pw1').value = '';
    document.querySelector('#user-id').value.focus();
  }
})