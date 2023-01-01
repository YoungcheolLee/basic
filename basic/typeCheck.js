/**
 * Function.prototype.call 메소드를 이용하여 타입 값 알아보기
 */

const str = Object.prototype.toString.call("A");
console.log(`str type ? ${str}`);

const newStr = Object.prototype.toString.call(new String());
console.log(`newStr type ? ${newStr}`);

const num = Object.prototype.toString.call(1);
console.log(`num type ? ${num}`);

const newNum = Object.prototype.toString.call(new Number());
console.log(`newNum type ? ${newNum}`);

const myNan = Object.prototype.toString.call(NaN);
console.log(`myNan type ? ${myNan}`);

const myInfinity = Object.prototype.toString.call(Infinity);
console.log(`myInfinity type ? ${myInfinity}`);

const trueBoolean = Object.prototype.toString.call(true);
console.log(`trueBoolean type ? ${trueBoolean}`);

const falseBoolean = Object.prototype.toString.call(false);
console.log(`falseBoolean type ? ${falseBoolean}`);

const myUndefined = Object.prototype.toString.call(undefined);
console.log(`myUndefined type ? ${myUndefined}`);

const empty = Object.prototype.toString.call();
console.log(`empty type ? ${empty}`);

const arr = Object.prototype.toString.call([]);
console.log(`arr type ? ${arr}`);

const obj = Object.prototype.toString.call({});
console.log(`obj type ? ${obj}`);

const myNull = Object.prototype.toString.call(null);
console.log(`myNull type ? ${myNull}`);

const myDate = Object.prototype.toString.call(new Date());
console.log(`myDate type ? ${myDate}`);

const myMath = Object.prototype.toString.call(Math);
console.log(`myMath type ? ${myMath}`);

const myRegExp = Object.prototype.toString.call(/abc/d);
console.log(`myRegExp type ? ${myRegExp}`);

const func = Object.prototype.toString.call(function () {});
console.log(`func type ? ${func}`);

//=========================================================================

// typeCheck Function
function typeCheck(target) {
  return `전달받은 값의 타입은 = ${Object.prototype.toString
    .call(target)
    .slice(8, -1)}`;
}

console.log(typeCheck(undefined));
