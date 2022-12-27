/**
 * 자바스크립트 기본 연산자(Operator) 정의서
 */

// 1. 산술연산자
let multiply = 30 * 3;
console.log(`30 x 3 = ${multiply}`);

// 2. 문자연 연결 연산자
let joinStr = "Hello" + " World!";
console.log(`문자연결 연산자 Hello + World = ${joinStr}`);

// 3. 할당 연산자 (=)
let myPhoneNumber = "010-xxxx-1234";
console.log(myPhoneNumber);

// 4. 비교 연산자
let Compare = function (num) {
  if (num > 100) {
    console.log(`입력받은 숫자 : ${num} 은 100보다 큽니다.`);
  } else if (num <= 100) {
    console.log(`입력받은 숫자 : ${num}은 100보다 작습니다.`);
  } else {
    console.log(`입력받은 값: ${num} = 숫자가 아닙니다.`);
  }
};

console.log(Compare(5858));

// 5. 논리 연산자
let logic = 5 > 3;
console.log(`논리연산자1 : ${logic}`);

let logic2 = 5 > 3 && 3 > 5;
console.log(`논리연산자2 : ${logic2}`);

// 6. 타입 연산자
let myType = typeof "Potato";
console.log(`변수 myType은 어떤 타입입니까? ${myType}`);

let myType2 = typeof null;
console.log(`변수 myType2은 어떤 타입입니까? ${myType2}`);

let myType3 = typeof undefined;
console.log(`변수 myType3은 어떤 타입입니까? ${myType3}`);

let myType4 = typeof 14564.55;
console.log(`변수 myType4은 어떤 타입입니까? ${myType4}`);

let myType5 = typeof true;
console.log(`변수 myType5은 어떤 타입입니까? ${myType5}`);

let myType6 = typeof Symbol();
console.log(`변수 myType6은 어떤 타입입니까? ${myType6}`);

let myType7 = typeof false;
console.log(`변수 myType7은 어떤 타입입니까? ${myType7}`);

let myType8 = typeof { name: "lee", age: 1989 };
console.log(`변수 myType8은 어떤 타입입니까? ${myType8}`);

let myType9 = typeof Compare();
console.log(`변수 Compare()은 어떤 타입입니까? ${myType9}`);

// 인스턴스 생성 연산자
let now = new Date();
console.log(`현재 날짜 및 시간 = ${now}`);
