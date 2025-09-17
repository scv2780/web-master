// this.js

// 1) 함수에서는 window객체 가르킴
// 2) 이벤트에서는 이벤트를 받는 대상 가리킴
// 3) 객체에서는 객체를 가리킴

function sum(n1, n2) {
  console.log(this);
  return n1 + n2;
}
sum(1, 2);

document.querySelector('table')
  .addEventListener('click', function (e) { // 이벤트의 대상을 바로 지정할 수 있음
    console.log(e.target);
    console.log(this);
  })

const obj = {
  name: 'Hong',
  show: function () {
    console.log(this);
    return `이름은 ${this.name}`;
  }
}
obj.show()
console.log(obj.show());