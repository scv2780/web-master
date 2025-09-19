// fetch.js
fetch("http://localhost:3000/points") // Promise 객체반환.
  .then(function (response) {
    console.log(response);
    return response.json(); // 자바스크립트의 객체변경.
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });