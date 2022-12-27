/**
 * 자바스크립트 기본 Value 정의서
 */

// 원시타입(Primitive data type)
// 1. Number
let myNum = 777.556;
console.log(`Primitive data type: number = ${myNum}`);

// 2. String
let myStr = "Photato";
console.log(`Primitive data type: String = ${myStr}`);

// 3. boolean : true
let trueBool = "true";
console.log(`Primitive data type: Boolean = ${trueBool}`);

// 3. boolean : false
let falseBool = "false";
console.log(`Primitive data type: Boolean = ${falseBool}`);

// 4. null
let myNull = null;
console.log(`Primitive data type: null = ${myNull}`);

// 5. undefined
let myUndefined = undefined;
console.log(`Primitive data type: null = ${myUndefined}`);

// 6. symbol
let mySymbol = Symbol(1);
console.log(mySymbol);

/**
 * 객체 타입(Object data type)
 * 1. Object
 */
let myObject = { name: "LeeYoungCheol", age: 1989 };
console.log(
  `Primitive data type: object in name = ${myObject.name} , age = ${myObject.age}`
);

let myArray = ["a", "b", "c"];
console.log(`배열 리터럴 myArray = ${myArray}`);

/**
 * 정규 표현식 리터럴(Literal)
 * 1. 정규 표현식은 "/"로 감싸진 패턴을 리터럴로 사용한다.
 * 2. 리터럴은 데이터 그 자체를 의미한다.
 * 3. 상수(Const) =변하지 않는 변수를 의미. (메모리 위치가 고정)
 *    리터럴은 변수의 값이 변하지 않는 데이터 (메모리 위치 안의 데이터가 고정)
 */
let myVal = /ab+c^/;
console.log(`정규표현식 myVal = ${myVal}`);

// 함수 리터럴
let myFunc = function () {
  let a = 1;
  let b = 2;
  return a + b;
};

console.log(`함수 리터럴 myFunc = ${myFunc()}`);
