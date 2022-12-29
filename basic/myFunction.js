/**
 * 자바스크립트의 함수 정의
 * 함수란?
 * 내가 원하는 작업을 수행하기 위해 필요한 문(Statement)들의 집합.
 * 함수는이름과 매개변수를 갖으며 필요할 때 호출하여, 코드 블럭({})에 담긴 문(statement)들을 일괄 수행한다.
 * 한번 만들어 놓은 함수는 재사용이 가능하다.
 */

function myFunc(num) {
  return 5 + num;
}

console.log(
  `myFunc 함수에 매개변수로 5를 전달했을때의 값(value) = ${myFunc(5)}`
);

function myStr(str) {
  return "매개변수 str = " + str;
}

console.log(myStr("이영철"));
