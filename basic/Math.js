/**
 * Math object
 * 수학 상수와 함수를 위한 프로퍼티(property)와 메소드를 제공하는 빌트인 객체(object).
 * 생성자 함수가 아니라 정적(static) 프로퍼티와 메소드만을 제공한다.
 */

// math를 이용한 파이 값 반환예제
let pi = Math.PI;
console.log(pi);

// 절댓값(absolute value) 반환 예제. (반드시 0 혹은 1을 반환한다.)
let num = Math.abs(-1);
console.log(`num = ${num}`);

let str = Math.abs("-1");
console.log(`str = ${str}`);

let blank = Math.abs("");
console.log(`blank = ${blank}`);

let arr = Math.abs([]);
console.log(`arr = ${arr}`);

let myNull = Math.abs(null);
console.log(`null = ${myNull}`);

let undef = Math.abs(undefined);
console.log(`undefined = ${undef}`);

let obj = Math.abs({}); // NaN
console.log(`object = ${obj}`);

let str2 = Math.abs("string"); // NaN
console.log(`str2 = ${str2}`);

let myAbs = Math.abs(); // NaN
console.log(`absolute = ${myAbs}`);

// Math.round : 반올림 반환
let roundOne = Math.round(1.4); // 1
console.log(`1.4 반올림 값 = ${roundOne}`);

let roundTwo = Math.round(1.6); // 2
console.log(`1.6 반올림 값 = ${roundTwo}`);

let roundThree = Math.round(-1.4); // -1
console.log(`-1.4 반올림 값 = ${roundThree}`);

let roundFour = Math.round(-1.6); // -2
console.log(`-1.6 반올림 값 = ${roundFour}`);

let roundSix = Math.round(1); // 1
console.log(`1 반올림 값 = ${roundSix}`);

let roundSeven = Math.round(); // NaN
console.log(`round 공백 반올림 값 = ${roundSeven}`);
