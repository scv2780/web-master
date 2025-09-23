//
//


document.querySelector('#register')
  .addEventListener('submit', function () {
    let userI = document.querySelector('#user-id').value;
    let userP1 = document.querySelector('#user-pw1').value;
    let userP2 = document.querySelector('#user-pw2').value;
    console.log(userI.length);
    if (userI.length < 4 || userI.length > 15) {
      alert('4~15 자리의 영문과 숫자를 입력해주세요.')
      document.querySelector('#user-id').value = '';
      document.querySelector('#user-id').focus();
    }
    if (userP1.length < 8) {
      alert('8자리 이상 입력해주세요.')
      document.querySelector('#user-pw1').value = '';
      document.querySelector('#user-pw1').focus();
    }
    if (userP1 != userP2) {
      alert('비밀번호가 같지 않습니다.')
      document.querySelector('#user-pw1').value = '';
      document.querySelector('#user-pw2').value = '';
      document.querySelector('#user-pw1').focus();
    }
  })