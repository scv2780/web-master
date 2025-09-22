// class.js

const obj = {
  name: "Hong",
  age: 20,
  showInfo() {
    return `이름은 ${this.name}`;
  },
}; // 객체이면서(하나의 값)

// 쿨래스 (실사물의 전산적 표현 => 객체(클래스))
class Person {
  // 이름, 키, 몸무게, 혈액형
  constructor(name, height, weight, bloodType) {
    // 생성자.
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.bloodType = bloodType;
  }
  showInfo() {
    return `이름은 ${this.name}, 키는 ${this.height}`;
  }
}

const p1 = new Person("Hong", 178.9, 73.3, "0"); // 인스턴스 생성.
const p2 = new Person("Hwang", 175.3, 67.8, "A");
console.log(p1.name, p1.height, p1.showInfo());
console.log(p2.showInfo());