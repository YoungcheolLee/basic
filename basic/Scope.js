/**
 * javascript의 scope의 개념
 * 먼저 자바스크립트에서 var 키워드로 이용하면 블록 레벨 스코프(block-level scope)가 아닌, 함수 레벨 스코프(function-level scope)를 따른다.
 * ES6에서 도입된 let이나 const는 키워드는 블록 레벨 스코프(block-level scope) 사용이 가능하다.
 */

// 1. var 키워드는 함수레벨 스코프를 따른다.
if (true) {
  var a = 1;
}
console.log(a); // ==> if문안에 var a 선언 되었지만, if문 밖에서 a 를 참조 할 수 있음.

function a() {
  var b = 2;
  return b;
}
console.log(b); // ==> function안에 var b 선언 되었고, 함수 밖에서 b를 콘솔에 찍었을 땐 ReferenceError!

//  2.let 키워드는 블록레벨 스코프를 따른다.
if (true) {
  let l = 1;
}
console.log(l); // ==> if문안에 var a 선언 되었지만, if문 밖에서 a 를 참조 할 수 있음.

/**
 * 3. 전역변수 x의 값을 foo, bar 함수 내에서 값을 변경시킴
 * 중첩 스코프(Scope)는 가장 인접한 지역을 우선하여 참조한다.
 */

var x = 10;

function foo() {
  var x = 100;
  console.log(`foo() 지역변수 x = ${x}`);

  function bar() {
    x = 1000;
    console.log(`bar() 지역변수 x = ${x}`);
  }

  bar();
}
foo();
console.log(`x = ${x}`);

/**
 * 4. 렉시컬 스코프(정적 스코프)
 * 렉시컬 스코프는 함수를 어디에서 호출하였는지? 를 따지는 것이 아닌
 * 함수를 어디에 선언하였는지?를 따른다.
 *
 * 밑의 예제로 렉시컬 스코프를 설명하자면
 * 1) 기본적으로 foo(), bar() 은 같은 level에서 선언이 되어있다.
 * 2) 그리고 foo() 를 살펴보면 var x = 104; 라 정의해놓고 bar()를 호출하였다.
 * 3) 결과는? bar()가 선언된 위치에서의 x를 참조한다는 것. 그래서 결과는 1이다.
 *
 */
var x = 1;

function foo() {
  var x = 104;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();

/**
 * 암묵적 전역
 * foo() 안에 y는 선언되지 않은 식별자이다.
 * 당연히 y = 20을 실행하면 Reference Error가 발생할 것 처럼 생각되지만 마치 var y = 20인 것처럼 동작한다.
 * 이는 선언하지 않은 식별자 값을 할당하면 "전역객체 프로퍼티" 가 되기 때문이다.
 * 왜 이런것인가 하면 자바스크립트 엔진(javascript engine)은 y = 20; 을 window.y = 20; 으로 해석하여
 * 프로퍼티를 동적 생성한다. 결국 y는 전역 객체의 프로퍼티가 되어 마치 전역변수처럼 동작하는 것.
 * 이러한 현상을 암묵적 전역 이라 한다.
 */
var x = 10; // 전역 변수

function foo() {
  // 선언하지 않은 식별자
  y = 20;
  console.log(x + y);
}

foo();
