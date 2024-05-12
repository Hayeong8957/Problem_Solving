// 1초마다 1~ 10까지 출력 -> Promise, async, await을 다 사용하여

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time))
  // Promise 생성자 함수 사용 법을 몰랐음
  // resolve, reject라는 두 개의 인수를 받음
  // 
}

async function printNumbers() {
  for(let i = 1; i <= 10; i++) {
    await delay(1000);
    console.log(i)
  }
}

printNumbers();