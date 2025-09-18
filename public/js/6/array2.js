// array2.js
const xhtp = new XMLHttpRequest();
xhtp.open('get', '../5/data.json');
xhtp.send();
xhtp.onload = function () {
  console.log(JSON.parse(xhtp.responseText));
  // filter, map => 여자사원 => 사번, 이름(성+이름), 급여
  let mem = JSON.parse(xhtp.responseText);
  mem
    .filter((item) => item.gender == 'Female')
    .map(function (item) {
      let {
        id,
        first_name,
        last_name,
        salary
      } = item;
      let nm = `${first_name} ${last_name}`;
      return {
        id,
        nm,
        salary
      };
    })
    .forEach(item => {
      console.log(`사번: ${item.id}
        이름: ${item.nm}
        급여: ${item.salary}`);
    });
};