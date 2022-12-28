/**
 * javascript hoisting
 * 선언된 변수, 함수를 메모리 공간 선언 전 미리 할당하여 값을 초기화 시킨다.
 * 단, var로 선언된 변수만 초기화 된다. let과 const로 선언된 변수는 hoisting이 되어 미리 할당되지만 값을 초기화 하지 않기 때문에
 * 참조에러가 발생한다.
 */

// 1. 보통의 코드 (위 ~ 아래로 코드를 읽고 실행함)
var appleBox = "apple";
console.log(`appleBox = ${appleBox}`);
// 출력결과: apple

// 2. var로 선언한 변수는 초기화 된다.
console.log(`num을 선언하기 전 출력 = ${num}`); // 출력결과: undefined
var num = 77;
console.log(`num을 선언 후 출력 = ${num}`); // 출력결과: 77

// 3. let으로 선언한 변수는 초기화 되지 않는다.
console.log(`str을 선언하기 전 출력 = ${str}`); // 출력결과: initialzation Error
let str = "String";
console.log(`str을 선언 후 출력 = ${str}`); // 출력결과: String

// 4. 함수 표현 hoisting
myFunc(); // 출력결과: myFunc is not function Error

var myFunc = function () {
  console.log("myFunc 실행");
};

myFunc(); // 출력결과: myFUnc 실행

// ==================================================================

myFunction(); // 출력결과: myFunction 실행

function myFunction() {
  console.log("myFunction 실행");
}

myFunction(); // 출력결과: myFunction 실행
