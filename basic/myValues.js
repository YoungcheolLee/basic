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
