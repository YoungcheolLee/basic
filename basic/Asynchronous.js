/**
 * 비동기(asynchronous)란?
 * 자바스크립트는 기본적으로 싱글 스레드 방식으로 일처리를 한다.
 * 코드를 읽고 작업을 실행할때 코드가 작성된 순서대로 처리를 하는데 이를 동기(synchronous)적 방식이라 한다.
 * 동기적 방식은 먼저 실행된 코드가 다 수행될때까지 다음 작업을 블로킹(blocking)한다.
 * 작업이 가볍고 금방끝난다면 크게 문제가 없겠지만, 하나의 작업이 10초 ~ 1분 까지 걸리는 작업이 있다 가정한다면
 * 이전 작업이 끝나지 않았다면 블로킹(blocking) 되어 다음 작업이 수행되지 않는다.
 * 이러한 단점을 보안하기 위해 비동기(asynchronous)방식으로 처리가 가능하다.
 * 비동기(asynchronous) 방식은 동시에 여러 작업을 실행시킬 수 있다.
 * 즉, 먼저 작성된 코드의 결과를 기다리지 않아도 다음 코드를 실행 시킬 수 있는 것이다.
 */

/**
 * 일반적인 작업 수행방식
 * teskA 수행 > teskB 수행
 */

const tesk = () => {
  const teskA = () => {
    console.log("A tesk 실행");
  };

  const teskB = () => {
    console.log("B tesk 실행");
  };
  return teskA(), teskB();
};

tesk();

/**
 * 비동기(asynchronous) 방식 수행
 * teskA 함수에 setTimeout 을 사용해 2초 뒤 실행되게 했다.
 * 그럼 실행순서는 teskB가 가 실행되고 2초 후 teskA가 실행되게 되는 것이다.
 * teskA를 먼저 실행되지 않고 teskB가 먼저 실행되게 하는 것
 */

const asyncTesk = () => {
  const teskA = () => {
    setTimeout(() => {
      console.log("비동기 처리된 A tesk 실행");
    }, 2000);
  };

  const teskB = () => {
    console.log("B tesk 실행");
  };

  return teskA(), teskB();
};

asyncTesk();
