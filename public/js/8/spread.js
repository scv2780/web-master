// spread.js

//원시 데이터 타입
let fruit = "apple";
let newFruit = fruit;
newFruit += ", mango";
console.log(fruit, newFruit);

// 배열도 object.
const veggie = ["tomato", "cucumber", "veans"]; // ...veggie
const newVeggie = veggie; // 객체의 주소 동일.


newVeggie.push("peas");
console.log(veggie, newVeggie); // 같은 배열을 참조.
const anotherVeggie = [...veggie]; // ["tomato", "cucumber", "beans", "peas"]
veggie.push("peanuts");
console.log(veggie, anotherVeggie);

// 펼침연산자.
function Sum(a = 0, b = 0, ...num) {
  let result = a + b;
  for (let n of num) {
    result += n;
  }
  return result;
}
console.log(Sum(1, 2, 3, 4, 5, 6));

// 
const myFriend = {
  name: "Hong",
  age: 20,
};

const yourFriend = myFriend; // heap메모리의 주소 참조. 동기화 상태?
myFriend.age = 22;

const anFriend = {
  ...myFriend
};;; // 새로운 객체 생성 참조X 복제?
myFriend.name = "Hwang";

console.log(myFriend, yourFriend);