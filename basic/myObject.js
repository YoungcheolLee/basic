/**
 * Object 정의
 * 자바스크립트는 객체(object) 기반의 스크립트 언어이다.
 * 원시타입(Primitive type)을 제외한 나머지 값(함수, 배열, 정규표현식 등)은 모두 객체(object)이다.
 *  ㄴ number, string, boolean, Symbol, null, undefined
 * 객체는 키와 값으로 이루어진 프로퍼티의 집합이다.
 */

let myObject = {
  name: "gildongHong",
  age: 20,
  hobby: null,
  weight: undefined,
  exercise: false,
  study: true,
  symbol: Symbol("symbol"),
};

let funcObj = {
  myFunc: function (animal) {
    return `Hello i'm ${animal}!`;
  },
};

let arrObj = {
  myArr: ["puppy", "cat", "bird"],
};

console.log(myObject);
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.hobby);
console.log(myObject.weight);
console.log(myObject.exercise);
console.log(myObject.study);
console.log(myObject.symbol);

console.log(typeof myObject);

console.log(funcObj);
console.log(funcObj.myFunc("puppy"));

console.log(typeof funcObj);

console.log(arrObj);
console.log(typeof arrObj);
