// for.js
// 반복문.
let sum = 0;

for (let i = 1; i <= 10; i++) {
  document.writeln(`<p>sum:  + ${sum} + , i:  + ${i} => sum: ${sum + i}</p>`);
  sum += i;
}
console.log(sum);
document.writeln(`${sum}`)

document.writeln(`<table class='table table-striped-columns'>`);
document.writeln(`<thead>
                    <tr>
                      <th>단수</th>
                      <th></th>
                      <th>배수</th>
                      <th></th>
                      <th>결과</th>
                    </tr>
                  </thead
                  <tbody>`)
for (let i = 1; i <= 9; i++) {
  document.writeln(`<p>3 * ${i} = ${3 * i}</p>`);
  document.writeln(`<tr>
                      <td> 3 </td>
                      <td> * </td>
                      <td> ${i} </td>
                      <td> = </td>
                      <td>${3 * i}</td>
                    </tr>`)
}
document.writeln(`</tbody></table>`)
                  
// for (let i = 1; i <= 9; i++) {
//   document.writeln(`${i}단`);
//   for (let l = 1; l <=9; i++) {
//     document.writeln(`${i} * ${l} = ${i * l}<br>`);
//   }
// }                  
