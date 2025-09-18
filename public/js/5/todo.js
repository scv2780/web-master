// todo.js
// 반복문 활용해서 출력.
// *
// **
// ***
// ****
// *****

let star1 = '*'
for (let i = 0; i < 5; i++) {
  console.log(star1);
  star1 += '*';
}

let star2 = '*'
for (let i = 0; i < 5; i++) {
  document.writeln(`${star2}<br>`);
  star2 += '*';
}

for (let i = 5; i >= 1; i--) {
  let star3 = '';
  for (let j = 0; j < i; j++) {
    star3 += '*';
  }
  console.log(star3);
}

let line = 5;

for (let i = line; i >= 1; i--) {
  let star4 = '';
  for (let j = 1; j < i; j++) {
    star4 += ' ';
  }
  for (let p = 0; p < line - i + 1; p++) {
    star4 += '*';
  }
  console.log(star4);
}

for (let i = line; i >= 1; i--) {
  let star5 = '';
  for (let p = 0; p < line - i; p++) {
    star5 += ' ';
  }
  for (let j = 0; j < i; j++) {
    star5 += '*';
  }
  console.log(star5);
}